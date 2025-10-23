---
title: Is3DTextLabelStreamedIn
sidebar_label: Is3DTextLabelStreamedIn
description: 检查3D文本标签是否已为玩家流加载
tags: ["3d文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查指定 3D 文本标签是否已为玩家完成流加载。

| 参数          | 说明           |
| ------------- | -------------- |
| playerid      | 玩家 ID        |
| Text3D:textid | 3D 文本标签 ID |

## 返回值

**true** - 3D 文本标签已为玩家流加载  
**false** - 尚未完成加载或标签不存在

## 示例

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("当前坐标：\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (Is3DTextLabelStreamedIn(playerid, gMyLabel))
    {
        // 执行相关操作
    }
    return 1;
}
```

## 相关函数

- [Create3DTextLabel](Create3DTextLabel): 在指定坐标创建 3D 文本标签
- [IsPlayerStreamedIn](IsPlayerStreamedIn): 检查玩家是否已为另一玩家流加载
