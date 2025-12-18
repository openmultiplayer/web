---
title: TextDrawCreate
sidebar_label: TextDrawCreate
description: 创建文本绘图
tags: ["文本绘图"]
---

## 描述

创建文本绘图。文本绘图（正如其名）是绘制在玩家屏幕上的文字元素（主要形式），也可包含方框、精灵和模型预览（皮肤/车辆/武器/物体等）。详见[文本绘图专题页面](../resources/textdrawsprites)获取详细信息。

| 参数             | 说明                                          |
| ---------------- | --------------------------------------------- |
| Float:x          | 文本绘图的横向坐标（基于 640x480 基准坐标系） |
| Float:y          | 文本绘图的纵向坐标（基于 640x480 基准坐标系） |
| const format[]   | 文本绘图的显示内容（支持格式化字符串）        |
| OPEN_MP_TAGS:... | 不定数量的参数（支持任意标签类型）            |

## 返回值

创建的文本绘图 ID（从**0**开始递增）

## 示例

```c
// 此变量用于存储文本绘图ID
// 以便在脚本中全局使用
new Text:gMyTextdraw;

public OnGameModeInit()
{
    // 创建文本绘图
    // 注意：此示例创建无格式化的基础文本
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "欢迎来到我的OPEN.MP服务器");
    return 1;
}

public OnPlayerConnect(playerid)
{
    // 当玩家连接时显示文本绘图
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## 注意事项

:::tip

- `x, y`坐标基于 640x480 虚拟画布定位（与屏幕分辨率无关），表示文本区域左上角坐标
- 若使用[TextDrawAlignment](TextDrawAlignment)设置右对齐（`TEXT_DRAW_ALIGN_RIGHT`），`x, y`将作为文本区域的右上角坐标
- 此函数仅创建文本绘图，需调用[TextDrawShowForPlayer](TextDrawShowForPlayer)或[TextDrawShowForAll](TextDrawShowForAll)方可显示
- 建议使用整数值而非小数坐标，以确保不同分辨率下的显示兼容性

:::

:::warning

键盘按键映射代码（如~k~~VEHICLE_ENTER_EXIT~）在第 255 个字符后失效

:::

## 相关函数

- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置方框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置对齐方式
- [TextDrawFont](TextDrawFont): 设置字体类型
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
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): 检测可见性
- [IsValidTextDraw](IsValidTextDraw): 验证有效性
- [TextDrawGetAlignment](TextDrawGetAlignment): 获取对齐方式
- [TextDrawGetBackgroundColour](TextDrawGetBackgroundColour): 获取背景色
- [TextDrawGetBoxColour](TextDrawGetBoxColour): 获取方框颜色
- [TextDrawGetColour](TextDrawGetColour): 获取文本颜色
- [TextDrawGetFont](TextDrawGetFont): 获取字体类型
- [TextDrawGetLetterSize](TextDrawGetLetterSize): 获取字符尺寸
- [TextDrawGetOutline](TextDrawGetOutline): 获取描边厚度
- [TextDrawGetPos](TextDrawGetPos): 获取坐标位置
- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): 获取 3D 预览模型
- [TextDrawGetPreviewRot](TextDrawGetPreviewRot): 获取 3D 模型旋转参数
- [TextDrawGetPreviewVehCol](TextDrawGetPreviewVehCol): 获取车辆预览颜色
- [TextDrawGetPreviewVehicleColours](TextDrawGetPreviewVehicleColours): 获取车辆配色方案
- [TextDrawGetShadow](TextDrawGetShadow): 获取阴影尺寸
- [TextDrawGetString](TextDrawGetString): 获取文本内容
- [TextDrawGetTextSize](TextDrawGetTextSize): 获取文本区域尺寸
- [TextDrawIsBox](TextDrawIsBox): 检测方框状态
- [TextDrawIsProportional](TextDrawIsProportional): 检测比例间距
- [TextDrawIsSelectable](TextDrawIsSelectable): 检测可选状态
- [TextDrawSetPos](TextDrawSetPos): 设置坐标位置
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): 玩家专属文本更新

## 相关资源

- [文本绘图精灵使用指南](../resources/textdrawsprites)
