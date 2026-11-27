---
title: "Weapon IDs | open.mp"
description: "This page contains all of the in-game weapons used by OnPlayerDeath, GivePlayerWeapon, SendDeathMessage."
canonical: https://open.mp/docs/scripting/resources/weaponids
language: en
---

# Weapon IDs

info

This page contains all of the in-game weapons used by [OnPlayerDeath](https://open.mp/docs/scripting/callbacks/OnPlayerDeath), [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon), [SendDeathMessage](https://open.mp/docs/scripting/functions/SendDeathMessage).

* * *

| Hud icon | Death reason | Definition | ID | Slot | Model | Clip size | Interchangeable ammo in slot | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   
Fist |  | WEAPON\_FIST | 0 | 0 | \- | \- | \- | \- |
|   
Brass Knuckles |  | WEAPON\_BRASSKNUCKLE | 1 | 0 | 331 | \- | \- | \- |
|   
Golf Club |  | WEAPON\_GOLFCLUB | 2 | 1 | 333 | \- | \- | \- |
|   
Nite Stick |  | WEAPON\_NITESTICK | 3 | 1 | 334 | \- | \- | \- |
|   
Knife |  | WEAPON\_KNIFE | 4 | 1 | 335 | \- | \- | Can de-sync players when their throat is cut (they appear dead to other players). Also, knife death may not sync for players killed in AFK |
|   
Baseball Bat |  | WEAPON\_BAT | 5 | 1 | 336 | \- | \- | \- |
|   
Shovel |  | WEAPON\_SHOVEL | 6 | 1 | 337 | \- | \- | \- |
|   
Pool Cue |  | WEAPON\_POOLSTICK | 7 | 1 | 338 | \- | \- | \- |
|   
Katana |  | WEAPON\_KATANA | 8 | 1 | 339 | \- | \- | Can not decapitate players (like in single-player) |
|   
Chainsaw |  | WEAPON\_CHAINSAW | 9 | 1 | 341 | \- | \- | \- |
|   
Dildo |  | WEAPON\_DILDO | 10 | 10 | 321 | \- | \- | \- |
|   
Dildo |  | WEAPON\_DILDO2 | 11 | 10 | 322 | \- | \- | \- |
|   
Vibrator |  | WEAPON\_VIBRATOR | 12 | 10 | 323 | \- | \- | \- |
|   
Vibrator |  | WEAPON\_VIBRATOR2 | 13 | 10 | 324 | \- | \- | \- |
|   
Flowers |  | WEAPON\_FLOWER | 14 | 10 | 325 | \- | \- | \- |
|   
Cane |  | WEAPON\_CANE | 15 | 10 | 326 | \- | \- | \- |
|   
Grenade |  | WEAPON\_GRENADE | 16 | 8 | 342 | 1 | No | Does not produce fire. Only synced for players that were streamed-in when a grenade was thrown |
|   
Teargas |  | WEAPON\_TEARGAS | 17 | 8 | 343 | 1 | No | The coughing effect is disabled in SA-MP. Only synced for players that were streamed-in when a tear gas grenade was thrown |
|   
Molotov Cocktail |  | WEAPON\_MOLTOV | 18 | 8 | 344 | 1 | No | Produces fire. Only synced for players that were streamed-in when a molotov cocktail was thrown |
|   
Colt 45 |  | WEAPON\_COLT45 | 22 | 2 | 346 | 17 (34 for dual gun) | No | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
Silenced Pistol |  | WEAPON\_SILENCED | 23 | 2 | 347 | 17 | No | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
Desert Eagle |  | WEAPON\_DEAGLE | 24 | 2 | 348 | 7 | No | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
Shotgun |  | WEAPON\_SHOTGUN | 25 | 3 | 349 | 1 | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
Sawn-off Shotgun |  | WEAPON\_SAWEDOFF | 26 | 3 | 350 | 2 (4 for dual gun) | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
Combat Shotgun |  | WEAPON\_SHOTGSPA | 27 | 3 | 351 | 7 | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
UZI |  | WEAPON\_UZI | 28 | 4 | 352 | 50 (100 for dual gun) | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
MP5 |  | WEAPON\_MP5 | 29 | 4 | 353 | 30 | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
AK-47 |  | WEAPON\_AK47 | 30 | 5 | 355 | 30 | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
M4 |  | WEAPON\_M4 | 31 | 5 | 356 | 50 | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
TEC9 |  | WEAPON\_TEC9 | 32 | 4 | 372 | 50 (100 for dual gun) | Yes | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel) |
|   
Rifle |  | WEAPON\_RIFLE | 33 | 6 | 357 | 1 | No | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel), but it won't have any effect |
|   
Sniper Rifle |  | WEAPON\_SNIPER | 34 | 6 | 358 | 1 | No | Skill can be set with [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel), but it won't have any effect |
|   
Rocket Launcher |  | WEAPON\_ROCKETLAUNCHER | 35 | 7 | 359 | 1 | No | Only synced for players that were streamed-in when the projectile was launched |
|   
Heat Seeker |  | WEAPON\_HEATSEEKER | 36 | 7 | 360 | 1 | No | Lock-on is not synced. Only synced for players that were streamed-in when the projectile was launched |
|   
Flamethrower |  | WEAPON\_FLAMETHROWER | 37 | 7 | 361 | 500 (shows in game as 50) | No | This is used by a damage by fire, even when the fire is created by a rocket explosion or a molotov. Produced fire does not sync between players |
|   
Minigun |  | WEAPON\_MINIGUN | 38 | 7 | 362 | 500 | No | \- |
|   
Satchel Explosives |  | WEAPON\_SATCHEL | 39 | 8 | 363 | 1 | No | Only synced for players that were streamed-in when the satchels were thrown |
|   
Bomb |  | WEAPON\_BOMB | 40 | 12 | 364 | \- | \- | Given automatically when players throw a satchel charge (see ID 39) (omit from anti-cheat checks). It also detonates bombs thrown by other players |
|   
Spray Can |  | WEAPON\_SPRAYCAN | 41 | 9 | 365 | 500 | No | Players that are sprayed choke |
|   
Fire Extinguisher |  | WEAPON\_FIREEXTINGUISHER | 42 | 9 | 366 | 500 | No | Players that are sprayed choke |
|   
Camera |  | WEAPON\_CAMERA | 43 | 9 | 367 | 36 | No | Saves photos to player's gallery if enabled via pause menu (My Documents\\GTA San Andreas User Files\\Gallery) |
|   
Night Vision |  | WEAPON\_NIGHT\_VISION\_GOGGLES | 44 | 11 | 368 | \- | \- | Visual effects show for all players (fixed in open.mp) |
|   
Thermal Goggles |  | WEAPON\_THERMAL\_GOGGLES | 45 | 11 | 369 | \- | \- | Visual effects show for all players (fixed in open.mp) |
|   
Parachute |  | WEAPON\_PARACHUTE | 46 | 11 | 371 | \- | \- | Players will die if teleported while diving with a parachute (can be fixed using [ResetPlayerWeapons](https://open.mp/docs/scripting/functions/ResetPlayerWeapons)). Parachutes are given when bailing out of aircraft (omit from anti-cheat checks) |
|   
Cellphone | \- | \- | \- | \- | \- | \- | \- | Cut from the game. |
|   
Jetpack | \- | \- | \- | \- | 370 | \- | \- | Doesn't work as a weapon. See [SetPlayerSpecialAction](https://open.mp/docs/scripting/functions/SetPlayerSpecialAction). |
|   
Skateboard | \- | \- | \- | \- | \- | \- | \- | Cut from the game. |
| Fake Pistol |  | \- | 47 | N/A | N/A | \- | \- | Only a death icon, can not be used in [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon) etc. |
| Vehicle |  | WEAPON\_VEHICLE | 49 | N/A | N/A | \- | \- | Only a death icon, can not be used in [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon) etc. |
| Helicopter Blades |  | REASON\_HELICOPTER\_BLADES | 50 | N/A | N/A | \- | \- | Only a death icon, can not be used in [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon) etc. |
| Explosion |  | REASON\_EXPLOSION | 51 | N/A | N/A | \- | \- | Only a death icon, can not be used in [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon) etc. This may sometimes be used at an indirect damage through an exploding rocket or grenade |
| Drowned |  | WEAPON\_DROWN | 53 | N/A | N/A | \- | \- | Only a death icon, can not be used in [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon) etc. |
| Splat |  | WEAPON\_COLLISION | 54 | N/A | N/A | \- | \- | Only a death icon, can not be used in [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon) etc. |
| Connect |  | REASON\_CONNECT | 200 | N/A | N/A | \- | \- | Only usable in [SendDeathMessage](https://open.mp/docs/scripting/functions/SendDeathMessage) |
| Disconnect |  | REASON\_DISCONNECT | 201 | N/A | N/A | \- | \- | Only usable in [SendDeathMessage](https://open.mp/docs/scripting/functions/SendDeathMessage) |
| Suicide |  | REASON\_SUICIDE | 255 | N/A | N/A | \- | \- | Only a death icon, can not be used in [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon) etc. Used when a player gets 0 HP by SetPlayerHealth, exploding in a vehicle etc. |

* * *
