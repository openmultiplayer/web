---
title: Задржавања
sidebar_label: Задржавања
description: Туторијал за писање задржавања за ограничавање радњи корисника користећи временске интервале и избегавање коришћења тајмера.
---

Овај туторијал обрађује писање често коришћене механике игре у акционим играма: задржавања. Задржавање је алатка за ограничавање фреквенције са којом играч може извршавати одређену радњу. Ово може бити нешто као коришћење способности као што је лечење или слање порука у чету. Омогућава вам да успорите брзину извршавања радњи играча, било за потребе балансирања игре или како бисте спречили спамовање.

Прво ћу објаснити _лоши_ начин извршавања задржавања коришћењем `SetTimer` за ажурирање стања.

## Коришћење Тајмера

Претпоставимо, на пример, да постоји одређена радња која може бити извршена само једном у одређеном временском интервалу. Видим да пуно људи (укључујући и Саутклоуза, пре много година) раде нешто слично овоме:

```c
static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
/* Ово може бити било који вид догађаја уноса који играч изврши као што су:
 *  Унос команде
 *  Подизање предмета
 *  Пролазак кроз чекпоинт
 *  Притискање дугмета
 *  Улазак у област
 *  Коришћење дијалога
 */
{
    if (IsPlayerAllowedToDoThing[playerid])
    {
        // Уради ствар коју је играч захтевао
        UradiStvarKojuJeIgracZahtevao();

        // Онемогући играчу
        IsPlayerAllowedToDoThing[playerid] = false;

        // Дозволи играчу да поново ради ствар за 10 секунди

        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);

        return 1;
    }
    else
    {
        SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

        return 0;
    }
}

// Позвано 10 секунди након што играч уради ствар
public AllowPlayer(playerid)
{
    IsPlayerAllowedToDoThing[playerid] = true;
    SendClientMessage(playerid, -1, "You are allowed to do the thing again! :D");
}
```

Ово је све у реду и функционише, играч неће моћи поново да обави ту радњу током 10 секунди након што је користи.

Ево још једног примера, ово је секундомер који мери колико времена је потребно играчу да изврши једну једноставну трку од тачке до тачке:

```c
static
    StopWatchTimerID[MAX_PLAYERS],
    StopWatchTotalTime[MAX_PLAYERS];

StartPlayerRace(playerid)
{
    // Позива функцију сваку секунду
    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);
}

public StopWatch(playerid)
{
    // Увећај бројач секунди
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

Ова два примера су често коришћени и могу радити исправно. Међутим, постоји много бољи начин постизања оба ова резултата, који је тачнији и може да да секундарне мерења времена!

## Коришћење `GetTickCount()` и `gettime()`

`GetTickCount()` је функција која вам даје време у милисекундама од отварања серверског процеса. `gettime()` враћа број секунди од 1. јануара 1970. године, такође познат као Уникс временски знак.

Ако позвате било коју од ових функција у два различита времена, и одузмете прво време од другог, одједном имате интервал између тих два догађаја у милисекундама или секундама, респективно! Погледајте овај пример:

### Cooldown

```c
static PlayerAllowedTick[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)
    // Ово функционише само када је тренутни тик минус последњи тик већи од 10000.
    // Другим речима, функционише само када је интервал између акција дужи од 10 секунди.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedTick[playerid] = GetTickCount(); // Ажурирај бројач тикова са најновијим временом.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

       return 0;
   }
}
```

Или, алтернативно, верзија са `gettime()`:

```c
static PlayerAllowedSeconds[MAX_PLAYERS];

OnPlayerInteractWithServer(playerid)
{
   if (gettime() - PlayerAllowedSeconds[playerid] > 10)
    // Ово функционише само када је текуће време у секундама минус последње време у секундама веће од 10.
    // Односно, ради само када је интервал између акција преко 10 секунди.
   {
       DoTheThingThePlayerRequested();
       PlayerAllowedSeconds[playerid] = gettime(); // Ажурирај број секунди са најновијим временом.

       return 1;
   }
   else
   {
       SendClientMessage(playerid, -1, "You are not allowed to do that yet!");

       return 0;
   }
}
```

Ако заиста желите, можете ставити преостало време у поруку о грешци:

(У овом примеру користим SendFormatMessage)

```c
SendFormatMessage(
    playerid,
    -1,
    "You are not allowed to do that yet! You can again in %d ms",
    10000 - (GetTickCount() - PlayerAllowedTick[playerid])
);
```

То је веома основан пример, било би боље претворити ту вредност у MS у низ "минут:секунди.милисекунде", али ћу постирати тај код на крају.

### Штоперица

Надам се да можете видети колико је ово моћно за добијање интервала између догађаја, погледајмо други пример

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

У овом примеру, тик каунт се сачува у играчкој променљивој када почне трка. Када је заврши, тренутни тик (од када је завршио) има тај почетни тик (мања вредност) одузет, што нас оставља са количином милисекунди између почетка и краја трке.

#### Распакивање

Сада да распакујемо мало код.

```c
new Stopwatch[MAX_PLAYERS];
```

Ово је глобална променљива, морамо је користити како бисмо могли да сачувамо број тикова и да добијемо вредност у другом тренутку (односно, да је користимо у другој функцији, касније).

```c
StartPlayerRace(playerid)
{
    Stopwatch[playerid] = GetTickCount();
}
```

Ово је када играч почне трку, тик тајмер се записује, ако се ово деси 1 минуту након што је сервер стартовао, вредност те променљиве ће бити 60.000 јер је 60 секунди и свака секунда има хиљаду милисекунди.

Добро, сада имамо ту играчеву променљиву постављену на 60.000, сада он завршава трку 1 минут 40 секунди касније:

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

Овде се деси прорачун интервала, добро, кажем прорачун, то је само одузимање две вредности!

GetTickCount() враћа тренутни тик тајмер, тако да ће бити већи од почетног тик тајмера, што значи да одузмете почетни тик тајмер од тренутног тик тајмера да бисте добили интервал између две мере.

Дакле, како смо рекли, играч завршава трку 1 минут и 40 секунди касније (100 секунди, или 100.000 милисекунди), GetTickCount ће вратити 160.000. Одузмите почетну вредност (која је 60.000) од нове вредности (која је 160.000) и добијете 100.000 милисекунди, што је 1 минут 40 секунди, што је време које је играчу требало да заврши трку!

## Резиме и напомене

Дакле! Научили смо да:

- GetTickCount враћа количину времена у милисекундама од тренутка када је рачунарски систем на коме се извршава сервер стартован.
- И ми то можемо користити тако што ћемо га позвати на два интервала, сачувати први у променљивој и упоредити та два вредности да бисте добили точан интервал у милисекундама између тих два догађаја.

На крају, не желите да играчима говорите временске вредности у милисекундама! Шта ако им треба сат времена да заврше трку?

Најбоље је користити функцију која узима милисекунде и претвара их у читљив формат, на пример, ранији пример играч је заузео 100.000 милисекунди за завршетак трке, ако бисте му рекли да је то трајало, било би му дуже да прочита та 100.000 и разуме шта значи у човеку читљивом времену.

[Овај пакет](https://github.com/ScavengeSurvive/timeutil) садржи функцију за форматирање милисекунди у низ.

Надам се да је ово помогло! Написао сам га зато што сам помогао некима последњих времена који нису знали како користити `GetTickCount()` или `gettime()` као алтернативу тајмерима или за добијање интервала итд.