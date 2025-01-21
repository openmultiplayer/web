---
title: OnPlayerFinishedDownloading
description: Bu geri çağırma, bir oyuncu model cache indirmesini bitirdiğinde çağırılır.
tags: ["player"]
---

<VersionWarnTR name='callback' version='SA-MP 0.3.DL R1' />

## Açıklama

Bu geri çağırma, bir oyuncu model cache indirmesini bitirdiğinde çağırılır.

| Parametre         | Açıklama                                                                       |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | Model cacheini indirmeyi bitiren oyuncunun ID'si.                              |
| virtualworld | Oyuncunun model cache indirmesini bitirdiği virtual world ID'si.               |

## Çalışınca Vereceği Sonuçlar

Bu geri çağırma herhangi bir geri döndürülen değer içermemekte.

## Örnek

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "İndirme tamamlandı.");
    return 1;
}
```

## Notlar

:::tip

Bu geri çağırma oyuncu her virtual world değiştirdiğinde indireceği model olmasa bile çağırılır.

:::

## Bağlantılı Fonksiyonlar
