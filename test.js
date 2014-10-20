
// Create exampleProj
$.ajax({
            url: '/projects',
            type: 'POST',
            data: { 'name': 'sample', 'end_date':new Date(1000)
            }, 
			success: function(){
			//signup mySampleUser1
$.ajax({
            url: '/signup',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            },
			success: function(){
				//login user 1
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            },
			success: function(){
				// add mySampleUser1 info		
$.ajax({
            url: '/users',
            type: 'PUT',
            data: { 'location': 'place2', 'availibility': ['M10','W15'], 'grade': 1, 'skills':['fun']
            },
			success: function(){
				console.log('updated info');
				// Add mySampleUser1 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT',
			success: function(){
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
			success: function(){
				// login mySampleUser 2
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            },
			success: function(){
				// Set info for mySampleUser 2
$.ajax({
            url: '/users',
            type: 'PUT',
            data: { 'location': 'place2', 'availibility': ['M11','W15'], 'grade': .9
            },
			success: function(){
				// Add mySampleUser2 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT',
			success:function(){
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
			success: function(){
				// login mySampleUser 3
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser3',
                    'password': '123' 
            },
			success: function(){
			// Set info for mySampleUser 3
$.ajax({
            url: '/users',
            type: 'PUT',
            data: { 'location': 'place1', 'availibility': ['M10','W15'], 'grade': 1
            },
			success: function(){
				// Add mySampleUser3 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT',
			success: function(){
				// get list of mySampleUsers		
$.ajax({
            url: '/projects/sample/users',
            type: 'GET',
			success: function(){
				// filter without any inputs
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET',
			success: function(){
				//filter with a weighted location
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET',
			data: {'location':10},
			success: function(){
				//filter with a weighted skill and desired skillset
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET',
			data: {'skills':10,'skillset':['fun']},
			success: function(){
				// Delete sample	
		$.ajax({
            url: '/projects/sample',
            type: 'DELETE',
			success: function(){
				//Delete mySampleUser 3
$.ajax({
            url: '/users',
            type: 'DELETE',
			success: function(){
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
			success:function(){
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
            success: function() { console.log("done!"); }
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
		
