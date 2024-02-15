---
title: SetWeather
description: Itakda ang lagay ng panahon sa mundo para sa lahat ng manlalaro.
tags: []
---

## Description

Itakda ang lagay ng panahon sa mundo para sa lahat ng manlalaro.

| Name      | Description                                      |
| --------- | ------------------------------------------------ |
| weatherid | Ang [weather](../resources/weatherid) na itatakda.|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
if (!strcmp(cmdtext, "/sandstorm", true))
{
    SetWeather(19);
    return 1;
}
```

## Notes

:::tip

Kung pinagana ang TogglePlayerClock, dahan-dahang magbabago ang panahon sa paglipas ng panahon, sa halip na agad na magbago. Mayroon lamang valid na 21 weather ID sa laro (0 - 20), gayunpaman ang laro ay walang anumang anyo ng range check.

:::

## Related Functions

- [SetPlayerWeather](SetPlayerWeather): Magtakda ng panahon ng manlalaro.
- [SetGravity](SetGravity): Itakda ang global gravity.