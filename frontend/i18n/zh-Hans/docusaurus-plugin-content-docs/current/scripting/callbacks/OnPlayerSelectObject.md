---
title: OnPlayerSelectObject
sidebar_label: OnPlayerSelectObject
description: 当玩家使用BeginObjectSelecting后选择物体时触发该回调函数。
tags: ["玩家", "物体"]
---

## 描述

当玩家使用 [BeginObjectSelecting](../functions/BeginObjectSelecting) 后选择物体时触发该回调函数。

| 参数名             | 说明                                         |
| ------------------ | -------------------------------------------- |
| playerid           | 选择物体的玩家ID                             |
| SELECT_OBJECT:type | 选择的[类型](../resources/selectobjecttypes) |
| objectid           | 被选物体的ID                                 |
| modelid            | 被选物体的模型ID                             |
| Float:fX           | 被选物体的X坐标                              |
| Float:fY           | 被选物体的Y坐标                              |
| Float:fZ           | 被选物体的Z坐标                              |

## 返回值

1 - 阻止其他脚本接收此回调。

0 - 表示此回调将继续传递给下一个脚本。

该回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnPlayerSelectObject(playerid, SELECT_OBJECT:type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("玩家 %d 选择了物体 %d", playerid, objectid);

    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        BeginObjectEditing(playerid, objectid);
    }
    else
    {
        BeginPlayerObjectEditing(playerid, objectid);
    }

    SendClientMessage(playerid, 0xFFFFFFFF, "您现在可以编辑您的物体了！");
    return 1;
}
```

## 相关函数

以下函数可能与该回调存在关联：

- [BeginObjectSelecting](../functions/BeginObjectSelecting): 开始物体选择流程

## 相关资源

- [选择物体类型](../resources/selectobjecttypes)
