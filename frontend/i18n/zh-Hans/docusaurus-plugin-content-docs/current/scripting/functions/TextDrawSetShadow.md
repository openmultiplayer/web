---
title: TextDrawSetShadow
sidebar_label: TextDrawSetShadow
description: 设置文本绘图中文本阴影的大小。
tags: ["文本绘图"]
---

## 描述

设置文本绘图中文本阴影的大小。

| 名称        | 描述                                                    |
| ----------- | ------------------------------------------------------- |
| Text:textid | 要设置阴影大小的文本绘图 ID                             |
| shadowSize  | 阴影的大小。通常 1 表示标准阴影尺寸，0 表示完全禁用阴影 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。文本绘图不存在。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawSetShadow(gMyTextdraw, 1);
    return 1;
}
```

## 注意事项

:::tip

如果阴影尺寸设置过大超出区域范围，可能会被文本框区域截断。

:::

:::tip

若要修改已显示文本绘图的阴影参数，无需重新创建。只需在修改后使用[TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll)即可实时更新显示效果。

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawGetShadow](TextDrawGetShadow): 获取文本绘图的阴影尺寸
- [TextDrawColor](TextDrawColor): 设置文本绘图的字体颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本绘图的边框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置文本绘图的背景色
- [TextDrawAlignment](TextDrawAlignment): 设置文本绘图的对齐方式
- [TextDrawFont](TextDrawFont): 设置文本绘图的字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置文本绘图的字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本绘图的文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 控制文本绘图的轮廓显示
- [TextDrawSetProportional](TextDrawSetProportional): 启用文本绘图的等比间距
- [TextDrawUseBox](TextDrawUseBox): 切换文本绘图的边框显示状态
- [TextDrawSetString](TextDrawSetString): 更新文本绘图的显示内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为指定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向全体玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 隐藏全体玩家的文本绘图
