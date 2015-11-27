//var myapp=angular.module("myapp",[]);

var myapp = angular.module('myapp',['ngRoute','ngResource']);

myapp.config(['$routeProvider', function ($routeProvider) {
	 $routeProvider.when('', {templateUrl:'index.jsp', controller:''});
	 $routeProvider.when('/addemployee', {templateUrl:'views/Register.html', controller:'EmpController'});
	 $routeProvider.when('/employees', {templateUrl:'views/EmployeeList.html', controller:'EmpController'});
	 $routeProvider.when('/searchemployee', {templateUrl:'views/searchemp.html', controller:'search'});
	
}]);

/*myapp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when('/', {
       templateUrl :'index.jsp',
       controller  : ''
   }).
   when('/addemployee', {
      templateUrl:'views/Register.html',
      controller:'register'
   }).
   
   when('/viewemployee', {
      templateUrl:'views/EmployeeList.html',
      controller:'employeelist'
   });
   
//   otherwise({
//      redirectTo:'/index.jsp'
//   });
}])*/
//$routeProvider.when('/dummy', {templateUrl: 'partials/dummy.html', controller: 'DummyCtrl'});