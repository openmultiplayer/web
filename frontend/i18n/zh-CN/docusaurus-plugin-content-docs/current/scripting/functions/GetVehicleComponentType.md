---
title: GetVehicleComponentType
sidebar_label: GetVehicleComponentType
description: 根据组件ID获取其类型
tags: ["车辆"]
---

## 描述

根据组件 ID 获取其对应的改装槽位类型

| 参数      | 说明            |
| --------- | --------------- |
| component | 要检查的组件 ID |

## 返回值

返回指定组件的槽位 ID，若组件无效则返回 **-1**

## 示例

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    new
        CARMODTYPE:componentType = GetVehicleComponentType(componentid);

    if (componentType != CARMODTYPE_NONE)
    {
        new
            string[64];

        format(string, sizeof(string), "你在 %i 号槽位改装了车辆", componentType);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "无效的改装组件");
    }
    return 1;
}
```

## 相关函数

- [AddVehicleComponent](AddVehicleComponent): 为车辆添加改装组件
- [RemoveVehicleComponent](RemoveVehicleComponent): 移除车辆改装组件
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): 获取车辆指定槽位的组件

## 相关回调

- [OnVehicleMod](../callbacks/OnVehicleMod): 当车辆被改装时触发
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): 当车辆进出改装店时触发
