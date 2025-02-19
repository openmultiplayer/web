---
title: SpawnPlayer
sidebar_label: SpawnPlayer
description: (Re)Spawns ng isang manlalaro.
tags: ["player"]
---

## Description

(Re)Spawns ng isang manlalaro.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | Ang ID ng player na mag i-spawn.|

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Nangangahulugan ito na ang manlalaro ay hindi konektado.

## Examples

```c
if (strcmp(cmdtext, "/spawn", true) == 0)
{
    SpawnPlayer(playerid);
    return 1;
}
```

## Notes

:::tip

Pinapatay ang manlalaro kung sila ay nasa sasakyan at mag i-spawn ng may hawak na bote.

:::

## Related Functions

- [SetSpawnInfo](SetSpawnInfo): I-set ang setting ng spawn para sa isang manlalaro.
- [AddPlayerClass](AddPlayerClass): Maglagay ng class.
- [OnPlayerSpawn](../callbacks/OnPlayerSpawn): Tinatawag kapag nag-spawn ang isang manlalaro.