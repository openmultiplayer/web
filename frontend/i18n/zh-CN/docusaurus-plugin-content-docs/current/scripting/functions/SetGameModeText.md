---
title: SetGameModeText
sidebar_label: SetGameModeText
description: 设置游戏模式名称，该名称会显示在服务器浏览器中。
tags: []
---

## 描述

设置游戏模式名称，该名称会显示在服务器浏览器中。

| 参数名           | 描述                               |
| ---------------- | ---------------------------------- |
| format[]         | 要显示的游戏模式名称               |
| OPEN_MP_TAGS:... | 可变参数（支持多种标签类型的参数） |

## 返回值

该函数不返回任何特定值

## 示例代码

```c
public OnGameModeInit()
{
    SetGameModeText("Team Deathmatch");
    return 1;
}
```

<br />

```c
#define GAME_MODE_VERSION "1.5.0"

public OnGameModeInit()
{
    SetGameModeText("Roleplay v%s", GAME_MODE_VERSION);
    return 1;
}
```

## 相关函数

- [SetGameModeText](SetGameModeText): 设置服务器浏览器显示的游戏模式名称
- [GetGameModeText](GetGameModeText): 获取当前游戏模式名称
