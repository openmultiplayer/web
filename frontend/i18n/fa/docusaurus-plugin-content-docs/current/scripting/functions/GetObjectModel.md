---
title: GetObjectModel
sidebar_label: GetObjectModel
description: شناسه مدل یه آبجکت رو برمیگردونه.
tags: ["object"]
---

<VersionWarn version='SA-MP 0.3.7' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

شناسه مدل یه آبجکت رو برمیگردونه ([CreateObject](CreateObject)).

| اسم     | توضیح                              |
| -------- | ---------------------------------------- |
| objectid | شناسه آبجکتی که می‌خوای مدلش رو بگیری |

## مقادیر برگشتی

شناسه مدل آبجکت رو برمیگردونه.

**-1** اگر آبجکت وجود نداشته باشه.

## مثال‌ها

</div>

```c
public OnGameModeInit()
{
    new objectid = CreateObject(19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);
    
    new modelid = GetObjectModel(objectid);
    printf("Object model: %d", modelid); // Output: "Object model: 19609"
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetPlayerObjectModel](GetPlayerObjectModel): شناسه مدل یه player-object رو برمیگردونه.

</div>