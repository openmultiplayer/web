---
title: floatdiv
sidebar_label: floatdiv
description: تقسیم یک عدد اعشاری بر دیگری.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

تقسیم یک عدد اعشاری بر دیگری. اضافیه چون عملگر تقسیم (/) همین کار رو انجام میده.

| نام            | توضیحات                                    |
| -------------- | ------------------------------------------ |
| Float:dividend | اولین عدد اعشاری.                          |
| Float:divisor  | دومین عدد اعشاری (اولین عدد اعشاری رو تقسیم میکنه.) |

## برگشتی

خارج قسمت دو عدد اعشاری داده شده.

## مثال‌ها

```c
public OnGameModeInit()
{
    new Float:Number1 = 8.05, Float:Number2 = 3.5; // تعریف دو عدد اعشاری، Number1 (8.05) و Number2 (3.5)
    new Float:Quotient;
    Quotient = floatdiv(Number1, Number2); // ذخیره خارج قسمت(=8.05/3.5 = 2.3) Number1 و Number2 در عدد اعشاری "Quotient"
    return 1;
}
```

## توابع مرتبط

- [floatadd](floatadd): جمع کردن دو عدد اعشاری.
- [floatsub](floatsub): تفریق یک عدد اعشاری از دیگری.
- [floatmul](floatmul): ضرب دو عدد اعشاری.