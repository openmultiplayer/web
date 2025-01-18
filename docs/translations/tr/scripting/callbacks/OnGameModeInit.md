---
title: OnGameModeInit
description: Bu geri çağırma oyun modu başladığında tetiklenir.
tags: []
---

## Açıklama

Bu geri çağırma oyun modu başladığında tetiklenir.

## Örnek

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Notlar

:::tip

Bu geri çağırma ayrıca bir filterscript içinde eğer oyun modu changemode veya gmx gibi komutlarla değiştirilirse oyun modu değişim kontrolünün yapılması için kullanılabilir.(filterscript yeniden yüklenmez)

:::

## Bağlantılı Fonksiyonlar
