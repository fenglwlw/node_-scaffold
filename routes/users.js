var express = require('express');
var router = express.Router();

/**
 * @apiDefine users 获得用户信息
 */
/**
 * @api {get} /users/user/:id Request User information
 * @apiName GetUser
 * @apiGroup users
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.get('/user/:id', function(req, res, next) {
  // 
  res.json({username:'llllllll'})
});
/**
 * @apiDefine users 获得用户信息
 */
/**
 * @api {get} /users/userinfo/:id get one user info
 * @apiName GetUser
 * @apiGroup users
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.get('/userinfo/:id', function(req, res, next) {
  // 
  res.json({username:'00000000000'})
});

module.exports = router;
