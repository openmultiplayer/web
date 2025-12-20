---
title: SetObjectNoCameraCollision
sidebar_label: SetObjectNoCameraCollision
description: 禁用玩家视角与指定物体的碰撞检测。
tags: ["物体", "视角"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

禁用玩家视角与指定物体的碰撞检测。

| 参数     | 说明                        |
| -------- | --------------------------- |
| objectid | 要禁用视角碰撞检测的物体 ID |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定的物体不存在）

## 示例代码

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCollision(objectid);
    }
    return 1;
}
```

## 注意事项

:::tip

此函数仅在地图边界外生效（X/Y 轴超过 ±3000 单位时）

:::

## 相关函数

- [HasObjectCameraCollision](HasObjectCameraCollision): 检查物体是否启用了视角碰撞检测
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): 禁用视角与玩家专属物体的碰撞检测
