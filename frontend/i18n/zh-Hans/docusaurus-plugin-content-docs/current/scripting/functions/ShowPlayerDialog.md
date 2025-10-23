---
title: ShowPlayerDialog
sidebar_label: ShowPlayerDialog
description: 向玩家显示同步对话框（同一时间只能显示一个）。
tags: ["玩家", "对话框"]
---

## 描述

向玩家显示同步对话框（同一时间只能显示一个）。

| 参数名称           | 说明                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------- |
| playerid           | 要显示对话框的玩家 ID                                                                       |
| dialogid           | 分配给该对话框的标识 ID（最大值 32767），用于后续处理响应。使用负值将关闭所有已打开的对话框 |
| DIALOG_STYLE:style | 对话框的[显示样式](../resources/dialogstyles)                                               |
| const title[]      | 对话框顶部标题。标题长度超过 64 字符会被截断                                                |
| const body[]       | 对话框主体文本。使用\n 换行，\t 进行制表                                                    |
| const button1[]    | 左侧按钮文本                                                                                |
| const button2[]    | 右侧按钮文本。留空（""）可隐藏此按钮                                                        |
| OPEN_MP_TAGS:...   | 任意数量的可变参数                                                                          |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例代码

```c
// 使用枚举定义对话框ID：
enum
{
    DIALOG_NULL,
    DIALOG_LOGIN,
    DIALOG_WELCOME,
    DIALOG_WEAPONS
}

// 或使用宏定义：
#define DIALOG_NULL 0
#define DIALOG_LOGIN 1
#define DIALOG_WELCOME 2
#define DIALOG_WEAPONS 3

// 推荐使用枚举，可以避免ID管理问题。但枚举会占用内存存储，而宏定义在预处理器阶段处理。

// DIALOG_STYLE_MSGBOX 样式示例：
ShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "通知", "你已成功连接服务器", "关闭", "");

// DIALOG_STYLE_INPUT 样式示例：
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "登录", "请在下方输入密码：", "登录", "取消");

// DIALOG_STYLE_LIST 样式示例：
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "武器库", "AK47\nM4\n狙击步枪", "选项1", "选项2");

// DIALOG_STYLE_PASSWORD 样式示例：
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "登录", "请在下方输入密码：", "登录", "取消");

// DIALOG_STYLE_TABLIST 样式示例：
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "购买武器", "沙鹰\t$5000\t100\n短管霰弹枪\t$5000\t100\n手枪\t$1000\t50", "选择", "取消");

// DIALOG_STYLE_TABLIST_HEADERS 样式示例：
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "购买武器", "武器\t价格\t弹药\n沙鹰\t$5000\t100\n短管霰弹枪\t$5000\t100\n手枪\t$1000\t50", "选择", "取消");
```

## 注意事项

:::tip

建议使用枚举（如上例）或宏定义来管理对话框 ID，避免直接使用数字造成混乱

:::

:::tip

- 可使用颜色嵌入代码实现多色文本
- 使用**-1**作为 dialogid 可关闭客户端当前显示的所有对话框，也可使用[HidePlayerDialog](HidePlayerDialog)函数

:::

## 相关函数

- [GetPlayerDialogID](GetPlayerDialogID): 获取玩家当前显示的对话框 ID
- [GetPlayerDialogData](GetPlayerDialogData): 获取玩家当前对话框数据
- [HidePlayerDialog](HidePlayerDialog): 隐藏玩家当前显示的对话框
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示文本绘图

## 相关回调

- [OnDialogResponse](../callbacks/OnDialogResponse): 当玩家响应对话框时触发

## 相关资源

- [对话框样式](../resources/dialogstyles)
- [转义代码](../resources/escapecodes)
