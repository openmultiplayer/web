---
title: GetPlayerDialogData
sidebar_label: GetPlayerDialogData
description: 获取当前显示给玩家的对话框数据
tags: ["玩家", "对话框"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取当前显示给玩家的对话框完整配置数据

| 参数                | 说明                                         |
| ------------------- | -------------------------------------------- |
| playerid            | 需要获取数据的玩家 ID                        |
| &DIALOG_STYLE:style | 存储对话框样式的枚举变量（通过引用传递）     |
| title[]             | 存储标题文本的数组变量（通过引用传递）       |
| titleSize           | 标题数组的长度                               |
| body[]              | 存储内容文本的数组变量（通过引用传递）       |
| bodySize            | 内容数组的长度                               |
| button1[]           | 存储第一个按钮文本的数组变量（通过引用传递） |
| button1Size         | 按钮 1 数组的长度                            |
| button2[]           | 存储第二个按钮文本的数组变量（通过引用传递） |
| button2Size         | 按钮 2 数组的长度                            |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接或未打开对话框）

## 示例代码

```c
enum
{
    DIALOG_LOGIN
}

ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "登录系统", "请输入你的密码:", "登录", "取消");

new
    DIALOG_STYLE:style,
    title[32],
    body[64],
    button1[16],
    button2[16];

GetPlayerDialogData(playerid, style, title, sizeof(title), body, sizeof(body), button1, sizeof(button1), button2, sizeof(button2));
```

## 相关函数

- [ShowPlayerDialog](ShowPlayerDialog): 向玩家显示同步对话框（同一时间只能存在一个）
- [HidePlayerDialog](HidePlayerDialog): 隐藏当前显示的对话框
- [GetPlayerDialogID](GetPlayerDialogID): 获取当前对话框的 ID

## 相关回调

- [OnDialogResponse](../callbacks/OnDialogResponse): 当玩家响应对话框时触发
