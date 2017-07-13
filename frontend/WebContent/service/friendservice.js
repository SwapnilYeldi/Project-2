/**
 * FriendService
 */

app.factory('FriendService',function($http){
	var friendService={};
	
	friendService.suggestedUsers=function(){
		return $http.get("http://localhost:8090/backend/suggesteduserslist")
	}
	
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:8090/backend/friendrequest/"+toUsername);
	}
	
	friendService.pendingRequests=function(){
		return $http.get("http://localhost:8090/backend/pendingrequests");
	}
	
	friendService.updatePendingRequest=function(fromId,status){
		return $http.put("http://localhost:8090/backend/updatependingrequest/"+fromId+"/"+status);
	}
	
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8090/backend/listoffriends");
	}
	
	return friendService;
})
