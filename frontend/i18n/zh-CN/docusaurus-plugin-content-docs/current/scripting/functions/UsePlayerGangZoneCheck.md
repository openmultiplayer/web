---
title: UsePlayerGangZoneCheck
sidebar_label: UsePlayerGangZoneCheck
description: 启用玩家进出区域时的回调触发
tags: ["玩家", "帮派区域", "玩家帮派区域"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

启用当玩家进入/离开指定区域时的回调触发。

| 参数        | 说明                              |
| ----------- | --------------------------------- |
| playerid    | 需要启用区域检测的玩家 ID         |
| zoneid      | 需要启用检测的玩家专属帮派区域 ID |
| bool:enable | 是否启用区域检测（true/false）    |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定帮派区域不存在）

## 示例

```c
// 该变量用于存储玩家专属帮派区域ID
// 以便在脚本中全局使用
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // 创建玩家专属帮派区域
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // 启用玩家进出该区域时的回调
    UsePlayerGangZoneCheck(playerid, gGangZoneID[playerid], true);
}

public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "你正在进入玩家专属帮派区域 %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "你正在离开玩家专属帮派区域 %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## 相关回调

以下回调函数与此函数相关：

- [OnPlayerEnterPlayerGangZone](../callbacks/OnPlayerEnterPlayerGangZone): 玩家进入专属帮派区域时触发
- [OnPlayerLeavePlayerGangZone](../callbacks/OnPlayerLeavePlayerGangZone): 玩家离开专属帮派区域时触发

## 相关函数

以下函数与此函数相关：

- [CreatePlayerGangZone](CreatePlayerGangZone): 创建玩家专属帮派区域
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): 销毁玩家专属帮派区域
- [PlayerGangZoneShow](PlayerGangZoneShow): 显示玩家专属帮派区域
- [PlayerGangZoneHide](PlayerGangZoneHide): 隐藏玩家专属帮派区域
- [PlayerGangZoneFlash](PlayerGangZoneFlash): 启动帮派区域闪烁效果
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): 停止闪烁效果
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): 获取闪烁颜色值
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): 获取基础颜色值
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): 获取区域坐标范围
- [IsValidPlayerGangZone](IsValidPlayerGangZone): 验证帮派区域有效性
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): 检测玩家是否在区域内
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): 检测区域可见状态
