---
title: RemovePlayerFromVehicle
sidebar_label: RemovePlayerFromVehicle
description: 将玩家移出所在车辆。
tags: ["玩家", "车辆"]
---

## 描述

将玩家强制移出当前所在的车辆。

| 参数       | 说明                                  |
| ---------- | ------------------------------------- |
| playerid   | 需要移出车辆的玩家 ID                 |
| bool:force | 是否强制立即移出车辆（默认：`false`） |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。通常表示玩家未连接。

## 示例

```c
// 示例 - 玩家必须拥有10分才能驾驶车辆
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PLAYER_STATE_DRIVER = 2
    {
        RemovePlayerFromVehicle(playerid);
    }
    return 1;
}
```

## 注意要点

:::tip

- 退出车辆的动画效果不会同步给其他玩家
- 此函数在[OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle)回调中无效，因为此时玩家尚未进入车辆。请改用[OnPlayerStateChange](../callbacks/OnPlayerStateChange)回调（参见上方示例）
- 如果玩家正在遥控车（RC）中，此函数不会生效（需使用`.force = true`参数或[ClearAnimations](ClearAnimations)函数）

:::

## 相关函数

- [PutPlayerInVehicle](PutPlayerInVehicle): 将玩家放入指定车辆
