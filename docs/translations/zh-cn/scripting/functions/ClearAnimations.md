---
title: ClearAnimations
description: 清除指定玩家的所有动画（它也取消所有当前任务，如喷气背包、跳伞、进入载具、驾驶（将玩家从载具中移除）、游泳等。
tags: []
---

## 描述

清除指定玩家的所有动画（它也取消所有当前任务，如喷气背包、跳伞、进入载具、驾驶（将玩家从载具中移除）、游泳等。

| 参数名    | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| playerid  | 要清除动画的玩家的 ID。                                      |
| forcesync | 设为 1，强迫 playerid 与流半径内的其他玩家同步动画（可选）。 |

## 返回值

这个函数总是返回 1，即使指定的玩家没有连接。

## 案例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/animclear", true))
    {
        ClearAnimations(playerid);
        return 1;
    }
    return 0;
}
```

## 要点

:::tip

如果在 ApplyAnimation 中给冻结参数传入 1，那么当动画结束后，ClearAnimations 不会有任何效果。

:::

:::tip

与其他一些将玩家从载具中移除的方法不同，这也会将载具的速度重置为零，使载具瞬间停止前进。玩家将出现在他载具的座位上的位置相同的上方。

:::

## 相关函数

- [ApplyAnimation](ApplyAnimation): 将动画应用于玩家。
