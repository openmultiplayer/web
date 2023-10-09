---
title: SetPlayerScore
description: I-set ang score ng player
tags: ["player"]
---

## Description

I-set ang score ng player. Ang mga player scores ay ipinapakita sa scoreboard (ipinapakita sa pamamagitan ng pagpindot sa TAB key).

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | Ang ID ng player na i-seset ang score.    |
| score    | Ang value ng score na i-seset sa player   |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Nangangahulugan ito na ang tinukoy na manlalaro ay hindi umiiral.

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Magdagdag ng 1 sa score ng killer na ito. Kailangan muna nating suriin kung valid ito.
    if (killerid != INVALID_PLAYER_ID)
    {
        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerScore](GetPlayerScore): Kunin ang score ng isang player.