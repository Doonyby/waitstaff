
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
				total: 0,
			}
		}
	})
	.controller('tipCtrl', function($scope, info){

		$scope.tip = info.data.tip;
		$scope.subtotal = info.data.subtotal;
		$scope.total = info.data.total;
		

		$scope.calculate = function() {   

			info.data.tip = $scope.price * $scope.tip_p * 0.01;
			info.data.subtotal = $scope.price * $scope.tax_p * 0.01 + $scope.price; 
		    info.data.total = $scope.tip + $scope.subtotal;
		   	        
	    }
	   
	})
	.controller('summaryCtrl', function($scope, info){

		$scope.tip_total = info.data.tip_total; 
		$scope.count = info.data.count;
		$scope.avg = info.data.avg;

		$scope.update = function() {

			info.data.avg = $scope.tip_total / $scope.count; 
			info.data.count = $scope.count + 1;
		    info.data.tip_total = $scope.tip_total + $scope.tip;
		}

	});



 

