---
title: ShowNameTags
sidebar_label: ShowNameTags
description: 切换玩家头顶名称标签、血条和护甲条的显示。
tags: []
---

## 描述

控制是否显示玩家头顶的名称标签、生命值条和护甲条。

| 参数      | 说明                                        |
| --------- | ------------------------------------------- |
| bool:显示 | 'false'禁用显示，'true'启用显示（默认启用） |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    // 这将完全禁用所有玩家的名称标签
    //（包括血条和护甲条）
    ShowNameTags(false);
}
```

## 注意

:::warning

此函数只能在[OnGameModeInit](OnGameModeInit)回调中使用。其他场景请使用[ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer)。

:::

:::tip

也可通过[config.json](../../server/config.json)配置文件全局设置：

```json
"use_nametags": false,
```

:::

## 相关函数

- [DisableNameTagLOS](DisableNameTagLOS): 禁用名称标签的视线检测
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): 显示/隐藏指定玩家的名称标签
- [ShowPlayerMarkers](ShowPlayerMarkers): 控制玩家雷达标记的显示
