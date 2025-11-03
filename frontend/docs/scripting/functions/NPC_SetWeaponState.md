---
title: NPC_SetWeaponState
sidebar_label: NPC_SetWeaponState
description: Sets the weapon state of an NPC.
tags: ["npc", "weapon", "state"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the weapon state of an NPC.

| Name        | Description               |
| ----------- | ------------------------- |
| npcid       | The ID of the NPC         |
| weaponState | The weapon state to set   |

## Returns

Returns `true` on success, `false` on failure.

## Examples

## Notes

- Weapon state controls the current action of the NPC's weapon
- Use [NPC_GetWeaponState](NPC_GetWeaponState) to retrieve the current state
- Changing weapon state affects NPC shooting behavior

## Related Functions

- [NPC_GetWeaponState](NPC_GetWeaponState): Get NPC weapon state
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC weapon
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when NPC weapon state changes
- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
