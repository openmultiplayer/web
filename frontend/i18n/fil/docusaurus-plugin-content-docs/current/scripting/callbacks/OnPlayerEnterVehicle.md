---
title: OnPlayerEnterVehicle
sidebar_label: OnPlayerEnterVehicle
description: This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Paglalarawan

Ang callback na ito ay natatawag kapag ang isang manlalaro ay pumasok sa loob ng sasakyan.

| Pangalan    | Deskripsyon                                                    |
| ----------- | -------------------------------------------------------------- |
| playerid     | Ang ID ng manlalaro nag sumasakay sa sasakyan.                  |
| vehicleid | Ang ID ng sasakyan na pinasukan ng manlalaro.               |
| ispassenger | 0 kung ang manlalaro ay pumasok bilang driver, 1 kung pasahero.

## Returns

Lagi itong na tatawag una sa mga filterscript.

## Halimbawa ng Paggamit

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Ikaw ay sumasakay bilang %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Mga Dapat Unawain

:::tip

- Ang callback na ito ay tinatawag kapag ang isang manlalaro ay NAGSIMULA na pumasok sa isang sasakyan, hindi kapag napasok na nila ito.
- Ang callback na ito ay tinatawag pa rin kung ang player ay tinanggihan sa pagpasok sa sasakyan (hal. ito ay naka-lock o puno).

:::

## Mga Kaugnay na Callback

Maaaring maging kapaki-pakinabang din ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o sa iba pa.

- [OnPlayerExitVehicle](OnPlayerExitVehicle): Tinatawag kapag ang manlalaro ay umalis sa sasakyan.
- [OnPlayerStateChange](OnPlayerStateChange): Tinatawag kapag nagbago ang estado ng manlalaro.

## Mga Kaugnay na Functions

Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Maglagay ng manlalaro sa sasakyan.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Suriin kung saan nakaupo ang isang manlalaro.
