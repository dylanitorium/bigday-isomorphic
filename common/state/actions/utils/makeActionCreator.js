export default (type, ...parameterNames) => (
  (...parameters) => {
    const action = { type };
    parameterNames.forEach((parameter, index) => {
      action[parameterNames[index]] = parameters[index];
    });
    return action;
  }
);
