---
title: OnPlayerExitedMenu
description: 当玩家退出菜单时调用。
tags: ["player", "menu"]
---

## 描述

当玩家退出菜单时调用。

| 参数名   | 描述                |
| -------- | ------------------- |
| playerid | 退出菜单的玩家的 ID |

## 返回值

它在游戏模式中总是先被调用。

## 案例

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // 当玩家退出菜单时解除冻结
    return 1;
}
```

## 相关函数

- [CreateMenu](../functions/CreateMenu): 创建一个目录。
- [DestroyMenu](../functions/DestroyMenu): 销毁一个目录。
