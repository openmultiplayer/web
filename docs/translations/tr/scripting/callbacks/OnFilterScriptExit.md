---
title: OnFilterScriptExit
description: Bir filterscript unload edildiğinde tetiklenir.
tags: []
---

## Açıklama

Bu callback bir filterscript unload edildiğinde tetiklenir. Sadece unload edilen filterscript içinde çalışır.

## Örnekler

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

## Bağlantılı Fonksiyonlar
