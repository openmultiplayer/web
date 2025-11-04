---
title: Cooldowns
sidebar_label: Cooldowns
description: Cooldowns bouwen met tick counts in plaats van timers.
---

Deze tutorial behandelt een veelgebruikte gameplay-mechaniek: cooldowns. Een cooldown beperkt hoe vaak een speler iets mag doen (ability, chat, etc.) voor balans of antispam.

Eerst het _minder goede_ voorbeeld met `SetTimer` en een public.

## Timers gebruiken

Voorbeeld met toestaan/verbieden en later weer toestaan via `SetTimerEx` (originele code ongewijzigd laten werkt prima).

Vervolgens een stopwatch met `SetTimerEx` die elke seconde telt.

Beide werken, maar er is een betere manier: nauwkeuriger, en met milliseconden!

## `GetTickCount()` en `gettime()`

`GetTickCount()` geeft milliseconden sinds het serverproces startte. `gettime()` geeft Unix-tijd (seconden sinds 1-1-1970). Neem twee meetmomenten en trek ze af: je hebt een interval.

### Een cooldown

Gebruik ticks om bij te houden wanneer een speler weer mag:

```pawn
static PlayerAllowedTick[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount();
       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");
       return 0;
   }
}
```

Of met seconden via `gettime()`.

Je kunt de resterende tijd tonen door het verschil uit te rekenen en in het bericht te zetten.

### Een stopwatch

Meet de tijd tussen start en finish met twee `GetTickCount()`-calls en trek ze af. Formatteer desgewenst naar `mm:ss.ms` voor spelers.

## Samenvatting

- `GetTickCount()`: milliseconden sinds start serverproces
- Neem twee timestamps en bereken nauwkeurig het interval zonder timers
- Handig voor cooldowns én metingen (stopwatch)

Zie het origineel voor volledige codevoorbeelden: de logica is 1:1 overgenomen, de uitleg hier is vereenvoudigd.


