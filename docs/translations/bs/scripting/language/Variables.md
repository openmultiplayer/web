---
title: "Basics: Variables"
description: A beginner's guide to variables in Pawn
---

## Varijable

Jedan od najvažnijih koncepata u programiranju je koncept 'varijable'. U programiranju, varijabla je entitet koji je promjenjiv, ali u smislu čega? U Pawn jeziku varijabla ima 'vrijednost' u bilo kojem trenutku i ta vrijednost - kao što ime sugerira - je "promjenjiva" ili "promjenjiva".

Razlog zašto su varijable toliko važne je zato što su one u osnovi male jedinice memorije računala koje mogu držati ili 'pamtiti' različite vrijednosti dok se program izvršava (pokreće), a to svojstvo se pokazalo vrlo korisnim u programiranju. Na primjer, ako želite da pratite rezultate 100 igrača u igri, možete to učiniti jednostavno programiranjem računara da pohranjuje (zapamti) i ažurira te vrijednosti. Kasnije, ako želite da pronađete srednji rezultat tih igrača ili želite da kreirate listu lidera, tim vrednostima iz varijabli se može lako pristupiti i koristiti u tu svrhu.

### Deklarisanje varijabli

Slijedi sintaksa za deklaraciju varijable:

```c
// Kreiranje (prikladnije, 'deklariranje') varijable pod nazivom 'myVariable

nova myVariable;

// Ključna riječ 'new' se koristi za deklariranje varijable
// U gornjem redu varijabla je deklarirana s imenom 'myVariable'
// Tačka-zarez se koristi na kraju za zatvaranje deklaracije.
```

Sintaksa deklaracije može se bolje razumjeti gledanjem nekih primjera:

```c
new var;
new municija;
new rezultat;
new vozila;
new topScore;
```

Svaka od gore definiranih varijabli ima vrijednost po defaultu, koja je nula. Postoje različiti načini dodjeljivanja vrijednosti varijabli. Jedna metoda je direktno dodjeljivanje vrijednosti varijabli kako je deklarirana:

```c
new letters = 25;
```

U gornjem primjeru, varijabla pod nazivom 'slova' je deklarirana, sa vrijednošću od 25. Primijetit ćete znak jednakosti koji je jednostavan Operator dodjele koji se može koristiti za dodjelu vrijednosti varijablama. On procjenjuje izraz na njegovoj desnoj strani i dodjeljuje rezultantnu vrijednost varijabli referenciranoj na njegovoj lijevoj strani. Osim dodjeljivanja vrijednosti direktno na deklaraciji, to možete učiniti iu kasnijim dijelovima koda:

```c
new letters;

letters = 25;
```

### Opsegovi

Promjena vrijednosti varijable je moguća samo ako je dio koda na koji referencirate varijablu unutar opsega te varijable. Opseg varijable ovisi o bloku koda ili poziciji na kojoj je ta varijabla deklarirana. Na primjer, varijabla koja je deklarirana izvan bilo kojeg bloka koda, obično na početku skripte, ima 'Globalni' opseg i može joj se pristupiti s bilo kojeg mjesta unutar skripte:

```c
#include <a_samp>

new g_var = 5;

public OnFilterScriptInit ()
{
    g_var = 10;

    printf ("The value is %i", g_var);

    return 1;
}

public OnPlayerConnect (playerid)
{
    g_var = 100;

    printf ("The value is %i", g_var);

    return 1;
}

// Output :
// The value is 10
// The value is 100

// Note: The second output line is shown only when a player connects.
```

Osim "globalnih" (opseg) varijabli, postoje "lokalne" ili "privatne" varijable kojima se može pristupiti samo iz bloka koda u kojem su deklarirane.

```c
#include <a_samp>

public OnFilterScriptInit ()
{
    new localVar;

    localVar = 5;

    return 1;
}

public OnPlayerConnect (playerid)
{
    localVar = 10; // This line will show an error upon compilation

    return 1;
}
```

Ako pokušate kompajlirati gornji kod, kompajler će pokazati grešku koja je razumna jer se lokalna varijabla upućuje u potpuno drugom bloku koda. Napomena: Ako je to ugniježđeni blok koda onda se varijabli može pristupiti odatle.

Jedna važna stvar koju treba napomenuti je da ne možete deklarirati varijable s istim imenima ako se njihovi opsegi zalažu. Na primjer, ako već imate varijablu pod nazivom 'score' u globalnom opsegu, ne možete kreirati drugu varijablu pod nazivom 'score' u globalnom opsegu kao i lokalnu, a to vrijedi i za druge strane (ako ste već imate lokalnu varijablu, izbjegavajte deklariranje globalne varijable s istim imenom).

```c
#include <a_samp>

new g_score;

public OnFilterScriptInit ()
{
    new g_score = 5; // This line will show an error.
    return 1;
}
```

### Pravila imenovanja

Sada kada znate kako deklarirati varijable, morate znati pravila imenovanja za deklariranje varijable koja su navedena u nastavku:

- Sva imena varijabli moraju početi slovom ili donjom crtom (`_`)
- Nakon prvog početnog slova, imena varijabli mogu sadržavati slova i brojeve, ali bez razmaka ili posebnih znakova.
- Imena varijabli razlikuju velika i mala slova, tj. velika slova se razlikuju od malih.
- Upotreba rezervirane riječi (ključne riječi) kao imena varijable će pokazati grešku.

#### Primjeri

```c
new new; // Incorrect : Using a reserved word
new _new; // Correct

new 10letters; // Incorrect : Name starting with a number
new letters10; // Correct
new letters_10; // Correct

new my name; // Incorrect : Space in the name
new my_name; // Correct

new !nternet; // Incorrect
new Internet; // Correct
```

### Čuvanje različitih vrsta podataka

Nakon toga, sada pogledajmo neke primjere koje vrste podataka mogu biti pohranjene u varijabli i kako:

```c
new letter = 'M';


new value = 100;


new decimalValue = 1.0;
// Works, but will show a compiler warning
// warning 213: tag mismatch


new engineOn = true;
// Works, and will not show a compiler warning but using a Tag is suggested


new sentence = "This is a sentence";
// Will show an error.
// error 006: must be assigned to an array
```

Varijabla može zadržati karakter, cjelobrojnu vrijednost, boolean (tačno ili netačno) i float vrijednost (decimalna vrijednost). Komentari u gornjem kodu pokazuju da pohranjivanje stringa u varijablu rezultira greškom (jer se stringovi mogu pohraniti samo u _Nizovi_). Osim toga, dodjeljivanje float vrijednosti varijabli rezultirat će upozorenjem kompajlera, što se može izbjeći dodavanjem 'tagova'. Bez odgovarajućih oznaka, skripta će prikazati upozorenja nakon kompilacije, ali će biti izvršna. Oznake govore kompajleru o vrsti podataka koji se namjeravaju pohraniti u varijablu, što nas zauzvrat obavještava u obliku grešaka ili upozorenja ako napravimo grešku u kodu za razbijanje programa. Primjer oznaka:

```c
new decimalValue = 1.0; // Incorrect
new bool: decimalValue = 1.0 // Incorrect
new Float: decimalValue = 1.0; // Correct

new switchOn = 1.0; // Incorrect
new switchOn = true; // Incorrect, doesn't show a warning
new bool: switchOn = true; // Correct
```

Korištenje ispravnih oznaka je važno kako biste izbjegli bilo kakve greške ili greške tokom izvršavanja programa.

Pošto je Pawn jezik bez tipa, omogućava nam da skladištimo različite tipove podataka u istoj varijabli što može biti korisno u nekim slučajevima i problematično u drugim, ali takva upotreba varijabli se ne preporučuje.

```c
#include <a_samp>

public OnFilterScriptInit ()
{

    new var ;

    var = 'a';
    printf ("%c", var);

    var = 1;
    printf ("%d", var);

    var = 1.0;
    printf ("%f", var);

    var = true;
    printf ("%d", var); // prints a value 0 or 1

    return 1;
}

// Output :
a
1
1.000000
1
```
