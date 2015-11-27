//var app=angular.module("myapp",[]);

myapp.controller("employeelist",function($scope,$http){
	

	$scope.getemployees=function(){
		 $scope.Employee = [];
       
		 $http({
           method: "get",
            url:'http://localhost:8080/SpringRestCrud/employees',
            data:$scope.employeeList,
          
           
			headers: {'Content-Type':'application/json'}
			

       }).success(function (data,status) {
    	   
           //alert("success");
          $scope.Employee =data;
           
           //alert(JSON.stringify(data));
           
       }).error(function (error) {
           //Showing error message 
           alert("failed");
           $scope.status = 'Unable to retrieve products' + error.message;
       });;
        
      
  }
	$scope.deleteEvent=function(id){
		//alert("ARE YOU SURE DELETE");
		if (confirm('Are you sure you want Delete Record?')){ 
       var request = $http({
           method: "delete",
            url:'http://localhost:8080/SpringRestCrud/employees/'+id,
            data:{},
          
           
			headers: {'Content-Type':'application/json'}
			
       }).success(function (data,status) { 
    
    	   $scope.getemployees(); });
		}
		else{alert(" Record not Delelted");
	}
}
});


