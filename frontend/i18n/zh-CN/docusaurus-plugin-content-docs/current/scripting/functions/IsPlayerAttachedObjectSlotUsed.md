---
title: IsPlayerAttachedObjectSlotUsed
sidebar_label: IsPlayerAttachedObjectSlotUsed
description: 检查玩家是否在指定索引槽位附加了物体
tags: ["玩家", "物体", "附加"]
---

## 描述

检测玩家是否在指定索引槽位附加了物体。

| 参数     | 说明               |
| -------- | ------------------ |
| playerid | 需要检查的玩家 ID  |
| index    | 需要检查的槽位索引 |

## 返回值

**true** - 该槽位已被附加物体占用  
**false** - 该槽位未被使用

## 示例

```c
stock CountAttachedObjects(playerid)
{
    new count;
    for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
    {
        if (IsPlayerAttachedObjectSlotUsed(playerid, i))
        {
            count++;
        }
    }
    return count;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/count", true))
    {
        new string[32];
        format(string, sizeof(string), "附加物体数量: %d", CountAttachedObjects(playerid));
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SetPlayerAttachedObject](SetPlayerAttachedObject): 为玩家附加物体
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): 移除玩家附加物体
- [GetPlayerAttachedObject](GetPlayerAttachedObject): 获取玩家附加物体数据
