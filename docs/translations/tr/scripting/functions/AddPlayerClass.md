---
id: AddPlayerClass
title: AddPlayerClass
description: Sınıf seçimine bir sınıf ekler.
tags: ["player"]
---

## Description

Sınıf seçimine bir sınıf ekler. Sınıflar, oyuncuların istedikleri bir ciltle sıçrayabilmesi için kullanılır.

| İsim          | Açıklama                                                      |
| ------------- | ------------------------------------------------------------- |
| modelid       | Oyuncunun kapladığı deri.                                     |
| Float:spawn_x | Bu sınıfın ayna noktasının X koordinatı.                      |
| Float:spawn_y | Bu sınıfın ayna noktasının Y koordinatı.                      |
| Float:spawn_z | Bu sınıfın ayna noktasının Z koordinatı.                      |
| Float:z_angle | Çaldıktan sonra oyuncunun bakması gereken yön.                |
| weapon1       | Oyuncunun ilk silahı.                                         |
| weapon1_ammo  | İlk mühimmat.                                                 |
| weapon2       | Oyuncunun ikinci silahı.                                      |
| weapon2_ammo  | İkinci silah mühimmat miktarı.                                |
| weapon3       | Oyuncunun üçüncü silahı.                                      |
| weapon3_ammo  | Üçüncü silah mühimmat miktarı.                                |

## Dönence

Yeni eklenen sınıfın kimliği.

319 sınıf sınırına (320) ulaşıldıysa. Mümkün olan en yüksek sınıf kimliği 319'dir.

## Örnekler

```c
public OnGameModeInit()
{
    // Oyuncular CJ görünümü (0) veya The Truth görünümü (1) ile doğabilirler.
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notlar

:::tip

Maksimum sınıf kimliği 319'dir (0'dan başlayarak toplam 320 sınıf). Bu sınıra ulaşıldığında, eklenen daha fazla sınıf ID 319'nin yerini alır.

:::

## İlgili Fonksiyonlar

- [AddPlayerClassEx](AddPlayerClassEx.md): Varsayılan bir ekiple bir sınıf ekleyin.
- [SetSpawnInfo](SetSpawnInfo.md): Bir oyuncunun sıçrama ayarını yapın.
- [SetPlayerSkin](SetPlayerSkin.md): Bir oyuncunun cildini ayarlayın.
