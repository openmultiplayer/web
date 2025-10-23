---
title: TextDrawSetProportional
sidebar_label: TextDrawSetProportional
description: 该函数用于将文本间距按比例缩放。
tags: ["文本绘图"]
---

## 描述

该函数用于将文本间距按比例缩放。当使用 TextDrawLetterSize 时特别有用，可确保字符间距均匀分布。

| 参数名            | 说明                                |
| ----------------- | ----------------------------------- |
| Text:textid       | 需要设置比例缩放的文本绘图 ID       |
| bool:proportional | 设为'true'启用比例缩放，'false'禁用 |

## 返回值

本函数不返回特定值。

## 示例代码

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawSetProportional(gMyTextdraw, true);
    return 1;
}
```

## 注意事项

:::tip

- 比例缩放默认启用（设为**true**），若不需要禁用可跳过本函数
- 修改已显示的文本绘图比例时无需重建，只需通过[TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll)刷新即可生效

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawIsProportional](TextDrawIsProportional): 检测文本绘图是否启用比例缩放
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置文本背景色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置文本字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置文本字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文本描边效果
- [TextDrawSetShadow](TextDrawSetShadow): 设置文本阴影效果
- [TextDrawUseBox](TextDrawUseBox): 切换文本框显示状态
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为指定玩家显示文本
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本
