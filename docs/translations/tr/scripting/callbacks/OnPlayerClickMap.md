---
title: OnPlayerClickMap
description: Bu callback oyuncu haritada bir yer işaretlediğinde çağrılır.
tags: ["player"]
---

## Açıklama

Bu callback oyuncu haritada bir yer işaretlediğinde çağrılır.

| Ad       | Açıklama                                                        |
| -------- | --------------------------------------------------------------- |
| playerid | Oyuncunun id'si                                                 |
| Float:fX | İşaretlediği yerin X koordinatı.                                |
| Float:fY | İşaretlediği yerin Y koordinatı.                                |
| Float:fZ | İşaretlediği yerin Z koordinatı. (kullanışsız - notu inceleyin) |

## Çalışınca Vereceği Sonuçlar

1 - Diğer filterscriptlerin bu callbacki çalıştırmasını engeller.

0 - Diğer filterscriptler içinde aranması için pas geçilir.

Her zaman öncelikle oyun modunda çağrılır.

## Örnekler

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Notlar

:::tip

Bu callback sadece haritada bir yer işaretlemek için tıkladığında çağrılır, tuşa basarak işaretlediğinde çağrılmaz. Eğer oyuncu işaretlediği yerden uzaksa Z koordinatı 0 (geçersiz) olarak döndürülür, bunu çözmek için ColAndreas veya MapAndreas pluginini kullanın.

:::

## Bağlı Fonksiyonlar
