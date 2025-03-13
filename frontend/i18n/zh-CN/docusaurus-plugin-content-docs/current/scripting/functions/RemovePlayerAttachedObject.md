---
title: RemovePlayerAttachedObject
sidebar_label: RemovePlayerAttachedObject
description: 移除玩家身上的附加物体。
tags: ["玩家", "物体", "附加物"]
---

## 描述

移除玩家身上已附加的物体。

| 参数名   | 说明                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| playerid | 需要移除附加物体的玩家 ID                                                        |
| index    | 要移除物体的索引值（通过[SetPlayerAttachedObject](SetPlayerAttachedObject)设置） |

## 返回值

**1** 表示成功，**0** 表示失败。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/remove", true)) // 移除所有附加物体
    {
        for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
        {
            if (IsPlayerAttachedObjectSlotUsed(playerid, i))
            {
                RemovePlayerAttachedObject(playerid, i);
            }
        }
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SetPlayerAttachedObject](SetPlayerAttachedObject): 给玩家附加物体
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): 检查玩家是否在指定索引使用了附加物体
