---
title: EnableStuntBonusForAll
sidebar_label: EnableStuntBonusForAll
description: Pinapagana o hindi pinapagana ang mga stunt bonus para sa lahat ng manlalaro.
tags: []
---

## Description

Pinapagana o hindi pinapagana ang mga stunt bonus para sa lahat ng manlalaro. Kung naka-enable, makakatanggap ang mga manlalaro ng monetary reward kapag nagsasagawa ng stunt sa isang sasakyan (hal. wheelie).

| Name   | Description                                     |
| ------ | ----------------------------------------------- |
| enable | 1 para paganahin ang mga stunt bonus o 0 para i-disable ang mga ito. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnGameModeInit()
{
    EnableStuntBonusForAll(0);
    return 1;
}
```

## Related Functions

- [EnableStuntBonusForPlayer](EnableStuntBonusForPlayer): I-toggle ang mga stunt bonus para sa isang player.