---
title: AllowNickNameCharacter
sidebar_label: AllowNickNameCharacter
description: اجازه استفاده از یک کاراکتر در نام کاربری را می‌دهد.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اجازه استفاده از یک کاراکتر در نام کاربری را می‌دهد.

| نام        | توضیحات                               |
| ---------- | ------------------------------------- |
| character  | کاراکتری که باید مجاز یا غیرمجاز شود.  |
| bool:allow | true-مجاز، false-غیرمجاز              |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // اجازه دادن به کاراکتر *
    AllowNickNameCharacter('[', false); // منع کاراکتر [
    AllowNickNameCharacter(']', false); // منع کاراکتر ]

    return 1;
}
```

## توابع مرتبط

- [IsNickNameCharacterAllowed](IsNickNameCharacterAllowed): بررسی اینکه آیا کاراکتری در نام کاربری مجاز است یا خیر.
- [IsValidNickName](IsValidNickName): بررسی اینکه آیا نام کاربری معتبر است یا خیر.
- [SetPlayerName](SetPlayerName): تنظیم نام بازیکن.
- [GetPlayerName](GetPlayerName): دریافت نام بازیکن.