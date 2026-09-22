# react-panier-achats — Application React "panier d'achats"

*(TP5 de l'UE JavaScript)*

Mini boutique en ligne développée en **React** : liste de produits (peluches, figurines...) et panier d'achats, avec une chaîne de build **Webpack + Babel**.

## Structure du projet

```
tp5/
├── src/
│   ├── index.html
│   ├── components/
│   │   └── app.jsx         # composant racine App
│   ├── scripts/
│   │   └── main.js         # point d'entrée
│   ├── data/
│   │   ├── products.js     # catalogue des produits (nom, prix, stock, image...)
│   │   └── images/
│   ├── assets/
│   │   ├── style/           # app.css, cart.css, product.css, productList.css
│   │   └── images/          # icônes panier / poubelle
│   ├── images/
│   └── style/
├── vendor/                 # react.development.js / react-dom.development.js
├── webpack.config.js
├── package.json
├── package-lock.json
└── css.pdf                 # support/consignes CSS fournies pour le TP
```

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée) et npm

## Installation

Depuis le dossier `tp5/` :

```bash
npm install
```

## Commandes disponibles

| Commande | Effet |
|---|---|
| `npm run build` | Génère le bundle de production dans `dist/` |
| `npm run watch` | Reconstruit automatiquement le bundle à chaque modification |
| `npm run dev-server` | Lance un serveur de développement avec rechargement à chaud (**recommandé pendant le développement**) |

Exemple pour développer :

```bash
npm run dev-server
```

Puis ouvrez l'URL indiquée dans le terminal (par défaut `http://localhost:8080`).

> ⚠️ Ne consultez jamais `src/index.html` directement : c'est le bundle généré dans `dist/` (ou servi par `dev-server`) qui contient le résultat réel. `dist/` n'est pas versionné dans Git.

## Contenu de l'exercice

- **`data/products.js`** — catalogue des produits en vente (id, nom, description, image, prix, stock, poids).
- **`components/app.jsx`** — composant racine `App`, à compléter pour afficher la liste des produits (`productList`/`product`) ainsi que le panier (`cart`), avec ajout/retrait d'articles.
- **`assets/style/`** — feuilles de style dédiées à chaque partie de l'interface (produit, liste de produits, panier).
- **`css.pdf`** — document de référence fourni pour la mise en forme CSS attendue.
