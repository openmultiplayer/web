---
title: OnActorStreamIn
description: Bu callback, bir aktör başka bir oyuncunun akış alanına girdiğinde tetiklenir.
tags: []
---

:::warning

Bu callback SA-MP 0.3.7 sürümünde eklendi ve önceki sürümlerde çalışmaz.

:::

## Açıklama

Bu callback, bir aktör başka bir oyuncunun akış alanına girdiğinde tetiklenir.

| Adı         | Açıklama                                 |
| ----------- | ---------------------------------------- |
| actorid     | Oyuncunun akışına giren aktörün id'si.   |
| forplayerid | Aktörün akışına girdiği oyuncunun id'si. |

## Çalışınca Vereceği Sonuçlar

It is always called first in filterscripts.

## Örnekler

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "%d id'li aktör görüş alanına girdi.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip

Bu callback NPC'ler için de tetiklenebilir.

:::

## Bağlantılı Fonksiyonlar
