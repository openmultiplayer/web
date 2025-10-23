---
title: TextDrawColor
sidebar_label: TextDrawColor
description: 设置文本绘图的文字颜色
tags: ["文本绘图"]
---

## 描述

设置文本绘图的文字颜色

| 参数名      | 说明                            |
| ----------- | ------------------------------- |
| Text:textid | 需要修改颜色的文本绘图 ID       |
| textColour  | 要设置的文字颜色值（RGBA 格式） |

## 返回值

该函数不返回任何特定值

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "示例文字");
    TextDrawColor(gMyTextdraw, 0x000000FF);
    return 1;
}
```

## 注意事项

:::tip

若文本绘图已显示，必须重新显示（[TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)）才能使本函数修改生效

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本绘图方框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置文本绘图背景色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置文本绘图字体
- [TextDrawLetterSize](TextDrawLetterSize): 设置文本字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本绘图区域尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文字描边效果
- [TextDrawSetShadow](TextDrawSetShadow): 设置文本阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用文字比例间距
- [TextDrawUseBox](TextDrawUseBox): 切换文本方框显示状态
- [TextDrawSetString](TextDrawSetString): 更新文本绘图内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为指定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 为指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 为全体玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 为全体玩家隐藏文本绘图
