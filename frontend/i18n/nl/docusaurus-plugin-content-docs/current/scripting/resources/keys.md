---
title: "Keys"
sidebar_label: "Keys"
---

:::note
Hier vind je informatie over key input-constants gebruikt door [GetPlayerKeys](../functions/GetPlayerKeys) en [OnPlayerKeyStateChange](../callbacks/OnPlayerKeyStateChange).

SA-MP gebruikt bitmasking om te bepalen welke toetsen ingedrukt zijn. Zie: `http://en.wikipedia.org/wiki/Mask_(computing)`
:::

---

| Macro                               | Waarde               | Embedding Code (te voet) <sup>(6)</sup> | Embedding Code (in voertuig) <sup>(6)</sup> | Standaardtoets (te voet)                                  | Standaardtoets (in voertuig) |
| ----------------------------------- | -------------------- | ---------------------------------------- | ------------------------------------------- | --------------------------------------------------------- | ----------------------------- |
| KEY_ACTION                          | 1                    | ~k~~PED_ANSWER_PHONE~                    | ~k~~VEHICLE_FIREWEAPON_ALT~                 | TAB                                                      | ALT GR / LCTRL / NUM0         |
| KEY_CROUCH                          | 2                    | ~k~~PED_DUCK~                            | ~k~~VEHICLE_HORN~                           | C                                                        | H / CAPSLOCK                  |
| KEY_FIRE                            | 4                    | ~k~~PED_FIREWEAPON~                      | ~k~~VEHICLE_FIREWEAPON~                     | LCTRL / LMB                                             | LALT                          |
| KEY_SPRINT                          | 8                    | ~k~~PED_SPRINT~                          | ~k~~VEHICLE_ACCELERATE~                     | SPACE                                                   | W                             |
| KEY_SECONDARY_ATTACK                | 16                   | ~k~~VEHICLE_ENTER_EXIT~                  | ~k~~VEHICLE_ENTER_EXIT~                     | ENTER                                                   | ENTER                         |
| KEY_JUMP                            | 32                   | ~k~~PED_JUMPING~                         | ~k~~VEHICLE_BRAKE~                          | LSHIFT                                                  | S                             |
| KEY_LOOK_RIGHT                      | 64                   | -                                        | ~k~~VEHICLE_LOOKRIGHT~                      | -                                                       | E                             |
| KEY_HANDBRAKE/KEY_AIM<sup>(1)</sup> | 128                  | ~k~~PED_LOCK_TARGET~                     | ~k~~VEHICLE_HANDBRAKE~                      | RMB                                                     | SPACE                         |
| KEY_LOOK_LEFT                       | 256                  | -                                        | ~k~~VEHICLE_LOOKLEFT~                       | -                                                       | Q                             |
| KEY_LOOK_BEHIND                     | 512                  | ~k~~PED_LOOKBEHIND~                      | ~k~~VEHICLE_LOOKBEHIND~                     | NUM1 / MMB                                              | 2                             |
| KEY_SUBMISSION                      | 512                  | -                                        | ~k~~TOGGLE_SUBMISSIONS~                     | NUM1 / MMB                                              | 2 / NUMPAD +                  |
| KEY_WALK                            | 1024                 | ~k~~SNEAK_ABOUT~                         | -                                           | LALT                                                    | -                             |
| KEY_ANALOG_UP                       | 2048                 | -                                        | ~k~~VEHICLE_TURRETUP~                       | NUM8<sup>(5)</sup>                                      | NUM8                          |
| KEY_ANALOG_DOWN                     | 4096                 | -                                        | ~k~~VEHICLE_TURRETDOWN~                     | NUM2<sup>(5)</sup>                                      | NUM2                          |
| KEY_ANALOG_LEFT                     | 8192                 | ~k~~VEHICLE_LOOKLEFT~                    | ~k~~VEHICLE_TURRETLEFT~                     | NUM4                                                    | NUM4                          |
| KEY_ANALOG_RIGHT                    | 16384                | ~k~~VEHICLE_LOOKRIGHT~                   | ~k~~VEHICLE_TURRETRIGHT~                    | NUM6                                                    | NUM6                          |
| KEY_YES<sup>(2)</sup>               | 65536                | ~k~~CONVERSATION_YES~                    | ~k~~CONVERSATION_YES~                       | Y                                                       | Y                              |
| KEY_NO<sup>(2)</sup>                | 131072               | ~k~~CONVERSATION_NO~                     | ~k~~CONVERSATION_NO~                        | N                                                       | N                              |
| KEY_CTRL_BACK<sup>(2)</sup>         | 262144<sup>(4)</sup> | ~k~~GROUP_CONTROL_BWD~                   | ~k~~GROUP_CONTROL_BWD~                      | H                                                       | H                              |
| UNDEFINED<sup>(3)</sup>             | -                    | ~k~~GROUP_CONTROL_FWD~                   | ~k~~GROUP_CONTROL_FWD~                      | G                                                       | G                              |
| KEY_UP                              | -128                 | ~k~~GO_FORWARD~                          | ~k~~VEHICLE_STEERUP~                        | UP                                                      | UP                             |
| KEY_DOWN                            | 128                  | ~k~~GO_BACK~                             | ~k~~VEHICLE_STEERDOWN~                      | DOWN                                                    | DOWN                           |
| KEY_LEFT                            | -128                 | ~k~~GO_LEFT~                             | ~k~~VEHICLE_STEERLEFT~                      | LEFT                                                    | LEFT                           |
| KEY_RIGHT                           | 128                  | ~k~~GO_RIGHT~                            | ~k~~VEHICLE_STEERRIGHT~                     | RIGHT                                                   | RIGHT                          |

---

**(1):** Niet gedefinieerd in SA:MP-includes. Je moet:

```c
#define KEY_AIM KEY_HANDBRAKE
```

of `KEY_HANDBRAKE` gebruiken.

**(2):** Niet detecteerbaar in [spectatormodus](../functions/TogglePlayerSpectating).

**(3):** `GROUP_CONTROL_FWD` is intern voor passagiersinstap; niet detecteerbaar.

**(4):** Als 262144 niet werkt, gebruik waarde 2.

**(5):** Alleen gedetecteerd als "JOYPAD"-configuratie actief is.

**(6):** Embedding-codes werken voor [client messages](../functions/SendDeathMessage), [textdraws](../functions/TextDrawCreate) en [gametexts](../functions/GameTextForPlayer).


