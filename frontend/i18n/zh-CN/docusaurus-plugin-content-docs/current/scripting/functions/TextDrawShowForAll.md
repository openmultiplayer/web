---
title: TextDrawShowForAll
sidebar_label: TextDrawShowForAll
description: 为所有玩家显示文本绘图。
tags: ["文本绘图"]
---

## 描述

为所有玩家显示指定的文本绘图。

| 参数        | 说明                                                                          |
| ----------- | ----------------------------------------------------------------------------- |
| Text:textid | 需要显示的文本绘图 ID<br />由[TextDrawCreate](TextDrawCreate)函数创建时返回。 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的文本绘图不存在）

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "示例文本");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showtd", true))
    {
        TextDrawShowForAll(gMyTextdraw);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为特定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 对所有玩家隐藏文本绘图
