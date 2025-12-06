---
title: 操作码
sidebar_label: 操作码
description: SendClientCheck的动作ID
tags: []
---

:::note

本页面包含[SendClientCheck](../functions/SendClientCheck)函数使用的所有动作/操作码 ID。

:::

| 操作码 | 用途                                                                                                                                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 72     | 玩家的计算机运行时间                                                                                                                  |
| 71     | 指定模型 ColModel 的校验和（CColModel 类中的数据）                                                                                    |
| 70     | 指定模型 CModelInfo 的校验和（CModelInfo 类中的数据）                                                                                 |
| 2      | 返回 CPhysical 中实体的 32 位标志（如果玩家在车辆中，则发送与车辆相关的数据；如果玩家处于步行状态，则发送玩家相关数据）               |
| 5      | 从 arg + 偏移地址处（GTA 内存）的 size 字节计算校验和，并将结果返回至 response 参数，且 arg 应在 GTA 内存边界范围内                   |
| 69     | 从 arg + 偏移地址处（SAMP 内存）的 size 字节计算校验和，并将结果返回至 response 参数，且 arg 应在 GTA 内存边界范围内（0x0 - 0xC3500） |
