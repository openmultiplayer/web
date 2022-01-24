---
title: "Scripting: Tags"
description: A guide for Tags, a type-like feature of the Pawn language providing safety features for working with values of different intent.
---

## Uvod

Oznaka je prefiks varijabli koja govori kompajleru da tretira varijablu posebno pod određenim okolnostima. Na primjer, možete koristiti oznake da definirate gdje se varijabla može, a gdje ne može koristiti, ili poseban način za dodavanje dvije varijable zajedno.

Postoje dvije vrste oznaka - jake oznake (počinju velikim slovom) i slabe oznake (počinju malim slovom), uglavnom su iste, međutim pod određenim okolnostima slabe oznake mogu se tiho pretvoriti u oznake bez oznaka kompajler, tj. nećete dobiti upozorenje, većinu vremena sa slabim oznakama, a sve vrijeme sa jakim oznakama, implicitna promjena oznake će rezultirati upozorenjem koje će vam reći da se podaci vjerovatno koriste pogrešno.

Vrlo jednostavan primjer je sljedeći:

```c
new
    File:myfile = fopen("file.txt", io_read);
myFile += 4;
```

Funkcija `fopen` će vratiti vrijednost s oznakom tipa `File:`, nema problema u toj liniji jer se povratna vrijednost pohranjuje u varijablu također sa oznakom `File:` (imajte na umu da su slučajevi isto tako). Međutim, u sljedećem redu vrijednost `4` se dodaje u ručicu datoteke. `4` nema oznaku (to je zapravo tip oznake `_:` ali varijable, vrijednosti i funkcije bez oznake se automatski postavljaju na to i ne morate se brinuti o tome normalno) i myFile ima oznaku `File :`, očito ništa i nešto ne može biti isto tako da će kompajler izdati upozorenje, ovo je dobro jer je rukohvat fajla besmislen u smislu njegove stvarne vrijednosti i tako će njegova modifikacija samo uništiti ručku i znači datoteka se ne može zatvoriti jer više ne postoji valjana ručica za prosljeđivanje i zatvaranje datoteke.

### Jake oznake

Kao što je gore spomenuto, jaka oznaka je svaka oznaka koja počinje velikim slovom. Pod oznake misli se na tagove koji označavaju tip podatka. Primjeri ovih u SA:MP uključuju:

```c
Float:
File:
Text:
```

One se ne mogu miješati s drugim tipovima varijabli i uvijek će izdati upozorenje kada to pokušate učiniti:

```c
new
    Float:myFloat,
    File:myFile,
    myBlank;

myFile = fopen("file.txt", io_read); // File: = File:, no warning

myFloat = myFile; // Float: = File:, "tag mismatch" warning

myFloat = 4; // Float: = _: (none), "tag mismatch" warning

myBlank = myFloat; // _: (none) = Float:, "tag mismatch" warning
```

### Slabe oznake

Slaba oznaka se uglavnom ponaša isto kao i jaka oznaka, međutim kompajler neće izdati upozorenje kada je odredište bez oznaka, a izvor je slaba oznaka. Na primjer, uporedite sljedeće jake i slabe kodove oznaka, prvi sa jakom oznakom će dati upozorenje, drugi sa slabom oznakom neće:

```c
new
    Strong:myStrong,
    weak:myWeak,
    myNone;

myNone = myStrong; // Warning
myNone = myWeak; // No warning
```

Međutim, obrnuto nije tačno:

```c
myWeak = myNone; // Warning
```

To vrijedi i za funkcije, pozivanje funkcije s parametrom bez oznaka, prosljeđivanje slabe označene varijable neće dati upozorenje:

```c
new
    weak:myWeak;
MyFunction(myWeak);



MyFunction(myVar)
{
    ...
}
```

Ali pozivanje funkcije s označenim parametrom (slabim ili jakim), prosljeđivanje neoznačenog parametra će dati upozorenje. Primjeri slabih oznaka u SA:MP manje su poznati kao takvi iako se često koriste i uključuju:

```c
bool:
filemode:
floatround_method:
```

## Koristi

### Izjava

Deklarisanje varijable sa oznakom je vrlo jednostavno, samo napišite oznaku, nema potrebe da definišete oznaku unapred na bilo koji način, ali ovo je moguće i ima svoju upotrebu, što će kasnije postati jasno:

```c
new
    Mytag:myVariable;
```

Deklarisanje varijable s jednom od postojećih oznaka omogućit će vam korištenje te varijable s funkcijama i operatorima koji su već napisani za taj tip oznake.

### Funkcije

Kreiranje funkcije za preuzimanje ili vraćanje oznake je vrlo jednostavno, samo dodajte prefiks relevantnom dijelu željenom vrstom oznake, na primjer:

```c
Float:GetValue(File:fHnd, const name[])
{
    ...
}
```

Ta funkcija preuzima ručicu datoteke i vraća float vrijednost (vjerovatno vrijednost pročitanu iz datoteke i koja odgovara imenu vrijednosti proslijeđenom u `name[]`). Ova funkcija bi najvjerovatnije koristila funkciju `floatstr`, koja također vraća Float: (kao što možete vidjeti gledajući statusnu traku pawno-a kada kliknete na funkciju na desnoj listi funkcija), nakon što uzmete niz. Implementacija ove funkcije nije važna, ali će konvertovati niz u IEEE float vrijednost, koja se zatim pohranjuje kao ćelija (zapravo je striktno pohranjena kao cijeli broj koji samo slučajno ima identičan bitni uzorak relevantnom IEEE broju kao PAWN je bez tipa, ali to je ono protiv čega se tagovi djelimično mogu boriti).

### Operatori

Operatori kao što su `+`, `==`, `>` itd. mogu se preopteretiti za različite oznake, tj. izvođenje `+` na dva Float: čini nešto drugačije od rada na dvije neoznačene varijable. Ovo je posebno korisno u slučaju varijabli s pomičnim stupnjem jer kao što je spomenuto, one zapravo nisu float, već su cijeli brojevi s vrlo specifičnim bitnim uzorkom, da operatori nisu preopterećeni, operacije bi se jednostavno izvodile nad cijelim brojevima što bi dalo glupost ako bi odgovor ponovo su protumačeni kao float. Iz tog razloga oznaka Float: ima preopterećene verzije većine operatora za pozivanje posebnih funkcija za obavljanje matematike na serveru umjesto u zalaganju.

Operator je potpuno sličan normalnoj funkciji, ali umjesto imena funkcije koristite "operator(**symbol**)" gdje je (**symbol**) operator koji želite prepisati. Važeći operateri su:

```c
+
-
=
++
--
==
*
/
!=
>
<
>=
<=
!
%
```

Stvari poput `\`, `*`, `=` itd. rade se automatski. Stvari poput `&` itd. ne mogu biti preopterećene. Također možete preopteretiti operatora više puta s različitim kombinacijama oznaka. Na primjer:

```c
stock Float:operator=(Mytag:oper)
{
    return float(_:oper);
}
```

Ako to dodate svom kodu i uradite:

```c
new
    Float:myFloat,
    Mytag:myTag;

myFloat = myTag;
```

Više nećete dobijati upozorenje kompajlera kao što ste ranije imali jer se sada rukuje operatorom `=` za slučaj `Float: = Mytag:` tako da kompajler tačno zna šta treba da uradi.

### Prepisivanje

U primjeru preopterećenja iznad funkcionalna linija je bila:

```c
return float(_:oper);
```

Ovo je primjer prepisivanja oznake, `_:` ispred oper znači da kompajler u osnovi zanemaruje činjenicu da oper ima tip oznake Mytag: i tretira je kao tip oznake `_:` (tj. nema tip oznake). Funkcija `float()` označava normalan broj tako da se mora proslijediti jedan. U tom primjeru se pretpostavlja da `Mytag` pohranjuje običan cijeli broj, ali se prepisivanjem mora postupati vrlo pažljivo, na primjer sljedeće će dati vrlo čudne rezultate:

```c
new
    Float:f1,
    Float:f2 = 4.0;
f1 = float(_:f2);
```

Razum bi nalagao da će `f1` završiti kao `4.0`, međutim neće. Kao što je spomenuto, f2 pohranjuje reprezentaciju `4.0`, a ne samo `4` kao cijeli broj, to znači da je stvarna vrijednost varijable kao cijeli broj vrlo neparan broj. Dakle, ako kažete kompajleru da tretira varijablu kao cijeli broj, on će jednostavno uzeti uzorak bitova u varijabli kao vrijednost, neće pretvoriti float u cijeli broj, tako da ćete dobiti gotovo slučajni broj (to zapravo nije nasumično jer postoji obrazac za IEEE plutajuće zareze, ali neće biti ništa poput `4.0`).
