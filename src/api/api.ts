import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getForms = () => api.get('/forms').then((forms) => forms.data);

export const getArchetypes = () => api.get('/archetypes').then((styles) => styles.data);