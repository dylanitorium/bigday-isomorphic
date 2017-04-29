import { Strategy } from 'passport-localapikey';
import { localApiKeyAuthCallback } from '../../api/users';

export default new Strategy(localApiKeyAuthCallback);
