---
title: floatpower
sidebar_label: floatpower
description: مقدار داده شده رو به توان exponent میرسونه.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

مقدار داده شده رو به توان exponent میرسونه.

| نام           | توضیحات                                                               |
| -------------- | ------------------------------------------------------------------------- |
| Float:value    | مقداری که به توانش میرسونیم، به صورت عدد floating-point.                |
| Float:exponent | exponent هم یک عدد floating-point هست. میتونه صفر یا منفی باشه. |

## برگشتی

نتیجه 'value' به توان 'exponent'.

## مثال‌ها

```c
printf("2 to the power of 8 is %.1f", floatpower(2.0, 8.0));
// نتیجه: 256.0
```

## توابع مرتبط

- [floatsqroot](floatsqroot): محاسبه جذر مربع یک مقدار floating point.
- [floatlog](floatlog): گرفتن logarithm مقدار float.