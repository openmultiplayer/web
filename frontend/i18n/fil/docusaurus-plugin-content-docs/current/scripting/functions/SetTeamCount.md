---
title: SetTeamCount
sidebar_label: SetTeamCount
description: Ginagamit ang function na ito upang baguhin ang dami ng mga team na ginamit sa gamemode.
tags: []
---

## Description

Ginagamit ang function na ito upang baguhin ang dami ng mga team na ginamit sa gamemode. Wala itong malinaw na paraan ng paggamit, ngunit makakatulong upang ipahiwatig ang bilang ng mga koponan na ginamit para sa mas mahusay (mas epektibo) panloob na paghawak. Ang function na ito ay dapat lamang gamitin sa OnGameModeInit callback. Mahalaga: Maaari kang pumasa ng 2 bilyon dito kung gusto mo, walang epekto ang function na ito.

| Name  | Description                         |
| ----- | ----------------------------------- |
| teams | Bilang ng mga koponan na alam ng gamemode.|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnGameModeInit( )
{
    // Gumagamit kami ng 18 team sa paggamit na ito ng Team-Deathmatch mode, tukuyin ito;
    SetTeamCount(18);
    return 1;
}
```

## Related Functions

- [GetPlayerTeam](GetPlayerTeam): Suriin kung nasaang koponan ang isang manlalaro.
- [SetPlayerTeam](SetPlayerTeam): Magtakda ng koponan ng manlalaro.