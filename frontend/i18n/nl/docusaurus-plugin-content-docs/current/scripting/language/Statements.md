---
title: "Trefwoorden: Statements"
sidebar_label: "Trefwoorden: Statements"
---

## `assert`

Stopt de uitvoering met een runtime-fout als de expressie logisch onwaar is. Werkt doorgaans alleen in `main()`. Gebruik `assert` voor programmeerfouten, niet voor runtime-gebruikersfouten.

```c
main()
{
    assert (MAX_PLAYERS == GetMaxPlayers());
}
```

## `break`

Breekt direct uit de huidige lus (alleen de bovenste luslaag).

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;
    }
    printf("%d", i);
}
```

## `case`

Behandelt een specifieke uitkomst in een `switch`. De uitkomst kan een enkele waarde, lijst of bereik zijn.

## `continue`

Slaat de huidige iteratie over en gaat door met de volgende. In een `for` springt dit naar het update-deel; in een `while` moet je opletten dat je de update niet overslaat (anders kans op een oneindige lus).

## `default`

Afhandeling in `switch` als geen enkele `case` matcht.

## `do`

Wordt gebruikt met `while` voor een lus die altijd minstens één keer draait:

```c
new
    i = 10;
do
{
    printf("%d", i);
    i++;
}
while (i < 10);
```

## `else`

Wordt uitgevoerd als de voorafgaande `if` faalt. Kan gecombineerd worden tot `else if`-ketens.

## `exit`

Beëindigt het huidige programma direct.

```c
main()
{
    exit;
}
```

## `for`

Lus met drie delen: initialisatie; vergelijking; update. De vergelijking bepaalt of de lus doorgaat.

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
```

## `goto`

Springt naar een label. Wordt doorgaans afgeraden ten gunste van heldere structuur.

```c
goto my_label;
printf("Dit wordt niet geprint");
my_label:
printf("Dit wel");
```

## `if`

Eén van de belangrijkste statements: voert code uit afhankelijk van een conditie. Met logische en vergelijkings-operators kun je complexe voorwaarden opbouwen.

## `return`

Verlaat een functie en kan een waarde teruggeven. Je mag niet mixen tussen "niets" retourneren en een waarde retourneren binnen dezelfde functie.

## `sleep`

Pseudo-functie die de uitvoering pauzeert voor een aantal milliseconden. Werkt alleen in `main()`.

```c
printf("Time 0s");
sleep(1000);
printf("Time 1s");
```

## `state`

Onderdeel van PAWN’s state-machine/autonoma; buiten scope van deze pagina.

## `switch`

Gestructureerd alternatief voor if/else-if/else:

```c
switch (someVar)
{
    case 1: { printf("one"); }
    case 2: { printf("two"); }
    case 3: { printf("three"); }
    default: { printf("other"); }
}
```

## `while`

Lustype vergelijkbaar met `for` en `do..while`. Voert code uit zolang de conditie waar is.


