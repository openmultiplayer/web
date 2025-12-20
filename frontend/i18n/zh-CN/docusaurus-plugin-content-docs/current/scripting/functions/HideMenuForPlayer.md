---
title: HideMenuForPlayer
sidebar_label: HideMenuForPlayer
description: 隐藏玩家的菜单
tags: ["玩家", "菜单"]
---

## 描述

隐藏指定玩家的菜单。

| 参数        | 说明                                                                                                             |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Menu:menuid | 要隐藏的菜单 ID。由 CreateMenu 生成并传递给[OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow)回调。 |
| playerid    | 需要隐藏菜单的玩家 ID                                                                                            |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/menuhide", true) == 0)
    {
        new Menu:myMenu = GetPlayerMenu(playerid);
        HideMenuForPlayer(myMenu, playerid);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

如果传入无效的菜单 ID，会导致服务端和玩家客户端崩溃（此问题已在 open.mp 中修复）

:::

:::tip

此函数始终需要菜单 ID 参数，但在 SA:MP 中该参数未被实际使用。无论传入任何值，都会关闭玩家当前正在查看的菜单。

旧代码可能如下所示：

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(gShopMenu, playerid);
```

这种写法会始终关闭玩家当前查看的菜单，无论实际显示的是哪个菜单。现在你需要记录玩家当前查看的菜单，或直接获取：

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(GetPlayerMenu(playerid), playerid);
```

:::

## 相关函数

- [CreateMenu](CreateMenu): 创建菜单
- [AddMenuItem](AddMenuItem): 为指定菜单添加选项
- [SetMenuColumnHeader](SetMenuColumnHeader): 设置菜单列标题
- [ShowMenuForPlayer](ShowMenuForPlayer): 为玩家显示菜单
