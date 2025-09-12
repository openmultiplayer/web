---
title: getproperty
sidebar_label: getproperty
description: یه property خاص رو از حافظه دریافت می‌کنه، string به صورت packed برگردونده می‌شه!
tags: ["core", "property"]
---

<LowercaseNote />

## توضیحات

یه property خاص رو از حافظه دریافت می‌کنه، string به صورت packed برگردونده می‌شه!

| نام     | توضیحات                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------- |
| id       | ماشین مجازی برای استفاده، بهتره صفر بذاری. *(اختیاری=0)*                               |
| name[]   | اسم property، بهتره "" بذاری.                                                       |
| value    | ID منحصر به فرد property، از hash-function استفاده کن تا از string محاسبه کنی. *(اختیاری=cellmin)* |
| string[] | متغیری برای ذخیره نتیجه، به صورت reference پاس داده می‌شه.                                           |

## مقادیر برگشتی

مقدار یه property وقتی name پاس داده می‌شه؛ آرگومان string رو پر می‌کنه وقتی value پاس داده شه. اگه property وجود نداشته باشه، این تابع صفر برمی‌گردونه.

## مثال‌ها

```c
new value[16];

getproperty(0, "", 123984334, value);

strunpack(value, value, sizeof(value));

print(value);
```

## نکات

:::tip

پیشنهاد می‌شه از PVars/SVars یا پلاگین GVar به جای این native ها استفاده کنی چون خیلی کندن.

:::

## توابع مرتبط

- [setproperty](setproperty): تنظیم یه property.
- [deleteproperty](deleteproperty): حذف یه property.
- [existproperty](existproperty): بررسی وجود یه property.