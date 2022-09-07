---
title : "Contrôle d'un serveur"
description : Commandes utiles pour contrôler un serveur.
---

## Changer de mode de jeu

### Exécution d'un mode de jeu personnalisé/téléchargé

- Ouvrez le répertoire dans lequel vous avez installé le serveur (par exemple : /Rockstar Games/GTA San Andreas/server)
- Prenez le fichier .amx téléchargé/compilé et placez-le dans le dossier gamemodes où vous avez installé le serveur
- Utilisez RCON pour changer de mode comme décrit ci-dessus (2.1)
- Alternativement, vous pouvez ajouter le nouveau mode à une rotation, également décrit ci-dessus (2.3)

### Utiliser des scripts de filtrage

Identique à l'exécution d'un mode de jeu personnalisé, sauf :

- Placez le .amx dans un dossier appelé `filterscripts`
- Ajoutez ce qui suit à server.cfg : `filterscripts <scriptname>`

## Mot de passe de votre serveur

- Si vous souhaitez ajouter un mot de passe pour que seuls vos amis puissent vous rejoindre, ajoutez-le à [server.cfg](server.cfg) :

```
mot de passe quel qu'il soit
```

- Cela rendra votre serveur protégé par un mot de passe avec le mot de passe défini comme "quel que soit" - changez-le en ce que vous voulez.
- Vous pouvez également changer le mot de passe pendant le jeu en utilisant `/rcon password newpasswordhere`
- Vous pouvez supprimer le mot de passe en utilisant `/rcon password 0`, ou en redémarrant le serveur.

## Utilisation de RCON

### Se connecter

Vous pouvez vous connecter pendant le jeu en tapant `/rcon login password` ou hors jeu en utilisant le mode RCON dans la [Remote Console] (RemoteConsole).

Le mot de passe est le même que celui que vous avez défini dans [server.cfg](server.cfg)

### Ajout d'interdictions

##### samp.ban

samp.ban est le fichier utilisé pour stocker les interdictions, y compris les informations suivantes sur l'interdiction :

-IP
- Date
- Temps
- Nom (Nom de la personne ou un motif, voir [BanEx](../../functions/BanEx))
- Type d'interdiction

Pour ajouter une interdiction, ajoutez simplement une ligne comme ceci :

```
IP_HERE [28/05/09 | 13:37:00] JOUEUR - RAISON DU BAN
```

Où `IP_HERE` est, c'est là que vous mettez l'adresse IP que vous souhaitez interdire.

##### Fonction Ban()

La fonction [Ban](../scripting/functions/Ban) peut être utilisée pour bannir un joueur d'un script. La fonction [BanEx](../scripting/functions/BanEx) ajoutera une raison facultative comme ceci :

```
13.37.13.37 [28/05/09 | 13:37:00] Tricheur - INGAME BAN
```

##### Commande d'interdiction RCON

La commande RCON ban, exécutée en tapant /rcon ban in-game ou en tapant "ban" dans la console, est utilisée pour bannir un joueur spécifique qui se trouve sur votre serveur, pour bannir une IP voir la section suivante.

Tapez simplement :

```
# En jeu:
/rcon ban PLAYERID

# Console:
interdire PLAYERID
```

##### banip

La commande RCON banip, exécutée en tapant /rcon banip en jeu ou en tapant "banip" dans la console, permet de bannir une adresse IP spécifique, de bannir un joueur sur votre serveur par ID, voir la section précédente. Acceptera les caractères génériques pour les interdictions de plage.

Tapez simplement :

```
# En jeu:
/rcon banip IP

# Console:
banip IP
```

### Suppression des interdictions

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

Pour les débannir, supprimez simplement la ligne, puis exécutez la commande RCON reloadbans pour que le serveur relise samp.ban.

#### unbanip

La commande RCON unbanip peut être utilisée dans le jeu ou depuis la console du serveur (boîte noire). Pour débannir une adresse IP, tapez simplement `/rcon unbanip IP_HERE` dans le jeu ou `unbanip IP_HERE` dans la console.

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

Pour les débannir, utilisez simplement la commande `unbanip`, puis exécutez la commande RCON `reloadbans` pour que le serveur relise samp.ban.

#### reloadbans

`samp.ban` est un fichier qui contient les informations sur les adresses IP actuellement bannies du serveur. Ce fichier est lu au démarrage du serveur, donc si vous débloquez une adresse IP/personne, vous DEVEZ taper la commande RCON `reloadbans` pour que le serveur lise à nouveau `samp.ban` et lui permette de rejoindre le serveur.

### Commandes RCON

Tapez cmdlist pour les commandes (ou varlist pour les variables) en utilisant le RCON en jeu (`/rcon cmdlist`).

Voici les fonctions que vous pouvez utiliser en tant qu'administrateur :

| Commande | Descriptif |
| --------------------------------- | -------------------------------------------------- -------------------------------------------------- ------------------------------------------------- |
| `/rcon cmdlist` | Affiche une liste avec des commandes. |
| `/rcon varlist` | Affiche une liste avec les variables actuelles.
