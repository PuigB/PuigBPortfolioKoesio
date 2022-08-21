---
layout: ../../layouts/blog-post.astro
title: OpenVas
description: yea
thumbnail: openvas.png
draft: false
date: 07-25-2022
keywords:
- Fluff
---
## Premiers pas

J'ai tout d'abord commencé mon stage par une journée d'observation dans l'entreprise Koesio.
Au cours de cette journée j'ai pu observer les fonctionnements et besoins du support technique.

Par la suite je me suis vu confier des machines et un temps limité pour installer le logiciel OPENVAS.
Tout d'abbord sur une machine debian que j'ai du configurer, mais pour des raisons de praticité nous avons abandonné debian.

La distribution kali nous semblait plus adapatée nous avons abandonné debian au profit de kali principalement car celle-ci propose un nombre très important d'outils de test et de diagnostic.

Openvas est un logiciel open source qui permet d'auditer la sécurité d'un réseau en scannant toutes les machines ayant une adresse ip sur celui-ci et ainsi trouver des vulnérabilités.


Le test ayant été concluant il m'a été demandé de rédiger des protocoles d'utilisation et d'installer openvas sur différentes machines car l'installation peut s'avérer complexe si l'on n'utilise pas kali mais une distribution plus primitve de linux.
En effet, l'installation peut être problématique à cause des pare feu de l'entreprise qui bloquent certains ports et empêchent donc l'installation.


Une fois openvans en place j'ai pu effectuer mon premier scan du réseau!