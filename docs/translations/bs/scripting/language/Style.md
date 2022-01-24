---
title: "Pawn Style Guide"
description: A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.
---

Ovaj dokument je kratak vodič o opšte prihvaćenim konvencijama imenovanja i drugim aspektima Pawn izvornog koda kako bi se olakšala komunikacija o namjeri i pojednostavilo otklanjanje grešaka i dijeljenje koda.

Također preporučujemo Vam da pogledate:

- [Moderni Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Paketi](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terminologija

### Izjava

Izjava je dio koda koji imperativno govori glavnom programu da nešto učini. Izjava je valjan dio koda koji daje neki rezultat.

```c
a = b + c;
```

Ovo je izjava sastavljena od varijabli kojoj je dodijeljen rezultat izraza. Ili: [#Expression].

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

Ovo je izjava koja govori programu da pozove funkciju sa određenim parametrima (argumentima):

```c
x + 8
```

Ovo _nije_ izjava jer se rezultat nigdje ne koristi, ovo je samo izraz. Ili: [#Expression].

### Složena izjava

Složeni iskaz je kolekcija iskaza okruženih zagradama.

```c
{
    new message[] = "hi!";
    print(message);
}
```

Ovo je složeni iskaz sastavljen od dva iskaza.

```c
if (a == b)
{
    print("hello!");
}
```

Ovo je složena izjava sa uslovom `if`, ovo se obično naziva "if naredbom".

```c
return Function1(), Function2(), Function3();
```

Ovo _nije_ složena izjava, to je lanac iskaza odvojenih zarezima. Ovaj oblik ulančavanja izjava smatra se lošom praksom.

### Izraz

An expression is a piece of syntax that yields a value, it's not a valid statement unless the yielded value is used in some way.

Expressions are often composed to form statements.

```c
a + b
```

Ovo je jednostavan izraz sabiranja koji uzima dvije vrijednosti i na njih primjenjuje operator dodavanja.

## Smjernice

### Zagrade

Ove zagrade (zovu se još i Allman zagrade) u kodiranju su poželjnije:

```pawn
function()
{
    //
}
```

Međutim, ako ne možete uzdrmati mišićnu memoriju, K&R zagrada je također važeća u Pawn:

```pawn
function() {
    //
}
```

### Switchovi

Switchovi moraju koristiti dva nivoa uvlačenja, jedan za blok `switch` i drugi za svaki izraz `case` ili složeni izraz.

```pawn
switch (variable)
{
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    default:
        return -1;
}
```

```pawn
switch (variable)
{
    case 0:
    {
        // code...
        return 0;
    }
    case 1:
    {
        // code...
        return 1;
    }
    case 2:
    {
        // code...
        return 2;
    }
    default:
    {
        // code...
        return -1;
    }
}
```

### složene izjave (blokovi)

Blokovi moraju uvijek koristiti zagrade, čak i ako postoji samo jedan red koda unutar bloka. Ovo se odnosi na sve nivoe uključujući funkcije.

```pejon
func()
{
    singleLineExpr();
}
```

```pejon
func()
{
    ako ()
    {
        singleLineExpr();
    }
}
```

```pejon
func()
{
    ako ()
    {
        singleLineExpr();
    }
    inače ako ()
    {
        //
    }
    ostalo
    {
        //
    }
}
```

### Imenovanje

#### Funkcije

Funkcije moraju biti imenovane sa `PascalCase`.

#### Globalne varijable

Globalne varijable deklarirane pomoću `new` moraju uvijek koristiti PascalCase s prefiksom `g_`, dakle `g_VariableName`, međutim, ako su deklarirane koristeći `static`, uvijek moraju koristiti `s_` s prefiksom PascalCase, tako da `s_VariableName`

Konstantni globali moraju koristiti `SCREAMING_SNAKE_CASE`.

#### Lokalne varijable

Lokalne varijable uvijek moraju koristiti `camelCase` i nikada ne smiju koristiti imena od jednog slova, osim:

- `i`, `j`, `k`, itd u `for` petljama
- `x`, `y`, `z`, itd. u matematičkom kontekstu

#### Enumerators

Popisivači, ako su imenovani, moraju imati prefiks `E_` (jaka oznaka) ili `e_` (slaba oznaka)

Polja popisivača također moraju biti `SCREAMING_SNAKE_CASE` i koristiti ime popisivača kao prefiks.

```pejon
static enum E_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Korištenje slabe oznake

```pejon
static enum e_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Neimenovana polja popisivača također moraju biti `SCREAMING_SNAKE_CASE` i koristiti ime popisivača kao prefiks.

```pejon
statički enum {
    ENUMATOR_INTEGER,
    Float:ENUMATOR_FLOAT,
}
```

Enumeratori uvijek moraju biti deklarirani kao `statički` osim ako se ne koriste izvan modula.

#### Makroi i definicije predprocesora

Makroi moraju uvijek koristiti `SCREAMING_SNAKE_CASE` bez obzira na njihovu upotrebu.

Definicije predprocesora (konstantne definicije) također moraju koristiti `SCREAMING_SNAKE_CASE`.

Ovo pomaže u razlikovanju varijabli i konstanti, kao i funkcija i makroa.

Općenito se savjetuje izbjegavanje izmišljanja novih sintaksičkih elemenata kako bi se spriječila zabuna među pridošlicama o tome koje su riječi dio jezika, a koje riječi su iz biblioteka.

Međutim, neke starije biblioteke to rade i ne mogu se promijeniti zbog kompatibilnosti unatrag.

### Dokumentacija

Izvezene funkcije uvijek dokumentirajte jednostavnim komentarom linije u formatu `// FunctionName radi X, Y i Z i vraća A` gdje je prva riječ ime same funkcije praćeno kratkim opisom onoga što radi. Nema potrebe da gubite vreme na opisivanje svakog pojedinačnog parametra. Na primjer:

```pejon
// LoadPlayerAccount se poziva da pokrene proces učitavanja naloga. Ovo
// funkcija će pokrenuti HTTP pozive za dobivanje podataka o igraču, prikazat će dijaloge
// igraču i na kraju, kada se proces završi, događaju
// `OnPlayerLogin` se emituje nakon uspjeha. U slučaju neuspjeha, igrač biva izbačen.
Stock Error:LoadPlayerAccount(playerid)
{
    // kod...
}
```

Svaki paket bi trebao imati `README` i, ako je potrebno, svaki modul bi trebao imati komentar u prvom redu koji opisuje šta taj modul pruža.
