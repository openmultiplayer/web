---
title: SetPlayerWeather
description: Magtakda ng panahon ng manlalaro.
tags: ["player"]
---

## Description

Magtakda ng panahon ng manlalaro.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| playerid | Ang ID ng player na ang panahon ay itatakda.   |
| weather  | Ang [weather](../resources/weatherid) na itatakda.|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Kung pinagana ang TogglePlayerClock, dahan-dahang magbabago ang panahon sa paglipas ng panahon, sa halip na agad na magbago. Mayroon lamang valid na 21 weather ID sa laro (0 - 20), gayunpaman ang laro ay walang anumang anyo ng range check.

:::

## Related Functions

- [SetWeather](SetWeather): Itakda ang pandaigdigang panahon.
- [SetGravity](SetGravity): Itakda ang global gravity.