---
title: GetPlayerDialog
sidebar_label: GetPlayerDialog
description: 获取当前显示给玩家的对话框ID
tags: ["玩家", "对话框"]
---

:::warning

本函数已弃用，请使用[GetPlayerDialogID](GetPlayerDialogID)

:::

## 描述

获取当前显示给玩家的对话框 ID

| 参数名   | 说明        |
| -------- | ----------- |
| playerid | 目标玩家 ID |

## 返回值

当前显示的对话框 ID。若玩家未连接或未打开对话框则返回**INVALID_DIALOG_ID**

## 示例代码

```c
new dialogID = GetPlayerDialog(playerid);
if (dialogID != INVALID_DIALOG_ID)
{
    // 玩家当前存在激活的对话框
}
```

## 相关函数

- [GetPlayerDialogData](GetPlayerDialogData): 获取当前对话框关联数据
- [ShowPlayerDialog](ShowPlayerDialog): 向玩家显示同步对话框（同一时间只能存在一个）

## 相关回调

- [OnDialogResponse](../callbacks/OnDialogResponse): 当玩家响应对话框时触发
