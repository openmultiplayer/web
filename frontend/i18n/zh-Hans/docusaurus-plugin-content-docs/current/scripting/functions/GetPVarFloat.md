---
title: GetPVarFloat
sidebar_label: GetPVarFloat
description: 获取玩家变量的浮点数值
tags: ["玩家变量", "pvar"]
---

## 描述

获取指定玩家的浮点型变量值

| 名称         | 说明                  |
| ------------ | --------------------- |
| playerid     | 需要获取变量的玩家 ID |
| const pvar[] | 目标玩家变量名称      |

## 返回值

返回指定玩家变量的浮点数值，若变量不存在返回 0.0

## 示例代码

```c
// 加载玩家保存的位置数据
LoadPlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;

    // 从玩家变量读取坐标
    x = GetPVarFloat(playerid, "Xpos");
    y = GetPVarFloat(playerid, "Ypos");
    z = GetPVarFloat(playerid, "Zpos");

    // 设置玩家位置
    SetPlayerPos(playerid, x, y, z);
    return 1;
}
```

## 注意事项

:::tip

玩家变量在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)回调触发后才会重置，因此在断开连接事件中仍可访问

:::

## 相关函数

- [SetPVarInt](SetPVarInt): 设置玩家变量的整数值
- [GetPVarInt](GetPVarInt): 获取玩家变量的整数值
- [SetPVarString](SetPVarString): 设置玩家变量的字符串值
- [GetPVarString](GetPVarString): 获取玩家变量的字符串值
- [SetPVarFloat](SetPVarFloat): 设置玩家变量的浮点数值
- [DeletePVar](DeletePVar): 删除指定玩家变量
