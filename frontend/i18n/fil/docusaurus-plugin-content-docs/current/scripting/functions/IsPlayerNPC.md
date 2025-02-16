---
title: IsPlayerNPC
description: Suriin kung ang isang player ay isang aktwal na player o isang NPC.
tags: ["player", "npc"]
---

## Description

Suriin kung ang isang player ay isang aktwal na player o isang NPC.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | Ang ID ng player na susuriin.  |

## Returns

1: Ang player ay isang NPC.

0: Ang player ay hindi isang NPC.

## Examples

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "An NPC connected!");
        return 1;
    }

    // Ang ibang code dito ay hindi ma e-execute maliban kung ito ay isang player
}
```

## Related Functions

- [ConnectNPC](ConnectNPC): Ikonekta ang isang NPC.
- [IsPlayerAdmin](IsPlayerAdmin): Sinusuri kung ang isang manlalaro ay naka-log in sa RCON.