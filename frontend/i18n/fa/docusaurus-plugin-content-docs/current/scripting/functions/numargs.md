---
title: numargs
sidebar_label: numargs
description: تعداد آرگومان‌هایی که به یک function پاس شده رو دریافت می‌کنه.
tags: ["core", "arguments", "args"]
---

<LowercaseNote />

## توضیحات

تعداد آرگومان‌هایی که به یک function پاس شده رو دریافت می‌کنه.

## مثال‌ها

```c
SomeFunction(...)
{
    printf("numargs(): %i", numargs());
}

public OnFilterScriptInit()
{
    SomeFunction(1, 2, 3);
}

// Khorooji: "numargs(): 3"
// Chon 3 ta parameter (1, 2, 3) pass shode
```

## توابع مرتبط

- [getarg](getarg): یک آرگومان از لیست آرگومان‌های متغیر دریافت می‌کنه.
- [setarg](setarg): یک آرگومان تنظیم می‌کنه.