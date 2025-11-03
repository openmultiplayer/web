---
title: AddPlayerClassEx
sidebar_label: AddPlayerClassEx
description: Bu işlev, bir takım parametresi eklenmesiyle birlikte AddPlayerClass işleviyle tamamen aynıdır.
tags: ["player"]
---

## Açıklamalar

Bu işlev, bir takım parametresi eklenmesiyle birlikte AddPlayerClass işleviyle tamamen aynıdır.

| İsim          | Açıklama                                |
| ------------- | --------------------------------------- |
| teamid        | Oyuncunun doğmasını istediğiniz takım.  |
| modelid       | Oyuncunun kapladığı deri.               |
| Float:spawn_x | Sınıfın doğma konumunun X koordinatı.   |
| Float:spawn_y | Sınıfın doğma konumunun Y koordinatı.   |
| Float:spawn_z | Sınıfın doğma konumunun Z koordinatı.   |
| Float:z_angle | Oyuncunun doğduktan sonra bakacağı yön. |
| weapon1       | Oyuncunun ilk silahı.                   |
| weapon1_ammo  | İlk mühimmat.                           |
| weapon2       | Oyuncunun ikinci silahı.                |
| weapon2_ammo  | İkinci silah mühimmat miktarı.          |
| weapon3       | Oyuncunun üçüncü silahı.                |
| weapon3_ammo  | Üçüncü silah mühimmat miktarı.          |

## Çalışınca Vereceği Sonuçlar

Yeni eklenen sınıfın kimliği.

319 sınıf sınırına (320) ulaşıldıysa. Mümkün olan en yüksek sınıf kimliği 319'dir.

## Örnekler

```c
public OnGameModeInit()
{
    // Oyuncular iki farklı şekilde doğabilir:
    // CJ Skin (ID 0) in team 1.
    // The Truth skin (ID 1) in team 2.
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notlar

:::tip

Maksimum sınıf kimliği 319'dir (0'dan başlayarak toplam 320 sınıf). Bu sınıra ulaşıldığında, eklenen daha fazla sınıf ID 319'nin yerini alır.

:::

## Bağlantılı Fonksiyonlar

- [AddPlayerClass](AddPlayerClass): Sınıf ekleyin.
- [SetSpawnInfo](SetSpawnInfo): Bir oyuncunun doğma ayarını yapın.
- [SetPlayerTeam](SetPlayerTeam): Bir oyuncunun takımını belirleyin.
- [SetPlayerSkin](SetPlayerSkin): Bir oyuncunun cildini ayarlayın.
