---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: Bu fonksiyon, bir oyuncu başka bir oyuncunun streamer bölgesinde yayınlandığında çağrılır. 
tags: ["player"]
---

## Açıklama

Bu fonksiyon, bir oyuncu başka bir oyuncunun streamer bölgesinde yayınlandığında çağrılır. 

| Parametre   | Açıklama                                                |
| ----------- | ------------------------------------------------------- |
| playerid    | Diğer oyuncuya canlı olarak görülen oyuncu.             |
| forplayerid | Diğer oyuncuyu canlı olarak gören oyuncu.               |

## Çalışınca Vereceği Sonuçlar

Filterscript komutlarında her zaman ilk olarak çağrılır. 

## Örnek

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Oyuncu %d artık sizin için yayınlanıyor.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

## Bağlantılı Fonksiyonlar
