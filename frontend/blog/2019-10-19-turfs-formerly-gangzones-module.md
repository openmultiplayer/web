---
slug: turfs-formerly-gangzones-module
title: Turfs (formerly gangzones) module
authors: j0sh
---

Hello! I have just finished our Turf implementation into the server and I thought of posting a overview of this module and to show we haven't quit or anything!

<!-- truncate -->

:::warning

The content of the following post is out of date and has no reference to the current state of open.mp. The post is published here for archival purposes.

:::

```c
// Creates a Turf. A playerid can be passed in order to make it a player turf.
native Turf:Turf_Create(Float:minx, Float:miny, Float:maxx, Float:maxy, Player:owner = INVALID_PLAYER_ID);

// Destroys a turf.
native Turf_Destroy(Turf:turf);

// Shows a Turf to a player or players.
// Will send to all players if playerid = INVALID_PLAYER_ID.
native Turf_Show(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);

// Hides a Turf from a player or players.
// Will send to all players if playerid = INVALID_PLAYER_ID.
native Turf_Hide(Turf:turf, Player:playerid = INVALID_PLAYER_ID);

// Flashes a Turf for a player or players.
// Will send to all players if  playerid = INVALID_PLAYER_ID.
native Turf_Flash(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);

// Stops a Turf from flashing for player(s).
// Will send to all players if playerid = INVALID_PLAYER_ID.
native Turf_StopFlashing(Turf:turf, Player:playerid = INVALID_PLAYER_ID);
```

This is obviously different from the traditional API, but not to worry, there will be wrappers in place for this kind of stuff to make sure a normal script can be recompiled with no issues and without edits.

Another important fact that you may want to know is that every turf is in the same pool and there's a maximum of 4,294,967,295 turfs to be created from the script. However, the client can only handle 1024 turfs at one time.
