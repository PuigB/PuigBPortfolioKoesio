---
layout: ../../layouts/blog-post.astro
title: Automatisation
description: yea
thumbnail: script.png
draft: false
date: 07-25-2022
keywords:
- Fluff
---
## Bash et powershell

Afin de faciliter le déploiement et l'installation des machines sur lesquelles openvas sera utilisé il m'a été demandé, dans un premier temps de créer des scripts pour lancer des intallations automatiquement.
La création des ces scripts et protocoles a été rapide et plutôt simple ne reposant au final que sur la retranscription des commandes utilisées pour installer openvas dans un fichier bash avec un code d'erreur en cas d'echec d'installation.
La partie la plus ardue a été la création des scripts de vérification des mots de passe grâce à la commande DSInternals.
Afin de pouvoir l'utiliser il est nécessaire d'avoir un catalogue de mot de passe déjà présent.

J'ai donc du réaliser des scripts powershell car ces scripts devaient pouvoir être utilisés sur nimporte quelle machine windows.
Le script ouvre une fenêtre demandant à l'utilisateur de rentrer le nom de la société puis va la modifier avec des options basiques telles que l'alternance de caractères majuscule et minuscule, en passant les noms d'entreprise en ascii, en alternant les lettres avec des caractères spéciaux etc.
Afin d'avoir un jeu de données plus conséquent nous avons ajouté une liste de nom au nom de l'entreprise pour avoir une base de mots de passe faible comprenant les prénom présent en france en 2022, auxquels nous avons ajouté une liste des 100 000 000 de mots de passe les plus utilisés dans le monde et les 10 000 000 de mots de passe les plus utilisés en france.


Le jeu de données créé nous avons testé notre ad en "local" donc dans l'entreprise et avons pu constater que certains utilisateurs (le service comptabilité) avaient des mots de passe innaceptables (azerty123,motdepasse123,...).

J'ai donc compris pour la première fois que le principal frein à l'amélioration est en fait l'utilisateur.