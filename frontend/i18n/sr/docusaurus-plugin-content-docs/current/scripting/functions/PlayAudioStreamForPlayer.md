---
title: PlayAudioStreamForPlayer
description: Пушта аудио стрим играчу.
tags: ["player"]
---

## Description

Пушта аудио стрим играчу. Аудио фајлови такође раде (npr. .mp3).


| Name           | Description                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| playerid       | ID играча коме се пушта аудио.                                                                                 |
| const url[]    | Линк који се пушта. Правилни формати су mp3 и ogg/vorbis. Линк ка .pls фајлу (плејлиста) ће пустити плејлисту. |
| Float:PosX     | Позиција X на којој се пушта аудио. 'Default' 0.0. Нема ефекта осим ако је usepos подешен на 1.                |
| Float:PosY     | Позиција Y на којој се пушта аудио. 'Default' 0.0. Нема ефекта осим ако је usepos подешен на 1.                |
| Float:PosZ     | Позиција Z на којој се пушта аудио. 'Default' 0.0. Нема ефекта осим ако је usepos подешен на 1.                |
| Float:distance | Раздаљина до које се чује аудио. Нема ефекта осим ако је usepos подешен на 1.                                  |
| bool:usepos    | Користи постављену позицију и дистанцу. Подразумевано је неактиван (0).                                        |

## Враћа

**true** - Функција успешно извршена.

**false** - Функциај није успешно извршена. Дати играч не постоји.

## Примери

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:X, Float:Y, Float:Z, Float:Distance = 5.0;
        GetPlayerPos(playerid, X, Y, Z);
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", X, Y, Z, Distance, 1);
        return 1;
    }
    return 0;
}
```

## Сличне фунције

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer.md): Зауставља аудио стрим за играча.
- [PlayerPlaySound](PlayerPlaySound.md): Пушта звук играчу.
