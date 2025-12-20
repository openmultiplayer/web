---
title: EnableAllAnimations
sidebar_label: EnableAllAnimations
description: 允许使用某些版本中缺失的动画。
tags: ["动画"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

启用部分版本中缺失的动画资源。

| 参数        | 说明                                   |
| ----------- | -------------------------------------- |
| bool:enable | true 启用缺失动画 / false 禁用缺失动画 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    EnableAllAnimations(true); // 启用缺失动画资源
    return 1;
}
```

## 注意事项

:::tip

可通过 [config.json](../../server/config.json) 配置文件全局控制动画资源加载：

```json
"use_all_animations": false,
```

:::

## 相关函数

- [AreAllAnimationsEnabled](AreAllAnimationsEnabled): 检测是否启用了所有动画资源
- [ApplyAnimation](ApplyAnimation): 对玩家应用动画
- [ClearAnimations](ClearAnimations): 清除玩家当前动画

## 相关资源

- [动画列表](../resources/animations)
