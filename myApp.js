
var app = angular.module('myApp', [])
	
app.controller('MyCtrl', function($scope){

	$scope.calculate = function() {   

	    $scope.tip = function (a, b) {
	        return a * b * 0.01;
	    }; 

	    $scope.subtotal = function (a, b) {
	    	return a * b * 0.01 + a;
	    };
    };

});


		


