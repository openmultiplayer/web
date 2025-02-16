---
title: OnPlayerClickMap
description: Bu geri çağırma oyuncu haritada bir yer işaretlediğinde çağrılır.
tags: ["player"]
---

## Açıklama

Bu geri çağırma oyuncu haritada bir yer işaretlediğinde çağrılır.

| Parametre       | Açıklama                                                        |
| -------- | --------------------------------------------------------------- |
| playerid | Oyuncunun id'si                                                 |
| Float:fX | İşaretlediği yerin X koordinatı.                                |
| Float:fY | İşaretlediği yerin Y koordinatı.                                |
| Float:fZ | İşaretlediği yerin Z koordinatı. (kullanışsız - notu inceleyin) |

## Çalışınca Vereceği Sonuçlar

1 - Diğer filterscriptlerin bu geri çağırma çalıştırmasını engeller.

0 - Diğer filterscriptler içinde aranması için pas geçilir.

Her zaman öncelikle oyun modunda çağrılır.

## Örnek

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Notlar

:::tip

Bu geri çağırma sadece haritada bir yer işaretlemek için tıkladığında çağrılır, tuşa basarak işaretlediğinde çağrılmaz. Eğer oyuncu işaretlediği yerden uzaksa Z koordinatı 0 (geçersiz) olarak döndürülür, bunu çözmek için ColAndreas veya MapAndreas pluginini kullanın.

:::

## Bağlı Fonksiyonlar
