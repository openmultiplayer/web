---
title: GetPlayerCustomSkin
sidebar_label: GetPlayerCustomSkin
description: 获取玩家从服务器下载的自定义皮肤类ID
tags: ["玩家"]
---

<VersionWarnZH_CN version='SA-MP 0.3.DL R1' />

## 描述

获取玩家通过[AddCharModel](AddCharModel)下载的自定义皮肤类 ID

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要获取皮肤的玩家 ID |

## 返回值

通过 AddCharModel 函数设置的 newid 参数值（若未使用自定义皮肤则返回 0）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/customskin", true))
    {
        new string[32];
        new customSkin = GetPlayerCustomSkin(playerid);

        format(string, sizeof(string), "你的自定义皮肤ID: %d", customSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GetPlayerSkin](GetPlayerSkin): 获取玩家当前使用的皮肤 ID
- [SetPlayerSkin](SetPlayerSkin): 设置玩家皮肤模型
