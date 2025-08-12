---
title: DeletePlayer3DTextLabel
sidebar_label: DeletePlayer3DTextLabel
description: برچسب متن سه‌بعدی ایجاد شده با CreatePlayer3DTextLabel را نابود می‌کند.
tags: ["player", "3dtextlabel"]
---

## توضیحات

برچسب متن سه‌بعدی ایجاد شده با CreatePlayer3DTextLabel را نابود می‌کند.

| نام                | توضیحات                                                      |
| ------------------- | ------------------------------------------------------------ |
| playerid            | شناسه بازیکنی که برچسب متن سه‌بعدی او باید حذف شود.         |
| PlayerText3D:textid | شناسه برچسب متن سه‌بعدی بازیکن برای حذف.                   |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. این بدان معناست که برچسب مشخص شده وجود ندارد.

## مثال‌ها

```c
new PlayerText3D:playerTextId[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    new
        name[MAX_PLAYER_NAME],
        Float:x, Float:y, Float:z,
        string[64];

    GetPlayerName(playerid, name, sizeof(name));
    GetPlayerPos(playerid, x, y, z);

    format(string, sizeof(string), "Hello %s!\nI'm at your position", name);
    playerTextId[playerid] = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DeletePlayer3DTextLabel(playerid, playerTextId[playerid]);
    return 1;
}
```

## توابع مرتبط

- [Create3DTextLabel](Create3DTextLabel): ایجاد برچسب متن سه‌بعدی.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): چسباندن برچسب متن سه‌بعدی به بازیکن.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): چسباندن برچسب متن سه‌بعدی به خودرو.
- [Update3DTextLabelText](Update3DTextLabelText): تغییر متن برچسب متن سه‌بعدی.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): ایجاد برچسب متن سه‌بعدی برای یک بازیکن.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): تغییر متن برچسب متن سه‌بعدی بازیکن.
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): بررسی معتبر بودن برچسب متن سه‌بعدی بازیکن.