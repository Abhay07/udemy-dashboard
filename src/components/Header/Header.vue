<template>
  <div class="header">
  	<div class="logo-container">
  		<img src="./../../assets/udemy-logo.png" alet="Udemy" />
	</div>
	<div class="input-container">
   			<input type="text" placeholder="CourseIds" class="course-input" v-on:keyup.enter="fetchCourses" @input="resetError" :value="courseIds"/>
   			<div class="error" v-if="validationError">Invalid courseIds</div>
	</div>

  </div>
</template>
<script>
	export default{
		props:{
			getCourses:Function,
			courseIds:String
		},
		data:()=>({
			validationError:false
		}),
		methods:{
			fetchCourses(e){
				const text = e.target.value;
				const regExp = /^[\d,]+$/;
				if(text.match(regExp)){
					this.getCourses(text);
				}
				else{
					this.validationError = true;
				}
			},
			resetError(){
				this.validationError = false;
			}
		}
	}
</script>
<style>
	@import './Header.css';
</style>
