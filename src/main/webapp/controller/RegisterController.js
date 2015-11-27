//var app=angular.module("myapp",[]);

myapp.controller("register",function($scope,$http){

  $scope.welcome=function(){
 //  alert("inregister controller");
     if($scope.sampleForm.$valid){
    	
       var request = $http({
           method: "POST",
            url:'http://localhost:8080/SpringRestCrud/employees/create',
            data:{
                
                "firstName":$scope.emp.fname,
                "lastName":$scope.emp.lname,
                "email":$scope.emp.email,
                "phone":$scope.emp.phone
                },
           
			headers: {'Content-Type':'application/json'}
			

       }).success(function (data) {
           alert(" Data sucessfully submited");
    	   location.reload();
           //alert(data);
       }).error(function (error) {
          
           alert("failed");
           $scope.status = 'Unable to retrieve products' + error.message;
       });;
        
      
     }
     else
    	 alert("please fill proper data")
  }
  $scope.clear=function(){
	  
	  $scope.emp.fname="";
	  $scope.emp.lname="";
	  $scope.emp.email="";
	  $scope.emp.phone="";
  }
});


