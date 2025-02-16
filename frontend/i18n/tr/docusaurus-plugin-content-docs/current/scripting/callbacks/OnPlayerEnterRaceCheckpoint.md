---
title: OnPlayerEnterRaceCheckpoint
sidebar_label: OnPlayerEnterRaceCheckpoint
description: Bu geri çağırma, bir oyuncu yarış checkpointine girdiğinde çağırılır.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Açıklama

Bu geri çağırma, bir oyuncu yarış checkpointine girdiğinde çağırılır.

| Parametre     | Açıklama                                              |
| -------- | ----------------------------------------------------- |
| playerid | Yarış checkpointine giren oyuncunun ID'si.            |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnek

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("%d ID'li oyuncu bir yarış checkpointine girdi!", playerid);
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

## Bağlantılı Fonksiyonlar

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Bir oyuncu için checkpoint oluşturur.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Oyuncunun mevcut checkpointini devre dışı bırakır.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Bir oyuncunun checkpointte olup olmadığını kontrol eder.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Bir oyuncu için yarış checkpointi oluşturur.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Oyuncunun mevcut yarış checkpointini devre dışı bırakır.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Bir oyuncunun yarış checkpointinde olup olmadığını kontrol eder.
