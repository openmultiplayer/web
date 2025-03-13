---
title: format
sidebar_label: format
description: 格式化字符串以嵌入变量及其他字符串。
tags: ["字符串处理"]
---

<LowercaseNoteZH_CN />

## 描述

该函数用于格式化字符串，支持将变量和其他字符串嵌入目标字符串。

| 参数名            | 描述                               |
| ----------------- | ---------------------------------- |
| output[]          | 存储格式化结果的字符串缓冲区       |
| len               | 输出缓冲区的最大容量（包含终止符） |
| const format[]    | 格式化字符串模板                   |
| \{Float, \_\}:... | 不定数量参数（支持任意标签类型）   |

## 返回值

此函数不返回特定值。

## 格式说明符

| 格式符 | 说明                                 |
| ------ | ------------------------------------ |
| %i     | 无符号整数                           |
| %d     | 有符号整数                           |
| %s     | 字符串                               |
| %f     | 浮点数                               |
| %c     | ASCII 字符                           |
| %x     | 十六进制数                           |
| %b     | 二进制数                             |
| %%     | 百分号转义                           |
| %q     | SQLite 文本转义（0.3.7 R2 版本新增） |

参数顺序需与占位符顺序严格对应，例如 `"年龄：%i 岁"` 中的 `%i` 将被整数变量替换。

可选字段控制：

- 在 `%` 和格式符之间添加数字指定字段宽度（如 `%10d`）
- 对浮点数使用 `%.2f` 形式控制小数位数（保留两位小数）

## 示例

```c
new result[128];
new number = 42;
format(result, sizeof(result), "数值为 %i。", number); // 数值为 42

new string[] = "简单消息";
format(result, sizeof(result), "这是%s，包含数值%i。", string, number);
// 这是简单消息，包含数值42
```

<br />

```c
new string[64];
format(string, sizeof(string), "您的得分：%d", GetPlayerScore(playerid));
SendClientMessage(playerid, 0xFF8000FF, string); // 发送橙色消息给玩家
```

<br />

```c
new string[32];
new hour, minute, second;
gettime(hour, minute, second);
format(string, sizeof(string), "当前时间：%02d:%02d:%02d", hour, minute, second);
// 输出示例：当前时间：09:45:02
```

<br />

```c
new string[32];
format(string, sizeof(string), "43%s的衬衫是黑色。", "%%");
SendClientMessage(playerid, 0xFF8000FF, string); // 显示"43%的衬衫是黑色"
```

## 注意事项

:::warning

- 本函数不支持压缩字符串(packed strings)

:::

## 相关函数

- [print](print): 在服务器日志和控制台中输出基础信息
- [printf](printf): 在服务器日志和控制台中输出格式化信息