---
title: AddStaticPickup
sidebar_label: AddStaticPickup
description: Fügt ein 'static' Pickup zum Spiel hinzu.
tags: [Pickup]
---

## Beschreibung

Fügt ein 'static' Pickup zum Spiel hinzu. Diese Pickups unterstützen Waffen, Leben, Rüstung etc., mit der Fähigkeit ohne gescripted zu werden zu funktionieren. (weapons/health/armor wird automatisch gegeben).

| Name                                | Beschreibung                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | Die Model ID des Pickups.                                    |
| [type](../resources/pickuptypes) | Der Pickup Typ. Beeinflusst das Verhalten, wenn das Pickup aufgehoben wird.                 |
| Float:X                             | Die X Koordinate an der das Pickup erstellt wird.                                           |
| Float:Y                             | Die Y Koordinate an der das Pickup erstellt wird.                                           |
| Float:Z                             | Die Z Koordinate an der das Pickup erstellt wird.                                           |
| virtualworld                        | Die virtuelle Welt in der das Pickup erstellt wird. Nutze -1 um es in jeder virtuellen Welt zu zeigen. |

## Rückgabe(return value)

1 wenn das Pickup erstellt wurde.

0 wenn das Pickup nicht erstellt werden konnte.

## Beispiele

```c
public OnGameModeInit()
{
    // Erstelle ein Pickup für Armor (Rüstung)
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Erstelle ein Pickup für Health (Leben)
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Anmerkungen

:::tip

Diese Funktion gibt keine ID zurück, mit der auf das Objekt zugegriffen werden kann (z.B. in OnPlayerPickUpPickup). Nutze stattdessen CreatePickup wenn du mit der ID arbeiten möchtest.

:::

## Related Functions

- [CreatePickup](CreatePickup): Erstellt ein Pickup.
- [DestroyPickup](DestroyPickup): Löscht ein Pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Wird aufgerufen wenn ein Spieler ein Pickup aufhebt.
