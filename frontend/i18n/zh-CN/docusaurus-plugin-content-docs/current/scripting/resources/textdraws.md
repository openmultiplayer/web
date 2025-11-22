---
title: 文本绘图
sidebar_label: 文本绘图
description: 文本绘图是在玩家屏幕上绘制的文字元素，可长期显示动态内容
---

## 什么是文本绘图？

文本绘图（Textdraw）是在玩家屏幕上显示的文字元素。与[客户端消息](../functions/SendClientMessage)或[游戏文本](../functions/GameTextForPlayer)不同，文本绘图可以无限期显示。既支持简单静态文本（如网站地址），也可创建复杂的动态元素（如进度条）。

推荐使用文本绘图编辑器工具简化设计流程。

---

## 全局文本绘图

全局文本绘图可被创建并展示给所有玩家，但存在[数量限制](limits)。例如当服务器拥有 500 名玩家时，每个玩家最多只能创建 4 个全局文本绘图。此时便需要采用**玩家专属**文本绘图方案（下文将详细说明）。以下是**全局**文本绘图相关函数列表：

- [TextDrawCreate](../functions/TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](../functions/TextDrawDestroy): 销毁文本绘图
- [TextDrawColor](../functions/TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](../functions/TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](../functions/TextDrawAlignment): 设置对齐方式
- [TextDrawFont](../functions/TextDrawFont): 设置字体样式
- [TextDrawLetterSize](../functions/TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](../functions/TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](../functions/TextDrawSetOutline): 设置文本轮廓
- [TextDrawSetShadow](../functions/TextDrawSetShadow): 设置文本阴影
- [TextDrawSetProportional](../functions/TextDrawSetProportional): 启用等比例缩放
- [TextDrawUseBox](../functions/TextDrawUseBox): 启用文本框显示
- [TextDrawSetString](../functions/TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer): 对玩家显示
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer): 对玩家隐藏
- [TextDrawShowForAll](../functions/TextDrawShowForAll): 为所有玩家显示
- [TextDrawHideForAll](../functions/TextDrawHideForAll): 为所有玩家隐藏
- [IsTextDrawVisibleForPlayer](../functions/IsTextDrawVisibleForPlayer): 检测可见性
- [IsValidTextDraw](../functions/IsValidTextDraw): 验证有效性
- [TextDrawGetAlignment](../functions/TextDrawGetAlignment): 获取文本对齐方式
- [TextDrawGetBackgroundColour](../functions/TextDrawGetBackgroundColour): 获取背景颜色
- [TextDrawGetBoxColour](../functions/TextDrawGetBoxColour): 获取文本框颜色
- [TextDrawGetColour](../functions/TextDrawGetColour): 获取字体颜色
- [TextDrawGetFont](../functions/TextDrawGetFont): 获取字体样式
- [TextDrawGetLetterSize](../functions/TextDrawGetLetterSize): 获取字符宽高尺寸
- [TextDrawGetOutline](../functions/TextDrawGetOutline): 获取文本轮廓线粗细
- [TextDrawGetPos](../functions/TextDrawGetPos): 获取绘制坐标位置
- [TextDrawGetPreviewModel](../functions/TextDrawGetPreviewModel): 获取 3D 预览模型 ID
- [TextDrawGetPreviewRot](../functions/TextDrawGetPreviewRot): 获取模型旋转角度与缩放值
- [TextDrawGetPreviewVehCol](../functions/TextDrawGetPreviewVehCol): 获取预览车辆颜色配置
- [TextDrawGetPreviewVehicleColours](../functions/TextDrawGetPreviewVehicleColours): 获取预览车辆完整配色方案
- [TextDrawGetShadow](../functions/TextDrawGetShadow): 获取阴影效果尺寸
- [TextDrawGetString](../functions/TextDrawGetString): 获取当前显示文本内容
- [TextDrawGetTextSize](../functions/TextDrawGetTextSize): 获取文本框 XY 轴尺寸
- [TextDrawIsBox](../functions/TextDrawIsBox): 检测文本框状态（是否为框体）
- [TextDrawIsProportional](../functions/TextDrawIsProportional): 检测是否启用等比例缩放
- [TextDrawIsSelectable](../functions/TextDrawIsSelectable): 检测文本是否可被选中交互
- [TextDrawSetPos](../functions/TextDrawSetPos): 重置绘制坐标位置
- [TextDrawSetStringForPlayer](../functions/TextDrawSetStringForPlayer): 为指定玩家更新文本内容

---

## 玩家文本绘图

玩家专属文本绘图仅针对特定玩家创建。每个玩家可创建多达 256 个专属文本绘图，这意味着在 500 名玩家的服务器上可同时存在 128,000 个玩家专属文本绘图，远超 2048 个的限制。此类文本绘图应专用于非静态内容显示，切勿将其用于展示网站地址等静态内容，而应应用于车辆生命值指示器等动态信息显示。

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor): 设置玩家文本颜色
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor): 设置玩家文本框颜色
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor): 设置玩家文本绘图的背景颜色
- [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment): 设置玩家文本绘图的对齐方式
- [PlayerTextDrawFont](../functions/PlayerTextDrawFont): 设置玩家文本绘图的字体样式
- [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize): 设置玩家文本绘图的字符尺寸
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize): 设置玩家文本框尺寸（或[可选中区域](../functions/PlayerTextDrawSetSelectable)）
- [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline): 切换文本轮廓显示
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow): 设置文本阴影效果
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional): 启用字符间距等比缩放
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox): 切换文本框显示
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString): 更新玩家文本绘图内容
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow): 显示玩家文本绘图
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide): 隐藏玩家文本绘图
- [IsPlayerTextDrawVisible](../functions/IsPlayerTextDrawVisible): 检测玩家文本绘图的可见状态
- [IsValidPlayerTextDraw](../functions/IsValidPlayerTextDraw): 验证玩家文本绘图的有效性
- [PlayerTextDrawBackgroundColour](../functions/PlayerTextDrawBackgroundColour): 调整玩家文本绘图的背景色彩（英式拼写）
- [PlayerTextDrawBoxColour](../functions/PlayerTextDrawBoxColour): 设置玩家文本框色彩
- [PlayerTextDrawColour](../functions/PlayerTextDrawColour): 设置玩家文本颜色（英式拼写）
- [PlayerTextDrawGetAlignment](../functions/PlayerTextDrawGetAlignment): 获取对齐方式
- [PlayerTextDrawGetBackgroundColour](../functions/PlayerTextDrawGetBackgroundColour): 获取背景色彩
- [PlayerTextDrawGetBoxColour](../functions/PlayerTextDrawGetBoxColour): 获取文本框色彩
- [PlayerTextDrawGetColour](../functions/PlayerTextDrawGetColour): 获取文本颜色
- [PlayerTextDrawGetFont](../functions/PlayerTextDrawGetFont): 获取当前字体
- [PlayerTextDrawGetLetterSize](../functions/PlayerTextDrawGetLetterSize): 获取字符宽高数值
- [PlayerTextDrawGetOutline](../functions/PlayerTextDrawGetOutline): 获取轮廓线尺寸
- [PlayerTextDrawGetPos](../functions/PlayerTextDrawGetPos): 获取绘制坐标
- [PlayerTextDrawGetPreviewModel](../functions/PlayerTextDrawGetPreviewModel): 获取 3D 预览模型 ID
- [PlayerTextDrawGetPreviewRot](../functions/PlayerTextDrawGetPreviewRot): 获取模型旋转与缩放参数
- [PlayerTextDrawGetPreviewVehicleColours](../functions/PlayerTextDrawGetPreviewVehicleColours): 获取车辆预览配色方案
- [PlayerTextDrawGetShadow](../functions/PlayerTextDrawGetShadow): 获取阴影尺寸
- [PlayerTextDrawGetString](../functions/PlayerTextDrawGetString): 获取当前显示文本
- [PlayerTextDrawGetTextSize](../functions/PlayerTextDrawGetTextSize): 获取文本框尺寸参数
- [PlayerTextDrawIsBox](../functions/PlayerTextDrawIsBox): 检测文本框状态
- [PlayerTextDrawIsProportional](../functions/PlayerTextDrawIsProportional): 检测等比缩放状态
- [PlayerTextDrawIsSelectable](../functions/PlayerTextDrawIsSelectable): 检测可选状态
- [PlayerTextDrawSetPos](../functions/PlayerTextDrawSetPos): 重置绘制坐标
- [PlayerTextDrawSetPreviewVehicleColours](../functions/PlayerTextDrawSetPreviewVehicleColours): 设置车辆预览配色（需配合 3D 模型显示）

---

## 变量声明

当创建文本绘图时，必须确定要创建的是全局文本绘图（如网站地址、全局公告）还是玩家专属文本绘图（如击杀数、死亡数、分数）。

### 全局文本绘图

全局文本绘图创建最为简单，只需单个变量。该变量用于后续修改文本绘图并向玩家展示。此类变量通常需要声明为全局变量，变量名应使用 _Text:_ 前缀，并初始化为 _Text:INVALID_TEXT_DRAW_。若省略初始化，可能与其他新增文本绘图产生冲突。

```c
new Text:gMyText = Text:INVALID_TEXT_DRAW;
```

### 玩家专属文本绘图

玩家专属文本绘图与常规"全局"文本绘图在功能上完全一致，但仅针对单个玩家创建。这种机制特别适用于需要展示玩家个性化数据的场景，例如显示击杀数/得分的统计信息栏。

使用玩家专属文本绘图可有效规避全局文本绘图的数量限制（每个玩家可独立创建 256 个），同时在玩家断开连接时系统会自动销毁其专属文本绘图，显著降低资源管理复杂度。

```c
new PlayerText:gMyPlayerText = PlayerText:INVALID_TEXT_DRAW;
```

:::info

重要提示：仍需使用数组变量存储，因为不同玩家的文本绘图 ID 可能因创建数量差异而变化。

:::

函数命名规则：全局函数中的'TextDraw'改为'PlayerTextDraw'（例如 [创建玩家文本绘图](../functions/CreatePlayerTextDraw)），但字符串设置函数例外（'TextDrawSetString' 变为 'PlayerTextDrawSetString'）。

---

## 创建文本绘图

![图示:320px-文本绘图坐标示意图](https://assets.open.mp/assets/images/textdraws/320px-Textdraw_map.png)

声明存储文本绘图 ID 的变量/数组后，即可开始创建。全局文本绘图应在 [OnGameModeInit](../callbacks/OnGameModeInit) 回调中创建，使用 [TextDrawCreate](../functions/TextDrawCreate) 函数。注意此函数仅创建，后续需其他函数进行修改和展示。

需特别注意：此函数仅完成文本绘图的创建操作，后续需调用其他函数进行属性修改及玩家显示操作。

**参数：​**

TextDrawCreate(Float:x, Float:y, text[])

| 参数名 | 说明                |
| ------ | ------------------- |
| x      | 文本绘图的 X 轴坐标 |
| y      | 文本绘图的 Y 轴坐标 |
| text[] | 文本绘图显示的内容  |

**返回值：​**

创建的文本绘图 ID

创建示例：

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 240.0, "你好世界！");
    return 1;
}
```

该代码在屏幕中央创建显示"你好世界！"的文本绘图。

---

## 字体设置

文本绘图支持四种字体：

![图示:文本绘图字体样式对比](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

| ID  | 特性描述               | 使用建议                   |
| --- | ---------------------- | -------------------------- |
| 0   | 《圣安地列斯》原生字体 | 适用于标题，不适合大段文本 |
| 1   | 包含大小写的清晰字体   | 适合长篇文字内容           |
| 2   | 仅含大写字母的清晰字体 | 通用场景适用               |
| 3   | GTA 风格字体           | 放大不失真，适合大尺寸文本 |

SA-MP 0.3d 版本新增第四种字体（ID 4），需配合 [TextDrawCreate](../functions/TextDrawCreate) 和 [TextDrawTextSize](../functions/TextDrawTextSize) 函数使用，用于显示材质精灵。此功能后续详解。

---

## 显示文本绘图

以下示例展示在玩家加入服务器时显示全局文本绘图。使用 [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer) 函数向指定玩家展示。

**参数：​**

TextDrawShowForPlayer(playerid, Text:text)

| 参数名   | 说明                |
| -------- | ------------------- |
| playerid | 目标玩家 ID         |
| text     | 要显示的文本绘图 ID |

**返回值：​**

无特定返回值

实现代码：

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 320.0, "你好世界！");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyText);
    return 1;
}
```

---

## 实用技巧

- 尽量使用整数坐标值，确保不同分辨率下的最佳兼容性
- 字体在 X:Y = 1:4 的比例下显示效果最佳（例如 X=0.5 时 Y=2.0）
