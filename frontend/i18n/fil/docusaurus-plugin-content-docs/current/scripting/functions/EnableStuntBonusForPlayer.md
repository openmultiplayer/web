---
title: EnableStuntBonusForPlayer
sidebar_label: EnableStuntBonusForPlayer
description: I-toggle ang mga stunt bonus para sa isang player.
tags: ["player"]
---

## Description

I-toggle ang mga stunt bonus para sa isang player. Pinagana bilang default.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | Ang ID ng player para i-toggle ang mga stunt bonus. |
| enable   | 1 para paganahin ang mga stunt bonus at 0 para i-disable ang mga ito.  |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Hindi konektado ang player.

## Examples

```c
public OnPlayerConnect(playerid)
{
   EnableStuntBonusForPlayer(playerid, 0); // I-disable ang mga stunt bonus kapag kumonekta ang player sa server.
}
```

## Related Functions

- [EnableStuntBonusForAll](EnableStuntBonusForAll): I-toggle ang mga stunt bonus para sa lahat ng manlalaro.