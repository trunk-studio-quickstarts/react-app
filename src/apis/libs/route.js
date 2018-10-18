const PROD_DOMAIN = 'https://localhost:8000';
const DEV_DOMAIN = 'https://localhost:8000';

const getDomain = (NODE_ENV = 'dev') => {
  switch (NODE_ENV) {
    case 'prod':
      return PROD_DOMAIN;
    case 'dev':
    default:
      return DEV_DOMAIN;
  }
};

const SERVER_DOMAIN = getDomain(process.env.NODE_ENV);

export const oaKaryRoute = (endpoint) => `${SERVER_DOMAIN}/${endpoint}/`;
