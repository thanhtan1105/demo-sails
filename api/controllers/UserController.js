/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'new': function(request, response) {
    response.view();
  },

  'register': function(request, response, next) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var phone = request.body.phone;

    console.log("Username: " + username);
    console.log("password: " + password);
    console.log("email: " + email);
    console.log("phone: " + phone);
    if (!username || !password || !email || !phone) {
      return response.json({status: "400", message: "Missing params"});
    }

    var createDate = new Date()
    var insertQuery = "INSERT INTO user(username,password,email,phone,createDate) VALUES('"+username+"','"+password+"','"+email+"','"+phone+"', '"+createDate+"')";
    User.query(insertQuery, function(err, record) {
      if (err) {
        console.log(err);
        return response.json({status: "401", message: "Register Fail"});
      }

      return response.json({status: "200", message: "Register Success"});
    });
  },

  'getUser' : function(request, response, next) {
    var username = request.params.name;
    console.log("Username: " + username);
    var query = {username: new RegExp(username)};
    User.findOne({username: username})
      .exec(function(err, user) {
        if (err) {
          return response.json(err);
        }

        return response.json(user);
      });
  },

  'login': function(request, response, next) {
    var username = request.body.username;
    var password = request.body.password;
    if (!username && !password) {
      return response.json({status: "400", message: "Missing params"});
    }
    User.findOne({username: username, password: password})
      .exec(function(err, user) {
        if (err) {
          return response.json(err);
        }

        if (!user) {
          return response.json({status: "400", message: "Invalid username or password"});
        }

        response.json({status: "200", message: user});
      })

  }
};

