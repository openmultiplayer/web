---
title: OnPlayerUpdate
description: Cette callback est appelée à chaque fois qu'un client/joueur modifie son status auprès du serveur.
tags: ["player"]
---

## Paramètres

Cette callback est appelée à chaque fois qu'un client/joueur modifie son status auprès du serveur. Elle est souvent utilisée pour créer des callbacks personnalisées qui ne sont pas présentes nativement, telle que le changement de vie, d'armure ou le changement d'arme.

| Nom            | Description                                   |
| -------------- | --------------------------------------------- |
| `int` playerid |ID du joueur ayant envoyé un paquet au serveur |

## Valeur de retour

**0** - La mise à jour du joueur ne sera pas appliquée aux autres joueurs.

**1** - Indique que la mise à jour peut être traité de façon normale et envoyé aux autres joueurs.

## Exemples

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // Retourne l'arme actuelle du joueur		
    if(iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // S'il l'arme à changer depuis la dernière mise à jour
    {
        // Appelons une callback nommée OnPlayerChangeWeapon
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Met à jour la variable arme du joueur
    }
    return 1; // Envoi de la mise à jour à tous les joueurs.
}
 
stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
	new     s[128],
		oWeapon[24],
		nWeapon[24];
 
	GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
	GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));
 
	format(s, sizeof(s), "Vous avez changé votre arme de %s à %s!", oWeapon, nWeapon);
 
	SendClientMessage(playerid, 0xFFFFFFFF, s);
}
```

```c
public OnPlayerUpdate(playerid)
{
	new Float:fHealth;
 
	GetPlayerHealth(playerid, fHealth);
 
	if(fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
	{
	    // La vie du joueur a changé depuis la dernière mise à jour, c'est donc bien la mise à jour qui a été envoyée.
	    // Vérifions s'il a perdu ou gagné de la vie (anti-cheat vie ? ;)) 
 
	    if(fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
	    {
	        /* Il a gagné de la vie! Triche? */
 
	    }
	    else
	    {
	        /* Il a perdu de la vie! */
	    }
 
	    SetPVarFloat(playerid, "faPlayerHealth", fHealth);
	}
}
```
## Astuces

<TipNPCCallbacks />

:::warning

Cette callback est appelée environ 30 fois par secondes, par joueur; à utiliser seulement quand vous savez exactement pourquoi.

La fréquence à laquelle est appelée cette callback varie en fonction des joueurs, dépendant de ce que fait le joueur. La fréquence d'appel sera plus élevé quand le joueur conduira, tirera alors qu'elle sera plus basse quand le joueur sera statique.

:::

## Fonctions connexes
