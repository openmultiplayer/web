---
title: TextDrawShowForPlayer
sidebar_label: TextDrawShowForPlayer
description: یک textdraw رو برای یک بازیکن خاص نشون می‌ده.
tags: ["player", "textdraw"]
---

## توضیحات

یک textdraw رو برای یک بازیکن خاص نشون می‌ده.

| نام         | توضیحات                                                                        |
| ----------- | ------------------------------------------------------------------------------ |
| playerid    | ID بازیکنی که textdraw باید براش نشون داده بشه.                                     |
| Text:textid | ID textdraw ای که باید نشون داده بشه.<br />توسط [TextDrawCreate](TextDrawCreate) برگردونده می‌شه. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی بازیکن و/یا textdraw مشخص شده وجود نداره.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 100.0, "Welcome!");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## نکات

:::tip

اگر فقط یک بازیکن textdraw رو می‌بینه، بهتره از player-textdraw ها استفاده کنی. این برای textdraw هایی که باید اطلاعات مخصوص یک بازیکن رو نشون بدن هم مفیده.

:::

## توابع مرتبط

- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): چک می‌کنه که آیا یک textdraw برای بازیکن نشون داده شده یا نه.
