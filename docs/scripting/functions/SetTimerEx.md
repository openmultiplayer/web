---
title: "SetTimerEx | open.mp"
description: "Sets a timer to call a function after the specified interval."
canonical: https://open.mp/docs/scripting/functions/SetTimerEx
language: en
---

# SetTimerEx

## Description

Sets a timer to call a function after the specified interval. This variant ('Ex') can pass parameters (such as a player ID) to the function.

| Name | Description |
| --- | --- |
| const functionName\[\] | The name of a public function to call when the timer expires. |
| interval | Interval in milliseconds (1 second = 1000 MS). |
| bool:repeating | Boolean (true/false (or 1/0)) that states whether the timer should be called repeatedly (can only be stopped with [KillTimer](https://open.mp/docs/scripting/functions/KillTimer)) or only once. |
| const specifiers\[\] | Special format indicating the types of values the timer will pass. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments to pass (must follow format specified in previous parameter). |

## Returns

The ID of the timer that was started. Timer IDs start at 1 and are never reused.

## Format Specifiers

| Specifier | Meaning |
| --- | --- |
| `i` | Integer. |
| `d` | Integer. |
| `a` | Array. The next parameter must be an integer (`i` or `d`) with the array's size. |
| `s` | String. |
| `f` | Float. |
| `b` | Boolean (true/false). |

note

The array (`a`) and string (`s`) specifiers are unusable in SA-MP. Passing arrays and strings to timers is only supported in open.mp.

## Examples

```c
SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
// EndAntiSpawnKill - The function that will be called
// 5000 - 5000 MS (5 seconds). This is the interval. The timer will be called after 5 seconds.
// false - Not repeating. Will only be called once.
// "i" - I stands for integer (whole number). We are passing an integer (a player ID) to the function.
// playerid - The value to pass. This is the integer specified in the previous parameter.
```

  

**Implementation:**

```c
// The event callback (OnPlayerSpawn) - we will start a timer here
public OnPlayerSpawn(playerid)
{
    // Anti-Spawnkill (5 seconds)

    // Set their health very high so they can't be killed
    SetPlayerHealth(playerid, 999999.0);

    // Notify them
    SendClientMessage(playerid, -1, "You are protected against spawn-killing for 5 seconds.");

    // Start a 5 second timer to end the anti-spawnkill
    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
}

// Forward (make public) the function so the server can 'see' it
forward EndAntiSpawnKill(playerid);
// The timer function - the code to be executed when the timer is called goes here
public EndAntiSpawnKill(playerid)
{
    // 5 seconds has passed, so let's set their health back to 100
    SetPlayerHealth(playerid, 100.0);

    // Let's notify them also
    SendClientMessage(playerid, -1, "You are no longer protected against spawn-killing.");
    return 1;
}
```

## Notes

warning

Timer intervals are not accurate (roughly 25% off) in SA-MP. There are fixes available [here](https://sampforum.blast.hk/showthread.php?tid=289675) and [here](https://sampforum.blast.hk/showthread.php?tid=650736). But it is fixed in open.mp.

tip

-   Timer ID variables should be reset to 0 when they can to minimise the chance of accidentally killing new timers by mistake. `-1` is commonly mistaken to be the invalid ID - it isn't.
-   The function to be called must be [public](https://open.mp/docs/scripting/language/reference/Functions#-public-functions-function-main). That means it has to be [forwarded](https://open.mp/docs/scripting/language/reference/Functions#-forward-declarations).

## Definitions

| Definition | Value |
| --- | --- |
| INVALID\_TIMER | 0 |

## Related Functions

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [KillTimer](https://open.mp/docs/scripting/functions/KillTimer): Stop a timer.
-   [IsValidTimer](https://open.mp/docs/scripting/functions/IsValidTimer): Checks if a timer is valid.
-   [IsRepeatingTimer](https://open.mp/docs/scripting/functions/IsRepeatingTimer): Checks if a timer is set to repeat.
-   [GetTimerInterval](https://open.mp/docs/scripting/functions/GetTimerInterval): Gets the interval of a timer.
-   [GetTimerRemaining](https://open.mp/docs/scripting/functions/GetTimerRemaining): Gets the remaining interval of a timer.
-   [CountRunningTimers](https://open.mp/docs/scripting/functions/CountRunningTimers): Get the running timers.
-   [CallLocalFunction](https://open.mp/docs/scripting/functions/CallLocalFunction): Call a function in the script.
-   [CallRemoteFunction](https://open.mp/docs/scripting/functions/CallRemoteFunction): Call a function in any loaded script.
