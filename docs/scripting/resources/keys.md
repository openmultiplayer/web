---
title: "Keys | open.mp"
description: "Here you can find information about key input constants used by GetPlayerKeys and OnPlayerKeyStateChange."
canonical: https://open.mp/docs/scripting/resources/keys
language: en
---

# Keys

note

Here you can find information about key input constants used by [GetPlayerKeys](https://open.mp/docs/scripting/functions/GetPlayerKeys) and [OnPlayerKeyStateChange](https://open.mp/docs/scripting/callbacks/OnPlayerKeyStateChange).

SA-MP uses bitmasking to determine which keys are pressed and which are not. Here's an article on bitmasking: [https://en.wikipedia.org/wiki/Mask\_(computing)](https://en.wikipedia.org/wiki/Mask_\(computing\))

* * *

| Macro | Value | Embedding Code (On Foot) (6) | Embedding Code (In Vehicle) (6) | Default Key (On Foot) | Default Key (In Vehicle) |
| --- | --- | --- | --- | --- | --- |
| KEY\_ACTION | 1 | ~k~~PED\_ANSWER\_PHONE~ | ~k~~VEHICLE\_FIREWEAPON\_ALT~ | TAB | ALT GR / LCTRL / NUM0 |
| KEY\_CROUCH | 2 | ~k~~PED\_DUCK~ | ~k~~VEHICLE\_HORN~ | C | H / CAPSLOCK |
| KEY\_FIRE | 4 | ~k~~PED\_FIREWEAPON~ | ~k~~VEHICLE\_FIREWEAPON~ | LCTRL / LMB (Left Mouse Button) | LALT |
| KEY\_SPRINT | 8 | ~k~~PED\_SPRINT~ | ~k~~VEHICLE\_ACCELERATE~ | SPACE | W |
| KEY\_SECONDARY\_ATTACK | 16 | ~k~~VEHICLE\_ENTER\_EXIT~ | ~k~~VEHICLE\_ENTER\_EXIT~ | ENTER | ENTER |
| KEY\_JUMP | 32 | ~k~~PED\_JUMPING~ | ~k~~VEHICLE\_BRAKE~ | LSHIFT | S |
| KEY\_LOOK\_RIGHT | 64 | \- | ~k~~VEHICLE\_LOOKRIGHT~ | \- | E |
| KEY\_HANDBRAKE/KEY\_AIM(1) | 128 | ~k~~PED\_LOCK\_TARGET~ | ~k~~VEHICLE\_HANDBRAKE~ | RMB (Right Mouse Button) | SPACE |
| KEY\_LOOK\_LEFT | 256 | \- | ~k~~VEHICLE\_LOOKLEFT~ | \- | Q |
| KEY\_LOOK\_BEHIND | 512 | ~k~~PED\_LOOKBEHIND~ | ~k~~VEHICLE\_LOOKBEHIND~ | NUM1 / MMB (Middle Mouse Button - Click the mouse wheel) | 2 |
| KEY\_SUBMISSION | 512 | \- | ~k~~TOGGLE\_SUBMISSIONS~ | NUM1 / MMB (Middle Mouse Button - Click the mouse wheel) | 2 / NUMPAD + |
| KEY\_WALK | 1024 | ~k~~SNEAK\_ABOUT~ | \- | LALT | \- |
| KEY\_ANALOG\_UP | 2048 | \- | ~k~~VEHICLE\_TURRETUP~ | NUM8(5) | NUM8 |
| KEY\_ANALOG\_DOWN | 4096 | \- | ~k~~VEHICLE\_TURRETDOWN~ | NUM2(5) | NUM2 |
| KEY\_ANALOG\_LEFT | 8192 | ~k~~VEHICLE\_LOOKLEFT~ | ~k~~VEHICLE\_TURRETLEFT~ | NUM4 | NUM4 |
| KEY\_ANALOG\_RIGHT | 16384 | ~k~~VEHICLE\_LOOKRIGHT~ | ~k~~VEHICLE\_TURRETRIGHT~ | NUM6 | NUM6 |
| KEY\_YES(2) | 65536 | ~k~~CONVERSATION\_YES~ | ~k~~CONVERSATION\_YES~ | Y | Y |
| KEY\_NO(2) | 131072 | ~k~~CONVERSATION\_NO~ | ~k~~CONVERSATION\_NO~ | N | N |
| KEY\_CTRL\_BACK(2) | 262144(4) | ~k~~GROUP\_CONTROL\_BWD~ | ~k~~GROUP\_CONTROL\_BWD~ | H | H, R(7) |
| UNDEFINED(3) | \- | ~k~~GROUP\_CONTROL\_FWD~ | ~k~~GROUP\_CONTROL\_FWD~ | G | G |
| KEY\_UP | \-128 | ~k~~GO\_FORWARD~ | ~k~~VEHICLE\_STEERUP~ | UP | UP |
| KEY\_DOWN | 128 | ~k~~GO\_BACK~ | ~k~~VEHICLE\_STEERDOWN~ | DOWN | DOWN |
| KEY\_LEFT | \-128 | ~k~~GO\_LEFT~ | ~k~~VEHICLE\_STEERLEFT~ | LEFT | LEFT |
| KEY\_RIGHT | 128 | ~k~~GO\_RIGHT~ | ~k~~VEHICLE\_STEERRIGHT~ | RIGHT | RIGHT |

* * *

**(1):** Key not defined in SA:MP includes. You must

```c
#define KEY_AIM KEY_HANDBRAKE
```

or use KEY\_HANDBRAKE.

**(2):** This key can not be detected when the player is in [spectator mode](https://open.mp/docs/scripting/functions/TogglePlayerSpectating).

**(3):** GROUP\_CONTROL\_FWD cannot be detected in SA-MP, as it used internally to enter vehicles as passenger. However, the gametext definition still exists.

**(4):** If the key number "262144" does not work, just use key number "2".

**(5):** Only detected when "JOYPAD" configuration is selected for controller.

**(6)** Embedding codes only work for [client messages](https://open.mp/docs/scripting/functions/SendClientMessage), [textdraws](https://open.mp/docs/scripting/functions/TextDrawCreate) and [gametexts](https://open.mp/docs/scripting/functions/GameTextForPlayer).

**(7)** If a player sits in a vehicle with no radio stations (Cop cars, RC vehicles), both R and H will return "262144" for their session. But if they don't, pressing H / Caps Lock in vehicle only returns "2", while R button returns "262144".
