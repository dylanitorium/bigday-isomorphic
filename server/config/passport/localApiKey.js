import { Strategy } from 'passport-localapikey-update';
import { localApiKeyAuthCallback } from '../../api/users';

export default new Strategy(localApiKeyAuthCallback);
