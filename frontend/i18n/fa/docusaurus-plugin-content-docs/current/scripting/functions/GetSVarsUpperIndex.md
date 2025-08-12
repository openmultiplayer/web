---
title: GetSVarsUpperIndex
sidebar_label: GetSVarsUpperIndex
description: هر SVar (متغیر سرور) یه شناسه منحصر به فرد برای lookup داره، این تابع بالاترین ID رو برمی‌گردونه.
tags: ["server variable", "svar"]
---

## توضیحات

هر SVar (متغیر سرور) یه شناسه منحصر به فرد برای lookup داره، این تابع بالاترین ID رو برمی‌گردونه.

## مثال‌ها

```c
// Store the upper index in the variable 'SVarUpperIndex' + 1
new SVarUpperIndex = GetSVarsUpperIndex() + 1;

// This sVarCount variable will store how many sVars are set as we count them.
new sVarCount;

new sVarName[128];

for(new i = 0; i != sVarUpperIndex; i++) // Loop through all sVar IDs under the upper index
{
    // At first, we need to get SVar name
    GetSVarNameAtIndex(i, sVarName, sizeof(sVarName));

    // If the var is set (type not 0), increment sVarCount.
    if (GetSVarType(sVarName) != 0)
    {
        sVarCount ++;
    }
}

printf("There are %i server-variables set. Upper index (highest ID): %i.", sVarCount, SVarUpperIndex-1);
```

## توابع مرتبط

- [GetSVarNameAtIndex](GetSVarNameAtIndex): دریافت اسم متغیر سرور از index اش.
- [GetSVarType](GetSVarType): دریافت نوع متغیر سرور.