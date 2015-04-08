
angular.module('myApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home.html',
			
			
		})
		.when('/calculator', {
			templateUrl: 'calculator.html',
			controller: 'tipCtrl'
		})
		.when('/summary', {
			templateUrl: 'summary',
			controller: 'summaryCtrl'
		})
	}])
	.factory('info', function(){
		return {
			data: {
				price: 0,
				tax_p: 0,
				tip_p: 0,
				count: 0,
				tip_total: 0,
				subtotal: 0,
				tip: 0,
				avg: 0,
			}
		}
	})
	.controller('tipCtrl', function($scope, info){

		$scope.tip = 0;
		$scope.subtotal = 0;
		$scope.total = 0;
		

		$scope.calculate = function() {   

			$scope.tip = $scope.price * $scope.tip_p * 0.01;
			$scope.subtotal = $scope.price * $scope.tax_p * 0.01 + $scope.price; 
		    $scope.total = $scope.tip + $scope.subtotal;
		   	        
	    }
	   
	})
	.controller('summaryCtrl', function($scope, info){

		$scope.tip_total = 0; 
		$scope.count = 0;
		$scope.avg = 0;

		$scope.update = function() {

			$scope.avg = $scope.tip_total / $scope.count; 
			$scope.count = $scope.count + 1;
		    $scope.tip_total = $scope.tip_total + $scope.tip;
		}

	});



 

