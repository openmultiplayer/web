---
title: GetPVarInt
sidebar_label: GetPVarInt
description: 获取玩家变量的整数值
tags: ["玩家变量"]
---

## 描述

获取指定玩家变量的整数值

| 参数         | 说明                                                                    |
| ------------ | ----------------------------------------------------------------------- |
| playerid     | 需要获取变量的玩家 ID                                                   |
| const pvar[] | 目标变量名称（不区分大小写）<br/>需通过[SetPVarInt](SetPVarInt)预先设置 |

## 返回值

返回指定玩家变量的整数值。若变量未设置或玩家不存在，返回 **0**

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    // 设置玩家等级变量
    SetPVarInt(playerid, "Level", 20);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    // 获取并打印已保存的等级值
    printf("等级: %d", GetPVarInt(playerid, "Level"));
    // 输出"等级: 20"
    return 1;
}
```

## 注意事项

:::tip

玩家变量在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)回调触发后才会重置，因此在断开连接事件中仍可访问

:::

## 相关函数

- [SetPVarInt](SetPVarInt): 设置玩家变量的整数值
- [SetPVarString](SetPVarString): 设置玩家变量的字符串值
- [GetPVarString](GetPVarString): 获取玩家变量的字符串值
- [SetPVarFloat](SetPVarFloat): 设置玩家变量的浮点数值
- [GetPVarFloat](GetPVarFloat): 获取玩家变量的浮点数值
- [DeletePVar](DeletePVar): 删除指定玩家变量
