import mongoSessionConnector from 'connect-mongodb-session';
import { mongoUri as uri } from '../mongoose';

export default (session) => {
  const MongoStore = mongoSessionConnector(session);
  const store = new MongoStore({
    uri,
    collection: 'sessions',
  }, (error) => {
    if (error) {
      console.error(error);
    }
  });

  return session({
    secret: 'PUT_IN_ENV',
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 8640000, // 24hrs in ms
    },
  });
};
