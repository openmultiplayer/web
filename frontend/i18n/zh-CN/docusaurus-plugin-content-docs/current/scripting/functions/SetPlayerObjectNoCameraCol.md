---
title: 设置玩家物体无视角碰撞
sidebar_label: SetPlayerObjectNoCameraCol
description: 切换玩家物体的视角碰撞状态
tags: ["玩家"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

启用或禁用玩家专属物体的视角碰撞检测功能

| 参数名   | 说明                |
| -------- | ------------------- |
| playerid | 物体所属的玩家 ID   |
| objectid | 要设置的目标物体 ID |

## 返回值

**1** - 函数执行成功

**0** - 函数执行失败（物体不存在）

## 示例

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCol(playerid, objectid); // 对移动到3000单位外的物体禁用视角碰撞
    }
    return 1;
}
```

## 注意事项

:::tip

在正常圣安地列斯地图边界内此函数无效

:::

## 相关函数

- [SetObjectNoCameraCol](SetObjectNoCameraCol): 设置全局物体无视角碰撞
