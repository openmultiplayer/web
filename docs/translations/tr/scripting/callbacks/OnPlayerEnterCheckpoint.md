---
title: OnPlayerEnterCheckpoint
description: Bu callback, bir oyuncu kendisi için oluşturulan checkpointe giriş yaptığında çağırılıyor.
tags: ["player", "checkpoint"]
---

## Açıklama

Bu callback, bir oyuncu kendisi için oluşturulan checkpointe giriş yaptığında çağırılıyor.

| İsim     | Açıklama                               |
| -------- | -------------------------------------- |
| playerid | Checkpointe giren oyuncunun ID'si.     |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnekler

```c
//Oyuncu spawnlandığında checkpoint oluşturulur ve oyuncu checkpointe girdiğinde bir araç spawnlanıp checkpoint silinir.
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

## Notlar

<TipNPCCallbacks />

## Bağlantılı Fonksiyonlar

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
