---
title: SetPlayerDrunkLevel
sidebar_label: SetPlayerDrunkLevel
description: 设置玩家的醉酒等级，这将导致玩家的视角摇晃且难以控制车辆。
tags: ["玩家"]
---

## 描述

设置玩家的醉酒等级，这将导致玩家的视角摇晃且难以控制车辆。

| 参数     | 说明                    |
| -------- | ----------------------- |
| playerid | 要设置醉酒等级的玩家 ID |
| level    | 要设置的醉酒等级数值    |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/drunk", true) == 0)
    {
        SetPlayerDrunkLevel(playerid, 4000);
        SendClientMessage(playerid, 0xFFFFFFAA, "You are now drunk; don't drink and drive!");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

- 玩家醉酒等级会基于其帧率(FPS)自动递减（50FPS 的玩家每秒减少 50 等级，可用于检测玩家 FPS）
- 0.3a 版本中醉酒等级递减至 2000 停止
- 0.3b+版本中醉酒等级会递减至 0
- 等级超过 2000 时玩家呈现醉酒状态（视角摇晃、车辆操控困难）
- 最大醉酒等级为 50000，当等级超过 5000 时玩家 HUD（雷达等界面）将被隐藏

:::

## 相关函数

- [GetPlayerDrunkLevel](GetPlayerDrunkLevel): 获取玩家当前醉酒等级
