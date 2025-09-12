---
title: SetPlayerMarkerForPlayer
sidebar_label: SetPlayerMarkerForPlayer
description: رنگ nametag و radar blip یک پلیر رو برای پلیر دیگه تغییر می‌ده.
tags: ["player"]
---

## توضیحات

رنگ nametag و radar blip یک پلیر رو برای پلیر دیگه تغییر می‌ده.

| نام      | توضیحات                                                    |
| -------- | ---------------------------------------------------------- |
| playerid | پلیری که رنگ blip/nametag تغییر یافته پلیر رو می‌بینه      |
| targetid | پلیری که رنگش قراره تغییر کنه                              |
| colour   | رنگ جدید. از مقادیر alpha پشتیبانی می‌کنه                  |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
// Player 42 ro vadar kon player 1 ro be onvan ye marker ghermez bebine
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

// Marker e player ro ye sefid namaryii kon (chat sefid mishe vali marker napadid mishe).
SetPlayerMarkerForPlayer(42, 1, 0xFFFFFF00);

// Marker e player ro baraye player namaryii kon vali rang e chat ro hamon negah dar. faghat agar SetPlayerColor estefade shode bashe dorost kar mikone:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) & 0xFFFFFF00));

// Marker e player ro baraye player kamelen opaque (solid) kon vali rang e chat ro hamon negah dar. faghat agar SetPlayerColor estefade shode bashe dorost kar mikone:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) | 0x000000FF));
```

## توابع مرتبط

- [ShowPlayerMarkers](ShowPlayerMarkers): تصمیم می‌گیره که آیا سرور باید marker ها رو روی رادار نشون بده یا نه.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): شعاع marker پلیر رو محدود می‌کنه.
- [SetPlayerColor](SetPlayerColor): رنگ پلیر رو تنظیم می‌کنه.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): nametag رو برای پلیر خاصی نشون می‌ده یا مخفی می‌کنه.
- [GetPlayerMarkerForPlayer](GetPlayerMarkerForPlayer): رنگ nametag و radar blip یک پلیر رو برای پلیر دیگه دریافت می‌کنه.