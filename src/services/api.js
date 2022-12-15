const getDataApi = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json'
  ).then((response) => {
    return response.json();
  });
};
export default getDataApi;
