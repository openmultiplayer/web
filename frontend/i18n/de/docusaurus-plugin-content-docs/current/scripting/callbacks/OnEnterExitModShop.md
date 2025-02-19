---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: Das Callback wird aufgerufen, wenn ein Spieler eine Tuningwerkstatt betritt oder verlässt.
tags: []
---

## Beschreibung

Das Callback wird aufgerufen, wenn ein Spieler eine Tuningwerkstatt betritt oder verlässt.

| Name       | Beschreibung                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | Die ID des Spielers                      |
| enterexit  | 1 bei Betreten 0 bei Verlassen der Werkstatt                                 |
| interiorid | Interior ID der Tuningwerkstatt die betreten wird (oder 0 beim Verlassen) |

## Rückgabe(return value)

Dieses Callback wird in Filterscripts immer zuerst aufgerufen.

## Beispiele

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Ist enterexit 0, verlässt der Spieler die Werkstatt
    {
        SendClientMessage(playerid, COLOR_WHITE, "Schönes Auto! Der Umbau kostet dich $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Anmerkungen

:::warning

Bekannte Bugs: Spieler kollidieren wenn sie sich zusammen in einer Werkstatt befinden.

:::

## Ähnliche Funktionen

- [AddVehicleComponent](../functions/AddVehicleComponent): Füge einem Fahrzeug ein Component(Tuning-Teil) hinzu.
