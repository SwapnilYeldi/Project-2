/**
 * job service
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.saveJob=function(job){
		return $http.post("http://localhost:8090/backend/savejob",job)
	}
	
	return jobService;
})