(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"homepage\">\n<h1>Group Finder <a style=\"float: right\" href=\"#\" id=\"home-link\">Home</a> <a style=\"float: right\" href=\"#\" id=\"logout-link\">Log out</a></h1>\n  <h2>Welcome to Group Finder!</h2>\n  <p>You must be logged in to continue.</p>\n  <button id=\"login-btn\">Log In</button>\n  <button id=\"signup-btn\">Sign Up</button>\n</div>";
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
templates['user'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.info, '    ', 'info', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"user\">\n  <p><span>Welcome, </span><span>"
    + escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentUser","hash":{},"data":data}) : helper)))
    + "</span> (<a href=\"#\" id=\"logout-link\">logout</a>)</p>\n  <h1>View your info</h1>\n  <h1>Your Info</h1>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.infos : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true});
})();