---
title: IsValidPlayerGangZone
sidebar_label: IsValidPlayerGangZone
description: 检测玩家帮派区域有效性
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的帮派区域是否有效。

| 参数名   | 说明                    |
| -------- | ----------------------- |
| playerid | 绑定的玩家 ID           |
| zoneid   | 要检测的玩家帮派区域 ID |

## 返回值

**true** - 帮派区域有效

**false** - 帮派区域无效

## 示例代码

```c
// 用于存储帮派区域ID的变量
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // 创建玩家专属帮派区域
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
}

public OnPlayerSpawn(playerid)
{
    // 检测帮派区域有效性
    if(IsValidPlayerGangZone(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneDestroy(playerid, gGangZoneID[playerid]);
        gGangZoneID[playerid] = INVALID_GANG_ZONE;
    }
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁玩家帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示玩家帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏玩家帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动帮派区域闪烁
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止帮派区域闪烁
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取闪烁颜色值
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取基础颜色值
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域中
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见性
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出检测回调
