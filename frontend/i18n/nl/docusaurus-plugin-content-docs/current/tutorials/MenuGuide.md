---
title: Menu Guide
sidebar_label: Menu Guide
---

Een korte guide over het menu-systeem van de game. Dit systeem verschilt van SA-MP-dialogs en sluit beter aan bij de traditionele UI van de originele game.

## Menu’s in SA-MP

Menus lijken complex, maar dat valt mee. We maken een simpel teleportmenu.

## Eerste stappen

We declareren een menuvariabele. De prefix `Menu:` geeft de juiste [tag](../scripting/language/Tags).

```pawn
new Menu:teleportmenu;
```

Maak nu het menu aan (bijv. in `OnGameModeInit`) en wijs de variabele toe:

```pawn
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

Argumenten van [CreateMenu](../scripting/functions/CreateMenu):

| Parameter       | Betekenis                                              |
| --------------- | ------------------------------------------------------ |
| title           | Kop van het menu                                      |
| columns         | Aantal kolommen (max 2)                               |
| Float:x         | Horizontale positie (links-rechts)                    |
| Float:y         | Verticale positie (omhoog-omlaag)                     |
| Float:col1width | Breedte kolom 1                                       |
| Float:col2width | Breedte kolom 2                                       |

## Items toevoegen

Voeg items toe direct onder `CreateMenu`:

```pawn
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

Uitleg [AddMenuItem](../scripting/functions/AddMenuItem):

| menuid | Menu-ID waar het item getoond wordt |
| ------ | ----------------------------------- |
| column | Kolomindex                          |
| text   | Itemtekst                           |

## Actie bij selectie

Wanneer een speler een item kiest, wordt [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow) aangeroepen. Gebruik `GetPlayerMenu` om te controleren of het ons menu is, en `switch(row)` voor de keuze.

```pawn
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        switch (row)
        {
            case 0: { // Grove Street
                SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
                SetPlayerInterior(playerid, 0);
                SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Grove Street");
            }
            case 1: { // Starfish Tower
                SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
                SetPlayerInterior(playerid, 0);
                SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the top of Starfish Tower");
            }
            case 2: { // Wheel Arch Angels
                SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
                SetPlayerInterior(playerid, 0);
                SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Wheel Arch Angels tuning-shop");
            }
            case 3: { // Jizzys
                SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
                SetPlayerInterior(playerid, 0);
                SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Jizzy's Nightclub!");
            }
            case 4: { // 4Dragons
                SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
                SetPlayerInterior(playerid, 0);
                SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Four Dragons Casino");
            }
            case 5: { // Come-a-Lot
                SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
                SetPlayerInterior(playerid, 0);
                SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Come-a-Lot casino!");
            }
        }
    }
    return 1;
}
```

## Menu tonen

Maak een simpele command om het menu te tonen, bijv. in `OnPlayerCommandText`:

```pawn
if (strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu, playerid);
    return 1;
}
```

## Tips

Je kunt [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) op `false` zetten na `ShowMenuForPlayer` en op `true` aan het einde van `OnPlayerSelectedMenuRow`, zodat de speler niet kan bewegen tijdens browsen.

Succes met je eigen menu’s! Vragen? Stel ze op de forums/Discord.

---
title: Menu Guide
sidebar_label: Menu Guide
---

Een korte tutorial over het gebruiken van het menusysteem van de game. Dit systeem verschilt van SA-MP dialogs en lijkt meer op de klassieke UI van de originele game.

## Menus in SA-MP

Menus ogen ingewikkeld, maar dat valt mee. We maken een simpel teleportmenu.

## Eerste menustappen

Maak eerst een menuvariabele. De prefix `Menu:` geeft de juiste [tag](../scripting/language/Tags):

```pawn
new Menu:teleportmenu;
```

Nu maken we het menu aan en wijzen het toe in `OnGameModeInit`:

```pawn
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

Uitleg [CreateMenu](../scripting/functions/CreateMenu)-argumenten:

| Parameter       | Betekenis                                                      |
| --------------- | -------------------------------------------------------------- |
| title           | De titel van het menu                                         |
| columns         | Aantal kolommen (max. 2)                                       |
| Float:x         | X-positie op het scherm (links-rechts)                         |
| Float:y         | Y-positie op het scherm (boven-onder)                          |
| Float:col1width | Breedte van kolom 1                                            |
| Float:col2width | Breedte van kolom 2                                            |

## Items toevoegen

Voeg items toe onder de `CreateMenu`-aanroep:

```pawn
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

Uitleg [AddMenuItem](../scripting/functions/AddMenuItem):

| Parameter | Betekenis                                      |
| --------- | ---------------------------------------------- |
| menuid    | In welk menu het item komt                     |
| column    | In welke kolom het item komt                   |
| text      | De tekst van het item                          |

## Actie bij selectie

Als een speler een menu-item kiest, wordt [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow) aangeroepen. Check eerst of het ons menu is met `GetPlayerMenu` en gebruik dan een `switch` op `row`:

```pawn
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        switch (row)
        {
            case 0: { SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382); SetPlayerInterior(playerid, 0); }
            case 1: { SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457); SetPlayerInterior(playerid, 0); }
            case 2: { SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797); SetPlayerInterior(playerid, 0); }
            case 3: { SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105); SetPlayerInterior(playerid, 0); }
            case 4: { SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203); SetPlayerInterior(playerid, 0); }
            case 5: { SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107); SetPlayerInterior(playerid, 0); }
        }
    }
    return 1;
}
```

## Menu tonen

Maak een command om het menu te tonen (of gebruik je eigen command-processor):

```pawn
if (strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu, playerid);
    return 1;
}
```

Tip: je kunt [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) op `false` zetten na `ShowMenuForPlayer` en weer `true` in `OnPlayerSelectedMenuRow` zodat spelers niet bewegen terwijl ze het menu browsen.


