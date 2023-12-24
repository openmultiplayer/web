---
title: GetTickCount
description: Returns a value which increases every millisecond.
tags: []
---

## Description

Returns a value which increases every millisecond.  Th absolute value returned is undefined and varies between systems, it should only be used to compare two points in time.

## Examples

Only allow a player to call a command once every ten seconds (10000 milliseconds):

```c
static gLastCommandUse[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/limited") == 0)
    {
        if (GetTickCount() - gLastCommandUse[playerid] >= 10000)
        {
            // Enough time has passed.
            SendClientMessage(playerid, COLOUR_ERROR, "Called!");
        }
        else
        {
            SendClientMessage(playerid, COLOUR_ERROR, "Please wait");
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

The difference in values that `GetTickCount` can handle is limited to just under 25 days (2147483647 milliseconds).  As long as the events being compared are less than that amount apart this function works perfectly with one small caveat.  Due to integer overflow, the following code may not work:

```c
new start = GetTickCount();
// Long code.
new end = GetTickCount();
if (start + 2000 < end)
{
    // The code took less than two seconds.
}
```

If `start` is very high this code will wrap around and may cause the check to pass erroneously.  However, solving this is very simple:

```c
new start = GetTickCount();
// Long code.
new end = GetTickCount();
if (2000 < end - start)
{
    // The code took less than two seconds.
}
```

Simply rearranging the comparison such that `start` and `end` are on the same side fixes the issue entirely.  Those familiar with formula rearrangements should recognise that the two pieces of code are entirely equivalent, but the latter is more correct in modulo arithmetic.

:::

## Related Functions

- [Tickcount](Tickcount): Get the uptime of the actual server.
