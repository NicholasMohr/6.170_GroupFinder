var passes=true;

// Create Example Project
$.ajax({
    url: '/projects',
    type: 'POST',
    data: {
    	'name': 'sample',
    	'end_date': new Date(1000)
    }, success: function(project) {
		if (project.name != 'sample') {
			passes=false;
			console.log('/projects POST: name instantiated -- FAILED');
		} else {
			console.log('/projects POST: name instantiated -- PASSED');
		}
// 	}
// });
			
// Signup Sample User
$.ajax({
    url: '/signup',
    type: 'POST',
    data: {
    	'username': 'test1',
        'password': '123' 
    }, success: function(user) {
		if (user.authentication.username != 'test1') {
			passes=false;
			console.log('/signup POST: username instantiated -- FAILED');
		} else {
			console.log('/signup POST: username instantiated -- PASSED');
		};
		if (user.authentication.password != '123') {
			passes=false;
			console.log('/signup POST: password instantiated -- FAILED');
		} else {
			console.log('/signup POST: password instantiated -- PASSED');
		};
// 	}
// });

// Logout Sample User		
$.ajax({
    url: '/logout',
    type: 'POST',
	success: function(user) {
		console.log('/logout POST: redirected to index -- PASSED')
// 	}
// });

// Login User
$.ajax({
    url: '/login',
    type: 'POST',
    data: {
    	'username': 'test1',
        'password': '123' 
    }, success: function (user) {
		if(user.authentication.username != 'test1') {
			passes=false;
			console.log('/login POST: successful login and username retreival -- FAILED');
		} else {
			console.log('/login POST: successful login and username retreival -- PASSED');
		};
		if (user.authentication.password != '123') {
			passes=false;
			console.log('/login POST: successful login and password retreival -- FAILED');
		} else {
			console.log('/login POST: successful login and password retreival -- PASSED');
		};
// 	}
// });

// Add Test User 1 Information		
$.ajax({
    url: '/users',
    type: 'PUT',
    data: {
    	'location': 'place2',
    	'availability': ['M10','W15'],
    	'skills': ['fun']
    }, success: function(user) {
		if (user.info.location != 'place2') {
			passes=false;
			console.log('/users PUT: addition of location to user info -- FAILED');
		} else {
			console.log('/users PUT: addition of location to user info -- PASSED');
		};
		if (user.info.skills.length != 1) {
			passes=false;
			console.log('/users PUT: addition of availability to user info -- FAILED');
		} else {
			console.log('/users PUT: addition of availability to user info -- PASSED');
		};
		if (user.info.availability.length != 2) {
			passes=false;
			console.log('/users PUT: addition of skills to user info -- FAILED');
		} else {
			console.log('/users PUT: addition of skills to user info -- PASSED');
		};
// 	}
// });

// Add Sample User to Sample Project	
$.ajax({
    url: '/projects/sample/users',
    type: 'PUT',
	data: {
		'desired_grade': 1,
		'dedication':1,
		'interaction':1
	}, success: function(result) {
		if (!result.success) {
			passes=false;
			console.log('/projects/sample/users PUT: added user to project -- PASSED');
		} else {
			console.log('/projects/sample/users PUT: added user to project -- FAILED');
		}
// 	}
// });

// Logout Sample User		
$.ajax({
    url: '/logout',
    type: 'POST',
    success: function(user) {
    // }
// });

// Signup Sample User 2		
$.ajax({
    url: '/signup',
    type: 'POST',
    data: {
    	'username': 'test2',
        'password': '123' 
    }, success: function(user) {
//     },
// });

// Set Test User 2 Info
$.ajax({
    url: '/users',
    type: 'PUT',
    data: {
    	'location': 'place2',
    	'availability': ['M11','W15']
    }, success: function(user) {
		if (user.info.location != 'place2') {
			passes=false;
			console.log('/users POST: set test user 2 location -- FAILED')
		} else {
			console.log('/users POST: set test user 2 location -- PASSED')
		};
		if (user.info.availability.length != 2) {
			passes=false;
			console.log('/users POST: set test user 2 availability -- FAILED')
		} else {
			console.log('/users POST: set test user 2 availability -- PASSED')
		};
// 	}
// });

// Add Test User 2 to Sample Project
$.ajax({
    url: '/projects/sample/users',
    type: 'PUT',
	data: {
		'desired_grade': .9,
		'dedication': .1,
		'interaction': 1
	}, success: function(result) {
		if (!result.success) {
			passes=false;
			console.log('/projects/sample/users PUT: added test user 2 to sample project -- FAILED');
		} else {
			console.log('/projects/sample/users PUT: added test user 2 to sample project -- PASSED');	
		}
// 	}
// });

// Logout Test User 2	
$.ajax({
    url: '/logout',
    type: 'POST', 
    success: function(user) {
// });

// Signup Test User 3
$.ajax({
    url: '/signup',
    type: 'POST',
    data: { 'username': 'test3',
            'password': '123'
    }, success: function(user) {
    // }
// });

// Set Test User 3 Information
$.ajax({
    url: '/users',
    type: 'PUT',
    data: {
    	'location': 'place1',
    	'availability': ['M10','W15']
   	}, success: function(user) {
    // }
// });

// Add Test User 3 to Sample Project
$.ajax({
    url: '/projects/sample/users',
    type: 'PUT',
	data: {
		'desired_grade': 1,
		'dedication':1,
		'interaction':1
	}, success: function(user) {
	// }
// });

// Get List of Test Users for Sample Project
$.ajax({
    url: '/projects/sample/users',
    type: 'GET',
	success: function(result) {
		if (result.length!=3) {
			passes=false;
			console.log("/projects/sample/users GET: get list of sample users -- FAILED");
		} else {
			console.log("/projects/sample/users GET: get list of sample users -- PASSED");
		}
	// }
// });

// Filter with No Inputs
$.ajax({
    url: '/projects/sample/users/filter',
    type: 'GET',
	success: function(result) {
		if (result.length != 3) {
			passes=false;
			console.log("/projects/sample/users/filter GET: filter with no inputs -- FAILED");
		} else {
			console.log("/projects/sample/users/filter GET: filter with no inputs -- PASSED");
		}
	// }
// });

// Filter with Weighted Location
$.ajax({
    url: '/projects/sample/users/filter',
    type: 'GET',
	data: {
		'location':10
	}, success: function(result) {
		if (result.length != 3) {
			passes=false;
			console.log("/projects/sample/users/filter GET: filter with location input -- FAILED");
		} else {
			console.log("/projects/sample/users/filter GET: filter with location input -- PASSED");
		}
	// }
// });

// Filter with Weighted Skill and Desired Skillset
$.ajax({
    url: '/projects/sample/users/filter',
    type: 'GET',
	data: {
		'skills':10,
		'skillset': ['fun']
	}, success: function(result) {
		if (result.length != 3) {
			passes=false;
			console.log("/projects/sample/users/filter GET: filter with weighted skill and desired skillset -- FAILED");
		} else {
			console.log("/projects/sample/users/filter GET: filter with weighted skill and desired skillset -- PASSED");
		}
	// }
// });

// Delete Sample Project
$.ajax({
    url: '/projects/sample',
    type: 'DELETE',
	success: function(result) {
		if (!result.success) {
			passes=false;
			console.log("/projects/sample DELETE: deleted sample project -- FAILED");
		} else {
			console.log("/projects/sample DELETE: deleted sample project -- PASSED");
		}
	// }
// });

// Delete Test User 3
$.ajax({
    url: '/users',
    type: 'DELETE',
	success: function(result){
		if (!result.success) {
			passes=false;
			console.log("/users DELETE: deleted test user -- FAILED");
		} else {
			console.log("/users DELETE: deleted test user -- PASSED");
		}
	// }
// });
 
// Login to Test User 1
$.ajax({
    url: '/login',
    type: 'POST',
    data: {
    	'username': 'test1',
        'password': '123' 
    }, success: function(user) {
//     }
// });

// Delete Test User 1	
$.ajax({
    url: '/users',
    type: 'DELETE', 
    success: function(user) {
// });

// Login Test User 2
$.ajax({
    url: '/login',
    type: 'POST',
    data: { 'username': 'test2',
            'password': '123'
    }, success: function(user) {
//     }
// });

// Delete Test User 2	
$.ajax({
    url: '/users',
    type: 'DELETE',
    success: function(user) {
// });

console.log("ALL TESTS PASSED?: "+passes);

}}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); }}); 