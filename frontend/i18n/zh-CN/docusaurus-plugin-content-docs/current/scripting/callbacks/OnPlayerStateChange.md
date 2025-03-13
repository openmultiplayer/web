---
title: OnPlayerStateChange
sidebar_label: OnPlayerStateChange
description: 当玩家状态发生改变时触发该回调函数。
tags: ["玩家"]
---

## 描述

当玩家状态发生改变时触发该回调函数。例如：当玩家从车辆驾驶员状态切换为步行状态时。

| 参数名                | 说明                 |
| --------------------- | -------------------- |
| playerid              | 状态发生改变的玩家ID |
| PLAYER_STATE:newstate | 玩家当前的新状态     |
| PLAYER_STATE:oldstate | 玩家之前的旧状态     |

完整状态列表请参考[玩家状态](../resources/playerstates)。

## 返回值

该回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // 玩家以驾驶员身份进入车辆
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // 为车辆添加氮气加速系统
    }
    return 1;
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

## 相关回调

以下回调可能与该回调存在关联：

- [OnPlayerInteriorChange](OnPlayerInteriorChange): 当玩家切换室内场景时触发

## 相关函数

以下函数可能与该回调存在关联：

- [GetPlayerState](../functions/GetPlayerState): 获取玩家当前状态
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): 获取玩家特殊动作
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): 设置玩家特殊动作

## 相关资源

- [玩家状态](../resources/playerstates)
