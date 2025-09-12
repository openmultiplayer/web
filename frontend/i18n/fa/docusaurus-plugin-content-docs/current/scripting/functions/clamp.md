---
title: clamp
sidebar_label: clamp
description: مجبور کردن یک مقدار برای قرار گیری در یک محدوده.
tags: ["core"]
---

<LowercaseNote />

## توضیحات

مجبور کردن یک مقدار برای قرار گیری در یک محدوده.

| نام   | توضیحات                                                   |
| ----- | ------------------------------------------------- |
| value | مقداری که باید در محدوده قرار بگیرد.                    |
| min   | حد پایین محدوده. _(اعتیاری=cellmin)_  |
| max   | حد بالای محدوده. _(اعتیاری=cellmax)_ |

## مقدار بازگشتی

value، اگر در محدوده min–max باشد، min، اگر value کمتر از min باشد یا max، اگر value بیشتر از max باشد.

## مثال‌ها

```c
new
    valueA = 3,
    valueB = 7,
    valueC = 100
;
printf("The value is: %d", clamp(valueA, 5, 10)); // خروجی: "The value is: 5" چون 3 کمتر از 5 است.
printf("The value is: %d", clamp(valueB, 5, 10)); // خروجی: "The value is: 7" چون 7 بین 5 و 10 است.
printf("The value is: %d", clamp(valueC, 5, 10)); // خروجی: "The value is: 10" چون 100 بیشتر از 10 است.
```