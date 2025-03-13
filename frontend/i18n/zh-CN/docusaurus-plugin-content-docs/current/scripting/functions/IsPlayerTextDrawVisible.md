---
title: IsPlayerTextDrawVisible
sidebar_label: IsPlayerTextDrawVisible
description: 检测玩家专属文本绘图是否对指定玩家可见。
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家的专属文本绘图是否处于显示状态。

| 参数名            | 说明              |
| ----------------- | ----------------- |
| playerid          | 要检测的玩家 ID   |
| PlayerText:textid | 玩家文本绘图的 ID |

## 返回值

**true** - 文本绘图当前可见

**false** - 文本绘图当前不可见

## 示例代码

```c
new PlayerText:welcomeText[MAX_PLAYERS]; // 创建玩家文本绘图存储数组

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "欢迎来到我的OPEN.MP服务器");
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    if (IsPlayerTextDrawVisible(playerid, welcomeText[playerid]))
    {
        // 玩家文本绘图已显示
    }
    else
    {
        // 玩家文本绘图未显示
    }
}
```

## 相关函数

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置文本框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体样式
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置绘制区域尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 启用文本描边
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置文本阴影
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用比例间距
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 启用文本框
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 更新文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): 验证文本绘图有效性
