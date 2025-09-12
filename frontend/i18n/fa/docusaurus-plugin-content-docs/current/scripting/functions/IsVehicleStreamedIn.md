---
title: IsVehicleStreamedIn
sidebar_label: IsVehicleStreamedIn
description: چک می‌کنه که آیا ماشین برای بازیکن stream شده یا نه.
tags: ["vehicle"]
---

## توضیحات

چک می‌کنه که آیا ماشین برای بازیکن stream شده یا نه. فقط ماشین‌های نزدیک برای بازیکن stream می‌شن (قابل دیدن هستن).

| نام       | توضیحات                        |
| --------- | ------------------------------- |
| vehicleid | ID ماشینی که باید چک بشه.       |
| playerid  | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**true** - ماشین برای بازیکن stream شده.

**false** - ماشین برای بازیکن stream نشده، یا تابع موفق به اجرا نشده (بازیکن و/یا ماشین وجود نداره).

## مثال‌ها

```c
new streamedVehicleCount;

for(new i = 1; i < MAX_VEHICLES; i++)
{
    if (IsVehicleStreamedIn(i, playerid))
    {
        streamedVehicleCount ++;
    }
}

new string[144];
format(string, sizeof(string), "You currently have %i vehicles streamed in to your game.", streamedVehicleCount);
SendClientMessage(playerid, -1, string);
```

## توابع مرتبط

- [IsPlayerStreamedIn](IsPlayerStreamedIn): چک کردن اینکه بازیکن برای بازیکن دیگه stream شده یا نه.

## callback های مرتبط

- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): وقتی ماشین برای بازیکن stream می‌شه فراخوانی می‌شه.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): وقتی ماشین برای بازیکن stream out می‌شه فراخوانی می‌شه.
- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): وقتی بازیکن برای بازیکن دیگه stream می‌شه فراخوانی می‌شه.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): وقتی بازیکن برای بازیکن دیگه stream out می‌شه فراخوانی می‌شه.