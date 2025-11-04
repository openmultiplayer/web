---
title: NPC_SetSkin
sidebar_label: NPC_SetSkin
description: 设置 NPC 的皮肤模型，改变其外观。
tags: ["npc", "皮肤", "模型"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的皮肤模型以改变其外观。

| 参数  | 说明                |
| ----- | ------------------- |
| npcid | NPC 的 ID           |
| model | 要设置的皮肤模型 ID |

## 返回值

如果皮肤设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Cop");
    NPC_Spawn(npcid);

    // 设置警察皮肤
    NPC_SetSkin(npcid, 280);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/changeskin", true))
    {
        // 将 NPC 0 更改为军人皮肤
        NPC_SetSkin(0, 287);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 皮肤已更改为军人");
        return 1;
    }

    if (!strcmp(cmdtext, "/copskin", true))
    {
        new copSkins[] = {280, 281, 282, 283, 284, 285};
        new model = copSkins[random(sizeof(copSkins))];
        NPC_SetSkin(0, model);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 现在是一名警察");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 皮肤 ID 范围从 0-311（标准 SA-MP 皮肤）
- 无效的皮肤 ID 可能会导致视觉故障
- 皮肤更改是瞬间的，没有动画
- 在玩家身上使用 GetPlayerSkin 作为参考皮肤 ID

## 相关函数

- [NPC_GetSkin](NPC_GetSkin): 获取 NPC 的当前皮肤
- [NPC_Spawn](NPC_Spawn): 使用默认皮肤生成 NPC
- [NPC_Create](NPC_Create): 创建 NPC

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用
