---
title: "Constants | open.mp"
description: "A list of all standard library constant definitions."
canonical: https://open.mp/docs/scripting/resources/constants
language: en
---

# a\_samp

## Limits

| Value | Constant |
| --- | --- |
| 24 | MAX\_PLAYER\_NAME |
| 1000 | MAX\_PLAYERS |
| 2000 | MAX\_VEHICLES |
| 1000 | MAX\_ACTORS |
| 1000 | MAX\_OBJECTS |
| 1024 | MAX\_GANG\_ZONES |
| Text:2048 | MAX\_TEXT\_DRAWS |
| PlayerText:256 | MAX\_PLAYER\_TEXT\_DRAWS |
| Menu:128 | MAX\_MENUS |
| Text3D:1024 | MAX\_3DTEXT\_GLOBAL |
| PlayerText3D:1024 | MAX\_3DTEXT\_PLAYER |
| 4096 | MAX\_PICKUPS |

## Invalid Constants

| Value | Constant |
| --- | --- |
| 255 | NO\_TEAM |
| 0xFFFF | INVALID\_PLAYER\_ID |
| 0xFFFF | INVALID\_VEHICLE\_ID |
| 0xFFFF | INVALID\_ACTOR\_ID |
| 0xFFFF | INVALID\_OBJECT\_ID |
| Menu:0xFF | INVALID\_MENU |
| Text:0xFFFF | INVALID\_TEXT\_DRAW |
| PlayerText:0xFFFF | INVALID\_PLAYER\_TEXT\_DRAW |
| \-1 | INVALID\_GANG\_ZONE |
| Text3D:0xFFFF | INVALID\_3DTEXT\_ID |
| PlayerText3D:0xFFFF | INVALID\_PLAYER\_3DTEXT\_ID |

## Weapon Constants

| Value | Weapon | Constant |
| --- | --- | --- |
| 0 | Fist | WEAPON\_FIST |
| 1 | Brass Knuckles | WEAPON\_BRASSKNUCKLE |
| 2 | Golf Club | WEAPON\_GOLFCLUB |
| 3 | Nite stick | WEAPON\_NITESTICK |
| 4 | Knife | WEAPON\_KNIFE |
| 5 | Baseball Bat | WEAPON\_BAT |
| 6 | Shovel | WEAPON\_SHOVEL |
| 7 | Pool Cue | WEAPON\_POOLSTICK |
| 8 | Katana | WEAPON\_KATANA |
| 9 | Chainsaw | WEAPON\_CHAINSAW |
| 10 | Dildo | WEAPON\_DILDO |
| 11 | Dildo | WEAPON\_DILDO2 |
| 12 | Vibrator | WEAPON\_VIBRATOR |
| 13 | Vibrator | WEAPON\_VIBRATOR2 |
| 14 | Flower | WEAPON\_FLOWER |
| 15 | Cane | WEAPON\_CANE |
| 16 | Grenade | WEAPON\_GRENADE |
| 17 | Teargas | WEAPON\_TEARGAS |
| 18 | Molotov Cocktail | WEAPON\_MOLTOV |
| 22 | Colt 45 | WEAPON\_COLT45 |
| 23 | Silenced Pistol | WEAPON\_SILENCED |
| 24 | Desert Eagle | WEAPON\_DEAGLE |
| 25 | Shotgun | WEAPON\_SHOTGUN |
| 26 | Sawn-off Shotgun | WEAPON\_SAWEDOFF |
| 27 | Combat Shotgun | WEAPON\_SHOTGSPA |
| 28 | UZI | WEAPON\_UZI |
| 29 | MP5 | WEAPON\_MP5 |
| 30 | AK-47 | WEAPON\_AK47 |
| 31 | M4 | WEAPON\_M4 |
| 32 | TEC9 | WEAPON\_TEC9 |
| 33 | Rifle | WEAPON\_RIFLE |
| 34 | Sniper Rifle | WEAPON\_SNIPER |
| 35 | Rocket Launcher | WEAPON\_ROCKETLAUNCHER |
| 36 | Heat Seeker | WEAPON\_HEATSEEKER |
| 37 | Flamethrower | WEAPON\_FLAMETHROWER |
| 38 | Minigun | WEAPON\_MINIGUN |
| 39 | Satchel Explosives | WEAPON\_SATCHEL |
| 40 | Bomb | WEAPON\_BOMB |
| 41 | Spray Can | WEAPON\_SPRAYCAN |
| 42 | Fire Extinguisher | WEAPON\_FIREEXTINGUISHER |
| 43 | Camera | WEAPON\_CAMERA |
| 46 | Parachute | WEAPON\_PARACHUTE |
| 49 | Vehicle | WEAPON\_VEHICLE |
| 53 | Drowned | WEAPON\_DROWN |
| 54 | Splat | WEAPON\_COLLISION |

## Marker Modes

| Value | Constant |
| --- | --- |
| 0 | PLAYER\_MARKERS\_MODE\_OFF |
| 1 | PLAYER\_MARKERS\_MODE\_GLOBAL |
| 2 | PLAYER\_MARKERS\_MODE\_STREAMED |

## Keys

| Value | Constant |
| --- | --- |
| 1 | KEY\_ACTION |
| 2 | KEY\_CROUCH |
| 4 | KEY\_FIRE |
| 8 | KEY\_SPRINT |
| 16 | KEY\_SECONDARY\_ATTACK |
| 32 | KEY\_JUMP |
| 64 | KEY\_LOOK\_RIGHT |
| 128 | KEY\_HANDBRAKE |
| 256 | KEY\_LOOK\_LEFT |
| 512 | KEY\_SUBMISSION |
| 512 | KEY\_LOOK\_BEHIND |
| 1024 | KEY\_WALK |
| 2048 | KEY\_ANALOG\_UP |
| 4096 | KEY\_ANALOG\_DOWN |
| 8192 | KEY\_ANALOG\_LEFT |
| 16384 | KEY\_ANALOG\_RIGHT |
| 65536 | KEY\_YES |
| 131072 | KEY\_NO |
| 262144 | KEY\_CTRL\_BACK |

## Dialog Styles

| Value | Constant |
| --- | --- |
| 0 | DIALOG\_STYLE\_MSGBOX |
| 1 | DIALOG\_STYLE\_INPUT |
| 2 | DIALOG\_STYLE\_LIST |
| 3 | DIALOG\_STYLE\_PASSWORD |
| 4 | DIALOG\_STYLE\_TABLIST |
| 5 | DIALOG\_STYLE\_TABLIST\_HEADERS |

## TextDraw Fonts

| Value | Constant |
| --- | --- |
| 0 | TEXT\_DRAW\_FONT\_0 |
| 1 | TEXT\_DRAW\_FONT\_1 |
| 2 | TEXT\_DRAW\_FONT\_2 |
| 3 | TEXT\_DRAW\_FONT\_3 |
| 4 | TEXT\_DRAW\_FONT\_SPRITE\_DRAW |
| 5 | TEXT\_DRAW\_FONT\_MODEL\_PREVIEW |

## TextDraw Fonts (From open.mp)

| Value | Constant |
| --- | --- |
| 0 | TEXT\_DRAW\_FONT\_BECKETT\_REGULAR |
| 1 | TEXT\_DRAW\_FONT\_AHARONI\_BOLD |
| 2 | TEXT\_DRAW\_FONT\_BANK\_GOTHIC |
| 3 | TEXT\_DRAW\_FONT\_PRICEDOWN |
| 4 | TEXT\_DRAW\_FONT\_SPRITE |
| 5 | TEXT\_DRAW\_FONT\_PREVIEW |

## TextDraw Alignment

| Value | Constant |
| --- | --- |
| 1 | TEXT\_DRAW\_ALIGN\_LEFT |
| 2 | TEXT\_DRAW\_ALIGN\_CENTRE |
| 2 | TEXT\_DRAW\_ALIGN\_CENTER |
| 3 | TEXT\_DRAW\_ALIGN\_RIGHT |

## SVar Enumeration

| Value | Constant |
| --- | --- |
| 0 | SERVER\_VARTYPE\_NONE |
| 1 | SERVER\_VARTYPE\_INT |
| 2 | SERVER\_VARTYPE\_STRING |
| 3 | SERVER\_VARTYPE\_FLOAT |

## Artwork / Net Models

| Value | Constant |
| --- | --- |
| 0 | DOWNLOAD\_REQUEST\_EMPTY |
| 1 | DOWNLOAD\_REQUEST\_MODEL\_FILE |
| 2 | DOWNLOAD\_REQUEST\_TEXTURE\_FILE |

## Click Sources

| Value | Constant |
| --- | --- |
| 0 | CLICK\_SOURCE\_SCOREBOARD |

## Edit Response Types

| Value | Constant |
| --- | --- |
| 0 | EDIT\_RESPONSE\_CANCEL |
| 1 | EDIT\_RESPONSE\_FINAL |
| 2 | EDIT\_RESPONSE\_UPDATE |

## Select Object Types

| Value | Constant |
| --- | --- |
| 1 | SELECT\_OBJECT\_GLOBAL\_OBJECT |
| 2 | SELECT\_OBJECT\_PLAYER\_OBJECT |

## Bullet Hit Types

| Value | Constant |
| --- | --- |
| 0 | BULLET\_HIT\_TYPE\_NONE |
| 1 | BULLET\_HIT\_TYPE\_PLAYER |
| 2 | BULLET\_HIT\_TYPE\_VEHICLE |
| 3 | BULLET\_HIT\_TYPE\_OBJECT |
| 4 | BULLET\_HIT\_TYPE\_PLAYER\_OBJECT |

# a\_players

## Limits

| Value | Constant |
| --- | --- |
| 10 | MAX\_PLAYER\_ATTACHED\_OBJECTS |
| 144 | MAX\_CHATBUBBLE\_LENGTH |

## Special Actions

| Value | Constant |
| --- | --- |
| 0 | SPECIAL\_ACTION\_NONE |
| 1 | SPECIAL\_ACTION\_DUCK |
| 2 | SPECIAL\_ACTION\_USEJETPACK |
| 3 | SPECIAL\_ACTION\_ENTER\_VEHICLE |
| 4 | SPECIAL\_ACTION\_EXIT\_VEHICLE |
| 5 | SPECIAL\_ACTION\_DANCE1 |
| 6 | SPECIAL\_ACTION\_DANCE2 |
| 7 | SPECIAL\_ACTION\_DANCE3 |
| 8 | SPECIAL\_ACTION\_DANCE4 |
| 10 | SPECIAL\_ACTION\_HANDSUP |
| 11 | SPECIAL\_ACTION\_USECELLPHONE |
| 12 | SPECIAL\_ACTION\_SITTING |
| 13 | SPECIAL\_ACTION\_STOPUSECELLPHONE |
| 20 | SPECIAL\_ACTION\_DRINK\_BEER |
| 21 | SPECIAL\_ACTION\_SMOKE\_CIGGY |
| 22 | SPECIAL\_ACTION\_DRINK\_WINE |
| 23 | SPECIAL\_ACTION\_DRINK\_SPRUNK |
| 24 | SPECIAL\_ACTION\_CUFFED |
| 25 | SPECIAL\_ACTION\_CARRY |
| 68 | SPECIAL\_ACTION\_PISSING |

## Fighting Styles

| Value | Constant |
| --- | --- |
| 4 | FIGHT\_STYLE\_NORMAL |
| 5 | FIGHT\_STYLE\_BOXING |
| 6 | FIGHT\_STYLE\_KUNGFU |
| 7 | FIGHT\_STYLE\_KNEEHEAD |
| 15 | FIGHT\_STYLE\_GRABKICK |
| 16 | FIGHT\_STYLE\_ELBOW |

## Weapon Skills

| Value | Constant |
| --- | --- |
| 0 | WEAPONSKILL\_PISTOL |
| 1 | WEAPONSKILL\_PISTOL\_SILENCED |
| 2 | WEAPONSKILL\_DESERT\_EAGLE |
| 3 | WEAPONSKILL\_SHOTGUN |
| 4 | WEAPONSKILL\_SAWNOFF\_SHOTGUN |
| 5 | WEAPONSKILL\_SPAS12\_SHOTGUN |
| 6 | WEAPONSKILL\_MICRO\_UZI |
| 7 | WEAPONSKILL\_MP5 |
| 8 | WEAPONSKILL\_AK47 |
| 9 | WEAPONSKILL\_M4 |
| 10 | WEAPONSKILL\_SNIPERRIFLE |

## Weapon States

| Value | Constant |
| --- | --- |
| \-1 | WEAPONSTATE\_UNKNOWN |
| 0 | WEAPONSTATE\_NO\_BULLETS |
| 1 | WEAPONSTATE\_LAST\_BULLET |
| 2 | WEAPONSTATE\_MORE\_BULLETS |
| 3 | WEAPONSTATE\_RELOADING |

## PVar Enumeration

| Value | Constant |
| --- | --- |
| 0 | PLAYER\_VARTYPE\_NONE |
| 1 | PLAYER\_VARTYPE\_INT |
| 2 | PLAYER\_VARTYPE\_STRING |
| 3 | PLAYER\_VARTYPE\_FLOAT |

## Map Icon Styles

| Value | Constant |
| --- | --- |
| 0 | MAPICON\_LOCAL |
| 1 | MAPICON\_GLOBAL |
| 2 | MAPICON\_LOCAL\_CHECKPOINT |
| 3 | MAPICON\_GLOBAL\_CHECKPOINT |

## Camera Cut Styles

| Value | Constant |
| --- | --- |
| 1 | CAMERA\_MOVE |
| 2 | CAMERA\_CUT |

## Spectate Modes

| Value | Constant |
| --- | --- |
| 1 | SPECTATE\_MODE\_NORMAL |
| 2 | SPECTATE\_MODE\_FIXED |
| 3 | SPECTATE\_MODE\_SIDE |

## Recording for NPC playback

| Value | Constant |
| --- | --- |
| 0 | PLAYER\_RECORDING\_TYPE\_NONE |
| 1 | PLAYER\_RECORDING\_TYPE\_DRIVER |
| 2 | PLAYER\_RECORDING\_TYPE\_ONFOOT |

# a\_vehicles

## Car Mod Type

| Value | Constant |
| --- | --- |
| 0 | CARMODTYPE\_SPOILER |
| 1 | CARMODTYPE\_HOOD |
| 2 | CARMODTYPE\_ROOF |
| 3 | CARMODTYPE\_SIDESKIRT |
| 4 | CARMODTYPE\_LAMPS |
| 5 | CARMODTYPE\_NITRO |
| 6 | CARMODTYPE\_EXHAUST |
| 7 | CARMODTYPE\_WHEELS |
| 8 | CARMODTYPE\_STEREO |
| 9 | CARMODTYPE\_HYDRAULICS |
| 10 | CARMODTYPE\_FRONT\_BUMPER |
| 11 | CARMODTYPE\_REAR\_BUMPER |
| 12 | CARMODTYPE\_VENT\_RIGHT |
| 13 | CARMODTYPE\_VENT\_LEFT |

## Vehicle Params

| Value | Constant |
| --- | --- |
| \-1 | VEHICLE\_PARAMS\_UNSET |
| 0 | VEHICLE\_PARAMS\_OFF |
| 1 | VEHICLE\_PARAMS\_ON |

## Vehicle Model Info

| Value | Constant |
| --- | --- |
| 1 | VEHICLE\_MODEL\_INFO\_SIZE |
| 2 | VEHICLE\_MODEL\_INFO\_FRONTSEAT |
| 3 | VEHICLE\_MODEL\_INFO\_REARSEAT |
| 4 | VEHICLE\_MODEL\_INFO\_PETROLCAP |
| 5 | VEHICLE\_MODEL\_INFO\_WHEELSFRONT |
| 6 | VEHICLE\_MODEL\_INFO\_WHEELSREAR |
| 7 | VEHICLE\_MODEL\_INFO\_WHEELSMID |
| 8 | VEHICLE\_MODEL\_INFO\_FRONT\_BUMPER\_Z |
| 9 | VEHICLE\_MODEL\_INFO\_REAR\_BUMPER\_Z |

# a\_objects

## Object Material Text Size

| Value | Constant |
| --- | --- |
| 10 | OBJECT\_MATERIAL\_SIZE\_32x32 |
| 20 | OBJECT\_MATERIAL\_SIZE\_64x32 |
| 30 | OBJECT\_MATERIAL\_SIZE\_64x64 |
| 40 | OBJECT\_MATERIAL\_SIZE\_128x32 |
| 50 | OBJECT\_MATERIAL\_SIZE\_128x64 |
| 60 | OBJECT\_MATERIAL\_SIZE\_128x128 |
| 70 | OBJECT\_MATERIAL\_SIZE\_256x32 |
| 80 | OBJECT\_MATERIAL\_SIZE\_256x64 |
| 90 | OBJECT\_MATERIAL\_SIZE\_256x128 |
| 100 | OBJECT\_MATERIAL\_SIZE\_256x256 |
| 110 | OBJECT\_MATERIAL\_SIZE\_512x64 |
| 120 | OBJECT\_MATERIAL\_SIZE\_512x128 |
| 130 | OBJECT\_MATERIAL\_SIZE\_512x256 |
| 140 | OBJECT\_MATERIAL\_SIZE\_512x512 |

## Object Material Text Alignment

| Value | Constant |
| --- | --- |
| 0 | OBJECT\_MATERIAL\_TEXT\_ALIGN\_LEFT |
| 1 | OBJECT\_MATERIAL\_TEXT\_ALIGN\_CENTER |
| 2 | OBJECT\_MATERIAL\_TEXT\_ALIGN\_RIGHT |

# a\_http

| Value | Constant |
| --- | --- |
| 1 | HTTP\_ERROR\_BAD\_HOST |
| 2 | HTTP\_ERROR\_NO\_SOCKET |
| 3 | HTTP\_ERROR\_CANT\_CONNECT |
| 4 | HTTP\_ERROR\_CANT\_WRITE |
| 5 | HTTP\_ERROR\_CONTENT\_TOO\_BIG |
| 6 | HTTP\_ERROR\_MALFORMED\_RESPONSE |
