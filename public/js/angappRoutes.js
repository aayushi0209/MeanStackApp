//public/js/angappRoutes.js
angular.module('angappRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider
		
		//home page
		.when('/home',{
			templateUrl:'views/home.html',
			controller:'HomeController'
		})
		
		//about us page
		.when('/about',{
			templateUrl:'views/about.html',
			controller:'AboutController'
		})

		//contact us page
		.when('/contact',{
			templateUrl:'views/contact.html',
			controller:'ContactController'
		})

		//add details page
		.when('/add',{
			templateUrl:'views/add.html',
			controller:'AddController'
		})
		
		//show details
		.when('/show',{
			templateUrl:'views/show.html',
			controller:'ShowController'
		})
		
		//update detaisl
		.when('/update',{
			templateUrl:'views/update.html',
			controller:'UpdateController'
		})
		.when('/update/:id',{
			templateUrl:'views/edit_update.html',
			controller:'UpdateController'
		})
		
		//delete data
		.when('/delete',{
			templateUrl:'views/delete.html',
			controller:'DeleteController'
		});
		
		$locationProvider.html5Mode(true);
}]);