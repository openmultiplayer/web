---
title: NPC_SetSurfingOffsets
sidebar_label: NPC_SetSurfingOffsets
description: 设置 NPC 的冲浪偏移。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的冲浪偏移。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |
| x     | X 偏移    |
| y     | Y 偏移    |
| z     | Z 偏移    |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingoffset ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x, Float:y, Float:z;
        new idx = 18;

        // 处理x
        while (cmdtext[idx] == ' ') idx++;
        new startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new xStr[32];
        strmid(xStr, cmdtext, startIdx, idx);
        x = floatstr(xStr);

        // 处理y
        while (cmdtext[idx] == ' ') idx++;
        startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new yStr[32];
        strmid(yStr, cmdtext, startIdx, idx);
        y = floatstr(yStr);

        // 处理z
        while (cmdtext[idx] == ' ') idx++;
        z = floatstr(cmdtext[idx]);

        NPC_SetSurfingOffsets(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 冲浪偏移设置为 %.2f, %.2f, %.2f", npcid, x, y, z);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 冲浪偏移决定了 NPC 相对于其冲浪的物体/车辆的相对位置
- 正 Z 值将 NPC 向上移动，负值向下移动
- 正 Y 值通常将 NPC 相对于车辆方向向前移动
- 正 X 值将 NPC 相对于车辆方向向右移动
- 这对于微调冲浪时 NPC 的位置很有用
- 非常适合创建车辆护送或乘客

## 相关函数

- [NPC_GetSurfingOffsets](NPC_GetSurfingOffsets): 获取 NPC 的冲浪偏移
- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 正在冲浪的物体
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 正在冲浪的车辆
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 正在冲浪的玩家物体
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
