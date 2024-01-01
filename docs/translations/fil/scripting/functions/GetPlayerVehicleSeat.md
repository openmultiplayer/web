---
title: GetPlayerVehicleSeat
description: Find out which seat a player is in.
tags: ["player", "vehicle"]
---

<VersionWarn version='SA-MP 0.3a' />

## Paglalarawan

Alamin kung nasaang upuan nakaupo ang manlalaro.

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| playerid | Ang ID ng manlalaro na gusto mong makuha ang upuan. |

## Returns

- Ang ID ng upuan na kinaroroonan ng manlalaro. -1 ay wala sa sasakyan, 0 ang driver, 1 ang pasahero sa harap, at 2 & 3 ang mga pasahero sa likuran.

## Halimbawa ng Paggamit

```c
if (strcmp(cmdtext, "/myseat", true) == 0)
{
    new
        playerSeat = GetPlayerVehicleSeat(playerid);

    // Paano mo maitatanggal ang iyong impormasyon.
    if (playerSeat == 128)
    {
        return SendClientMessage(playerid, 0xFFFFFFFF, "Isang error ang pumigil sa amin na ireturn ang ID ng upuan.");
    }

    new
        message[14];

    format(message, sizeof(message), "Ang iyong upuan: %i", playerSeat);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Mga Kaugnay na Functions

Maaaring makatulong ang mga sumusunod na function habang nauugnay ang mga ito sa function na ito sa isang paraan o sa iba pa.

- [GetPlayerVehicleID](GetPlayerVehicleID): Kunin ang ID ng sasakyan kung saan nakasakay ang manlalaro.
- [PutPlayerInVehicle](PutPlayerInVehicle): Maglagay ng manlalaro sa isang sasakyan.
