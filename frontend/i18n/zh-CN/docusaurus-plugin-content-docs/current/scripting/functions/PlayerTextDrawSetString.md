---
title: PlayerTextDrawSetString
sidebar_label: PlayerTextDrawSetString
description: 修改玩家文本绘图的文本内容
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

修改玩家文本绘图的文本内容

| 参数              | 说明                           |
| ----------------- | ------------------------------ |
| playerid          | 要设置文本的玩家 ID            |
| PlayerText:textid | 要修改的玩家文本绘图的 ID      |
| const format[]    | 新的格式化字符串               |
| OPEN_MP_TAGS:...  | 可变参数（支持任意标签的参数） |

## 返回值

此函数不返回特定值。

## 示例

```c
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];
new pVehicleHealthTimer[MAX_PLAYERS];

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // 以驾驶员身份进入车辆
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // 设置每秒更新文本绘图的计时器
        pVehicleHealthTimer[playerid] = SetTimerEx("UpdateVehicleHealthTextDraw", 1000, true, "i", playerid);
    }
    if (oldstate == PLAYER_STATE_DRIVER) // 退出驾驶状态
    {
        KillTimer(pVehicleHealthTimer[playerid]);
        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);
    }
    return 1;
}

forward UpdateVehicleHealthTextDraw(playerid);
public UpdateVehicleHealthTextDraw(playerid)
{
    new
        string[32],
        vehicleid = GetPlayerVehicleID(playerid),
        Float:health;

    GetVehicleHealth(vehicleid, health);

    format(string, sizeof(string), "车辆耐久: %.0f", health);
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], string); // <<< 更新显示车辆耐久度

    // 专业建议：open.mp中可直接使用以下简化写法
    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], "车辆耐久: %.0f", health);
    return 1;
}

/*
注意：本示例仅用于演示目的，实际游戏中使用需进行额外验证和错误处理
*/
```

## 注意事项

:::tip

修改文本内容后无需重新调用 PlayerTextDrawShow 即可生效

:::

:::warning

文本字符串长度存在限制，详见[系统限制](../resources/limits)

:::

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawGetString](PlayerTextDrawGetString): 获取文本内容
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体类型
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置文本区域尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用比例缩放
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换方框显示
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
