---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: 当玩家结束附加物体编辑模式时触发该回调
tags: ["玩家", "物体", "附加物体"]
---

## 描述

当玩家结束附加物体编辑模式时触发该回调。

| 参数                   | 说明                                            |
| ---------------------- | ----------------------------------------------- |
| playerid               | 结束编辑的玩家ID                                |
| EDIT_RESPONSE:response | 操作结果：0=取消（ESC），1=保存（点击保存图标） |
| index                  | 附加物体的索引号（0-9）                         |
| modelid                | 被编辑附加物体的模型ID                          |
| boneid                 | 被编辑附加物体的骨骼ID                          |
| Float:fOffsetX         | 被编辑附加物体的X轴偏移量                       |
| Float:fOffsetY         | 被编辑附加物体的Y轴偏移量                       |
| Float:fOffsetZ         | 被编辑附加物体的Z轴偏移量                       |
| Float:fRotX            | 被编辑附加物体的X轴旋转角度                     |
| Float:fRotY            | 被编辑附加物体的Y轴旋转角度                     |
| Float:fRotZ            | 被编辑附加物体的Z轴旋转角度                     |
| Float:fScaleX          | 被编辑附加物体的X轴缩放比例                     |
| Float:fScaleY          | 被编辑附加物体的Y轴缩放比例                     |
| Float:fScaleZ          | 被编辑附加物体的Z轴缩放比例                     |

## 返回值

1 - 阻止其他脚本接收此回调  
0 - 允许传递给后续脚本

该回调在滤镜脚本中总是优先触发。

## 示例

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// 当附加物体被附加时，应将数据存储到上述数组中

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response == EDIT_RESPONSE_FINAL)
    {
        SendClientMessage(playerid, COLOR_GREEN, "附加物体编辑已保存");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else if (response == EDIT_RESPONSE_CANCEL)
    {
        SendClientMessage(playerid, COLOR_RED, "附加物体编辑未保存");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid,
            ao[playerid][i][ao_x],
            ao[playerid][i][ao_y],
            ao[playerid][i][ao_z],
            ao[playerid][i][ao_rx],
            ao[playerid][i][ao_ry],
            ao[playerid][i][ao_rz],
            ao[playerid][i][ao_sx],
            ao[playerid][i][ao_sy],
            ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## 注意

:::tip

使用[SetPlayerAttachedObject](../functions/SetPlayerAttachedObject)可还原附加物体的原始参数

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerEditObject](OnPlayerEditObject)：当玩家结束普通物体编辑时触发
- [OnPlayerSelectObject](OnPlayerSelectObject)：当玩家通过[SelectObject](../functions/SelectObject)选择物体后触发

## 相关函数

以下函数可能与当前回调相关：

- [EditAttachedObject](../functions/EditAttachedObject)：进入附加物体编辑模式
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject)：为玩家附加物体
- [RemovePlayerAttachedObject](../functions/RemovePlayerAttachedObject)：移除玩家的附加物体
- [IsPlayerEditingAttachedObject](../functions/IsPlayerEditingAttachedObject)：检测玩家是否正在编辑附加物体
- [CancelEdit](../functions/CancelEdit)：取消物体编辑
