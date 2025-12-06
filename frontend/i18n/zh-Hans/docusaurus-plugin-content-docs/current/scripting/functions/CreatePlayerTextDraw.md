---
title: CreatePlayerTextDraw
sidebar_label: CreatePlayerTextDraw
description: 为单个玩家创建文本绘图，用于规避全局文本绘图数量限制。
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

为单个玩家创建文本绘图，用于规避全局文本绘图数量限制。

| 参数             | 说明                        |
| ---------------- | --------------------------- |
| playerid         | 要为其创建文本绘图的玩家 ID |
| Float:x          | X 轴坐标                    |
| Float:y          | Y 轴坐标                    |
| const format[]   | 文本绘图中的格式化文本内容  |
| OPEN_MP_TAGS:... | 不定数量的任意类型参数      |

## 返回值

返回创建的文本绘图的 ID

## 示例

```c
// 此变量用于存储文本绘图的ID以便脚本全局调用
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 首先创建文本绘图
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "欢迎来到我的OPEN.MP服务器");

    // 立即显示文本绘图
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## 注意事项

:::tip

- 玩家文本绘图会在玩家断开连接时自动销毁

:::

:::warning

已知限制：

- 键盘按键映射代码（如 ~k~~VEHICLE_ENTER_EXIT~）在超过 255 个字符后将失效

:::

## 相关函数

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置玩家文本绘图的文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置玩家文本绘图的方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置玩家文本绘图的背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置玩家文本绘图的对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体样式
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置玩家文本绘图的字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置玩家文本绘图的方框尺寸（或可点击区域）
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换玩家文本绘图的轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置玩家文本绘图的阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用玩家文本绘图的比例间距
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换玩家文本绘图的方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 更新玩家文本绘图的文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示玩家文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏玩家文本绘图
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): 检测玩家文本绘图是否可见
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): 验证玩家文本绘图是否有效
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): 调整玩家文本绘图的背景色彩
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): 设置玩家文本绘图的方框色彩
- [PlayerTextDrawColour](PlayerTextDrawColour): 设置玩家文本绘图的文本色彩
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): 获取玩家文本绘图的对齐方式
- [PlayerTextDrawGetBackgroundColour](PlayerTextDrawGetBackgroundColour): 获取玩家文本绘图的背景色彩
- [PlayerTextDrawGetBoxColour](PlayerTextDrawGetBoxColour): 获取玩家文本绘图的方框色彩
- [PlayerTextDrawGetColour](PlayerTextDrawGetColour): 获取玩家文本绘图的文本色彩
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): 获取玩家文本绘图的字体样式
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): 获取玩家文本绘图的字符尺寸
- [PlayerTextDrawGetOutline](PlayerTextDrawGetOutline): 获取玩家文本绘图的轮廓尺寸
- [PlayerTextDrawGetPos](PlayerTextDrawGetPos): 获取玩家文本绘图的坐标位置
- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): 获取 3D 预览玩家文本绘图的模型 ID
- [PlayerTextDrawGetPreviewRot](PlayerTextDrawGetPreviewRot): 获取 3D 模型预览玩家文本绘图的旋转角度
- [PlayerTextDrawGetPreviewVehicleColours](PlayerTextDrawGetPreviewVehicleColours): 获取 3D 预览玩家文本绘图的车辆颜色
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): 获取玩家文本绘图的阴影尺寸
- [PlayerTextDrawGetString](PlayerTextDrawGetString): 获取玩家文本绘图的文本内容
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): 获取玩家文本绘图的文本尺寸
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): 检测玩家文本绘图是否包含方框
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): 检测玩家文本绘图是否启用比例间距
- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): 检测玩家文本绘图是否可交互
- [PlayerTextDrawSetPos](PlayerTextDrawSetPos): 设置玩家文本绘图的位置坐标
- [PlayerTextDrawSetPreviewVehicleColours](PlayerTextDrawSetPreviewVehicleColours): 设置玩家文本绘图车辆模型预览的颜色

## 相关资源

- [文本绘图精灵列表](../resources/textdrawsprites)
