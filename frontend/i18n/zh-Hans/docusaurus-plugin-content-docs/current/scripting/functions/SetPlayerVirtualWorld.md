---
title: SetPlayerVirtualWorld
sidebar_label: SetPlayerVirtualWorld
description: 设置玩家所在的虚拟世界。
tags: ["玩家"]
---

## 描述

设置玩家所在的虚拟世界。玩家只能看到同属该虚拟世界的其他玩家和车辆。

| 参数         | 说明                      |
| ------------ | ------------------------- |
| playerid     | 需要设置虚拟世界的玩家 ID |
| virtualWorld | 目标虚拟世界 ID           |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示玩家未连接）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/world3", true) == 0)
    {
        // 将玩家切换到3号虚拟世界
        SetPlayerVirtualWorld(playerid, 3);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

默认虚拟世界 ID 为 0。

:::

## 相关函数

- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): 获取玩家当前所在的虚拟世界
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): 设置车辆所在的虚拟世界
