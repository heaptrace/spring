myapp.controller('EmpController',['Emp_Services','$scope',function(Emp_Services,$scope){
	
	$scope.clearRecord=function(){
		 
			  
			  $scope.emp.fname="";
			  $scope.emp.lname="";
			  $scope.emp.email="";
			  $scope.emp.phone="";
		  }  
	
	    $scope.save=function(){
		 var Employee={
               "firstName":$scope.emp.fname,
               "lastName":$scope.emp.lname,
               "email":$scope.emp.email,
               "phone":$scope.emp.phone
               };
		// alert("in save");
		 if($scope.sampleForm.$valid){
		 Emp_Services.save(Employee,function(data){
			
			alert("RECORD IS ADDED....");
			$scope.clearRecord();
		})
		 }else{alert("please fill proper data");}
		
	}
	   $scope.getAllRecord=function(){
			//alert("in get record")
			$scope.Employee=[];
			
			Emp_Services.query(function(data){
				
				$scope.Employee=data;
			});
		}
	   
	   $scope.deleteById=function(id){
		   if (confirm('Are you sure you want Delete Record?')){
		   
		   Emp_Services.remove({id:id},function(data){
			   $scope.getAllRecord();
		   });
		   }
		   else{alert("data is not deleted") }
	   }
}]);
