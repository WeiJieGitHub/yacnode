import routesMap from 'routes/routerMap';

export default (name) => {
  let result;
  Object.keys(routesMap).forEach((item) => {
    if (routesMap[item].name === name) {
      result = routesMap[item].title;
    }
  });
  return result;
};
