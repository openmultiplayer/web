---
title: IsPlayerAdmin
sidebar_label: IsPlayerAdmin
description: Suriin kung ang isang manlalaro ay naka-log in bilang isang RCON admin.
tags: ["administration"]
---

## Description

Suriin kung ang isang manlalaro ay naka-log in bilang isang RCON admin.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | Ang ID ng player na susuriin   |

## Returns

1: Ang player ay isang RCON admin.

0: Ang manlalaro ay HINDI isang RCON admin.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEEE20FF, "An admin spawned.");
    }
    return 1;
}
```

## Related Functions

- [SendRconCommand](SendRconCommand): Nagpapadala ng RCON command sa pamamagitan ng script.

## Related Callbacks

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Tinatawag kapag may ginawang pagtatangkang mag-log in sa RCON.