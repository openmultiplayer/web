---
title: OnPlayerFinishedDownloading
description: Bu callback, bir oyuncu model cache indirmesini bitirdiğinde çağırılır.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Açıklama

Bu callback, bir oyuncu model cache indirmesini bitirdiğinde çağırılır.

| İsim         | Açıklama                                                                       |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | Model cacheini indirmeyi bitiren oyuncunun ID'si.                              |
| virtualworld | Oyuncunun model cache indirmesini bitirdiği virtual world ID'si.               |

## Çalışınca Vereceği Sonuçlar

Bu callback herhangi bir geri döndürülen değer içermemekte.

## Örnekler

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "İndirme tamamlandı.");
    return 1;
}
```

## Notlar

:::tip

Bu callback oyuncu her virtual world değiştirdiğinde indireceği model olmasa bile çağırılır.

:::

## Bağlantılı Fonksiyonlar
