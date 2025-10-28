---
title: NPC_GetKeys
sidebar_label: NPC_GetKeys
description: 获取 NPC 当前的按键状态。
tags: ["npc", "按键"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前的按键状态。

| 参数          | 说明                       |
| ------------- | -------------------------- |
| npcid         | NPC 的 ID                  |
| &upAndDown    | 用于存储上下键状态的变量   |
| &leftAndRight | 用于存储左右键状态的变量   |
| &keys         | 用于存储其他按键状态的变量 |

## 返回值

若成功获取按键状态则返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("KeyBot");
    NPC_Spawn(npcid);

    // 设置一些按键
    NPC_SetKeys(npcid, KEY_UP, KEY_LEFT, KEY_FIRE);

    // 获取按键状态
    new upDown, leftDown, keys;
    NPC_GetKeys(npcid, upDown, leftDown, keys);

    printf("NPC %d按键 - 上下: %d, 左右: %d, 其他: %d",
        npcid, upDown, leftDown, keys);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkkeys", true))
    {
        new upDown, leftDown, keys;
        NPC_GetKeys(0, upDown, leftDown, keys);

        new keyInfo[128] = "NPC 0按键:";

        if (upDown & KEY_UP) strcat(keyInfo, " 上");
        if (upDown & KEY_DOWN) strcat(keyInfo, " 下");
        if (leftDown & KEY_LEFT) strcat(keyInfo, " 左");
        if (leftDown & KEY_RIGHT) strcat(keyInfo, " 右");
        if (keys & KEY_FIRE) strcat(keyInfo, " 开火");

        SendClientMessage(playerid, 0xFFFFFFFF, keyInfo);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 除 npcid 外的所有参数都通过引用传递且会被修改
- 按键状态以位标志形式存储
- 使用位运算来检查单个按键
- 此函数反映 NPC 当前的输入状态

## 相关函数

- [NPC_SetKeys](NPC_SetKeys): 设置 NPC 按键状态
- [NPC_Move](NPC_Move): 使 NPC 移动到指定位置
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动

## 相关回调

- [../callbacks/OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用
