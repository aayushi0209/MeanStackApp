//public/js/controller/ShowCtrl.js

angular.module('ShowCtrl',[]).controller('ShowController',function($scope,$http){
    
    $scope.retrieve_data=function(){

		$http.get('/api/abouts').then(function(res){
			console.log(res);
            $scope.recieve_data=res.data;
		});
	};
});  