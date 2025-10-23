---
title: AllowNickNameCharacter
sidebar_label: AllowNickNameCharacter
description: 允许或禁止特定字符在玩家昵称中使用
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

控制是否允许特定字符出现在玩家昵称中。

| 参数名     | 说明                          |
| ---------- | ----------------------------- |
| character  | 需要控制的 ASCII 字符         |
| bool:allow | true-允许使用，false-禁止使用 |

## 返回值

本函数无特定返回值。

## 示例

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true);  // 允许星号字符
    AllowNickNameCharacter('[', false); // 禁止左方括号
    AllowNickNameCharacter(']', false); // 禁止右方括号

    return 1;
}
```

## 相关函数

- [IsNickNameCharacterAllowed](IsNickNameCharacterAllowed): 检测指定字符是否允许在昵称中使用
- [IsValidNickName](IsValidNickName): 验证昵称格式是否合法
- [SetPlayerName](SetPlayerName): 设置玩家昵称
- [GetPlayerName](GetPlayerName): 获取玩家昵称
