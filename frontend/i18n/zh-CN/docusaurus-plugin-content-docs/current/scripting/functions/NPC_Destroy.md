---
title: NPC_Destroy
sidebar_label: NPC_Destroy
description: 销毁 NPC。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

销毁一个 NPC。

| 参数  | 说明               |
| ----- | ------------------ |
| npcid | 要销毁的 NPC 的 ID |

## 返回值

如果 NPC 成功销毁返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroynpc", true))
    {
        new npcid = PlayerNPC[playerid];

        if (!NPC_IsValid(npcid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "你没有有效的NPC可以销毁。");
            return 1;
        }

        if (NPC_Destroy(npcid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "你的NPC（ID %d）已被销毁。", npcid);
            PlayerNPC[playerid] = INVALID_NPC_ID; // 如果没有定义INVALID_NPC_ID，可以使用0
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "销毁你的NPC（ID %d）失败。", npcid);
        }

        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 这将从服务器中完全移除 NPC，ID 在销毁后变为无效。

:::

## 相关函数

- [NPC_Create](NPC_Create): 创建新 NPC
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效

## 相关回调

- [OnNPCDestroy](../callbacks/OnNPCDestroy): NPC 销毁时调用
