---
title: OnPlayerEditObject
sidebar_label: OnPlayerEditObject
description: 当玩家完成物体编辑时（通过BeginObjectEditing/BeginPlayerObjectEditing）会触发该回调函数。
tags: ["玩家", "物体"]
---

## 描述

当玩家完成物体编辑（[BeginObjectEditing](../functions/BeginObjectEditing)/[BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing)）时触发该回调函数。

| 参数名                 | 说明                                                    |
| ---------------------- | ------------------------------------------------------- |
| playerid               | 进行物体编辑的玩家ID                                    |
| playerobject           | 0表示全局物体，1表示玩家物体                            |
| objectid               | 被编辑物体的ID                                          |
| EDIT_RESPONSE:response | [编辑响应类型](../resources/objecteditionresponsetypes) |
| Float:fX               | 物体编辑后的X轴偏移量                                   |
| Float:fY               | 物体编辑后的Y轴偏移量                                   |
| Float:fZ               | 物体编辑后的Z轴偏移量                                   |
| Float:fRotX            | 物体编辑后的X轴旋转角度                                 |
| Float:fRotY            | 物体编辑后的Y轴旋转角度                                 |
| Float:fRotZ            | 物体编辑后的Z轴旋转角度                                 |

## 返回值

1 - 阻止其他脚本接收此回调

0 - 允许将此回调传递给下一个脚本

该回调始终在滤镜脚本中优先触发

## 示例

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

    if (!playerobject) // 如果是全局物体，同步位置给其他玩家
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
            // 在此保存物体新位置（和旋转角度）
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // 玩家取消编辑，还原物体位置
            if (!playerobject) // 非玩家物体
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

## 注意事项

:::warning

使用'EDIT_RESPONSE_UPDATE'时需注意：当编辑中途释放操作时，最后一次'EDIT_RESPONSE_UPDATE'的物体位置可能与实际最终位置不同步。

:::

## 相关函数

以下函数可能与本回调函数相关：

- [BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing): 开始编辑玩家物体
- [BeginObjectEditing](../functions/BeginObjectEditing): 开始编辑物体
- [CreateObject](../functions/CreateObject): 创建物体
- [DestroyObject](../functions/DestroyObject): 销毁物体
- [MoveObject](../functions/MoveObject): 移动物体

## 相关资源

- [物体编辑响应类型](../resources/objecteditionresponsetypes)
