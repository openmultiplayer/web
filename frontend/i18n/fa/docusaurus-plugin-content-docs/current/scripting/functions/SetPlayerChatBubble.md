---
title: SetPlayerChatBubble
sidebar_label: SetPlayerChatBubble
description: یک chat bubble بالای name tag پلیر می‌سازه.
tags: ["player"]
---

## توضیحات

یک chat bubble بالای name tag پلیر می‌سازه.

| نام                | توضیحات                                                     |
| ------------------ | ----------------------------------------------------------- |
| playerid           | پلیری که قراره chat bubble داشته باشه                       |
| const text[]       | متنی که قراره نمایش داده بشه                                |
| colour             | رنگ متن                                                     |
| Float:drawDistance | فاصله‌ای که پلیر ها از اونجا می‌تونن chat bubble رو ببینن    |
| expireTime         | زمان به میلی‌ثانیه که bubble قراره نمایش داده بشه             |
| OPEN_MP_TAGS:...   | تعداد نامشخصی از آرگومان‌ها با هر نوع تگی                    |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerText(playerid, text[])
{
    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);
    return 1;
}
```

## نکات

:::tip

خودت نمی‌تونی chat bubble های خودت رو ببینی. همین موضوع برای attached 3D text label ها هم صدق می‌کنه.

:::

:::tip

- می‌تونی از color embedding برای چندین رنگ توی پیام استفاده کنی.
- استفاده از '-1' به عنوان رنگ باعث می‌شه متن سفید بشه (به این دلیل ساده که -1 وقتی به فرمت hexadecimal نمایش داده می‌شه، 0xFFFFFFFF می‌شه).

:::

## توابع مرتبط

- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): یک 3D text label رو به پلیر وصل می‌کنه.