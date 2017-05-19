import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  apikey: String,
});

function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  return bcrypt.hash(user.password, null, null, (hashError, hash) => {
    if (hashError) return next(hashError);

    user.password = hash;
    return next();
  });
}

UserSchema.pre('save', encryptPassword);

export default mongoose.model('User', UserSchema);
