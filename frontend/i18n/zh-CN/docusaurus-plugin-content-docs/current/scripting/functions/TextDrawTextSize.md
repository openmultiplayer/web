---
title: TextDrawTextSize
sidebar_label: TextDrawTextSize
description: 调整文本绘图的尺寸（当启用TextDrawUseBox时控制文本框大小，或配合TextDrawSetSelectable定义可点击区域）
tags: ["文本绘图"]
---

## 描述

调整文本绘图的尺寸（当启用[TextDrawUseBox](TextDrawUseBox)时控制文本框大小，或配合[TextDrawSetSelectable](TextDrawSetSelectable)定义可点击区域）。

| 参数         | 说明                                                                  |
| ------------ | --------------------------------------------------------------------- |
| Text:textid  | 需要调整尺寸的文本绘图 ID                                             |
| Float:width  | X 轴尺寸（左右方向），使用与 TextDrawCreate 相同的 640x480 网格坐标系 |
| Float:height | Y 轴尺寸（上下方向），使用与 TextDrawCreate 相同的 640x480 网格坐标系 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);
    return 1;
}
```

## 注意事项

:::tip

- 不同 TextDrawAlignment 值对坐标系的解释差异：
  1（左对齐）：参数值为文本框右侧边界的绝对坐标
  2（居中对齐）：需交换 X/Y 参数顺序，X 值代表整体宽度
  3（右对齐）：参数值为文本框左侧边界的绝对坐标

- 使用 4 号字体（精灵）和 5 号字体（模型预览）时，此函数参数将转换为宽高偏移量

- 文本框坐标系原点（TextDrawCreate 设定坐标）向左偏移 5.0 单位，向上偏移 10.0 单位

- 此函数定义的可点击区域在启用 TextDrawSetSelectable 时生效，无论是否显示文本框

:::

:::tip

- 修改已显示的文本绘图尺寸时无需重建，通过[TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll)刷新即可立即生效

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawGetTextSize](TextDrawGetTextSize): 获取文本绘图尺寸数据
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置文本背景色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置文本字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置文本字符尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文本描边效果
- [TextDrawSetShadow](TextDrawSetShadow): 设置文本阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例缩放
- [TextDrawUseBox](TextDrawUseBox): 切换文本框显示状态
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示文本
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本
