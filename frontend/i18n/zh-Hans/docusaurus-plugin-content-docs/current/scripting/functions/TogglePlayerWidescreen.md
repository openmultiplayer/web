---
title: TogglePlayerWidescreen
sidebar_label: TogglePlayerWidescreen
description: 切换玩家的宽屏显示模式
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

动态切换玩家的宽屏显示状态，控制游戏画面比例。

| 参数名    | 说明                                            |
| --------- | ----------------------------------------------- |
| playerid  | 需操作的玩家 ID                                 |
| bool:wide | 设为**true**启用宽屏模式，**false**恢复默认比例 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示指定玩家不存在）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/宽屏模式", true))
    {
        TogglePlayerWidescreen(playerid, true);
        SendClientMessage(playerid, -1, "服务器：你已启用宽屏显示！");
        return 1;
    }
    return 0;
}
```

<hr />

**宽屏启用效果：**

![](https://i.ibb.co/Zcc2qmD/widescreen-on.png)

**宽屏禁用效果：**

![](https://i.ibb.co/jb1YcQS/widescreen-off.png)

## 相关函数

- [IsPlayerWidescreenToggled](IsPlayerWidescreenToggled): 检测玩家当前宽屏状态
