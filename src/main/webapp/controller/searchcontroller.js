myapp.controller("search",function($scope,$http){
	alert("in serarch");
		$scope.Employee;
		$scope.name;
		$http({
	           method: "get",
	            url:'http://localhost:8080/SpringRestCrud/employees/search?id=200',
	            data:$scope.employee,
	            headers: {'Content-Type':'application/json'}
		
	       }).success(function (data,status) {
	    	  
	    	   //$scope.Employee =data;
	    	  // $scope.name=employee.name;
	    	   alert("sucess");
	    	   alert(JSON.stringify(data));
	       });
		
});




