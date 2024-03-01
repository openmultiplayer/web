---
title: OnPlayerWeaponShot
description: 当玩家使用武器射击时，这个回调函数被调用。
tags: ["player"]
---

## 描述

该回调函数在玩家使用武器射击时调用。仅适用于有子弹的武器。仅对乘客提供支持(不对司机提供支持，并且不适用 sea sparrow (水上飞机)/hunter shots (阿帕奇直升机))。

| 参数名   | 描述                                                                            |
| -------- | ------------------------------------------------------------------------------- |
| playerid | 用武器射击的玩家的 ID。                                                         |
| WEAPON:weaponid | 该玩家使用的[武器](../resources/weaponids)的 ID。                               |
| BULLET_HIT_TYPE:hittype  | 射击击中的物体[类型](../resources/bullethittypes)(无、玩家、车辆或(玩家)物体)。 |
| hitid    | 被击中的玩家、车辆或物体的 ID。                                                 |
| Float:fX       | 玩家所击中的 X 轴坐标。                                                         |
| Float:fY       | 玩家所击中的 Y 轴坐标。                                                         |
| Float:fZ       | 玩家所击中的 Z 轴坐标。                                                         |

## 返回值

0 - 防止子弹造成伤害。

1 - 允许子弹造成伤害。

它在过滤脚本中总是先被调用，所以返回 0 会阻止其他脚本看到它。

## 案例

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "武器 %i 开火了。击中物体类型: %i   被击中的ID: %i   坐标: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## 要点

:::tip

这个回调函数只在启用延迟补偿时被调用。

如果 hittype(物体类型) 是:

- BULLET_HIT_TYPE_NONE：fX, fY 和 fZ 参数是法线坐标，如果没有击中任何物体(例如子弹无法到达的远的物体)，坐标将为 0.0;
- 其他类型：fX，fY 和 fZ 是相对于 Hitid 的偏移量。

:::

:::tip

[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) 函数可以在这个回调中用于获得更详细的子弹向量信息。

:::

:::warning

已知 Bug(s):

当你作为驾驶员在车中射击或者你在瞄准后(在空中射击)时不会被调用。

如果你射击的是一名驾驶着一辆车的玩家，那么 hittype 值为 BULLET_HIT_TYPE_VEHICLE，并带有正确的 hitid(即击中的玩家的车辆 id)，而不是 BULLET_HIT_TYPE_PLAYER(击中的玩家)。

SA-MP 0.3.7 版本中修正了部分问题：当用户恶意发送假武器数据时，其他的玩家客户端会冻结或崩溃。要解决这一问题，请检查参数中的 weaponid 武器 ID 是否能够真正发射子弹。

:::

## 相关函数

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): 获取玩家最后一枪的向量信息。
