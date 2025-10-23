---
title: TogglePlayerClock
sidebar_label: TogglePlayerClock
description: 切换指定玩家的游戏内时钟显示（位于右上角）。
tags: ["玩家"]
---

## 描述

切换指定玩家的游戏内时钟显示（位于右上角）。启用后，游戏时间将以每分钟对应现实一秒的速度推进。使用[SetWeather](SetWeather)/[SetPlayerWeather](SetPlayerWeather)设置天气时，天气效果将呈现渐变过渡。

| 名称        | 描述                                            |
| ----------- | ----------------------------------------------- |
| playerid    | 需要启用/禁用时钟的玩家 ID                      |
| bool:toggle | 显示时钟设为'true'，隐藏设为'false'（默认隐藏） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // 显示时钟
    return 1;
}
```

## 注意事项

:::tip

- 玩家时间不会自动同步！需使用[SetPlayerTime](SetPlayerTime)实现时间同步
- 玩家死亡时，时间将自动推进 6 小时

:::

## 相关函数

- [GetPlayerTime](GetPlayerTime): 获取玩家的当前时间
- [SetPlayerTime](SetPlayerTime): 设置玩家的个性化时间
- [SetWorldTime](SetWorldTime): 设置服务器全局时间
