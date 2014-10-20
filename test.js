var passes=true;
// Create exampleProj
$.ajax({
            url: '/projects',
            type: 'POST',
            data: { 'name': 'sample', 'end_date':new Date(1000)
            }, 
			success: function(project){
			if(project.name!='sample'){passes=false;}
			
			//signup mySampleUser1
$.ajax({
            url: '/signup',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            },
			success: function(user){
				if(user.authentication.username!='mySampleUser1'){passes=false; };
				if(user.authentication.password!='123'){passes=false; };
				//login user 1
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            },
			success: function(user){
				if(user.authentication.username!='mySampleUser1'){passes=false};
				if(user.authentication.password!='123'){passes=false};
				// add mySampleUser1 info		
$.ajax({
            url: '/users',
            type: 'PUT',
            data: { 'location': 'place2', 'availability': ['M10','W15'], 'grade': 1, 'skills':['fun']
            },
			success: function(user){
				if(user.info.location!='place2'){passes=false};
				if(user.info.skills.length!=1){passes=false};
				if(user.info.availability.length!=2){passes=false};
				//if(user.projects[0].grade!=1){passes=false};
				// Add mySampleUser1 to sample
				
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT',
			success: function(result){
				if(result!=1){passes=false}
				// logout mySampleUser 1		
$.ajax({
            url: '/logout',
            type: 'POST',
			success: function(){
				
			// signup mySampleUser 2		
$.ajax({
            url: '/signup',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            },
			success: function(user){
				if(user.authentication.username!='mySampleUser2'){passes=false};
				if(user.authentication.password!='123'){passes=false};
				// login mySampleUser 2
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            },
			success: function(user){
				if(user.authentication.username!='mySampleUser2'){passes=false};
				if(user.authentication.password!='123'){passes=false};
				// Set info for mySampleUser 2
$.ajax({
            url: '/users',
            type: 'PUT',
            data: { 'location': 'place2', 'availability': ['M11','W15'], 'grade': .9
            },
			success: function(user){
				if(user.info.location!='place2'){passes=false};
				if(user.info.availability.length!=2){passes=false};
				//if(user.projects[0].grade!=.9){passes=false};
				// Add mySampleUser2 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT',
			success:function(result){
				if(result!=1){passes=false}
			// logout mySampleUser 2		
$.ajax({
            url: '/logout',
            type: 'POST',
			success:function(){
				// signup mySampleUser 3		
$.ajax({
            url: '/signup',
            type: 'POST',
            data: { 'username': 'mySampleUser3',
                    'password': '123' 
            },
			success: function(user){
				if(user.authentication.username!='mySampleUser3'){passes=false};
				if(user.authentication.password!='123'){passes=false};
				// login mySampleUser 3
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser3',
                    'password': '123' 
            },
			success: function(user){
				if(user.authentication.username!='mySampleUser3'){passes=false};
				if(user.authentication.password!='123'){passes=false};
			// Set info for mySampleUser 3
$.ajax({
            url: '/users',
            type: 'PUT',
            data: { 'location': 'place1', 'availability': ['M10','W15'], 'grade': 1
            },
			success: function(user){
				if(user.info.location!='place1'){passes=false};
				if(user.info.availability.length!=2){passes=false};
				//if(user.projects[0].grade!=1){passes=false};
				// Add mySampleUser3 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT',
			success: function(){
				// get list of mySampleUsers		
$.ajax({
            url: '/projects/sample/users',
            type: 'GET',
			success: function(result){
				if(result.length!=3){passes=false}
				// filter without any inputs
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET',
			success: function(result){
				if(result.length!=3){passes=false}
				//filter with a weighted location
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET',
			data: {'location':10},
			success: function(result){
				if(result.length!=3){passes=false}
				//filter with a weighted skill and desired skillset
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET',
			data: {'skills':10,'skillset':['fun']},
			success: function(result){
				if(result.length!=3){passes=false}
				// Delete sample	
		$.ajax({
            url: '/projects/sample',
            type: 'DELETE',
			success: function(result){
				if(!result.success){passes=false}
				//Delete mySampleUser 3
$.ajax({
            url: '/users',
            type: 'DELETE',
			success: function(result){
				if(!result.success){passes=false}
				// login mySampleUser 1
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            }, success: function(){
			// delete mySampleUser 1	
$.ajax({
            url: '/users',
            type: 'DELETE',
			success: function(result){
				if(!result.success){passes=false}
				// login mySampleUser 2
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            }, success: function(){
				// delete mySampleUser 2	
$.ajax({
            url: '/users',
            type: 'DELETE',
            success: function(result){
				if(!result.success){passes=false;}
				console.log("ALL TESTS PASSED?: "+passes);}
        });
			}
        });

			}
        });

			}
        });

			}
        });

			}
        });

			}
        });	
		
			}
        });		
		
			}
        });

			}
        });	

			}
        });
		
			}
        });
		
			}
        });

			}
		});

			}
        });


			}
        });

			}
        });

			}
        });

			}
		});

			}
        });

			}
        });

			}
        });

			}
        });

			}
		});

			}
});
		
