---
title: IsPlayerGangZoneFlashing
sidebar_label: IsPlayerGangZoneFlashing
description: 检查玩家的私人帮派区域是否处于闪烁状态
tags: ["玩家", "帮派区域", "私人帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的私人帮派区域是否正在闪烁。

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 绑定帮派区域的玩家 ID     |
| zoneid   | 需要检查的私人帮派区域 ID |

## 返回值

**true** - 帮派区域正在闪烁  
**false** - 未闪烁或区域不存在

## 示例

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 为玩家创建私人帮派区域（坐标范围）
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // 向玩家显示红色帮派区域
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    // 设置帮派区域闪烁（青色闪烁效果）
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0x45D1ABFF);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerGangZoneFlashing(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneStopFlash(playerid, gGangZoneID[playerid]);
    }
    return 1;
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁玩家帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示玩家帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏玩家帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动帮派区域闪烁效果
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止闪烁效果
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取闪烁颜色值
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取基础颜色值
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围（最小/最大 XY 坐标）
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证帮派区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在专属区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检查帮派区域可见性状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出回调检测
