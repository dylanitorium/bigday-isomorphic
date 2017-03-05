import bodyParser from 'body-parser';
import flash from 'connect-flash';
import morgan from 'morgan';

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(flash());
};
