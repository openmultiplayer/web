---
title: floatsub
sidebar_label: floatsub
description: یک float رو از float دیگه کم میکنه.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

یک float رو از float دیگه کم میکنه. دقت کن که این تابع استفاده واقعی نداره، چونکه میتونی به سادگی از operator استاندارد (-) استفاده کنی.

| نام        | توضیحات                                          |
| ----------- | ---------------------------------------------------- |
| Float:oper1 | float اول.                                         |
| Float:oper2 | float دوم (از float اول کم میشه)  |

## برگشتی

تفاوت دو float داده شده.

## مثال‌ها

```c
public OnGameModeInit()
{
    new Float:Number1 = 5, Float:Number2 = 2; // دو float تعریف میکنه، Number1 (5) و Number2 (2)
    new Float:Difference;
    Difference = floatsub(Number1, Number2); // تفاوت(5-2 = 3) رو در float "Difference" ذخیره میکنه
    return 1;
}
```

## توابع مرتبط

- [Floatadd](Floatadd): جمع کردن دو float.
- [Floatmul](Floatmul): ضرب دو float.
- [floatdiv](floatdiv): تقسیم یک float بر دیگری.