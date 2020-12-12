---
title: AllowInteriorWeapons
description: Interior içinde silah kullanımını kısıtlamanızı sağlar.
tags: []
---

## Açıklama

Bu fonksiyonla interior içlerinde silah kullanıp kullanılamayacağını belirlersiniz.

| İsim                                | Açıklama                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| allow                               | izni vermek için 1, kapatmak için 0  (default olarak 1 gelir)                                          |

## Dönence

Bu fonksiyon geliştiriciye dönüt vermez.

## Örnekler

```c
public OnGameModeInit()
{
    // Bu kod interior içinde silah kullanımına izin verir
    AllowInteriorWeapons(1);
    return 1;
}
```

## Notlar

:::warning

Bu fonksiyon şu anki SA:MP sürümünde çalışmamakta!

:::

## İlgili Fonksiyonlar

- [SetPlayerInterior](SetPlayerInterior.md): Oyuncunun interiorunu değiştirin.
- [GetPlayerInterior](SetPlayerInterior.md): Oyuncunun interiorunu öğrenin.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange.md): Bu callback oyuncunun interioru değiştiğinde çağrılır.
