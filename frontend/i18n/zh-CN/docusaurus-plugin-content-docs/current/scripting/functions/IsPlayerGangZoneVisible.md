---
title: IsPlayerGangZoneVisible
sidebar_label: IsPlayerGangZoneVisible
description: 检查玩家帮派区域是否可见
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查玩家帮派区域是否可见

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 绑定玩家帮派区域的玩家 ID |
| zoneid   | 玩家帮派区域 ID           |

## 返回值

**true** - 玩家帮派区域可见

**false** - 玩家帮派区域不可见

## 示例代码

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建帮派区域
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // 向玩家显示帮派区域
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/zone", true))
    {
        if (IsPlayerGangZoneVisible(playerid, gGangZoneID[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Gangzone is visible.");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Gangzone is not visible.");
        }
        return 1;
    }
    return 0;
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁玩家帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示玩家帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏玩家帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动玩家帮派区域闪烁
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止玩家帮派区域闪烁
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取玩家帮派区域闪烁颜色
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取玩家帮派区域颜色
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取帮派区域坐标（以 minX, minY, maxX, maxY 表示）
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证玩家帮派区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在帮派区域内
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测玩家帮派区域是否在闪烁
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用玩家进出区域时的回调
