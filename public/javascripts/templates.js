(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['edit-info'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div data-info-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <input type=\"text\" value=\""
    + escapeExpression(((helper = (helper = helpers.existingInfo || (depth0 != null ? depth0.existingInfo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"existingInfo","hash":{},"data":data}) : helper)))
    + "\" />\n  <button class=\"edit-button\">Edit</button>\n  <button class=\"reset-button\">Reset</button>\n</div>\n";
},"useData":true});
templates['index'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"homepage\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"index_container\">\n      <div class=\"col-sm-12\">\n      	<div class=\"center\" id=\"index_button_container\">\n	        <h3>Welcome!</h3>\n			    <p>You must be logged in to continue.</p>\n			    <button id=\"login-btn\">Log In</button>\n			    <button id=\"signup-btn\">Sign Up</button>\n		    </div>\n      </div>\n    </div>\n\n  </div>\n</div>";
  },"useData":true});
templates['info'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"info\" data-info-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n  <p>"
    + escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n  <a href=\"#\" class=\"edit-info\">Edit</a>\n</div>";
},"useData":true});
templates['login'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <div class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"login\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <a style=\"float: right\" href=\"#\" id=\"home-link\">Home</a>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"login_container\">\n\n      <div class=\"col-sm-6\">\n        <div class=\"center\" id=\"login_form_container\">\n          <form id=\"login-form\">\n            <h4>Login</h4>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div>Username: <input type=\"text\" name=\"username\" required /></div>\n            <div>Password: <input type=\"password\" name=\"password\" required /></div>\n            <input type=\"submit\" />\n          </form>\n        </div>\n      </div>\n\n      <div class=\"col-sm-6\">\n        <div class=\"center\" id=\"login_form_container\">\n          <h4><button id=\"signup-btn\">Sign Up</button></h4>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['modal'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"modal fade\" id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.authentication : depth0)) != null ? stack1.username : stack1), depth0))
    + "_info\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"user_info_lab\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <h4 class=\"modal-title\" id=\"join_project_modal_label\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.authentication : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p><b>Name:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n        <p><b>Email:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.email : stack1), depth0))
    + "</p>\n        <p><b>Phone Numer:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.phone : stack1), depth0))
    + "</p>\n        <p><b>Location:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + "</p>\n        <p><b>Availability:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), depth0))
    + "</p>\n        <p><b>Skills:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + "</p>\n        <p><b>Timing:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.timing : stack1), depth0))
    + "</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['new-project'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"new-project\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"home-link\">Home</a><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"new_project_container\">\n      <div class=\"col-sm-12 center\">\n\n        <div class=\"row\">\n          <h3 class=\"center\">Create New Project</h3>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"new-proj-info\" data-info-id=\"name\">\n            <b>Name:</b> <br>\n            <input class=\"\" type=\"text\" placeholder=\"ex. 6.170 Project 3\" />\n          </div>\n          <div class=\"new-proj-info\" data-info-id=\"end_date\">\n            <b>End Date:</b> <br>\n            <input type=\"date\" />\n          </div>\n        </div>\n\n        <div class=\"row center\">\n          <button class=\"new-project-create\">Create</button>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>";
  },"useData":true});
templates['projects'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "              <tr>\n                <td>"
    + escapeExpression(lambda((data && data.index), depth0))
    + "</td>\n                <td><a class=\"user_info\" data-toggle=\"modal\" data-target=\"#"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.authentication : depth0)) != null ? stack1.username : stack1), depth0))
    + "_info\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.authentication : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a></td>\n                <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + "</td>\n              </tr>\n";
  stack1 = this.invokePartial(partials.modal, '              ', 'modal', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div id=\"project\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"home-link\">Home</a><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"project_container\">\n\n      <div id=\"project_panel\" class=\"col-sm-4\">\n\n        <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n        <p>\n          <b>Due Date:</b> <br>\n          "
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.end_date : stack1), {"name":"date","hash":{},"data":data})))
    + "\n        </p>\n\n        <form class = \"projectFilter\">\n          <p><span style=\"float:left\"><b>Low</b></span><span style=\"float:right\"><b>High</b></span></p>\n          <p>Location</p>\n          <input class=\"weight\" type=\"range\" data-name=\"location\" min=\"0\" max=\"10\">\n          <p>Availability</p>\n          <input class=\"weight\" type=\"range\" data-name=\"availability\" min=\"0\" max=\"10\">\n          <p>Desired Grade</p>\n          <input class=\"weight\" type=\"range\" data-name=\"desired_grade\" min=\"0\" max=\"10\">\n          <p>Interaction</p>\n          <input class=\"weight\" type=\"range\" data-name=\"interaction\" min=\"0\" max=\"10\">\n          <p>Dedication</p>\n          <input class=\"weight\" type=\"range\" data-name=\"dedication\" min=\"0\" max=\"10\">\n          <p>Timing</p>\n          <input class=\"weight\" type=\"range\" data-name=\"timing\" min=\"0\" max=\"10\">\n          <input type=\"submit\" value=\"Filter\">\n        </form>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <h1>Members</h1>\n          <table class=\"table\">\n            <tr>\n              <th>Rank</th>\n              <th>Username</th>\n              <th>Location</th>\n            </tr>\n";

  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.users : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </table>\n      </div>\n\n    </div>\n  </div>\n\n</div>";
},"usePartial":true,"useData":true});
templates['signup'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <div class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"signup\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <a style=\"float: right\" href=\"#\" id=\"home-link\">Home</a>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"login_container\">\n\n      <div class=\"col-sm-6\">\n        <div class=\"center\" id=\"login_form_container\">\n          <form id=\"signup-form\">\n            <h4>Signup</h4>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div>Username: <input type=\"text\" name=\"username\" required /></div>\n            <div>Password: <input type=\"password\" name=\"password\" required /></div>\n            <div>Confirm Password: <input type=\"password\" name=\"confirm\" required /></div>\n            <input type=\"submit\" /> \n          </form>\n        </div>\n      </div>\n\n      <div class=\"col-sm-6\">\n        <div class=\"center\" id=\"login_form_container\">\n          <h4><button id=\"login-btn\">Log In</button></h4>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['user-info'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div id=\"user\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"home-link\">Home</a><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    \n    <div class=\"row\" id=\"user_info_container\">\n\n      <div class=\"row\">\n        <h3 class=\"center\">Your Info</h3>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div class=\"center\">\n            <div class=\"info\" data-info-id=\"name\">\n              <b>Name:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.name : stack1), depth0))
    + " <br>\n              <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" />\n            </div>\n            <div class=\"info\" data-info-id=\"email\">\n              <b>Email:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.email : stack1), depth0))
    + " <br>\n              <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" />\n            </div>\n            <div class=\"info\" data-info-id=\"phone\">\n              <b>Phone:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.phone : stack1), depth0))
    + " <br>\n              <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.phone : stack1), depth0))
    + "\" />\n            </div>\n            <div class=\"info\" data-info-id=\"location\">\n              <b>Location:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + " <br>\n              <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + "\" />\n            </div>\n            <div class=\"info\" data-info-id=\"availability\">\n              <b>Availability:</b> <br> <i>comma seperated e.g. R10,N11,M10</i> <br> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), depth0))
    + " <br>\n              <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), depth0))
    + "\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6\">\n          <div class=\"center\">\n            <div class=\"info\" data-info-id=\"skills\">\n              <b>Skills:</b> <br> <i>comma seperated e.g. front-end,back-end,bootstrap</i> <br> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + " <br>\n              <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + "\" />\n            </div>\n            <div class=\"info\" data-info-id=\"timing\">\n              <b>Timing</b> <br> <i> left is more procrastination, right is less </i> <br> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.timing : stack1), depth0))
    + " <br>\n              <input type=\"range\" name=\"interaction\" min=\"0\" max=\"10\" value=5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row center\">\n        <button class=\"save-info\">Update</button>\n      </div>\n\n    </div>\n\n    \n\n  </div>\n</div>";
},"useData":true});
templates['user'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <tr>\n              <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.proj_id : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>\n              <td><button id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.proj_id : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"visit-project\">Visit</button></td>\n            </tr>\n";
},"3":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "            <tr>\n              <td id='proj_name'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n              <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.users : depth0)) != null ? stack1.length : stack1), depth0))
    + "</td>\n              <td>"
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, (depth0 != null ? depth0.end_date : depth0), {"name":"date","hash":{},"data":data})))
    + "</td>\n              <td>\n";
  stack1 = ((helpers.ifIn || (depth0 && depth0.ifIn) || helperMissing).call(depth0, (depths[1] != null ? depths[1].user_id : depths[1]), (depth0 != null ? depth0.users : depth0), {"name":"ifIn","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                  <button id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"join-project\">Join</button></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"user\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"user_container\">\n\n      <div id=\"user_panel\" class=\"col-sm-4\">\n        <h3>Welcome "
    + escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentUser","hash":{},"data":data}) : helper)))
    + "!</h3>\n        <a href=\"#\" class=\"info-page\">Edit Info</a> <br>\n        <a href=\"#\" class=\"new-project\">New Project</a>\n        <br>\n        <br>\n        <h4>Your Projects</h4>\n        <table class=\"table\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.userProjects : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </table>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <h1 class=\"subtitle\">All Projects</h1>\n        <table class=\"table\">\n          <tr>\n            <th>Project Name</th>\n            <th>Members</th>\n            <th>Due Date</th>\n            <th>Status</th>\n          </tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.allProjects : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </table>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n";
},"useData":true,"useDepths":true});
})();