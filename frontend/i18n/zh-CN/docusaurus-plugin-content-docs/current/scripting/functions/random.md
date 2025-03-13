---
title: random
sidebar_label: random
description: 获取伪随机数
tags: ["核心"]
---

<LowercaseNoteZH_CN />

## 描述

获取伪随机数

| 参数名 | 描述                                    |
| ------ | --------------------------------------- |
| max    | 定义返回值范围（从 0 到该值减一的区间） |

## 返回值

返回一个介于 0 到 max-1 之间的随机整数

## 示例

```c
new value = random(5);

// 'value' 可能为 0, 1, 2, 3 或 4 (共5种可能值)
new Float:RandomSpawn[][4] =
{
    // 坐标数组 (X, Y, Z 及朝向角度)
    {-2796.9854, 1224.8180, 20.5429, 192.0335},
    {-2454.2170, 503.8759, 30.0790, 267.2932},
    {-2669.7322, -6.0874, 6.1328, 89.8853}
};


public OnPlayerSpawn(playerid)
{
    new rand = random(sizeof(RandomSpawn));

    // 将玩家传送到随机坐标
    SetPlayerPos(playerid, RandomSpawn[rand][0], RandomSpawn[rand][1], RandomSpawn[rand][2]);

    // 设置玩家随机朝向角度
    SetPlayerFacingAngle(playerid, RandomSpawn[rand][3]);
    return 1;
}
```

## 注意事项

:::tip

当参数值小于 1 时会产生异常结果

:::
