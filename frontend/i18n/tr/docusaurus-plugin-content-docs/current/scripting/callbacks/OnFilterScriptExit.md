---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Bir filterscript unload edildiğinde tetiklenir.
tags: []
---

## Açıklama

Bu geri çağırma bir filterscript unload edildiğinde tetiklenir. Sadece unload edilen filterscript içinde çalışır.

## Örnek

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
