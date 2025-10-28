---
title: SetPlayerPos
sidebar_label: SetPlayerPos
description: 设置玩家的位置。
tags: ["玩家"]
---

## 描述

设置玩家的位置。

| 参数     | 说明                  |
| -------- | --------------------- |
| playerid | 要设置位置的玩家 ID。 |
| Float:x  | 玩家位置的 X 坐标。   |
| Float:y  | 玩家位置的 Y 坐标。   |
| Float:z  | 玩家位置的 Z 坐标。   |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。指定的玩家不存在。

## 示例

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/middle", true))
    {
        // 当玩家输入/middle时传送至圣安地列斯中心
        SetPlayerPos(playerid, 0.0, 0.0, 3.0);
        return 1;
    }
    return 0;
}
```

## 注意

:::tip

对车辆中的玩家使用此函数会立即将其移出车辆。可用于快速弹出玩家。

:::

:::tip

设置玩家位置至室内时，必须同时设置其室内环境。

:::

## 相关函数

- [SetPlayerPosFindZ](SetPlayerPosFindZ): 设置玩家位置并寻找地面高度
- [GetPlayerPos](GetPlayerPos): 获取玩家位置
- [SetVehiclePos](SetVehiclePos): 设置车辆位置
- [GetVehiclePos](GetVehiclePos): 获取车辆位置
