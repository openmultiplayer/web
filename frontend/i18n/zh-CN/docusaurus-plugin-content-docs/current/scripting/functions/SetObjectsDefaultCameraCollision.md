---
title: SetObjectsDefaultCameraCollision
sidebar_label: SetObjectsDefaultCameraCollision
description: 设置新创建物体的默认视角碰撞状态
tags: ["物体", "视角"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置新创建物体的默认视角碰撞状态（是否禁用）。

| 参数         | 说明                                                    |
| ------------ | ------------------------------------------------------- |
| bool:disable | `true`禁用新创建物体的视角碰撞，`false`启用（默认启用） |

## 返回值

此函数没有传统意义上的返回值，但会影响后续创建的物体

:::tip
此设置仅影响调用函数之后新创建的物体，不会修改已存在物体的视角碰撞状态
:::

## 示例代码

```c
public OnGameModeInit()
{
    // 禁用新物体的视角碰撞
    SetObjectsDefaultCameraCollision(true);

    // 创建地图物体
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // 上述物体将不会产生视角碰撞

    // 重新启用视角碰撞
    SetObjectsDefaultCameraCollision(false);

    // 创建更多地图物体
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // 上述物体将保持正常视角碰撞

    // 注意：之前创建的物体仍保持无碰撞状态

    return 1;
}
```

## 注意事项

:::warning

此函数仅在地图边界外生效（X/Y 轴超过 ±3000 单位时）

:::

## 相关函数

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): 禁用指定物体的视角碰撞
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): 禁用玩家专属物体的视角碰撞
