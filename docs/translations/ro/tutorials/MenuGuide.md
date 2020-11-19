---
title: Ghid pentru meniuri
---

Un scurt tutorial care explică modul de utilizare a sistemului de meniuri al jocului. Acest sistem de meniu este diferit de dialogurile SA-MP și reflectă mai bine interfața tradițională a jocului original.

## Meniuri în SA-MP

Meniurile arată foarte complicat și greu de redactat pentru cei mai mulți jucători, deși nu este. Aici vă voi arăta cum să creați un meniu simplu. La final vom crea un meniu de teleportare.

## Primii pași din meniu

Mai întâi trebuie să creăm un meniu. Prefixul dinainte este `Menu:` aceasta face ca variabila să fie corectă [etichetata](../scripting/language/tags). Există diferite tipuri pentru utilizări diferite, cum ar fi "Float:" bool: "Text3D:" etc. Scrieți următorul cod în partea de sus a scriptului:

```c
new Menu:teleportmenu;
```

Bine, am creat variabila pentru a stoca meniul. Acum trebuie să creăm meniul și să atribuim meniului variabila pe care am creat-o. Tastați acest lucru în `OnGameModeInit`:

```c
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

Acum o explicație despre argumentele [CreateMenu](../scripting/functions/CreateMenu). **Parametrii:**

| Parameter       | Specifies                                                                    |
| --------------- | ---------------------------------------------------------------------------- |
| title           | Antetul meniului                                                             |
| columns         | Numărul de aici definește cât de multe coloane sunt utilizate (2 este maxim) |
| Float:x         | Poziția înaltă a meniului pe ecran (de la stânga la dreapta)                 |
| Float:y         | Poziția lățimii meniului pe ecran (sus și jos)                               |
| Float:col1width | Lățimea primei coloane                                                       |
| Float:col2width | Lățimea celei de-a doua coloane                                              |

## Adăugați câteva elemente de meniu

Ok, acum avem meniul, dar avem nevoie de câteva elemente, sub care puteți alege în meniu. Le adăugați sub „CreateMenu” pe care l-am creat mai devreme.

```c
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "LV");
AddMenuItem(teleportmenu, 0, "LV");
 
AddMenuItem(teleportmenu, 1, "Grove Street");
AddMenuItem(teleportmenu, 1, "Starfish Tower");
AddMenuItem(teleportmenu, 1, "Wheel Arch Angels");
AddMenuItem(teleportmenu, 1, "Jizzys");
AddMenuItem(teleportmenu, 1, "4 Dragons");
AddMenuItem(teleportmenu, 1, "Come-a-Lot");
```

Explicația pentru [AddMenuItem](../scripting/functions/AddMenuItem):

| menuid | Meniul din meniul în care va fi afișat elementul |
| ------ | ------------------------------------------------ |
| column | Coloana în care va fi afișat elementul           |
| text   | Textul articolului                               |

## Crearea efectelor pentru elemente

Bine, acum că am creat un meniu complet cu elemente, ce ar trebui să se întâmple atunci când alegeți un articol? În exemplul nostru, vrem să realizăm un meniu de teleportare, deci ar trebui să fim teleportați în poziția pe care o alegem. Când un jucător selectează un element dintr-un meniu, scriptul apelează callback-ul [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow). Cel mai bun mod de a face acest lucru este să-l faceți cu un comutator, este ca mai multe instrucțiuni if pentru a verifica dacă o variabilă merită anumite valori. Dar mai întâi vrem aceste efecte doar pentru meniul pe care îl dorim, așa că trebuie să creăm o variabilă care să conțină ce meniu privește playerul, acest lucru se face cu `GetPlayerMenu`:

```c
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

Acum, când cineva selectează ceva din meniu, meniul său va fi salvat în `CurrentMenu`.

Acum trebuie să verificăm dacă meniul pe care l-au selectat este meniul pe care îl dorim:

```c
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        //stuff
    }
    return 1;
}
```

Acum între aceste paranteze este locul unde se află comutatorul, acest lucru verifică ce element selectat de jucător sau `rând` se poate face cu instrucțiunile `dacă` verificând ce `rând` este, dar `comutatorul` este mult mai simplu mod de a-l scrie.

```c
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Grove Street");
        }
        case 1: //Starfish Tower
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the top of Starfish Tower");
        }
        case 2: //Wheel Arch Angels
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Wheel Arch Angels tuning-shop");
        }
        case 3: //Jizzys
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Jizzy's Nightclub!");
        }
        case 4: //4Dragons
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Four Dragons Casino");
        }
        case 5: //Come-a-Lot
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Come-a-Lot casino!");
        }
    }
}
```

## Ultimii pași

Acum avem nevoie de o comandă pentru a afișa meniul. Acesta este cel mai ușor pas. Doar o comparație cu `strcmp` și un `ShowMenuForPlayer`. Acest lucru se face în `OnPlayerCommandText`. Sau, dacă aveți deja un procesor de comandă, utilizați-l în schimb pentru a apela `ShowMenuForPlayer`.

```c
if(strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

Foarte ușor, nu-i așa?

## Ultimele cuvinte

Bine, după ce ați citit acest lucru ȘI l-ați înțeles, încercați propriul meniu. După cum ați putut vedea, nu este atât de dificil, dar îi va impresiona pe jucătorii de pe serverul dvs. cu atât mai mult. Și poți să creezi efecte foarte interesante cu asta. De asemenea, este foarte interesant pentru magazinele generale sau supermarketurile pentru lucrurile pe care le puteți cumpăra. Apoi, puteți scădea niște bani ca efect, iar prețul este afișat într-o altă coloană din meniu. Dar acum, lucrează pe cont propriu.

De asemenea, puteți adăuga [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) cu `false` după`ShowPlayerMenu` și [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) cu `true` la sfârșitul ʻOnPlayerSelectedMen jucătorul respectiv nu se poate mișca în timp ce navighează prin meniuri.

Sper că ați învățat ceva din acest tutorial. Dacă aveți întrebări, întrebați pe forumuri / discordie.
