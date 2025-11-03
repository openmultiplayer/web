---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: Bu geri çağırma, bir oyuncu kendisi için oluşturulan checkpointe giriş yaptığında çağırılır.
tags: ["player", "checkpoint"]
---

## Açıklama

Bu geri çağırma, bir oyuncu kendisi için oluşturulan checkpointe giriş yaptığında çağırılır.

| Parametre     | Açıklama                               |
| -------- | -------------------------------------- |
| playerid | Checkpointe giren oyuncunun ID'si.     |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnek

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

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Bir oyuncu için checkpoint oluşturur.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Oyuncunun mevcut checkpointini devre dışı bırakır.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Bir oyuncunun checkpointte olup olmadığını kontrol eder.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Bir oyuncu için yarış checkpointi oluşturur.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Oyuncunun mevcut yarış checkpointini devre dışı bırakır.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Bir oyuncunun yarış checkpointinde olup olmadığını kontrol eder.
