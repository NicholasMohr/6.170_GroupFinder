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
templates['user'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<div id=\"user\">\n\n  <p><span>Welcome, </span><span>"
    + escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentUser","hash":{},"data":data}) : helper)))
    + "</span> (<a href=\"#\" id=\"logout-link\">Logout</a>)</p>\n\n  <h1>View your info</h1>\n  <h1>Your Info</h1>\n  <div data-info-id=\"name\">\n  	Name: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>     <button class=\"edit-info\">Edit</button>\n  </div>\n  <div data-info-id=\"email\">\n    Email: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.email : stack1), depth0))
    + "</p>   <button class=\"edit-info\">Edit</button>\n  </div>\n  <div data-info-id=\"phone\">\n    Phone: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.phone : stack1), depth0))
    + "</p>   <button class=\"edit-info\">Edit</button>\n  </div>\n  <div data-info-id=\"location\">\n    Location:<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.location : stack1), depth0))
    + "</p>   <button class=\"edit-info\">Edit</button>\n  </div>\n  <div data-info-id=\"availability\">\n    Availability: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), depth0))
    + "</p>   <button class=\"edit-info\">Edit</button>\n  </div>\n  <div data-info-id=\"skills\">\n    Skills: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + "</p>  <button class=\"edit-info\">Edit</button>\n  </div>\n  <div data-info-id=\"timing\">\n    Timing: <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.timing : stack1), depth0))
    + "</p>  <button class=\"edit-info\">Edit</button>\n  </div>\n</div>\n";
},"useData":true});
})();