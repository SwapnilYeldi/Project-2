/**
 * UserService for User module
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8090/backend/registration",user)
		
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8090/backend/login",user)
		
	}
	
	userService.logout=function(){
		return $http.get("http://localhost:8090/backend/logout")
	}
	
	userService.getUserByUsername=function(){
		return $http.get("http://localhost:8090/backend/getuserdetails")
	}
	
	userService.updateUserProfile=function(user){
		return $http.put("http://localhost:8090/backend/updateprofile",user)
	}
	
	
	
	return userService;
	
})