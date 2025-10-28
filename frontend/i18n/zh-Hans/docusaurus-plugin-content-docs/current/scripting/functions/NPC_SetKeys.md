---
title: NPC_SetKeys
sidebar_label: NPC_SetKeys
description: 设置 NPC 的按键状态，模拟按键操作。
tags: ["npc", "按键", "输入"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的按键状态，模拟按键操作。

| 参数         | 说明             |
| ------------ | ---------------- |
| npcid        | NPC 的 ID        |
| upAndDown    | 上/下键状态      |
| leftAndRight | 左/右键状态      |
| keys         | 要设置的按键组合 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1);
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 让 NPC 向前移动
    NPC_SetKeys(npcid, KEY_UP, 0, 0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstop", true))
    {
        // 清除 NPC 0 的所有按键
        NPC_SetKeys(0, 0, 0, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 移动已停止");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 按键影响 NPC 在车辆内和步行时的行为
- 常用按键：KEY_UP（上）、KEY_DOWN（下）、KEY_LEFT（左）、KEY_RIGHT（右）
- 使用 NPC_GetKeys 检查当前按键状态
- 按键状态会持续到被更改或 NPC 状态重置

## 相关函数

- [NPC_GetKeys](NPC_GetKeys): 获取 NPC 的按键状态
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_Move](NPC_Move): 让 NPC 移动到位置
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动

## 相关回调

_此函数不会触发任何特定的回调。_
