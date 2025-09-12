---
title: GetSVarType
sidebar_label: GetSVarType
description: نوع (integer، float یا string) یه متغیر سرور رو دریافت می‌کنه.
tags: ["server variable", "svar"]
---

## توضیحات

نوع (integer، float یا string) یه متغیر سرور رو دریافت می‌کنه.

| نام         | توضیحات                                         |
| ------------ | --------------------------------------------------- |
| const svar[] | اسم متغیر سروری که می‌خوای نوع‌ش رو بگیری. |

## مقادیر برگشتی

[نوع](../resources/svartypes) SVar رو برمی‌گردونه.

## مثال‌ها

```c
stock PrintSVar(varname[])
{
    switch(GetSVarType(varname))
    {
        case SERVER_VARTYPE_NONE:
        {
            return 0;
        }
        case SERVER_VARTYPE_INT:
        {
            printf("Integer SVar '%s': %i", varname, GetSVarInt(varname));
        }
        case SERVER_VARTYPE_FLOAT:
        {
            printf("Float SVar '%s': %f", varname, GetSVarFloat(varname));
        }
        case SERVER_VARTYPE_STRING:
        {
            new varstring[256];
            GetSVarString(varname, varstring);

            printf("String SVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnGameModeInit()
{
    SetSVarInt("Version", 37);

    PrintSVar("Version"); // Output: "Integer SVar 'Version': 37"
    return 1;
}
```

## توابع مرتبط

- [SetSVarInt](SetSVarInt): تنظیم یه integer برای متغیر سرور.
- [GetSVarInt](GetSVarInt): دریافت یه متغیر سرور به صورت integer.
- [SetSVarString](SetSVarString): تنظیم یه string برای متغیر سرور.
- [GetSVarString](GetSVarString): دریافت string قبلاً تنظیم شده از متغیر سرور.
- [SetSVarFloat](SetSVarFloat): تنظیم یه float برای متغیر سرور.
- [GetSVarFloat](GetSVarFloat): دریافت float قبلاً تنظیم شده از متغیر سرور.
- [DeleteSVar](DeleteSVar): حذف یه متغیر سرور.

## منابع مرتبط

- [Server Variable Types](../resources/svartypes)