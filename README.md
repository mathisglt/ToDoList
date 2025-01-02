# 📝 ToDoList

**ToDoList** est une application de gestion de tâches construite avec Vue.js.

Projet réalisé pour l'UE WE du Master IL de l'ISTIC.

Elle vous permet de gérer vos tâches en ajoutant, modifiant et supprimant des tâches, tout en suivant des informations comme l'état et la date d'échéance.

## 🚀 Fonctionnalités

- **Ajouter une tâche** : Vous pouvez ajouter une tâche avec son nom, son état et sa date d'échéance.
- **Supprimer une tâche** : Vous pouvez supprimer une tâche de votre liste.
- **Gestion des états** : Modifiez l'état de chaque tâche (À faire, En cours, Terminé).
- **Calendrier intégré** : Visualisez vos tâches dans un calendrier.
- **Page "À propos"** : Découvrez des informations sur l'auteur du projet.
- 
## 🛠️ Technologies utilisées

- **Frontend** : Vue.js (avec API et TypeScript)
- **Routing** : Vue Router
- **CSS** : Styles personnalisés dans Todos.vue, Calendrier.vue, et TODOComponent.vue
- 
## 📂 Structure du projetGestionnaire-de-Taches/

```plaintext
├── src/
│   ├── components/
│   │   ├── Calendrier.vue      # Composant de calendrier
│   │   ├── TODOComponent.vue    # Composant de gestion des tâches
│   │   ├── Todos.vue            # Composant principal de gestion des tâches
│   ├── views/
│   │   ├── AboutView.vue        # Vue "À propos"
│   │   ├── HomeView.vue         # Vue principale
│   ├── services/
│   │   ├── api.ts               # Service API pour la gestion des tâches
│   ├── App.vue                  # Point d'entrée de l'application
│   ├── main.ts                  # Fichier principal de démarrage
├── public/                      # Dossier public
│   ├── index.html               # Fichier HTML principal
├── package.json                 # Dépendances et scripts
└── README.md                    # Documentation
```

## 🖥️ Installation et démarrage du projet

Suivez les étapes ci-dessous pour cloner ce projet et le faire fonctionner sur votre machine locale.

  1. Clonez le dépôt Git en utilisant la commande suivante :
   
   ```bash
   https://github.com/mathisglt/ToDoList
   ```
   
   2. Rendez vous dans le dossier
   
   ```bash
   cd .\Ma-Bibliotheque\
   ```
   
   3. Installez les dépendances
   
   ```bash
   npm i 
   ```
   
   4. Enfin, démarrer le projet
   
   ```bash
   npm run start
   ```
