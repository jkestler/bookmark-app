const User = require('./models').User;
const bcrypt = require('bcryptjs');
const Folder = require('./models').Folder;

module.exports = {

  createUser(newUser, callback) {

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

    return User.create({
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => { 
      console.log(user);  // ! Program is getting to here
      callback(null, user);
    })
    .catch((err) => {
      callback(err); 
      // console.log('ERROR', err);
    })
  },
  
  getUser(id, callback) {
    let result = {};
    return User.findByPk(id)
    .then((user) => {
      if (!user) {
        callback(404);
      } else {
        result['user'] = user;
        Folder.findAll()
        .then((folders) => {
          result['folders'] = folders;
          console.log('USER DATA', result);
          callback(null, result);
        })
        .catch((err) => {
          callback(err);
        })
      }
      
    })
  }

}