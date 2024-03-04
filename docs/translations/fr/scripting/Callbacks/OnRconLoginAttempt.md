---
title: OnRconLoginAttempt
description: Cette callback est appelée lorsque quelqu'un tente de se connecte en RCON, avec succès ou pas.
tags: []
---

## Paramètres

Cette callback est appelée lorsque quelqu'un tente de se connecte en RCON, avec succès ou pas.

| Nom                 | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `string` ip[]       | L'IP du joueur qui a tenté de se connecter                           |
| `string` password[] | Le mot de passe utilisé pour se connecter                            |
| `int` success        | 	**0** si le mot de passe est incorrect, ou **1** si il est correct |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if(!success) //Si le mot de passe est incorrect
    {
        printf("CONNEXION RCON ECHOUÉE PAR L'IP %s EN UTILISANT LE MOT DE PASSE %s",ip, password);
        new pip[16];
        for(new i=0; i<MAX_PLAYERS; i++) //Boucle qui passe par tous les joueurs
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if(!strcmp(ip, pip, true)) //Si l'IP du joueur est l'IP qui a tentée de se connecter.
            {
                SendClientMessage(i, 0xFFFFFFFF, "Mauvais mot de passe. Bye!"); //Envoie un message
                Ban(i); //Il est maintenant banni
            }
        }
    }
    return 1;
}
```

## Astuces

:::tip

Cette callback est appelée uniquement lorsque /rcon login est utilisé.

:::

## Fonctions connexes

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Vérifie si un joueur est loggé en RCON.
- [SendRconCommand](../functions/SendRconCommand): Exécute une commande RCON via le script.
