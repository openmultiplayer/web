---
title: TextDrawAlignment
sidebar_label: TextDrawAlignment
description: 设置文本绘图中文字的对齐方式。
tags: ["文本绘图"]
---

## 描述

设置文本绘图中文字内容的对齐方式。

| 参数名称                  | 说明                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Text:textid               | 需要设置对齐方式的文本绘图 ID                                                                                   |
| TEXT_DRAW_ALIGN:alignment | 对齐模式：`TEXT_DRAW_ALIGN_LEFT`（左对齐）/ `TEXT_DRAW_ALIGN_CENTER`（居中）/ `TEXT_DRAW_ALIGN_RIGHT`（右对齐） |

## 返回值

本函数不返回特定值。

## 示例代码

```c
/*
    TEXT_DRAW_ALIGN_LEFT
    TEXT_DRAW_ALIGN_CENTER
    TEXT_DRAW_ALIGN_RIGHT
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "这是一个示例文本绘图");
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER); // 设置文本内容居中对齐
    return 1;
}
```

## 注意事项

:::warning

使用`TEXT_DRAW_ALIGN_CENTER`居中对齐时：

- 必须交换[TextDrawTextSize](TextDrawTextSize)参数的 x/y 坐标值
- 文本绘图的坐标定位点将变为中心点而非左上角

:::

:::tip

若文本绘图已处于显示状态，修改对齐方式后需重新调用显示函数([TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer))才能生效

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawGetAlignment](TextDrawGetAlignment): 获取当前对齐方式
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置边框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景色
- [TextDrawFont](TextDrawFont): 设置字体类型
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置绘制区域尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文字描边
- [TextDrawSetShadow](TextDrawSetShadow): 设置阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 启用边框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏
