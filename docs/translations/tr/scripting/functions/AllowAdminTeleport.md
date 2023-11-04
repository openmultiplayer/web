---
title: AllowAdminTeleport
description: Bu fonksiyon RCON olan kişilerin nokta seçtiğinde ışınlanıp ışınlanamayacağına karar vermenizi sağlar.
tags: []
---

:::warning

0.3d sürümü ile bu fonksiyon kullanılamamakta, lütfen [OnPlayerClickMap](../callbacks/OnPlayerClickMap) callbackine göz atın.

:::

## Açıklama

Bu fonksiyon RCON olan kişilerin nokta seçtiğinde ışınlanıp ışınlanamayacağına karar vermenizi sağalar.

| İsim                                | Açıklama                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| allow                               | açmak için 1, kapamak için 0                                                                           |

## Dönence

Bu fonksiyon geliştiriciye dönüt vermez.

## Örnekler

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1); // RCON'ların noktalara ışınlanabilmesini sağladık
    return 1;
}
```

## Notlar

:::warning

Bu fonksiyon şu anki SA:MP sürümünde çalışmamakta!

:::

## İlgili Fonksiyonlar

- [IsPlayerAdmin](IsPlayerAdmin): Oyuncunun interiorunu değiştirin.
- [AllowPlayerTeleport](AllowPlayerTeleport): Oyuncunun interiorunu öğrenin.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): Bu callback oyuncunun interioru değiştiğinde çağrılır.
