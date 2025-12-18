---
title: PlayerGangZoneShow
sidebar_label: PlayerGangZoneShow
description: 以指定颜色显示玩家专属帮派区域
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

用于向指定玩家显示特定颜色的帮派区域

| 参数     | 说明                   |
| -------- | ---------------------- |
| playerid | 目标玩家 ID            |
| zoneid   | 要显示的帮派区域 ID    |
| colour   | 显示使用的 RGBA 颜色值 |

## 返回值

**1:** 操作成功执行（包括区域已显示的情况）

**0:** 执行失败（指定帮派区域不存在）

## 示例

```c
// 全局变量存储帮派区域ID
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // 创建玩家专属帮派区域（坐标：2236.1475,2424.7266 至 2319.1636,2502.4348）
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // 以纯白不透明颜色显示区域（RGBA: 0xFFFFFFFF）
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFFFFFFFF);
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动闪烁效果
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止闪烁
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取基础颜色值
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取闪烁颜色值
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围（最小 X/Y，最大 X/Y）
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见性
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测区域闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出回调检测
