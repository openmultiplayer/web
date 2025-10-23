---
title: TextDrawBoxColour
sidebar_label: TextDrawBoxColour
description: 调整文本绘图的方框颜色（仅在 TextDrawUseBox 的 'enableBox' 参数为 'true' 时生效）。
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

调整文本绘图的方框颜色（仅在 TextDrawUseBox 的 'enableBox' 参数设置为 'true' 时生效）。

| 参数名      | 说明                                                                                                                   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| Text:textid | 需要修改的文本绘图                                                                                                     |
| boxColour   | 方框颜色。透明度由颜色的 alpha 通道决定（例如 0x000000FF 表示完全不透明的黑色方框，0x000000AA 表示半透明的黑色方框）。 |

## 返回值

该函数没有特定返回值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColour(gMyTextdraw, 0xFFFFFFFF);
    return 1;
}
```

## 注意事项

:::tip

若要修改已显示的文本绘图的方框颜色，无需重新创建。只需在修改后使用[TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll)即可立即生效。

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 新建一个文本绘图
- [TextDrawDestroy](TextDrawDestroy): 删除指定文本绘图
- [TextDrawColour](TextDrawColour): 调整文本绘图的文字颜色
- [TextDrawBackgroundColour](TextDrawBackgroundColour): 修改文本绘图的背景颜色
- [TextDrawAlignment](TextDrawAlignment): 调整文本绘图的文字对齐方式
- [TextDrawFont](TextDrawFont): 更改文本绘图的字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 调节文本绘图的字符大小
- [TextDrawTextSize](TextDrawTextSize): 定义文本绘图方框的尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 控制文本轮廓的显示状态
- [TextDrawSetShadow](TextDrawSetShadow): 切换文本阴影的启用状态
- [TextDrawSetProportional](TextDrawSetProportional): 启用文本字符的比例间距
- [TextDrawUseBox](TextDrawUseBox): 控制文本绘图方框的显示开关
- [TextDrawSetString](TextDrawSetString): 修改现有文本绘图的文字内容
- [玩家文本绘图显示](TextDrawShowForPlayer): 向指定玩家显示文本绘图
- [TextDrawShowForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向所有在线玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏指定文本绘图
