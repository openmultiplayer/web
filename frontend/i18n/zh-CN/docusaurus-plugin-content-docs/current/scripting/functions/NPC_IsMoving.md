---
title: NPC_IsMoving
sidebar_label: NPC_IsMoving
description: 检查 NPC 当前是否正在移动。
tags: ["npc", "移动"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 当前是否正在移动。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在移动则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmoving", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isMoving = NPC_IsMoving(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在移动: %s", npcid, isMoving ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 当 NPC 正在步行、跑步或驾车前往目的地时返回 true
- 当 NPC 到达目的地或被停止时返回 false

## 相关函数

- [NPC_Move](NPC_Move): 让 NPC 移动到位置
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动
- [NPC_MoveToPlayer](NPC_MoveToPlayer): 让 NPC 跟随玩家
- [NPC_MoveByPath](NPC_MoveByPath): 让 NPC 跟随路径

## 相关回调

- [../callbacks/OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用
