<template>
  <div class="data-table">
	<div class="table-head">
		<span>Course</span>
		<span>Rating</span>
		<span>Review</span>
		<span>Students</span>
	</div>
	<div class="table-row" v-for="(course,i) in coursesData" :key="i">
		<span>{{course.title}}</span>
		<span>{{course.avg_rating}}</span>
		<span>{{course.num_reviews}}</span>
		<span>{{course.num_subscribers}}</span>
	</div>
  </div>
</template>
<script>
	export default{
		props:{
			coursesData:Array
		}
	}
</script>
<style>
	@import './Table.css';
</style>
