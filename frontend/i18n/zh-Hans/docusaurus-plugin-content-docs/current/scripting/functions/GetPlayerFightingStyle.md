---
title: GetPlayerFightingStyle
sidebar_label: GetPlayerFightingStyle
description: 获取玩家当前使用的战斗风格
tags: ["玩家"]
---

## 描述

获取玩家当前使用的近战战斗风格类型

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取战斗风格的玩家 ID |

## 返回值

玩家当前使用的[战斗风格](../resources/fightingstyles)ID

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fightstyle", true))
    {
        new string[64];
        new FIGHT_STYLE:style = GetPlayerFightingStyle(playerid);
        new styleName[11];

        switch (style)
        {
            case FIGHT_STYLE_NORMAL:
            {
                styleName = "普通";
            }
            case FIGHT_STYLE_BOXING:
            {
                styleName = "拳击";
            }
            case FIGHT_STYLE_KUNGFU:
            {
                styleName = "功夫";
            }
            case FIGHT_STYLE_KNEEHEAD:
            {
                styleName = "膝撞";
            }
            case FIGHT_STYLE_GRABKICK:
            {
                styleName = "擒踢";
            }
            case FIGHT_STYLE_ELBOW:
            {
                styleName = "肘击";
            }
        }

        format(string, sizeof(string), "你当前使用的是%s战斗风格！", styleName);
        SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SetPlayerFightingStyle](SetPlayerFightingStyle): 设置玩家的战斗风格

## 相关资源

- [战斗风格列表](../resources/fightingstyles)
