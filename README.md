```markdown
# Instructions pour lancer mon portfolio

Pour lancer mon portfolio sur ton ordinateur local, suis ces étapes :

1. Clone le dépôt GitHub :
```bash
git clone https://github.com/tonusername/tonportfolio.git
```
2. Change de répertoire pour aller dans celui du projet :
```bash
cd tonusername
```
3. Installe les dépendances (assure-toi d'avoir [Ruby](https://rubyinstaller.org//) installé) :
```bash
gem install bundler jekyll
jekyll tonportfolio
```
4. Lance le serveur de développement :
```bash
bundle exec jekyll serve
```
5. Ouvre ton navigateur et visite `http://localhost:4000`.
N'oublie pas de remplacer `https://github.com/tonusername/tonportfolio.git` par l'URL de ton dépôt et `http://localhost:4000` par l'adresse que ton serveur utilise si elle est différente.
