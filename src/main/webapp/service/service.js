//employee service is service name
//factory method return data store in data varible
/*myapp.factory('Emp_Services', ['$resource', function ($resource) {
    return {
        data:$resource('http://localhost:8080/SpringRestCrud/api/employees/:id',{id:'@id'},{
        	 query:{method: 'GET', params: {},isArray: true },
             save:{method: 'POST' },     
             remove:{method:'DELETE'},
        })        
    };

  }]);*/
myapp.factory('Emp_Services',['$resource',function ($resource) {
    return $resource('http://localhost:8080/SpringRestCrud/api/employees/:id',{id:'@id'},{
        	 query:{method: 'GET', params: {},isArray:true},
             save:{method: 'POST' },     
             remove:{method:'DELETE'},
             update:{method:'PUT'}
             get:{method:''}
        })        
    

  }]);


