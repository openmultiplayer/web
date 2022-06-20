---
title: OnPlayerRequestClass
description: 当玩家在类选择器中改变类时调用(当类选择器第一次出现时)。
tags: ["player"]
---

## 描述

当玩家在类选择器中改变类时调用(当类选择器第一次出现时)。

| 参数名   | 描述                                              |
| -------- | ------------------------------------------------- |
| playerid | 更换类的玩家 ID。                                 |
| classid  | 正在被查看的当前类的 ID(由 AddPlayerClass 返回)。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "此皮肤仅供管理员使用!");
        return 0;
    }
    return 1;
}
```

## 要点

:::tip

当玩家按下 F4 键时，这个回调也会被调用。

:::

## 相关函数

- [AddPlayerClass](../functions/AddPlayerClass): 添加一个玩家类。
