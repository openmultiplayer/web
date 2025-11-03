---
title: AllowInteriorWeapons
sidebar_label: AllowInteriorWeapons
description: Interior içinde silah kullanımını kısıtlamanızı sağlar.
tags: []
---

## Açıklama

Bu fonksiyonla interior içlerinde silah kullanıp kullanılamayacağını belirlersiniz.

| İsim                                | Açıklama                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| allow                               | izni vermek için 1, kapatmak için 0  (default olarak 1 gelir)                                          |

## Çalışınca Vereceği Sonuçlar

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

## Bağlantılı Fonksiyonlar

- [SetPlayerInterior](SetPlayerInterior): Oyuncunun interiorunu değiştirin.
- [GetPlayerInterior](SetPlayerInterior): Oyuncunun interiorunu öğrenin.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): Bu callback oyuncunun interioru değiştiğinde çağrılır.
