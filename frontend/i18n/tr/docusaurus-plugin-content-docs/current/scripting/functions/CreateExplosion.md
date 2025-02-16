---
title: CreateExplosion
sidebar_label: CreateExplosion
description: Patlama oluşturma.
tags: []
---

## Açıklama

Girilen koordinatlarda patlama oluşturma.

| Parametre    | Açıklama                                |
| ------------ | --------------------------------------- |
| Float:X      | Patlamanın oluşturulacağı X koordinatı. |
| Float:Y      | Patlamanın oluşturulacağı Y koordinatı. |
| Float:Z      | Patlamanın oluşturulacağı Z koordinatı. |
| type         | Oluşturulacak patlamanın türü.          |
| Float:radius | Patlamanın yarıçapı.                    |

## Çalışınca Vereceği Sonuçlar

Fonksiyon patlamanın türü veya yarıçapı geçersiz olsa bile her zaman 1 döndürür.

## Örnekler

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // Oyuncunun koordinat değerlerini çekiyoruz.
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // Oyuncunun bulunduğu koordinatlarda patlama oluşturuyoruz.
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## Notlar

:::tip

Bir oyuncu maksimum aynı anda 10 tane patlama görüntüleyebilir.

:::

## Bağlantılı Fonksiyonlar

- [CreateExplosionForPlayer](CreateExplosionForPlayer): Tek bir oyuncunun görebildiği patlama oluşturma.
