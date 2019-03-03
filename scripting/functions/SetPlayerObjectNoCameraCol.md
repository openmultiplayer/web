# SetPlayerObjectNoCameraCol

::: warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Toggles a player object camera collision.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The playerID the object belongs to.      |
| objectid | The ID of the object you want to toggle. |

## Returns

1 - Regardless of if the object exists or not.

## Examples

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if(objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCol(playerid, objectid);
    }
    return 1;
}
```

## Notes

::: tip

This does not work inside the normal SA map boundaries.

:::

## Related Functions

- SetObjectNoCameraCol: Disables collisions between camera and object.
