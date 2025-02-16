---
title: "Cuvant: Initializare"
sidebar_label: "Cuvant: Initializare"
---

## `const`

```c
new const
    MY_CONSTANT[] =  {1, 2, 3};
```

const nu este utilizat pe scară largă, însă declară o variabilă care nu poate fi modificată prin cod. Există câteva utilizări pentru aceasta - funcțiile cu parametrii matricei const pot fi uneori compilate mai eficient sau este posibil să doriți ceva de genul a defini, dar care este o matrice. const este un modificator, trebuie să meargă cu un declarator de variabile nou sau altul. Dacă încercați să modificați o variabilă const, compilatorul se va plânge.

## `enum`

Enumerările sunt un sistem foarte util pentru reprezentarea unor grupuri mari de date și modificarea rapidă a constantelor. Există câteva utilizări principale - înlocuirea seturilor mari de instrucțiuni de definire, reprezentarea simbolică a sloturilor matrice (acestea sunt de fapt același lucru, dar arată diferit) și crearea de noi etichete.

De departe cea mai obișnuită utilizare este definirea matricei:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

Aceasta va crea o matrice cu două sloturi pentru fiecare jucător. În cel la care face referire E_MY_ARRAY_MONEY va pune 0 atunci când un jucător se conectează și 5 în E_MY_ARRAY_GUN. Fără o enumere ar arăta astfel:

```c
new
    gPlayerData[MAX_PLAYERS][2];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][0] = 0;
    gPlayerData[playerid][1] = 5;
}
```

Și așa compilează primul. Acest lucru este OK, cu toate acestea este mai puțin lizibil - pentru ce este slotul 0 și pentru ce este slotul 1? Și este mai puțin flexibil, ce se întâmplă dacă doriți să adăugați un alt spațiu între 0 și 1, trebuie să redenumiți toate 1s-urile în 2s, adăugați-l pe cel nou și să sperați că nu ați pierdut nimic, atunci când veți face doar un enum:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

Recompilați și totul va fi actualizat pentru dvs.

Deci, de unde știe o enumere ce valori să dea lucrurilor? Formatul complet al unei enum este:

```c
enum NAME (modifier)
{
    NAME_ENTRY_1 = value,
    NAME_ENTRY_2 = value,
    ...
    NAME_ENTRY_N = value
}
```

Oricât de mult este implicat acest lucru. În mod implicit, dacă nu specificați un modificator, acesta devine (+ = 1), aceasta înseamnă că fiecare valoare din enum este ultima valoare din enum + 1, deci pentru:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Prima valoare (E_EXAMPLE_0) este 0 (implicit dacă nu este specificată nicio altă valoare), deci a doua valoare (E_EXAMPLE_1) este 1 (0 + 1) și a treia valoare (E_EXAMPLE_2) este 2 (1 + 1). Aceasta face ca valoarea E_EXAMPLE 3 (2 + 1), numele enumului să fie și ultima valoare din enum. Dacă schimbăm modificatorul obținem valori diferite:

```c
enum E_EXAMPLE (+= 5)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

In that example every value is the last value + 5 so, starting from 0 again, we get: E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 5, E_EXAMPLE_2 = 10, E_EXAMPLE = 15. If you were to declare an array of:

```c
new
    gEnumArray[E_EXAMPLE];
```

You would get an array 15 cells big however you would only be able to access cells 0, 5 and 10 using the enum values (you could however still use normal numbers). Lets look at another example:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

În aceasta toate valorile sunt 0. De ce? Ei bine, prima valoare implicită este 0, apoi 0 _ 2 = 0, apoi 0 _ 2 = 0 și 0 \ \* 2 = 0. Deci, cum putem corecta acest lucru? Pentru aceasta sunt utilizate valorile personalizate:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Aceasta setează prima valoare la 1, deci ajungeți la 1, 2, 4 și 8. Crearea unui tablou cu care vă va oferi un tablou de 8 celule cu acces numit la celulele 1, 2 și 4. Puteți seta oricare dintre valorile dvs. și cât de multe valori doriți:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2
}
```

Rezultand:

```c
0, 1, 2, 4
```

Cat timp:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2 = 1
}
```

Rezulta:

```c
1, 1, 1, 2
```

Nu este recomandat să folosiți altceva decât + = 1 pentru tablouri.

De asemenea, puteți utiliza tablouri în enumerări:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0[10],
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Acest lucru ar face E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 10, E_EXAMPLE_2 = 11 și E_EXAMPLE = 12, contrar credinței populare de 0, 1, 2 și 3.

articolele enumere pot avea, de asemenea, etichete, deci pentru un exemplu original:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    Float:E_MY_ARRAY_HEALTH,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
    gPlayerData[playerid][E_MY_ARRAY_HEALTH] = 50.0;
}
```

Acest lucru nu va da o nepotrivire a etichetei.

Enumurile pot fi folosite și ca etichete:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_VAL_1 = 1,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;
```

Aceasta va crea o nouă variabilă și îi va atribui valoarea 6 (4 | 2) și va avea o etichetă personalizată astfel:

```c
gMyTagVar = 7;
```

Va genera un avertisment de nepotrivire a etichetelor, deși puteți utiliza suprascrierea etichetelor pentru a o ocoli:

```c
gMyTagVar = E_MY_TAG:7;
```

Acest lucru poate fi foarte util pentru datele de semnalizare (adică un bit pentru unele date) sau chiar pentru date combinate:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_MASK = 0xFF,
    E_MY_TAG_VAL_1 = 0x100,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3 | (E_MY_TAG:7 & E_MY_TAG_MASK);
```

Care va produce o valoare de 1543 (0x0607).

În cele din urmă, după cum sa menționat inițial, enumurile pot fi folosite pentru a înlocui definițiile prin angajarea numelui:

```c
#define TEAM_NONE   0
#define TEAM_COP    1
#define TEAM_ROBBER 2
#define TEAM_CIV    3
#define TEAM_CLERK  4
#define TEAM_DRIVER 5
```

Sunt sigur că mulți dintre voi au văzut o mulțime de lucruri de genul acesta pentru a defini echipe. Totul este bine, dar este foarte static. Acest lucru poate fi ușor înlocuit cu un enum pentru a gestiona automat alocările numerice:

```c
enum
{
    TEAM_NONE,
    TEAM_COP,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Toate au aceleași valori ca și înainte și pot fi utilizate exact în același mod:

```c
new
    gPlayerTeam[MAX_PLAYERS] = {TEAM_NONE, ...};

public OnPlayerConnect(playerid)
{
    gPlayerTeam[playerid] = TEAM_NONE;
}

public OnPlayerRequestSpawn(playerid)
{
    if (gPlayerSkin[playerid] == gCopSkin)
    {
        gPlayerTeam[playerid] = TEAM_COP;
    }
}
```

În timp ce ne referim la subiect, există o modalitate mult mai bună de a defini echipele pe baza acestei metode:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Acum TEAM_COP este 1, TEAM_ROBBER este 2, TEAM_CIV este 4 etc, care în binar este 0b00000001, 0b00000010 și 0b00000100. Aceasta înseamnă că, dacă echipa unui jucător este de 3, atunci se află atât în ​​echipa de polițiști, cât și în echipa de tâlhari. Poate suna inutil, dar deschide posibilități:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER,
    TEAM_ADMIN
}
```

Folosind acest lucru, puteți fi atât într-o echipă normală, cât și în echipa de administratori, utilizând doar o singură variabilă. Evident, este necesară o mică modificare a codului, dar este ușor:

Pentru a adăuga un jucător la o echipă:

```c
gPlayerTeam[playerid] |= TEAM_COP;
```

Pentru a elimina un jucător dintr-o echipă:

```c
gPlayerTeam[playerid] &= ~TEAM_COP;
```

Pentru a verifica dacă un jucător face parte dintr-o echipă:

```c
if (gPlayerTeam[playerid] & TEAM_COP)
```

Foarte simplu și foarte util.

## `forward`

forward îi spune compilatorului că o funcție vine mai târziu. Este necesar pentru toate funcțiile publice, totuși poate fi utilizat în alte locuri. Utilizarea sa este „forward” urmată de numele complet și parametrii funcției pe care doriți să o redirecționați, urmată de un punct și virgulă:

```c
forward MyPublicFunction(playerid, const string[]);

public MyPublicFunction(playerid, const string[])
{
}
```

Pe lângă faptul că este necesar pentru toate publicurile înainte, poate fi folosit pentru a remedia un avertisment rar atunci când o funcție care returnează un rezultat de etichetă (de exemplu, un float) este utilizată înainte de a fi declarată.

```c
main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

Acest lucru va da un avertisment de reparare deoarece compilatorul nu știe cum să convertească returnarea funcției într-un float, deoarece nu știe dacă funcția returnează un număr normal sau un float. În mod clar, în acest exemplu, returnează un float. Acest lucru poate fi rezolvat fie prin plasarea funcției într-un punct din cod înainte de a fi utilizată:

```c
Float:MyFloatFunction()
{
    return 5.0;
}

main()
{
    new
        Float:myVar = MyFloatFunction();
}
```

Sau prin redirecționarea funcției, astfel încât compilatorul să știe ce să facă:

```c
forward Float:MyFloatFunction();

main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

Nota ca forward include si tagul pentru returnare.

## `native`

O funcție nativă este una definită în mașina virtuală (adică lucrul care rulează scriptul), nu în scriptul în sine. Puteți defini funcții native numai dacă sunt codificate în SA: MP sau într-un plugin, totuși puteți crea nativi falși. Deoarece funcțiile native din fișierele .inc sunt detectate de pawno și listate în caseta din partea dreaptă a pawno, poate fi util să folosiți native pentru a obține propriile funcții personalizate listate acolo. O declarație nativă normală ar putea arăta astfel:

```c
native printf(const format[], \{Float, _}:...);
```

Dacă doriți ca propriile funcții să apară fără a fi declarate native, puteți face:

```c
/*
native MyFunction(playerid);
*/
```

PAWNO nu recunoaște astfel de comentarii, așa că va adăuga funcția la listă, dar compilatorul recunoaște astfel de comentarii, așa că va ignora declarația.

Celălalt lucru interesant pe care îl poți face cu nativ este funcțiile de redenumire / suprasarcină:

```c
native my_print(const string[]) = print;
```

Acum funcția de tipărire nu există de fapt. Se află încă în SA: MP, iar compilatorul știe că este numele real datorită părții "= print", dar dacă încercați să o apelați în PAWN, veți primi o eroare, deoarece ați redenumit printul intern la my_print. Deoarece imprimarea nu există acum, o puteți defini la fel ca orice altă funcție:

```c
print(const string[])
{
    my_print("Someone called print()");
    my_print(string);
}
```

Acum, de fiecare dată când print () este utilizat într-un script, funcția dvs. va fi apelată în locul originalului și puteți face ceea ce doriți. În acest caz este imprimat mai întâi un alt mesaj, apoi mesajul original.

## `new`

Acesta este nucleul variabilelor, unul dintre cele mai importante cuvinte cheie despre. new declară o nouă variabilă:

```c
new
    myVar = 5;
```

Aceasta va crea o variabilă, o va numi myVar și îi va atribui valoarea 5. În mod implicit, toate variabilele sunt 0 dacă nu este specificat nimic:

```c
new
    myVar;

printf("%d", myVar);
```

Va da „0”.

Domeniul de aplicare al unei variabile este locul în care poate fi utilizată. Domeniul de aplicare este restricționat de paranteze (parantezele curlate - {}), orice variabilă declarată în interiorul unui set de paranteze poate fi utilizată numai în acele paranteze.

```c
if (a == 1)
{
    // Braces start the line above this one
    new
        myVar = 5;

    // This printf is in the same braces so can use myVar.
    printf("%d", myVar);

    // This if statement is also within the braces, so it and everything in it can use myVar
    if (myVar == 1)
    {
        printf("%d", myVar);
    }
    // The braces end the line below this
}
// This is outside the braces so will give an error
printf("%d", myVar);
```

Exemplul de mai sus arată, de asemenea, de ce este atât de importantă indentarea corectă.

Dacă o variabilă globală (adică una declarată în afara unei funcții) este declarată nouă, ea poate fi utilizată peste tot după declarație:

File1.pwn:

```c
MyFunc1()
{
    // Error, gMyVar doesn't exist yet
    printf("%d", gMyVar);
}

// gMyVar is declared here
new
    gMyVar = 10;

MuFunc2()
{
    // Fine as gMyVar now exists
    printf("%d", gMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn:

```c
MyFunc3()
{
    // This is also fine as this file is included in the first file after the declaration and new is not file restricted
    printf("%d", gMyVar);
}
```

## `operator`

Acest lucru vă permite să supraîncărcați operatorii pentru etichete personalizate. De exemplu:

```c
stock BigEndian:operator=(b)
{
    return BigEndian:(((b >>> 24) & 0x000000FF) | ((b >>> 8) & 0x0000FF00) | ((b << 8) & 0x00FF0000) | ((b << 24) & 0xFF000000));
}

main()
{
    new
        BigEndian:a = 7;
    printf("%d", _:a);
}
```

Numerele normale de amanet sunt stocate în ceea ce se numește mic endian. Acest operator vă permite să definiți o sarcină pentru a converti un număr normal într-un număr mare endian. Diferența dintre endianul mare și endianul mic este ordinea de octeți. 7 în endian mic este stocat ca:

```c
07 00 00 00
```

7 este bigendian si este stocat ca:

```c
00 00 00 07
```

Prin urmare, dacă tipăriți conținutul unui număr mare endian stocat, acesta va încerca să-l citească ca un mic număr endian și să îl obțină înapoi, imprimând astfel numărul 0x07000000, aka 117440512, ceea ce veți obține dacă rulați acest cod.

Puteți supraîncărca următorii operatori:

```c
+, -, *, /, %, ++, --, ==, !=, <, >, <=, >=, ! and =
```

Rețineți, de asemenea, că îi puteți face să facă orice doriți:

```c
stock BigEndian:operator+(BigEndian:a, BigEndian:b)
{
    return BigEndian:42;
}

main()
{
    new
        BigEndian:a = 7,
        BigEndian:b = 199;
    printf("%d", _:(a + b));
```

Va da pur și simplu 42, nimic de-a face cu adăugarea.

## `public`

public este utilizat pentru a face o funcție vizibilă mașinii virtuale, adică permite serverului SA: MP să apeleze direct funcția, în loc să permită apelarea funcției numai din interiorul scriptului PAWN. De asemenea, puteți face variabile publice pentru a le citi și scrie valorile de pe server, totuși acest lucru nu este folosit niciodată în SA: MP (deși s-ar putea să îl puteți utiliza dintr-un plugin, nu am încercat niciodată) (puteți combina și acest lucru cu const pentru a crea o variabilă care poate fi modificată DOAR de pe server).

O funcție publică are numele său text stocat în fișierul amx, spre deosebire de funcțiile normale care își au adresa stocată doar pentru salturi, ceea ce reprezintă un alt dezavantaj al decompilării. Aceasta este astfel încât să puteți apela funcția după nume din afara scriptului, vă permite, de asemenea, să apelați funcțiile după nume din interiorul scriptului, ieșind și reintroducându-l. Un apel de funcție nativă este aproape opusul unui apel de funcție publică, apelează o funcție din afara scriptului din interiorul scriptului, spre deosebire de apelarea unei funcții din interiorul scriptului din afara scriptului. Dacă combinați cele două, veți obține funcții precum SetTimer, SetTimerEx, CallRemoteFunction și CallLocalFunction care apelează funcții după nume, nu adresă.

Apelarea unei funcții după nume:

```c
forward MyPublicFunc();

main()
{
    CallLocalFunction("MyPublicFunc", "");
}

public MyPublicFunc()
{
    printf("Hello");
}
```

Funcțiile public prefixate fie cu „public”, fie cu „@” și, așa cum se menționează în secțiunea forward, toate necesită redirecționare:

```c
forward MyPublicFunc();
forward @MyOtherPublicFunc(var);

main()
{
    CallLocalFunction("MyPublicFunc", "");
    SetTimerEx("@MyOtherPublicFunc", 5000, 0, "i", 7);
}

public MyPublicFunc()
{
    printf("Hello");
}

@MyOtherPublicFunc(var)
{
    printf("%d", var);
}
```

Evident, acest exemplu a introdus SetTimerEx pentru a apela „MyOtherPublicFunc” după 5 secunde și a-i da valoarea întreagă 7 pentru a imprima.

main, utilizat în majoritatea acestor exemple, este similar cu o funcție publică prin aceea că poate fi apelată din afara scriptului, totuși nu este o funcție publică - are doar o adresă cunoscută specială, astfel încât serverul să știe unde să treacă la rulați-l.

Toate apelurile de apelare SA: MP sunt publice și sunt apelate automat din afara scriptului:

```c
public OnPlayerConnect(playerid)
{
    printf("%d connected", playerid);
}
```

Când cineva se alătură serverului, acesta va căuta automat această funcție publică în toate scripturile (mai întâi modul de joc, apoi filtrează scripturile) și, dacă îl găsește, îl apelează.

Dacă doriți să apelați o funcție publică din interiorul scriptului, totuși nu trebuie să o apelați după nume, funcțiile publice se comportă și ca funcții normale:

```c
forward MyPublicFunc();

main()
{
    MyPublicFunc();
}

public MyPublicFunc()
{
    printf("Hello");
}
```

Acest lucru este, evident, mult mai rapid decât utilizarea CallLocalFunction sau a altui nativ.

## `static`

O variabilă statică este ca o nouă variabilă globală, dar cu un domeniu de aplicare mai limitat. Când statica este utilizată global, variabilele create rezultate sunt limitate doar la secțiunea în care au fost create (a se vedea # secțiune). Așadar, luând exemplul „nou” anterior:

file1.pwn

```c
MyFunc1()
{
    // Error, gMyVar doesn't exist yet
    printf("%d", gMyVar);
}

// gMyVar is declared here
new
    gMyVar = 10;

MuFunc2()
{
    // Fine as gMyVar now exists
    printf("%d", gMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // This is also fine as this file is included in the first file after the declaration and new is not file restricted
    printf("%d", gMyVar);
}
```

Și modificarea acestuia pentru statică ar da:

file1.pwn

```c
MyFunc1()
{
    // Error, g_sMyVar doesn't exist yet
    printf("%d", g_sMyVar);
}

// g_sMyVar is declared here
static
    g_sMyVar = 10;

MuFunc2()
{
    // Fine as _sgMyVar now exists
    printf("%d", g_sMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // Error, g_sMyVar is limited to only the file (or section) in which it was declared, this is a different file
    printf("%d", g_sMyVar);
}
```

Aceasta înseamnă că puteți avea doi globali cu același nume în fișiere diferite.

Dacă utilizați static local (adică într-o funcție), atunci variabila, ca și variabilele locale create cu nou, poate fi utilizată numai în cadrul domeniului (bazat pe paranteze - consultați secțiunea despre „nou”) în care a fost declarată. Cu toate acestea, spre deosebire de variabilele „noi”, variabilele „statice” nu își pierd valoarea între apeluri.

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    new
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

De fiecare dată când funcția este numită i este resetată la 0, astfel încât ieșirea rezultată va fi:

```c
0
1
0
1
0
1
0
1
```

Dacă înlocuim „noul” cu „static” obținem:

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    static
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

Și, deoarece localnicii statici își păstrează valoarea între apeluri, rezultatul rezultat este:

```c
0
1
1
2
2
3
3
4
```

Valoarea dată în declarație (dacă este dată una, ca și variabilele statice noi, implicite la 0) este valoarea atribuită variabilei la prima apelare a funcției. Deci, dacă „static i = 5;” au fost folosite în schimb, rezultatul ar fi:

```c
5
6
6
7
7
8
8
9
```

Datorită modului în care sunt stocate variabilele statice, ele sunt de fapt variabile globale, compilatorul verifică dacă sunt utilizate în locul corect. Ca urmare, scripturile decompilate nu pot face distincție între globale normale, statici globale și statici locale și toate sunt date ca globale normale.

De asemenea, puteți avea funcții statice care pot fi apelate numai din fișierul în care sunt declarate. Acest lucru este util pentru funcțiile de stil privat.

## `stock`

stock este folosit pentru a declara variabile și funcții care nu pot fi utilizate, dar pentru care nu doriți să generați avertismente neutilizate. Cu variabilele stocul este ca const prin faptul că este un modificator, nu o declarație completă, deci ați putea avea:

```c
new stock
    gMayBeUsedVar;

static stock
    g_sMayBeUsedVar;
```

Dacă se utilizează variabila sau funcția, compilatorul o va include, dacă nu este utilizată, o va exclude. Acest lucru este diferit de utilizarea #pragma unused (simbol), deoarece aceasta va suprima (adică ascunde) avertismentul și va include oricum informațiile, stocul va ignora în totalitate datele neutilizate.

stockul este cel mai frecvent utilizat pentru bibliotecile personalizate. Dacă scrieți o bibliotecă, furnizați o mulțime de funcții pe care alte persoane le pot folosi, dar nu aveți nicio idee dacă le vor folosi sau nu. Dacă codul dvs. oferă o mulțime de avertismente pentru fiecare funcție pe care o persoană nu o folosește, oamenii se vor plânge (cu excepția cazului în care este intenționat, deoarece TREBUIE să folosească acea funcție (de exemplu, pentru inițializarea variabilelor). Acestea fiind spuse însă, trecând din experiența personală cu oamenii YSI se va plânge oricum.

```c
main()
{
    Func1();
}

Func1()
{
    printf("Hello");
}

Func2()
{
    printf("Hi");
}
```

Aici Func2 nu este apelat niciodată, astfel încât compilatorul va da un avertisment. Acest lucru poate fi util deoarece ați uitat să-l numiți, așa cum se întâmplă în general într-un script direct, cu toate acestea, dacă Func1 și Func2 se află într-o bibliotecă, este posibil ca utilizatorul să nu aibă nevoie de Func2, deci faceți:

```c
main()
{
    Func1();
}

stock Func1()
{
    printf("Hello");
}

stock Func2()
{
    printf("Hi");
}
```

Iar funcția nu va fi compilată și avertismentul eliminat.
