---
title: IsPlayerNPC
sidebar_label: IsPlayerNPC
description: چک می‌کنه که آیا بازیکن یه بازیکن واقعی هست یا NPC.
tags: ["player", "npc"]
---

## توضیحات

چک می‌کنه که آیا بازیکن یه بازیکن واقعی هست یا NPC.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**true** - بازیکن یه NPC هست.

**false** - بازیکن NPC نیست.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "An NPC connected!");
        return 1;
    }

    // The other code here won't be executed unless its a player
}
```

## توابع مرتبط

- [ConnectNPC](ConnectNPC): اتصال یه NPC.
- [IsPlayerAdmin](IsPlayerAdmin): چک می‌کنه که آیا بازیکن به RCON وارد شده یا نه.