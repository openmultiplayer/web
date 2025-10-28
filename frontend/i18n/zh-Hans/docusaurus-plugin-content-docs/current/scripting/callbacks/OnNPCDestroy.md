---
title: OnNPCDestroy
sidebar_label: OnNPCDestroy
description: 当 NPC 被销毁时调用此回调。
tags: ["npc"]
---

<VersionWarnZH_Hans name='回调' version='omp v1.1.0.changemelater' />

## 描述

当 NPC 被销毁并从服务器移除时调用此回调。

| 名称  | 说明               |
| ----- | ------------------ |
| npcid | 被销毁的 NPC 的 ID |

## 示例

```c
public OnNPCDestroy(npcid)
{
    printf("NPC %d 已被销毁", npcid);

    // 清理定时器
    if (g_NPCTimer[npcid] != -1)
    {
        KillTimer(g_NPCTimer[npcid]);
        g_NPCTimer[npcid] = -1;
    }

    return true;
}
```

## 注意事项

- 此回调在 NPC 从服务器移除之前立即调用
- 在此回调之后，NPC 将断开连接并释放其玩家槽位

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_Create](../functions/NPC_Create): 创建新的 NPC
- [NPC_Destroy](../functions/NPC_Destroy): 销毁现有的 NPC
- [NPC_IsValid](../functions/NPC_IsValid): 检查 NPC ID 是否有效

## 相关回调

- [OnNPCCreate](OnNPCCreate): 当 NPC 被创建时调用
