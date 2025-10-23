---
title: NPC_Create
sidebar_label: NPC_Create
description: 创建新的 NPC。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

创建新的 NPC。

| 名称         | 描述                           |
| ------------ | ------------------------------ |
| const name[] | NPC 的名称（最多 24 个字符）。 |

## 返回值

返回创建的 NPC 的 ID，失败时返回 `INVALID_NPC_ID`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("MyBot");
    if (npcid != INVALID_NPC_ID)
    {
        printf("NPC 已创建，ID: %d", npcid);
        NPC_Spawn(npcid);
    }
    return 1;
}
```

## 注意事项

:::warning

- NPC 不会自动生成。使用 [NPC_Spawn](NPC_Spawn) 来生成它。
- NPC 名称必须遵循与玩家名称相同的规则。
- 最大名称长度为 24 个字符。

:::

## 相关函数

- [NPC_Destroy](NPC_Destroy): 销毁 NPC。
- [NPC_Spawn](NPC_Spawn): 生成 NPC。
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效。

## 相关回调

- [OnNPCCreate](../callbacks/OnNPCCreate): 当 NPC 被创建时调用。
