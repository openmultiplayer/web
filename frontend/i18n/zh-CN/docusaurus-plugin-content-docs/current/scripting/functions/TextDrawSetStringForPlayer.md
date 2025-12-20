---
title: TextDrawSetStringForPlayer
sidebar_label: TextDrawSetStringForPlayer
description: 为特定玩家更改文本绘图中的文字内容
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

为特定玩家动态修改文本绘图显示内容。

| 参数             | 说明                   |
| ---------------- | ---------------------- |
| Text:textid      | 需修改的文本绘图 ID    |
| playerid         | 目标玩家 ID            |
| const format[]   | 格式化字符串内容       |
| OPEN_MP_TAGS:... | 不定数量的任意类型参数 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(317.799987, 331.475006, "你好，最近怎么样？");
    TextDrawLetterSize(gMyTextdraw, 0.238997, 1.250000);
    TextDrawTextSize(gMyTextdraw, 505.000000, 202.000000);
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER);
    TextDrawColor(gMyTextdraw, 0xFFFFFFFF);
    TextDrawSetShadow(gMyTextdraw, 0);
    TextDrawSetOutline(gMyTextdraw, 1);
    TextDrawBackgroundColor(gMyTextdraw, 255);
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_1);
    TextDrawSetProportional(gMyTextdraw, true);
    return 1;
}

public OnPlayerConnect(playerid)
{
    new playerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, playerName, sizeof playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);

    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "欢迎%s！", playerName);
    return 1;
}

public OnPlayerRequestClass(playerid, classid)
{
    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "你选择了%d号职业", classid);
    return 1;
}
```

## 注意事项

:::warning

文本字符串存在长度限制，详细信息请参阅[此处](../resources/limits)

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawSetString](TextDrawSetString): 全局修改文本内容
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置文本背景色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置文本字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置文本字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文本描边效果
- [TextDrawSetShadow](TextDrawSetShadow): 设置文本阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例缩放
- [TextDrawUseBox](TextDrawUseBox): 切换文本框显示状态
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示文本
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本
- [TextDrawGetString](TextDrawGetString): 获取文本内容
