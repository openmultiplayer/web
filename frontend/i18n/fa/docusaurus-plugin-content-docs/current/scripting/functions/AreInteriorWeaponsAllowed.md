---
title: AreInteriorWeaponsAllowed
sidebar_label: AreInteriorWeaponsAllowed
description: آیا می‌توان از اسلحه در اینتریورها استفاده کرد؟
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آیا می‌توان از اسلحه در اینتریورها استفاده کرد؟

## مقدار بازگشتی

true: مجاز.

false: مجاز نیست.

## مثال‌ها

```c
if (AreInteriorWeaponsAllowed())
{
    // کاری انجام دهید
}
```

## توابع مرتبط

- [AllowInteriorWeapons](AllowInteriorWeapons): فعال/غیرفعال کردن استفاده از اسلحه در اینتریورها.