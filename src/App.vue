<template>
  <div id="app">
   <Header :getCourses="getCourses" :courseIds="courseIds"/>
   <Table :coursesData="coursesData" />
   <div class="loader" v-if="showLoader">
   		<span>Loading..</span>
   </div>
  </div>
</template>
<script>
import { getCoursesInfo } from './services';
import Header from './components/Header/Header.vue';
import Table from './components/Table/Table.vue';
export default {
	components:{
		Header,
		Table
	},
	data:() => ({
		coursesData:[],
		showLoader:false,
		courseIds:''
	}),
	created(){
		const ids = localStorage.getItem('courseIds');
		if(ids){
			this.courseIds = ids;			
			this.getCourses(ids);	
		}
		
	},
	methods:{
		getCourses(ids){
			this.showLoader = true;
			getCoursesInfo(ids)
			.then(resp=>{
				if(resp && resp.data && resp.data.infos){
					this.coursesData = resp.data.infos;
					if(localStorage.getItem('courseIds') !== ids){
						localStorage.setItem('courseIds',ids)
					}
				}
			})
			.catch((err)=>{
				this.coursesData = [];
			})
			.finally(_=>{
				this.showLoader = false;
			})
		}
	}
}
</script>
<style type="text/css">
@import './App.css';
</style>
