---
title: setproperty
sidebar_label: setproperty
description: یک property جدید اضافه می‌کنه یا یک property موجود رو تغییر می‌ده.
tags: ["core", "property"]
---

<LowercaseNote />

## توضیحات

یک property جدید اضافه می‌کنه یا یک property موجود رو تغییر می‌ده.

| نام      | توضیحات                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| id       | virtual machine که باید استفاده بشه، باید این رو صفر نگه داری. *(اختیاری=0)*                                                      |
| name[]   | همراه با value وقتی integer ذخیره می‌کنی استفاده می‌شه؛ اگر می‌خوای string ذخیره کنی از این استفاده نکن.                             |
| value    | مقدار integer که باید ذخیره بشه یا ID منحصر به فرد property اگر string ذخیره می‌کنی. از تابع hash استفاده کن تا از string محاسبه کنی. *(اختیاری=cellmin)* |
| string[] | مقدار property، به عنوان string. اگر می‌خوای integer ذخیره کنی از این استفاده نکن.                                              |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
setproperty(.name = "MyInteger", .value = 42);

new value = getproperty(.name = "MyInteger");
printf("Value that was stored is: %d", value);
setproperty(0, "", 123984334, ":)");

new value[4];
getproperty(0, "", 123984334, value);
strunpack(value, value, sizeof(value)); // we need to unpack the string first
print(value);

//should print :)
setproperty(.value = 123984334, .string = ":)");

// The rest is the same as above.
```

## نکات

:::tip

توصیه می‌شه به جای این native ها از PVars/SVars یا پلاگین GVar استفاده کنی چون خیلی کند هستن.

:::

## توابع مرتبط

- [getproperty](getproperty): گرفتن مقدار یک property.
- [deleteproperty](deleteproperty): حذف یک property.
- [existproperty](existproperty): بررسی اینکه آیا یک property وجود داره یا نه.