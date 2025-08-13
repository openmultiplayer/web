---
title: UpdatePlayer3DTextLabelText
sidebar_label: UpdatePlayer3DTextLabelText
description: متن و رنگ 3D Text Label بازیکن رو آپدیت کن.
tags: ["player", "3dtextlabel"]
---

## توضیحات

متن و رنگ 3D Text Label بازیکن رو آپدیت می‌کنه

| نام                 | توضیحات                                                   |
| ------------------- | ------------------------------------------------------------- |
| playerid            | ID بازیکنی که 3D Text Label براش ساخته شده.                |
| PlayerText3D:textid | 3D Text Label ای که می‌خوای آپدیت کنی.                         |
| colour              | رنگی که 3D Text Label از الان باید داشته باشه.          |
| const text[]        | متن جدیدی که 3D Text Label از الان باید داشته باشه. |
| OPEN_MP_TAGS:...    | تعداد نامحدودی از آرگومان‌ها با هر tag ای.                    |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## نکات

:::warning

اگه text[] خالی باشه، سرور/کلاینت‌های کنار متن ممکنه crash کنن! (توی open.mp درست شده)

:::

## توابع مرتبط

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): یک 3D text label برای یک بازیکن بساز.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 3D text label بازیکن رو پاک کن.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): متن 3D text label بازیکن رو بدست بیار.
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): رنگ 3D text label بازیکن رو بدست بیار.
- [Update3DTextLabelText](Update3DTextLabelText): متن یک 3D text label رو تغییر بده.
