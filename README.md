# Mod10strategie

# Mod10 Match Analyzer

Application simple pour détecter des patterns de cotes sur des matchs sportifs par analyse numérique (modulo 10).

## Fonctionnalités

- Téléversement d’une capture d’écran de cotes
- Lecture automatique (OCR) des cotes Over/Under
- Calcul du mod10 sur les décimales
- Recherche des matchs avec patterns similaires (identique ou proche)
- Interface utilisateur simple

## Démarrage rapide

1. Clonez le repo
2. Installez les dépendances backend (`cd backend && pip install -r requirements.txt`)
3. Installez les dépendances frontend (`cd frontend && npm install`)
4. Lancez le backend (`python main.py`)
5. Lancez le frontend (`npm start`)

## Stack technique

- Backend : Python (Flask), pytesseract, SQLite
- Frontend : ReactJS

## Usage

- Saisissez les noms de matchs ou téléversez une capture
- Cliquez sur “Analyser”
- Consultez la table des résultats

---
