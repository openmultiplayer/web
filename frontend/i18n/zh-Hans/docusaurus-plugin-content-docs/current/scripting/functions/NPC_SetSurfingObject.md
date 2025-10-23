---
title: NPC_SetSurfingObject
sidebar_label: NPC_SetSurfingObject
description: 设置 NPC 正在冲浪的对象。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 正在冲浪的对象。

| 名称     | 描述      |
| -------- | --------- |
| npcid    | NPC 的 ID |
| objectid | 对象 ID   |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("SurfingBot");
    new objectid = CreateObject(1225, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

    NPC_Spawn(npcid);
    NPC_SetPos(npcid, 1958.33, 1343.12, 17.36);
    NPC_SetSurfingObject(npcid, objectid);
    return 1;
}
```

## 注意事项

- 如果对象移动，NPC 将随之移动
- 使用 `NPC_SetSurfingOffset` 微调 NPC 相对于对象的位置
- 对象必须存在才能正常冲浪

## 相关函数

- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 正在冲浪的对象
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 正在冲浪的车辆
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 正在冲浪的玩家对象
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): 设置 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
