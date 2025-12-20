---
title: PlayerGangZoneGetPos
sidebar_label: PlayerGangZoneGetPos
description: 获取帮派区域的坐标范围（最小X/Y，最大X/Y）
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

用于获取玩家专属帮派区域的坐标范围（西/南/东/北边界）

| 参数        | 说明                                          |
| ----------- | --------------------------------------------- |
| playerid    | 目标玩家 ID                                   |
| zoneid      | 要查询的帮派区域 ID                           |
| &Float:minX | 用于存储西侧 X 坐标的浮点变量（通过引用传递） |
| &Float:minY | 用于存储南侧 Y 坐标的浮点变量（通过引用传递） |
| &Float:maxX | 用于存储东侧 X 坐标的浮点变量（通过引用传递） |
| &Float:maxY | 用于存储北侧 Y 坐标的浮点变量（通过引用传递） |

## 返回值

此函数始终返回 **true**

## 示例

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建玩家专属帮派区域（坐标范围：2236.1475,2424.7266 至 2319.1636,2502.4348）
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    new
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;

    PlayerGangZoneGetPos(playerid, gGangZoneID[playerid], minX, minY, maxX, maxY);
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
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取闪烁颜色值
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取基础颜色值
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见性
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测区域闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出回调检测
