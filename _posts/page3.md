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

Afin de faciliter le déploiement et l'installation des machines sur lesquelles openvas sera utilisé on m'a demandé dans un premier temps de créer des scripts pour lancer des intallations automatiquement.
La création des ces scripts et protocole a été rapide et plutot simple ne reposant au final que sur la retranscription des commandes utilisés pour installer openvas dans un fichier bash avec un code d'erreur en cas d'echec d'installation.
La partie la plus ardue a été la creation des scripts de vérification des mots de passes grâce à la commande DSInternals mais pour pouvoir l'utiliser il est nécessaire d'avoir un catalogue de mot de passe déjà présent.

J'ai donc du réaliser des scripts powershell car ces scripts devaient pouvoir etre utilisé sur nimporte quelle machine windows.
Le script ouvre un fenetre demandant a l'utilisateur de rentrer le nom de la compagnie puis va la modifier avec des otpions basiques telles que l'alternance de caractères majuscule et minuscule, en passant les nom d'entreprise en ascii en alternant les lettres avec des caractère spéciaux etc.
Afin d'avoir un jeu de données plus conséquent nous avons ajouté une liste de nom au nom de l'entreprise pour avoir une base de mot de passe faible comprenant les prenom présent en france en 2022, auquel nous avois ajouté un liste des 100 000 000 de mot de passes les plus utilisés dans le monde et les 10 000 000 de mot de passe les plus utilisés en france.


Le jeu créée nousavons testé notre ad en "local" docn dan l'entreprise et avons pu constater que certains utilisateur (le service compta) avaient des mot de passes simplement scandaleux.

Et j'ai donc compris pour la premère fois que le principal frein à l'amélioration est en fait l'utilisateur et que l'interface chaise clavier est très problématique et peu fonctionnelle à la compta.