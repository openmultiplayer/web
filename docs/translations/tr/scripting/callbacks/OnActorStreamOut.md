---
id: OnActorStreamOut
title: OnActorStreamOut
description: Bu callback, bir aktör oyuncunun akış alanından ayrıldığında tetiklenir.
tags: []
---

:::warning

Bu callback SA-MP 0.3.7 sürümüyle birlikte eklenmiştir. Önceki SA-MP sürümlerinde çalışmaz.

:::

## Açıklama

Bu callback, bir aktör oyuncunun akış alanından ayrıldığında tetiklenir.

| Name        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| actorid     | Oyuncunun akış alanından ayrılan aktör id'si.                  |
| forplayerid | Aktörün akış alanından ayrıldığı oyuncu id'si.                 |

## Çalışınca Vereceği Sonuçlar

It is always called first in filterscripts.

## Örnek

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "%d id'li aktör artık akış alanında değil.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip

Bu callback NPC'ler için de tetiklenebilir.

:::

## Bağlantılı Fonksiyonlar