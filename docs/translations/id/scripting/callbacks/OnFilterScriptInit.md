---
title: OnFilterScriptInit
description: Callback ini akan terpanggil ketika gamemode sedang diinialisasi (dimuat).
tags: []
---

## Deskripsi

Callback ini akan terpanggil ketika filterscript sedang diinialisasi (dimuat). Ini hanya terpanggil di dalam filterscript yang akan dimuat.

## Contoh

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print(" Filterscript berhasil dimuat.");
    print("--------------------------------------\n");
    return 1;
}
```

## Fungsi Terkait
