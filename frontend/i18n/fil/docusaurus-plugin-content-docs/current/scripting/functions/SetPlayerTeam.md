---
title: SetPlayerTeam
sidebar_label: SetPlayerTeam
description: Itakda ang koponan ng isang manlalaro.
tags: ["player"]
---

## Description

Itakda ang koponan ng isang manlalaro.

| Name     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| playerid | Ang ID ng player na gusto mong itakda ang koponan.                             |
| teamid   | Ang koponan na ilalagay ang manlalaro. Gamitin ang NO_TEAM upang alisin ang manlalaro mula sa anumang koponan. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // Itakda ang koponan ng isang manlalaro sa 4 kapag sila ay nangitlog
    SetPlayerTeam(playerid, 4);
    return 1;
}
```

## Notes

:::tip

Ang mga manlalaro ay hindi maaaring makapinsala/makapatay ng mga manlalaro sa parehong koponan maliban kung gagamit sila ng kutsilyo upang laslasin ang kanilang lalamunan. Sa SA-MP 0.3x, ang mga manlalaro ay hindi rin makakasira ng mga sasakyang minamaneho ng isang manlalaro mula sa parehong koponan. Maaari itong paganahin sa EnableVehicleFriendlyFire. Ang 255 (o NO_TEAM) ay ang default na koponan na makakapag-shoot ng iba pang mga manlalaro, hindi 0.

:::

## Related Functions

- [GetPlayerTeam](GetPlayerTeam): Suriin kung nasaang koponan ang isang manlalaro.
- [SetTeamCount](SetTeamCount): Itakda ang bilang ng mga team na available.
- [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire): I-enable ang friendly fire para sa mga sasakyan ng team.