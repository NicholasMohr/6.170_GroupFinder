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
  return "<div id=\"homepage\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"index_container\">\n      <div class=\"col-sm-12\">\n      	<div class=\"center\" id=\"index_button_container\">\n	        <h3>Welcome!</h3>\n			    <p>You must be logged in to continue.</p>\n			    <button class=\"save-info\" id=\"login-btn\">Log In</button>\n			    <button class=\"save-info\" id=\"signup-btn\">Sign Up</button>\n		    </div>\n      </div>\n    </div>\n\n  </div>\n</div>";
  },"useData":true});
templates['info'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"info\" data-info-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n  <p>"
    + escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n  <a href=\"#\" class=\"edit-info\">Edit</a>\n</div>";
},"useData":true});
templates['join-project'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\"join-project\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"home-link\">Home</a><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"new_project_container\">\n      <div class=\"col-sm-12 center\">\n\n        <div class=\"row\">\n          <h3 class=\"center\">Join "
    + escapeExpression(((helper = (helper = helpers.proj_name || (depth0 != null ? depth0.proj_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"proj_name","hash":{},"data":data}) : helper)))
    + "</h3>\n          <p>Please specify your desired grade, your desired amount of interaction, and your dedication to "
    + escapeExpression(((helper = (helper = helpers.proj_name || (depth0 != null ? depth0.proj_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"proj_name","hash":{},"data":data}) : helper)))
    + ".\n        </div>\n\n        <div class=\"row\">\n          <div class=\"join-project-container\">\n            <span style=\"float:left\"><p><i>Low</i></p></span>\n            <span style=\"float:right\"><p><i>High</i></p></span>\n            <br>\n            <div class=\"join-proj-info\" data-info-id=\"desired_grade\">\n              <b>Desired Grade:</b> <br>\n              <input type=\"range\" min=\"0\" max=\"10\"/>\n            </div>\n            <br>\n            <div class=\"join-proj-info\" data-info-id=\"interaction\">\n              <b>Interaction:</b> <br>\n              <input type=\"range\" min=\"0\" max=\"10\"/>\n            </div>\n            <br>\n            <div class=\"join-proj-info\" data-info-id=\"dedication\">\n              <b>Dedication:</b> <br>\n              <input type=\"range\" min=\"0\" max=\"10\"/>\n            </div>\n            <br>\n          </div>\n        </div>\n\n        <div class=\"row center\">\n          <button value=\""
    + escapeExpression(((helper = (helper = helpers.proj_name || (depth0 != null ? depth0.proj_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"proj_name","hash":{},"data":data}) : helper)))
    + "\" class=\"join-project-submit\">Join</button>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>";
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
  return buffer + "            <div>Username <div><input type=\"text\" name=\"username\" required /></div></div>\n            <div>Password<div> <input type=\"password\" name=\"password\" required /></div></div>\n            <input class=\"save-info\" type=\"submit\" />\n          </form>\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n</div>";
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
    + "\n        </p>\n\n        <form class=\"projectFilter\">\n          <span style=\"float:left\"><p><i>Low</i></p></span>\n          <span style=\"float:right\"><p><i>High</i></p></span>\n          <h5>Filter Weights:</h5>\n          <p>Location</p>\n          <input class=\"weight\" type=\"range\" data-name=\"location\" min=\"0\" max=\"10\">\n          <p>Availability</p>\n          <input class=\"weight\" type=\"range\" data-name=\"availability\" min=\"0\" max=\"10\">\n          <p>Desired Grade</p>\n          <input class=\"weight\" type=\"range\" data-name=\"desired_grade\" min=\"0\" max=\"10\">\n          <p>Interaction</p>\n          <input class=\"weight\" type=\"range\" data-name=\"interaction\" min=\"0\" max=\"10\">\n          <p>Dedication</p>\n          <input class=\"weight\" type=\"range\" data-name=\"dedication\" min=\"0\" max=\"10\">\n          <p>Timing</p>\n          <input class=\"weight\" type=\"range\" data-name=\"timing\" min=\"0\" max=\"10\">\n          <input type=\"submit\" value=\"Filter\">\n        </form>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <h3>Members</h3>\n          <table class=\"table\">\n            <tr>\n              <th>Rank</th>\n              <th>Username</th>\n              <th>Location</th>\n            </tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.users : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </table>\n      </div>\n\n    </div>\n  </div>\n\n</div>";
},"usePartial":true,"useData":true});
templates['schedule'] = template({"1":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<table id=\"schedule\">\n                <tr>\n                  <th>Time</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th>\n                  <th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th>\n                  <th>21</th><th>22</th><th>23</th><th>24</th><th>1</th><th>2</th>\n                </tr>\n                <tr>\n                  <td>Monday</td>\n                  <td><input type=\"checkbox\" value=\"M8\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M8", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M9\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M9", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M10\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M10", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M11\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M11", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M12\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M12", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M13\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M13", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M14\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M14", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M15\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M15", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M16\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M16", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M17\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M17", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M18\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M18", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M19\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M19", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M20\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M20", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M21\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M21", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M22\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M22", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M23\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M24\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T1\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T1", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T2\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T2", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                </tr>\n                <tr>\n                  <td>Tuesday</td>\n                  <td><input type=\"checkbox\" value=\"T8\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T8", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T9\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T9", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T10\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T10", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T11\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T11", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T12\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T12", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T13\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T13", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T14\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T14", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T15\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T15", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T16\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T16", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T17\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T17", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T18\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T18", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T19\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T19", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T20\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T20", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T21\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T21", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T22\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T22", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T23\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"T24\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "T24", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W1\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W1", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W2\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W2", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                </tr>\n                <tr>\n                  <td>Wednesday</td>\n                  <td><input type=\"checkbox\" value=\"W8\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W8", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W9\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W9", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W10\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W10", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W11\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W11", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W12\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W12", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W13\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W13", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W14\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W14", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W15\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W15", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W16\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W16", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W17\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W17", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W18\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W18", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W19\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W19", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W20\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W20", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W21\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W21", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W22\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W22", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W23\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"W24\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "W24", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R1\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R1", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R2\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R2", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                </tr>\n                <tr>\n                  <td>Thursday</td>\n                  <td><input type=\"checkbox\" value=\"R8\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R8", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R9\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R9", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R10\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R10", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R11\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R11", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R12\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R12", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R13\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R13", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R14\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R14", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R15\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R15", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R16\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R16", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R17\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R17", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R18\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R18", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R19\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R19", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R20\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R20", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R21\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R21", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R22\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R22", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R23\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"R24\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "R24", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F1\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F1", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F2\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F2", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                </tr>\n                <tr>\n                  <td>Friday</td>\n                  <td><input type=\"checkbox\" value=\"F8\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F8", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F9\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F9", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F10\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F10", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F11\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F11", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F12\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F12", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F13\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F13", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F14\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F14", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F15\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F15", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F16\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F16", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F17\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F17", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F18\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F18", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F19\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F19", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F20\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F20", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F21\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F21", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F22\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F22", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F23\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"F24\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "F24", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S1\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S1", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S2\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S2", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                </tr>\n                <tr>\n                  <td>Saturday</td>\n                  <td><input type=\"checkbox\" value=\"S8\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S8", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S9\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S9", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"10\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S10", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S11\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S11", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S12\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S12", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S13\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S13", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S14\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S14", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S15\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S15", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S16\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S16", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S17\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S17", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S18\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S18", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S19\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S19", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S20\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S20", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S21\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S21", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S22\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S22", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S23\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"S24\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "S24", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N1\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N1", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N2\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N2", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                </tr>\n                <tr>\n                  <td>Sunday</td>\n                  <td><input type=\"checkbox\" value=\"N8\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N8", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N9\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N9", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N10\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N10", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N11\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N11", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N12\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N12", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N13\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N13", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N14\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N14", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N15\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N15", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N16\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N16", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N17\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N17", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N18\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N18", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N19\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N19", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N20\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N20", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N21\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N21", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N22\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N22", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N23\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N23", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"N24\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "N24", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M1\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M1", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "></td>\n                  <td><input type=\"checkbox\" value=\"M2\" ";
  stack1 = ((helpers.ifInAvail || (depth0 && depth0.ifInAvail) || helperMissing).call(depth0, "M2", ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), {"name":"ifInAvail","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "></td>\n                </tr>\n              </table>";
},"useData":true});
templates['signup'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <div class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"signup\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <a style=\"float: right\" href=\"#\" id=\"home-link\">Home</a>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"login_container\">\n\n      <div class=\"col-sm-6\">\n        <div class=\"center\" id=\"login_form_container\">\n          <form id=\"signup-form\">\n            <h4>Signup</h4>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div>Username <div><input type=\"text\" name=\"username\" required /></div></div>\n            <div>Password<div> <input type=\"password\" name=\"password\" required /></div></div>\n            <div>Confirm Password<div> <input type=\"password\" name=\"confirm\" required /></div></div>\n            <input class=\"save-info\" type=\"submit\" /> \n          </form>\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['user-info'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"user\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"home-link\">Home</a><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    \n    <div class=\"row\" id=\"user_info_container\">\n\n      <div class=\"row\">\n        <h3 class=\"center\">Your Info</h3>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div class=\"center\">\n            <div class=\"info\" data-info-id=\"name\">\n              <b>Name:</b> "
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
    + "\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-6\">\n          <div class=\"center\">\n            <div class=\"info\" data-info-id=\"skills\">\n              <b>Skills:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + " <br> <i>comma seperated e.g. front-end,back-end,bootstrap</i> <br>\n              <textarea type=\"text\" rows=\"6\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.skills : stack1), depth0))
    + "</textarea>\n            </div>\n            <div class=\"info\" data-info-id=\"timing\">\n              <b>Timing</b> <br> <i> left is more procrastination, right is less </i> <br> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.timing : stack1), depth0))
    + " <br>\n              <input type=\"range\" name=\"interaction\" min=\"0\" max=\"10\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.timing : stack1), depth0))
    + "\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"center\">\n            <div class=\"info\" data-info-id=\"availability\">\n\n              <b>Availability:</b> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.availability : stack1), depth0))
    + " <br>\n              <div id=\"schedule-container\">\n";
  stack1 = this.invokePartial(partials.schedule, '                ', 'schedule', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "              </div<\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row center\">\n        <button class=\"save-info\">Update</button>\n      </div>\n\n    </div>\n\n  </div>\n</div>";
},"usePartial":true,"useData":true});
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
  stack1 = ((helpers.ifInProj || (depth0 && depth0.ifInProj) || helperMissing).call(depth0, (depths[1] != null ? depths[1].user_id : depths[1]), (depth0 != null ? depth0.users : depth0), {"name":"ifInProj","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                  <button value=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"join-project-request\">Join</button></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"user\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <span style=\"float:right\"><a href=\"#\" id=\"logout-link\">Logout</a></span>\n      <h1 class=\"title\">GroupFinder</h1>\n    </div>\n\n    <div class=\"row\" id=\"user_container\">\n\n      <div id=\"user_panel\" class=\"col-sm-4\">\n        <h3>Welcome "
    + escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentUser","hash":{},"data":data}) : helper)))
    + "!</h3>\n        <a href=\"#\" class=\"info-page\">Edit Info</a> <br>\n        <a href=\"#\" class=\"new-project\">New Project</a>\n        <br>\n        <br>\n        <h4>Your Projects</h4>\n        <table class=\"table\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.userProjects : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </table>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <h3 class=\"subtitle\">All Projects</h3>\n        <table class=\"table\">\n          <tr>\n            <th>Project Name</th>\n            <th>Members</th>\n            <th>Due Date</th>\n            <th>Status</th>\n          </tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.allProjects : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </table>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n";
},"useData":true,"useDepths":true});
})();