/**
 *blogpostservice
 */

app.factory('BlogPostService',function($http){
	var blogPostService={}
	
	blogPostService.saveBlog=function(blogPost){
		return $http.post("http://localhost:8090/backend/saveblogpost",blogPost)
	}
	
	return blogPostService;
})