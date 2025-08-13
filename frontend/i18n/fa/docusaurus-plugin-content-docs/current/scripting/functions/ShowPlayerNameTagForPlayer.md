---
title: ShowPlayerNameTagForPlayer
sidebar_label: ShowPlayerNameTagForPlayer
description: این تابع امکان تغییر نمایش nametag های پلیر، نوار سلامتی و نوار زره که بالای سرشون نمایش داده می‌شه رو فراهم می‌کنه.
tags: ["player"]
---

## توضیحات

این تابع امکان تغییر نمایش nametag های پلیر، نوار سلامتی و نوار زره که بالای سرشون نمایش داده می‌شه رو فراهم می‌کنه. برای استفاده از تابع مشابه در سطح کلی، تابع [ShowNameTags](ShowNameTags).

| نام       | توضیحات                                          |
| --------- | ---------------------------------------------------- |
| playerid  | پلیری که نتیجه این تابع رو می‌بینه.    |
| targetid  | پلیری که name tag اش نشون داده یا مخفی می‌شه.       |
| bool:show | 'true' برای نشون دادن name tag، 'false' برای مخفی کردن name tag. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. پلیر مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    // playeri ke /nameoff type karde nemitune hich playere digei nametag bebine.
    if (strcmp("/nameoff", cmdtext, true) == 0)
    {
        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            ShowPlayerNameTagForPlayer(playerid, i, false);
        }
        GameTextForPlayer(playerid, "~W~Nametags ~R~off", 5000, 5);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

[ShowNameTags](ShowNameTags) باید روی 'true' تنظیم بشه تا بتونی name tag ها رو با ShowPlayerNameTagForPlayer نشون بدی، یعنی برای مؤثر بودن باید از قبل ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) رو انجام بدی ([OnPlayerStreamIn](../callbacks/OnPlayerStreamIn) جای خوبی هست).

:::

## توابع مرتبط

- [ShowNameTags](ShowNameTags): nametag ها رو روشن یا خاموش می‌کنه.
- [DisableNameTagLOS](DisableNameTagLOS): بررسی Line-Of-Sight nametag رو غیرفعال می‌کنه.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): marker یه پلیر رو تنظیم می‌کنه.