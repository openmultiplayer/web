---
title: floatadd
sidebar_label: floatadd
description: جمع کردن دو عدد اعشاری.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

جمع کردن دو عدد اعشاری. این تابع اضافیه چون عملگر استاندارد (+) همین کار رو انجام میده.

| نام           | توضیحات         |
| ------------- | --------------- |
| Float:Number1 | اولین عدد اعشاری.  |
| Float:Number2 | دومین عدد اعشاری. |

## برگشتی

مجموع دو عدد اعشاری داده شده.

## مثال‌ها

```c
public OnGameModeInit()
{
    new Float:Number1 = 2, Float:Number2 = 3; // تعریف دو عدد اعشاری، Number1 (2) و Number2 (3)
    new Float:Sum;
    Sum = floatadd(Number1, Number2); // ذخیره مجموع(=2+3 = 5) Number1 و Number2 در عدد اعشاری "Sum"
    return 1;
}
```

## توابع مرتبط

- [Floatsub](Floatsub): تفریق دو عدد اعشاری.
- [Floatmul](Floatmul): ضرب دو عدد اعشاری.
- [Floatdiv](Floatdiv): تقسیم یک عدد اعشاری بر دیگری.