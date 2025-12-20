---
title: PlayerTextDrawUseBox
sidebar_label: PlayerTextDrawUseBox
description: 切换玩家文本绘图的方框显示
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

切换玩家文本绘图的方框显示状态

| 参数              | 说明                                |
| ----------------- | ----------------------------------- |
| playerid          | 要操作的玩家 ID                     |
| PlayerText:textid | 要操作的玩家文本绘图的 ID           |
| bool:boxEnabled   | **true**启用方框，**false**禁用方框 |

## 返回值

此函数不返回特定值。

## 示例

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Example text!~N~_");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x00000066); // 设置半透明黑色方框
    return 1;
}
```

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): 检查方框状态
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体类型
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置方框/点击区域尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用比例缩放
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 修改文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
