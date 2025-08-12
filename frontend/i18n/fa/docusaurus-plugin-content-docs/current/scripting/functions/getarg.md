---
title: getarg
sidebar_label: getarg
description: آرگومان پاس داده شده به تابع رو می‌گیره.
tags: ["core", "arguments", "args"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<LowercaseNote />

## توضیحات

آرگومان پاس داده شده به تابع رو می‌گیره.

| اسم   | توضیح                                                      |
| ----- | --------------------------------------------------------- |
| arg   | شماره ترتیب آرگومان. برای اولین آرگومان از 0 استفاده کن.     |
| index | index (اگه آرگومان یک آرایه باشه) *(اختیاری=0)*              |

## مقادیر برگشتی

مقدار آرگومان رو برمی‌گردونه.

## مثال‌ها

</div>

```c
SomeFunc(...)
{
    printf("%i", getarg(3));
}

public OnFilterScriptInit()
{
    SomeFunc(1, 3, 3, 7);
}

// Output: 7. The fourth argument (index 3) is 7.
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [numargs](numargs): تعداد آرگومان‌ها رو برمی‌گردونه.
- [setarg](setarg): تنظیم آرگومان.

</div>