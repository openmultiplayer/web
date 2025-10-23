---
title: IsNickNameCharacterAllowed
sidebar_label: IsNickNameCharacterAllowed
description: 检查字符是否允许在昵称中使用
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查指定字符是否允许用于玩家昵称。

| 参数      | 说明           |
| --------- | -------------- |
| character | 需要检查的字符 |

## 返回值

**true** - 该字符允许使用  
**false** - 该字符禁止使用

## 示例

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // 允许字符*

    if (IsNickNameCharacterAllowed('*'))
    {
        print("字符*已被允许用于昵称。");
    }
    return 1;
}
```

## 相关函数

- [AllowNickNameCharacter](AllowNickNameCharacter): 设置昵称字符使用权限
