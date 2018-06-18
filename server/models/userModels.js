var mongoose = require('mongoose');
var findOrCreate = require('mongoose-find-or-create');


let userSchema = mongoose.Schema({
  oauth_id: String,
  oauth_type: String,
  display_name: {type: String, default: ''},
  avatar: {type: String, default: ''},
});

userSchema.plugin(findOrCreate);

let User = mongoose.model('User', userSchema);

let saveGoogleUser = (profile, cb) => {
  User.findOrCreate({oauth_id: profile.id}, {oauth_type: 'Google'}, (err, user) => {
    return cb(err, user);
  })
};

let populateGoogleProfile = (profile, cb) => {
  console.log(profile);
  var imageUrl = profile.image.url.split('?sz')[0];
  User.findOneAndUpdate({ oauth_id: profile.id }, { $set: { display_name: profile.displayName, avatar: imageUrl }}, {new: true})
    .then((user) => cb(null, user))
};

module.exports.User = User;
module.exports.saveGoogleUser = saveGoogleUser;
module.exports.populateGoogleProfile = populateGoogleProfile;