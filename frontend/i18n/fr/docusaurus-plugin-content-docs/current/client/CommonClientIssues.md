---
title: Erreurs récentes du client SA:MP
sidebar_label: Erreurs récentes du client SA:MP
description: Liste de toutes les erreurs possibles avec SA:MP / GTA:SA ainsi que leurs solutions.
---

## Erreurs récentes du client SA:MP

Le client SA:MP réserve parfois quelques surprises à ses utilisateurs, tantôt à raison d'un dysfonctionnement avec GTA:SA, tantôt à raison d'un problème avec le multijoueur lui-même.

## Côté client

### J'ai l'erreur "San Andreas cannot be found"

San Andreas Multiplayer n'est **pas** un programme indépendant du solo de GTA San Andreas. C'est un multijoueur qui ajoute plusieurs fonctionnalités à GTA San Andreas, il faut donc que vous ayez GTA:SA sur votre ordinateur.

Il faut également que votre jeu soit en version **EU/US v1.0**, les autres versions comme la v2.0 ou celle de Steam et Direct2Drive ne sont pas compatibles.
[Cliquez ici pour télécharger le patch du _downgrade_ de GTA:SA en version 1.0](https://www.gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch)


### Je ne vois aucun serveur sur le launcher

Tout d'abord, assurez-vous de suivre le [guide prescrit](https://sampwiki.blast.hk/wiki/Getting_Started) par SA:MP. Si, en dépit du fait d'avoir suivi ce guide à la lettre, vous ne voyez toujours aucun serveur, vous devez autoriser SA:MP sur votre pare-feu.

Aucun support ne peut être fourni relativement à votre pare-feu tant il y en a.

Enfin, assurez-vous d'avoir la version la plus récente de SA:MP !

### Le solo se charge au lieu du multijoueur

:::warning

Vous n'êtes pas censé voir les options solo _(nouveau jeu, sauvegardes, etc.)_ -. 
SA: MP devrait se charger tout seul et ne pas présenter ces options. Si vous voyez "nouveau jeu", c'est que le mode solo a été chargé, pas le mode multijoueur San Andreas.

:::

Le solo peut charger pour deux raisons :

1. Vous avez installer SA:MP dans le mauvais fichier ou vous avez une mauvaise version de jeu. Cliquez [ici](https://www.gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch) pour télécharger le patch.

2. Parfois, le menu du solo peut apparaître, alors même que SA:MP a été chargé correctement. Il suffit de sélectionner une option du menu et cliquez sur la touche echap pour revenir en arrière. Le problème devrait être réglé.


### J'ai un "Unacceptable Nickname" en me connectant sur un serveur

Assurez-vous de ne pas utiliser un caractère bloqué par SA:MP *(seulement les caractères 0-9, a-z, \[\], (), \$, @, ., \_ sont autorisés)* et que votre pseudo ne dépasse pas les 20 caractères.

Cela peut également arriver lorsqu'un joueur avec le même pseudo que vous est déjà connecté sur le serveur _(cela peut arriver si vous vous reconnectez rapidement après un crash ou timeout)_.


### J'ai "Connecting to IP:Port..." en boucle

Le serveur est sans doute hors ligne, mais tentez quand même de désactiver votre pare-feu Windows. Si cette solution fonctionne, vous devriez reconfigurer votre pare-feu. 

Vérifiez également que vous avez SA:MP en 0.3.DL ([télécharger la version 0.3.DL](https://www.sa-mp.mp/downloads/)).

### J'ai un jeu moddé et SA:MP ne charge plus

À problème simple, solution simple : retirez vos mods.

### GTA ne veut pas se lancer avec SA:MP

Supprimez le fichier gta_sa.set _(Documents\GTA San Andreas User Files)_ et, si tel est le cas, retirez vos cheats/mods.

### Mon jeu crash quand un véhicule explose

Si vous avez deux écrans, 3 solutions s'offrent à vous :

1. Désactivez votre second écran quand vous jouez à SA:MP.
2. Mettez la qualité visuelle de votre jeu en low. (Esc > Options > Display Setup > Advanced)
3. Renommez vitre fichier GTA San Andreas _(par exemple, en "GTA San Andreas2"). Cette solution fonctionne, si le problème revient il faudra renommer à nouveau votre fichier.
 
### Ma souris ne marche plus après avoir quitté le menu echap

Si votre souris semble être, totalement ou partiellement, figée alors qu'elle fonctionne dans le menu pause, vous devriez désactiver l'option _multicore_ [sa-mp.cfg](ClientCommands#file-sa-mpcfg "sa-mp.cfg") (valeur à mettre : 0). Ou alors spammmez la touche ECHAP jusqu'à ce que votre souris refonctionne.

### Le fichier dinput8.dll est manquant

Il est possible que ce problème survienne quand DirectX n'est pas correctement installé ; il faut alors le réinstaller _(sans oublier de redémarrer son PC)_.

Si le problème subsiste, rendez vous dans C:\\Windows\\System32 et copier/coller le fichier dinput.dll dans le dossier de votre GTA San Andreas. Cela devrait fonctionner.

### Je ne peux pas voir le nametag des autres joueurs !

D'abord, sachez que certains serveurs désactivent par défaut le nametag.

Ensuite, ce problème arrive parfois sur des ordinateurs avec une carte graphique Intel HD intégrée _(pas très gaming tout ça ...)_. 

Ce problème n'appelle pas à une solution universelle et totalement fonctionnelle, de telle sorte qu'il conviendrait plutôt de changer d'ordinateur.
