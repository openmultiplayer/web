---
title: DestroyPickup
sidebar_label: DestroyPickup
description: Löscht ein mit CreatePickup erstelltes Pickup.
tags: []
---

## Beschreibung

Löscht ein mit CreatePickup erstelltes Pickup.

| Name   | Beschreibung                                                 |
| ------ | ----------------------------------------------------------- |
| pickup | Die ID des Pickups, dass gelöscht wird (Rückgabewert bei CreatePickup). |

## Rückgabe(return value)

Diese Funktion hat keinen Rückgabewert.

## Beispiel

```c
// Erstelle ein Pickup für Armor (Rüstung). ID wird in pickup_armor gespeichert.
pickup_armour = CreatePickup ( 1242, 2, 1503.3359, 1432.3585, 10.1191 );

//Lösche das Pickup über die gespeicherte ID wieder...
DestroyPickup(pickup_armour);
```

## Ähnliche Funktionen

- [CreatePickup](CreatePickup): Erstelle ein Pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Wird aufgerufen wenn ein Spieler ein Pickup aufhebt.
