---
title: Manipularea șirurilor
description: Tutorial prietenos pentru începători despre orice manipulare a șirurilor.
---

## Introducere

### Descrierea tutorialului

Bună ziua tuturor, cu siguranță este o noapte liniștită drăguță sau cel puțin este la compoziția acestui tutorial. Deci, hei, ce zici de etichetare atât pentru a îmbogăți și / sau pentru a se implica în principalul obiectiv al acestui articol, acesta este și așa cum sugerează titlul, urmând să se concentreze pe `_Manipularea șirurilor_` în pawn, vom trece prin intermediarul absolut lucruri pe care toată lumea ar trebui să le cunoască pentru un fel de sfaturi avansate, inteligente și eficiente.

### Ce este formatarea șirurilor?

În general, formatarea unui text este acțiunea de a-l manipula pentru a-i îmbunătăți vizual lizibilitatea, fie că se modifică familia fontului, culoarea, greutatea și așa mai departe.

Șirurile fiind o serie de caractere (_alfabete, numere, simboluri_), pe care nu le-am numi în mod specific un text în sine, dar sunt denumite ca atare atunci când sunt afișate, pot fi procesate cu aceeași abordare, dar, din păcate, interpretarea SA-MP de pion nu permite mult (_încă? Poate niciodată_), în general, schimbarea culorii este atât cât putem, da, puteți schimba / personaliza fontul, dar este doar client, și da, [GTA San Andreas ](https://www.rockstargames.com/sanandreas/) (_jocul părinte_) oferă unele fonturi suplimentare, dar asta funcționează numai pe [textdraws](../scripting/resources/textdraws) și [gametext](../scripting/functions/GameTextForPlayer), acest lucru provoacă limitări în ceea ce privește prezentarea textului, dar hei, a trecut peste un deceniu acum și am supraviețuit bine.

### Declarație șir

Așa cum am spus mai înainte, șirurile sunt practic matrici de caractere, deci sunt utilizate în același mod în care sunt matricele și, așa cum am crea o matrice, am face-o pentru șirurile care urmează acest format; `string_name [string_size]`. :::info

**string_name**: numele matricei de caractere (_de exemplu șir, str, mesaj, text ... etc., atâta timp cât este un nume de variabilă valid (începe cu un caracter sau un subliniat)_).

**string_size**: caracterele maxime pe care le-ar avea acest șir.

:::

```cpp
// declaring a string of 5 characters
new str_1[5];

// declaring a string of 100 characters
new str_2[100];
```

De asemenea, puteți predefini valorile constante, astfel încât să le puteți folosi de mai multe ori ca dimensiuni de șir.

```cpp
// declaring a constant
#define STRING_SIZE 20

// declaring a string with the size of STRING_SIZE's value
new str_3[STRING_SIZE];
```

:::note

La timpul compilării, compilatorul va înlocui toate aparițiile lui `STRING_SIZE` cu valoarea `20`, această metodă economisind timp și este mai ușor de citit în majoritatea cazurilor, rețineți că valoarea pe care o atribuiți constantei `STRING_SIZE` trebuie fie un număr întreg sau altfel va da o eroare de compilare.

:::

În plus față de constantele predefinite, puteți efectua operațiuni de bază, operatorul modulo (`%`) va da totuși erori de compilare dacă este utilizat, puteți totuși să scăpați de calculele diviziunii (`/`), dar rețineți, împărțind la `0 `va declanșa erori, bonusul aici este că toate rezultatele plutitoare vor fi rotunjite automat pentru dvs.

```cpp
// declaring a constant
#define STRING_SIZE 26

// declaring strins with the use of the STRING_SIZE constant and some calculations
new
  str_4[STRING_SIZE + 4],
  str_5[STRING_SIZE - 6],
  str_6[STRING_SIZE * 2],
  str_7[9 / 3];
```

Teoretic, puteți crea tablouri oarecum ridicol de mari, dar SA-MP pune puține restricții asupra lungimii șirurilor cu care puteți lucra, în funcție de ceea ce lucrați, limitează numărul de caractere pe care le puteți reda în mod normal.

#### Limite de lungime

SA-MP limitează caracterele care pot fi stocate într-un singur șir și împiedică scripterii să meargă peste bord cu lucrul cu textul, din fericire, nu este atât de rău pe cât ar părea, lista de mai jos descompune unele dintre aceste limite;

|                     |                                                                                                                           |      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---- |
| **Text input**      | Textul introdus în chat.                                                                                                  | 128  |
| **Text output**     | Text care se afișează pe ecranul clientului.                                                                              | 144  |
| **Name**            | Pseudonimul jucătorului / numele de utilizator.                                                                           | 24   |
| **Textdraw string** | Destul de auto-explicativ.                                                                                                | 1024 |
| **Dialog info**     | Textul afișat pe toate casetele de dialog de tipul `DIALOG_STYLE_MSGBOX`,`DIALOG_STYLE_INPUT` și `DIALOG_STYLE_PASSWORD`. | 4096 |
| **Dialog caption**  | Legenda / titlul din partea de sus a dialogului.                                                                          | 64   |
| **Dialog input**    | Caseta de introducere de pe „DIALOG_STYLE_INPUT” și „DIALOG_STYLE_PASSWORD”.                                              | 128  |
| **Dialog columnt**  | Caracterele din fiecare coloană din „DIALOG_STYLE_TABLIST_HEADER” și „DIALOG_STYLE_TABLIST”.                              | 128  |
| **Dialog row**      | Caracterele din fiecare coloană din "DIALOG_STYLE_TABLIST_HEADER", "DIALOG_STYLE_TABLIST" și "DIALOG_STYLE_LIST".         | 256  |
| **Chat bubble**     | Balonul de chat care se afișează deasupra etichetei de nume a jucătorului.                                                | 144  |
| **Menu title**      | Antetul meniului nativ GTA San Andreas (cel mai utilizat pentru magazine\_).                                              | 31   |
| **Menu item**       | Meniul nativ GTA San Andreas (_ cel mai utilizat pentru magazine_) element / rând.                                        | 31   |

Dacă cumva aceste limite au fost depășite, s-ar putea să apară puține inconveniente, acesta poate chiar să blocheze / înghețe serverul în unele cazuri (de exemplu, șiruri lungi de desen text), în alte cazuri, textul s-ar trunchia ca titlul meniului (_daca ajunge la 32 de caractere, se trunchiază la 30_) și articole.

Pe lângă limitele stricte puse pe șiruri, există multe altele referitoare la diferite lucruri, puteți vizualiza lista completă [aici](../scripting/resources/limits).

#### Atribuirea valorilor

Atribuirea valorilor șirurilor se poate face prin mai multe metode, unii le atribuie la crearea lor, altele după, există oameni care folosesc bucle, alte funcții folosesc și da, există care fac acest proces manual, slot cu slot, nu există într-un mod exact corect sau greșit pentru a face acest lucru, unele metode sunt adesea mai eficiente în câteva cazuri decât altele nu sunt, la sfârșitul zilei, tot ce contează este performanța, optimizarea și lizibilitatea.

În majoritatea cazurilor, doriți să dați o valoare implicită șirului la crearea acestuia, puteți parcurge acest lucru pur și simplu după cum urmează;

```cpp
new
  message_1[6] = "Hello",
  message_2[] = "This is another message";
```

Asigurați-vă că dimensiunea șirului este mai mare decât numărul de caractere pentru care le-ați atribuit, având o dimensiune a șirului mai mică sau egală cu aceasta, va declanșa erori de compilare, lăsând golul de dimensiune dintre cele două paranteze goale (ca în exemplul `mesaj_2`) , va da automat matricei dimensiunea textului pe care l-ați atribuit plus `1`, în acest caz,`23 + 1 = 24`, de ce? Rezervă un slot pentru caracterul nul (_aka the null-terminator_), mai multe despre asta mai târziu, cuvântul `_Bună ziua_` are 5 caractere, deci, pentru a-l stoca pe un șir, ar trebui să aibă 6 celule, 5 celule pentru numărul de caractere al cuvântului și unul pentru **caracterul nul**.

Să aruncăm o privire la efectuarea manuală a aceluiași proces slot cu slot, mai întâi, definim o nouă matrice, puteți determina dimensiunea acesteia sau lăsați-o goală pentru ca compilatorul să se umple, ambele ar funcționa foarte bine, vom completa matricea cu caractere pentru a crea șirul `_Bună_`.

```cpp
// Including the string' size on its declaration, or it won't work otherwise
new message_3[6];

message_3[0] = 'H';
message_3[1] = 'e';
message_3[2] = 'l';
message_3[3] = 'l';
message_3[4] = 'o';
message_3[5] = '\0';
```

Acolo, am atribuit fiecărui slot din matricea `message_3` un caracter, acest lucru nu va funcționa dacă ar trebui să declarați un sting fără dimensiune definitivă, rețineți că pentru a reprezenta un singur caracter, ar trebui să fie scris între două ghilimele (""), de asemenea, observați cum am început cu slotul 0 și este firesc, având în vedere cum am subliniat modul în care un șir este o matrice de caractere, adică primul slot este întotdeauna 0, iar ultimul este dimensiunea sa minus 1 (_caracterul nul nu contează_), care în acest caz este 4, numărând de la 0 la 4, ceea ce îl face 5 caractere, al șaselea fiind terminatorul nul, mai multe despre asta vor veni mai târziu.

De asemenea, puteți atribui numere de șiruri care vor fi vizualizate ca **ASCII** (_un sistem care reprezintă caracterele numeric, acoperă 128 de caractere cuprinse între 0 și 127, mai multe despre asta [aici](https://en.wikipedia.org/wiki/ASCII) _) cod pentru un caracter, același mesaj „_Bună ziua” poate fi atribuit folosind codul \_ASCII_ astfel;

```cpp
new message_4[6];

message_4[0] = 72; // ASCII representation of capitalized h, `H`
message_4[1] = 101; // ASCII representation of `e`
message_4[2] = 108; // ASCII representation of `l`
message_4[3] = 108; // ASCII representation of `l`
message_4[4] = 111; // ASCII representation of `o`
message_4[5] = 0; // ASCII representation of the null terminator
```

Și da, puteți efectua operațiuni numerice cu aceste coduri la fel ca și cu numerele normale, la urma urmei, mașina vede caracterele ca doar simple numere.

```cpp
new message_5[1];
message_5[0] = 65 + 1;
```

Dacă ar fi să afișezi `message_5 [0]`, ai primi **B**, ciudat nu? Ei bine, nu, nu chiar, puteți efectua alte operații de bază (_subtractie, multiplicare, divizare și chiar modulul_), numerele flotante vor fi rotunjite automat pentru dvs., să vedem cum funcționează acest lucru.

Aveți `65 + 1`, care returnează `66`, verificând tabelul _ASCII_, veți găsi că `66` este reprezentarea numerică a caracterului `_B_` (_capitalized_). Deci, fragmentul de mai sus este în esență același cu a face: `message_5 [0] = 'B'`;

Pentru referință, utilizați [acest tabel ASCII](http://www.asciitable.com/).

De asemenea, puteți efectua aceeași operație între mai multe caractere sau o combinație a acestora, a acestora și a numerelor, iată câteva exemple;

```cpp
new message_6[3];

message_6[0] = 'B' - 1; // Which is 66 - 1, returns 65, the numeric representation of `A`
message_6[1] = 'z' - '&'; // Which is 122 - 38, returns 84, the numeric representation of `T`
message_6[2] = '0' + '1'; // Which is 48 + 49, returns the numeric representation of `a`, note that '0' and '1' are not the numbers 0 and 1, but rather characters
```

Uneori ar putea deveni confuz dacă nu ați știut niciodată despre sistemul _ASCII_, este nevoie doar de o anumită practică, deoarece înțelegerea modului în care funcționează este foarte utilă. Codul _ASCII_ nu este exclusiv numai pentru numerele zecimale, puteți utiliza, de asemenea, numere hexazecimale sau binare în același mod.

```cpp
new numString[4];

numString[0] = 0x50; // The decimal number 80 in hexadecimal, capitalized p, `P`
numString[1] = 0b1000001; // The decimal number 65 in binary, capitalized a, `A`
numString[2] = 0b1010111; // The decimal number 87 in binary, capitalized w, `W`
numString[3] = 0x4E; // The decimal number 78 in hexadecimal, capitalized n, `N`
```

Now let’s see something else, assigning values through loops, it’s literally the same as filling an array through loops, you can use all sorts of looping methods as well, goes as follow;

```cpp
// Let's fill this string with capitalized alphabets
new message_7[26];

// The for loop
for (new i = 0; i < 26; i++)
  message_7[i] = 'A' + i;

// The while loop
while (i++ < 'Z')
  message_7[i - 'A'] = i;

// The do-while loop
new j = 'A';

do {
  message_7[j - 'A'] = j;
}
while (j++ < 'Z');

 // You can even use goto to simulate a loop, but it's not recommended.
```

Toate cele trei vor genera același șir exact, _ABCDEFGHIJKLMNOPQRSTUVWXYZ_.

Dacă vi s-a părut confuz buclele de mai sus, vă recomandăm să aruncați o privire mai profundă asupra modului în care funcționează buclele, mai multe despre asta puteți găsi [aici](../scripting/language/ControlStructures#loops) și [aici](https://wiki.alliedmods.net/Pawn_Tutorial#Looping). Observați cum am folosit caractere în unele condiții logice, cum ar fi `j ++ <` Z 'care se traduce cu ușurință în `j ++ <`, iarăși, caracterele sunt tratate ca numere, nu vă simțiți ciudat, sunteți binevenit să verificați _ASCII_ masa oricând doriți.

Spuneți, doriți să umpleți un șir cu un număr de caractere specifice, (de exemplu, `_AAAAAA_`, `_TTTTTT_`, `_vvvvvv_`, `_666_` (_no, nu este o coincidență_)), ideea tipică care ar putea trece cel mai mult dintre scriptori, o codifică greu, dar ce zici de șirurile lungi, bine, ce zici de utilizarea unei bucle, este bine și asta, dar dacă ți-aș spune că există un mod și mai eficient, la fel cum ai umple o matrice cu aceeași valoare, ați face același lucru pentru șiruri.

```cpp
new message_8[100] = {'J', ...};
```

Codul de mai sus declară un șir nou numit `mesaj_8` cu 100 de celule (_variază de la 0 la 99_) și dă fiecărui slot valoarea `J`, care desigur poate fi folosită atât ca caracter **J**, fie numărul **74** conform sistemului _ASCII_.

Un alt lucru pe care îl puteți face cu acest lucru este umplerea șirului cu caractere pe care valorile lor se bazează pe intervale, a se vedea exemplul alfabetelor cu majuscule de la _A_ la _Z_ de mai sus? Să creăm același șir folosind această metodă.

```cpp
new message_9[26] = {'A', 'B', ...};
```

Cât de ușor este asta ?! acest lucru este atât mai optimizat, cât și mai ușor de citit și oferă aceleași rezultate ca cele 3 exemple realizate folosind metodele de buclă de mai sus, deci cum funcționează exact? Ei bine, am dat șirului valori inițiale, `'A'` și `'B'`, care sunt respectiv _65_ și _66_, compilatorul calculează intervalul dintre cele două valori, care în acest caz este _1_ și finalizează completarea celule goale cu valori bazate pe acel interval până când umple întreaga matrice, puteți pune oricâte valori inițiale doriți, dar va lua în considerare doar intervalul dintre ultimele două valori și va funcționa pe baza acestuia, rețineți că valorile inițiale sunt tratate ca cod _ASCII_, deci încercarea de a genera intervale numerice folosind această metodă pe un șir va duce la ceva incomod, să spunem că ați declarat un șir aleatoriu ca acesta;

```cpp
new rand_str[5] = {'1', '5', ...};
```

În mod ideal, acest lucru ar trebui să aibă ieșire **151520** (_mai exact `1 5 15 20`_), dar în schimb, să producă; ** 159 = A **, care este de fapt rezultatul corect, de ce? Pentru că nu uitați, acesta este codul _ASCII_, `_1_` este _49_ și `_5_` este _53_, intervalul dintre cele două este _4 (53 - 49) _, șirul acceptă 5 caractere, am ocupat deja două celule când am inclus catalogul inițial , deci asta face 3 celule goale rămase care trebuie umplute respectând intervalul de 4, deci așa merge **[49 | 53 | 57 | 61 | 65]**, să înlocuim fiecare valoare numerică cu potrivirea codului său _ASCII_. **[`1` | `5` | `9` | '=' | `A`]**, are mai mult sens, nu ?!

## Terminatorul nul

M-am referit la acest lucru în primele secțiuni ale acestui tutorial, sper că nu a fost atât de confuz la început, dar chiar dacă a fost, să eliminăm deja confuzia, nu vă faceți griji, nu este nimic greu sau chiar asta avansează, doar un fapt de bază pe care ar trebui să-l cunoașteți, îl voi menține cât mai scurt posibil, dar dacă doriți o viziune mai profundă despre acest lucru, puteți vizita [acest articol](https://en.wikipedia.org/wiki/Null_character).

Deci, terminatorul nul (_aka caracterul nul_), este un caracter prezent pe toate șirurile, rolul său este de a indica faptul că un șir s-a încheiat, îl puteți gândi ca pe un semn de punct (.) Orice vine după acest caracter este nu este contabilizat și complet ignorat. Nu îl puteți tasta folosind tastatura, dar puteți face referire la valoarea acesteia în timp ce codificați, însă este prezent pe tabelul _ASCII_, denumit _NUL_, reprezentat de numărul 0.

În _pawn_, îl puteți tasta ca valoare numerică sau ca caracter `_\0_`. Backslashul acționează ca un personaj care scapă, este acolo pentru a spune mașinii că acel caracter este caracterul nul cu valoarea 0 și **NU** caracterul `0` care are valoarea `48`.

Există un simbol folosit în _pawn_, ** EOS **, prescurtarea pentru **E** nd **O**f**S** tring, este o macro predefinită pentru terminatorul nul, puteți seta terminatorul nul în multe feluri diferite;

```cpp
message_9[0] = 0;
message_9[0] = '\0';
message_9[0] = 0b; // The decimal number 0 in binary
message_9[0] = 0x00; // The decimal number 0 in hexadecimal
message_9[0] = _:0.0; // The floating number 0.0, we have to prefix it with the detag '_' to avoid compilation errors
message_9[0] = false;
message_9[0] = EOS;
```

După cum am spus mai devreme în tutorial, puteți ignora atribuirea caracterului nul, dar este întotdeauna acolo la celulele goale, atunci când declarați un șir nou, toate celulele sale sunt ocupate automat de terminatorul nul, deci, de exemplu, dacă merg înainte și declarați acest șir `text[3]`, tuturor celulelor sale li se atribuie valoarea `0` în mod implicit, iată o simplă reprezentare vizuală a conținutului șirului;

|            |      |      |      |
| ---------- | ---- | ---- | ---- |
| Cells      | 0    | 1    | 2    |
| ASCII code | 0    | 0    | 0    |
| Characters | '\0' | '\0' | '\0' |

Iată un alt exemplu de șir preumplut.

```cpp
new text_1[8] = "Hello";
```

Iată conținutul șirului pe celulă;

|            |     |     |     |     |     |      |      |      |
| ---------- | --- | --- | --- | --- | --- | ---- | ---- | ---- |
| Cells      | 0   | 1   | 2   | 3   | 4   | 5    | 6    | 7    |
| ASCII code | 72  | 101 | 108 | 108 | 111 | 0    | 0    | 0    |
| Characters | 'H' | 'e' | 'l' | 'l' | 'o' | '\0' | '\0' | '\0' |

Dacă, de exemplu, ați dorit să ștergeți conținutul acestui șir, puteți face acest lucru pur și simplu folosind unul dintre cele trei exemple de mai jos;

```cpp
text_1[0] = 0;
text_1[0] = EOS;
text_1[0] = '\0';
```

Trecerea șirului printr-o scanare cu raze X va imprima următoarele;

|            |      |     |     |     |     |      |      |      |
| ---------- | ---- | --- | --- | --- | --- | ---- | ---- | ---- |
| Cells      | 0    | 1   | 2   | 3   | 4   | 5    | 6    | 7    |
| ASCII code | 0    | 101 | 108 | 108 | 111 | 0    | 0    | 0    |
| Characters | '\0' | 'e' | 'l' | 'l' | 'o' | '\0' | '\0' | '\0' |

Dacă încercați să scoateți acest șir, totul dincolo de numărul de slot 0 va fi ignorat și, astfel, etichetat ca un șir gol, chiar și funcția `strlen` va returna 0, deoarece depinde de plasarea caracterului nul pentru a recupera lungimea șirului .

## Funcții de manipulare a șirurilor

Când vine vorba de lucrul cu mai multe bucăți de text, _pawn_ te-a acoperit, oferă câteva funcții de bază care fac treaba în mod eficient, nu este nevoie să-ți creezi propriile atunci când ai suport nativ care asigură viteză și optimizare.

Acestea sunt câteva funcții acceptate nativ (_preluate din string.inc_);

```cpp
native strlen(const string[]);
native strpack(dest[], const source[], maxlength=sizeof dest);
native strunpack(dest[], const source[], maxlength=sizeof dest);
native strcat(dest[], const source[], maxlength=sizeof dest);
native strmid(dest[], const source[], start, end, maxlength=sizeof dest);
native bool: strins(string[], const substr[], pos, maxlength=sizeof string);
native bool: strdel(string[], start, end);
native strcmp(const string1[], const string2[], bool:ignorecase=false, length=cellmax);
native strfind(const string[], const sub[], bool:ignorecase=false, pos=0);
native strval(const string[]);
native valstr(dest[], value, bool:pack=false);
native bool: ispacked(const string[]);
native uudecode(dest[], const source[], maxlength=sizeof dest);
native uuencode(dest[], const source[], numbytes, maxlength=sizeof dest);
native memcpy(dest[], const source[], index=0, numbytes, maxlength=sizeof dest);
```

Vom arunca o privire mai atentă asupra câtorva dintre ele, cele sunt mai des utilizate.

- Funcția `strlen` (aceasta și `sizeof` sunt lucruri complet diferite), care ia un șir ca parametru, returnează lungimea șirului respectiv (numărul de caractere pe care le are), dar acordați atenție, deoarece acest lucru este puțin dificil despre modul în care funcționează, am spus-o mai devreme în tutorial, această funcție depinde de poziția caracterului nul pentru a determina lungimea șirului, deci orice alt caracter nevalid care vine după nu va fi numărat, ca imediat ce este atins primul caracter nul, funcția returnează numărul de celule de la început la acel caracter nul.

- `strcat` concatenează șiruri între ele, are nevoie de 3 parametri.

  ```cpp
  new str_dest[12] = "Hello", str_source[7] = " World";
  strcat(str_dest,str_source);
  ```

  Dacă ar fi să ieșim `str_dest`, va apărea ** Hello World **, cele două șiruri au fost adăugate una la cealaltă, iar rezultatul a fost stocat în` str_dest`, _`Hello` + `World` =` Hello World`_, observați cum am inclus acel spațiu în cel de-al doilea șir, da, spațiile sunt caracter în sine, conform tabelului _ASCII_, valoarea lor este`32`, dacă nu am adăuga spațiul, șirul rezultat ar fi fost **Salut Lume**.

- Funcția `strval` va converti un șir într-un număr, de exemplu, următorul șir, ` `2017` `va fi convertit în numărul` 2017`, aceasta funcționează pe numere semnate și nesemnate, dacă șirul nu are caractere numerice , funcția va întoarce `0`, la fel se întâmplă dacă șirul are un caracter numeric, dar începe cu cele non-numerice, dacă un șir începe cu caractere numerice, dar include și caractere non-numerice, caracterele numerice vor fi totuși recuperate și convertite, iată câteva cazuri de utilizare;

  ```cpp
  strval("2018"); // Returns `2018`.
  strval("-56"); // Returns `-56`.
  strval("17.39"); // Returns `17`, the floating number 17.39 was auto floored for us.
  strval("no number here"); // Returns `0`.
  strval("6 starts"); // Returns `6`.
  strval("here we go, 2018"); // Returns `0`.
  strval("2017 ended, welcome 2018"); // Returns `2017`.
  ```

:::tip

Există multe biblioteci realizate de comunitate pe care le puteți descărca și care au legătură cu manipularea șirurilor, nu mă pot gândi la o includere mai bună decât [strlib](https://github.com/oscar-broman/strlib).

:::

### Funcția format

Aceasta este probabil cea mai utilizată funcție legată de șiruri din comunitate, foarte simplă și ușor de utilizat, tot ceea ce face, este formatarea unor bucăți de text și fragmentarea lor, poate fi implementată în diverse situații, cum ar fi legarea variabilelor și șirurilor împreună, încorporarea culorilor, adăugarea de pauze de linie ... etc.

```cpp
format(output[], len, const format[], {Float, _}:...)
```

Funcția de format ia ca parametri matricea de ieșire, dimensiunea sa (_numărul de celule_), șirul de formatare (_aceasta poate fi pre-stocată pe o altă matrice sau poate fi atribuită direct din interiorul funcției_) și, în final, câțiva parametri opționali, aceștia pot să fie variabile din diferite tipuri. Să folosim această funcție pentru a atribui o valoare unui șir gol.

```cpp
new formatMsg[6];
format(formatMsg, 6, "Hello");
```

Ieșirea lui `formatMsg` este **Hello**, rețineți că acesta este un mod prost de a atribui valori șirurilor de caractere, mai ales datorită vitezei sale, există metode mai bune pentru a face acest lucru, am discutat deja unele dintre ele mai devreme etapele acestui tutorial.

Nu uitați să puneți întotdeauna dimensiunea corectă a matricei, în caz contrar, va funcționa în continuare, dar oferă un comportament nedorit, funcția de formatare va revărsa dimensiunea matricei și aveți încredere în mine, nu doriți să se întâmple asta, dacă nu doriți să vă deranjați să puneți dimensiunea corectă a șirului de fiecare dată când doriți să lucrați cu această funcție, puteți utiliza pur și simplu funcția `sizeof` (_nu este o funcție în sine, ci mai degrabă o directivă de compilare_), am văzut mai devreme o funcție numită `strlen` care returnează numărul de caractere pe care le are un șir (_exclusiv și oprindu-se la caracterul nul_), dar acesta returnează dimensiunea tabloului, cu alte cuvinte, numărul de celule pe care acesta le are, fie ele completat cu un caracter valid sau nu, în acest caz, 6.

```cpp
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), "Hello");
```

Textul trebuie să fie întotdeauna inclus între ghilimele duble, cu toate acestea, există un mod neobișnuit de a introduce text, care este rar folosit, folosește simbolul `#“ și funcționează după cum urmează:

```cpp
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), #Hello);
```

Acceptă spații, caractere scăpate și puteți folosi chiar și combinația atât a ghilimelelor duble cât și a semnului numeric;

```cpp
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), "Hello "#World);
```

Codul de mai sus va introduce **Hello World**, această metodă de introducere a șirurilor este mai cunoscută a fi utilizată cu constante predefinite. Să aruncăm o privire la acest exemplu de utilizare a două constante diferite predefinite, una fiind un număr întreg `2017`, cealaltă fiind un șir`2018`.

```cpp
#define THIS_YEAR 2018 // Thisconstant has an integer as its value
#define NEW_YEAR "2019" // This constant has a string as its value

new formatMsg[23];
format(formatMsg, sizeof(formatMsg), "This is "#THIS_YEAR", not"NEW_YEAR);
```

Aceasta va ieși ** Acesta este 2018, nu 2019 **, motivul pentru care am subliniat că cele două constante sunt de tipuri diferite este utilizarea semnului numeric `#`, dacă valoarea este **NU** un șir, atunci trebuie să-l prefixați cu semnul numeric `# THIS_YEAR`, astfel încât va fi tratat ca` `2018` `, altfel veți primi câteva erori de compilare, deoarece pentru o valoare șir, puteți alege să includeți sau să omiteți numărul semn, deoarece va funcționa în ambele sensuri (`NEW_YEAR` este același cu `# NEW_YEAR`). Puteți utiliza acest lucru doar pentru a prelua valori din constante predefinite, nu va funcționa cu variabile obișnuite sau cu matrice / șiruri, deoarece tratarea acestora se poate face folosind substituenți, mai multe despre aceasta mai târziu.

De asemenea, puteți alinia câte citate duble doriți una lângă alta, deși nu are sens, deoarece este mai firesc să scrieți doar o propoziție într-o singură pereche de citate duble, iată un exemplu al aceleiași propoziții scris în ambele concepte;

```cpp
new formatMsg[29];

// One single pair of double quotations
format(formatMsg, sizeof(formatMsg), "This is reality...or is it?!");

// Multiple pairs of double quotations
format(formatMsg, sizeof(formatMsg), "This is reality""...""or is it?!");
```

Ambele vor scoate aceeași propoziție, **Aceasta este realitatea ... sau este?!**.

## Sfaturi de optimizare

Acum, că am văzut câteva lucruri de bază despre declararea șirurilor, manipularea ... etc. unii dintre noi ar face salt la practică fără a respecta unele linii directoare generale urmate de comunitate, dacă doar mai multor oameni le-ar păsa de lizibilitate, optimizare și performanță, lumea ar fi fost un loc mai bun. un cod care se compilează bine, nu înseamnă că funcționează bine, majoritatea erorilor provin din acele lucruri mici pe care le-am trecut cu vederea sau le-am creat în așa fel încât să nu interacționeze prietenos cu alte sisteme. un cod bine scris va supraviețui calvarului timpului, cum? Puteți reveni oricând la acesta și depanați, remediați, revizuiți-l cu ușurință, optimizarea va reflecta și rezultatul asupra performanței, încercați întotdeauna să obțineți cele mai bune utilaje și codul optimizat este calea de urmat.

Primul lucru care trebuie adus în discuție și care mă declanșează personal este să văd cum se creează șiruri mari atunci când nu sunt folosite aproape jumătate din celulele declarate, declară doar șirurile de dimensiunea pe care o vei folosi, celulele suplimentare vor fi doar sarcini mai multă memorie, să aruncăm o privire la un mod presupus neoptimizat de a declara un șir.

```cpp
new badString[100];
badString ="Hello :)";
```

Am declarat un șir cu _100 celule_, _1 celulă_ ocupă _4 octeți_, hai să facem câteva matematici de bază, _100 \ \* 4 = 400_ octeți, adică aproximativ 0,0004 megabyte*, nimic pentru standardele de astăzi știu, dar se presupune că pe un script imens , evident, va trebui să utilizați mai multe șiruri, \_60*, _70_, naiba _100_ mai multe șiruri? (_posibil mai mult_), acele numere minuscule se vor aduna unul pe celălalt rezultând un număr mult mai mare și vă vor provoca probleme serioase mai târziu și credeți-mă când vă spun că șirul pe care l-am declarat nu se apropie la fel de prost în comparație cu cei care au o dimensiune de cinci ori mai mare sau mai mare.

Ceea ce am întâlnit mai mult, ceva care este stereotip tip vag, este utilizarea misterioasă dimensiune a șirului -256-, tocmai de ce oamenii? De ce?

Rețineți limitele pe care le pune SA-MP atunci când se ocupă de șiruri, unde intră în joc șirul _256-lung_? Ce ai de gând să faci cu un șir atât de lung (_exceptând formatarea unui dialog / șir de desen text_)? Intrarea maximă a șirului are o lungime de _128_ caractere, adică jumătate din dimensiune, \_512 octeți* tocmai s-au pierdut, spuneți ce? Ați intenționat să-l utilizați pentru ieșire, nu pentru intrare? Este încă mult prea mare, șirurile de ieșire nu trebuie să treacă \_144* caractere, vedeți unde mă duc? Să încercăm să vedem cum ne-am corecta greșeala, avem această propoziție, `Șir bun`, conține _11_ caractere (_spaiul este numărat și ca caracter_) + _1_ pentru terminatorul nul (_trebuie să am întotdeauna acest tip în mind_), ceea ce îl face _12_ caractere în total.

```cpp
new goodString[12];
goodString="Good string";
```

Vedeți cum am păstrat memoria? Doar **48** octeți și nici o greutate suplimentară care ar provoca probleme mai târziu, se simte mult mai bine.

Dar, dacă ți-aș spune, poți obține un cod și mai optimizat, așa este, ai auzit vreodată de **șiruri împachetate**? Un șir este de obicei format din mai multe celule și, așa cum am spus mai devreme, fiecare celulă reprezintă 4 octeți, deci șirurile sunt alcătuite din mai multe seturi de _4 octeți_. Un singur caracter ocupă 1 octet și fiecare celulă permite stocarea unui singur caracter, ceea ce înseamnă că pe fiecare celulă se pierd 3 octeți,

```cpp
new upkString[5];
upkString = "pawn";
```

Șirul de mai sus ocupă 5 celule (_adică aproximativ 20 de octeți_), poate fi restrâns la doar 8 octeți, doar 2 celule.

```cpp
new pkString_1[5 char];

pkString_1 = !"pawn";
// or
pkString_1 = !#pawn;
```

Așa funcționează pur și simplu, declarați un șir cu dimensiunea pe care ar lua-o în mod normal (_numărând terminatorul nul, desigur_), apoi îl completați cu cuvântul cheie `char`, fiecare caracter va fi stocat în octeți, mai degrabă decât în celule, adică fiecare celulă va avea 4 caractere stocate, amintiți-vă că atunci când atribuiți valori șirurilor împachetate, prefixați-le cu un semn de exclamare `!`, totuși, acest lucru nu se aplică pentru un singur caracter.

Aceasta este o reprezentare vizuală aproximativă a conținutului `upkString`;

|            |                      |                      |                      |                      |                   |
| ---------- | -------------------- | -------------------- | -------------------- | -------------------- | ----------------- |
| Cell       | 0                    | 1                    | 2                    | 3                    | 4                 |
| Bytes      | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3     |
| Characters | \0 . \0 . \0 . **p** | \0 . \0 . \0 . **a** | \0 . \0 . \0 . **w** | \0 . \0 . \0 . **n** | \0 . \0 . \0 . \0 |

Și așa ar fi `pkString_1` în al doilea exemplu;

|            |                               |                   |
| ---------- | ----------------------------- | ----------------- |
| Cell       | 0                             | 1                 |
| Bytes      | 0 . 1 . 2 . 3                 | 0 . 1 . 2 . 3     |
| Characters | **p** . **a** . **w** . **n** | \0 . \0 . \0 . \0 |

De asemenea, puteți accesa indexatorii unui șir împachetat, după cum urmează;

```cpp
new pkString_2[5 char];

pkString_2{0} = 'p';
pkString_2{1} = 97; // ASCII code for the character `a`.
pkString_2{2} = 0b1110111; // The decimal number 199 in binary, translates to the character `w`.
pkString_2{3} = 0x6E; // The decimal number 110 in hexadecimal, translates to the character `n`.
pkString_2{4} = EOS; // EOS (End Of String), has the value of 0, which is the ASCII code for \0 (NUL), the null character.
```

Rezultatul va fi același cu `pkString_1` în acest caz, după cum puteți vedea, codul _ASCII_ este încă luat în considerare, luați notă că, atunci când accesați indexatori pe șiruri împachetate, folosim ** paranteze bucle ** în loc de **paranteze**. Asta înseamnă că indexăm octeții înșiși și nu celulele.

:::info

În ciuda eficienței lor în păstrarea memoriei, implementarea SA-MP a pionului nu acceptă 100% șiruri împachetate, dar le puteți folosi în continuare în șiruri / matrice utilizate rar.

:::

## Ieșire text

#### Consolă

##### `print`

Următoarea funcție este probabil cea mai de bază funcție nu numai în pion, ci și în multe alte limbaje de programare, ci acceptă pur și simplu un parametru și îl afișează pe consolă.

```cpp
print("Hello world");
```

```
Hello world
```

Puteți trece, de asemenea, șiruri predeclarate sau constante predefinite, precum și fuzionarea mai multor dintre ele sau puteți utiliza și semnul numeric `#`, la fel cum am făcut-o cu funcția de formatare, dar rețineți că nu include mai multe parametri, putem trece doar un singur parametru.

```cpp
#define HAPPY_STRING "I'm happy today" // String constant.
#define NEW_YEAR 2019 // Integer constant.
new stylishMsg[12] = "I'm stylish";

print(HAPPY_STRING);
print(stylishMsg);
print(#2019 is beyond the horizon);
print("I'm excited for "#NEW_YEAR);
print("What ""about"" you""?");
```

```
I'm happy today
I'm stylish
2019 is beyond the horizon
I'm excited for 2019
What about you?
```

Observați cum am folosit simbolul numeric aici la fel cum am făcut-o cu funcția format, dacă valoarea este un număr întreg, îl prefixați cu `#`, deci este tratat ca un șir.

Rețineți, de asemenea, că funcția `print` acceptă șiruri împachetate, totuși acceptă doar variabile de tip șir (_matrice de caractere_), trecând tot ceea ce nu este o matrice, un șir (_fie între ghilimele duble sau prefixat cu simbolul numărului_) dați erori de compilare, astfel încât să faceți oricare dintre următoarele nu va funcționa;

```cpp
// Case 1
new _charA = 'A';
print(_charA);

// Case 2
new _charB = 66;
print(_charB);

// Case 3
print('A');

// Case 4
print(66);
```

Să vedem cum putem remedia problema;

```cpp
// Case 1
new _charA[2] = "A";
print(_charA);
```

Schimbăm ghilimela simplă la ghilimele duble și dăm matricei două celule, una cu caracterul A și a doua pentru terminatorul nul, deoarece orice dintre ghilimele duble este un șir, ieșirea este **A**.

```cpp
// Case 2
new _charB[2] = 66;
print(_charB);
```

Schimbăm `_charB` într-o matrice cu o singură celulă și setăm celula etichetată cu 0 la valoarea` 66`, care se traduce în ** B ** conform tabelului _ASCII_, ieșirea este **B**, noi păstrați o celulă suplimentară pentru terminatorul nul (_cât este, așa că nu mai este amuzant?_).

```cpp
// Case 3
print("A");
```

Nu se pot spune multe, tot ce a fost nevoie a fost trecerea de la ghilimele simple la o pereche de ghilimele duble.

În ceea ce privește al patrulea caz, nu putem face prea multe în timp ce lucrăm cu funcția `print`, dar poate fi rezolvată pur și simplu folosind o altă funcție similară, numită ...

##### `printf`

Pe scurt pentru `_print formatat_`, pot pur și simplu pune, aceasta este o versiune mai diversă a funcției anterioare `print`, mai exact, este ca o combinație între funcția `format` și funcția `print`, ceea ce înseamnă că imprimă caractere pe consola serverului, dar cu avantajul formatării textului de ieșire.

Spre deosebire de `print`,` printf` acceptă mai mulți parametri și, de asemenea, cu diferite tipuri, totuși nu acceptă șiruri împachetate, pentru a extinde funcționalitatea sa, folosim aceste secvențe numite `_format specifiers_`, mai multe despre ele ulterior, oferind orice altceva decât ** 1024 ** caractere va <u> bloca serverul </u>, așa că luați note despre asta.

```cpp
#define RANDOM_STRING "Vsauce"
#define RANDOM_NUMBER 2018

printf("Hey "RANDOM_STRING", Micheal here! #"#RANDOM_NUMBER);
```

Observați cum am asemănat cu funcțiile `print` și `format`, am imbricat acele șiruri într-una singură, care produce următoarele;

```
Hey Vsauce, Micheal here! #2018
```

Funcția `printf`, așa cum am spus mai devreme, strălucește atunci când se utilizează **specificatorii de format**, este ceea ce o distinge și o diferențiază, puteți atașa cât de multe variabile doriți și puteți scoate șiruri simple și complexe cu ușurință, vom avea o privire mult mai profundă atunci când vom fi prezentați acestor specificați mai târziu.

#### Mesaje client

În afară de celelalte texte despre păpuși pe care le puteți imprima pe consola serverului, care sunt utilizate în principal pentru depanare, există mesaje care sunt tipărite pe ecranul clientului, în secțiunea de chat, și acestea pot fi formatate în același mod, dar și ele susține încorporarea culorilor, ceea ce face o prezentare minunată pentru texte (_dacă este utilizat corect, desigur_).

Rețineți că restricțiile SA-MP privind afișarea șirurilor se aplică și pentru acest tip de mesaje, fiind la fel ca și cele anterioare, limitate la mai puțin de _144 caractere_, sau altfel mesajul nu va fi trimis, uneori chiar vor bloca unele comenzi .

Există două funcții care imprimă nativ text pe ecranul clientului, singura diferență dintre ele este scoopul, primul ia trei parametri, ID-ul jucătorului pe care doriți să imprimați textul pe ecranul acestuia, culoarea textului și textul în sine.

```cpp
SendClientMessage(playerid, color, const message[])
```

Spuneți, doriți să trimiteți un text jucătorului al cărui ID este 1, spunându-i `Bună ziua!`;

```cpp
SendClientMessage(1, -1, "Hello there!");
```

Simplu, exact așa, jucătorului cu ID-ul 1 i se va trimite un text spunând **Bună ziua!**, `-1` este parametrul de culoare, în acest caz, este culoarea **alb**, mai multe despre culori mai târziu.

Evident, puteți trece și o serie de caractere, șiruri formatate ... etc. Și așa cum am văzut cu alte funcții, puteți utiliza semnul numeric `#`.

```cpp
#define STRING_MSG "today"
new mornMsg[] = "Hello!";

SendClientMessage(0, -1, mornMsg);
SendClientMessage(0, -1, "How are you ",STRING_MSG#?);
```

După cum puteți vedea în exemplul de mai sus, acest lucru va trimite jucătorului cu id-ul _0_ două mesaje colorate în alb, primele mesaje vor spune `_Bună ziua!_`, Iar al doilea va spune, `_Cum ești astăzi?_`, destul de similar cu modul în care funcționează alte funcții. Rețineți că numerele întregi constante predefinite trebuie să fie prefixate cu simbolul "#".

```cpp
#define NMB_MSG 3
SendClientMessage(3, -1, "It's "#NMB_MSG" PM");
```

Destul de auto-explicativ, textul va fi trimis jucătorului cu id-ul _3_, colorat în alb, spunând `_It’s 3 PM_`.

Acum, că știi cum să trimiți cuiva un mesaj, poți folosi aceeași abordare pentru a trimite același mesaj tuturor, jocul copiilor într-adevăr, poți pur și simplu pune funcția într-o buclă care trece prin toți jucătorii conectați și să riști să-ți arăți codul în public și numiți-o zi, dar hei, există deja o funcție nativă care face exact același lucru, se aplică aceleași reguli, singurul lucru care diferă între cele două este o ușoară modificare a sintaxei lor.

```cpp
SendClientMessageToAll(color, const message[]);
```

destul de auto-explicativ, expus prin numele său, acum să trimitem tuturor de pe server un mesaj de salut.

```cpp
SendClientMessageToAll(-1, "Hello everyone!");
```

La fel, poți să te joci cu el la fel ca și celălalt frate al său, două jucării de la același brand, într-adevăr, încearcă să nu depășești limita de 144 de caractere.

#### Textdraws

Una dintre cele mai puternice funcționalități ale SA-MP, doar dezlănțuie-ți imaginația, textele sunt practic forme grafice / texte / sprite / modele de previzualizare ... etc. care pot fi afișate pe ecranele clienților, acestea fac ca interfața de utilizare să fie mai activă și mai interactivă (_ într-o măsură_). Dar hei, există și aici limitări, de exemplu, nu puteți afișa un șir care are mai mult de 1024 de caractere, ca să fiu sincer, este mai mult decât suficient. Nimic special nu se poate spune aici, chiar și cu funcționalitatea lor largă, șirurile care pot fi afișate sunt slabe la formatare, nu puteți face cât de mult ați putea cu alte funcții de ieșire, se simte puțin îngust când vine vorba de acest lucru, dar cu siguranță compensează lipsa de formatare cu alte lucruri interesante, mai multe despre textdraws [aici](../scripting/resources/textdraws).

#### Dialoguri

Dialogurile pot fi considerate ca `_căsuțe de mesaje_`, ele, desigur, vin în diferite tipuri, acceptă câteva intrări diferite și, mai important, acceptă toate tipurile de formatare pe care le face un șir normal, cu care le face mult mai ușor de utilizat decât textdraw . Există și limitări care le privesc, cum ar fi dimensiunile șirurilor și posibilitatea de a le afișa numai sincron pe ecranul clientului, SA-MP oferă doar o funcție nativă pentru tratarea dialogurilor și, sincer, aceasta ar fi una dintre ultimele dvs. preocupări, deoarece Funcția singuratică își face treaba și o face eficient, mai multe despre dialoguri [aici](../scripting/functions/ShowPlayerDialog).

### Interpretarea culorii

#### Mesaje și dialoguri ale clienților

##### RGBA

**RGBA** (_ scurt pentru roșu verde albastru alfa_), este o utilizare simplă a modelului ** RGB ** cu un canal suplimentar, canalul alfa, practic, o formă de reprezentare digitală a culorilor, prin amestecarea variațiilor de roșu, verde, albastru și alfa (_opacity_), mai multe despre asta [aici](https://en.wikipedia.org/wiki/RGBA_color_space).

În implementarea SA-MP cu pawn, folosim numere hexazecimale pentru a reprezenta aceste spații de culoare, roșu, verde, albastru și alfa sunt notate cu câte 2 biți fiecare, rezultând un număr hexazecimal lung de 8 biți, de exemplu; (_FF0000FF = red_), (_00FF00FF = green_), (_0000FFFF = blue_), (_000000FF = black_), (_FFFFFFFF = white_), iată o vizualizare mai clară despre această notație:

> <span style={{ color: 'red' }}>FF</span><span style={{ color: 'green' }}>FF</span><span style={{ color: 'blue' }}>FF</span><span style={{ color: 'grey' }}>FF</span>

O mulțime de limbaje de programare / scriptare prefixează numere hexazecimale cu semnul numeric `#`, totuși, în pion, le prefixăm cu `0x`, deci următorul număr hexazecimal _8060C1FF_, devine _0x8060C1FF_.

Putem, desigur, să folosim numere zecimale pentru a reprezenta culorile, dar este mult mai clar să folosim notația hexazecimală, deoarece este mai ușor de citit între cele două, să vedem următorul exemplu;

```cpp
// Representing the color white with decimal numbers
SendClientMessageToAll(-1, "Hello everyone!");

// Representing the color white with hexadecimal numbers
SendClientMessageToAll(0xFFFFFFFF, "Hello everyone!");

// A client message colored in white will be sent to everybody
```

Rețineți că atribuirea tuturor biților la aceeași valoare va avea ca rezultat variații ale nuanțelor de gri (_no pun intention_), atribuirea canalului alfa la 0 va face textul invizibil.

:::tip

Este posibil să formatați texte cu multicolor simultan, dar pentru aceasta, încorporăm notația **RGB** mai simplă. :::

##### RGB

Aceasta este exact ca spațiile de culoare **RGBA**, dar fără canal alfa, doar un amestec de roșu, verde și albastru, notat ca un număr hexazecimal de 6 biți, în pion, această notație este folosită mai ales pentru a încorpora culorile în textele, pur și simplu înfășurați numărul hexazecimal de 6 biți între o pereche de paranteze bucle și sunteți pregătit să mergeți, de exemplu; (**\{FF0000\} = roșu**), (**\{00FF00\} =verde**), (**\{0000FF\} = albastru**), (**\{000000\} = negru**), (**\{FFFFFF\} = alb**), iată o vizualizare mai clară despre această notație: `{FFFFFF}`. Să vedem acest exemplu rapid aici;

```cpp
SendClientMessageToAll(0x00FF00FF, "I'm green{000000}, and {FF0000}I'm red");
```

Aceasta va trimite următorul mesaj tuturor (_și nu sunt italian_):

<span style={{color: '#00ff00ff'}}>Sunt verde</span><span style={{color: '#ffffff'}}>, si </span><span style={{color: '#ff0000'}}>Sunt rosu</span>

Rețineți că notația hexazecimală nu face distincția între majuscule și minuscule, așa că tastarea `0xFFC0E1FF` este la fel ca tastarea` 0xfFC0e1Ff`, același lucru este valabil și pentru culorile încorporate, `{401C15}` este la fel ca `{401c15}`.

Uneori, lucrul cu culori se poate dovedi a fi destul de greu, nu este atât de ușor să te plimbi amintindu-ți toate acele numere hexazecimale lungi, ca nici o afacere mare. poți folosi, poți pur și simplu să folosești Google `_color picker_` și să alegi între mii dintre ele, lasă-mă să fac asta dacă nu te deranjează, [iată un instrument simplu](https://www.webpagefx.com/web-design/color-picker/) pe care vă recomand să îl folosiți atunci când lucrați cu culori.

Una dintre problemele pe care oamenii le găsesc este gestionarea fluxului lor de lucru, care, dacă este făcut corect, facilitează ritmul de lucru și face mai puțin dureros să lucrezi în jurul proiectelor tale, în timp ce instrumentele de selectare a culorilor sunt de mare ajutor, poți totuși să pierzi multe de timp care trece și se oprește de fiecare dată când trebuie să alegeți o culoare, frustrarea poate fi la fel de enervantă ca o pizza cu ananas, din fericire, puteți profita de constante predefinite și puteți defini cele mai utilizate culori pentru o utilizare ulterioară , iată un exemplu simplu;

```cpp
#define COLOR_RED 0xFF0000FF
#define COLOR_GREEN 0xFF0000FF
#define COLOR_BLUE 0xFF0000FF

SendClientMessageToAll(COLOR_RED, "I'm a red text");
SendClientMessageToAll(COLOR_GREEN, "I'm a green text");
SendClientMessageToAll(COLOR_BLUE, "I'm a blue text");
```

Acesta din urmă poate fi realizat și pe culorile încorporate;

```cpp
#define COL_RED "{FF0000}"
#define COL_GREEN {FF0000}
#define COL_BLUE "{FF0000}"

SendClientMessageToAll(-1, ""COL_RED"I'm a red text");
SendClientMessageToAll(-1, "{"COL_GREEN}"I'm a green "COL_BLUE"and blue");
ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Notice", "{"COL_GREEN"}Hello! "COL_RED"what's up?", "Close", "");
```

La momentul compilării, toate constantele predefinite vor fi înlocuite cu valorile lor și, astfel, acest `COL_RED` sunt un text roșu'devine acest `{FF0000}` Sunt un text roșu', observați cum am folosit două metoda pentru a predefini acele culori, `RRGGBB` și `{RRGGBB}`, intră în preferința personală, care metodă trebuie să treacă, personal, consider că definirea lor ca `RRGGBB` este foarte clar, deoarece sunt prezente utilizările parantezelor crețate, și astfel se face remarcabil faptul că încorporăm o culoare.

Aceasta a fost abordarea generală a încorporării culorilor cu șiruri de dialog și mesaje client, este posibil să se utilizeze culori în text în mesajele clientului, dialoguri, etichete text 3D, texte materiale obiecte și plăcuțe de înmatriculare ale vehiculului, dar hei, SA-MP are și texdraws și funcționalități de jocuri, totuși acestea nu acceptă notația RGB și, prin urmare, adăugarea culorilor se face diferit.

#### Textdraws și Gametexts

așa cum s-a menționat mai sus, notația **RGB** nu este acceptată, dar din fericire, avem alte modalități de a rezolva această problemă, pentru textdraws, puteți utiliza funcția nativă [TextDrawColor](../scripting/functions/TextDrawColor) pentru schimbați culoarea textului de desen, dar același lucru cu textul de desenat ca spațiile de culoare ** RGBA ** sunt pentru mesajele și dialogurile clientului, acestea nu pot fi încorporate, pentru aceasta, folosim o combinație specială de caractere pentru a ne referi la culori și alte câteva simboluri , le puteți vedea [aici](../scripting/resources/gametextstyles).

|                |        |
| -------------- | ------ |
| \~r\~          | Red    |
| \~g\~          | Green  |
| \~b\~          | Blue   |
| \~w\~ or \~s\~ | White  |
| \~p\~          | Purple |
| \~l\~          | Black  |
| \~y\~          | Yellow |

Deci, culorile de încorporare pot merge astfel: **\~w\~ Bună ziua acesta este \~b\~ albastru \~w\~ și acesta este \~ r\~ roșu**

Puteți utiliza o altă combinație de caractere pentru a vă juca cu combinații de culori, **\~h\~**, face o anumită culoare mai deschisă, iată câteva exemple:

|                                |                  |
| ------------------------------ | ---------------- |
| \~r\~\~h\~                     | Roșu mai deschis |
| \~r\~\~h\~\~h\~                | Roșu roz         |
| \~r\~\~h\~\~h~\~h\~            | Roșu-închis      |
| \~r\~\~h\~~h~~h~~h\~           | Roz roșu deschis |
| \~r\~\~h\~\~h\~\~h\~\~h\~\~h\~ | Roz              |
| \~g\~\~h\~                     | Verde deschis    |

Puteți găsi mai multe informații despre acest lucru [aici](../scripting/resources/colorslist).

### Caracterul de evadare

#### Descriere

Caracterul de evadare este un caracter în care, atunci când este prefixat la un anumit caracter sau număr, își creează propriul caracter constant, în majoritatea limbajelor de programare / scriptare, cum ar fi pionul, barul invers este folosit ca caracter de evacuare ("\"), o combinație a acestui și un alt caracter / număr va avea ca rezultat o [secvență de evadare](https://en.wikipedia.org/wiki/Escape_sequence) care are o anumită semnificație, puteți găsi mai multe despre caracterul de evadare [aici](https://en.wikipedia.org/wiki/Escape_character).

#### Secvențe de evacuare

Secvențele de evacuare facilitează exprimarea anumitor caractere în codul sursă al scriptului dvs., iată un tabel care conține secvențele de evadare utilizate în pawn:

|                                               |              |
| --------------------------------------------- | ------------ |
| Bip sonor (pe mașini server)                  | `\a` or `\7` |
| Backspace                                     | `\b`         |
| Evadare                                       | `\e`         |
| Formular de alimentare                        | `\f`         |
| Linie nouă                                    | `\n`         |
| Retur transport                               | `\r`         |
| Filă orizontală                               | `\t`         |
| Fila verticală                                | `\v`         |
| Backslash                                     | `\\`         |
| Citat unic                                    | `\'`         |
| Citat dublu                                   | `\"`         |
| Cod de caractere cu valori zecimale "ddd"     | `\ddd;`      |
| Cod de caractere cu valori hexazecimale "hhh" | `\xhhh;`     |

Să ne uităm la fiecare dintre ei, la urma urmei, cel mai bun mod de a învăța acest gen de lucruri stă în practicarea lor.

- ** Secvența de evacuare `Bip audibil` - `\a` **

Un semnal sonor sau un cod de sonerie (_uneori caracter de sonerie_) este un cod de control al dispozitivului trimis inițial pentru a suna un mic clopot electromecanic pe bifere și alte teleimprimante și tele-mașini de scris pentru a alerta operatorii de la celălalt capăt al liniei, adesea a unui mesaj primit.

Utilizarea acestuia pe un computer va avea ca rezultat trimiterea unui sunet sonor / de notificare în fundal, acesta poate fi folosit în unele moduri creative, pentru a notifica și / sau avertiza utilizatorii cu privire la anumite activități, secvența de evadare care îl reprezintă este `\a` sau `\7` notat ca cod zecimal), declanșați editorul dvs. de pion și scrieți următorul cod;

```cpp
print("\a");
```

La executarea samp-server.exe, veți auzi un semnal sonor de notificare, puteți utiliza și codul zecimal;

```cpp
print("This is a beep \7");
```

- ** Secvența de evacuare `Backspace` -`\b` **

Această secvență de evadare este notată ca `\b`, pur și simplu mișcă cursorul înapoi, majoritatea oamenilor s-ar aștepta ca acesta să acționeze ca butonul de backspace de pe tastatura tipică, dar nu în totalitate, mișcă trăsura doar o poziție înapoi fără a șterge ceea ce este scris Acolo.

Acesta nu are atât de multă utilizare în pion, cu excepția cazului în care ai fost suficient de deștept să scoți ceva util din el, iată cum funcționează.

```cpp
print("Hello 2018");
```

Aceasta va imprima ** Hello 2018 ** în consolă, cursorul rămâne pe poziția caracterului nul, mai clar, astfel:

```
Hello 2018
          ^
```

După cum puteți vedea, cursorul se oprește după ultimul caracter vizibil al șirului, ceea ce este normal, acum, să adăugăm o secvență de ieșire înapoi;

```cpp
print("Hello 2018\b");
```

Asta va avea ca rezultat;

```
Hello 2018
         ^
```

După cum puteți vedea, cursorul se află exact în poziția ultimului caracter vizibil al șirului, care este _8_, este același lucru cu comutarea în modul de inserare de pe tastatură, acum, să adăugăm ceva vrăjitorie la acest lucru.

```cpp
print("Hello 2018\b9");
```

Dacă ați ghicit bine, da, acest lucru va imprima **Bună ziua 2019**, deci, haideți să vedem cum funcționează acest lucru, mașina va procesa șirul caracter cu caracter, până când va ajunge la secvența de evacuare a backspace-ului, apoi va muta unul din cărucior poziția înapoi, care selectează orice caracter de acolo, în acest caz 8, apoi introduce 9 în locul său.

```
Hello 2019
         ^
```

Căruciorul se va deplasa înapoi atâta timp cât există o secvență de scăpare în spate în șir.

```cpp
print("Hello 2018\b9\b\b\b");
```

```
Hello 2019
       ^
```

Cursorul se va opri în poziția primului caracter dacă cantitatea de secvență de evacuare a spațiului înapoi a depășit cea a numărului de caractere dintre poziția primului caracter (da, matricile încep de la 0, se îndreaptă spre [r/programmerhumor](https://www.reddit.com/r/ProgrammerHumor/) pentru câteva meme-uri bune) și poziția inițială a cursorului.

```cpp
print("Hi\b\b\b\b\b\b\b\b\b\b\b\b\b\b");
```

Va duce întotdeauna la acest lucru;

```
Hi
^
```

- ** Secvența de evadare `Evacuare` - `\e` **

Cu valoarea hexazecimală de 1B în _ASCII_, este utilizată pentru coduri non-standard comune, să căutăm câteva limbaje de programare precum C, ca exemplu; o secvență precum `\ z` nu este o secvență de evadare validă conform standardului C. Standardul C necesită diagnosticarea unor astfel de secvențe de evadare nevalide (compilatorul trebuie să imprime un mesaj de eroare). Fără a aduce atingere acestui fapt, unii compilatori pot defini secvențe de evadare suplimentare, cu semantică definită de implementare. Un exemplu este secvența de evacuare `\ e`, reprezintă caracterul de evacuare. Cu toate acestea, nu a fost adăugat la repertoriul standard C, deoarece nu are un echivalent semnificativ în unele seturi de caractere.

- ** Secvența de evacuare `Form feed` - `\ f` **

Feedul formular este un cod _ASCII_ care rupe paginile. Forțează imprimanta să scoată pagina curentă și să continue imprimarea în partea de sus a alteia. Adesea, va provoca, de asemenea, o întoarcere a căruciorului, acest lucru nu face nicio modificare vizibilă în consola de depanare a _SA-MP_.

- ** Secvența de evadare `Linie nouă` - `\ n` **

Noua secvență de evacuare a liniei (denumită și sfârșit de linie, sfârșit de linie (_EOL_), avans de linie sau întrerupere de linie) este un cod _ASCII_ care este notat ca `/ n` cu valoarea zecimală 10, este ceva care este frecvent utilizat , editorii de text inserează acest caracter de fiecare dată când apăsăm butonul Enter de pe tastaturile noastre. Iată un mesaj simplu cu o întrerupere de linie:

```cpp
print("Hello, this is line 1\nAnd this is line 2");
```

Aceasta va genera pur și simplu:

```
Hello, this is line 1
And this is line 2
```

Desigur, frânele cu mai multe linii sunt realizabile;

```cpp
print("H\n\n\ne\n\n\nl\nl\n\no");
```

```
H


e


l
l

o
```

Acest lucru funcționează diferit la tratarea fișierelor, cu toate acestea, în funcție de sistemul de operare, cum ar fi, de exemplu, în Windows, o întrerupere de linie este de obicei un ** CR ** (_carriage return_) + ** LF ** (_line feed_), tu pot afla mai multe despre diferențe [aici](https://en.wikipedia.org/wiki/Newline).

- ** Secvența de evacuare `Returnare transport` - `\ r` **

Returnarea transportului este un cod _ASCII_ care este adesea asociat cu fluxul de linie, dar poate servi ca lucru propriu de la sine, pur și simplu mută transportul la începutul liniei curente, echivalent cu un caz specific despre care am discutat folosind mai multe backspaces (`\b`) secvență de evacuare, să vedem următorul exemplu, fără a utiliza această secvență de evacuare, aceasta este ieșirea normală pe care am obține-o:

```cpp
print("Hello");
```

```
Hello
     ^
```

Săgeata reprezintă poziția cursorului, care este plasată după ultimul caracter vizibil al șirului, din nou, acesta este comportamentul normal așteptat, acum să adăugăm revenirea căruței în mix:

```cpp
print("Hello\r");
```

```
Hello
^
```

Cursorul este deplasat la începutul liniei, selectând primul caracter ** `H`**, inserând acum orice se va schimba **`H`** la orice introducem, apoi se mută la următorul caracter rămânând pe modul de inserare:

```cpp
print("Hello\rBo");
```

```
Hello
^
```

Așa cum am văzut în secțiunea de alimentare de linie, întreruperile de linie funcționează diferit în diferite sisteme de operare, ferestrele, de exemplu, utilizează o întoarcere de căruță urmată de o alimentare de linie pentru a efectua o întrerupere de linie, la fel ca mașinile de scris clasice.

- ** Secvența de evadare `fila orizontală` - `\t`**

Tabelarea este ceva pe care îl folosim în fiecare zi, de la indentarea textului / codului, până la afișarea tabelului, acea tastă de tabulator care se află chiar în partea tastaturii este într-adevăr o economie de timp, a fost o durere atât de mare și a consumat mult timp pentru a folosi în mod excesiv multe spații, dar acesta taie tortul cu ușurință, nu numai că este util în mod practic, este într-adevăr puternic prezent în domeniul programării, este notat ca `\t`, oamenii ar argumenta câte spații valorează o filă, majoritatea ar spune că merită 4 spații, dar există unii care spun că merită 8 spații, cineva creatură demonică ar prefera chiar spații decât filele, dar acesta este un alt discurs despre sine, să observăm acest exemplu simplu:

```cpp
print("Hello\tWorld");
```

```
Hello    World
```

Iată un altul cu mai multe tabulări:

```cpp
print("Hello\t\t\t\t\tWorld");
```

```
Hello                    World
```

- ** Secvența de evadare `Tab vertical` - `\v` **

Pe vremea vechii mașini de scris, aceasta a avut o utilizare mai populară, a fost folosită pentru a trece la următoarea linie pe verticală, dar acum, acest lucru nu mai este cazul, nu are nicio utilizare vizibilă în zilele noastre și asta include imprimante și chiar și limbaje de programare, iar pionul nu face excepție.

- **\_The `Backslash` escape sequence - `\*`**

După cum am văzut, backslash-ul este considerat caracterul de evadare, așa că ori de câte ori programul îl observă, îl consideră un punct de plecare al unei secvențe de evadare, nu îl privește ca pe un personaj independent și, astfel, fie va da o eroare de compilare (_dacă nu a fost urmat de un caracter valid_), fie nu o va imprima, în cazul amanetului, compilatorul va ridica o eroare (_error 027: constantă de caracter nevalid_). Din fericire, putem rezolva această problemă scăpând de bară inversă, iar acest lucru se face prin prefixarea unei alte baruri inversă:

```cpp
print("Hello \\ World");
```

```
Hello \ World
```

:::caution Avertisment

Ieșirea nu va lua în considerare prima bară inversă și o va imprima pe cea de-a doua, deoarece prima scapă de a doua și păcălește programul pentru a-l vizualiza ca un caracter brut. O bară inversă poate scăpa doar de un caracter la rândul său, astfel încât să faceți următoarele va crește o eroare de compilare.

:::

```cpp
print("Hello \\\ World");
```

Gândiți-vă la asta ca la perechi de bare inversă, toată lumea scapă de cea de după și, prin urmare, ar trebui să conducă întotdeauna la un număr par de bare inversă;

```cpp
print("Hello \\\\\\ \\ World");
```

```
Hello \\\ \ World
```

După cum ați observat cu siguranță, secvențele de evadare nu sunt niciodată tipărite, ele servesc doar ca instrucțiuni care exprimă anumite evenimente, dacă vrem să le forțăm să fie tipărite, putem scăpa de caracterul lor de evadare ("\"), atunci programul nu se va uita la le ca secvență de evadare:

```cpp
print("This is the escape sequence responsible for tabulation: \\t");
```

Prima bară inversă scapă de a doua, apoi se imprimă, apoi caracterul ** t** este lăsat singur și, astfel, este considerat ca un caracter independent:

```
Aceasta este secvența de evacuare responsabilă pentru tabulare: \t
```

- ** Secvența de evadare `Citat unic` - `\'`**

Acest lucru este greu de prezentat atunci când scriu codul de amanet, eu însăși nu m-am găsit folosind acest lucru în nicio situație de codare, în alte limbi care tratează textul dintre ghilimelele unice ca un șir, folosesc foarte mult acest lucru pentru a limita confuzia care se întâmplă atunci când se cuibărește singur ghilimele între ele, într-adevăr nu face nicio diferență în pion, iată un exemplu simplu;

```cpp
print("Single quote '");
// or
print("Single quote \'");
```

Oricum ar fi, ieșirea va fi aceeași:

"" Citat unic: ' ""

Singura utilizare la care mă pot gândi în legătură cu acest lucru este setarea unei variabile a caracterului `** '**`, așa că, evident, dacă faceți următoarele, veți provoca o eroare de compilare;

```cpp
new chr = ''';
```

Pur și simplu pentru că compilatorul va considera prima pereche de ghilimele simple ca o singură entitate, iar a doua ca o secvență de ghilimele nedeschise, așa că, pentru a remedia acest lucru, va trebui să scăpăm de cel din mijloc;

```cpp
new chr = ''\';
```

- ** Secvența de evadare `Citat dublu` - `\"`**

Spre deosebire de ghilimele unice, acesta poate provoca probleme atunci când vine vorba de cuibărirea lor împreună, pion tratează orice dintre ghilimele duble ca un șir, deci ce se întâmplă dacă doriți să introduceți un ghilimel dublu în șirul dvs., care va deruta programul, nu ar ști la ce servește fiecare ghilimă, să luăm acest exemplu ca exemplu:

```cpp
print("Hello "world");
```

De îndată ce compilatorul observă primele ghilimele, acesta va trata tot ce urmează ca parte a unui șir și va termina procesul de îndată ce atinge un alt ghilimel și, astfel, compilatorul va prelua **"Bună ziua"** ca un șir și va vedea ** Lumea ** ca niște sensuri care umplu găurile codului dvs. Pentru a rezolva acest lucru, trebuie să scăpăm de ghilimele duble pe care dorim să le imprimăm:

```cpp
print("Hello \"world");
```

Acum, compilatorul va trata al doilea ghilimel ca o secvență de evadare, deoarece este prefixat de un caracter de evadare (**\\**):

```
Hello "world
```

Să adăugăm un alt ghilimel doar pentru dracu:

```cpp
print("Hello \"world\"");
```

```
Hello "world"
```

Nu ar putea fi mai simplu.

De-a lungul acestei secțiuni, am văzut cum putem reprezenta secvențe de evadare prin prefixarea caracterului de evadare ("\\") la un anumit caracter, dar acesta este doar un mod de a nota acele valori, printre altele, vom arunca o privire asupra alți doi;

- **Secvențe de evacuare cu cod de caractere (cod zecimal) - `\ddd;`**

Nu schimbă nimic în legătură cu secvențele de evadare, este doar un mod diferit de a le exprima, folosind coduri zecimale _ASCII_, de exemplu, dacă doriți să imprimați A, dar notați-l zecimal, puteți introduce codul zecimal _ASCII_, după cum urmează :

```cpp
print("\65;");
```

Acest lucru nu se referă doar la caractere alfanumerice, ci și la alte caractere, cum ar fi bipul audibil (`\ a`), cu valoarea zecimală `7`, poate fi reprezentat conform acestei notații ca `\7`;

Semicol și virgulă este opțional și poate fi eliminat, dar este întotdeauna mai bine să mergeți cu abordarea inițială, scopul său este de a da secvenței de evadare un simbol de terminare explicit atunci când este utilizat într-o constantă de șir.

- ** Secvențe de evacuare cu cod de caractere (cod zecimal) - `\xhhh;` **

Similar cu notația zecimală _ASCII_, putem folosi și formatul hexazecimal, caracterul **A**, putând fi scris fie ca `\65`; **sau` \ x41`;**, semi-colonul poate fi omis dacă doriți, acest lucru se aplică atât aici, cât și pe notația zecimală.

```cpp
print("\x41;");
```

```
A
```

Puteți găsi toate aceste valori prin simpla căutare în `**Tabel ASCII**`, iar ceea ce este interesant este că este gratuit.

#### Caracter de evadare personalizat

Dacă ați observat, am continuat să apelez repetând `**caracterul de evadare**` de mai multe ori pe parcursul ultimei secțiuni, unde aș fi putut să-l menționez pur și simplu ca `**bară inversă**`, sau chiar scurtcircuitat, (`\`), motivul este că caracterul de evadare nu este un caracter absolut absolut, ci mai degrabă poate fi schimbat de preferință, îl puteți avea ca _@, ^, \ \$_ și așa mai departe, în mod implicit este o bară inversă , dar modul în care rămâne este determinat doar de dvs.

n pentru a o schimba, folosim directiva pre-procesor `pragma`, această directivă specială acceptă parametri diferiți, pentru fiecare sarcină specifică a acestora, și există unul care răspunde de setarea caracterului de evacuare pe care ne vom concentra, este `ctrlchar`.

```cpp
#pragma ctrlchar '$'

main()
{
	print("Hello $n World");
	print("This is a backslash: \\");
	print("The his a dollar sign: $$");
}
```

```
Hello
 World
This is a backslash: \
This is a dollar sign: $
```

După cum puteți vedea, fluxul de linie este notat ca `$n` în loc de `\n` acum, iar backslash-ul nu mai este considerat caracterul de evadare și, în consecință, semnul dolar necesită să fie scăpat de un alt semn dolar.

Cu toate acestea, nu poți schimba acest lucru în (`-`), dar orice altceva este o practică acceptabilă, dar niciodată nu este acceptată niciodată din punct de vedere etic. Flăcău nebun absolut.

Această porțiune de aici nu are absolut nimic de-a face cu secvențele de evadare, dar este utilizată la formatarea textelor și a gametextului, este mai bine să o puneți aici decât oriunde altundeva;

|       |                                                                                                                               |
| ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| `~u~` | Săgeată sus (gri)                                                                                                             |
| `~d~` | Săgeată în jos (gri)                                                                                                          |
| `~<~` | Săgeată la stânga (gri)                                                                                                       |
| `~>~` | Săgeată dreapta (gri)                                                                                                         |
| `]`   | Afișează simbolul `*` (numai în stilul text 3, 4 și 5)                                                                        |
| `~k~` | maparea tastelor tastaturii (de ex. `~ k ~~ VEHICLE_TURRETLEFT ~` și `~ k ~~ PED_FIREWEAPON ~`). Căutați aici o listă de chei |

maparea tastelor tastaturii (de ex. `~ k ~~ VEHICLE_TURRETLEFT ~` și `~ k ~~ PED_FIREWEAPON ~`). Căutați aici o listă de chei

### Specificator format

#### Descriere

Substituentii sau specificatorii sunt caractere scăpate de un semn procentual (`%`), indică poziția relativă și tipul de ieșire al anumitor parametri, servesc după cum sugerează și numele lor `_Prezentatori_`, salvează un loc pentru date care le vor înlocui ulterior în interiorul șirului, există diferite tipuri de specificatori și chiar urmează o formulă specifică;

```
%[flags][width][.precision]type
```

Atributele dintre paranteze sunt toate opționale și depinde de dvs., fie de utilizator, fie să le păstrați sau nu, ceea ce definește într-adevăr un specificator format larg cunoscut de **tip %**, partea tip este înlocuită cu un caracter pentru a reprezenta un anumit tip de ieșire; (_integer, float ... etc_).

Substituentii sunt folosiți numai pentru funcțiile care acceptă parametri, astfel funcțiile precum tipărirea nu vor avea niciun efect, o alternativă la acesta este `printf` mai avansat.

Let us look at the different output types that can be used:

| **Specificator** | **Inteles**                                            |
| ---------------- | ------------------------------------------------------ |
| `%i`             | Întreg (_număr întreg_)                                |
| `%d`             | Întreg (_număr întreg_)                                |
| `%s`             | Şir                                                    |
| `%f`             | Număr în virgulă mobilă (`Float: tag`)                 |
| `%c`             | Caracter ASCII                                         |
| `%x`             | Număr hexazecimal                                      |
| `%b`             | Număr binar                                            |
| `%%`             | Literal `'%'`                                          |
| `%q`             | Scăpați un text pentru SQLite. (_Adăugat în 0.3.7 R2_) |

- ** Specificatorii întregi - `%i` și `%d` **

Să le înfășurăm pe amândouă, în pion, acești doi specificatori fac același lucru exact, ambii numere întregi de ieșire, chiar dacă `% i` înseamnă întreg și `% d` înseamnă zecimal, sunt un sinonim pentru același lucru.

Cu toate acestea, în alte limbi, diferența nu constă în ieșire, ci mai degrabă în intrare cu funcții precum `scanf`, unde`% d` scanează un număr întreg ca o zecimală semnată, iar% i implicit la zecimal, dar permite și hexazecimal (_if precedat de `0x`_) și octal (_dacă precedat de` 0`_).

Utilizările acestor doi specificatori merg după cum urmează:

```cpp
printf("%d is here", 2018);
printf("%d + %i = %i", 5, 6, 5 + 6);
```

```
printf("%d is here", 2018);
printf("%d + %i = %i", 5, 6, 5 + 6);
```

Ieșirea acceptă, de asemenea, constante, variabile și funcții predefinite.

```cpp
#define CURRENT_YEAR 2018
new age = 19;

printf("It’s %d", CURRENT_YEAR);
printf("He is %d years old", age);
printf("Seconds since midnight 1st January 1970: %d", gettime());
```

```
It's 2018
He is 19 years old
Seconds since midnight 1st January 1970: 1518628594
```

După cum puteți vedea, orice valoare pe care o trecem în parametrii funcției `printf` este înlocuită de substituentul respectiv și amintiți-vă, **ordinea contează**, substituenții dvs. ar trebui să urmeze aceeași ordine ca și parametrii dvs. în apel, și folosiți întotdeauna tipul corect de specificator, dacă nu faceți acest lucru, nu va rezulta o eroare, dar poate genera rezultate nedorite, dar în unele cazuri, aceste rezultate nedorite sunt ceea ce ne dorim.

Ce credeți că se va întâmpla dacă am încerca să imprimăm un float sau un șir folosind un specificator întreg? Să aflăm;

```cpp
printf("%d", 1.12);
printf("%d", "Hello");
printf("%d", 'H');
printf("%d", true);
```

```
1066359849
72
72
1
```

Cât de ciudat, total neașteptat, dar nu neapărat inutil, acest comportament exact este profitat în atât de multe situații.

În primul rând, să vedem de ce a ieșit `1.12` _1066359849_, ei bine, asta se numește comportament nedefinit, puteți afla mai multe despre acest lucru [aici](https://en.wikipedia.org/wiki/Undefined_behavior).

Încercarea de a produce un șir folosind un specificator întreg va da codul _ASCII_ al primului său caracter, în acest caz, codul caracterului H, 72, la fel se întâmplă cu ieșirea unui singur caracter. Și, în cele din urmă, scoaterea unui boolean va da 1 dacă este adevărat și 0 dacă este fals.

Șirurile sunt matrici în sine, așa că scoaterea unei matrici aici va da valoarea primului slot din matricea respectivă, modul în care va fi afișat depinde de ce tip este (_intreg, float, caracter, boolean_).

- ** Specificatorii șirului - `%s` **

Acest specificator, așa cum înseamnă șir, este responsabil pentru ieșirea șirurilor (_evident_):

```cpp
printf("Hello, %s!", "World");
```

```
Hello, world!
```

Să redăm, de asemenea, valori care nu sunt șiruri, folosind și acest lucru:

```cpp
printf("%s", 103);
printf("%s", true);
printf("%s", 'H');
printf("%s", 1.12);
```

```
g

H
)
```

Numărul "103" a fost tratat ca codul _ASCII_ pentru _g_ și, astfel, a fost tipărit _g_, același lucru este valabil și pentru simbolul ciudat de sub el, caracterul cu valoarea true, aka _1_ a fost tipărit, mai simplu, caracterul "H" a fost tipărit așa cum este, dar hei, ce s-a întâmplat cu numărul de tip float "1.12"? îți amintești de **comportamentul nedefinit**? Da, `1.12` a rezultat într-un număr întreg uriaș, care a continuat să se revărseze (valoarea sa împărțită la _255_) ori, până când a rezultat într-un număr între _0_ și _254_, în acest caz, _40_, care este codul _ASCII_ al caracterului.

Din nou, la fel ca specificatorul întregului, acesta acceptă constante, variabile și funcții predefinite:

```cpp
#define NAME "Max"
new message[] = `Hello there!`;

printf("His name is %s", NAME);
printf("Hey, %s", message);
printf("%s work", #Great);
```

```
His name is Max
Hey, Hello there!
Great work
```

- ** Specificatorii pentru float - `%f` **

Acest specificator - scurt pentru float-, așa cum sugerează și numele său, scoate numere flotante, pe secțiunile anterioare, am încercat să scoatem numere flotante folosind specificatorul întreg și apoi am obținut acel comportament nedefinit, dar acum, că știm despre acest specificator , putem scoate în siguranță flotante fără probleme;

```cpp
printf("%f", 1.235);
printf("%f", 5);
printf("%f", 'h');
```

Numărul de tip float _1.235_ a ieșit foarte bine, cu adăugarea unor umpluturi, cu toate acestea, restul tuturor ieșirilor _0.000000_, practic _0_, asta pentru că specificatorul `%f` va scoate doar numere flotante, cu alte cuvinte, numere care nu au un număr fix de cifre înainte și după punctul zecimal; adică punctul zecimal poate pluti.

Pentru a remedia problema, pur și simplu adăugăm partea fracțională:

```cpp
printf("%f", 5.0);
printf("%f", 'h' + 0.0);
```

```
5.000000
104.000000
```

Deși `%f` este substituentul de tip float cel mai frecvent utilizat, specificatorul `%h` face cam același lucru:

```cpp
printf("%h", 5.0);
```

```
5.000000
```

- ** Specificatorii de caractere - `%c` **

Acest specificator, scurt pentru caracter, funcționează ca substituentul șirului, dar generează doar un singur caracter, să observăm următorul exemplu:

```cpp
printf("%c", 'A');
printf("%c", "A");
printf("%c", "Hello");
printf("%c", 105);
printf("%c", 1.2);
printf("%c", true);
```

```
A
A
H
i
s
```

După cum puteți vedea, trecerea unui șir va genera doar primul caracter și trecerea unui număr va genera caracterul al cărui cod _ASCII_ se potrivește cu acel număr (_Booleanii sunt convertiți la 0 și respectiv 1_).

- ** Specificatorii hexazecimali - `%x` **

Următorul specificator afișează valoarea pe care o trecem ca număr hexazecimal, pur și simplu, o conversație de numere dintr-o bază dată în baza 16.

```cpp
printf("%x", 6);
printf("%x", 10);
printf("%x", 255);
```

```
6
A
FF
```

La fel ca și cazurile pe care le-am văzut în secțiunile anterioare, trecerea valorilor altele decât numerele întregi le va converti la valorile lor întregi respective și le va genera ca numere hexazecimale;

```cpp
printf("%x", 1.5);
printf("%x", 'Z');
printf("%x", "Hello");
printf("%x", true);
```

```
3FC00000
5A
48
1
```

Prima valoare `1.5`, va avea ca rezultat un comportament nedefinit la conversia sa într-un număr întreg (_1069547520_), apoi întregul rezultat va fi afișat ca hexazecimal (_3FC00000_), caracterul `Z`, va avea valoarea sa _ASCII_ (90) convertit în hexazecimal (5A). Șirul `Bună ziua` va avea doar primul său caracter (H) cu valoarea _ASCII_ de (72) convertită în hexazecimal (48). Și ieșirile `adevărate` (1) ca hexazecimal, care se convertește în (1), (fals va ieși 0).

- ** Specificatorii binari - `%b` **

Următorul specificator, scurt pentru `_binary_` este utilizat pentru a imprima valorile trecute ca numere binare, caracterele trecătoare vor converti codul său _ASCII_ în binar, la fel și cazul șirurilor în care este considerat doar primul caracter, booleenii sunt considerați adevărați și fals, respectiv, numerele flotante se încadrează în cazul comportamentului nedefinit, ca pentru numere întregi și hexazecimale, acestea sunt convertite în binar și de ieșire.

```cpp
printf("%b", 0b0011);
printf("%b", 2);
printf("%b", 2.0);
printf("%b", 0xE2);
printf("%b", 'T');
printf("%b", "Hello");
printf("%b", true);
```

```
11
10
1000000000000000000000000000000
11100010
1010100
1001000
1
```

- ** Literalul `%` **

La fel ca caracterul implicit de scăpare (`\`), compilatorul vede (`%`) ca un caracter special și, astfel, tratează secvența ca un substituent, atâta timp cât există un caracter după (`%`) este considerat ca specificator chiar dacă nu este valid, să observăm aceste două cazuri;

```cpp
printf("%");
printf("Hello %");
printf("% World");
printf("Hello % World");
```

```
%
Hello %
 World
Hello  World
```

După cum puteți vedea, dacă aveți (`%`) singur ca secvență individuală, acesta va fi afișat, dar nu același lucru se întâmplă atunci când este urmat de spațiu sau de orice alt caracter, rezultând astfel scoaterea unui caracter spațial. Pentru a încălca această problemă, o scăpăm folosind un alt semn procentual după cum urmează;

```cpp
printf("This is a percent sign %%, we just had to escape it!");
```

```
Acesta este un %, doar a trebuit să scăpăm de el!
```

Desigur, acest lucru se referă doar la funcții care acceptă formatarea, cum ar fi `printf` și `format`, de exemplu, încercarea de a afișa un semn procentual folosind funcția `print` nu va necesita scăparea acestuia.

- ** Specificatorul `%q` **

Acesta nu are o mare importanță în subiectul nostru principal, este folosit pe scară largă pentru a scăpa de șirurile sensibile atunci când lucrați cu _SQLite_ și credeți-mă, nimeni nu vrea să cadă sub cazul [tabelului lui Bobby](http://bobby-tables.com/about).

Când am introdus substituenții, facem referire la o formulă specifică care îi privește, ca un memento, iată-l;

```
%[flags][width][.precision]type
```

Până acum, am vorbit doar despre semnul `%` și despre tipul depus, celelalte sunt opționale, dar fiecare este eficient în diferite cazuri, le puteți include pentru a controla mai bine modul în care valorile dvs. sunt tratate atunci când sunt afișate.

- ** Lățimea depusă **

Acesta este responsabil pentru specificarea rezultatului minim de caractere, poate fi omis dacă este necesar, trebuie doar să tastați valoarea acestuia ca număr întreg, să vedem câteva exemple;

```cpp
printf("%3d", 5555);
printf("%3d", 555);
printf("%3d", 55);
printf("%3d", 5);
```

```
5555
555
 55
  5
```

Am instruit specificatorul să blocheze ieșirea la 3 caractere sau mai mult, la început, ieșirea numărului de 4 și 3 caractere a mers bine, dar caracterele mai scurte de 3 caractere au rămas căptușite cu spații, chiar și la lățimea de ieșire. Există, de asemenea, posibilitatea de a avea valori dinamice ale lățimii, pentru aceasta, folosim semnul asterisc (`*`).

```cpp
printf("%*d", 5, 55);
```

```
     55
```

Mai întâi, trecem valoarea lățimii care a fost `5`, apoi valoarea pe care dorim să o afișăm `55`, astfel încât substituentul redă un minim de 5 caractere, adică 5 minus 2, ceea ce ne oferă 3 spații de umplere.

- ** Câmpul steaguri **

Acesta funcționează foarte bine cu câmpul de lățime, deoarece lățimea specifică caracterele minime pentru ieșiri, acesta tamponează golul lăsat în urmă cu orice îi spuneți. În cazul în care au rămas spații în urmă, nu va exista niciun tampon.

```cpp
printf("%3d", 55);
printf("%5x", 15);
printf("%2f", 1.5)
```

```
055
0000F
01.500000
```

Primul număr 55, este scurt pe un caracter din cauza lățimii parametrului zecimal, deci este umplut cu un 0. În ceea ce privește 15, este convertit la valoarea hexadecimală respectivă _F_ și umplut cu 4 0 pentru a valida lățimea lui substituent. Observați cum a fost umplut doar numărul dinaintea punctului zecimal. Utilizarea valorilor dinamice ale lățimii rămâne și aici, trebuie doar să includem asteriscul, să trecem o valoare și să urmărim cum se întâmplă magia;

```cpp
printf("%0*d", 5, 55);
```

```
00055
```

- ** Câmpul de precizie **

Câmpul Precizie specifică de obicei o limită maximă la ieșire, în funcție de tipul de formatare particular. Pentru tipurile numerice cu virgulă mobilă, specifică numărul de cifre din dreapta punctului zecimal pe care ieșirea trebuie rotunjită. Pentru tipul de șir, acesta limitează numărul de caractere care ar trebui să fie redate, după care șirul este trunchiat.

```cpp
printf("%.2f", 1.5);
printf("%.*f", 10, 1.5);
printf("%.5s", "Hello world!");
printf("%.*s", 7, "Hello world!");
```

```
1.50
1.5000000000
Hello
Hello w
```

După cum puteți vedea, valorile dinamice de precizie pot fi folosite atât cu semnele de poziție plutitoare, cât și cu șirul de caractere.

Un truc foarte interesant pe care îl putem trage datorită câmpului de precizie este obținerea de șiruri de caractere, acum, acum, există o mulțime de metode pe care le putem folosi pentru a face acest lucru, și asta fără a lua în considerare nativul [strfind](../scripting/functions/strfind) și să nu uităm de funcțiile uimitoare pe care le-am obținut la [strlib](https://github.com/oscar-broman/strlib) din **Slice**.

Să vedem cum putem obține același rezultat folosind doar câmpul de precizie.

```cpp
substring(const source[], start = 0, length = -1)
{
	new output[256];

	format(output, sizeof(output), "%.*s", length, source[start]);
	return output;
}
```

Să încercăm să descifrăm această bucată de cod, trecem pur și simplu șirul sursă, (șirul din care urmează să extragem), o poziție de pornire (slotul pe care vom începe să îl extragem) și lungimea caracterelor pe care le dorim a extrage.

Valoarea noastră returnată va fi formatată în funcție de următorul substituent `%. * S`, includem câmpul de precizie și îl folosim pentru a determina o valoare dinamică care va fi lungimea caracterelor extrase, apoi oferim un punct de plecare pentru extragerea prin adăugarea `sursă [start]` care trece de la primul slot la numărul slotului `start` pe care l-am trecut în parametrii funcției.

Să apelăm funcția și să vedem cum merge de aici:

```cpp
new message1[] = "Hello!", message2[] = "I want an apple!";

print(substring(.source = message1, .start = 1, .length = 3));
print(substring(.source = message2, .start = 7, .length = 8));
```

```
ell
an apple
```

Simplu nu? Bonus de trivia, trecerea unei _negative_ ca lungime de extracție va avea ca rezultat emiterea tuturor caracterelor din șirul dvs. sursă începând din slotul **start**. Pe de altă parte, trecerea 0 ca lungime de extracție returnează o valoare nulă.

Să aruncăm o privire asupra acestor cazuri:

```cpp
new message3[] = "Arrays start at 1, says the Lua developer!";

print(substring(message3)); // start = 0 by default, length = -1 by default
print(substring(message3, .length = 6)); // start = 0 by default, length = 6
print(substring(message3, 7, 10)); // start = 7, length = 10
print(substring(message3, strlen(message3) - 14)); // start = 28, length = -1 by default
print(substring(message3, strlen(message3) - 14, 3)); // start = 28, length = 3
```

```
Arrays start at 1, says the Lua developer!
Arrays
start at 1
Lua developer!
Lua
```

#### Utilizare

Punând toate acțiunile pe care le-am văzut până acum la acțiune, putem oricum să ne formăm șirurile destul de potrivite, până acum am lucrat în principal în consolă, folosind funcțiile `print` și `printf` pentru a ne transmite datele , în principal `printf`, adică datorită suportului său nativ pentru formatarea șirurilor în mișcare, de unde și f pe numele funcției.

Însă în lumea reală, majorității oamenilor nu le place să se uite la terminale, sunt prea înfricoșători și complicate pentru utilizatorul obișnuit și, după cum știți cu toții, mesajele clientului apar pe ecranul jocului și nu consola, totuși , acestea nu pot fi formatate în mișcare, sunt mai mult ca o funcție de imprimare s-ar putea spune, pentru a ocoli această limitare, folosim și o altă funcție foarte eficientă, numită `format`, nu vom aprofunda definiția acesteia, așa cum am am trecut deja prin explicarea acestuia în părțile anterioare, (consultați [acest](../scripting/functions/format)), dar, iată un memento al sintaxei sale;

```cpp
format(output[], len, const format[], \{Float, _}: ...}
```

Să aruncăm o privire la aceste exemple;

**Exemplul 1**: _Nume jucător - Presupunând că există o redare pe server cu codul 9 numit Player1_:

```cpp
// MAX_PLAYER_NAME is a predefined constant with the value of 24, we add 1 to take into account the null terminator, thanks to Pottus for pointing that out.
new playerName[MAX_PLAYER_NAME + 1], output[128], playerid = 9;

GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
format(output, sizeof(output), "[Info]: the player with the id of %d is called {EE11CC}%s.", playerid, playerName);SendClientMessageToAll(0, output);
```

> [Informații]: playerul cu ID-ul 9 este numit <span style={{color: '#ee11cc'}}>Player1</span>.

Pur și simplu, obținem doar numele jucătorului și începem să formatăm șirul, substituentul `% d` este responsabil pentru afișarea variabilelor `playerid`, care deține valoarea `9`, substituentul `%s` afișează `playerName` șir care conține numele jucătorului datorită funcției `GetPlayerName`.

Afișăm apoi șirul formatat tuturor de pe server folosind funcția `SendClientMessageToAll`, observăm că valoarea`0` din primul său parametru indică culoarea neagră, care va fi culoarea mesajului, valoarea hexagonală încorporată `{FFFF00}`este ceea ce a dus la ca numele jucătorului să fie galben.

**Exemplul 2**: _In-game Clock - Afișarea orei curente în joc_:

```cpp
new output[128], hours, minutes, seconds;

gettime(hours, minutes, seconds);
format(output, sizeof(output), "It's %02d:%02d %s", hours > 12 ? hours - 12 : hours, minutes, hours < 12 ? ("AM") : ("PM"));
SendClientMessageToAll(0, output);
```

Din nou, am folosit doar funcția `gettime` pentru a stoca respectivele ore, minute și secunde pe variabilele lor, apoi le-am pus pe toate împreună într-un șir frumos formatat, am profitat de câmpul de lățime`% 02d` pentru a tampona valorile între 0 și 9 cu un alt zero pentru a se sustrage ieșirilor cum ar fi (`_Este 5: 9 PM_`), după cum puteți vedea.

> Este ora 18:17

**Exemplul 3**: _Mesajul moarte - Afișarea unui mesaj când un jucător moare, având numele jucătorilor colorate în culorile lor_:

```cpp
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // MAX_PLAYER_NAME is a predefined constant with the value of 24, we add 1 to take into account the null terminator, thanks to Pottus for pointing that out.
    new message[144], playerName[MAX_PLAYER_NAME + 1], killerName[MAX_PLAYER_NAME + 1];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    GetPlayerName(killerid, killerName, MAX_PLAYER_NAME);

    format(message, sizeof(message), "{%06x}%s {000000}killed {%06x}%s", GetPlayerColor(killerid) >>> 8, killerName, GetPlayerColor(playerid) >>> 8, playerName);
    SendClientMessageToAll(0, message);

    return 1;
}
```

Având în vedere următoarea listă de jucători conectați:

| **ID** | **Jucator**                                     |
| ------ | ----------------------------------------------- |
| 0      | <span style={{color: 'red'}}>Compton</span>     |
| 1      | <span style={{color: 'grey'}}>Dark</span>       |
| 5      | <span style={{color: 'red'}}>Player1</span>     |
| 6      | <span style={{color: 'blue'}}>Bartolomew</span> |
| 11     | <span style={{color: 'grey'}}>unban_pls</span>  |

Spuneți, `playerid` `0` a ucis `playerid` `6` , mesajele formatate ar trebui să scrie `** {FF0000} Compton {000000} ucis> {0000FF} Bartolomew ** `, care va trimite următorul mesaj client tuturor pe server:

> <span style={{color: 'red'}}>Compton</span> ­ <span style={{color: '#000000'}}>killed</span> ­ <span style={{color: 'blue'}}>Bartolomew</span>

Îmi cer scuze dacă v-am confundat folosind [shift bit logic](https://en.wikipedia.org/wiki/Logical_shift), a fost pur și simplu folosit aici pentru a transforma numărul zecimal returnat de funcția `GetPlayerColor` în un număr hexazecimal care reprezintă o culoare, schimbarea în sine este utilizată pentru a omite spațiul -alfa-, pentru mai multe despre acest lucru, vă recomand cu tărie să verificați [acest tutorial](Binar) de **Kyosaur**.

#### Specificatori personalizați

Lucrul cu specificatorii de formatare prin care am trecut până acum este suficient, puteți face literalmente tot felul de lucruri cu acele instrumente magnifice, dar nimic nu ne împiedică să ne întrebați pentru mine, cât de lacomi de noi. Toate datorită lui ** Slice ** după ce a fost influențat de [sscanf](https://github.com/maddinat0r/sscanf), a venit cu o includere uimitoare, [formatex](https://github.com/Southclaws/formatex), care a adăugat mai mulți noi specificatori de utilizat, ceea ce a ușurat într-adevăr o mulțime de lucruri de pion în fiecare zi. Dar asta nu a fost, puteți crea propriile dvs. specificatori pentru a se potrivi nevoilor dvs. și, oricât de mișto ar părea, procesul este foarte ușor.

Doar în scopuri de testare, să facem ceva prostesc, ceva la fel de simplu ca să dai un șir ca intrare și să-l returnăm sub forma unui link (_https://www.string.com_);

```cpp
FormatSpecifier<'n'>(output[], const param[]) {
	format(output, sizeof(output), "https://www.%s.com", param);
}
```

La fel de simplu, și, prin urmare, puternicul specificator `%n` (prescurtare pentru Newton, deoarece este foarte cool și știința rachetei complicată 😉 s-a născut, să testăm acest campion:

```cpp
printf("%n", "samp");
```

> https://www.samp.com

:::note

Nu lăsați acest exemplu să vă păstreze sau să vă limitați așteptările pentru ceea ce este posibil să realizați cu specificatorii personalizați, există exemple mai bune pe pagina principală de lansare, [vă rugăm să consultați acest lucru](https://github.com/Southclaws/formatex/blob/master/README.md).

:::

### linkuri externe

#### Tutoriale similare

- [String formatting](http://web-old.archive.org/web/20190419210950/https://forum.sa-mp.com/showthread.php?t=265433) de [krogsgaard20](http://web-old.archive.org/web/20190421052543/https://forum.sa-mp.com/member.php?u=126724)
- [Understanding Strings](http://web-old.archive.org/web/20190420182625/https://forum.sa-mp.com/showthread.php?t=284112) de [\[HiC\]TheKiller](http://web-old.archive.org/web/20190419205839/https://forum.sa-mp.com/member.php?u=23565)
- [How to use strcmp](http://web-old.archive.org/web/20190419172015/https://forum.sa-mp.com/showthread.php?t=199796) de [Ash.](http://web-old.archive.org/web/20190419205839/https://forum.sa-mp.com/member.php?u=78597)
- [Beginner's Guide: Single/Two/Multi-dimensional Arrays](http://web-old.archive.org/web/20190419102936/https://forum.sa-mp.com/showthread.php?t=318212) de [iPLEAOMAX](http://web-old.archive.org/web/20190419112304/https://forum.sa-mp.com/member.php?u=122705)
- [Tips and Tricks](http://web-old.archive.org/web/20190419112018/https://forum.sa-mp.com/showthread.php?t=216730) de [Slice](https://github.com/oscar-broman)
- [Code optimization](http://web-old.archive.org/web/20190419205837/https://forum.sa-mp.com/showthread.php?t=571550) de [Misiur](http://web-old.archive.org/web/20190419111434/https://forum.sa-mp.com/member.php?u=55934)
- [Packed strings](http://web-old.archive.org/web/20190419172431/https://forum.sa-mp.com/showthread.php?t=480529) de [Emmet\_](https://github.com/emmet-jones)
- [IRC string formatting](https://github.com/myano/jenni/wiki/IRC-String-Formatting) de [myano](https://github.com/myano)
- [String manupilation](https://web.archive.org/web/20190424140855/https://www.compuphase.com/pawn/String_Manipulation.pdf) de [CompuPhase](https://web.archive.org/web/20190424140855/http://www.compuphase.com/)
- [Pawn-lang](https://github.com/pawn-lang/compiler/blob/master/doc/pawn-lang.pdf)
- [An in-depth look at binary and binary operators](http://web-old.archive.org/web/20190419095051/https://forum.sa-mp.com/showthread.php?t=177523) de [Kyosaur](http://web-old.archive.org/web/20190419205838/https://forum.sa-mp.com/member.php?u=23990)

#### Relatari/plugin-uri/contributii relatate

- [Westie](http://web-old.archive.org/web/20190419205841/https://forum.sa-mp.com/member.php?u=56481)'s [strlib](http://web-old.archive.org/web/20200923234356/https://forum.sa-mp.com/showthread.php?t=85697)
- [Slice](https://github.com/oscar-broman)'s [strlib](https://github.com/oscar-broman/strlib)
- [Slice](https://github.com/oscar-broman)'s [formatex](https://github.com/Southclaws/formatex)
- [corne](http://web-old.archive.org/web/20190419205840/https://forum.sa-mp.com/member.php?u=98345)'s [y_stringhash](http://web-old.archive.org/web/20190419205838/https://forum.sa-mp.com/showthread.php?t=571305)
- [Y-Less](https://github.com/Y-Less)'s [sscanf](https://github.com/maddinat0r/sscanf)

#### Referințe

- [GTA San Andreas](https://www.rockstargames.com/sanandreas/)
- [Textdraw](../scripting/resources/textdraws#what-is-a-textdraw)
- [Gametext](../scripting/functions/GameTextForPlayer)
- [Limitations](../scripting/resources/limits)
- [ASCII](https://en.wikipedia.org/wiki/ASCII)
- [ASCII table](https://www.asciitable.com/)
- [Pawn Tutorial](https://wiki.alliedmods.net/Pawn_Tutorial)
- [Control Structures](../scripting/language/ControlStructures)
- [Null character](https://en.wikipedia.org/wiki/Null_character)
- [RGBA color space](https://en.wikipedia.org/wiki/RGBA_color_space)
- [Color picker](https://www.webpagefx.com/web-design/color-picker/)
- [TextDrawColor](../scripting/functions/TextDrawColor)
- [Gametext styles](../scripting/resources/gametextstyles)
- [Color list](../scripting/resources/colorslist)
- [Escape sequence](https://en.wikipedia.org/wiki/Escape_sequence)
- [r/programmerhumor](https://www.reddit.com/r/ProgrammerHumor/)
- [Newline](https://en.wikipedia.org/wiki/Newline)
- [Undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior)
- [Bobby table](https://bobby-tables.com/about)
- [strfind](../scripting/functions/strfind)
- [format](../scripting/functions/format)
- [Bitwise logical shift](https://en.wikipedia.org/wiki/Logical_shift)
