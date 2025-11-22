---
title: GetVehicleComponentInSlot
sidebar_label: GetVehicleComponentInSlot
description: 获取车辆指定改装槽位中安装的组件ID
tags: ["车辆"]
---

## 描述

获取车辆在特定改装槽位中已安装的组件 ID（改装店改装部件）。

| 参数            | 说明                                                            |
| --------------- | --------------------------------------------------------------- |
| vehicleid       | 要检查改装组件的车辆 ID                                         |
| CARMODTYPE:slot | [改装槽位类型](../resources/componentslots)（需检查的组件槽位） |

## 返回值

返回指定槽位中安装的组件 ID。

若车辆不存在或该槽位未安装组件，则返回 **0**。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/myspoiler", cmdtext, true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            component = GetVehicleComponentInSlot(GetPlayerVehicleID(playerid), CARMODTYPE_SPOILER);

        if (component == 1049)
        {
            SendClientMessage(playerid, -1, "你的Elegy安装了Alien尾翼！");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

已知缺陷：

- 对 CARMODTYPE_STEREO 槽位无效
- 前防撞杠和前保险杠组件都存储在 CARMODTYPE_FRONT_BUMPER 槽位，若同时安装仅返回最后安装的组件
- 后防撞杠和后保险杠组件都存储在 CARMODTYPE_REAR_BUMPER 槽位，若同时安装仅返回最后安装的组件
- 左右侧裙组件都存储在 CARMODTYPE_SIDESKIRT 槽位，若同时安装仅返回最后安装的组件

:::

## 相关函数

- [AddVehicleComponent](AddVehicleComponent): 为车辆添加改装组件
- [GetVehicleComponentType](GetVehicleComponentType): 通过组件 ID 获取其类型

## 相关回调

- [OnVehicleMod](../callbacks/OnVehicleMod): 当车辆被改装时触发
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): 当车辆进出改装店时触发

## 相关资源

- [车辆改装槽位说明](../resources/componentslots)
