import axios from 'axios';

// Configuration globale d'Axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Intercepteur pour les requêtes
axios.interceptors.request.use(
  (config) => {
    // Vous pouvez ajouter ici un token d'authentification si nécessaire
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Gestion globale des erreurs
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Non autorisé');
          break;
        case 404:
          console.error('Ressource non trouvée');
          break;
        default:
          console.error('Erreur serveur');
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
