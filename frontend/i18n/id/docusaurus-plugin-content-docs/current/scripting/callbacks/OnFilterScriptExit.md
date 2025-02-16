---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Callback ini akan terpanggil ketika filterscript dibongkar.
tags: []
---

## Deskripsi

Callback ini akan terpanggil ketika filterscript tidak dimuat lagi. Ini hanya terpanggil di dalam filterscript yang akan dibongkar.

## Contoh

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Filterscript telah dibongkar");
    print("--------------------------------------\n");
    return 1;
}
```

## Fungsi Terkait
