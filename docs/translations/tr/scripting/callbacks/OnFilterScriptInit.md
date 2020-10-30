---
title: OnFilterScriptInit
description: Bu callback bir filterscript çalıştırıldığında tetiklenir (yüklendiğinde).
tags: []
---

## Açıklama

Bu callback bir filterscript çalıştırıldığında tetiklenir (yüklendiğinde). Sadece çalıştırılan filterscript içinde çalışır.

## Örnekler

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## Bağlantılı Fonksiyonlar
