---
title: TextDrawLetterSize
sidebar_label: TextDrawLetterSize
description: 设置文本字符的宽高比例
tags: ["文本绘图"]
---

## 描述

设置文本绘图中字符的宽度和高度比例

| 参数         | 说明                  |
| ------------ | --------------------- |
| Text:textid  | 需要修改的文本绘图 ID |
| Float:width  | 单个字符的宽度比例    |
| Float:height | 单个字符的高度比例    |

## 返回值

此函数不返回特定值

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"示例文本绘图");
    TextDrawLetterSize(gMyTextdraw, 3.2, 5.1);
    return 1;
}
```

## 注意事项

:::tip

当需要仅调整文本绘图的方框尺寸时，可将 height 参数乘以 0.135 来获得类似 TextDrawTextSize 的尺寸效果。

技巧：对于纯方框型文本绘图，建议使用**LD_SPAC:white**精灵配合 TextDrawTextSize 函数，可获得更精准的尺寸控制。

:::

:::tip

- 修改已显示的文本绘图字符尺寸后，无需重新创建，调用[TextDrawShowForPlayer](TextDrawShowForPlayer)或[TextDrawShowForAll](TextDrawShowForAll)即可刷新显示
- 最佳视觉效果通常需要保持宽度与高度的 1:4 比例（例如宽度 0.5 对应高度 2.0）

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawGetLetterSize](TextDrawGetLetterSize): 获取文本字符尺寸
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置方框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置对齐方式
- [TextDrawFont](TextDrawFont): 设置字体类型
- [TextDrawTextSize](TextDrawTextSize): 设置文本区域尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文字描边
- [TextDrawSetShadow](TextDrawSetShadow): 设置阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 切换方框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 为玩家隐藏
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏
