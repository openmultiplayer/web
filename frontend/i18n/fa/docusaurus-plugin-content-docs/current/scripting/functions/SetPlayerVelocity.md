---
title: SetPlayerVelocity
sidebar_label: SetPlayerVelocity
description: سرعت پلیر رو در محور های X، Y و Z تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

سرعت پلیر رو در محور های X، Y و Z تنظیم می‌کنه.

| نام      | توضیحات                             |
| -------- | ----------------------------------- |
| playerid | پلیری که قراره سرعت بهش اعمال بشه    |
| Float:x  | سرعت (velocity) در محور X           |
| Float:y  | سرعت (velocity) در محور Y           |
| Float:z  | سرعت (velocity) در محور Z           |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. یعنی پلیر متصل نیست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Player ro vadar be paridn mikone (velocity Z + 0.2)
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerVelocity](GetPlayerVelocity): سرعت پلیر رو دریافت می‌کنه.
- [SetVehicleVelocity](SetVehicleVelocity): سرعت ماشین رو تنظیم می‌کنه.
- [GetVehicleVelocity](GetVehicleVelocity): سرعت ماشین رو دریافت می‌کنه.