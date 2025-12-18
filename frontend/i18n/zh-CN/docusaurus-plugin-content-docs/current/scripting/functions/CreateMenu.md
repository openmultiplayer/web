---
title: CreateMenu
sidebar_label: CreateMenu
description: 创建可交互的菜单界面。
tags: ["菜单"]
---

## 描述

创建基础菜单容器，用于构建玩家交互界面。

| 参数               | 说明                                          |
| ------------------ | --------------------------------------------- |
| const title[]      | 菜单标题（最大 31 字符，超长自动截断）        |
| columns            | 列数（仅支持 0 和 1 两列）                    |
| Float:x            | X 轴位置（基于 640x460 画布坐标系，0=最左侧） |
| Float:y            | Y 轴位置（基于 640x460 画布坐标系，0=最顶部） |
| Float:column1width | 首列宽度                                      |
| Float:column2width | 次列宽度                                      |
| OPEN_MP_TAGS:...   | 扩展参数（支持任意类型参数）                  |

## 返回值

成功返回菜单 ID，创建失败返回-1。

## 应用示例

```c
new Menu:exampleMenu;

public OnGameModeInit()
{
    // 创建双列菜单（位置200,100 列宽150）
    exampleMenu = CreateMenu("示例菜单", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## 注意事项

:::tip

- 此函数仅创建菜单容器，需调用[ShowMenuForPlayer](ShowMenuForPlayer)显示
- 实际仅支持 0 和 1 两列配置
- 标题超过 32 字符将自动截断为 30 字符

:::

:::warning

- 单个菜单最多容纳 12 个选项项
- 服务器最多同时存在 128 个菜单

:::

## 关联函数

- [AddMenuItem](AddMenuItem): 添加菜单选项项
- [SetMenuColumnHeader](SetMenuColumnHeader): 设置列标题
- [DestroyMenu](DestroyMenu): 销毁菜单实例
- [ShowMenuForPlayer](ShowMenuForPlayer): 向玩家展示菜单
- [HideMenuForPlayer](HideMenuForPlayer): 隐藏玩家可见菜单

## 关联回调

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 玩家选择菜单项时触发
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): 玩家退出菜单时触发
