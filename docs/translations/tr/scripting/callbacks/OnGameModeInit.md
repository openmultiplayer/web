---
title: OnGameModeInit
description: Bu callback oyun modu başladığında tetiklenir.
tags: []
---

## Açıklama

Bu callback oyun modu başladığında tetiklenir.

## Örnekler

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon ayrıca bir filterscript içinde eğer oyun modu changemode veya gmx gibi komutlarla değiştirilirse oyun modu değişim kontrolünün yapılması için kullanılabilir.(filterscript yeniden yüklenmez)

:::

## Bağlantılı Fonksiyonlar
