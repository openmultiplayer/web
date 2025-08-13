---
title: min
sidebar_label: min
description: کمترین عدد از بین دو عدد را برگردان.
tags: ["core"]
---

<LowercaseNote />

## توضیحات

تابعی که برای مقایسه مقادیر استفاده می‌شود.

| نام    | توضیحات                      |
| ------ | ---------------------------- |
| value1 | مقدار 1 (a) برای مقایسه.     |
| value1 | مقدار 2 (b) برای مقایسه.     |

## مقدار بازگشتی

مقدار کمتر از `value1` و `value2`

اگر هر دو برابر باشند، `value1` برگردانده می‌شود.

## مثال‌ها

```c

public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = min(a, b);

    printf("min(%d, %d) = %d", a, b, result);
    // Since a is smaller than b so result will be 5.
    
    return 1;
}
```

## توابع مرتبط

- [max](max): مقایسه کن و حداکثر مقدار را بگیر.