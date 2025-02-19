---
title: "Binar"
sidebar_label: "Binar"
description: O privire aprofundată asupra operatorilor binari și bit-bit
---

## Credite

Acesta este dintr-un subiect Tutorial din SA-MP Forums. Autorul este **Kyosaur**.

## Ce este binarul?

Binarul este un sistem numeric care folosește două simboluri unice pentru a reprezenta numerele. În timp ce sistemul zecimal mai obișnuit folosește zece cifre (**baza 10**), binarul folosește doar 0 și 1. Acest lucru poate suna inutil în viața de zi cu zi, dar binarul este esențial atunci când vine vorba de computere. Calculatoarele la cel mai scăzut nivel își efectuează toate calculele prin manipularea fluxului de energie electrică pentru a indica stările de pornire și oprire. Exact asta este binarul, doar o tonă de comutatoare pornite și oprite. Acesta este un fel de concept extraterestru pentru majoritatea oamenilor, așa că să aruncăm o privire la sistemul zecimal și binar unul lângă celălalt.

Zecimal (baza 10)

```c
0
1
2
3
4
5
6
7
8
9
10
11
12
13
```

Binar (baza 2)

```c
0 //0
1 //1
10 //2
11 //3
100 //4
101 //5
110 //6
111 //7
1000 //8
1001 //9
1010 //10
1011 //11
1100 //12
1101 //13
```

Privind ambele sisteme unul lângă altul, veți observa că se comportă exact la fel. Odată ce ați ajuns la ultimul număr disponibil, trebuie să treceți la un alt loc. Aceste locuri în binar sunt denumite biți (**b** inary dig **its**) și sunt pur și simplu puteri a două; la fel cum locurile din sistemul zecimal sunt puteri de 10. Pentru a demonstra acest lucru, să aruncăm o privire la numărul 13 din notația standard.

** NOTĂ: ** '^' este putere în următoarele câteva exemple, nu este exclusiv bitologic (pe care îl vom acoperi mai târziu).

Zecimal (baza 10)

```c
13

//which equals

1 * (10^1) + 3 * (10^0)

//which equals

10+3

//which equals

13
```

Binar (baza 2)

```c
1101

//which equals

1 * (2^3) + 1 * (2^2) + 0 * (2^1) + 1 * (2^0)

//which equals

8+4+0+1

//which equals

13
```

Putem vedea din exemplul precedent că, dacă un bit este setat la 0, îl putem ignora și continua; la urma urmei, orice înmulțit cu 0 va fi 0. Exemplul anterior a fost puțin complicat și am încercat doar să fiu absolut clar. Când faceți conversia din binar, tot ce trebuie să vă faceți griji este să adăugați puterile tuturor biților care sunt aprinși.

Iată 12 puteri de 2 chiar lângă vârful capului meu:

```c
4096,2048,1024,512,256,128,64,32,16,8,4,2,1
```

Dacă nu știi nimic despre lucrul cu puteri, probabil că acest lucru nu are deloc sens pentru tine. O putere este un număr înmulțit cu el însuși x de câte ori. Având în vedere aceste informații, lista precedentă de puteri are probabil mai mult sens; Ei bine, cu excepția lui 1. S-ar putea să fiți curios de ce 2 ridicat la puterea lui 0 dă un rezultat de 1, tot ce pot spune la acest lucru este că doar o face.

```c
2^1 = 2, 2^3 = 4, 2^4 = 8
```

Putem vedea că atunci când ne deplasăm spre dreapta, valoarea noastră anterioară este înmulțită cu 2; deci este sigur să presupunem că atunci când ne deplasăm spre stânga noua noastră valoare este doar numărul anterior împărțit la 2. Având în vedere acest lucru, puteți vedea cum putem ajunge cu 2 la puterea zero egal cu 1. Dacă nu este satisfăcător suficient, sunt sigur că puteți găsi mai multe dovezi pe **\*\***. Toate acestea fiind spuse, să aruncăm o privire la un ultim exemplu și să îl facem oarecum complicat!

```c
111011001011111000 //242424

//Remember, ignore the bits that arent turned on.

1 * (2^17) = 131072

1 * (2^16) = 65536

1 * (2^15) = 32768

1 * (2^13) = 8192

1 * (2^12) = 4096

1 * (2^9) = 512

1 * (2^7) = 128

1 * (2^6) = 64

1 * (2^5) = 32

1 * (2^4) = 16

1 * (2^3) = 8


131072+65536+32768+8192+4096+512+128+64+32+16+8
=
242424
```

Amintiți-vă când faceți conversia: prima putere este 0, așa că nu faceți greșeala văzând locul 18 ca 2 ^ 18. Există într-adevăr 18 puteri, dar asta include puterea lui 0, deci 17 este de fapt puterea noastră cea mai mare.

### O privire mai profundă asupra biților

Majoritatea limbajelor de programare permit diferite tipuri de date care variază în cantitatea de biți care pot fi utilizați pentru a stoca informații; totuși pionul este un limbaj de 32 de biți fără tip. Aceasta înseamnă că pionul va avea întotdeauna 32 de biți disponibili pentru stocarea informațiilor. Ce se întâmplă atunci când aveți multe informații? Răspunsul la această întrebare constă în numere întregi semnate și nesemnate.

#### Numere întregi semnate

Ați observat vreodată că atunci când un număr întreg din pion ajunge la mare se transformă într-un negativ? Această „împachetare” se datorează depășirii valorii maxime în pion, care este:

```c
2^31 - 1 //Power, not bitwise exclusive. Also the -1 is because we count 0 (there ARE 2,147,483,648 values, but that is with 0, So technically 2,147,483,647 is the max).

//which equals

2,147,483,647

//which in binary is

1111111111111111111111111111111 //31 bits- all on
```

S-ar putea să vă întrebați de ce ACEASTA este valoarea maximă și nu 2 ^ 32-1 (4.294.967.295). Aici intră în joc întregi semnate și nesemnate. Numerele întregi semnate au capacitatea de a stoca valori negative, unde numerele întregi nesemnate nu. S-ar putea să pară că mă abăt de la întrebare, dar vă asigur că nu sunt. Motivul pentru care numărul întreg maxim nu este 2 ^ 32-1 se datorează faptului că bitul 32 este folosit ca un fel de comutare pentru valori negative și pozitive. Aceasta se numește MSB (bitul cel mai semnificativ) dacă MSB este pornit, numărul va fi negativ; dacă este dezactivat, numărul este pozitiv. Destul de simplu, nu?

Înainte de a arăta câteva valori negative, trebuie să explic cum sunt reprezentate valorile negative în pion. Pawn folosește un sistem numit complement 2 pentru a reprezenta valori negative, ceea ce înseamnă practic că răsuciți fiecare bit din numărul dvs. și adăugați 1 la noul număr pentru a-l face negativ.

Să aruncăm o privire asupra câtorva valori negative în timp ce această idee este încă în cap:

```c
11111111111111111111111111111111 //all 32 bits turned on

//equals

-1

//and

11111111111111111111111111111110

//equals

-2

//and finally

10000000000000000000000000000000

//equals

-2147483648
```

Vezi, toate numerele negative sunt pur și simplu numărul pozitiv inițial, cu toți biții săi răsturnați și crescuți cu unul. Acest lucru este foarte clar cu ultimul nostru exemplu, deoarece cel mai înalt număr POZITIV este 2147483647.

Din aceasta putem vedea că intervalul numeric din pawn este de fapt:

```c
&#8722;2^31 to +2^31 − 1
```

#### Numere întregi nesemnate

Nu există astfel de numere întregi nesemnate în pawn, dar adăug acest lucru doar pentru a fi echilibrat. Singura diferență între un număr întreg semnat și un întreg nesemnat este că numerele întregi nesemnate nu pot stoca valori negative; Numerele întregi se încheie, dar se întorc la 0, în loc de o valoare negativă.

## Operatori binari

Operatorii binari vă permit să manipulați biți individuali dintr-un model de biți. Să aruncăm o privire la o listă de operatori biți disponibili.

- Deplasare aritmetică în biți: >> și \<\<
- Deplasare logică în biți: >>>
- Bitwise NOT (aka complement): ~
- Bitwise ȘI: &
- OR bit: |
- Bitwise XOR (aka exclusive-or): ^

### Bitwise AND

** NOTĂ:** Nu trebuie confundat de operatorul logic AND '&&'

Un AND binar ia pur și simplu AND-ul logic al biților din fiecare poziție a unui număr sub formă binară. Sună puțin confuz, așa că să aruncăm o privire în acțiune!

```c
1100 //12
&
0100 //4
=
0100 //4 as they both have "100" in them (which is 4)
```

A fost puțin ușor, să aruncăm o privire mai grea:

```c
10111000 //184
&
01001000 //72
=
00001000 //8
```

Privirea exemplelor ar trebui să vă ofere o idee destul de bună despre ceea ce face acest operator. Compară două seturi de biți împreună, dacă ambele partajează un bit de 1, rezultatul va avea același bit activat. Dacă nu împart deloc biți, atunci rezultatul este 0.

### Bitwise OR

** NOTĂ:** Nu trebuie confundat de operatorul SAU logic '||'

Bitwise OR funcționează aproape exact la fel ca bitwise AND. Singura diferență dintre cele două este că SAU în biți are nevoie doar de unul dintre cele două modele de biți pentru a avea un bit activat pentru ca rezultatul să aibă același bit activat. Să aruncăm o privire la câteva exemple!

```c
1100 //12
|
0100 //4
=
1100 //12.
```

Să aruncăm o privire la încă un exemplu.

```c
10111000 //184
|
01001000 //72
=
11111000 //248
```

Cred că acest lucru se explică destul de mult, dacă oricare dintre numere au pornit puțin, rezultatul va avea și acel bit activat.

### Bitwise XOR

Acest operator este puțin asemănător cu operatorul OR în biți, dar există o diferență. Să ne uităm la același exemplu folosit în secțiunea OR bitwise și să vedem dacă puteți observa diferența.

```c
1100 //12
^
0100 //4
=
1000 //8.
```

și, în sfârșit:

```c
10111000 //184
^
01001000 //72
=
11110000 //240
```

### Bitwise NU

Acest operator întoarce fiecare bit în modelul de biți, transformând toate 1 în 0 și vice versa.

```c
~0
=
11111111111111111111111111111111 //-1

//and

~100 //4
=
11111111111111111111111111111011 //-5

//and

~1111111111111111111111111111111 //2147483647 (not to be confused with -1, which has 32 bits, not 31)
=
10000000000000000000000000000000 //-2147483648 (32nd bit turned on)
```

Dacă nu înțelegeți de ce valorile negative sunt un fel de „înapoi”, vă rugăm să citiți secțiunea despre numerele întregi semnate.

### Bit Shifting

Bit shifting face exact ceea ce ți-ai imagina că face; deplasează biții într-un număr către o anumită direcție. Dacă vă amintiți mai devreme în articol am menționat că PAWN are un anumit interval de memorie (32 de biți care pot fi utilizați pentru stocare). Ce se întâmplă când treceți un număr peste acel interval? Răspunsul la această întrebare constă în ce operator de schimbare folosiți și în ce direcție vă deplasați.

** NOTĂ:** În exemplele următoare, toate numerele binare vor fi scrise integral (toți cei 32 de biți) pentru a evita orice confuzii.

#### Schimbări aritmetice

#### Schimbare dreapta

Toți biții dintr-un număr sunt deplasați de câte ori spre dreapta atunci când se utilizează acest operator. Să aruncăm o privire rapidă la un exemplu simplu.

```c
00000000000000000000000000001000  //8
>>
2

=

00000000000000000000000000000010 //2
```

Puteți vedea din exemplul precedent că fiecare bit s-a deplasat la dreapta cu două locuri, iar două zerouri au fost adăugate pe partea stângă ca umplutură. Aceste două zerouri sunt de fapt valoarea MSB (Cel mai semnificativ bit) și sunt foarte importante atunci când vine vorba de deplasarea cu semn întreg. Motivul pentru care MSB este folosit ca umplutură este că păstrăm semnul numărului care este mutat. Să aruncăm o privire la același exemplu, cu excepția să îl facem negativ.

```c
11111111111111111111111111111000 //-8
>>
2

=

11111111111111111111111111111110 //-2
```

În mod clar, acest lucru se comportă exact la fel ca în exemplul anterior, cu excepția biților din stânga folosiți pentru umplere; ceea ce dovedește că umplerea deplasării aritmetice drepte este valoarea MSB.

#### Schimbare stânga

Acesta este exact opusul operatorului de schimbare aritmetică dreapta. Deplasează toți biții dintr-un număr la stânga x de câte ori. Să vedem un exemplu.

```c
00000000000000000000000000001000  //8
<<
2

=

00000000000000000000000000100000 //32
```

Singura diferență dintre deplasarea aritmetică stângă și dreaptă (în afară de direcția deplasării) ar fi modul în care gestionează umplutura. Cu schimbarea aritmetică dreaptă, umplerea este valoarea MSB (Cel mai semnificativ bit), dar cu schimbarea aritmetică stângă valoarea este doar 0. Acest lucru se datorează faptului că nu există informații relevante, cum ar fi semnul unui număr de care să țineți evidența.

```c
11111111111111111111111111111000 //-8
<<
2

=

11111111111111111111111111100000 //-32
```

Vedea? Chiar dacă umplerea este întotdeauna 0, semnul numărului este păstrat în continuare. Singurul lucru de care trebuie să îți faci griji este trecerea la departe. Dacă deplasați un număr pozitiv peste cel mai mare număr posibil, acesta va deveni negativ și va fi invers cu valori negative (în cele din urmă veți atinge 0).

#### Schimbări logice

##### Schimbare dreapta

Aceasta este inversa schimbării aritmetice la stânga. Cel mai bun mod de a-l descrie ar fi un hibrid între cele două schimbări aritmetice. Să aruncăm o privire în acțiune!

```c
00000000000000000000000000001000  //8
>>>
2

=

00000000000000000000000000000010 //2
```

Biții din numărul 8 s-au deplasat de 2 ori spre dreapta. Deci, în ce fel este diferit acest lucru de schimbarea aritmetică dreaptă? Răspunsul este căptușeala. Cu deplasarea aritmetică la dreapta, umplerea este valoarea MSB, dar cu deplasarea logică la dreapta, umplerea este doar 0 (la fel cum este cu deplasarea aritmetică la stânga). Aceasta înseamnă că nu va păstra numărul semnului, iar rezultatul nostru va fi întotdeauna pozitiv. Pentru a demonstra acest lucru, să schimbăm un număr negativ!

```c
11111111111111111111111111111000 //-8
>>>
2

=

00111111111111111111111111111110 //1073741822
```

Asta dovedește că nu vom obține valori negative în timp ce folosim schimbarea logică dreaptă!

##### Schimbare stânga

Nu există o deplasare logică la stânga, deoarece ar face exact același lucru cu deplasarea stângă aritmetică. Tocmai am adăugat acest lucru pentru a evita confuzii de orice fel și, de asemenea, pentru a menține secțiunea echilibrată.
