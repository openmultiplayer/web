---
title: ConnectNPC
sidebar_label: ConnectNPC
description: 连接一个NPC到服务器
tags: ["NPC"]
---

## 描述

在服务器中创建一个 NPC 角色

| 参数名         | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| const name[]   | NPC 连接时使用的名称，必须符合普通玩家命名规则               |
| const script[] | 位于 npcmodes 文件夹中的 NPC 脚本名称（无需添加.amx 扩展名） |

## 返回值

本函数始终返回 1

## 示例代码

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot"); // 连接名为[BOT]Pilot的NPC，使用pilot脚本
    return 1;
}
```

## 注意事项

:::tip

NPC 默认没有名牌，可通过[Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer)函数添加自定义 3D 文本标签

:::

## 相关函数

- [IsPlayerNPC](IsPlayerNPC): 检测玩家是否为 NPC 角色

## 相关回调

- [OnPlayerConnect](../callbacks/OnPlayerConnect): 当玩家连接服务器时触发
