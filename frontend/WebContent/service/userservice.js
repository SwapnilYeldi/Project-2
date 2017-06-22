/**
 * UserService for User module
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8090/backend/registration",user)
		
	}
	
	
	
	return userService;
	
})