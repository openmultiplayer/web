---
title: AddVehicleComponent
description: Adaugă o 'componentă' (adesea denumită 'mod' (modificare)) unui vehicul.
tags: ["vehicle"]
---

## Descriere

Adaugă o 'componentă' (adesea denumită 'mod' (modificare)) unui vehicul. Componentele valide pot fi găsite [aici](../resources/carcomponentid).

| Nume        | Descriere                                                                        |
| ----------- | -------------------------------------------------------------------------------- |
| vehicleid   | ID-ul vehiculului la care se adaugă componenta. Nu trebuie confundat cu modelid. |
| componentid | ID-ul [componentei](../resources/carcomponentid) de adăugat la vehicul.          |

## Se intoarce

0 - Componenta nu a fost adăugată deoarece vehiculul nu există.

1 - Componenta a fost adăugată cu succes la vehicul.

## Exemple

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi
    return 1;
}

public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // Nitro
            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro added to the Taxi.");
        }
    }
    return 1;
}
```

## Note

:::warning

Utilizarea unui ID de componentă nevalid blochează jocul jucătorului. Nu există verificări interne pentru acest lucru.

:::

## Funcții conexe

- [RemoveVehicleComponent](RemoveVehicleComponent): Scoateți o componentă dintr-un vehicul.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Verificați ce componente are un vehicul.
- [GetVehicleComponentType](GetVehicleComponentType): Verificați tipul de componentă prin ID.
- [OnVehicleMod](../callbacks/OnVehicleMod): Apelat când un vehicul este modificat.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Apelat când un vehicul intră sau iese dintr-un magazin de moduri.
