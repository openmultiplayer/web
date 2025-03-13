---
title: DisableNameTagLOS
sidebar_label: DisableNameTagLOS
description: 禁用名牌的视线检测，使玩家可以透过物体查看名牌。
tags: []
---

## 描述

禁用名牌的视线检测机制，玩家名牌将无视物体遮挡显示。

## 示例

```c
public OnGameModeInit()
{
    DisableNameTagLOS();
    return 1;
}
```

## 注意事项

:::warning

该功能在服务器重启前不可逆。

:::

:::tip

可通过 [config.json](../../server/config.json) 配置文件禁用名牌视线检测：

```json
"use_nametag_los": false,
```

:::

## 相关函数

- [ShowNameTags](ShowNameTags): 全局控制名牌显示状态
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): 按玩家控制名牌可见性
