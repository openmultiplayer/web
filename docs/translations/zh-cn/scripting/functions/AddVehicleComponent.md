---
title: AddVehicleComponent
description: 为载具添加一个“部件”(通常称为“mod”(修改))。
tags: ["vehicle"]
---

## 描述

为载具添加一个“部件”(通常称为“mod”(修改))。您可以在此处找到有效的部件。

| 参数名                                     | 说明                                             |
| ------------------------------------------ | ------------------------------------------------ |
| vehicleid                                  | 要添加部件的载具 ID。请不要将其与 模型 ID 混淆。 |
| [componentid](../resources/carcomponentid) | 要添加到载具的部件 ID。                          |

## 返回值

0 - 未添加部件，因为载具不存在。

1 - 部件已成功添加到载具。

## 案例

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
            AddVehicleComponent(gTaxi, 1010); // 氮气
            SendClientMessage(playerid, 0xFFFFFFAA, "氮气添加到了出租车上");
        }
    }
    return 1;
}
```

## 要点

:::warning

使用无效的部件 ID 会导致玩家的游戏崩溃，该函数没有对此进行内部安全检查。

:::

## 相关函数

- [RemoveVehicleComponent](RemoveVehicleComponent): 从载具上移除部件。
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): 检查载具有哪些部件。
- [GetVehicleComponentType](GetVehicleComponentType): 通过 ID 检查部件的类型。
- [OnVehicleMod](../callbacks/OnVehicleMod): 当载具被修改时调用。
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): 当载具进出改装店时调用。
