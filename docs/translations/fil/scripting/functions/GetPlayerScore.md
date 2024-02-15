---
title: GetPlayerScore
description: Ni-rereturn ng function na ito ang score ng isang player gaya ng pagkakatakda nito gamit ang SetPlayerScore.
tags: ["player"]
---

## Description

Ni-rereturn ng function na ito ang score ng isang player gaya ng pagkakatakda nito gamit ang SetPlayerScore.

| Name     | Description                     |
| -------- | ------------------------------- |
| playerid | Ang player na kukunin ang score |

## Returns

Ang score ng player.

## Examples

```c
public OnPlayerCommandText(playerid,text[])
{
    if (!strcmp(cmdtext,"/score",true))
    {
        new string[128];
        format(string, sizeof(string), "Score: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [SetPlayerScore](SetPlayerScore): I-set ang score ng isang player.
- [GetPlayerPing](GetPlayerPing): Kunin ang ping ng isang player.