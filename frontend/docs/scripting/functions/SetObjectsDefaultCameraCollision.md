---
title: SetObjectsDefaultCameraCollision
description: Allows camera collisions with newly created objects to be disabled by default.
tags: ["object", "camera"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Allows camera collisions with newly created objects to be disabled by default.

| Name         | Description                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------|
| bool:disable | `true` to disable camera collisions for newly created objects and `false` to enable them (enabled by default). |

## Returns

Note

This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions.

## Examples

```c
public OnGameModeInit()
{
    // Disable camera collision
    SetObjectsDefaultCameraCollision(true);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects will NOT have camera collisions

    // Re-enable camera collisions
    SetObjectsDefaultCameraCollision(false);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects WILL have camera collision

    // BUT, the first set will still NOT have camera collisions

    return 1;
}
```

## Notes

:::tip

This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions.

:::

:::warning

This function ONLY works outside the normal SA map boundaries (past 3000 units).

:::

## Related Functions

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): Disables collisions between camera and object.
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): Disables collisions between camera and player object.
