---
title: SetGameModeText
sidebar_label: SetGameModeText
description: نام game mode رو تنظیم می‌کنه، که در server browser نمایش داده می‌شه.
tags: []
---

## توضیحات

نام game mode رو تنظیم می‌کنه، که در server browser نمایش داده می‌شه.

| نام             | توضیحات                                |
| ---------------- | ------------------------------------------ |
| format[]         | نام gamemode برای نمایش.              |
| OPEN_MP_TAGS:... | تعداد نامحدودی آرگومان از هر نوع. |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    SetGameModeText("Team Deathmatch");
    return 1;
}
```

<br />

```c
#define GAME_MODE_VERSION "1.5.0"

public OnGameModeInit()
{
    SetGameModeText("Roleplay v%s", GAME_MODE_VERSION);
    return 1;
}
```