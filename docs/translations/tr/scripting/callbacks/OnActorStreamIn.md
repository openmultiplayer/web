---
title: OnActorStreamIn
description: Bu geri çağırma, bir aktör başka bir oyuncunun akış alanına girdiğinde tetiklenir.
tags: []
---

:::warning

Bu geri çağırma SA-MP 0.3.7 sürümünde eklendi ve önceki sürümlerde çalışmaz.

:::

## Açıklama

Bu geri çağırma, bir aktör başka bir oyuncunun akış alanına girdiğinde tetiklenir.

| Parametre   | Açıklama                                 |
| ----------- | ---------------------------------------- |
| actorid     | Oyuncunun akışına giren aktörün id'si.   |
| forplayerid | Aktörün akışına girdiği oyuncunun id'si. |

## Çalışınca Vereceği Sonuçlar

Her zaman filterscript'lerde ilk olarak çağrılır.

## Örnek

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

BU geri çağırma NPC'ler için de tetiklenebilir.

:::

## Bağlantılı Fonksiyonlar
