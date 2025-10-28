---
title: GetPlayerAnimFlags
sidebar_label: GetPlayerAnimFlags
description: 获取玩家动画标志位
tags: ["玩家", "动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前的动画标志位信息。

| 参数     | 说明                        |
| -------- | --------------------------- |
| playerid | 需要获取动画标志位的玩家 ID |

## 返回值

以整型形式返回动画标志位的组合值。

## 示例代码

```c
new flags = GetPlayerAnimFlags(playerid);
// flags 包含动画系统的状态标志位组合
```

## 注意事项

:::tip
标志位采用位掩码(bitmask)形式存储，需使用位运算进行解析：

```c
// 示例标志位定义
#define ANIM_LOOP_FLAG     0b00000001  // 循环播放标志
#define ANIM_LOCK_X_FLAG   0b00000010  // X轴锁定标志
#define ANIM_LOCK_Y_FLAG   0b00000100  // Y轴锁定标志

// 标志位检测
bool:isLooping = (flags & ANIM_LOOP_FLAG) ? true : false;
```

:::

## 相关函数

- [ApplyAnimation](ApplyAnimation): 为玩家应用动画效果
