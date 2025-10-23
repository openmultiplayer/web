---
title: GetPlayerAnimationFlags
sidebar_label: GetPlayerAnimationFlags
description: 获取玩家动画标志位
tags: ["玩家", "动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前动画的标志位信息。

| 名称     | 描述                        |
| -------- | --------------------------- |
| playerid | 需要获取动画标志位的玩家 ID |

## 返回值

以整型形式返回玩家动画的标志位组合。

## 示例代码

通过位掩码操作获取各个标志位：

```c
#define ANIM_FREEZE_FLAG   0b0000000000000100  // 冻结动画标志
#define ANIM_LOCK_X_FLAG   0b0010000000000     // X轴锁定标志
#define ANIM_LOCK_Y_FLAG   0b0001000000000     // Y轴锁定标志
#define ANIM_LOOP_FLAG     0b0000100000000     // 循环播放标志

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myanimflags", true))
    {
        new messageString[128];
        new flags = GetPlayerAnimationFlags(playerid);

        bool:freeze  = (flags & ANIM_FREEZE_FLAG) ? true : false;
        bool:lockx   = (flags & ANIM_LOCK_X_FLAG) ? true : false;
        bool:locky   = (flags & ANIM_LOCK_Y_FLAG) ? true : false;
        bool:loop    = (flags & ANIM_LOOP_FLAG) ? true : false;

        format(messageString, sizeof(messageString), "当前动画标志：[冻结:%d] [X轴锁定:%d] [Y轴锁定:%d] [循环:%d]", freeze, lockx, locky, loop);
        SendClientMessage(playerid, 0xFFFFFFFF, messageString);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

当玩家处于非地面状态（如车内/空中）时，返回的标志位始终为 0

:::

## 相关函数

- [ApplyAnimation](ApplyAnimation): 为玩家应用动画效果
