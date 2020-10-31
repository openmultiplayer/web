---
title: Cooldown-uri
description: Un tutorial pentru scrierea cooldown-urilor pentru limitarea acțiunilor utilizatorilor folosind numărul de bifări și evitarea utilizării cronometrelor.
---

Acest tutorial acoperă scrierea unui mecanic de joc utilizat în mod obișnuit în jocurile de acțiune: cooldowns. Un timp de răcire este un instrument pentru a limita frecvența la care un jucător poate face ceva. Poate fi vorba despre utilizarea unei abilități precum vindecarea sau scrierea mesajelor de chat. Vă permite să încetiniți ritmul cu care jucătorii fac lucruri fie în scop de echilibrare a jocului, fie pentru a preveni spamul.

Mai întâi voi exemplifica modul _bad_ de a face o răcire folosind `SetTimer` pentru a actualiza starea.

## Utilizarea timerelor

Spuneți, de exemplu, că aveți o acțiune specifică care poate fi efectuată doar o dată la atât de multe secunde, văd o mulțime de oameni (inclusiv Southclaws, acum mulți ani) care fac așa ceva:

```c
static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];
OnPlayerInteractWithServer(playerid)
/* This can be any sort of input event a player makes such as:
 *  Entering a command
 *  Picking up a pickup
 *  Entering a checkpoint
 *  Pressing a button
 *  Entering an area
 *  Using a dialog
 */
{
    // This only works when the player is allowed to
    if (IsPlayerAllowedToDoThing[playerid])
    {
        // Do the thing the player requested
        DoTheThingThePlayerRequested();
        // Disallow the player
        IsPlayerAllowedToDoThing[playerid] = false;
        // Allow the player to do the thing again in 10 seconds
        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);
        return 1;
    }
    else
    {
        SendClientMessage(playerid, -1, "You are not allowed to do that yet!");
        return 0;
    }
}
// Called 10 seconds after the player does the thing
public AllowPlayer(playerid)
{
    IsPlayerAllowedToDoThing[playerid] = true;
    SendClientMessage(playerid, -1, "You are allowed to do the thing again! :D");
}
```

Acum totul este bine, funcționează, jucătorul nu va mai putea face acel lucru timp de 10 secunde după ce îl folosește.

Luați un alt exemplu aici, acesta este un cronometru care măsoară cât durează un jucător să facă o cursă simplă punct la punct:

```c
static
    StopWatchTimerID[MAX_PLAYERS],
    StopWatchTotalTime[MAX_PLAYERS];
StartPlayerRace(playerid)
{
    // Calls a function every second
    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);
}
public StopWatch(playerid)
{
    // Increment the seconds counter
    StopWatchTotalTime[playerid]++;
}
OnPlayerFinishRace(playerid)
{
    new str[128];
    format(str, 128, "You took %d seconds to do that", StopWatchTotalTime[playerid]);
    SendClientMessage(playerid, -1, str);
    KillTimer(StopWatchTimerID[playerid]);
}
```

Aceste două exemple sunt comune și pot funcționa bine. Cu toate acestea, există o modalitate mult mai bună de a obține ambele rezultate, care este mult mai precisă și poate da temporizări ale cronometrului până la milisecunde!

## Folosind `GetTickCount()` și `gettime()`

`GetTickCount()` este o funcție care vă oferă timpul în milisecunde de la deschiderea procesului serverului. `gettime()` returnează numărul de secunde de la 1 ianuarie 1970, cunoscut și sub numele de Unix Timestamp.

Dacă apelați oricare dintre aceste funcții în două momente diferite și scădeți prima dată din a doua, aveți brusc un interval între aceste două evenimente în milisecunde sau, respectiv, în secunde! Aruncați o privire la acest exemplu:

### Un cooldown

```c
static PlayerAllowedTick[MAX_PLAYERS];
OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
   // This only works when the current tick minus the last tick is above 10000.
   // In other words, it only works when the interval between the actions is over 10 seconds.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount(); // Update the tick count with the latest time.
       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");
       return 0;
   }
}
```

Sau, alternativ, versiunea `gettime()`:

```c
static PlayerAllowedSeconds[MAX_PLAYERS];
OnPlayerInteractWithServer(playerid)
{
   if (gettime() - PlayerAllowedSeconds[playerid] > 10)
   // This only works when the current seconds minus the last seconds is above 10.
   // In other words, it only works when the interval between the actions is over 10 seconds.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedSeconds[playerid] = gettime(); // Update the seconds count with the latest time.
       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");
       return 0;
   }
}
```

Există mult mai puțin cod acolo, nu este nevoie de o funcție publică sau de un cronometru. Dacă doriți cu adevărat, puteți pune timpul rămas în mesajul de eroare:

(Folosesc SendFormatMessage în acest exemplu)

```c
SendFormatMessage(
    playerid,
    -1,
    "You are not allowed to do that yet! You can again in %d ms",
    10000 - (GetTickCount() - PlayerAllowedTick[playerid])
);
```

Acesta este un exemplu foarte de bază, ar fi mai bine să convertiți acea valoare MS într-un șir de „minute: secunde. Milisecunde”, dar voi posta codul respectiv la sfârșit.

### Un cronometru

Sperăm că puteți vedea cât de puternic este acest lucru pentru a obține intervale între evenimente, să ne uităm la un alt exemplu

```c
static Stopwatch[MAX_PLAYERS];
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];
    interval = GetTickCount() - Stopwatch[playerid];
    format(str, 128, "You took %d milliseconds to do that", interval);
    SendClientMessage(playerid, -1, str);
}
```

În acest exemplu, numărul de bifă este salvat în variabila jucătorului atunci când începe cursa. Când o termină, bifa curentă (de când a terminat) are acea bifă inițială (Valoarea mai mică) scăzută din ea și astfel ne lasă cantitatea de milisecunde între începutul și sfârșitul cursei.

#### Defectiuni

Acum, să descompunem puțin codul.

```c
new Stopwatch[MAX_PLAYERS];
```

Aceasta este o variabilă globală, trebuie să o folosim astfel încât să putem salva numărul de bifuri și să recuperăm valoarea într-un alt moment (cu alte cuvinte, folosiți-o în altă funcție, mai târziu)

```c
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
```

Acesta este momentul în care jucătorul începe cursa, numărul de bifuri de acum este înregistrat, dacă acest lucru se întâmplă la 1 minut de la pornirea serverului, valoarea acelei variabile va fi 60.000, deoarece este de 60 de secunde și fiecare secundă are o mie de milisecunde.

Bine, acum avem variabila acelui jucător stabilită la 60.000, acum el termină cursa 1 minut 40 secunde mai târziu:

```c
OnPlayerFinishRace(playerid)
{
    new
        interval,
        str[128];
    interval = GetTickCount() - Stopwatch[playerid];
    format(str, 128, "You took %d milliseconds to do that", interval);
    SendClientMessage(playerid, -1, str);
}
```

Aici se întâmplă calculul intervalului, ei bine, spun calculul, este doar scăderea a două valori!

GetTickCount() returnează numărul curent de căpușe, deci va fi mai mare decât numărul de căpușe inițial, ceea ce înseamnă că scădeți numărul de căpușe inițial din numărul curent de căpușe pentru a obține intervalul dintre cele două măsuri.

Deci, așa cum am spus, jucătorul termină cursa 1 minut și 40 de secunde mai târziu (100 de secunde sau 100.000 de milisecunde), GetTickCount va reveni la 160.000. Scadeți valoarea inițială (care este 60.000) din noua valoare (care este 160.000) și obțineți 100.000 milisecunde, adică 1 minut 40 secunde, care este timpul necesar jucătorului pentru a face cursa!

## Recapitulare și note

Asa de! Am aflat că:

- GetTickCount returnează cantitatea de timp în milisecunde de la pornirea sistemului computer pe care rulează serverul.
- Și o putem folosi apelând-o la două intervale, salvând prima la o variabilă și comparând cele două valori vă poate oferi un interval precis în milisecunde între cele două evenimente.

Nu în ultimul rând, nu doriți să le spuneți jucătorilor valorile timpului în milisecunde! Ce se întâmplă dacă durează o oră pentru a finaliza o cursă?

Cel mai bine este să folosiți o funcție care ia milisecundele și o convertește într-un format lizibil, de exemplu, exemplul anterior, jucătorul a luat 100.000 de milisecunde pentru a face cursa, dacă i-ați spune jucătorului că a durat atât de mult, ar dura mai mult timp pentru a citi că 100.000 și dați seama ce înseamnă în timp de citit de om.

[Acest pachet](https://github.com/ScavengeSurvive/timeutil) conține o funcție de formatare a milisecundelor într-un șir.

Sper că acest lucru a ajutat! Am scris-o pentru că am ajutat recent câteva persoane care nu știau cum să folosească `GetTickCount()` sau `gettime()` ca alternativă pentru temporizatoare sau pentru obținerea de intervale etc.
