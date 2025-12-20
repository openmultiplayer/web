---
title: PlayerTextDrawAlignment
sidebar_label: PlayerTextDrawAlignment
description: 设置玩家文本绘图的文本对齐方式
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置玩家文本绘图的文本对齐方式

| 参数                      | 说明                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| playerid                  | 目标玩家 ID                                                                                                 |
| PlayerText:textid         | 要设置的玩家文本绘图 ID                                                                                     |
| TEXT_DRAW_ALIGN:alignment | 对齐方式：`左对齐(TEXT_DRAW_ALIGN_LEFT)` / `居中(TEXT_DRAW_ALIGN_CENTER)` / `右对齐(TEXT_DRAW_ALIGN_RIGHT)` |

## 返回值

此函数不返回特定值。

## 示例

```c
/*
    可用对齐方式常量：
    TEXT_DRAW_ALIGN_LEFT   左对齐
    TEXT_DRAW_ALIGN_CENTER 居中对齐
    TEXT_DRAW_ALIGN_RIGHT  右对齐
*/

new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "示例文本绘图");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], TEXT_DRAW_ALIGN_CENTER); // 将文本绘图居中对齐
    return 1;
}
```

## 注意事项

:::warning

使用居中对齐(TEXT_DRAW_ALIGN_CENTER)时，必须交换[PlayerTextDrawTextSize](PlayerTextDrawTextSize)的 x 和 y 参数值

:::

:::tip

若文本绘图已对玩家显示，需重新调用[PlayerTextDrawShow](PlayerTextDrawShow)才能使更改生效

:::

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): 获取文本对齐方式
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置文本框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置文本字体
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置文本框尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 设置文本描边
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置文本阴影
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用等比缩放
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 启用文本框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 更新文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
