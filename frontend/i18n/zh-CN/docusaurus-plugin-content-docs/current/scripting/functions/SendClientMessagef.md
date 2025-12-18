---
title: SendClientMessagef
sidebar_label: SendClientMessagef
description: 向指定玩家发送格式化的彩色聊天信息
tags: []
---

<VersionWarnZH_CN version='open.mp beta build 6' />

:::warning

此函数已被弃用

[SendClientMessage](SendClientMessage) 函数现已内置格式化功能

:::

## 描述

向指定玩家发送格式化的彩色聊天信息。整行文字将使用设定颜色显示，除非使用颜色嵌入功能。

| 参数              | 说明                                |
| ----------------- | ----------------------------------- |
| playerid          | 接收信息的玩家 ID                   |
| color             | 信息颜色（0xRRGGBBAA 十六进制格式） |
| const message[]   | 显示文本（最大 144 字符）           |
| \{Float, \_\}:... | 不定数量的任意标签类型参数          |

## 返回值

1: 函数执行成功（超过 144 字符的字符串会返回成功但信息不会被发送）

0: 函数执行失败（玩家未连接）

## 格式说明符

| 说明符 | 含义                                  |
| ------ | ------------------------------------- |
| %i     | 无符号整数                            |
| %d     | 有符号整数                            |
| %s     | 字符串                                |
| %f     | 浮点数                                |
| %c     | ASCII 字符                            |
| %x     | 十六进制数                            |
| %b     | 二进制数                              |
| %%     | 百分号字面量                          |
| %q     | 转义 SQLite 文本（0.3.7 R2 版本新增） |

## 示例代码

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    new number = 5;
    SendClientMessagef(playerid, -1, "上方变量的值为 %i", number);
    return 1;
}
```

## 注意事项

:::tip

- 可使用颜色嵌入实现多色文本效果
- 使用-1 作为颜色值时文本将显示为白色（十六进制表示为 0xFFFFFFFF）

:::

:::warning

- 超过 144 字符的信息不会被发送，可使用截断或分多行显示解决
- SA-MP 官方客户端最大支持 144 字节（包括格式说明符转换后的字符）

:::
