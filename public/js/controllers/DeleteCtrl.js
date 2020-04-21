//public/js/controllers/DeleteCtrl.js

angular.module('DeleteCtrl',[]).controller('DeleteController',function($scope,$http){

    $scope.retrieve_data=function(){
       
        $http.get('/api/abouts').then(function(res){
            console.log(res);
            $scope.receive_data=res.data;
		});
    };
    
    
    $scope.delete_data=function(id){
        
        $http.delete('/api/abouts/'+id).then(function(res){
            alert("2");
            console.log(res);
        });

        $scope.retrieve_data();
    };

});