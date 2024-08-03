---
title: OnPlayerWeaponShot
description: Cette fonction est appelée lorsqu'un joueur tire avec une arme à feu.
tags: ["player"]
---

## Paramètres

Cette fonction est appelée lorsqu'un joueur tire avec une arme à feu. Si un conducteur tire depuis son véhicule, la callback ne sera pas appelée. En revanche, si un passager tire depuis son véhicule, la callback sera bel et bien appelée.

| Nom                           | Description                                                                                             |
|-------------------------------|---------------------------------------------------------------------------------------------------------|
| `int` playerid                | L'ID du joueur qui tire                                                                                 |
| `int` WEAPON:weaponid         | L'ID de l'[arme](../resources/weaponids) qui tire                                                       |
| `int` BULLET_HIT_TYPE:hittype | Le [type](../resources/bullethittypes) de cible touchée _(rien, joueur, véhicule, ou objet(de joueur))_ |
| `int` hitid                   | L'ID du joueur, véhicule ou objet touché                                                                |
| `float` Float:fX              | Les coordonnées X touchée par le tir                                                                    |
| `float` Float:fY              | Les coordonnées Y touchée par le tir                                                                    |
| `float` Float:fZ              | Les coordonnées Z touchée par le tir                                                                    |

## Valeur de retour

**0** - Empêche le tir de causer des dégâts.

**1** - Autorise le tir à causer des dégâts.


## Exemple

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    
    format(szString, sizeof(szString), "L'arme %i vient de faire feu. hittype: %i   hitid: %i   position: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
 
    return 1;
}
```

## Astuces

:::tip

Si la cible est :

* `BULLET_HIT_TYPE_NONE` : les variables `fX`, `fY` et `fZ` seront égales à des coordonnées normales ;
* Autre : Les variables `fX`, `fY` et `fZ` seront généralement décalés du centre de hitid.

:::

:::tip

[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) peut être utilisé dans cette callback pour plus de détails sur les vecteurs de la balle.

:::

:::warning

Bugs connus :

- N'est pas appelé si vous avez tiré dans le véhicule en tant que conducteur ou si vous regardez derrière avec la visée activée (tir en l'air).
- Il est appelé `BULLET_HIT_TYPE_VEHICLE` avec le `hitid` correct _(le véhicule du joueur touché)_ si vous tirez sur un joueur qui se trouve dans un véhicule. Il ne s'appellera pas du tout `BULLET_HIT_TYPE_PLAYER`. 
- Partiellement corrigé en 0.3.7 : Si de fausses données d'armes sont envoyées par un utilisateur malveillant, d'autres clients joueurs peuvent se bloquer ou planter. Pour lutter contre cela, vérifiez si l'arme signalée peut réellement tirer des balles.

:::

## Fonctions connexes

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Récupère le vecteur du dernier coup tiré par un joueur.
