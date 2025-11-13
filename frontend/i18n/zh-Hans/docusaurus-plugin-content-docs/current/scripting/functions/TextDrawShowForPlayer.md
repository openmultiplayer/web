---
title: TextDrawShowForPlayer
sidebar_label: TextDrawShowForPlayer
description: 为特定玩家显示文本绘图。
tags: ["玩家", "文本绘图"]
---

## 描述

为特定玩家显示文本绘图。

| 参数        | 说明                                                                |
| ----------- | ------------------------------------------------------------------- |
| playerid    | 要显示文本绘图的玩家 ID                                             |
| Text:textid | 要显示的文本绘图 ID<br />由[TextDrawCreate](TextDrawCreate)创建返回 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的玩家或文本绘图不存在）

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 100.0, "欢迎！");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## 注意事项

:::tip

若只需单个玩家查看文本绘图，建议使用玩家专属文本绘图(PlayerTextDraw)。这种方式也适用于需要展示玩家个性化信息的场景。

:::

## 相关函数

- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向全体玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 隐藏全体玩家的文本绘图
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): 检测文本绘图对玩家是否可见
