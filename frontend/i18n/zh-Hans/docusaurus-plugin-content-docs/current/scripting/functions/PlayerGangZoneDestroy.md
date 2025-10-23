---
title: PlayerGangZoneDestroy
sidebar_label: PlayerGangZoneDestroy
description: 销毁玩家专属帮派区域
tags: ["玩家", "帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

用于销毁指定玩家的专属帮派区域

| 参数     | 说明                |
| -------- | ------------------- |
| playerid | 目标玩家的 ID       |
| zoneid   | 要销毁的帮派区域 ID |

## 返回值

**1:** 操作成功执行

**0:** 执行失败（指定帮派区域不存在）

## 示例

```c
// 全局变量存储帮派区域ID
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // 为玩家创建专属帮派区域
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
}

public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // 检测帮派区域有效性后执行销毁
    if (IsValidPlayerGangZone(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneDestroy(playerid, gGangZoneID[playerid]);
        gGangZoneID[playerid] = INVALID_GANG_ZONE; // 重置区域标识
    }
    return 1;
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示指定颜色的帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动区域闪烁效果
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止区域闪烁
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取区域基础颜色
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取区域闪烁颜色
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围（最小 X/Y，最大 X/Y）
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见性
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测区域闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出回调检测
