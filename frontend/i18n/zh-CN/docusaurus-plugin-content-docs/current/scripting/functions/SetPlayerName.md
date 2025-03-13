---
title: SetPlayerName
sidebar_label: SetPlayerName
description: 设置玩家的昵称
tags: ["玩家"]
---

## 描述

设置玩家的昵称

| 参数名       | 说明                                                                                    |
| ------------ | --------------------------------------------------------------------------------------- |
| playerid     | 要设置昵称的玩家 ID                                                                     |
| const name[] | 新昵称。长度需为 1-24 个字符，且仅包含有效字符（0-9, a-z, A-Z, [], (), \$ @ . \_ 和 =） |

## 返回值

**1** - 昵称修改成功

**0** - 玩家未连接或昵称已被占用

**-1** - 昵称不合法（长度不足 3 字符、过长或包含无效字符）

## 示例

```c
// 简单示例：无条件将玩家昵称设置为'Superman'（无错误检查）
if (strcmp(cmdtext, "/superman", true) == 0)
{
    SetPlayerName(playerid, "Superman");
    return 1;
}

// 完整示例：带错误处理的昵称修改
if (strcmp(cmdtext, "/superman", true) == 0)
{
    switch (SetPlayerName(playerid, "Superman"))
    {
        case -1:
        {
            SendClientMessage(playerid, 0xFF0000FF, "昵称包含非法字符或长度不符合要求");
        }
        case 0:
        {
            SendClientMessage(playerid, 0xFF0000FF, "昵称修改失败，'Superman'已被其他玩家使用");
        }
        case 1:
        {
            SendClientMessage(playerid, 0x00FF00FF, "您已成功更名为'Superman'");
        }
    }
    return 1;
}
```

## 注意事项

:::warning

- 仅修改大小写的昵称变更无效（如"John"改为"JOHN"）
- 在 [OnPlayerConnect](../callbacks/OnPlayerConnect) 回调中使用时，新昵称对连接中的玩家不可见
- 传递空字符串作为新昵称会导致服务器崩溃（open.mp 版本已修复）
- 通过本函数最多可设置 24 字符昵称，但玩家通过 SA-MP 服务器浏览器加入时昵称不得超过 20 字符

:::

## 相关函数

- [GetPlayerName](GetPlayerName): 获取玩家当前昵称
- [IsValidNickName](IsValidNickName): 验证昵称合法性
- [AllowNickNameCharacter](AllowNickNameCharacter): 允许特殊字符用于玩家昵称
