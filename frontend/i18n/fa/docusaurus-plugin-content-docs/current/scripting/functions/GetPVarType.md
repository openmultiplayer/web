---
title: GetPVarType
sidebar_label: GetPVarType
description: نوع (integer، float یا string) یه متغیر بازیکن رو دریافت می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

نوع (integer، float یا string) یه متغیر بازیکن رو دریافت می‌کنه.

| نام         | توضیحات                                                    |
| ------------ | -------------------------------------------------------------- |
| playerid     | ID بازیکنی که می‌خوای نوع متغیرش رو دریافت کنی. |
| const pvar[] | اسم متغیر بازیکنی که می‌خوای نوع‌ش رو بگیری.            |

## مقادیر برگشتی

نوع PVar رو برمی‌گردونه. جدول زیر رو ببین.

## مثال‌ها

```c
stock PrintPVar(playerid, varname[])
{
    switch(GetPVarType(playerid, varname))
    {
        case PLAYER_VARTYPE_NONE:
        {
            return 0;
        }
        case PLAYER_VARTYPE_INT:
        {
            printf("Integer PVar '%s': %i", varname, GetPVarInt(playerid, varname));
        }
        case PLAYER_VARTYPE_FLOAT:
        {
            printf("Float PVar '%s': %f", varname, GetPVarFloat(playerid, varname));
        }
        case PLAYER_VARTYPE_STRING:
        {
            new varstring[256];
            GetPVarString(playerid, varname, varstring);

            printf("String PVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnPlayerConnect(playerid)
{
    SetPVarInt(playerid, "Level", 20);

    PrintPVar(playerid, "Level"); // Output: "Integer PVar 'Level': 20"
    return 1;
}
```

## توابع مرتبط

- [SetPVarInt](SetPVarInt): تنظیم یه integer برای متغیر بازیکن.
- [GetPVarInt](GetPVarInt): دریافت integer قبلاً تنظیم شده از متغیر بازیکن.
- [SetPVarString](SetPVarString): تنظیم یه string برای متغیر بازیکن.
- [GetPVarString](GetPVarString): دریافت string قبلاً تنظیم شده از متغیر بازیکن.
- [SetPVarFloat](SetPVarFloat): تنظیم یه float برای متغیر بازیکن.
- [GetPVarFloat](GetPVarFloat): دریافت float قبلاً تنظیم شده از متغیر بازیکن.
- [DeletePVar](DeletePVar): حذف یه متغیر بازیکن.

## منابع مرتبط

- [Player Variable Types](../resources/pvartypes)