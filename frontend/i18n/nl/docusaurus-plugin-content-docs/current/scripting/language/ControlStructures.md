---
title: "Controle-structuren"
sidebar_label: "Controle-structuren"
description: Een overzicht van controle-structuren in de Pawn-taal
---

## Voorwaardes

### if

Een if-instructie controleert of iets waar is en doet dan iets als dat zo is.

```c
new
    a = 5;
if (a == 5)
{
    print("a is 5");
}
```

De code tussen de haakjes na "if" heet de conditie. Er zijn verschillende dingen waarop je kunt testen (zie operators).

In het bovenstaande voorbeeld zijn zowel "a" als 5 symbolen. Functies kunnen ook symbolen zijn:

```c
if (SomeFunction() == 5)
{
    print("SomeFunction() is 5");
}
```

Dat test de geretourneerde waarde van SomeFunction (zie hieronder) tegen 5.

Je kunt ook controles combineren om meerdere dingen te checken:

```c
new
    a = 5,
    b = 3;
if (a == 5 && b != 3)
{
    print("Wordt niet geprint");
}
```

Dit voorbeeld controleert dat a gelijk is aan 5 EN b niet gelijk is aan 3. b is echter 3, dus de check faalt.

```c
new
    a = 5,
    b = 3;
if (a == 5 || b != 3)
{
    print("Wordt geprint");
}
```

Dit voorbeeld controleert dat a gelijk is aan 5 OF b niet gelijk is aan 3. b is 3, dus dat deel is onwaar; a is 5, dus dat deel is waar. We gebruiken || (of), dus slechts één deel hoeft waar te zijn (als beide waar zijn, is de uitkomst ook waar). De if is dus waar.

Het is ook mogelijk vergelijkingen te ketenen zonder expliciet twee vergelijkingen met AND te verbinden.

```c
new
    idx = 3;

if (0 < idx < 5)
{
    print("idx is groter dan 0 en kleiner dan 5!");
}
```

### Operators

De volgende symbolen kun je gebruiken in vergelijkingen, met hun uitleg. Sommige zijn al in voorbeelden gebruikt.

| Operator     | Betekenis                                                          | Gebruik                                                      |
| ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------ |
| ==           | Links is gelijk aan Rechts                                         | if (Links == Rechts)                                         |
| !=           | Links is niet gelijk aan Rechts                                    | if (Links != Rechts)                                         |
| >            | Links is groter dan Rechts                                         | if (Links > Rechts)                                          |
| >=           | Links is groter dan of gelijk aan Rechts                           | if (Links >= Rechts)                                         |
| \<           | Links is kleiner dan Rechts                                        | if (Links \< Rechts)                                         |
| \<=          | Links is kleiner dan of gelijk aan Rechts                          | if (Links \<= Rechts)                                        |
| &&           | en                                                                 | if (Links && Rechts)                                         |
| ||           | of                                                                 | if (Links || Rechts)                                         |
| !            | niet                                                               | if (!Variabele)                                              |
|              | nor                                                                | if (!(Links || Rechts))                                      |
|              | nand                                                               | if (!(Links && Rechts))                                      |
|              | exclusieve of (xor, eor) - slechts één is waar, niet beide         | if (!(Links && Rechts) && (Links || Rechts))                 |
|              | niet-exclusieve of (nxor, neor) - beide of geen van beide zijn waar| if ((Links && Rechts) || !(Links || Rechts))                 |

### Haakjes

Een ander belangrijk aspect van if-instructies zijn haakjes; die bepalen de volgorde waarin dingen worden uitgevoerd:

```c
new
    a = 3,
    b = 3,
    c = 1;
if (a == 5 && b == 3 || c == 1)
{
    print("Wordt dit aangeroepen?");
}
```

Er zijn twee manieren om bovenstaande instructie te bekijken:

```c
if ((a == 5 && b == 3) || c == 1)
```

En:

```c
if (a == 5 && (b == 3 || c == 1))
```

In de eerste versie wordt gecontroleerd of a 5 is en b 3 is; als dat onwaar is (dus een van beide klopt niet), wordt gecontroleerd of c 1 is. (a == 5 && b == 3) is onwaar, dus vervang die groep door FALSE:

```c
if (FALSE || c == 1)
```

FALSE kan nooit waar zijn, maar c is 1, dus dat deel is waar; met OR ertussen wordt de hele voorwaarde waar.

De tweede versie controleert of a 5 is; als dat zo is, wordt gecontroleerd of b 3 is of c 1 is. (b == 3 || c == 1) is waar, dus:

```c
if (a == 5 && TRUE)
```

(a == 5) is onwaar (a is 3), dus:

```c
if (FALSE && TRUE)
```

Dat kan nooit waar zijn, dus de check faalt.

Dit voorbeeld laat zien hoe haakjes de uitkomst kunnen veranderen. Zonder haakjes gebruikt de compiler standaard de eerste versie, maar dat is niet altijd gegarandeerd; gebruik dus altijd haakjes, al is het maar voor duidelijkheid.

- Opmerking: (b != 3) in het OF-voorbeeld wordt niet uitgevoerd door short-circuiting: het eerste deel is al waar, dus het tweede deel wordt niet meer geëvalueerd.

### else

else voert iets uit als een if-check faalt:

```c
new
    a = 5;
if (a == 3) // Onwaar
{
    print("Wordt niet aangeroepen");
}
else
{
    print("Wordt aangeroepen omdat de check faalde");
}
```

### else if

Een else if is een extra check die gebeurt als de eerste if faalt:

```c
new
    a = 5;
if (a == 1)
{
    print("Wordt aangeroepen als a 1 is");
}
else if (a == 5)
{
    print("Wordt aangeroepen als a 5 is");
}
else
{
    print("Alle andere nummers");
}
```

Je kunt er zoveel hebben als je wilt (per groep slechts één if en één else):

```c
new
    a = 4;
if (a == 1)
{
}
else if (a == 2)
{
}
else if (a == 3)
{
}
else if (a == 4)
{
}
else
{
}
```

else if-checks gebruiken de waarde zoals die was bij het begin van de keten; dus dit werkt niet zoals je denkt:

```c
new
    a = 5;
if (a == 5)
{
    a = 4;
}
else if (a == 4)
{
    // Wordt niet aangeroepen: de eerste check faalde niet
}
```

Maak de tweede dan een aparte if.

### ?:

'?' en ':' samen vormen de triadische operator; dit gedraagt zich als een if binnen een expressie:

```c
new
    a,
    b = 3;
if (b == 3)
{
    a = 5;
}
else
{
    a = 7;
}
```

Korter geschreven:

```c
new
    a,
    b = 3;
a = (b == 3) ? (5) : (7);
```

Het deel voor '?' is de conditie; tussen '?' en ':' de waarde als dat waar is; erna de waarde als het onwaar is. Je kunt ze ook nesten, vergelijkbaar met else if:

```c
new
    a,
    b = 3;
a = (b == 1) ? (2) : ((b == 2) ? (3) : ((b == 3) ? (4) : (5)));
```

## Lussen

### while

"while"-lussen voeren code uit zolang de conditie waar is. De conditie is hetzelfde type als bij if en wordt herhaaldelijk gecontroleerd:

```c
new
    a = 9;
while (a < 10)
{
    // Code in de lus
    a++;
}
// Code na de lus
```

### for()

Een "for"-lus is een compacte vorm van een "while". Een for-statement heeft drie delen: initialisatie, conditie en finalisatie:

```c
for (new a = 9; a < 10; a++)
{
    // Code in de lus
}
// Code na de lus
```

Door alle spelers itereren:

```c
for(new i,a = GetMaxPlayers(); i < a; i++)
{
        if (IsPlayerConnected(i))
        {
                 // doe iets
        }
}
```

Elk onderdeel mag je weglaten door het leeg te laten:

```c
new
    a = 9;
for ( ; a < 10; )
{
    // Code in de lus
    a++;
}
// Code na de lus
```

### do-while

Een do-while-lus is een while-lus waarbij de conditie achteraf staat; de code binnenin wordt dus altijd minstens één keer uitgevoerd:

```c
new
    a = 10;
do
{
    // Code in de lus
    a++;
}
while (a < 10); // Let op de puntkomma
// Code na de lus
```

### if-goto

Dit is in essentie waar bovenstaande lussen naartoe compileren. Gebruik van goto wordt afgeraden, maar het is leerzaam:

```c
new
    a = 9;

loop_start:
if (a < 10)
{
    // Code in de lus
    a++;
    goto loop_start;
}
// Code na de lus
```

### OBOE

OBOE staat voor Off By One Error: een veelgemaakte fout waarbij een lus één keer te veel of te weinig loopt.

```c
new
    a = 0,
    b[10];
while (a <= sizeof (b))
{
    b[a] = 0;
}
```

Dit voorbeeld loopt 11 keer en probeert b[10] te schrijven, wat buiten de grenzen valt (Out Of Bounds).

## Switch

### switch

Een switch is een gestructureerd if/else if/else-systeem:

```c
new
    a = 5;
switch (a)
{
    case 1:
    {
    }
    case 2:
    {
    }
    case 5:
    {
    }
    default:
    {
    }
}
```

In tegenstelling tot C heeft Pawn geen fall-through tussen cases en zijn cases door accolades begrensd, dus er zijn geen break-statements nodig.

### case

Een case kan een enkele waarde, een lijst of een bereik testen:

```c
case 1, 2, 3, 4:
```

Of met een bereik:

```c
case 1 .. 4:
```

### default

Dit is het equivalent van else in if-structuren: wordt uitgevoerd als geen enkele case matcht.

## Enkelregelige instructies

### goto

Springt naar een label zonder voorwaarde.

```c
goto my_label;

// Dit stuk wordt overgeslagen

my_label: // Labels eindigen met een dubbele punt en staan op een eigen regel

// Dit stuk wordt normaal uitgevoerd
```

Het gebruik van goto wordt sterk afgeraden vanwege de invloed op de programmastroom.

### break

Beëindigt een lus voortijdig:

```c
for (new a = 0; a < 10; a++)
{
    if (a == 5) break;
}
```

### continue

Slaat de huidige iteratie over:

```c
for (new a = 0; a < 3; a++)
{
    if (a == 1) continue;
    printf("a = %d", a);
}
```

### return

Stopt een functie en keert terug naar de aanroeper; kan ook een waarde retourneren.


