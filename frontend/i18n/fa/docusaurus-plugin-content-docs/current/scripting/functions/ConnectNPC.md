---
title: ConnectNPC
sidebar_label: ConnectNPC
description: یک NPC را به سرور متصل می‌کند.
tags: ["npc"]
---

## توضیحات

یک NPC را به سرور متصل می‌کند.

| نام            | توضیحات                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------- |
| const name[]   | نامی که NPC باید با آن متصل شود. باید از همان قوانین نام بازیکنان عادی تبعیت کند.   |
| const script[] | نام اسکریپت NPC که در پوشه npcmodes قرار دارد (بدون پسوند .amx).        |

## مقادیر بازگشتی

این تابع همیشه 1 برمی‌گرداند.

## مثال‌ها

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## نکات

:::tip

NPCها nametag ندارند. این‌ها را می‌توان با [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer) اسکریپت کرد.

:::

## توابع مرتبط

- [IsPlayerNPC](IsPlayerNPC): بررسی می‌کند که آیا بازیکن یک NPC است یا بازیکن واقعی.

## کالبک‌های مرتبط

- [OnPlayerConnect](../callbacks/OnPlayerConnect): زمانی که بازیکن به سرور متصل می‌شود فراخوانی می‌شود.
