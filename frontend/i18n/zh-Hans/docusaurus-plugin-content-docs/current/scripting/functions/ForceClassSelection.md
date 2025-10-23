---
title: ForceClassSelection
sidebar_label: ForceClassSelection
description: 强制玩家返回职业选择界面。
tags: ["职业系统"]
---

## 描述

该函数强制指定玩家返回职业选择界面。

| 参数名   | 描述              |
| -------- | ----------------- |
| playerid | 需要操作的玩家 ID |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/class", true))
    {
        ForceClassSelection(playerid);  // 强制玩家返回职业选择界面
        TogglePlayerSpectating(playerid, true);
        TogglePlayerSpectating(playerid, false);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

当结合使用 TogglePlayerSpectating 函数时（如上例所示），本函数不会将玩家状态切换为 PLAYER_STATE_WASTED（濒死状态）。

:::

## 相关函数

- [AddPlayerClass](AddPlayerClass): 添加新职业配置
- [SetPlayerSkin](SetPlayerSkin): 设置玩家皮肤外观
- [GetPlayerSkin](GetPlayerSkin): 获取玩家当前皮肤 ID

## 相关回调

- [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass): 当玩家在职业选择界面切换职业时触发
