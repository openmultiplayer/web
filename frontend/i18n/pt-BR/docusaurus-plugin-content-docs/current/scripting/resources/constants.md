---
title: Constantes
sidebar_label: Constantes
description: Uma lista de todas as definições de constantes da biblioteca padrão.
tags: []
---

# a_samp

## Limites

| Valor             | Constante             |
| ----------------- | --------------------- |
| 24                | MAX_PLAYER_NAME       |
| 1000              | MAX_PLAYERS           |
| 2000              | MAX_VEHICLES          |
| 1000              | MAX_ACTORS            |
| 1000              | MAX_OBJECTS           |
| 1024              | MAX_GANG_ZONES        |
| Text:2048         | MAX_TEXT_DRAWS        |
| PlayerText:256    | MAX_PLAYER_TEXT_DRAWS |
| Menu:128          | MAX_MENUS             |
| Text3D:1024       | MAX_3DTEXT_GLOBAL     |
| PlayerText3D:1024 | MAX_3DTEXT_PLAYER     |
| 4096              | MAX_PICKUPS           |

## Constantes Inválidas

| Valor               | Constante                |
| ------------------- | ------------------------ |
| 255                 | NO_TEAM                  |
| 0xFFFF              | INVALID_PLAYER_ID        |
| 0xFFFF              | INVALID_VEHICLE_ID       |
| 0xFFFF              | INVALID_ACTOR_ID         |
| 0xFFFF              | INVALID_OBJECT_ID        |
| Menu:0xFF           | INVALID_MENU             |
| Text:0xFFFF         | INVALID_TEXT_DRAW        |
| PlayerText:0xFFFF   | INVALID_PLAYER_TEXT_DRAW |
| -1                  | INVALID_GANG_ZONE        |
| Text3D:0xFFFF       | INVALID_3DTEXT_ID        |
| PlayerText3D:0xFFFF | INVALID_PLAYER_3DTEXT_ID |

## Constantes de Armas

| Valor | Arma               | Constante               |
| ----- | ------------------ | ----------------------- |
| 0     | Fist               | WEAPON_FIST             |
| 1     | Brass Knuckles     | WEAPON_BRASSKNUCKLE     |
| 2     | Golf Club          | WEAPON_GOLFCLUB         |
| 3     | Nite stick         | WEAPON_NITESTICK        |
| 4     | Knife              | WEAPON_KNIFE            |
| 5     | Baseball Bat       | WEAPON_BAT              |
| 6     | Shovel             | WEAPON_SHOVEL           |
| 7     | Pool Cue           | WEAPON_POOLSTICK        |
| 8     | Katana             | WEAPON_KATANA           |
| 9     | Chainsaw           | WEAPON_CHAINSAW         |
| 10    | Dildo              | WEAPON_DILDO            |
| 11    | Dildo              | WEAPON_DILDO2           |
| 12    | Vibrator           | WEAPON_VIBRATOR         |
| 13    | Vibrator           | WEAPON_VIBRATOR2        |
| 14    | Flower             | WEAPON_FLOWER           |
| 15    | Cane               | WEAPON_CANE             |
| 16    | Grenade            | WEAPON_GRENADE          |
| 17    | Teargas            | WEAPON_TEARGAS          |
| 18    | Molotov Cocktail   | WEAPON_MOLTOV           |
| 22    | Colt 45            | WEAPON_COLT45           |
| 23    | Silenced Pistol    | WEAPON_SILENCED         |
| 24    | Desert Eagle       | WEAPON_DEAGLE           |
| 25    | Shotgun            | WEAPON_SHOTGUN          |
| 26    | Sawn-off Shotgun   | WEAPON_SAWEDOFF         |
| 27    | Combat Shotgun     | WEAPON_SHOTGSPA         |
| 28    | UZI                | WEAPON_UZI              |
| 29    | MP5                | WEAPON_MP5              |
| 30    | AK-47              | WEAPON_AK47             |
| 31    | M4                 | WEAPON_M4               |
| 32    | TEC9               | WEAPON_TEC9             |
| 33    | Rifle              | WEAPON_RIFLE            |
| 34    | Sniper Rifle       | WEAPON_SNIPER           |
| 35    | Roocket Launcher   | WEAPON_ROCKETLAUNCHER   |
| 36    | Heat Seeker        | WEAPON_HEATSEEKER       |
| 37    | Flamethrower       | WEAPON_FLAMETHROWER     |
| 38    | Minigun            | WEAPON_MINIGUN          |
| 39    | Satchel Explosives | WEAPON_SATCHEL          |
| 40    | Bomb               | WEAPON_BOMB             |
| 41    | Spray Can          | WEAPON_SPRAYCAN         |
| 42    | Fire Extinguisher  | WEAPON_FIREEXTINGUISHER |
| 43    | Camera             | WEAPON_CAMERA           |
| 46    | Parachute          | WEAPON_PARACHUTE        |
| 49    | Vehicle            | WEAPON_VEHICLE          |
| 53    | Drowned            | WEAPON_DROWN            |
| 54    | Splat              | WEAPON_COLLISION        |

## Modos de Marcador

| Valor | Constante                    |
| ----- | ---------------------------- |
| 0     | PLAYER_MARKERS_MODE_OFF      |
| 1     | PLAYER_MARKERS_MODE_GLOBAL   |
| 2     | PLAYER_MARKERS_MODE_STREAMED |

## Teclas

| Valor  | Constante            |
| ------ | -------------------- |
| 1      | KEY_ACTION           |
| 2      | KEY_CROUCH           |
| 4      | KEY_FIRE             |
| 8      | KEY_SPRINT           |
| 16     | KEY_SECONDARY_ATTACK |
| 32     | KEY_JUMP             |
| 64     | KEY_LOOK_RIGHT       |
| 128    | KEY_HANDBRAKE        |
| 256    | KEY_LOOK_LEFT        |
| 512    | KEY_SUBMISSION       |
| 512    | KEY_LOOK_BEHIND      |
| 1024   | KEY_WALK             |
| 2048   | KEY_ANALOG_UP        |
| 4096   | KEY_ANALOG_DOWN      |
| 8192   | KEY_ANALOG_LEFT      |
| 16384  | KEY_ANALOG_RIGHT     |
| 65536  | KEY_YES              |
| 131072 | KEY_NO               |
| 262144 | KEY_CTRL_BACK        |

## Estilos de Diálogo

| Valor | Constante                    |
| ----- | ---------------------------- |
| 0     | DIALOG_STYLE_MSGBOX          |
| 1     | DIALOG_STYLE_INPUT           |
| 2     | DIALOG_STYLE_LIST            |
| 3     | DIALOG_STYLE_PASSWORD        |
| 4     | DIALOG_STYLE_TABLIST         |
| 5     | DIALOG_STYLE_TABLIST_HEADERS |

## Fontes do TextDraw

| Valor | Constante                    |
| ----- | ---------------------------- |
| 0     | TEXT_DRAW_FONT_0             |
| 1     | TEXT_DRAW_FONT_1             |
| 2     | TEXT_DRAW_FONT_2             |
| 3     | TEXT_DRAW_FONT_3             |
| 4     | TEXT_DRAW_FONT_SPRITE_DRAW   |
| 5     | TEXT_DRAW_FONT_MODEL_PREVIEW |

## Fontes do TextDraw (Do open.mp)

| Valor | Constante                      |
| ----- | ------------------------------ |
| 0     | TEXT_DRAW_FONT_BECKETT_REGULAR |
| 1     | TEXT_DRAW_FONT_AHARONI_BOLD    |
| 2     | TEXT_DRAW_FONT_BANK_GOTHIC     |
| 3     | TEXT_DRAW_FONT_PRICEDOWN       |
| 4     | TEXT_DRAW_FONT_SPRITE          |
| 5     | TEXT_DRAW_FONT_PREVIEW         |

## Alinhamento do TextDraw

| Valor | Constante              |
| ----- | ---------------------- |
| 1     | TEXT_DRAW_ALIGN_LEFT   |
| 2     | TEXT_DRAW_ALIGN_CENTRE |
| 2     | TEXT_DRAW_ALIGN_CENTER |
| 3     | TEXT_DRAW_ALIGN_RIGHT  |

## Enumeração SVar

| Valor | Constante             |
| ----- | --------------------- |
| 0     | SERVER_VARTYPE_NONE   |
| 1     | SERVER_VARTYPE_INT    |
| 2     | SERVER_VARTYPE_STRING |
| 3     | SERVER_VARTYPE_FLOAT  |

## Artwork / Net Models

| Valor | Constante                     |
| ----- | ----------------------------- |
| 0     | DOWNLOAD_REQUEST_EMPTY        |
| 1     | DOWNLOAD_REQUEST_MODEL_FILE   |
| 2     | DOWNLOAD_REQUEST_TEXTURE_FILE |

## Fontes de Clique

| Valor | Constante               |
| ----- | ----------------------- |
| 0     | CLICK_SOURCE_SCOREBOARD |

## Tipos de Resposta de Edição

| Valor | Constante            |
| ----- | -------------------- |
| 0     | EDIT_RESPONSE_CANCEL |
| 1     | EDIT_RESPONSE_FINAL  |
| 2     | EDIT_RESPONSE_UPDATE |

## Tipos de Objeto Selecionado

| Valor | Constante                   |
| ----- | --------------------------- |
| 1     | SELECT_OBJECT_GLOBAL_OBJECT |
| 2     | SELECT_OBJECT_PLAYER_OBJECT |

## Tipos de Acerto de Bala

| Valor | Constante                     |
| ----- | ----------------------------- |
| 0     | BULLET_HIT_TYPE_NONE          |
| 1     | BULLET_HIT_TYPE_PLAYER        |
| 2     | BULLET_HIT_TYPE_VEHICLE       |
| 3     | BULLET_HIT_TYPE_OBJECT        |
| 4     | BULLET_HIT_TYPE_PLAYER_OBJECT |

# a_players

## Limites

| Valor | Constante                   |
| ----- | --------------------------- |
| 10    | MAX_PLAYER_ATTACHED_OBJECTS |
| 144   | MAX_CHATBUBBLE_LENGTH       |

## Ações Especiais

| Valor | Constante                       |
| ----- | ------------------------------- |
| 0     | SPECIAL_ACTION_NONE             |
| 1     | SPECIAL_ACTION_DUCK             |
| 2     | SPECIAL_ACTION_USEJETPACK       |
| 3     | SPECIAL_ACTION_ENTER_VEHICLE    |
| 4     | SPECIAL_ACTION_EXIT_VEHICLE     |
| 5     | SPECIAL_ACTION_DANCE1           |
| 6     | SPECIAL_ACTION_DANCE2           |
| 7     | SPECIAL_ACTION_DANCE3           |
| 8     | SPECIAL_ACTION_DANCE4           |
| 10    | SPECIAL_ACTION_HANDSUP          |
| 11    | SPECIAL_ACTION_USECELLPHONE     |
| 12    | SPECIAL_ACTION_SITTING          |
| 13    | SPECIAL_ACTION_STOPUSECELLPHONE |
| 20    | SPECIAL_ACTION_DRINK_BEER       |
| 21    | SPECIAL_ACTION_SMOKE_CIGGY      |
| 22    | SPECIAL_ACTION_DRINK_WINE       |
| 23    | SPECIAL_ACTION_DRINK_SPRUNK     |
| 24    | SPECIAL_ACTION_CUFFED           |
| 25    | SPECIAL_ACTION_CARRY            |
| 68    | SPECIAL_ACTION_PISSING          |

## Estilos de Luta

| Valor | Constante            |
| ----- | -------------------- |
| 0     | FIGHT_STYLE_NORMAL   |
| 1     | FIGHT_STYLE_BOXING   |
| 2     | FIGHT_STYLE_KUNGFU   |
| 3     | FIGHT_STYLE_KNEEHEAD |
| 4     | FIGHT_STYLE_GRABKICK |
| 5     | FIGHT_STYLE_ELBOW    |

## Habilidades com Armas

| Valor | Constante                   |
| ----- | --------------------------- |
| 0     | WEAPONSKILL_PISTOL          |
| 1     | WEAPONSKILL_PISTOL_SILENCED |
| 2     | WEAPONSKILL_DESERT_EAGLE    |
| 3     | WEAPONSKILL_SHOTGUN         |
| 4     | WEAPONSKILL_SAWNOFF_SHOTGUN |
| 5     | WEAPONSKILL_SPAS12_SHOTGUN  |
| 6     | WEAPONSKILL_MICRO_UZI       |
| 7     | WEAPONSKILL_MP5             |
| 8     | WEAPONSKILL_AK47            |
| 9     | WEAPONSKILL_M4              |
| 10    | WEAPONSKILL_SNIPERRIFLE     |

## Estados de Arma

| Valor | Constante                |
| ----- | ------------------------ |
| -1    | WEAPONSTATE_UNKNOWN      |
| 0     | WEAPONSTATE_NO_BULLETS   |
| 1     | WEAPONSTATE_LAST_BULLET  |
| 2     | WEAPONSTATE_MORE_BULLETS |
| 3     | WEAPONSTATE_RELOADING    |

## Enumeração PVar

| Valor | Constante             |
| ----- | --------------------- |
| 0     | PLAYER_VARTYPE_NONE   |
| 1     | PLAYER_VARTYPE_INT    |
| 2     | PLAYER_VARTYPE_STRING |
| 3     | PLAYER_VARTYPE_FLOAT  |

## Estilos de Ícone de Mapa

| Valor | Constante                 |
| ----- | ------------------------- |
| 0     | MAPICON_LOCAL             |
| 1     | MAPICON_GLOBAL            |
| 2     | MAPICON_LOCAL_CHECKPOINT  |
| 3     | MAPICON_GLOBAL_CHECKPOINT |

## Estilos de Corte de Câmera

| Valor | Constante   |
| ----- | ----------- |
| 1     | CAMERA_MOVE |
| 2     | CAMERA_CUT  |

## Modos de Espectador

| Valor | Constante            |
| ----- | -------------------- |
| 1     | SPECTATE_MODE_NORMAL |
| 2     | SPECTATE_MODE_FIXED  |
| 3     | SPECTATE_MODE_SIDE   |

## Gravação para reprodução de NPC

| Valor | Constante                    |
| ----- | ---------------------------- |
| 1     | PLAYER_RECORDING_TYPE_NONE   |
| 2     | PLAYER_RECORDING_TYPE_DRIVER |
| 3     | PLAYER_RECORDING_TYPE_ONFOOT |

# a_vehicles

## Tipo de Modificação de Carro

| Valor | Constante               |
| ----- | ----------------------- |
| 0     | CARMODTYPE_SPOILER      |
| 1     | CARMODTYPE_HOOD         |
| 2     | CARMODTYPE_ROOF         |
| 3     | CARMODTYPE_SIDESKIRT    |
| 4     | CARMODTYPE_LAMPS        |
| 5     | CARMODTYPE_NITRO        |
| 6     | CARMODTYPE_EXHAUST      |
| 7     | CARMODTYPE_WHEELS       |
| 8     | CARMODTYPE_STEREO       |
| 9     | CARMODTYPE_HYDRAULICS   |
| 10    | CARMODTYPE_FRONT_BUMPER |
| 11    | CARMODTYPE_REAR_BUMPER  |
| 12    | CARMODTYPE_VENT_RIGHT   |
| 13    | CARMODTYPE_VENT_LEFT    |

## Parâmetros de Veículo

| Valor | Constante            |
| ----- | -------------------- |
| 0     | VEHICLE_PARAMS_UNSET |
| 1     | VEHICLE_PARAMS_OFF   |
| 2     | VEHICLE_PARAMS_ON    |

## Informações do Modelo de Veículo

| Valor | Constante                         |
| ----- | --------------------------------- |
| 1     | VEHICLE_MODEL_INFO_SIZE           |
| 2     | VEHICLE_MODEL_INFO_FRONTSEAT      |
| 3     | VEHICLE_MODEL_INFO_REARSEAT       |
| 4     | VEHICLE_MODEL_INFO_PETROLCAP      |
| 5     | VEHICLE_MODEL_INFO_WHEELSFRONT    |
| 6     | VEHICLE_MODEL_INFO_WHEELSREAR     |
| 7     | VEHICLE_MODEL_INFO_WHEELSMID      |
| 8     | VEHICLE_MODEL_INFO_FRONT_BUMPER_Z |
| 9     | VEHICLE_MODEL_INFO_REAR_BUMPER_Z  |

# a_objects

## Tamanho de Texto de Material de Objeto

| Valor | Constante                    |
| ----- | ---------------------------- |
| 10    | OBJECT_MATERIAL_SIZE_32x32   |
| 20    | OBJECT_MATERIAL_SIZE_64x32   |
| 30    | OBJECT_MATERIAL_SIZE_64x64   |
| 40    | OBJECT_MATERIAL_SIZE_128x32  |
| 50    | OBJECT_MATERIAL_SIZE_128x64  |
| 60    | OBJECT_MATERIAL_SIZE_128x128 |
| 70    | OBJECT_MATERIAL_SIZE_256x32  |
| 80    | OBJECT_MATERIAL_SIZE_256x64  |
| 90    | OBJECT_MATERIAL_SIZE_256x128 |
| 100   | OBJECT_MATERIAL_SIZE_256x256 |
| 110   | OBJECT_MATERIAL_SIZE_512x64  |
| 120   | OBJECT_MATERIAL_SIZE_512x128 |
| 130   | OBJECT_MATERIAL_SIZE_512x256 |
| 140   | OBJECT_MATERIAL_SIZE_512x512 |

## Alinhamento de Texto de Material de Objeto

| Valor | Constante                         |
| ----- | --------------------------------- |
| 0     | OBJECT_MATERIAL_TEXT_ALIGN_LEFT   |
| 1     | OBJECT_MATERIAL_TEXT_ALIGN_CENTER |
| 2     | OBJECT_MATERIAL_TEXT_ALIGN_RIGHT  |

# a_http

| Valor | Constante                     |
| ----- | ----------------------------- |
| 1     | HTTP_ERROR_BAD_HOST           |
| 2     | HTTP_ERROR_NO_SOCKET          |
| 3     | HTTP_ERROR_CANT_CONNECT       |
| 4     | HTTP_ERROR_CANT_WRITE         |
| 5     | HTTP_ERROR_CONTENT_TOO_BIG    |
| 6     | HTTP_ERROR_MALFORMED_RESPONSE |
