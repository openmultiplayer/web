---
title: ShowNameTags
description: I-toggle ang drawing ng mga nametag, health bar at armor bar sa itaas ng mga manlalaro.
tags: []
---

## Description

I-toggle ang drawing ng mga nametag, health bar at armor bar sa itaas ng mga manlalaro.

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| enabled | 0 upang huwag paganahin, 1 upang paganahin (pinagana bilang default).|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnGameModeInit()
{
    // Ito ay ganap na hindi paganahin ang lahat ng mga nametag ng manlalaro
    // (kabilang ang mga health at armor bar)
    ShowNameTags(0);
}
```

## Notes

:::warning

Magagamit lang ang function na ito sa OnGameModeInit. Para sa ibang pagkakataon, tingnan ang ShowPlayerNameTagForPlayer.

:::

## Related Functions

- [DisableNameTagLOS](DisableNameTagLOS): I-disable ang nametag na Line-Of-Sight checking.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Magpakita o magtago ng nametag para sa isang partikular na manlalaro.
- [ShowPlayerMarkers](ShowPlayerMarkers): Magpasya kung dapat magpakita ang server ng mga marker sa radar.