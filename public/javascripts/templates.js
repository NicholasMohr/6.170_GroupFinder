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
  return "<div id=\"homepage\">\n\n	<h1>Group Finder</h1>\n\n	<h1>Welcome to Group Finder!</h1>\n	<p>You must be logged in to continue.</p>\n	<button id=\"login-btn\">Log In</button>\n	<button id=\"signup-btn\">Sign Up</button>\n	\n</div>";
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
  return "    <div class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"login\">\n	<h1>Group Finder <a style=\"float: right\" href=\"#\" id=\"home-link\">Home</a></h1>\n  <h2>Sign in <button id=\"signup-btn\">Sign Up</button></h2>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  <form id=\"login-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <input type=\"submit\" />\n  </form>\n	  \n</div>";
},"useData":true});
templates['projects'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <tr>\n                <td>"
    + escapeExpression(lambda((data && data.index), depth0))
    + "</td>\n                <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.authentication : depth0)) != null ? stack1.username : stack1), depth0))
    + "</td>\n                <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + "</td>\n              </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"project\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"home-link\">Home</a><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"project_container\">\n\n      <div id=\"project_panel\" class=\"col-sm-4\">\n\n        <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n        <p>\n          <b>Due Date:</b> <br>\n          "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.end_date : stack1), depth0))
    + "\n        </p>\n\n        <form action=\"demo_form.asp\" method=\"get\">\n          <p><span style=\"float:left\"><b>Low</b></span><span style=\"float:right\"><b>High</b></span></p>\n          <p>Location</p>\n          <input type=\"range\" name=\"location\" min=\"0\" max=\"10\">\n          <p>Availability</p>\n          <input type=\"range\" name=\"availability\" min=\"0\" max=\"10\">\n          <p>Desired Grade</p>\n          <input type=\"range\" name=\"desired_grade\" min=\"0\" max=\"10\">\n          <p>Interaction</p>\n          <input type=\"range\" name=\"interaction\" min=\"0\" max=\"10\">\n          <p>Dedication</p>\n          <input type=\"range\" name=\"dedication\" min=\"0\" max=\"10\">\n          <p>Timing</p>\n          <input type=\"range\" name=\"timing\" min=\"0\" max=\"10\">\n          <input type=\"submit\" value=\"Filter\">\n        </form>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <h1>Members</h1>\n          <table class=\"table\">\n            <tr>\n              <th>Rank</th>\n              <th>Username</th>\n              <th>Location</th>\n            </tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.users : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </table>\n      </div>\n\n    </div>\n  </div>\n\n</div>";
},"useData":true});
templates['signup'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"signup\">\n	<h1>Group Finder <a style=\"float: right\" href=\"#\" id=\"home-link\">Home</a></h1>\n  <h2>Sign up <button id=\"login-btn\">Log In</button></h2>\n  <div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n  <form id=\"signup-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n	<div>Confirm Password: <input type=\"password\" name=\"confirm\" required /></div>\n    <input type=\"submit\" /> \n  </form>\n	\n</div>\n";
},"useData":true});
templates['user-info'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div id=\"user\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" class=\"user-page\">View Projects</a><a href=\"#\" id=\"home-link\">Home</a><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <h1>Your Info</h1>\n    <div class=\"row\">\n\n      <div class=\"col-xs-6\">\n        <div class=\"info\" data-info-id=\"name\">\n          Name: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>   <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" />\n        </div>\n        <div class=\"info\" data-info-id=\"email\">\n          Email: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.email : stack1), depth0))
    + "</p>    <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" />\n        </div>\n        <div class=\"info\" data-info-id=\"phone\">\n          Phone: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.phone : stack1), depth0))
    + "</p>  <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.phone : stack1), depth0))
    + "\" />\n        </div>\n        <div class=\"info\" data-info-id=\"location\">\n          Location:<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + "</p>  <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + "\" />\n        </div>\n        <div class=\"info\" data-info-id=\"availability\">\n          Availability, comma seperated e.g. R10,N11,M10: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), depth0))
    + "</p>  <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), depth0))
    + "\" />\n        </div>\n      </div>\n\n      <div class=\"col-xs-6\">\n        <div class=\"info\" data-info-id=\"skills\">\n          Skills, comma seperated e.g. front-end,back-end,bootstrap: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + "</p>  <input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + "\" />\n        </div>\n        <div class=\"info\" data-info-id=\"timing\">\n          Timing, left is more procrastination, right is less: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.timing : stack1), depth0))
    + "</p>  <input type=\"range\" name=\"interaction\" min=\"0\" max=\"10\" value=5>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <button class=\"save-info\">Save</button>\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['user'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <tr>\n              <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.proj_id : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>\n              <td><button class=\"visit-project\">Visit</button></td>\n            </tr>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "            <tr>\n              <td id='proj_name'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n              <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.users : depth0)) != null ? stack1.length : stack1), depth0))
    + "</td>\n              <td>"
    + escapeExpression(((helper = (helper = helpers.end_date || (depth0 != null ? depth0.end_date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"end_date","hash":{},"data":data}) : helper)))
    + "</td>\n              <td><button id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"join-project\">Join</button></td>\n            </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"user\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"project_container\">\n\n      <div id=\"user_panel\" class=\"col-sm-4\">\n        <h3>Welcome "
    + escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentUser","hash":{},"data":data}) : helper)))
    + "!</h3>\n        <a href=\"#\" class=\"info-page\">Edit User Info</a>\n        <p></p>\n        <p><b>Your Projects</b></p>\n        <table class=\"table\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.userProjects : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </table>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <h1>All Projects</h1>\n        <table class=\"table\">\n          <tr>\n            <th>Project Name</th>\n            <th>Members</th>\n            <th>Due Date</th>\n          </tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.allProjects : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </table>\n      </div>\n\n    </div>\n\n  </div>\n</div>";
},"useData":true});
})();