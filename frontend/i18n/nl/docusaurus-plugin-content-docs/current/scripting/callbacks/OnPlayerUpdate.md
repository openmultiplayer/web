---
title: OnPlayerUpdate
sidebar_label: OnPlayerUpdate
description: Deze callback wordt aangeroepen telkens wanneer een client/speler de server bijwerkt met zijn status.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen telkens wanneer een client/speler de server bijwerkt met zijn status. Vaak gebruikt om custom callbacks te maken voor client-updates die de server niet actief bijhoudt, zoals health/armor-updates of wapenwissels.

| Naam     | Beschrijving                                  |
| -------- | --------------------------------------------- |
| playerid | ID van de speler die een updatepakket stuurt. |

## Returns

0 - Update van deze speler wordt niet gerepliceerd naar andere clients.

1 - Update wordt normaal verwerkt en naar andere spelers gestuurd.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

**Voorbeeld 1**

```c
new WEAPON:gPlayerCurrentWeapon[MAX_PLAYERS];

public OnPlayerUpdate(playerid)
{
    new WEAPON:weapon = GetPlayerWeapon(playerid); // Huidig wapen
    if (weapon != gPlayerCurrentWeapon[playerid]) // Gewisseld sinds laatste update
    {
        // Roep een callback OnPlayerWeaponChange
        CallLocalFunction("OnPlayerWeaponChange", "iii", playerid, gPlayerCurrentWeapon[playerid], weapon);
        gPlayerCurrentWeapon[playerid] = weapon; // Bijwerken
    }
    return 1; // Stuur deze update door
}

forward OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon);
public OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon)
{
    new
        string[128],
        oldWeaponName[24],
        newWeaponName[24];

    GetWeaponName(oldWeapon, oldWeaponName, sizeof(oldWeaponName));
    GetWeaponName(newWeapon, newWeaponName, sizeof(newWeaponName));

    format(string, sizeof(string), "You changed weapon from %s to %s!", oldWeaponName, newWeaponName);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

**Voorbeeld 2**

```c
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;
    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Health is veranderd sinds laatste update
        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            // Health erbij
        }
        else
        {
            // Health eraf
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Notities

<TipNPCCallbacks />

:::warning

Deze callback wordt gemiddeld ~30 keer per seconde per speler aangeroepen; gebruik hem alleen waarvoor hij bedoeld is. De frequentie varieert per activiteit (rijden/schieten meer dan idle).

:::
