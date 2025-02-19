---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: This callback is called when a player starts to exit a vehicle.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Paglalarawan

Ang callback na ito ay natatawag kapag ang isang manlalaro ay lumabas sa sasakyan.

| Pangalan    | Deskripsyon                                                    |
| ----------- | -------------------------------------------------------------- |
| playerid     | Ang ID ng manlalaro ng lumalabas sa sasakyan.                  |
| vehicleid | Ang ID ng sasakyan na kung saan ang manlalaro ay lumalabas.               |

## Returns

Lagi itong na tatawag una sa mga filterscript.

## Halimbawa ng Paggamit

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "INFO: Ikaw ay lumalabas sa sasakyan %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Mga Dapat Unawain

:::warning

- Hindi tinawag kung ang manlalaro ay nahulog mula sa isang bisikleta o inalis mula sa isang sasakyan sa pamamagitan ng iba pang paraan tulad ng paggamit ng [SetPlayerPos](../funcions/SetPlayerPos.md).
- Dapat mong gamitin ang [OnPlayerStateChange](./OnPlayerStateChange) at tingnan kung ang kanilang lumang estado ay PLAYER_STATE_DRIVER o PLAYER_STATE_PASSENGER at ang kanilang bagong estado ay PLAYER_STATE_ONFOOT.

:::

## Mga Kaugnay na Callback

Maaaring maging kapaki-pakinabang din ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o sa iba pa.

- [OnPlayerEnterVehicle:](./OnPlayerEnterVehicle.md): Tinatawag kapag ang manlalaro ay sumakay sa sasakyan.
- [OnPlayerStateChange](./OnPlayerStateChange.md): Tinatawag kapag nagbago ang estado ng manlalaro.

## Mga Kaugnay na Functions

Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [RemovePlayerFromVehicle](../functions/PutPlayerInVehicle.md): Itapon ang isang manlalaro sa labas ng kanilang sasakyan.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat.md): Suriin kung saan nakaupo ang isang manlalaro.
