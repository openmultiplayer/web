---
title: ConnectNPC
description: Ikonekta ang isang NPC sa server.
tags: ["npc"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Ikonekta ang isang NPC sa server.

| Name     | Description                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| name[]   | Ang pangalan na dapat ikonekta ng NPC bilang. Dapat sundin ang parehong mga patakaran tulad ng mga karaniwang pangalan ng player.|
| script[] | Ang pangalan ng script ng NPC na matatagpuan sa folder ng npcmodes (nang walang extension na .amx).|

## Returns

Ang function na ito ay palaging nag rereturn ng 1.

## Examples

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Notes

:::tip

Ang mga NPC ay walang mga nametag. Maaaring i-script ang mga ito gamit ang Attach3DTextLabelToPlayer.

:::

## Related Functions

- [IsPlayerNPC](IsPlayerNPC): Suriin kung ang isang player ay isang NPC o isang aktwal na player.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Tinatawag kapag kumonekta ang isang player sa server.