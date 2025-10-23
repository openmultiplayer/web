---
title: 特殊动作
sidebar_label: 特殊动作
description: 包含所有玩家特殊动作的列表，适用于GetPlayerSpecialAction和SetPlayerSpecialAction函数
tags: ["玩家"]
---

本页整理了[GetPlayerSpecialAction](../functions/GetPlayerSpecialAction)和[SetPlayerSpecialAction](../functions/SetPlayerSpecialAction)函数使用的所有玩家特殊动作。这两个页面都包含如何使用下列参数的示例。

:::warning

标注 \* 的特殊动作无法通过[SetPlayerSpecialAction](../functions/SetPlayerSpecialAction)设置

:::

| ID  | 动作名称                        | 描述                                                                 |
| --- | ------------------------------- | -------------------------------------------------------------------- |
| 0   | SPECIAL_ACTION_NONE             | 清除玩家所有特殊动作                                                 |
| 2   | SPECIAL_ACTION_USEJETPACK       | 使玩家使用喷气背包                                                   |
| 5   | SPECIAL_ACTION_DANCE1           | 播放舞蹈动画 1                                                       |
| 6   | SPECIAL_ACTION_DANCE2           | 播放舞蹈动画 2                                                       |
| 7   | SPECIAL_ACTION_DANCE3           | 播放舞蹈动画 3                                                       |
| 8   | SPECIAL_ACTION_DANCE4           | 播放舞蹈动画 4                                                       |
| 10  | SPECIAL_ACTION_HANDSUP          | 使玩家举手投降                                                       |
| 11  | SPECIAL_ACTION_USECELLPHONE     | 使玩家使用手机通话                                                   |
| 12  | SPECIAL_ACTION_SITTING \*       | 检测玩家是否处于坐下状态                                             |
| 13  | SPECIAL_ACTION_STOPUSECELLPHONE | 使玩家停止使用手机                                                   |
| 1   | SPECIAL_ACTION_DUCK \*          | 检测玩家是否处于蹲下状态                                             |
| 3   | SPECIAL_ACTION_ENTER_VEHICLE \* | 检测玩家是否正在通过动画进入车辆                                     |
| 4   | SPECIAL_ACTION_EXIT_VEHICLE \*  | 检测玩家是否正在通过动画离开车辆                                     |
| 20  | SPECIAL_ACTION_DRINK_BEER       | 使用后会增加玩家醉酒值                                               |
| 21  | SPECIAL_ACTION_SMOKE_CIGGY      | 使玩家抽雪茄                                                         |
| 22  | SPECIAL_ACTION_DRINK_WINE       | 使玩家饮用葡萄酒瓶并进入醉酒状态                                     |
| 23  | SPECIAL_ACTION_DRINK_SPRUNK     | 使玩家饮用 Sprunk 饮料                                               |
| 68  | SPECIAL_ACTION_PISSING          | 播放小便动画并显示尿液效果（**该宏未包含在 SA-MP 头文件中**）        |
| 24  | SPECIAL_ACTION_CUFFED           | 强制玩家做出被拷动作（双手背在身后）（在 CJ 皮肤上无效）             |
| 25  | SPECIAL_ACTION_CARRY            | 使玩家呈现"搬运"动画，并使其无法冲刺、跳跃或挥拳（在 CJ 皮肤上无效） |
