---
title: GetPlayerBuildingsRemoved
sidebar_label: GetPlayerBuildingsRemoved
description: 获取玩家已移除的建筑数量
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家通过 RemoveBuildingForPlayer 函数已移除的建筑数量。

| 参数     | 说明              |
| -------- | ----------------- |
| playerid | 需要查询的玩家 ID |

## 返回值

返回玩家已移除的建筑数量（整数）。

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    RemoveBuildingForPlayer(playerid, 700, 1192.1016, -1738.0000, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 700, 1204.4844, -1724.8516, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 673, 1192.5625, -1723.8828, 12.5234, 0.25);

    printf("已移除建筑数量: %d", GetPlayerBuildingsRemoved(playerid)); // 输出: 已移除建筑数量: 3
    return 1;
}
```

## 相关函数

- [RemoveBuildingForPlayer](RemoveBuildingForPlayer): 为玩家移除指定范围内的建筑物
- [RemoveBuildingForPlayerEx](RemoveBuildingForPlayerEx): （扩展功能）增强版建筑移除函数
