---
title: AddVehicleComponent
description: Nagdaragdag ng 'bahagi' (madalas na tinutukoy bilang 'mod' (pagbabago)) sa isang sasakyan.
tags: ["vehicle"]
---

## Description

Nagdaragdag ng 'bahagi' (madalas na tinutukoy bilang 'mod' (pagbabago)) sa isang sasakyan. Ang mga wastong bahagi ay matatagpuan dito.

| Name                                          | Description                                                                       |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| vehicleid                                     | Ang ID ng sasakyan kung saan idaragdag ang bahagi. Hindi dapat malito sa modelid. |
| [componentid](../resources/carcomponentid) | Ang ID ng component na idaragdag sa sasakyan.                                        |

## Returns

0 - Hindi naidagdag ang component dahil wala ang sasakyan.

1 - Ang bahagi ay matagumpay na naidagdag sa sasakyan.

## Examples

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

## Notes

:::warning

Ang paggamit ng di-wastong component ID ay nag-crash sa laro ng player. Walang mga panloob na pagsusuri para dito.

:::

## Related Functions

- [RemoveVehicleComponent](RemoveVehicleComponent): Alisin ang isang bahagi mula sa isang sasakyan.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Suriin kung anong mga bahagi mayroon ang sasakyan.
- [GetVehicleComponentType](GetVehicleComponentType): Suriin ang uri ng bahagi sa pamamagitan ng ID.
- [OnVehicleMod](../callbacks/OnVehicleMod): Tinatawag kapag ang isang sasakyan ay modded.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Tinatawag kapag pumasok o lumabas ang sasakyan sa isang mod shop.