---
title: PlayerTextDrawFont
sidebar_label: PlayerTextDrawFont
description: 设置玩家文本绘图的字体样式。
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置玩家文本绘图的字体样式。

| 参数                | 说明                                                                          |
| ------------------- | ----------------------------------------------------------------------------- |
| playerid            | 要设置字体的玩家文本绘图所属玩家的 ID                                         |
| PlayerText:textid   | 要设置字体的玩家文本绘图的 ID                                                 |
| TEXT_DRAW_FONT:font | 支持以下四种基础字体样式。当设置值>3 时将无法显示，若值>16 会导致客户端崩溃。 |

可用基础样式：
![可用基础样式](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

扩展字体资源：
![扩展字体资源](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## 返回值

此函数不返回特定值。

## 示例

```c
/*
    TEXT_DRAW_FONT_0   // 经典数字样式
    TEXT_DRAW_FONT_1   // 细线字体
    TEXT_DRAW_FONT_2   // 常规字体
    TEXT_DRAW_FONT_3   // 大写粗体
    TEXT_DRAW_FONT_SPRITE_DRAW    // 精灵图模式
    TEXT_DRAW_FONT_MODEL_PREVIEW  // 3D模型预览模式
*/

new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建基础文本绘图
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "欢迎来到我的服务器！");

    // 将玩家文本绘图的字体设置为样式2（常规字体）
    PlayerTextDrawFont(playerid, welcomeText[playerid], TEXT_DRAW_FONT_2);

    // 向玩家显示文本绘图
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    return 1;
}
```

## 注意事项

:::tip

- 使用 TEXT_DRAW_FONT_SPRITE_DRAW 时可加载.txd 精灵图集
- 设置字体值为 4-16 区间时需配合 PlayerTextDrawSetPreviewModel 使用模型预览功能
- 字体值超过 16 会导致客户端立即崩溃

:::

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): 获取玩家文本绘图的字体样式
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置玩家文本绘图的文字颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置玩家文本绘图方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置玩家文本绘图的背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置玩家文本绘图对齐方式
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置玩家文本绘图的字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置玩家文本绘图方框尺寸（或 PlayerTextDrawSetSelectable 的可点击区域）
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换玩家文本绘图的轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置玩家文本绘图的阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 按比例缩放玩家文本绘图的文字间距
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换玩家文本绘图的方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 设置玩家文本绘图的显示内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示玩家文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏玩家文本绘图
