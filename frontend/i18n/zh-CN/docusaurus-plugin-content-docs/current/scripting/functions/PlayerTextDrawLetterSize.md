---
title: PlayerTextDrawLetterSize
sidebar_label: PlayerTextDrawLetterSize
description: 设置玩家文本绘图的字符尺寸
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置玩家文本绘图中字符的宽度和高度

| 参数              | 说明                              |
| ----------------- | --------------------------------- |
| playerid          | 要设置字符尺寸的玩家 ID           |
| PlayerText:textid | 要修改字符尺寸的玩家文本绘图的 ID |
| Float:width       | 字符宽度（浮点型）                |
| Float:height      | 字符高度（浮点型）                |

## 返回值

此函数不返回特定值。

## 示例

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawLetterSize(playerid, welcomeText[playerid], 3.2, 5.1);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## 注意事项

:::tip

当仅需要调整文本绘图方框大小时，可将 Y 值乘以 0.135 来获得类似 TextDrawTextSize 的效果

:::

:::tip

字体显示效果最佳比例为 X:Y = 1:4（例如 X 设为 0.5 时，Y 应设为 2）

:::

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): 获取字符尺寸
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体类型
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置文本区域尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用比例缩放
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 修改文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
