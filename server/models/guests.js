import randomatic from 'randomatic';
import mongoose from 'mongoose';

const GuestSchema = new mongoose.Schema({
  sort: Number,
  name: String,
  email: String,
  address: String,
  quantity: Number,
  code: String,
  phone: String,
  notes: String,
  status: {
    type: String,
    enum: [
      'Invite not yet sent',
      'Awaiting RSVP',
      'Accepted',
      'Declined',
    ],
    default: 'Invite not yet sent',
  },
});

const createCode = () => (
  new Promise((resolve) => {
    let code = randomatic('A0', 6);
    mongoose.models.Guest.find().exec().then((data) => {
      const existingCodes = data.map(item => item.code);
      while (existingCodes.includes(code)) {
        code = randomatic('A0', 6);
      }
      resolve(code);
    });
  })
);

const addCodeToGuest = (code, guest) => (guest.code = code);

// Impure
function addCodeIfRequired(next) {
  if (!this.code) {
    createCode()
    .then(code => addCodeToGuest(code, this))
    .then(() => (next()));
  }
}

GuestSchema.pre('save', addCodeIfRequired);

export default mongoose.model('Guest', GuestSchema);
