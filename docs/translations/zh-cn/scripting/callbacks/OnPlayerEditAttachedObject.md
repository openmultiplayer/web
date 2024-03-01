---
title: OnPlayerEditAttachedObject
description: 当玩家结束附加物体编辑模式时，会调用此回调。
tags: ["player"]
---

## 描述

当玩家结束附加物体编辑模式时，会调用此回调。

| 参数名         | 描述                                                    |
| -------------- | ------------------------------------------------------- |
| playerid       | 结束编辑模式的玩家 ID                                   |
| EDIT_RESPONSE:response       | 如果他们取消(Esc)，则为 0；如果他们单击保存图标，则为 1 |
| index          | 附加物体的索引(0-9)                                     |
| modelid        | 已编辑的附加物体的模型 ID                               |
| boneid         | 已编辑的附加物体的骨骼 ID                               |
| Float:fOffsetX | 已编辑的附加物体的 X 偏移                               |
| Float:fOffsetY | 已编辑的附加物体的 Y 偏移量                             |
| Float:fOffsetZ | 已编辑的附加物体的 Z 偏移                               |
| Float:fRotX    | 已编辑的附加物体的 X 向旋转                             |
| Float:fRotY    | 已编辑的附加物体的 Y 向旋转                             |
| Float:fRotZ    | 已编辑的附加物体的 Z 向旋转                             |
| Float:fScaleX  | 已编辑的附加物体的 X 比例                               |
| Float:fScaleY  | 已编辑的附加物体的 Y 比例                               |
| Float:fScaleZ  | 已编辑的附加物体的 Z 比例                               |

## 返回值

1 - 将阻止其他脚本接收此回调。

0 - 指示此回调将传递给下一个脚本。

它在过滤脚本中总是先被调用。

## 案例

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

// 附加物体时，应将数据存储在上述数组中

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "已保存附加物体版本。");

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
    else
    {
        SendClientMessage(playerid, COLOR_RED, "未保存附加物体版本。");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## 要点

:::warning

如果响应为‘0’(已取消)，则应丢弃版本。
这必须在使用 EditAttachedObject 之前通过将偏移量等存储在数组中来完成。

:::

## 相关函数

- [EditAttachedObject](../functions/EditAttachedObject): 编辑附加的物体。
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): 将物体附加到玩家。
