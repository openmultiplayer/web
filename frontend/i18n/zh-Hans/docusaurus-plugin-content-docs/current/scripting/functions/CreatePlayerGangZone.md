---
title: CreatePlayerGangZone
sidebar_label: CreatePlayerGangZone
description: 创建玩家专属帮派区域
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

创建玩家独立可见的帮派区域，用于突破全局帮派区域的数量限制。

| 参数名     | 说明                                |
| ---------- | ----------------------------------- |
| playerid   | 目标玩家 ID                         |
| Float:minX | 区域西侧边界 X 坐标（最小水平坐标） |
| Float:minY | 区域南侧边界 Y 坐标（最小垂直坐标） |
| Float:maxX | 区域东侧边界 X 坐标（最大水平坐标） |
| Float:maxY | 区域北侧边界 Y 坐标（最大垂直坐标） |

## 返回值

成功返回帮派区域 ID，创建失败返回-1。

## 应用示例

```c
// 使用变量存储玩家帮派区域ID
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建矩形帮派区域（坐标范围2236.1475,2424.7266至2319.1636,2502.4348）
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
}
```

```
                          MaxY
                          ↓
             -------------* < MaxX
             |            |
             |  帮派区域   |
             |   中心点    |
             |            |
      MinX > *-------------
             ↑
             MinY
```

## 注意事项

:::warning

- 单个玩家最大支持 1024 个帮派区域
- 参数顺序错误会导致区域显示异常

:::

:::tip

本函数仅创建区域，需调用[PlayerGangZoneShow](PlayerGangZoneShow)显示可视化效果

:::

## 关联函数

- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁玩家帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示指定颜色的帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动区域闪烁效果
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止区域闪烁
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取区域颜色值
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取闪烁颜色
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见性
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出回调检测

## 辅助工具

- [Prineside 帮派区域编辑器](https://dev.prineside.com/en/gtasa_gangzone_editor/)
