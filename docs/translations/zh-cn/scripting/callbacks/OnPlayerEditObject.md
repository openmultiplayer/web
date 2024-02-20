---
title: OnPlayerEditObject
description: 当玩家编辑完一个物体(EditObject/EditPlayerObject)时，会调用该回调。
tags: ["player"]
---

<VersionWarnCN name='回调' version='SA-MP 0.3e' />

## 描述

当玩家编辑完一个物体(EditObject/EditPlayerObject)时，会调用该回调。

| 参数名       | 描述                                                 |
| ------------ | ---------------------------------------------------- |
| playerid     | 编辑物体的玩家的 ID                                  |
| playerobject | 如果它是全局物体，则为 0；如果它是玩家物体，则为 1。 |
| objectid     | 已编辑物体的 ID                                      |
| EDIT_RESPONSE:response     | [响应类型](../resources/objecteditionresponsetypes)  |
| Float:fX     | 已编辑物体的 X 偏移量                                |
| Float:fY     | 已编辑物体的 Y 偏移量                                |
| Float:fZ     | 已编辑物体的 Z 偏移量                                |
| Float:fRotX  | 已编辑物体的 X 向旋转                                |
| Float:fRotY  | 已编辑物体的 Y 向旋转                                |
| Float:fRotZ  | 已编辑物体的 Z 向旋转                                |

## 返回值

1 - 将阻止其他脚本接收此回调。

0 - 指示此回调将传递给下一个脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
    if (!playerobject) // 如果这是全局物体，请同步其他玩家的位置
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // 玩家点击了保存图标
            // 在此执行任何操作以保存更新的物体位置(和旋转)
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // 玩家取消了比赛，所以把物体放回原来的位置
            if (!playerobject) // 物体不是玩家物体
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## 要点

:::warning

使用‘EDIT_RESPONSE_UPDATE’时，请注意，在释放正在进行的编辑时不会调用此回调，从而导致‘EDIT_RESPONSE_UPDATE’的最后更新与物体当前位置不同步。

:::

## 相关函数

- [EditObject](../functions/EditObject): 编辑物体。
- [CreateObject](../functions/CreateObject): 创建一个物体。
- [DestroyObject](../functions/DestroyObject): 摧毁一个物体。
- [MoveObject](../functions/MoveObject): 移动物体。
