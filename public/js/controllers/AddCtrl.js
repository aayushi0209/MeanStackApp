//public/js/controllers/AddCtrl.js

angular.module('AddCtrl',[]).controller('AddController',function($scope,$http){

	// /retrive and check whether phone no already exists or not->added now
	$scope.retrive_data=function(){
		$http.get('/api/abouts').then(function(res){
			alert("heyyy");
			//recieving data----------------------------------
			$scope.receive_data=res.data;
			// $scope.receive_data.($scope.verify_data());//for each looop

			// calling data insert function
			$scope.send_data();
		});
	};
	
	//add data to database
	$scope.send_data=function(){
		$http.post('/api/abouts',$scope.form_data).then(function(respo){

			// check_data();
			console.log(respo);
		})
	};

	$scope.verify_data=function(){

	};

});