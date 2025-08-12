---
title: GetPVarsUpperIndex
sidebar_label: GetPVarsUpperIndex
description: هر PVar (متغیر بازیکن) یه شناسه منحصر به فرد برای lookup داره، این تابع بالاترین ID تنظیم شده برای یه بازیکن رو برمی‌گردونه.
tags: ["player variable", "pvar"]
---

## توضیحات

هر PVar (متغیر بازیکن) یه شناسه منحصر به فرد برای lookup داره، این تابع بالاترین ID تنظیم شده برای یه بازیکن رو برمی‌گردونه.

| نام     | توضیحات                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID بازیکنی که می‌خوای بالاترین index PVar رو ازش بگیری. |

## مقادیر برگشتی

بالاترین ID تنظیم شده PVar.

## مثال‌ها

```c
// Store the upper index in the variable 'PVarUpperIndex' + 1
new PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;

// This pVarCount variable will store how many pVars a player has set as we count them.
new pVarCount;

new pVarName[128];

for(new i = 0; i != PVarUpperIndex; i++) // Loop through all pVar IDs under the upper index
{
    // At first, we need to get PVar name
    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));

    // If the var is set (type not 0), increment pVarCount.
    if (GetPVarType(playerid, pVarName) != 0)
    {
        pVarCount++;
    }
}

new szString[128];
format(szString, sizeof(szString), "You have %i player-variables set. Upper index (highest ID): %i.", pVarCount, PVarUpperIndex-1);
SendClientMessage(playerid, -1, szString);
```

## توابع مرتبط

- [GetPVarNameAtIndex](GetPVarNameAtIndex): دریافت اسم متغیر بازیکن از index اش.
- [GetPVarType](GetPVarType): دریافت نوع متغیر بازیکن.