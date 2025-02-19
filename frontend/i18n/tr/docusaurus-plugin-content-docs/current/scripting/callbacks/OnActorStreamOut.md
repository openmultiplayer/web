---
title: OnActorStreamOut
sidebar_label: OnActorStreamOut
description: Bu geri çağırma, bir aktör oyuncunun akış alanından ayrıldığında tetiklenir.
tags: []
---

:::warning

Bu geri çağırma SA-MP 0.3.7 sürümüyle birlikte eklenmiştir. Önceki SA-MP sürümlerinde çalışmaz.

:::

## Açıklama

Bu geri çağırma, bir aktör oyuncunun akış alanından ayrıldığında tetiklenir.

| Parametre   | Açıklama                                       |
| ----------- | ---------------------------------------------- |
| actorid     | Oyuncunun akış alanından ayrılan aktör id'si.  |
| forplayerid | Aktörün akış alanından ayrıldığı oyuncu id'si. |

## Çalışınca Vereceği Sonuçlar

Her zaman filterscript'lerde ilk olarak çağrılır.

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

Bu geri çağırma NPC'ler için de tetiklenebilir.

:::

## Bağlantılı Fonksiyonlar
