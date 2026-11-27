---
title: "Special Actions | open.mp"
description: "A list of all the player special actions used by GetPlayerSpecialAction and SetPlayerSpecialAction functions."
canonical: https://open.mp/docs/scripting/resources/specialactions
language: en
---

# Special Actions

This page compiles the list of all the player special actions used by [GetPlayerSpecialAction](https://open.mp/docs/scripting/functions/GetPlayerSpecialAction) and [SetPlayerSpecialAction](https://open.mp/docs/scripting/functions/SetPlayerSpecialAction) functions. Both pages contain examples on how to use the values below.

warning

Special actions marked with \* cannot be set using [SetPlayerSpecialAction](https://open.mp/docs/scripting/functions/SetPlayerSpecialAction).

| ID | Action | Description |
| --- | --- | --- |
| 0 | SPECIAL\_ACTION\_NONE | Clears player of special actions |
| 1 | SPECIAL\_ACTION\_DUCK \* | Detect if the player is crouching. |
| 2 | SPECIAL\_ACTION\_USEJETPACK | Will make the player using jetpack |
| 3 | SPECIAL\_ACTION\_ENTER\_VEHICLE \* | Detect if the player is entering a vehicle via an animation. |
| 4 | SPECIAL\_ACTION\_EXIT\_VEHICLE \* | Detect if the player is exiting a vehicle via an animation. |
| 5 | SPECIAL\_ACTION\_DANCE1 | Applies dancing animation for player |
| 6 | SPECIAL\_ACTION\_DANCE2 | Applies dancing animation for player |
| 7 | SPECIAL\_ACTION\_DANCE3 | Applies dancing animation for player |
| 8 | SPECIAL\_ACTION\_DANCE4 | Applies dancing animation for player |
| 10 | SPECIAL\_ACTION\_HANDSUP | Will make the player put hands up |
| 11 | SPECIAL\_ACTION\_USECELLPHONE | Will make the player speaking on cellphone |
| 12 | SPECIAL\_ACTION\_SITTING \* | Detects if the player is sitting |
| 13 | SPECIAL\_ACTION\_STOPUSECELLPHONE | Makes players stop using cellphone |
| 20 | SPECIAL\_ACTION\_DRINK\_BEER | Will increase the player's drunk level when used |
| 21 | SPECIAL\_ACTION\_SMOKE\_CIGGY | Will give the player a cigar. |
| 22 | SPECIAL\_ACTION\_DRINK\_WINE | Will give the player a wine bottle to get drunk from |
| 23 | SPECIAL\_ACTION\_DRINK\_SPRUNK | Will give the player a sprunk bottle to drink from |
| 24 | SPECIAL\_ACTION\_CUFFED | Will force the player in to cuffs (hands are behind their back) (**does not work on CJ skin**). |
| 25 | SPECIAL\_ACTION\_CARRY | Will apply a 'carrying' animation to the player and make them unable to sprint, jump or punch (**does not work on CJ skin**). |
| 68 | SPECIAL\_ACTION\_PISSING | Will make the player perform the pissing animation with visible pee (**the macro is not present in the SA-MP include files**). |
