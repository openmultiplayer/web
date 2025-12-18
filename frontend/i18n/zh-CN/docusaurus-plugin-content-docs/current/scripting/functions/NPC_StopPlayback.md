---
title: NPC_StopPlayback
sidebar_label: NPC_StopPlayback
description: 停止 NPC 的录制回放。
tags: ["npc", "回放", "录制"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

停止 NPC 当前录制回放的回放。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopplayback", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:success = NPC_StopPlayback(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 回放停止：%s", npcid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 将在回放结束时停在当前位置
- 如果 NPC 没有在回放录制，此函数无效
- 使用 `NPC_IsPlayingPlayback` 检查 NPC 是否在回放录制
- 录制文件保持加载状态，可以再次使用

## 相关函数

- [NPC_StartPlayback](NPC_StartPlayback): 开始 NPC 回放
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): 检查是否在回放
- [NPC_LoadRecord](NPC_LoadRecord): 加载录制文件
- [NPC_UnloadRecord](NPC_UnloadRecord): 卸载录制

## 相关回调

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): 回放结束时调用
