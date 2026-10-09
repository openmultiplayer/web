---
title: Camera Modes
sidebar_label: Camera Modes
---

## คำอธิบาย

A list of possible camera modes to be used with [GetPlayerCameraMode](../functions/GetPlayerCameraMode). Note that there might still be more usable IDs hidden away in the game and some IDs are used for more than one situation.

## List

| ID  | Definition                 | Mode                                                                                                                           |
| --- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 3   | CAM_MODE_BEHINDCAR         | Train/tram camera                                                                                                              |
| 4   | CAM_MODE_FOLLOWPED         | Follow ped (normal behind player camera), several variable distances                                                           |
| 7   | CAM_MODE_SNIPER            | Sniper aiming (sniper scope)                                                                                                   |
| 8   | CAM_MODE_ROCKETLAUNCHER    | Rocket Launcher aiming (rocket launcher scope)                                                                                 |
| 15  | CAM_MODE_FIXED             | Fixed camera (non-moving) - used for garages, chase camera, entering buildings, buying food etc                                |
| 16  | CAM_MODE_1STPERSON         | Vehicle front camera, bike side camera                                                                                         |
| 18  | CAM_MODE_CAM_ON_A_STRING   | Normal car (+ skimmer + helicopter + airplane), several variable distances                                                     |
| 22  | CAM_MODE_BEHINDBOAT        | Normal boat camera                                                                                                             |
| 46  | CAM_MODE_CAMERA            | Weapon aiming (weapon scope)                                                                                                   |
| 51  | CAM_MODE_ROCKETLAUNCHER_HS | Heat-seeking Rocket Launcher aiming                                                                                            |
| 53  | CAM_MODE_AIMWEAPON         | Aiming any other weapon                                                                                                        |
| 55  | CAM_MODE_AIMWEAPON_FROMCAR | Vehicle passenger aiming camera (drive by as a player)                                                                         |
| 56  | CAM_MODE_DW_HELI_CHASE     | Chase camera: helicopter/bird view                                                                                             |
| 57  | -                          | Chase camera: ground camera, zooms in quite quickly and pan to the vehicle                                                     |
| 58  | -                          | Chase camera: horizontal flyby past vehicle                                                                                    |
| 59  | -                          | Chase camera (for air vehicles only): ground camera, looking up to the air vehicle                                             |
| 62  | -                          | Chase camera (for air vehicles only): vertical flyby past air vehicle                                                          |
| 63  | -                          | Chase camera (for air vehicles only): horizontal flyby past air vehicle (similar to 58 and 62)                                 |
| 64  | -                          | Chase camera (for air vehicles only): camera focused on pilot, similar to pressing LOOK_BEHIND key on foot, but in air vehicle |
