---
title: SetObjectNoCameraCol
sidebar_label: SetObjectNoCameraCol
description: 禁用玩家视角与指定物体的碰撞检测。
tags: ["视角"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

禁用玩家视角与指定物体的碰撞检测。

| 参数     | 说明                        |
| -------- | --------------------------- |
| objectid | 要禁用视角碰撞检测的物体 ID |

## 返回值

1 - 函数执行成功

0 - 函数执行失败（指定的物体不存在）

## 示例代码

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCol(objectid);
    }
    return 1;
}

public OnGameModeInit()
{
    // 在地图边界外创建大型物体
    CreateObject(6959, 3100.0, 3100.0, 15.0, 0.0, 0.0, 0.0);
    return 1;
}
```

## 注意事项

:::tip

此函数仅在地图边界外生效（X/Y 轴超过 ±3000 单位时）

:::

## 相关函数

- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): 禁用视角与玩家专属物体的碰撞检测
