---
title: SendRconCommand
description: Nagpapadala ng command na RCON (Remote Console).
tags: ["administration"]
---

## Description

Nagpapadala ng command na RCON (Remote Console).

| Name      | Description                      |
| --------- | -------------------------------- |
| command[] | Ang RCON command na ma e-execute |

## Returns

Ang function na ito ay palaging rereturn ng 1.

## Notes

:::warning

- Hindi sinusuportahan ang pag-login, dahil sa kakulangan ng parameter na 'playerid'.
- Tatanggalin ng 'password 0' ang password ng server kung nakatakda ang isa.
- Ang function na ito ay magreresulta sa OnRconCommand na tinatawag.

:::

## Examples

```c
SendRconCommand("gmx");
// Ito ay isang scripted na bersyon ng pag-type ng "/rcon gmx" in-game.
// Ni-restart ng GMX ang mode ng laro.

// Halimbawa gamit ang format()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);
```

## Related Functions

- [IsPlayerAdmin](IsPlayerAdmin): Sinusuri kung ang isang manlalaro ay naka-log in sa RCON.

## Related Callbacks

- [OnRconCommand](../callbacks/OnRconCommand): Tinatawag kapag ipinadala ang isang utos ng RCON.
- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Tinatawag kapag may ginawang pagtatangkang mag-log in sa RCON.