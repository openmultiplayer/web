---
title: OnPlayerSelectedMenuRow
sidebar_label: OnPlayerSelectedMenuRow
description: 当玩家从菜单中选择项目时触发该回调函数（通过ShowMenuForPlayer显示菜单）。
tags: ["玩家", "菜单"]
---

## 描述

当玩家从菜单（通过[ShowMenuForPlayer](../functions/ShowMenuForPlayer)显示）中选择项目时触发该回调函数。

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 选择菜单项的玩家ID        |
| row      | 被选中的行号（首行ID为0） |

## 返回值

该回调始终在游戏模式中优先触发

## 示例

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    // 创建菜单并添加选项
    MyMenu = CreateMenu("示例菜单", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "选项1");
    AddMenuItem(MyMenu, 0, "选项2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch (row)
        {
            case 0: // 第一行被选中
            {
                print("选项1 被选中");
                SendClientMessage(playerid, 0xFFFFFFFF, "你选择了选项1");
            }
            case 1: // 第二行被选中
            {
                print("选项2 被选中");
                SendClientMessage(playerid, 0xFFFFFFFF, "你选择了选项2");
            }
        }
    }
    return 1;
}
```

## 注意事项

:::tip

回调函数不会直接传递菜单ID，需使用[GetPlayerMenu](../functions/GetPlayerMenu)获取当前菜单

:::

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerExitedMenu](OnPlayerExitedMenu): 当玩家退出菜单时触发
- [OnDialogResponse](OnDialogResponse): 当玩家响应对话框时触发

## 相关函数

以下函数可能与本回调函数相关：

- [CreateMenu](../functions/CreateMenu): 创建菜单
- [DestroyMenu](../functions/DestroyMenu): 销毁菜单
- [AddMenuItem](../functions/AddMenuItem): 添加菜单项
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): 向玩家显示菜单
- [HideMenuForPlayer](../functions/HideMenuForPlayer): 隐藏玩家的菜单
- [GetPlayerMenu](../functions/GetPlayerMenu): 获取玩家当前查看的菜单
