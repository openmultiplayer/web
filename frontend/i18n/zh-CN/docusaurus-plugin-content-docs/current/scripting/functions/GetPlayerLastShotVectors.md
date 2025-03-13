---
title: GetPlayerLastShotVectors
sidebar_label: GetPlayerLastShotVectors
description: 获取玩家最后一次射击子弹的起始点和命中点坐标
tags: ["玩家"]
---

## 描述

获取玩家最后一次射击子弹的起始点和命中点坐标

| 参数名         | 说明                                    |
| -------------- | --------------------------------------- |
| playerid       | 需要获取射击信息的玩家 ID               |
| &Float:originX | 用于存储子弹发射原点 X 坐标的浮点型变量 |
| &Float:originY | 用于存储子弹发射原点 Y 坐标的浮点型变量 |
| &Float:originZ | 用于存储子弹发射原点 Z 坐标的浮点型变量 |
| &Float:hitPosX | 用于存储子弹命中点 X 坐标的浮点型变量   |
| &Float:hitPosY | 用于存储子弹命中点 Y 坐标的浮点型变量   |
| &Float:hitPosZ | 用于存储子弹命中点 Z 坐标的浮点型变量   |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的玩家不存在）

最后一次射击的坐标信息会被存储在指定的变量中

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/lastshot", true) == 0)
    {
        new string[128],
            Float:originX, Float:originY, Float:originZ,
            Float:hitPosX, Float:hitPosY, Float:hitPosZ;

        GetPlayerLastShotVectors(playerid, originX, originY, originZ, hitPosX, hitPosY, hitPosZ);

        format(string, sizeof(string), "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", originX, originY, originZ, hitPosX, hitPosY, hitPosZ);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 本函数仅在开启延迟补偿时生效
- 若子弹未命中任何物体，命中点坐标将返回 0。当前无法计算子弹在空中的飞行距离

:::

## 相关函数

- [GetPlayerWeaponData](GetPlayerWeaponData): 获取玩家持有的武器信息
- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前手持的武器
- [VectorSize](VectorSize): 计算向量的模长

## 相关回调函数

- [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot): 当玩家发射武器时触发
