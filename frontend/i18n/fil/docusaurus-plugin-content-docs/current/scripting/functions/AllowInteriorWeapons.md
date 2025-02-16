---
title: AllowInteriorWeapons
sidebar_label: AllowInteriorWeapons
description: I-toggle kung pinapayagan o hindi ang paggamit ng mga armas sa interior.
tags: []
---

## Description

I-toggle kung pinapayagan o hindi ang paggamit ng mga armas sa interior.

| Name  | Description                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| allow | 1 upang paganahin ang mga armas sa mga interior (naka-enable bilang default), 0 upang i-disable ang mga armas sa mga interior. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang partikular na halaga.

## Examples

```c
public OnGameModeInit()
{
    // Papayagan nito ang mga armas sa loob ng interior.
    AllowInteriorWeapons(1);
    return 1;
}
```

## Notes

:::warning

Hindi gumagana ang function na ito sa kasalukuyang bersyon ng SA:MP!

:::

## Related Functions

- [SetPlayerInterior](SetPlayerInterior): Magtakda ng interior ng player.
- [GetPlayerInterior](GetPlayerInterior): Kunin ang kasalukuyang interior ng isang player.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): Tinatawag kapag nagpalit ng interior ang isang player.