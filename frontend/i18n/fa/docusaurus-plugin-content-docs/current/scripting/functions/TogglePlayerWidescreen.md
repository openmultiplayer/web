---
title: TogglePlayerWidescreen
sidebar_label: TogglePlayerWidescreen
description: widescreen بازیکن رو فعال/غیرفعال کن.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

widescreen بازیکن رو فعال/غیرفعال می‌کنه.

| نام       | توضیحات                                      |
|-----------|--------------------------------------------------|
| playerid  | ID بازیکنی که می‌خوای widescreen ش رو فعال/غیرفعال کنی.   |
| bool:wide | **true** برای روشن کردن و **false** برای خاموش کردن. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/widescreen", true))
    {
        TogglePlayerWidescreen(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You turned on the widescreen!");
        // SERVER: widescreen ro roshan kardi!
        return 1;
    }
    return 0;
}
```

<hr />

**Widescreen روشن:**

![](https://i.ibb.co/Zcc2qmD/widescreen-on.png)

**Widescreen خاموش:**

![](https://i.ibb.co/jb1YcQS/widescreen-off.png)

## توابع مرتبط

- [IsPlayerWidescreenToggled](IsPlayerWidescreenToggled): چک می‌کنه که آیا widescreen بازیکن روشن هست یا خاموش.
