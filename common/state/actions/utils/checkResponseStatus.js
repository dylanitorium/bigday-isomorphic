import parseJSON from './parseJSON';

export default (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return parseJSON(response).then((json) => {
    const message = json.message || response.statusText;
    const error = new Error(message);
    error.message = message;
    throw error;
  });
};
