---
title: TextDrawFont
sidebar_label: TextDrawFont
description: 更改文本字体
tags: ["文本绘图"]
---

## 描述

更改文本绘图的字体样式

| 参数名              | 说明                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text:textid         | 需要修改的文本绘图 ID                                                                                                                                                                             |
| TEXT_DRAW_FONT:font | SA-MP 提供四种字体样式选择机制：1. ​**字体值 4** 表示使用 txd 精灵图字体 2. ​**字体值 5** 用于 3D 模型预览显示功能 3. ​**字体值 >5** 时文本内容将不可见 4. ​**字体值 >16** 会导致客户端程序崩溃 |

可用样式预览：
![可用样式](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

字体效果展示：
![字体效果](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## 返回值

该函数不返回任何特定值

## 示例

```c
/*
    TEXT_DRAW_FONT_0
    TEXT_DRAW_FONT_1
    TEXT_DRAW_FONT_2
    TEXT_DRAW_FONT_3
    TEXT_DRAW_FONT_SPRITE_DRAW
    TEXT_DRAW_FONT_MODEL_PREVIEW
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "示例文本绘图");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_2);
    return 1;
}
```

## 注意事项

:::tip

修改已显示的文本绘图字体后，无需重新创建，只需调用[TextDrawShowForPlayer](TextDrawShowForPlayer)或[TextDrawShowForAll](TextDrawShowForAll)即可刷新显示效果

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawGetFont](TextDrawGetFont): 获取文本字体
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置方框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置对齐方式
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
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
