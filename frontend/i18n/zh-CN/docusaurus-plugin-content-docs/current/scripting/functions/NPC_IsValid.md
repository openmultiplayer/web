---
title: NPC_IsValid
sidebar_label: NPC_IsValid
description: 检查 NPC ID 是否有效。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

检查 NPC ID 是否有效且 NPC 存在。

| 名称  | 描述              |
| ----- | ----------------- |
| npcid | 要检查的 NPC ID。 |

## 返回值

如果 NPC 有效则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("TestBot");

    if (NPC_IsValid(npcid))
    {
        printf("NPC %d 创建成功", npcid);
        NPC_Spawn(npcid);
    }
    else
    {
        print("创建 NPC 失败");
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknpcs", true))
    {
        new
            validCount = 0,
            Float:health;

        for (new i = 0; i < MAX_NPCS; i++)
        {
            if (NPC_IsValid(i))
            {
                validCount++;
                health = NPC_GetHealth(i);

                SendClientMessage(playerid, 0xFFFFFFFF, "NPC %d: 生命值 %.1f", i, health);
            }
        }

        SendClientMessage(playerid, 0x00FF00FF, "有效 NPC 总数: %d", validCount);

        return 1;
    }
    return 0;
}

DestroyAllNPCs()
{
    new destroyedCount = 0;

    for (new i = 0; i < MAX_NPCS; i++)
    {
        if (NPC_IsValid(i))
        {
            NPC_Destroy(i);
            destroyedCount++;
        }
    }

    printf("销毁了 %d 个 NPC", destroyedCount);
    return destroyedCount;
}

forward SafeNPCOperation(npcid);
public SafeNPCOperation(npcid)
{
    if (!NPC_IsValid(npcid))
    {
        printf("错误: NPC %d 无效", npcid);
        return false;
    }

    // 可以安全地对 NPC 执行操作
    NPC_SetHealth(npcid, 100.0);
    NPC_SetPos(npcid, 0.0, 0.0, 3.0);

    return true;
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
