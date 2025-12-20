---
title: SetPlayerFightingStyle
sidebar_label: SetPlayerFightingStyle
description: 设置玩家的特殊战斗风格。
tags: ["玩家"]
---

## 描述

设置玩家的特殊战斗风格。需在游戏中瞄准后按下"次要攻击键"（默认 ENTER 键）触发。

| 参数              | 说明                                            |
| ----------------- | ----------------------------------------------- |
| playerid          | 要设置的玩家 ID                                 |
| FIGHT_STYLE:style | 要设置的[战斗风格](../resources/fightingstyles) |

## 返回值

此函数不返回特定值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/boxing", true) == 0)
    {
        SetPlayerFightingStyle(playerid, FIGHT_STYLE_BOXING);
        SendClientMessage(playerid, 0xFFFFFFAA, "你的战斗风格已切换为拳击模式！");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

此设置仅影响特殊攻击（瞄准+次要攻击键），普通拳击攻击不受影响

:::

## 相关函数

- [GetPlayerFightingStyle](GetPlayerFightingStyle): 获取玩家的战斗风格

## 相关资源

- [战斗风格列表](../resources/fightingstyles)
