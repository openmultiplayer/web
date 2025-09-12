---
title: IsNickNameCharacterAllowed
sidebar_label: IsNickNameCharacterAllowed
description: چک می‌کنه که آیا یه کاراکتر در nickname مجازه یا نه.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه کاراکتر در nickname مجازه یا نه.

| نام       | توضیحات                      |
| --------- | ---------------------------- |
| character | کاراکتری که باید چک بشه.     |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه کاراکتر مجاز باشه، یا **false** اگه مجاز نباشه.

## مثال‌ها

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // Allow char *

    if (IsNickNameCharacterAllowed('*'))
    {
        print("Character * is allowed in nickname.");
    }
    return 1;
}
```

## توابع مرتبط

- [AllowNickNameCharacter](AllowNickNameCharacter): اجازه استفاده از یه کاراکتر در نام کاربری رو می‌ده.