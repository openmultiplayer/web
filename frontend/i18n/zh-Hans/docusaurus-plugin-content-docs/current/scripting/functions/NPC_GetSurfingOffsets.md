---
title: NPC_GetSurfingOffsets
sidebar_label: NPC_GetSurfingOffsets
description: 获取 NPC 的冲浪偏移。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的冲浪偏移。

| 名称  | 说明                                |
| ----- | ----------------------------------- |
| npcid | NPC 的 ID                           |
| &x    | 用于存储 X 偏移的变量，通过引用传递 |
| &y    | 用于存储 Y 偏移的变量，通过引用传递 |
| &z    | 用于存储 Z 偏移的变量，通过引用传递 |

## 返回值

若操作成功则返回 `true`，否则返回 `false`。

## 示例

```c
public CheckNPCSurfing(npcid)
{
    new Float:x, Float:y, Float:z;
    if (NPC_GetSurfingOffsets(npcid, x, y, z))
    {
        printf("NPC %d冲浪偏移: X=%.2f, Y=%.2f, Z=%.2f", npcid, x, y, z);
    }
    else
    {
        printf("获取 NPC  %d的冲浪偏移失败", npcid);
    }
}
```

## 注意事项

- 冲浪偏移表示 NPC 相对于其正在冲浪的物体/车辆的相对位置
- 所有偏移值都以浮点数形式返回

## 相关函数

- [NPC_SetSurfingOffsets](NPC_SetSurfingOffsets): 设置 NPC 的冲浪偏移
- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 正在冲浪的物体
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 正在冲浪的车辆
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): 获取 NPC 正在冲浪的玩家物体
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
