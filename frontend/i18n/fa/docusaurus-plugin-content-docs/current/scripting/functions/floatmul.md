---
title: floatmul
sidebar_label: floatmul
description: ضرب دو عدد اعشاری در یکدیگر.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

ضرب دو عدد اعشاری در یکدیگر.

| نام         | توضیحات                                      |
| ----------- | -------------------------------------------- |
| Float:oper1 | اولین عدد اعشاری.                            |
| Float:oper2 | دومین عدد اعشاری، اولی با این ضرب میشه.     |

## برگشتی

حاصل ضرب دو عدد اعشاری داده شده

## مثال‌ها

```c
public OnGameModeInit()
{
    new Float:Number1 = 2.3, Float:Number2 = 3.5; // تعریف دو عدد اعشاری، Number1 (2.3) و Number2 (3.5)
    new Float:Product;
    Product = floatmul(Number1, Number2); // ذخیره حاصل ضرب(=2.3*3.5 = 8.05) Number1 و Number2 در عدد اعشاری "Product"
    return 1;
}
```

## نکات

:::tip

این تابع کاملاً اضافیه، چون هیچ تفاوتی با عملگر ضرب معمولی (\*) نداره.

:::

## توابع مرتبط

- [floatadd](floatadd): جمع دو عدد اعشاری.
- [floatsub](floatsub): تفریق دو عدد اعشاری.
- [floatdiv](floatdiv): تقسیم یک عدد اعشاری بر دیگری.