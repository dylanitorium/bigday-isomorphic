import bodyParser from 'body-parser';
import flash from 'connect-flash';
import morgan from 'morgan';
import cors from 'cors';

export default (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(flash());
};
