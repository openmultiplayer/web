---
title: TextDrawSetPos
sidebar_label: TextDrawSetPos
description: 设置文本绘图的位置
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置文本绘图在屏幕中的坐标位置（X 轴与 Y 轴）

| 参数        | 说明                      |
| ----------- | ------------------------- |
| Text:textid | 需要设置位置的文本绘图 ID |
| Float:x     | 浮点型 X 坐标值           |
| Float:y     | 浮点型 Y 坐标值           |

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");

    TextDrawSetPos(gMyTextdraw, 200.0, 50.0);
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 新建一个文本绘图
- [TextDrawDestroy](TextDrawDestroy): 删除指定文本绘图
- [TextDrawGetPos](TextDrawGetPos): 查询文本绘图的当前坐标
- [TextDrawColor](TextDrawColor): 调整文本绘图的文字颜色
- [TextDrawBoxColor](TextDrawBoxColor): 修改文本绘图的背景方框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 修改文本绘图的背景颜色
- [TextDrawAlignment](TextDrawAlignment): 调整文本绘图的文字对齐方式
- [TextDrawFont](TextDrawFont): 更改文本绘图的字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 调节文本绘图的字符大小
- [TextDrawTextSize](TextDrawTextSize): 定义文本绘图方框的尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 控制文本轮廓的显示状态
- [TextDrawSetProportional](TextDrawSetProportional): 启用文本字符的比例间距
- [TextDrawUseBox](TextDrawUseBox): 控制文本绘图方框的显示开关
- [TextDrawSetString](TextDrawSetString): 修改现有文本绘图的文字内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 向指定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向所有在线玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏指定文本绘图
