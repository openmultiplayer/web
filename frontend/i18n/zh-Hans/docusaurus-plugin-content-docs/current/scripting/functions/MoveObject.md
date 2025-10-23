---
title: MoveObject
sidebar_label: MoveObject
description: 以指定速度将物体移动到新位置
tags: ["物体"]
---

## 描述

用于将物体以指定速度移动到新位置的函数。玩家/车辆将在物体移动时附着其上

| 参数            | 说明                      |
| --------------- | ------------------------- |
| objectid        | 要移动的物体 ID           |
| Float:targetX   | 目标位置的 X 坐标         |
| Float:targetY   | 目标位置的 Y 坐标         |
| Float:targetZ   | 目标位置的 Z 坐标         |
| Float:speed     | 移动速度（单位：单位/秒） |
| Float:rotationX | 最终 X 轴旋转角度（可选） |
| Float:rotationY | 最终 Y 轴旋转角度（可选） |
| Float:rotationZ | 最终 Z 轴旋转角度（可选） |

## 返回值

物体移动所需的时间（以毫秒为单位）

## 示例

```c
new gAirportGate; // 在脚本顶部定义

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/moveobject", true) == 0)
    {
        new
            string[64],
            moveTime = MoveObject(gAirportGate, 0.0, 0.0, 10.0, 2.00);

        format(string, sizeof(string), "物体将在 %d 毫秒后完成移动", moveTime);
        SendClientMessage(playerid, 0xFF0000FF, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 该函数可用于使物体平滑旋转。但为实现此效果，物体必须同时进行**移动**。指定的旋转角度是物体移动后的最终旋转角度。因此，若物体未发生位移，则不会产生旋转效果。具体示例可参考服务器包中 Kye 制作的 ferriswheel.pwn 滤镜脚本（适用于 SA-MP 0.3d 及以上版本）
- 为充分理解上述说明，可采用（但不限于）将 Z 轴坐标先增加(+0.001)再减少(-0.001)的操作，因为不改变 X、Y 或 Z 坐标将不会触发物体旋转

:::

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 检查物体是否有效
- [IsObjectMoving](IsObjectMoving): 检测物体是否在移动
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体位置
- [SetObjectRot](SetObjectRot): 设置物体旋转
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 检查玩家物体是否有效
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [IsPlayerObjectMoving](IsPlayerObjectMoving): 检测玩家物体是否移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到其他玩家
