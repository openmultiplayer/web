---
title: TextDrawBackgroundColor
sidebar_label: TextDrawBackgroundColor
description: 调整文本绘图区域的背景颜色（轮廓/阴影部分，非盒子背景。盒子颜色请使用[TextDrawBoxColor](TextDrawBoxColor)）
tags: ["文本绘图"]
---

## 描述

调整文本绘图区域的背景颜色（仅影响轮廓/阴影部分，盒子背景颜色需使用[TextDrawBoxColor](TextDrawBoxColor)）。

| 参数             | 说明                        |
| ---------------- | --------------------------- |
| Text:textid      | 要设置背景颜色的文本绘图 ID |
| backgroundColour | 目标背景颜色值（ARGB 格式） |

## 返回值

此函数不返回特定值。

## 示例代码

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "示例文本绘图");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBackgroundColor(gMyTextdraw, 0xFFFFFFFF); // 将文本绘图背景设为白色
    return 1;
}
```

## 注意事项

:::tip

- 当使用[TextDrawSetOutline](TextDrawSetOutline)且尺寸>0 时，轮廓颜色将与此函数设置的颜色一致
- 修改颜色值会影响[TextDrawColor](TextDrawColor)的文本颜色表现

:::

:::tip

已显示的文本绘图修改后无需重建，使用[TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll)即可刷新显示

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置盒子背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置对齐方式
- [TextDrawFont](TextDrawFont): 设置字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 启用文本轮廓
- [TextDrawSetShadow](TextDrawSetShadow): 控制阴影显示
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 切换文本框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 对玩家显示
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏
