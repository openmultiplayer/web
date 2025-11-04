---
title: NPC_IsMoving
sidebar_label: NPC_IsMoving
description: 检查 NPC 当前是否正在移动。
tags: ["npc", "移动"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 当前是否正在移动。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在移动则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Walker");
    NPC_Spawn(npcid);
    NPC_Move(npcid, 1958.33, 1343.12, 15.36, NPC_MOVE_TYPE_WALK);

    SetTimerEx("CheckMovement", 2000, false, "i", npcid);

    return 1;
}

forward CheckMovement(npcid);
public CheckMovement(npcid)
{
    if (NPC_IsMoving(npcid))
    {
        printf("NPC %d正在移动", npcid);
    }
    else
    {
        printf("NPC %d已停止移动", npcid);
    }
}
```

## 注意事项

- 当 NPC 正在步行、跑步或驾车前往目的地时返回 true
- 使用此函数检查移动命令是否仍然有效
- 当 NPC 到达目的地或被停止时返回 false

## 相关函数

- [NPC_Move](NPC_Move): 让 NPC 移动到位置
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动
- [NPC_MoveToPlayer](NPC_MoveToPlayer): 让 NPC 跟随玩家
- [NPC_MoveByPath](NPC_MoveByPath): 让 NPC 跟随路径

## 相关回调

- [../callbacks/OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用
