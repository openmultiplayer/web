---
title: NPC_StartPlayback
sidebar_label: NPC_StartPlayback
description: 为 NPC 开始回放录制文件。
tags: ["npc", "录制", "回放"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

通过文件名为 NPC 开始回放录制文件。

| 参数         | 说明                       |
| ------------ | -------------------------- |
| npcid        | NPC 的 ID                  |
| recordName[] | 要回放的录制文件名         |
| autoUnload   | 回放完成后是否卸载录制文件 |
| startX       | 起始 X 坐标                |
| startY       | 起始 Y 坐标                |
| startZ       | 起始 Z 坐标                |
| rotX         | 起始 X 旋转                |
| rotY         | 起始 Y 旋转                |
| rotZ         | 起始 Z 旋转                |

## 返回值

如果回放成功开始则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startplayback ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new recordName[64];
        new len = strlen(cmdtext);
        if (len <= 15)
            return SendClientMessage(playerid, 0xFF0000FF, "用法：/startplayback [recordname]");

        strmid(recordName, cmdtext, 15, len);

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        new bool:success = NPC_StartPlayback(npcid, recordName, true, x, y, z, 0.0, 0.0, 0.0);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 开始回放：%s", npcid, recordName);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d 开始回放失败", npcid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 录制文件必须存在于 `npcmodes\recordings` 目录中
- 如果 autoUnload 为 true，回放结束时录制文件将被卸载
- 使用 NPC_StartPlaybackEx 可以通过预加载的录制获得更好的控制

## 相关函数

- [NPC_StartPlaybackEx](NPC_StartPlaybackEx): 通过录制 ID 开始回放
- [NPC_StopPlayback](NPC_StopPlayback): 停止回放
- [NPC_PausePlayback](NPC_PausePlayback): 暂停/取消暂停回放
- [NPC_LoadRecord](NPC_LoadRecord): 预加载录制文件

## 相关回调

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): 回放开始时调用
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
