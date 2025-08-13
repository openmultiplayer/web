---
title: strins
sidebar_label: strins
description: یک رشته را در رشته‌ای دیگر درج کن.
tags: ["string"]
---

<LowercaseNote />

## توضیحات

یک رشته را در رشته‌ای دیگر درج می‌کند.

| نام                         | توضیحات                                    |
| --------------------------- | ------------------------------------------ |
| string[]                    | رشته‌ای که می‌خوای substr رو توش درج کنی.   |
| const substr[]              | رشته‌ای که می‌خوای توی string درج کنی.      |
| pos                         | موقعیتی که می‌خوای از اونجا شروع به درج کنی. |
| maxlength = sizeof (string) | حداکثر اندازه‌ای که می‌خوای درج کنی.          |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
// Add an [AFK] tag to the start of players' names
// ye [AFK] tag be aval-e esm-e player-ha ezafe kon
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
if (strlen(playerName) <= 18)
{
	strins(playerName, "[AFK]", 0);
}
SetPlayerName(playerid, playerName);

// WARNING: Players with names that are 20+ characters long can not have an [AFK] tag, as that would make their name 25 characters long and the limit is 24.
// HOSHDAR: Player-hayi ke esm-eshun 20+ character dare nemitonan [AFK] tag dashte bashan, chon in kar esm-eshuno 25 character mikone va had 24 hast.
```

## توابع مرتبط

- [strcmp](strcmp): دو رشته رو با هم مقایسه کن تا ببینی یکی هستن یا نه.
- [strfind](strfind): توی یک رشته دنبال رشته‌ای دیگه بگرد.
- [strdel](strdel): قسمتی از یک رشته رو پاک کن.
- [strlen](strlen): طول یک رشته رو بدست بیار.
- [strmid](strmid): قسمتی از یک رشته رو توی رشته‌ای دیگه کپی کن.
- [strpack](strpack): یک رشته رو توی رشته مقصد pack کن.
- [strval](strval): یک رشته رو به عدد تبدیل کن.
- [strcat](strcat): دو رشته رو به هم وصل کن.
