---
title: SetPlayerTeam
sidebar_label: SetPlayerTeam
description: تیم پلیر رو تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

تیم پلیر رو تنظیم می‌کنه.

| نام      | توضیحات                                                              |
| -------- | -------------------------------------------------------------------- |
| playerid | آیدی پلیری که می‌خوای تیمش رو تنظیم کنی                              |
| teamid   | تیمی که قراره پلیر توش قرار بگیره. از NO_TEAM استفاده کن تا پلیر رو از هر تیمی حذف کنی |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    // Time e player ro be 4 set kon vaghti spawn mishe
    SetPlayerTeam(playerid, 4);
    return 1;
}
```

## نکات

:::tip

- پلیر ها نمی‌تونن به پلیر های هم تیم آسیب برسونن/کشتنشون مگه اینکه از چاقو استفاده کنن تا گلوشون رو ببرن.

- پلیر ها همچنین نمی‌تونن به ماشین هایی که توسط پلیر هم تیم رانندگی می‌شن آسیب برسونن. این می‌تونه با [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire) فعال بشه.

- 255 (یا `NO_TEAM`) تیم پیش‌فرضیه که می‌تونه به پلیر های دیگه شلیک کنه، نه 0.

:::

## توابع مرتبط

- [GetPlayerTeam](GetPlayerTeam): چک می‌کنه که پلیر توی کدوم تیمه.
- [SetTeamCount](SetTeamCount): تعداد تیم های موجود رو تنظیم می‌کنه.
- [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire): friendly fire رو برای ماشین های تیم فعال می‌کنه.