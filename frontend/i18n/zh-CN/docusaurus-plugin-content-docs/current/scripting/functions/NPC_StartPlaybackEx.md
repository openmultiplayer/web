---
title: NPC_StartPlaybackEx
sidebar_label: NPC_StartPlaybackEx
description: 使用预加载的录制 ID 为 NPC 开始回放，支持扩展选项。
tags: ["npc", "回放", "录制"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

使用预加载的录制 ID 为 NPC 开始回放，支持扩展选项。

| 参数       | 说明                    |
| ---------- | ----------------------- |
| npcid      | NPC 的 ID               |
| recordId   | 预加载的录制 ID         |
| autoUnload | 回放完成后是否自动卸载  |
| startX     | 相对于录制位置的 X 偏移 |
| startY     | 相对于录制位置的 Y 偏移 |
| startZ     | 相对于录制位置的 Z 偏移 |
| rotX       | X 旋转偏移              |
| rotY       | Y 旋转偏移              |
| rotZ       | Z 旋转偏移              |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startplaybackex ", true, 17))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new recordId = strval(cmdtext[17]);

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        new bool:success = NPC_StartPlaybackEx(npcid, recordId, true, x, y, z, 0.0, 0.0, 0.0);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 使用录制 ID %d 开始回放", npcid, recordId);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d 使用录制 ID %d 开始回放失败", npcid, recordId);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 录制必须使用 `NPC_LoadRecord` 预加载
- 自动卸载可在回放完成后节省内存

## 相关函数

- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_StartPlayback](NPC_StartPlayback): 通过文件名开始回放
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放
- [NPC_IsValidRecord](NPC_IsValidRecord): 检查录制是否有效

## 相关回调

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
