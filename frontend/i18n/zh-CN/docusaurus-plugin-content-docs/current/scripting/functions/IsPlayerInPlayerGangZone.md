---
title: IsPlayerInPlayerGangZone
sidebar_label: IsPlayerInPlayerGangZone
description: 验证玩家是否处于其绑定的玩家帮派区域
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家是否处于其专属的玩家帮派区域范围内

| 参数名   | 说明                    |
| -------- | ----------------------- |
| playerid | 绑定该帮派区域的玩家 ID |
| zoneid   | 玩家帮派区域标识符      |

## 返回值

**true** - 玩家处于专属帮派区域

**false** - 玩家未处于专属帮派区域

## 示例代码

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建玩家专属帮派区域
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/zone", true))
    {
        if (IsPlayerInPlayerGangZone(playerid, gGangZoneID[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "你正处于专属帮派领地");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "你未处于专属帮派领地");
        }
        return 1;
    }
    return 0;
}
```

## 相关函数

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 移除玩家专属帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示玩家专属帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏玩家专属帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 激活帮派区域闪烁效果
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止帮派区域闪烁
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取帮派区域闪烁颜色
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取帮派区域基础颜色
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取帮派区域坐标范围（minX, minY, maxX, maxY）
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证玩家帮派区域有效性
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测帮派区域可见状态
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): 检测帮派区域闪烁状态
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): 启用区域进出状态监测
