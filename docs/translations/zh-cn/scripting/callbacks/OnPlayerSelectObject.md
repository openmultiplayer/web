---
title: OnPlayerSelectObject
description: 当玩家在使用SelectObject之后选择一个物体时，这个回调会被调用。
tags: ["player"]
---

## 描述

当玩家在使用 SelectObject 之后选择一个物体时，这个回调会被调用。

| 参数名   | 描述                                         |
| -------- | -------------------------------------------- |
| playerid | 选择玩家的玩家 ID                            |
| type     | [选择的类型](../resources/selectobjecttypes) |
| objectid | 所选物体的 ID                                |
| modelid  | 所选模型的 ID                                |
| Float:fX | 选择玩家的 X 轴位置                          |
| Float:fY | 选择玩家的 Y 轴位置                          |
| Float:fZ | 选择玩家的 Z 轴位置                          |

## 返回值

1 - 将阻止其他脚本接收此回调。

0 - 指示此回调将传递给下一个脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("玩家 %d 选择了物体 %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "现在可以编辑物体了!");
    return 1;
}
```

## 相关函数

- [SelectObject](../functions/SelectObject): 选择一个物体。
