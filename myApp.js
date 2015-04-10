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
			controller: 'tipCtrl'
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
				total:0
			}
		}
	})
	.controller('tipCtrl', function($scope, $route, info, $location){

		$scope.tip = info.data.tip;
		$scope.subtotal = info.data.subtotal;
		$scope.total = info.data.total;

		$scope.tip_total = info.data.tip_total;
		$scope.count = info.data.count;
		$scope.avg = info.data.avg;
		
		$scope.calculate = function() {   

			info.data.tip = $scope.price * $scope.tip_p * 0.01;
			info.data.subtotal = $scope.price * $scope.tax_p * 0.01 + $scope.price; 
		    info.data.total = info.data.tip + info.data.subtotal

		    info.data.tip_total = info.data.tip_total + info.data.tip;
		    info.data.count = info.data.count + 1;
		    info.data.avg = info.data.tip_total / info.data.count; 

		    $location.path('calculator');
		    $route.reload();

	    }

	    $scope.reset = function(){
	    	info.data.tip=0;
	    	info.data.subtotal=0;
	    	info.data.total=0;
			info.data.count = 0;
			info.data.tip_total = 0;
			info.data.avg = 0;
			this.update();
		}

		$scope.update = function(){
			$scope.tip = info.data.tip;
			$scope.subtotal = info.data.subtotal;
			$scope.total = info.data.total;
			$scope.tip_total = info.data.tip_total;
			$scope.count = info.data.count;
			$scope.avg = info.data.avg;
		}

	   
	});



 

