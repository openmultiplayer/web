---
title: IsValidNickName
sidebar_label: IsValidNickName
description: 检测昵称是否符合规范。
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定昵称字符串是否符合服务器命名规则。

| 参数         | 说明               |
| ------------ | ------------------ |
| const name[] | 待检测的昵称字符串 |

## 返回值

当昵称符合规范时返回 **true**，否则返回 **false**

## 示例代码

```c
if (IsValidNickName("Barnaby_Keene"))
{
    // 执行相关操作
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "你的昵称不符合规范。");
}
```

## 注意事项

:::tip

默认允许的昵称字符包含：数字(0-9)、大小写字母(a-z/A-Z)以及符号 `[]()$@.\_=`

:::

## 相关函数

- [AllowNickNameCharacter](AllowNickNameCharacter): 允许特定字符用于昵称
- [SetPlayerName](SetPlayerName): 设置玩家昵称
- [GetPlayerName](GetPlayerName): 获取玩家当前昵称
