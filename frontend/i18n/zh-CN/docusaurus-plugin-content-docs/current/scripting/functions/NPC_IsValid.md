---
title: NPC_IsValid
sidebar_label: NPC_IsValid
description: 检查 NPC ID 是否有效。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC ID 是否有效且 NPC 存在。

| 参数  | 说明              |
| ----- | ----------------- |
| npcid | 要检查的 NPC ID。 |

## 返回值

如果 NPC 有效则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
   if (!strcmp(cmdtext, "/checkvalid", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new bool:isValid = NPC_IsValid(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 是否有效: %s", npcid, isValid ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 在对 NPC 执行操作前始终检查其是否有效。
- NPC 被销毁后会变为无效。
- 这可以防止运行时错误和崩溃。
- 在遍历潜在 NPC ID 的循环中使用此函数。

:::

## 相关函数

- [NPC_Create](NPC_Create): 创建新 NPC。
- [NPC_Destroy](NPC_Destroy): 销毁 NPC。
- [NPC_GetAll](NPC_GetAll): 获取所有有效的 NPC ID。
- [NPC_IsDead](NPC_IsDead): 检查 NPC 是否死亡。
