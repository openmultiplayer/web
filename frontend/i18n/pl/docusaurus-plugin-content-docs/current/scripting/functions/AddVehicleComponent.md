---
title: AddVehicleComponent
sidebar_label: AddVehicleComponent
description: Dodaje „komponent” (część tuningową) do pojazdu.
tags: ["vehicle"]
---

## Opis

Dodaje „komponent” (część tuningową) do pojazdu. Listę komponentów znajdziesz poniżej.

| Nazwa                                      | Opis                                                                         |
| ------------------------------------------ | ---------------------------------------------------------------------------- |
| vehicleid                                  | ID pojazdu, w którym komponent ma zostać zamontowany. Nie mylić z ID modelu. |
| [componentid](../resources/carcomponentid) | ID komponentu, który ma zostać zamontowany w pojeździe.                      |

## Zwracane wartości

0 - Komponent nie został zamontowany, ponieważ pojazd nie istnieje.

1 - Komponent został pomyślnie zamontowany w pojeździe.

## Przykłady

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi
    return 1;
}

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // Nitro
            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro zostało zamontowane w taksówce.");
        }
    }
    return 1;
}
```

## Uwagi

:::warning

Użycie nieprawidłwego ID komponentu powoduje zcrashowanie klienta. Nie ma żadnych dodatkowych zabezpieczeń na to.

:::

## Powiązane funkcje

- [RemoveVehicleComponent](RemoveVehicleComponent): Usuwa komponent z pojazdu.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Sprawdza, jakie komponenty pojazd posiada.
- [GetVehicleComponentType](GetVehicleComponentType): Sprawdza typ komponentu po ID.
- [OnVehicleMod](../callbacks/OnVehicleMod): Wywoływane, kiedy pojazd jest tuningowany.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Wywoływane, gdy pojazd wjedzie lub wyjedzie z warsztatu tuningowego.
