---
title: SetModeRestartTime
sidebar_label: SetModeRestartTime
description: 设置主脚本加载之间的延迟时间（单位：秒）。
tags: []
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置主脚本加载之间的延迟时间（单位：秒）。

## 参数

| 参数          | 说明                   |
| ------------- | ---------------------- |
| Float:seconds | 重启延迟秒数（浮点数） |

## 返回值

1 - 函数执行成功

0 - 函数执行失败（秒数不能小于 1）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/restart", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        SetModeRestartTime(5.0);
        SendClientMessage(playerid, -1, "[SERVER]: 服务器将在5秒后重启。");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

`seconds`参数为浮点数类型

:::

## 相关函数

- [GetModeRestartTime](GetModeRestartTime): 获取主脚本加载之间的延迟时间（单位：秒）
- [GameModeExit](GameModeExit): 结束当前游戏模式
