---
title: Modovi Kamere
---

## Deskripcija

Sljedeći modove kamere koristi [GetPlayerCameraMode](../functions/GetPlayerCameraMode).

:::note

Još uvijek može biti više upotrebljivih ID-ova skrivenih u igri, a neki ID-ovi se koriste za više od jedne situacije.

:::

## Lista dostupnih modova kamere

| ID  | Definicija                 | Ime iz fajlova igre    | Deskripcija                                                                                                                                    |
| --- | -------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 3   | CAM_MODE_BEHINDCAR         | MODE_BEHINDCAR         | Kamera vlak/tramvaj                                                                                                                            |
| 4   | CAM_MODE_FOLLOWPED         | MODE_FOLLOWPED         | Pratiti pješaka (normalno iza kamere igrača), nekoliko promjenjivih udaljenosti                                                                |
| 7   | CAM_MODE_SNIPER            | MODE_SNIPER            | Snajpersko nišanjenje (snajperski nišan)                                                                                                       |
| 8   | CAM_MODE_ROCKETLAUNCHER    | MODE_ROCKETLAUNCHER    | Ciljanje raketnog bacača (nišan raketnog bacača)                                                                                               |
| 15  | CAM_MODE_FIXED             | MODE_FIXED             | Fiksna kamera (nepokretna) - koristi se za garaže, kameru za lov, ulazak u zgrade, kupovinu hrane itd.                                         |
| 16  | CAM_MODE_1STPERSON         | MODE_1STPERSON         | Prednja kamera vozila, bočna kamera za bicikl                                                                                                  |
| 18  | CAM_MODE_CAM_ON_A_STRING   | MODE_CAM_ON_A_STRING   | Normalan auto (+ skimer + helikopter + avion), nekoliko promjenjivih udaljenosti                                                               |
| 22  | CAM_MODE_BEHINDBOAT        | MODE_BEHINDBOAT        | Normalna kamera broda                                                                                                                          |
| 46  | CAM_MODE_CAMERA            | MODE_CAMERA            | Ciljanje oružja (nišan oružja)                                                                                                                 |
| 51  | CAM_MODE_ROCKETLAUNCHER_HS | MODE_ROCKETLAUNCHER_HS | Ciljanje bacača raketa s traženjem topline                                                                                                     |
| 53  | CAM_MODE_AIMWEAPON         | MODE_AIMWEAPON         | Ciljanje bilo kojeg drugog oružja                                                                                                              |
| 55  | CAM_MODE_AIMWEAPON_FROMCAR | MODE_AIMWEAPON_FROMCAR | Kamera za ciljanje putnika u vozilu (provozajte se kao igrač)                                                                                  |
| 56  | CAM_MODE_DW_HELI_CHASE     | MODE_DW_HELI_CHASE     | Chase kamera: pogled iz helikoptera (ptičja perspektiva)                                                                                       |
| 57  | -                          | MODE_DW_CAM_MAN        | Kamera za potjeru: ground camera, zooms in quite quickly and pan to the vehicle                                                                |
| 58  | -                          | MODE_DW_BIRDY          | Kamera za potjeru: horizontalni let pored vozila                                                                                               |
| 59  | -                          | MODE_DW_PLANE_SPOTTER  | Kamera za potjeru (samo za vazdušna vozila): zemaljska kamera, gleda u zračno vozilo                                                           |
| 62  | -                          | MODE_DW_PLANECAM1      | Kamera za potjeru (samo za vazdušna vozila): vertikalni let pored vazdušnog vozila                                                             |
| 63  | -                          | MODE_DW_PLANECAM2      | Kamera za potjeru (samo za vazdušna vozila): horizontalni let pored vazdušnog vozila (slično kao 58 i 62)                                      |
| 64  | -                          | MODE_DW_PLANECAM3      | Kamera za potjeru (samo za vazdušna vozila): kamera fokusirana na pilota, slično pritiskanju tipke LOOK_BEHIND pješice, ali u vazdušnom vozilu |
