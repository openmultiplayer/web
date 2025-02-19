---
title : "Contrôle d'un serveur"
description : Commandes utiles pour contrôler un serveur.
---

## Changer de mode de jeu

### Exécution d'un mode de jeu (gamemode) personnalisé/téléchargé

- Ouvrez le répertoire dans lequel vous avez installé le serveur (par exemple : /Rockstar Games/GTA San Andreas/server)
- Prenez le fichier .amx téléchargé/compilé et placez-le dans le dossier gamemodes où vous avez installé le serveur
- Utilisez RCON pour changer de mode comme décrit ci-dessous ("Mot de passe de votre serveur")
- Alternativement, vous pouvez ajouter le nouveau mode à une rotation

### Utiliser des filterscripts

Identique à l'exécution d'un mode de jeu personnalisé, sauf :

- Placez le .amx dans un dossier appelé `filterscripts`
- Ajoutez le nom du fichier .amx dans `pawn.side_scripts` du fichier [config.json](config.json)

## Mot de passe de votre serveur

- Si vous souhaitez ajouter un mot de passe pour que seuls vos amis puissent vous rejoindre, ajoutez-le au fichier [config.json](config.json) :

```
"password": "votre-mot-de-passe"
```

- Cela rendra votre serveur protégé par un mot de passe avec le mot de passe défini comme "votre-mot-de-passe" - changez-le en ce que vous voulez.
- Vous pouvez également changer le mot de passe pendant le jeu en utilisant `/rcon password newpasswordhere`
- Vous pouvez supprimer le mot de passe en utilisant `/rcon password 0`, ou en redémarrant le serveur.

## Utilisation de RCON

### Se connecter

Vous pouvez vous connecter pendant le jeu en tapant `/rcon login password` ou hors jeu en utilisant le mode RCON dans la [Remote Console] (RemoteConsole).

Le mot de passe est le même que celui que vous avez défini dans [config.json](config.json) dans `rcon.password`.

### Bannir un joueur

##### samp.ban

samp.ban est le fichier utilisé pour stocker les joueurs bannis, y compris les informations suivantes sur l'interdiction :

- IP
- Date
- Temps
- Nom (Nom de la personne ou un motif, voir [BanEx](../../functions/BanEx))
- Type d'interdiction

Pour ajouter un nouveau joueur à bannir, ajoutez simplement une ligne comme ceci :

```
ADRESSE_IP [28/05/09 | 13:37:00] JOUEUR - RAISON DU BAN
```

`ADRESSE_IP` étant l'adresse IP du joueur à bannir.

##### Fonction Ban()

La fonction [Ban](../scripting/functions/Ban) peut être utilisée pour bannir un joueur à partir d'un script. La fonction [BanEx](../scripting/functions/BanEx) ajoutera une raison facultative comme ceci :

```
13.37.13.37 [28/05/09 | 13:37:00] JOUEUR - INGAME BAN
```

##### Commande de ban avec RCON

La commande RCON ban, exécutée en tapant /rcon ban dans le jeu ou en tapant "ban" dans la console, est utilisée pour bannir un joueur spécifique qui se trouve sur votre serveur, pour bannir une IP voir la section suivante.

Tapez simplement :

```
# En jeu:
/rcon ban PLAYERID

# Console:
ban PLAYERID
```

##### banip

La commande RCON banip, exécutée en tapant /rcon banip dans le jeu ou en tapant "banip" dans la console, permet de bannir une adresse IP spécifique. Pour bannir un joueur sur votre serveur avec son ID, voir la section précédente.
Cette commande accepte les caractères "wildcards" pour bannir une plage d'adresse.

Tapez simplement :

```
# En jeu:
/rcon banip IP

# Console:
banip IP
```

### Suppression d'un ban

Une fois que quelqu'un est banni, il y a deux façons de le débannir.

- Supprimer de samp.ban
- La commande RCON `unbanip`

#### samp.ban

samp.ban se trouve dans le répertoire de votre serveur sa-mp, il contient des lignes avec les informations suivantes sur chaque interdiction :

- IP
- Date
- Temps
- Nom (Nom de la personne ou un motif (voir [BanEx](../scripting/functions/BanEx)))
- Type d'interdiction (INGAME, IP BAN etc,)

Exemples:

```
127.8.57.32 [13/06/09 | 69:69:69] AUCUN - INTERDICTION IP
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INTERDICTION DE JEU
```

Pour les débannir, supprimez simplement la ligne, puis exécutez la commande RCON `reloadbans` pour actualiser la liste des joueurs bannis à partir du fichier samp.ban.

#### unbanip

La commande RCON unbanip peut être utilisée dans le jeu ou depuis la console du serveur. Pour débannir une adresse IP, tapez simplement `/rcon unbanip ADRESSE_IP` dans le jeu ou `unbanip ADRESSE_IP` dans la console.

Exemple:

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INTERDICTION DE JEU
```

```
# En jeu:
/rcon unbanip 13.37.13.37

# Console
unbanip 13.37.13.37
```

Pour les débannir, utilisez simplement la commande `unbanip`, puis exécutez la commande RCON `reloadbans` pour actualiser la liste des joueurs bannis à partir du fichier samp.ban.

#### reloadbans

`samp.ban` est un fichier qui contient les informations sur les adresses IP actuellement bannies du serveur. Ce fichier est lu au démarrage du serveur, donc si vous débloquez une adresse IP/personne, vous DEVEZ taper la commande RCON `reloadbans` pour que le serveur lise à nouveau `samp.ban` et lui permette de rejoindre le serveur.

### Commandes RCON

Tapez cmdlist pour les commandes (ou varlist pour les variables) en utilisant le RCON en jeu (`/rcon cmdlist`).

Voici les fonctions que vous pouvez utiliser en tant qu'administrateur :

| Command                           | Description                                                                                                                                           |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                   | Affiche la liste des commandes                                                                                                                           |
| `/rcon varlist`                   | Affiche la liste des variables                                                                                                             |
| `/rcon exit`                      | Arrête le serveur.                                                                                                                                    |
| `/rcon echo [text]`               | Affiche le texte `[text]` dans la console (ce texte n'apparait PAS dans le jeu).                                                                     |
| `/rcon hostname [name]`           | Change le nom du serveur (_exemple: /rcon hostname mon nouveau serveur_).                                                                                       |
| `/rcon gamemodetext [name]`       | Change le nom du mode de jeu (_exemple: /rcon gamemodetext mon mode de jeu_).                                                                                 |
| `/rcon mapname [name]`            | Change le nom de la map (_exemple: /rcon mapname San Andreas_).                                                                                      |
| `/rcon exec [filename]`           | Executes the file which contains server cfg (_exemple: /rcon exec blah.cfg_).                                                                         |
| `/rcon kick [ID]`                 | Kick le joueur ayant l'identifiant ID (_exemple: /rcon kick 2_).                                                                                          |
| `/rcon ban [ID]`                  | Ban le joueur ayant l'identifiant ID (_exemple: /rcon ban 2_).                                                                                            |
| `/rcon changemode [mode]`         | Change le mode de jeu actuel (relance le serveur avec un nouveu fichier .amx) (_exemple: si tu veux lancer le mode sftdm.amx: /rcon changemode sftdm_).                        |
| `/rcon gmx`                       | Charge le prochain gamemode du fichier [config.json](config.json).                                                                                              |
| `/rcon reloadbans`                | Recharge le fichier `samp.ban` où sont stockés les joueurs et IP bannis. Doit être utilisé après avoir modifié le fichier.                                  |
| `/rcon reloadlog`                 | Recharge le fichier `server_log.txt`. Utile pour une rotation automatique de journalisation. Peut être déclenché en envoyant un signal `SIGUSR1` au serveur (Serveur Linux uniquement).  |
| `/rcon say`                       | Affiche un message dans le chat des joueurs (exemple: `/rcon say hello` affichera dans le chat: `Admin: hello`).                                        |
| `/rcon players`                   | Affiche la liste des joueurs connectés (nom, IP et ping).                                                                                |
| `/rcon banip [IP]`                | Ban l'adresse IP (_exemple: /rcon banip 127.0.0.1_).                                                                                                  |
| `/rcon unbanip [IP]`              | Unban l'adresse IP (_exemple: /rcon unbanip 127.0.0.1_).                                                                                              |
| `/rcon gravity`                   | Modifie la gravité (_exemple: /rcon gravity 0.008_).                                                                                                 |
| `/rcon weather [ID]`              | Modifie la météo (_exemple: /rcon weather 1_).                                                                                                     |
| `/rcon loadfs`                    | Charge un filterscript (_exemple: /rcon loadfs adminfs_).                                                                                       |
| `/rcon weburl [server url]`       | Change l'URL affichée dans le client open.mp                                                                                                |
| `/rcon unloadfs`                  | Retire le filterscript (_exemple: /rcon unloadfs adminfs_).                                                                                    |
| `/rcon reloadfs`                  | Recharge le filterscript (_exemple: /rcon reloadfs adminfs_).                                                                                   |
| `/rcon rcon\_password [PASSWORD]` | Change le mot de passe RCON                                                                                                                            |
| `/rcon password [password]`       | Change ou reset le mot de passe du serveur                                                                                                                       |
| `/rcon messageslimit [count]`     | Modifie le nombre de message par secondes que le client envoie au serveur (valeur par défaut: 500)                 |
| `/rcon ackslimit [count]`         | Modifie le nombre de "acks" (nombre de paquets envoyés avant d'attendre un accusé de réception) (valeur par défaut: 3000)                      |
| `/rcon messageholelimit [count]`  | Modifie le nombre de "message holes" (nombre de messages perdus possibles avant déconnexion) (valeur par défaut: 3000)                         |
| `/rcon playertimeout [limit m/s]` | Modifie le nombre de millisecondes à attendre avant de déconnecter un joueur qui n'envoie plus de paquet (valeur par défaut: 1000) |
| `/rcon language [language]`       | Change la langue du serveur (_example: /rcon language English_). Affiché dans le client open.mp.             |

Les valeurs count et limit des 4 dernières commandes sont configurés pour éviter les attaques de potentiels outils pouvant bloquer ou crasher le serveur. Configurez les en fonction de votre serveur, testez avec les valeurs par défaut, si vous voyez des kicks incohérents augmentez les valeurs, jusqu'à ne plus voir de personnes kickés par un problème de connexion.

### Callbacks et Fonctions connexes

Les callbacks et fonctions suivantes peuvent être utiles car elles sont liés à cet article.

#### Callbacks

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt): Appelé lorsqu'une tentative de connexion au RCON est effectuée.

#### Functions

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin): Vérifie si un joueur est connecté au RCON.

- [SendRconCommand](../scripting/functions/SendRconCommand): Envoie une commande RCON via un script.
