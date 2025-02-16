---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: Bu geri çağırma bir filterscript çalıştırıldığında tetiklenir (yüklendiğinde).
tags: []
---

## Açıklama

Bu geri çağırma bir filterscript çalıştırıldığında tetiklenir (yüklendiğinde). Sadece çalıştırılan filterscript içinde çalışır.

## Örnek

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
