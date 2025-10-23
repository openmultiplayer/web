---
title: PlayerTextDrawBackgroundColour
sidebar_label: PlayerTextDrawBackgroundColour
description: 调整玩家文本绘图的背景颜色。
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

调整玩家文本绘图的背景颜色。

| 名称              | 描述                                             |
| ----------------- | ------------------------------------------------ |
| playerid          | 要设置背景颜色的玩家文本绘图所属玩家的 ID        |
| PlayerText:textid | 要设置背景颜色的玩家文本绘图的 ID                |
| backgroundColour  | 需要设置的背景颜色数值（使用十六进制 ARGB 格式） |

## 返回值

该函数不返回任何特定值。

## 示例

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "欢迎来到我的OPEN.MP服务器");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBackgroundColour(playerid, gMyTextdraw[playerid], 0xFFFFFFFF); // 将gMyTextdraw的背景颜色设置为白色
    return 1;
}
```

## 注意事项

:::tip

- 当使用[PlayerTextDrawSetOutline](PlayerTextDrawSetOutline)且尺寸参数>0 时，轮廓颜色将与 PlayerTextDrawBackgroundColour 设置的颜色一致
- 修改颜色值会影响 PlayerTextDrawColour 函数设置的颜色效果

:::

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawColour](PlayerTextDrawColour): 设置玩家文本绘图的文字颜色
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): 设置玩家文本绘图方框颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置玩家文本绘图对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体样式
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置玩家文本绘图的字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置玩家文本绘图方框尺寸（或 PlayerTextDrawSetSelectable 的可点击区域）
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换玩家文本绘图的轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置玩家文本绘图的阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 按比例缩放玩家文本绘图的文字间距
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换玩家文本绘图的方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 设置玩家文本绘图的显示内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示玩家文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏玩家文本绘图
