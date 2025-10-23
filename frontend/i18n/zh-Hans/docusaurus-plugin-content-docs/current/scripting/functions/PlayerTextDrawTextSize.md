---
title: PlayerTextDrawTextSize
sidebar_label: PlayerTextDrawTextSize
description: 设置玩家文本绘图的尺寸（方框尺寸或可点击区域）
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置玩家文本绘图的尺寸（当启用[PlayerTextDrawUseBox](PlayerTextDrawUseBox)时的方框尺寸，或用于[PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable)的可点击区域）

| 参数名            | 说明                                                                  |
| ----------------- | --------------------------------------------------------------------- |
| playerid          | 要设置尺寸的玩家 ID                                                   |
| PlayerText:textid | 要设置尺寸的玩家文本绘图的 ID                                         |
| Float:width       | X 轴尺寸（左右方向），遵循与 TextDrawCreate 相同的 640x480 网格坐标系 |
| Float:height      | Y 轴尺寸（上下方向），遵循与 TextDrawCreate 相同的 640x480 网格坐标系 |

## 返回值

该函数不返回特定值。

## 示例

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 2.0, 3.6); // 设置尺寸为2.0x3.6

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## 注意事项

:::tip

坐标含义根据对齐方式变化：

- 对齐方式 1（左对齐）: width/height 表示方框右边界绝对坐标
- 对齐方式 2（居中）: 需交换 width/height 参数，width 表示方框总宽度
- 对齐方式 3（右对齐）: width/height 表示方框左边界起始坐标

特殊字体处理：

- 使用字体类型 4（精灵图）和 5（模型预览）时，width/height 参数将转换为宽高偏移量

坐标系原点：

- 方框坐标系原点位于 TextDrawCreate 坐标点向下 10.0 单位、向右 5.0 单位的位置

交互区域定义：

- 此函数定义的区域将作为[PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable)的可点击区域

:::

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): 获取文本尺寸
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体类型
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用比例缩放
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 修改文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
