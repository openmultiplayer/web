---
title: PlayerGangZoneFlash
sidebar_label: PlayerGangZoneFlash
description: 启动玩家专属帮派区域的闪烁效果
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

用于启动玩家专属帮派区域的闪烁效果

| 参数        | 说明                          |
| ----------- | ----------------------------- |
| playerid    | 目标玩家 ID                   |
| zoneid      | 要闪烁的帮派区域 ID           |
| flashColour | 闪烁使用的颜色值（RGBA 格式） |

## 返回值

**1:** 操作成功执行（包括区域已处于闪烁状态的情况）

**0:** 执行失败（指定帮派区域不存在）

## 示例

```c
// 全局变量存储帮派区域ID
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // 创建玩家专属帮派区域
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // 向玩家显示帮派区域
    PlayerGangZoneShow(playerid, gGangZoneID[playerid]);

    // 启动半透明青色闪烁效果（RGBA: 0xFF00FFFF）
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0xFF00FFFF);
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示指定颜色的帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏帮派区域
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止闪烁效果
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取区域基础颜色
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取闪烁颜色
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围（最小 X/Y，最大 X/Y）
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见性
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测区域闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出回调检测
