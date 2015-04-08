
angular.module('myApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home.html',
			
		})
		.when('/calculator', {
			templateUrl: 'calculator.html',
			controller: 'MyCtrl'
		})
		.when('/summary', {
			templateUrl: 'summary',
			controller: 'MyCtrl'
		})
	}])
	.controller('MyCtrl', function($scope){

		$scope.Math = window.Math;

		$scope.tip_total = 0; 
		$scope.count = 0;
		$scope.tip = 0;
		$scope.subtotal = 0;
		$scope.total = 0;
		$scope.avg = 0;

		$scope.calculate = function() {   

			$scope.tip = $scope.price * $scope.tip_p * 0.01;
			$scope.subtotal = $scope.price * $scope.tax_p * 0.01 + $scope.price;
		    $scope.count = $scope.count + 1;
		    $scope.tip_total = $scope.tip_total + $scope.tip;
		    $scope.total = $scope.tip + $scope.subtotal;
		    $scope.avg = $scope.tip_total / $scope.count; 
	        
	    };

	   
	});


		


