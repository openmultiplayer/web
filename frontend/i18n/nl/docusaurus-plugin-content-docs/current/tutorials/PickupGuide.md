---
title: Pickup Guide
sidebar_label: Pickup Guide
---

Een korte guide over het gebruik van pickups.

## Definieer de `pickupid`

Maak eerst een plek om het ID op te slaan. Gebruik een globale variabele zodat je het ID kunt zetten bij het aanmaken en kunt lezen in de callback wanneer de pickup wordt opgepakt. In dit voorbeeld gebruiken we `gMyPickup`.

```pawn
new gMyPickup;
```

## De pickup maken

Er zijn twee manieren: [CreatePickup](../scripting/functions/CreatePickup) en [AddStaticPickup](../scripting/functions/AddStaticPickup). `AddStaticPickup` geeft geen ID terug, kan niet vernietigd worden en hoort alleen in `OnGameModeInit`. We gebruiken daarom `CreatePickup`.

**Syntax van [CreatePickup](../scripting/functions/CreatePickup):**

**Parameters:**

| model        | Het model voor de pickup.                                             |
| ------------ | --------------------------------------------------------------------- |
| type         | Het spawn-type van de pickup, zie onderaan op deze pagina.            |
| Float:X      | X-coördinaat.                                                         |
| Float:Y      | Y-coördinaat.                                                         |
| Float:Z      | Z-coördinaat.                                                         |
| Virtualworld | Virtual world ID. Met -1 verschijnt de pickup in alle virtual worlds. |

Voor dit voorbeeld maken we een geld-pickup bij Grove Street.

Kies eerst een model. Een lijst staat o.a. [hier](https://dev.prineside.com/en/gtasa_samp_model_id). We nemen model 1274 (dollar-teken).

Kies vervolgens een [Type](../scripting/resources/pickuptypes). We willen dat de pickup verdwijnt bij oppakken en na enkele minuten terugkomt: type 2 doet precies dit.

Pickups maak je meestal bij het starten van het script in [OnGameModeInit](../scripting/callbacks/OnGameModeInit) of [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit), maar het kan in elke functie (bijv. in `OnPlayerDeath` voor wapendrops).

De code om onze pickup te maken en het ID in `gMyPickup` op te slaan:

```pawn
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### Bepaal wat hij doet

Bij oppakken wordt [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup) aangeroepen met `playerid` en `pickupid`.

Sommige types werken automatisch; zie [Pickup Types](../scripting/resources/pickuptypes).

Als een speler onze pickup pakt, geven we $100. Controleer eerst of het om ónze pickup gaat, en geef dan het geld:

```pawn
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // Check dat het opgepakte ID gelijk is aan gMyPickup
    if (pickupid == gMyPickup)
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "You received $100!");
        GivePlayerMoney(playerid, 100);
    }
    else if (pickupid == (some other pickup))
    {
        // Andere pickup, doe iets anders
    }
    return 1;
}
```

Gefeliciteerd, je kunt nu pickups maken en afhandelen!

## Verder lezen

- Met de [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) plugin kun je onbeperkte pickups maken via `CreateDynamicPickup`.
- Je kunt ook per-speler pickups maken met [CreatePlayerPickup](../scripting/functions/CreatePlayerPickup).
