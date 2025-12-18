---
title: ShowPlayerNameTagForPlayer
sidebar_label: ShowPlayerNameTagForPlayer
description: 此函数允许你切换玩家头顶显示的玩家名称标签、生命条和护甲条的绘制。
tags: ["玩家"]
---

## 描述

此函数允许你切换玩家头顶显示的玩家名称标签、生命条和护甲条的绘制。若需全局控制类似功能，请使用[ShowNameTags](ShowNameTags)函数。

| 参数      | 说明                                  |
| --------- | ------------------------------------- |
| playerid  | 将看到此函数生效结果的观察者玩家 ID   |
| targetid  | 需要显示/隐藏名称标签的目标玩家 ID    |
| bool:show | true 显示名称标签，false 隐藏名称标签 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    // 输入/nameoff的玩家将无法看到其他玩家的名称标签
    if (strcmp("/nameoff", cmdtext, true) == 0)
    {
        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            ShowPlayerNameTagForPlayer(playerid, i, false);
        }
        GameTextForPlayer(playerid, "~W~名称标签 ~R~已关闭", 5000, 5);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

需先通过[ShowNameTags](ShowNameTags)启用全局名称标签显示，此函数才能生效。建议在玩家流加载时（[OnPlayerStreamIn](../callbacks/OnPlayerStreamIn)回调）预先设置 ShowPlayerNameTagForPlayer(forplayerid, playerid, 0)。

:::

## 相关函数

- [ShowNameTags](ShowNameTags): 设置名称标签显示开关
- [DisableNameTagLOS](DisableNameTagLOS): 禁用名称标签的视线检测
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): 设置玩家地图标记
