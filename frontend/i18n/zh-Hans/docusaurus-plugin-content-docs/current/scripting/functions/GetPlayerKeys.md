---
title: GetPlayerKeys
sidebar_label: GetPlayerKeys
description: 检测玩家当前按下的按键状态
tags: ["玩家"]
---

## 描述

检测玩家当前操作的按键状态（行走/驾驶控制）

| 参数       | 说明                                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| playerid   | 需要检测的玩家 ID                                                                                     |
| &KEY:keys  | 存储按键位掩码的变量（通过引用传递），用于检测特定功能键状态，详见[按键位掩码说明](../resources/keys) |
| &updown    | 存储上下方向键状态（KEY_UP/KEY_DOWN）                                                                 |
| &leftright | 存储左右方向键状态（KEY_LEFT/KEY_RIGHT）                                                              |

## 返回值

按键状态数据将存储在指定的变量中

## 示例代码

```c
public OnPlayerUpdate(playerid)
{
    new
        KEY:keys, updown, leftright;

    GetPlayerKeys(playerid, keys, updown, leftright);

    if (updown == KEY_UP)
    {
        SendClientMessage(playerid, -1, "上方向键按下");
    }
    else if (updown == KEY_DOWN)
    {
        SendClientMessage(playerid, -1, "下方向键按下");
    }

    if (leftright == KEY_LEFT)
    {
        SendClientMessage(playerid, -1, "左方向键按下");
    }
    else if (leftright == KEY_RIGHT)
    {
        SendClientMessage(playerid, -1, "右方向键按下");
    }
    return 1;
}
```

## 注意事项

:::warning

1. 仅能检测功能映射，而非物理按键。例如无法直接检测空格键，但可检测 SPRINT 功能（默认映射为空格）
2. 自 0.3.7 版本起，车辆中的 A/D 键无法检测，但可通过 keys 参数检测 W/S 键

:::

## 相关资源

- [按键位掩码对照表](../resources/keys)
