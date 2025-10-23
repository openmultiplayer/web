---
title: 旁观模式
sidebar_label: 旁观模式
description: PlayerSpectatePlayer和PlayerSpectateVehicle函数使用的旁观模式
tags: []
---

:::info

[PlayerSpectatePlayer](../functions/PlayerSpectatePlayer) 和 [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle) 函数使用的观察视角模式

:::

| 模式类型             | 效果描述                                                                                                                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SPECTATE_MODE_NORMAL | 普通旁观模式（第三人称视角）。视角角度不可调整                                                                                                                                                                                            |
| SPECTATE_MODE_FIXED  | 使用[SetPlayerCameraPos](../functions/SetPlayerCameraPos)定位玩家视角位置后，该模式会自动追踪通过[PlayerSpectatePlayer](../functions/PlayerSpectatePlayer)/[PlayerSpectateVehicle](../functions/PlayerSpectateVehicle)设置的目标玩家/车辆 |
| SPECTATE_MODE_SIDE   | 视角将附着在目标玩家/车辆侧面（类似摩托车第一人称视角进行翘轮特技时的观察视角）                                                                                                                                                           |
