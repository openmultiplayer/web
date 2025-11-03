---
title: NPC_SetWeaponSkillLevel
sidebar_label: NPC_SetWeaponSkillLevel
description: Sets the weapon skill level for an NPC.
tags: ["npc", "weapon", "skill"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the weapon skill level for an NPC.

| Name  | Description                              |
| ----- | ---------------------------------------- |
| npcid | The ID of the NPC                        |
| skill | The weapon skill type (WEAPONSKILL)      |
| level | The skill level to set (0-999)           |

## Returns

Returns `true` on success, `false` on failure.

## Examples

## Notes

- Weapon skill affects accuracy and shooting behavior
- Skill level ranges from 0 (poor) to 999 (hitman)
- Different weapon types have different skill categories

## Related Functions

- [NPC_GetWeaponSkillLevel](NPC_GetWeaponSkillLevel): Get NPC weapon skill level
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy
- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Get weapon accuracy
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
