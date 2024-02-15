---
title: SetSVarFloat
description: Magtakda ng server variable na float.
tags: []
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## Description

Magtakda ng server variable na float.

| Name        | Description                      |
| ----------- | -------------------------------- |
| varname[]   | Ang pangalan ng server variable. |
| float_value | Ang float na itatakda.            |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Ang variable na pangalan ay null o higit sa 40 character.

## Examples

```c
// itakda ang "Version"
SetSVarFloat("Version", 0.37);
// magpi-print ng version na mayroon ang server
printf("Version: %f", GetSVarFloat("Version"));
```

## Related Functions

- [SetSVarInt](SetSVarInt): Magtakda ng integer para sa server variable.
- [GetSVarInt](GetSVarInt): Kumuha ng player server bilang integer.
- [SetSVarString](SetSVarString): Magtakda ng string para sa server variable.
- [GetSVarString](GetSVarString): Kunin ang dating itinakda na string mula sa isang server variable.
- [GetSVarFloat](GetSVarFloat): Kunin ang dating itinakda na float mula sa isang server variable.
- [DeleteSVar](DeleteSVar): Magtanggal ng server variable.