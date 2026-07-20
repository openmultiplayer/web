---
title: 按键定义
sidebar_label: 按键定义
---

:::note

本文档提供[GetPlayerKeys](../functions/GetPlayerKeys)和[OnPlayerKeyStateChange](../callbacks/OnPlayerKeyStateChange)使用的按键常量信息。

SA-MP 使用位掩码技术检测按键状态，关于位掩码的详细说明请参阅：[位掩码技术解析](<https://en.wikipedia.org/wiki/Mask_(computing)>)

:::

---

| 宏定义                              | 数值                 | 步行嵌入代码 <sup>(6)</sup> | 车辆嵌入代码 <sup>(6)</sup>   | 步行默认按键           | 车辆默认按键            |
| ----------------------------------- | -------------------- | --------------------------- | ----------------------------- | ---------------------- | ----------------------- |
| KEY_ACTION                          | 1                    | \~k~\~PED_ANSWER_PHONE~     | \~k~\~VEHICLE_FIREWEAPON_ALT~ | TAB 键                 | ALT GR/左 Ctrl/小键盘 0 |
| KEY_CROUCH                          | 2                    | \~k~\~PED_DUCK~             | \~k~\~VEHICLE_HORN~           | C 键                   | H 键/大写锁定键         |
| KEY_FIRE                            | 4                    | \~k~\~PED_FIREWEAPON~       | \~k~\~VEHICLE_FIREWEAPON~     | 左 Ctrl 键/鼠标左键    | 左 Alt 键               |
| KEY_SPRINT                          | 8                    | \~k~\~PED_SPRINT~           | \~k~\~VEHICLE_ACCELERATE~     | 空格键                 | W 键                    |
| KEY_SECONDARY_ATTACK                | 16                   | \~k~\~VEHICLE_ENTER_EXIT~   | \~k~\~VEHICLE_ENTER_EXIT~     | 回车键                 | 回车键                  |
| KEY_JUMP                            | 32                   | \~k~\~PED_JUMPING~          | \~k~\~VEHICLE_BRAKE~          | 左 Shift 键            | S 键                    |
| KEY_LOOK_RIGHT                      | 64                   | -                           | \~k~\~VEHICLE_LOOKRIGHT~      | -                      | E 键                    |
| KEY_HANDBRAKE/KEY_AIM<sup>(1)</sup> | 128                  | \~k~\~PED_LOCK_TARGET~      | \~k~\~VEHICLE_HANDBRAKE~      | 鼠标右键               | 空格键                  |
| KEY_LOOK_LEFT                       | 256                  | -                           | \~k~\~VEHICLE_LOOKLEFT~       | -                      | Q 键                    |
| KEY_LOOK_BEHIND                     | 512                  | \~k~\~PED_LOOKBEHIND~       | \~k~\~VEHICLE_LOOKBEHIND~     | 小键盘 1/鼠标中键      | 2 键                    |
| KEY_SUBMISSION                      | 512                  | -                           | \~k~\~TOGGLE_SUBMISSIONS~     | 小键盘 1/鼠标中键      | 2 键/小键盘+            |
| KEY_WALK                            | 1024                 | \~k~\~SNEAK_ABOUT~          | -                             | 左 Alt 键              | -                       |
| KEY_ANALOG_UP                       | 2048                 | -                           | \~k~\~VEHICLE_TURRETUP~       | 小键盘 8<sup>(5)</sup> | 小键盘 8                |
| KEY_ANALOG_DOWN                     | 4096                 | -                           | \~k~\~VEHICLE_TURRETDOWN~     | 小键盘 2<sup>(5)</sup> | 小键盘 2                |
| KEY_ANALOG_LEFT                     | 8192                 | \~k~\~VEHICLE_LOOKLEFT~     | \~k~\~VEHICLE_TURRETLEFT~     | 小键盘 4               | 小键盘 4                |
| KEY_ANALOG_RIGHT                    | 16384                | \~k~\~VEHICLE_LOOKRIGHT~    | \~k~\~VEHICLE_TURRETRIGHT~    | 小键盘 6               | 小键盘 6                |
| KEY_YES<sup>(2)</sup>               | 65536                | \~k~\~CONVERSATION_YES~     | \~k~\~CONVERSATION_YES~       | Y 键                   | Y 键                    |
| KEY_NO<sup>(2)</sup>                | 131072               | \~k~\~CONVERSATION_NO~      | \~k~\~CONVERSATION_NO~        | N 键                   | N 键                    |
| KEY_CTRL_BACK<sup>(2)</sup>         | 262144<sup>(4)</sup> | \~k~\~GROUP_CONTROL_BWD~    | \~k~\~GROUP_CONTROL_BWD~      | H 键                   | H/R键<sup>(7)</sup>     |
| UNDEFINED<sup>(3)</sup>             | -                    | \~k~\~GROUP_CONTROL_FWD~    | \~k~\~GROUP_CONTROL_FWD~      | G 键                   | G 键                    |
| KEY_UP                              | -128                 | \~k~\~GO_FORWARD~           | \~k~\~VEHICLE_STEERUP~        | 上方向键               | 上方向键                |
| KEY_DOWN                            | 128                  | \~k~\~GO_BACK~              | \~k~\~VEHICLE_STEERDOWN~      | 下方向键               | 下方向键                |
| KEY_LEFT                            | -128                 | \~k~\~GO_LEFT~              | \~k~\~VEHICLE_STEERLEFT~      | 左方向键               | 左方向键                |
| KEY_RIGHT                           | 128                  | \~k~\~GO_RIGHT~             | \~k~\~VEHICLE_STEERRIGHT~     | 右方向键               | 右方向键                |

---

**(1)** 此键位在 SA:MP 官方包含文件中未定义。必须通过以下方式定义：

```c
#define KEY_AIM KEY_HANDBRAKE
```

或直接使用预定义的 `KEY_HANDBRAKE`。

**(2)** 玩家处于[观战模式](../functions/TogglePlayerSpectating)时，此键位无法被检测。

**(3)** `GROUP_CONTROL_FWD` 在 SA-MP 中实际无法被检测，因其在内部用于以乘客身份进入车辆。然而，其游戏文本定义仍然存在。

**(4)** 若键位值 "262144" 无效，可改用键位值 "2"。

**(5)** 仅当控制器配置选择为 "JOYPAD" 时方可被检测。

**(6)** 内嵌代码仅对[死亡信息](../functions/SendDeathMessage)、[文本绘图](../functions/TextDrawCreate) 及[游戏文本](../functions/GameTextForPlayer)生效。

**(7)** 若玩家乘坐无电台的车辆（如警车、遥控车等），R 键与 H 键在会话中均返回值 "262144"；反之，若车辆有电台，在车内按下 H 键（或大写锁定键）仅返回 "2"，而 R 键仍返回 "262144"。
