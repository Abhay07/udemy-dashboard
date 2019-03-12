import axios from 'axios';
export function getCoursesInfo(ids) {
	let url = 'http://ec2-18-219-109-248.us-east-2.compute.amazonaws.com:8080/getCourseInfoWeb';
	if(ids){
		url+= ('?courseIds='+ids)
	}
	return axios.get(url);
}