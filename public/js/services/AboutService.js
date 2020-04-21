
angular.module('AboutService',[]).factory('About',['$http',function($http) {
	return{
		//call to get the data
		get:function(){
			return $http.get('/api/abouts');
		},
		//thsese will work when the more API routesare defined on the Nod eside of things
		//call to delete the data 
		delete:function(){
			return $http.delete('/api/abouts'+id);
		} 
	}
}]);