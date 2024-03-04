---
title: OnEnterExitModShop
description: This callback is called when a player enters or exits a mod shop.
tags: []
---

## Deskripsyon

Ang callback na ito ay na cacall kapag ang player ay pumasok o umalis mula sa mod shop.

| Pangalan   | Deskripsyong                                                                 |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | Ang ID ng player na pumasok o umalis ng mod shop                             |
| enterexit  | 1 kapag ang player ay pumasok o 0 kapag ang player ay umalis mula sa modshop |
| interiorid | Ang Interior ID ng modshop na pinasukan ng player (0 kapag umaalis)          |

## Returns

Lagi itong na cacall una sa mga filterscript.

## Mga Halimbawa

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // if enterexit == 0 kapag umaalis mula sa mod shop.
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Mga Dapat Unawain

:::warning

Mga Kadalasang Bugs: Nag bubungguan ang mga players kapag parehas na pumasok sa mod shop.

:::

## Mga Kaugnay na Functions

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Maglagay ng component sa sasakyan.
