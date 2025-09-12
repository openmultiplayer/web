---
title: ShowNameTags
sidebar_label: ShowNameTags
description: نمایش nametag ها، نوار سلامتی و نوار زره بالای پلیرها رو تغییر می‌ده.
tags: []
---

## توضیحات

نمایش nametag ها، نوار سلامتی و نوار زره بالای پلیرها رو تغییر می‌ده.

| نام       | توضیحات                                                |
| --------- | ---------------------------------------------------------- |
| bool:show | 'false' برای غیرفعال کردن، 'true' برای فعال کردن (به صورت پیش‌فرض فعال هست). |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    // in hame nametag haye player ro kamel gheyre faal mikone
    // (shamele health va armour bar ha)
    ShowNameTags(false);
}
```

## نکات

:::warning

این تابع فقط می‌تونه در [OnGameModeInit](OnGameModeInit) استفاده بشه. برای زمان‌های دیگه، [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer) رو ببین.

:::

:::tip

می‌تونی nametag های پلیر رو از طریق [config.json](../../server/config.json) هم تغییر بدی

```json
"use_nametags": false,
```

:::

## توابع مرتبط

- [DisableNameTagLOS](DisableNameTagLOS): بررسی Line-Of-Sight nametag رو غیرفعال می‌کنه.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): nametag رو برای یه پلیر خاص نشون می‌ده یا مخفی می‌کنه.
- [ShowPlayerMarkers](ShowPlayerMarkers): تصمیم می‌گیره که آیا سرور باید marker ها رو روی radar نشون بده یا نه.