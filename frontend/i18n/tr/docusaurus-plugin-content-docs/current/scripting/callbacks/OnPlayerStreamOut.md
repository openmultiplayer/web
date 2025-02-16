---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: Bu fonksiyon, bir oyuncu başka bir oyuncunun istemcisinden stream alanından çıktığında çağrılır.
tags: ["player"]
---

## Açıklama

Bu fonksiyon, bir oyuncu başka bir oyuncunun istemcisinden stream alanından çıktığında çağrılır.

| Parametre   | Açıklama                                        |
| ----------- | ----------------------------------------------- |
| playerid    | Diğer oyuncuyu canlı olarak görülen oyuncu.     |
| forplayerid | Diğer oyuncuyu canlı olarak gören oyuncu.       |

## Çalışınca Vereceği Sonuçlar

Filterscript komutlarında her zaman ilk olarak çağrılır.

## Örnek

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Streamer bölgenizden %d ID'li oyuncu kaldırıldı.", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Notlar

<TipNPCCallbacks />
