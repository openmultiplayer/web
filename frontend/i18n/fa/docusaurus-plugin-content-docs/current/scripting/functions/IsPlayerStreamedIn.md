---
title: IsPlayerStreamedIn
sidebar_label: IsPlayerStreamedIn
description: چک می‌کنه که آیا یه بازیکن در کلاینت بازیکن دیگه stream شده یا نه.
tags: ["player"]
---

## توضیحات

چک می‌کنه که آیا یه بازیکن در کلاینت بازیکن دیگه stream شده یا نه.

| نام         | توضیحات                                                          |
| ----------- | ---------------------------------------------------------------- |
| playerid    | ID بازیکنی که باید چک بشه که stream شده یا نه.                    |
| forplayerid | ID بازیکنی که باید چک بشه که playerid براش stream شده یا نه.     |

## مقادیر برگشتی

**true** - بازیکن stream شده.

**false** - بازیکن stream نشده.

## مثال‌ها

```c
if (IsPlayerStreamedIn(playerid, 0))
{
	SendClientMessage(playerid, -1, "ID 0 can see you.");
}
```

## نکات

:::tip

**سرور SA-MP:** بازیکنان اگه بیشتر از 200.0 متر فاصله داشته باشن stream out می‌شن (ببین [server.cfg](../../server/server.cfg) - **stream_distance**)

**سرور open.mp:** بازیکنان اگه بیشتر از 200.0 متر فاصله داشته باشن stream out می‌شن (ببین [config.json](../../server/config.json) - **network.stream_radius**)

:::

:::warning

بازیکنان در کلاینت خودشون stream نمی‌شن، پس اگه playerid همون forplayerid باشه false برمی‌گردونه!

:::

## توابع مرتبط

- [IsActorStreamedIn](IsActorStreamedIn): چک می‌کنه که آیا یه actor برای بازیکن stream شده یا نه.
- [IsVehicleStreamedIn](IsVehicleStreamedIn): چک می‌کنه که آیا یه وسیله نقلیه برای بازیکن stream شده یا نه.

## callback های مرتبط

- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): وقتی بازیکن برای بازیکن دیگه stream می‌شه فراخوانی می‌شه.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): وقتی بازیکن برای بازیکن دیگه stream out می‌شه فراخوانی می‌شه.
- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): وقتی وسیله نقلیه برای بازیکن stream می‌شه فراخوانی می‌شه.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): وقتی وسیله نقلیه برای بازیکن stream out می‌شه فراخوانی می‌شه.