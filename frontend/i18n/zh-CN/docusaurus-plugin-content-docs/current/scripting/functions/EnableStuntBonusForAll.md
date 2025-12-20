---
title: EnableStuntBonusForAll
sidebar_label: EnableStuntBonusForAll
description: 为所有玩家启用或禁用特技奖励。
tags: []
---

## 描述

为所有玩家启用或禁用车辆特技奖励。启用时，玩家执行车辆特技（例如翘轮动作）将获得金钱奖励。

| 参数        | 说明                                   |
| ----------- | -------------------------------------- |
| bool:enable | true 启用特技奖励 / false 禁用特技奖励 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    EnableStuntBonusForAll(false); // 禁用全局特技奖励
    return 1;
}
```

## 注意事项

:::tip

可通过 [config.json](../../server/config.json) 配置文件全局控制特技奖励：

```json
"use_stunt_bonuses": false,
```

:::

## 相关函数

- [EnableStuntBonusForPlayer](EnableStuntBonusForPlayer): 为单个玩家切换特技奖励功能
