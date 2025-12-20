---
title: ClearAnimations
sidebar_label: ClearAnimations
description: 清除指定玩家的所有动画效果（同时取消当前所有任务，如使用喷气背包、跳伞、进入车辆、驾驶（将玩家移出车辆）、游泳等）
tags: ["玩家", "动画"]
---

## 描述

终止指定玩家当前所有动画效果，并取消其正在进行的行为任务（包括但不限于喷气背包飞行、跳伞、进入车辆过程、驾驶状态（强制移出车辆）、游泳等）

| 参数                 | 说明                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------ |
| playerid             | 目标玩家 ID                                                                          |
| FORCE_SYNC:forceSync | 设置为`SYNC_ALL`将强制玩家在流式传输范围内同步动画状态（默认=SYNC_NONE，不强制同步） |

## 返回值

此函数始终返回 **true**，即使指定玩家未连接

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/清除动画", true))
    {
        ClearAnimations(playerid);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

当在 ApplyAnimation 函数中使用'freeze'参数冻结动画时，ClearAnimations 在动画结束后不会生效

:::

:::tip

与其他移出车辆方式不同，此函数会将车辆速度立即归零。玩家将出现在车辆顶部，位置与其在座位上的坐标一致

:::

## 相关函数

- [ApplyAnimation](ApplyAnimation): 为玩家应用动画效果
