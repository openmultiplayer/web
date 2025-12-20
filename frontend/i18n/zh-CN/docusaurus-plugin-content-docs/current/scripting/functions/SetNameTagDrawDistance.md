---
title: SetNameTagDrawDistance
sidebar_label: SetNameTagDrawDistance
description: 设置显示玩家名牌的最大距离。
tags: []
---

## 描述

设置显示玩家名牌的最大可见距离。

| 参数           | 说明                              |
| -------------- | --------------------------------- |
| Float:distance | 要设置的可见距离（单位：SA 单位） |

## 返回值

此函数不返回特定值。

## 示例代码

```c
SetNameTagDrawDistance(20.0);
```

## 注意事项

:::tip

默认可见距离为 70.0 SA 单位

:::

## 相关函数

- [LimitGlobalChatRadius](LimitGlobalChatRadius): 限制玩家之间的聊天可见距离
- [ShowNameTags](ShowNameTags): 控制名牌显示开关
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): 为指定玩家设置名牌可见性
