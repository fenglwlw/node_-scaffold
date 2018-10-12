const users = require('./users');

const router = {
  baseApi: '/api',
  paths: [
    {path:'users',router:users,desc:'获得用户'}
  ]
}

module.exports = router;