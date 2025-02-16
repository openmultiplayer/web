---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: Tinatawag ang callback na ito kapag nakumpleto ang request sa SendClientCheck
tags: []
---

## Description

Tinatawag ang callback na ito kapag nakumpleto ang request sa SendClientCheck

| Name          | Description                       |
| ------------- | --------------------------------- |
| playerid      | Ang ID ng player na i-checheck    |
| actionid      | Ang uri ng pag-checheck na ginawa.|
| memaddr       | Ang address requested.            |
| retndata      | Ang resulta ng pag check          |

## Returns

Palaging una itong tinatawag sa mga filterscript.

## Examples

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // or 72
    {
        print("The player is connecting using the PC client.");
    }
    return 1;
}
```

## Notes

:::warning

**SA:MP Server**: Ang callback na ito ay tinatawag lamang kapag ito ay nasa isang filterscript.

**Open Multiplayer Server**: Ang callback na ito ay normal na gumagana sa loob ng isang gamemode / filterscript.

:::

## Related Functions

Maaaring maging kapaki-pakinabang ang sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [SendClientCheck](../functions/SendClientCheck): Magsagawa ng memory check sa client.