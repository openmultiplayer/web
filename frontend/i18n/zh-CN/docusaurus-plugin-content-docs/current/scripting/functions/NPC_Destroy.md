---
title: NPC_Destroy
sidebar_label: NPC_Destroy
description: 销毁 NPC。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

销毁 NPC。

| 名称  | 描述                 |
| ----- | -------------------- |
| npcid | 要销毁的 NPC 的 ID。 |

## 返回值

如果 NPC 成功销毁则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroynpc", true))
    {
        if (NPC_IsValid(0))
        {
            NPC_Destroy(0);
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 已销毁");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 这将从服务器中完全移除 NPC。
- NPC ID 在销毁后变为无效。

:::

## 相关函数

- [NPC_Create](NPC_Create): 创建新的 NPC。
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效。

## 相关回调

- [OnNPCDestroy](../callbacks/OnNPCDestroy): 当 NPC 被销毁时调用。
