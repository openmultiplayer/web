---
title: ShowMenuForPlayer
sidebar_label: ShowMenuForPlayer
description: 向指定玩家显示已创建的菜单界面。
tags: ["玩家", "菜单"]
---

## 描述

向指定玩家显示已创建的菜单界面。

| 参数        | 说明                                    |
| ----------- | --------------------------------------- |
| Menu:menuid | 要显示的菜单 ID（通过 CreateMenu 创建） |
| playerid    | 目标玩家 ID                             |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（菜单或玩家不存在）

## 示例

```c
new Menu:exampleMenu;

public OnGameModeInit()
{
    // 创建双列菜单
    exampleMenu = CreateMenu("示例菜单", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/menu", true) == 0)
    {
        // 显示菜单给玩家
        ShowMenuForPlayer(exampleMenu, playerid);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

传入无效的菜单 ID 将导致服务端与客户端同时崩溃！

:::

## 相关函数

- [CreateMenu](CreateMenu): 创建新菜单
- [AddMenuItem](AddMenuItem): 添加菜单选项
- [SetMenuColumnHeader](SetMenuColumnHeader): 设置菜单列标题
- [DestroyMenu](DestroyMenu): 销毁菜单

## 相关回调

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 玩家选择菜单项时触发
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): 玩家退出菜单时触发
