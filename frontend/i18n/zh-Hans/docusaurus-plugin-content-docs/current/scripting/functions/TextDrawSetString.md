---
title: TextDrawSetString
sidebar_label: TextDrawSetString
description: 修改文本绘图中的文字内容。
tags: ["文本绘图"]
---

## 描述

修改文本绘图中的文字内容。

| 名称             | 描述                               |
| ---------------- | ---------------------------------- |
| Text:textid      | 需要修改的文本绘图 ID              |
| const format[]   | 新的字符串内容                     |
| OPEN_MP_TAGS:... | 不定数量的参数（支持任意标签类型） |

## 返回值

此函数不返回特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(1.0, 5.6, "你好，最近怎么样？");
    return 1;
}

public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, sizeof playerName);

    format(string, sizeof(string), "欢迎 %s！", playerName);
    TextDrawSetString(gMyTextdraw, string);

    // 专业提示：在open.mp中无需使用`format`函数
    TextDrawSetString(gMyTextdraw, "欢迎 %s！", playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## 注意事项

:::warning

文本绘图字符串存在长度限制 - 详见[此处](../resources/limits)获取更多信息。

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): 为特定玩家修改文本内容
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置字体类型
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文本描边效果
- [TextDrawSetShadow](TextDrawSetShadow): 设置文本阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 切换文本框显示状态
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向所有玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 对所有玩家隐藏文本绘图
- [TextDrawGetString](TextDrawGetString): 获取文本内容
