---
title: OnPlayerKeyStateChange
sidebar_label: OnPlayerKeyStateChange
description: This callback is called when the state of any supported key is changed (pressed/released).
tags: ["player"]
---

## Description

This callback is called when the state of any [supported](../resources/keys) key is changed (pressed/released).<br/>Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).

| Name     | Description                                                                                   |
| -------- | --------------------------------------------------------------------------------------------- |
| playerid | The ID of the player that pressed or released a key.                                          |
| newkeys  | A map (bitmask) of the keys currently held - [see here](../resources/keys)                    |
| oldkeys  | A map (bitmask) of the keys held prior to the current change - [see here](../resources/keys). |

## Returns

- This callback does not handle returns.
- It is always called first in gamemode.

## Notes

:::info

This callback can also be called by NPC.

:::

:::tip

Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).<br/>They can only be detected with [GetPlayerKeys](../functions/GetPlayerKeys) (in [OnPlayerUpdate](../callbacks/OnPlayerUpdate) or a timer).

:::

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [GetPlayerKeys](../functions/GetPlayerKeys): Check what keys a player is holding.

## Additional Information

### Introduction

This callback is called whenever a player presses or releases one of the supported keys (see [Keys](../resources/keys)).<br/>The keys which are supported are not actual keyboard keys, but San Andreas mapped function keys, this means that, for example, you can't detect when someone presses the <strong>spacebar</strong>, but can detect when they press their sprint key (which may, or may not, be assigned to the spacebar (it is by default)).

### Parameters

The parameters to this function are a list of all keys currently being held down and all the keys held down a moment ago. The callback is called when a key state changes (that is, when a key is either pressed or released) and passes the states or all keys before and after this change. This information can be used to see exactly what happened but the variables can not be used directly in the same way as parameters to other functions. To reduce the number of variables only a single BIT is used to represent a key, this means that one variable may contain multiple keys at once and simply comparing values will not always work.

### How to NOT to check for a key

Let's presume that you want to detect when a player presses their FIRE button, the obvious code would be:

```c
if (newkeys == KEY_FIRE)
```

This code may even work in your testing, but it is wrong and your testing is insufficient. Try crouching and pressing fire - your code will instantly stop working. Why? Because "newkeys" is no longer the same as "KEY_FIRE", it is the same as "KEY_FIRE" COMBINED WITH "KEY_CROUCH".

### How to check for a key

So, if the variable can contain multiple keys at once, how do you check for just a single one? The answer is bit masking. Each key has its own bit in the variable (some keys have the same bit, but they are onfoot/incar keys, so can never be pressed at the same time anyway) and you need to check for just that single bit:

```c
if (newkeys & KEY_FIRE)
```

Note that the single <strong>&</strong> is correct - this is a bitwise AND, not a logical AND, which is what the two ampersands are called.

Now if you test this code it will work whether you are crouching or standing when you press the fire key. However there is still one slight problem - it will fire as long as you are holding the key. OnPlayerKeyStateChange is called every time a key changes and that code is true whenever the the fire key is held down. If you press fire the code will fire, if that key is held and you press crouch - that code will fire again because a key (crouch) has changed and fire is still held down How do you detect when a key is first pressed, but not trigger again when it's still held and another key changes?

### How to check for a key that has been pressed

This is where "oldkeys" comes in. To check if a key has just been pressed you need to first check whether it is set in "newkeys" - meaning it's held down, and then check that it's NOT in "oldkeys" - meaning it's only just been held down. The following code does this:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

That will ONLY be true when the FIRE key is first pressed, not when it's held and another key changes.

### How to check for a key being released

Exactly the same principle as above, but reversed:

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### How to check for multiple keys

If you want to check for players HOLDING crouch and fire then the following code will work fine:

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

However if you want to detect when they FIRST press fire and crouch the following code WILL NOT work. It will work if they manage to press the two keys at exactly the same time, but if they're fractionally out (far less than half a second) it won't:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

Why not? Because OnPlayerKeyStateChange is called every time a single key changes. So they press "KEY_FIRE" - OnPlayerKeyStateChange is called with "KEY_FIRE" in "newkeys" and not in "oldkeys", then they press "KEY_CROUCH" - OnPlayerKeyStateChange is called with "KEY_CROUCH" and "KEY_FIRE" in "newkeys", but "KEY_FIRE" is now also in "oldkeys" as it's already been pressed, so "!(oldkeys & KEY_FIRE)" will fail. Fortunately the solution is very simple (in fact simpler than the original code):

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

This may look complicated, but it checks that both keys are set in "newkeys" and that both the keys were not set in "oldkeys", if one of them was set in "oldkeys" that doesn't matter as not both of them were. All these things can be simplified greatly with defines.

## Simplification

### Detecting holding a key

The define:

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

Holding one key:

```c
if (HOLDING( KEY_FIRE ))
```

Holding multiple keys:

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### Detecting first pressing a key

The define:

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

Pressed one key:

```c
if (PRESSED( KEY_FIRE ))
```

Pressed multiple keys:

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### Detecting if a player is pressing a key currently

The define:

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

Pressing one key:

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

Pressing multiple keys:

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### Detecting releasing a key

The define:

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

Released one key:

```c
if (RELEASED( KEY_FIRE ))
```

Released multiple keys:

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## Examples

### Attach NOS when the player presses fire

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_FIRE))
	{
		if (IsPlayerInAnyVehicle(playerid))
		{
			AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);
		}
	}
	return 1;
}
```

### Super jump

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_JUMP))
	{
		new
			Float:x,
			Float:y,
			Float:z;
		GetPlayerPos(playerid, x, y, z);
		SetPlayerPos(playerid, x, y, z + 10.0);
	}
	return 1;
}
```

### God mode while holding use

```c
new
	Float:gPlayerHealth[MAX_PLAYERS];

#if !defined INFINITY
	#define INFINITY (Float:0x7F800000)
#endif

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_ACTION))
	{
		// They just pressed the action key, save their
		// old health for restoration.
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// They just let go of action - restore
		// their old health again.
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### Explanation

You don't need to worry about HOW it's done, just that it is. HOLDING detects if they're pressing a key (or keys), regardless of wether they were pressing it before, PRESSED detects if they only just pressed the key(s) and RELEASED detects if they just released a key(s). However if you want to know more - read on.

The reason why you need to do it this way, not just using & or ==, is to detect exactly the keys you want while ignoring others which may or may not be pressed. In binary KEY_SPRINT is:

```
0b00001000
```

and KEY_JUMP is:

```
0b00100000
```

thus ORing them into the wanted keys (we could also add them in this example but that's not always the case) gives:

```
0b00101000
```

If we were only using & and OnPlayerKeyStateChange was called for a player pressing jump we would get the following code:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

The AND of the two numbers is not 0, thus the result of the check is true, which isn't what we want.

If we only used == the two numbers are clearly not the same thus the check would fail, which is what we want.

If the player was pressing jump, sprint and crouch we would get the following code:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

The ANDed version is the same as the required keys and also not 0, thus will give the correct answer, however the two original numbers are not the same so == will fail. In both the examples one of the two has given the right answer and one has given the wrong answer. If we compare the first one using & and == we get:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

Obviously wanted and ANDed are not the same so the check fails, which is correct. For the second example:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

Wanted and ANDed are the same so comparing them as equal will result in a true result, which again is correct.

So using this method we can accurately check if certain keys are pressed ignoring all other keys which may or may not be pressed. the oldkeys check just uses != instead of == to ensure that the required keys were not previously pressed, so we know one of them was just pressed.
