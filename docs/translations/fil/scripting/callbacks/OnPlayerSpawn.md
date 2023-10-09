---
title: OnPlayerSpawn
description: Tinatawag ang callback na ito kapag nag-spawn ang isang player.
tags: ["player"]
---

## Description

Tinatawag ang callback na ito kapag nag-spawn ang isang player.(i.e. pagkatapos i-cal ang [SpawnPlayer](../functions/SpawnPlayer) function)

| Name     | Description                        |
| -------- | ---------------------------------- |
| playerid | Ang ID ng player na nag-spawn      |

## Returns

0 - Pipigilan ang ibang mga filterscript na matanggap ang callback na ito.

1 - Isinasaad na ang callback na ito ay ipapasa sa susunod na filterscript.

Palaging una itong tinatawag sa mga filterscript.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

Ang laro ay minsan ay nagbabawas ng \$100 mula sa mga manlalaro pagkatapos ng spawn.

:::

## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnPlayerDeath](OnPlayerDeath): Tinatawag ang callback na ito kapag namatay ang isang player.
- [OnVehicleSpawn](OnVehicleSpawn): Ang callback na ito ay tinatawag kapag ang isang sasakyan ay respawn.

## Related Functions

Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa. 

- [SpawnPlayer](../functions/SpawnPlayer): Pilitin ang isang manlalaro na mag-spawn.
- [AddPlayerClass](../functions/AddPlayerClass): Mag add ng class.
- [SetSpawnInfo](../functions/SetSpawnInfo): I-set ang spawn setting para sa player.