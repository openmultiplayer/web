---
title: max
sidebar_label: max
description: بیشترین عدد از بین دو عدد را برگردان.
tags: ["core"]
---

<LowercaseNote />

## توضیحات

تابعی که برای مقایسه مقادیر استفاده می‌شود.

| نام    | توضیحات                      |
| ------ | ---------------------------- |
| value1 | مقدار 1 (a) برای مقایسه.     |
| value2 | مقدار 2 (b) برای مقایسه.     |

## مقدار بازگشتی

مقدار بیشتر از `value1` و `value2`

اگر هر دو برابر باشند، `value1` برگردانده می‌شود.

## مثال‌ها

```c
public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = max(a, b);

    printf("max(%d, %d) = %d", a, b, result);
    // Since b is bigger than a so result will be 10.
    
    return 1;
}
```

## توابع مرتبط

- [min](min): مقایسه کن و حداقل مقدار را بگیر.