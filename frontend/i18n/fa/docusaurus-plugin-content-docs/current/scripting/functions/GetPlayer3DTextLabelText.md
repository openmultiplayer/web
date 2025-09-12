---
title: GetPlayer3DTextLabelText
sidebar_label: GetPlayer3DTextLabelText
description: متن یک 3D text label بازیکن رو می‌گیره.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

متن یک 3D text label بازیکن رو می‌گیره.

| اسم                | توضیح                                                 |
| ------------------- | ----------------------------------------------------------- |
| playerid            | شناسه بازیکن.                                       |
| PlayerText3D:textid | شناسه 3D text label بازیکن که می‌خوای متنش رو بگیری.    |
| text[]              | آرایه‌ای که متن توش ذخیره میشه، با reference پاس داده میشه. |
| len                 | طول متنی که باید ذخیره بشه.               |

## مثال‌ها

</div>

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new text[16];

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello World!", 0x008080FF, X, Y, Z, 40.0);

GetPlayer3DTextLabelText(playerid, playerTextId, text, sizeof(text));
// text = "Hello World!"
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): ساخت 3D Text Label فقط برای بازیکن مشخص.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): به‌روزرسانی متن و رنگ 3D Text Label بازیکن.
- [Get3DTextLabelText](Get3DTextLabelText): گرفتن متن 3D text label.

</div>