---
title: PutPlayerInVehicle
description: Puts a player in a vehicle.
tags: ["player", "vehicle"]
---

## Paglalarawan

Inilalagay ang isang manlalaro sa isang sasakyan.

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| playerid  | Ang ID ng player na ilalagay sa isang sasakyan.   |
| vehicleid | Ang ID ng sasakyan kung saan ilalagay ang player. |
| seatid    | Ang ID ng upuan kung saan ilalagay ang player.    |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigong maisagawa ang function. Ang manlalaro o sasakyan ay wala.

## Halimbawa ng Paggamit

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassanger)
{
    PutPlayerInVehicle(playerid, vehicleid, 0);
    return 1;
}
```

```
0 - Driver
1 - Front passenger
2 - Back-left passenger
3 - Back-right passenger
4+ - Passenger seats (coach etc.)
```

## Mga Dapat Unawain

:::tip

- Maaari mong gamitin ang GetPlayerVehicleSeat sa isang loop upang tingnan kung ang isang upuan ay inookupahan ng sinumang manlalaro.

:::

:::warning

- Kung ang upuan ay hindi wasto o kinuha, ay magdudulot ng pag-crash kapag LUMABAS sila sa sasakyan.

:::

## Mga Kaugnay na Functions

- [RemovePlayerFromVehicle](./RemovePlayerFromVehicle): Itapon ang isang manlalaro sa labas ng kanilang sasakyan.
- [GetPlayerVehicleID](./GetPlayerVehicleID): Kunin ang ID ng sasakyan kung saan nakasakay ang player.
- [GetPlayerVehicleSeat](./GetPlayerVehicleSeat): Suriin kung saan nakaupo ang isang manlalaro.
- [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle): Tinatawag kapag nagsimulang pumasok ang isang manlalaro sa isang sasakyan.
