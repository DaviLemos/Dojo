import axios from 'axios';

const api = axios.create({
  baseURL: 'https://davilemos.github.io/dojoDB/db.json',
  // baseURL: 'http://localhost:3000/',
});

export const getDojoDB = () => api.get('').then((db) => db.data);

export const getForms = () => api.get('/forms').then((forms) => forms.data);

export const getArchetypes = () => api.get('/archetypes').then((styles) => styles.data);