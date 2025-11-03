---
title: NPC_GetWeaponSkillLevel
sidebar_label: NPC_GetWeaponSkillLevel
description: Gets the weapon skill level of an NPC.
tags: ["npc", "weapon", "skill"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the weapon skill level of an NPC.

| Name  | Description                         |
| ----- | ----------------------------------- |
| npcid | The ID of the NPC                   |
| skill | The weapon skill type (WEAPONSKILL) |

## Returns

Returns the weapon skill level (0-999), or `UNKNOWN_WEAPONSKILL` on failure.

## Examples

## Notes

- Weapon skill affects accuracy and shooting behavior
- Skill level ranges from 0 (poor) to 999 (hitman)
- Returns `UNKNOWN_WEAPONSKILL` if the NPC is invalid or skill type is invalid

## Related Functions

- [NPC_SetWeaponSkillLevel](NPC_SetWeaponSkillLevel): Set NPC weapon skill level
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Get weapon accuracy
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
