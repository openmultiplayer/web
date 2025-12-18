---
title: TextDrawSetOutline
sidebar_label: TextDrawSetOutline
description: 设置文本绘图文本的描边粗细。
tags: ["文本绘图"]
---

## 描述

设置文本绘图文本的描边粗细。可通过 TextDrawBackgroundColor 修改描边颜色。

| 参数        | 说明                               |
| ----------- | ---------------------------------- |
| Text:textid | 需要设置描边的文本绘图 ID          |
| outlineSize | 描边粗细（整数形式），0 表示无描边 |

## 返回值

此函数不返回特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawSetOutline(gMyTextdraw, 1);
    return 1;
}
```

## 注意事项

:::tip

若需修改已显示文本绘图的描边，无需重新创建。修改后使用[TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll)即可立即生效。

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawGetOutline](TextDrawGetOutline): 获取文本绘图的描边粗细
- [TextDrawColor](TextDrawColor): 设置文本字体颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetShadow](TextDrawSetShadow): 启用文本阴影
- [TextDrawSetProportional](TextDrawSetProportional): 启用等比例间距
- [TextDrawUseBox](TextDrawUseBox): 启用文本框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 对玩家显示文本
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本
