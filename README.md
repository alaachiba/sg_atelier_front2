# 🚀 Gestion Ateliers - Frontend Angular

---

## 📄 Description

Frontend Angular pour gérer des ateliers de formation avec gestion des utilisateurs (admin, formateurs, participants), authentification via token JWT, gestion complète des ateliers et inscriptions.

---

## ⚙️ Fonctionnalités

- 🔐 Authentification JWT (login/logout) avec gestion des rôles
- 🛠️ Gestion des ateliers (CRUD) par admins et formateurs
- 👥 Gestion des utilisateurs (CRUD) par admins
- 📝 Inscription/désinscription aux ateliers par participants
- 👀 Visualisation des participants à un atelier
- 👤 Affichage du nom de l’utilisateur connecté dans la barre de navigation

---

## 🛠️ Technologies utilisées

- Angular 16+
- TypeScript
- Bootstrap 5
- RxJS
- Angular Router
- HttpClient

---

## 🚀 Installation

```bash
git clone <URL_DU_DEPOT>
cd nom-du-projet-frontend
npm install
ng serve --open
```

🗂️ Structure
src/
└── app/
    ├── components/
    │   ├── navbar/
    │   ├── ateliers/
    │   ├── utilisateurs/
    │   └── participants/
    ├── services/
    │   ├── auth.service.ts
    │   ├── atelier.service.ts
    │   └── utilisateur.service.ts
    ├── app-routing.module.ts
    └── app.module.ts

🎯 Usage
Se connecter via la barre de navigation.

Accéder à la gestion ateliers/utilisateurs selon le rôle.

Ajouter, modifier, supprimer ateliers ou utilisateurs.

Voir la liste des participants pour chaque atelier.

