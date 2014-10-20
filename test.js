//TODO: DELAY THE AJAX CALLS
// Create exampleProj
$.ajax({
            url: '/projects',
            type: 'POST',
            data: { 'name': 'sample', 'end_date':new Date(1000)
            }
});
		
//signup mySampleUser1
$.ajax({
            url: '/signup',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            }
});
//login user 1
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            }
        });
// add mySampleUser1 info		
$.ajax({
            url: '/users',
            type: 'POST',
            data: { 'location': 'place2', 'availibility': ['M10','W15'], 'grade': 1, 'skills':['fun']
            }
        });
// Add mySampleUser1 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT'
        });
// logout mySampleUser 1		
$.ajax({
            url: '/logout',
            type: 'POST',
        });

// signup mySampleUser 2		
$.ajax({
            url: '/signup',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            }
});

// login mySampleUser 2
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            }
        });
// Set info for mySampleUser 2
$.ajax({
            url: '/users',
            type: 'POST',
            data: { 'location': 'place2', 'availibility': ['M11','W15'], 'grade': .9
            }
        });
// Add mySampleUser2 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT'
        });
// logout mySampleUser 2		
$.ajax({
            url: '/logout',
            type: 'POST',
        });

// signup mySampleUser 3		
$.ajax({
            url: '/signup',
            type: 'POST',
            data: { 'username': 'mySampleUser3',
                    'password': '123' 
            }
});


// login mySampleUser 3
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            }
        });
// Set info for mySampleUser 3
$.ajax({
            url: '/users',
            type: 'POST',
            data: { 'location': 'place1', 'availibility': ['M10','W15'], 'grade': 1
            }
        });
		
// Add mySampleUser3 to sample
$.ajax({
            url: '/projects/sample/users',
            type: 'PUT'
        });
		
// get list of mySampleUsers		
$.ajax({
            url: '/projects/sample/users',
            type: 'GET'
        });	
// filter without any inputs
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET'
        });
//filter with a weighted location
$.ajax({
            url: '/projects/smaple/users/filter',
            type: 'GET',
			data: {'location':10,}
        });		
		
//filter with a weighted skill and desired skillset
$.ajax({
            url: '/projects/sample/users/filter',
            type: 'GET',
			data: {'skills':10,'skillset':['fun']}
        });	
		
// Delete sample	
		$.ajax({
            url: '/projects/sample',
            type: 'DELETE'
        });

//Delete mySampleUser 3
$.ajax({
            url: '/users',
            type: 'DELETE'
        });
// login mySampleUser 1
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser1',
                    'password': '123' 
            }
        });
// delete mySampleUser 1	
$.ajax({
            url: '/users',
            type: 'DELETE'
        });
// login mySampleUser 2
$.ajax({
            url: '/login',
            type: 'POST',
            data: { 'username': 'mySampleUser2',
                    'password': '123' 
            }
        });
// delete mySampleUser 2	
$.ajax({
            url: '/users',
            type: 'DELETE',
            success: function() { console.log("help"); }
        });