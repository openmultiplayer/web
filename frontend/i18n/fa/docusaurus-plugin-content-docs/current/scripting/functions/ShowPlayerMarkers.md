---
title: ShowPlayerMarkers
sidebar_label: ShowPlayerMarkers
description: marker های پلیر (blip های روی radar) رو تغییر می‌ده.
tags: ["player"]
---

## توضیحات

marker های پلیر (blip های روی radar) رو تغییر می‌ده. باید وقتی سرور شروع می‌شه استفاده بشه (OnGameModeInit). برای زمان‌های دیگه، [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer) رو ببین.

| نام                      | توضیحات                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| PLAYER_MARKERS_MODE:mode | [mode](../resources/markermodes) ای که برای marker ها استفاده می‌شه. می‌تونن streamed باشن، یعنی فقط برای پلیرهای نزدیک قابل مشاهده باشن. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    // Player marker ha faghat baraye playeraye nazdik ghabele mosha hede hastan
    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);
}
```

## حالت‌های Marker

| ID  | MODE                         |
| --- | ---------------------------- |
| 0   | PLAYER_MARKERS_MODE_OFF      |
| 1   | PLAYER_MARKERS_MODE_GLOBAL   |
| 2   | PLAYER_MARKERS_MODE_STREAMED |

## نکات

:::tip

همچنین امکان تنظیم رنگ یه پلیر به رنگی که شفافیت کامل داره (بدون مقدار alpha) وجود داره. این امکان نمایش marker ها رو به صورت per-player فراهم می‌کنه.

:::

## توابع مرتبط

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): marker یه پلیر رو تنظیم می‌کنه.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): شعاع marker پلیر رو محدود می‌کنه.
- [ShowNameTags](ShowNameTags): nametag ها رو روشن یا خاموش می‌کنه.
- [SetPlayerColor](SetPlayerColor): رنگ یه پلیر رو تنظیم می‌کنه.

## منابع مرتبط

- [Marker Modes](../resources/markermodes)