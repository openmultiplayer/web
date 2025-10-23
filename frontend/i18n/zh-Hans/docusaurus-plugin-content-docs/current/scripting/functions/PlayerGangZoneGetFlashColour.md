---
title: PlayerGangZoneGetFlashColour
sidebar_label: PlayerGangZoneGetFlashColour
description: 获取玩家专属帮派区域的闪烁颜色值
tags: ["玩家", "帮派区域", "玩家专属帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

用于获取玩家专属帮派区域的当前闪烁颜色

| 参数     | 说明                |
| -------- | ------------------- |
| playerid | 目标玩家 ID         |
| zoneid   | 要查询的帮派区域 ID |

## 返回值

帮派区域的闪烁 RGBA 颜色值

**0:** 执行失败（区域未显示或不存在）

## 示例

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建玩家专属帮派区域
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // 以红色半透明显示区域（RGBA: 0xFF0000FF）
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);

    // 启动蓝绿色闪烁效果（RGBA: 0x45D1ABFF）
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0x45D1ABFF);

    // 获取当前闪烁颜色
    new flashColour = PlayerGangZoneGetFlashColour(playerid, gGangZoneID[playerid]);
    // flashColour = 0x45D1ABFF
    return 1;
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示指定颜色的帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动闪烁效果
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止闪烁
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取基础颜色值
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围（最小 X/Y，最大 X/Y）
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见性
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测区域闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出回调检测
