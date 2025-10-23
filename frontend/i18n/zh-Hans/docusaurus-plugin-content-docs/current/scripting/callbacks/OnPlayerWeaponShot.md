---
title: OnPlayerWeaponShot
sidebar_label: OnPlayerWeaponShot
description: 当玩家射击时触发该回调函数。
tags: ["玩家"]
---

## 描述

当玩家射击时触发该回调函数（仅支持枪械类武器）。

| 参数名                  | 说明                                              |
| ----------------------- | ------------------------------------------------- |
| playerid                | 射击的玩家ID                                      |
| WEAPON:weaponid         | 使用的[武器ID](../resources/weaponids)            |
| BULLET_HIT_TYPE:hittype | 子弹命中的[目标类型](../resources/bullethittypes) |
| hitid                   | 被击中的玩家/车辆/物体ID                          |
| Float:fX                | 命中点的X坐标                                     |
| Float:fY                | 命中点的Y坐标                                     |
| Float:fZ                | 命中点的Z坐标                                     |

## 返回值

0 - 阻止子弹造成伤害

1 - 允许子弹造成伤害

该回调始终在滤镜脚本中优先触发，返回0将阻止其他脚本处理此事件。

## 示例

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new string[144];
    format(string, sizeof(string), "武器ID %i，命中类型: %i，目标ID: %i，坐标: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## 注意事项

:::tip

- 仅在启用延迟补偿时触发此回调
- 当hittype为BULLET_HIT_TYPE_NONE时，fX/fY/fZ为绝对坐标（若未命中则返回0.0）
- 其他命中类型时，坐标为相对于hitid的偏移量
- 使用[GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors)可获取更详细的弹道向量信息

:::

:::warning

**已知问题**

- 作为车辆驾驶员射击时不会触发
- 开启瞄准镜向后射击时不会触发
- 击中车辆内玩家时返回BULLET_HIT_TYPE_VEHICLE而非PLAYER类型
- 0.3.7版本后需校验weaponid真实性以防止客户端崩溃
- 武装车辆（如直升机机炮）射击时不会触发

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnPlayerGiveDamage](OnPlayerGiveDamage): 当玩家造成伤害时触发

## 相关函数

以下函数可能与该回调存在关联：

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): 获取玩家最后发射的子弹向量

## 相关资源

- [子弹命中类型](../resources/bullethittypes)
