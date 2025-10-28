---
title: AddVehicleComponent
sidebar_label: AddVehicleComponent
description: 为车辆添加一个「组件」（通常称为「改装件」）
tags: ["车辆"]
---

## 描述

为车辆添加一个「组件」（通常称为「改装件」）。有效改装件 ID 可参考此列表。

| 参数                                     | 说明                                        |
| ---------------------------------------- | ------------------------------------------- |
| vehicleid                                | 需要添加组件的车辆 ID（注意与模型 ID 区分） |
| [component](../resources/carcomponentid) | 要添加的组件 ID                             |

## 返回值

**true** - 组件添加成功

**false** - 车辆不存在导致添加失败

## 示例

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // 出租车
    return 1;
}

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // 氮气加速
            SendClientMessage(playerid, 0xFFFFFFAA, "已为出租车安装氮气加速装置");
        }
    }
    return 1;
}
```

## 注意事项

:::warning

使用无效的组件 ID 会导致玩家游戏崩溃（该问题已在 open.mp 中修复）

:::

## 相关函数

- [RemoveVehicleComponent](RemoveVehicleComponent): 移除车辆组件
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): 获取车辆指定插槽的组件
- [GetVehicleComponentType](GetVehicleComponentType): 通过 ID 检测组件类型
- [VehicleCanHaveComponent](VehicleCanHaveComponent): 验证组件是否适用于车辆

## 相关回调

- [OnVehicleMod](../callbacks/OnVehicleMod): 当车辆被改装时触发
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): 当车辆进出改装店时触发

## 相关资源

- [车辆改装件 ID 列表](../resources/carcomponentid)
