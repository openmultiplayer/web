---
title: GetPlayerMarkerForPlayer
sidebar_label: GetPlayerMarkerForPlayer
description: دریافت رنگ nametag و نقطه radar یک بازیکن برای بازیکن دیگر.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />
 
## توضیحات

دریافت رنگ **nametag** و **نقطه radar** یک بازیکن برای بازیکن دیگر.

| نام     | توضیحات                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | بازیکنی که می‌تواند رنگ تغییر یافته blip/nametag بازیکن را ببیند                                                                                |                        |
| targetid | بازیکنی که رنگش تغییر کرده است.                                                                                                       |

## مقادیر برگشتی

رنگ **nametag** و **نقطه radar** بازیکن هدف.

## مثال‌ها

```c
// Make player 42 see player 1 as a red marker
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

new markerColour = GetPlayerMarkerForPlayer(42, 1);
// markerColour = 0xFF0000FF
```

## توابع مرتبط

- [ShowPlayerMarkers](ShowPlayerMarkers): تصمیم‌گیری اینکه آیا سرور باید نشانگرها را در radar نشان دهد.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): محدود کردن شعاع نشانگر بازیکن.
- [SetPlayerColor](SetPlayerColor): تنظیم رنگ بازیکن.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): نمایش یا مخفی کردن nametag برای بازیکن خاص.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): تنظیم نشانگر بازیکن برای بازیکن مشخص.