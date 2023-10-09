---
title: OnPlayerEnterCheckpoint
description: Tinatawag ang callback na ito kapag pumasok ang isang player sa checkpoint set para sa player na iyon.
tags: ["player", "checkpoint"]
---

## Description

Tinatawag ang callback na ito kapag pumasok ang isang player sa checkpoint set para sa player na iyon.

| Name     | Description                            |
| -------- | -------------------------------------- |
| playerid | Ang player na pumasok sa checkpoint    |

## Returns

Palaging una itong tinatawag sa mga filterscript.

## Examples

```c
//Sa halimbawang ito, isang checkpoint ang ginawa para sa player kapag nag-spawn,
//na lumilikha ng sasakyan at hindi pinapagana ang checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Ang callback na ito ay tinatawag kapag ang isang player ay umalis sa isang checkpoint.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Ang callback na ito ay tinatawag kapag ang player manlalaro ay pumasok sa isang race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Ang callback na ito ay tinatawag kapag ang player manlalaro ay umalis sa isang race checkpoint.

## Related Functions

Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Gumawa ng checkpoint para sa isang player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Huwag paganahin ang kasalukuyang checkpoint ng player.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Suriin kung ang isang player ay nasa isang checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Gumawa ng race checkpoint para sa isang player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): I-disable ang kasalukuyang race checkpoint ng player.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Suriin kung ang isang player ay nasa isang checkpoint ng karera.