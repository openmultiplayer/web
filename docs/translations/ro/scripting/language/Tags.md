---
title: "Scripting: Taguri"
description: Un ghid pentru taguri
---

## Introducere

O etichetă este un prefix la o variabilă care îi spune compilatorului să trateze variabila special în anumite circumstanțe. De exemplu, puteți utiliza etichete pentru a defini unde o variabilă poate și nu poate fi utilizată, sau un mod special de a adăuga două variabile împreună.

Există două tipuri de etichete - etichete puternice (începând cu o literă majusculă) și etichete slabe (începând cu o literă mică), în cea mai mare parte sunt aceleași, însă în anumite circumstanțe etichetele slabe pot fi transformate în etichete fără compilatorul, adică nu veți primi un avertisment, de cele mai multe ori cu etichete slabe și tot timpul cu etichete puternice, schimbarea implicită a etichetei va avea ca rezultat un avertisment pentru a vă spune că datele sunt probabil utilizate greșit.

Un exemplu foarte simplu este următorul:

```c
new
    File:myfile = fopen("file.txt", io_read);
myFile += 4;
```

Funcția `fopen` va returna o valoare cu o etichetă de tip`Fișier:`, nu există nicio problemă pe acea linie, deoarece valoarea returnată este stocată într-o variabilă, de asemenea, cu o etichetă `Fișier:`(rețineți că la fel și). Cu toate acestea, pe următoarea linie, valoarea `4` este adăugată la mânerul fișierului. "4" nu are etichetă (este de fapt tipul de etichetă `_:` dar variabilele, valorile și funcțiile fără etichetă sunt setate automat la asta și nu trebuie să vă faceți griji în mod normal) și fișierul meu are o etichetă `Fișier :`, evident, nimic și ceva nu pot fi la fel, așa că compilatorul va emite un avertisment, acest lucru este bun, deoarece un handle pentru un fișier nu are sens din punctul de vedere al valorii sale reale și, prin urmare, modificarea acestuia va distruge doar handle-ul și înseamnă fișierul nu poate fi închis deoarece nu mai există un handle valid cu care să treceți și să închideți fișierul.

### Tag-uri puternice

După cum sa menționat mai sus, o etichetă puternică este orice etichetă care începe cu o literă mare. Exemple de acestea în SA: MP includ:

```c
Float:
File:
Text:
```

Acestea nu pot fi amestecate cu alte tipuri de variabile și vor emite întotdeauna un avertisment atunci când încercați să faceți acest lucru:

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

### Tag-uri slabe

O etichetă slabă se comportă în mare parte la fel ca o etichetă puternică, totuși compilatorul nu va emite un avertisment atunci când destinația este lipsită de etichete și sursa este o etichetă slabă. De exemplu, comparați următoarele coduri de etichete puternice și slabe, primul cu eticheta puternică va da un avertisment, al doilea cu eticheta slabă nu:

```c
new
    Strong:myStrong,
    weak:myWeak,
    myNone;

myNone = myStrong; // Warning
myNone = myWeak; // No warning
```

Cu toate acestea, inversul nu este adevărat:

```c
myWeak = myNone; // Warning
```

Acest lucru este valabil și în cazul funcțiilor, apelarea unei funcții cu un parametru fără etichetă, trecerea unei variabile slabe etichetate nu va da un avertisment:

```c
new
    weak:myWeak;
MyFunction(myWeak);



MyFunction(myVar)
{
    ...
}
```

Dar apelarea unei funcții cu un parametru marcat (slab sau puternic), trecerea unui parametru neetichetat va da un avertisment. Exemple de etichete slabe în SA: MP sunt mai puțin cunoscute ca atare, deși sunt adesea utilizate și includ:

```c
bool:
filemode:
floatround_method:
```

## Folosire

### Declarare

Declararea unei variabile cu o etichetă este foarte simplă, trebuie doar să scrieți eticheta, nu este necesar să definiți în prealabil o etichetă în orice mod, totuși acest lucru este posibil și are utilizările sale, așa cum va deveni evident mai târziu:

```c
new
    Mytag:myVariable;
```

Declararea unei variabile cu una dintre etichetele existente vă va permite să utilizați acea variabilă cu funcțiile și operatorii deja scrise pentru acel tip de etichetă.

### Funcții

Crearea unei funcții pentru preluarea sau returnarea unei etichete este foarte simplă, trebuie doar să prefixați partea relevantă cu tipul de etichetă dorit, de exemplu:

```c
Float:GetValue(File:fHnd, const name[])
{
    ...
}
```

Această funcție duce mânerul la un fișier și returnează o valoare float (probabil o valoare citită din fișier și care corespunde numelui valorii trecute în `nume []`). Această funcție ar folosi cel mai probabil funcția `floatstr`, care returnează și un Float: (așa cum vă puteți da seama uitându-vă la bara de stare a pawno când faceți clic pe funcția din lista de funcții din dreapta), după ce ați luat un șir. Implementarea acestei funcții nu este importantă, dar va converti șirul într-o valoare flotantă IEEE, care este apoi stocată ca o celulă (este de fapt strict stocată ca un număr întreg care are doar un model de biți identic cu numărul IEEE relevant ca PAWN este fără tip, dar asta este ceea ce etichetele sunt parțial acolo pentru a combate).

### Operatori

Operatorii precum `+`, `==`, `>` etc pot fi supraîncărcați pentru diferite etichete, adică a face `+` pe două `Float: s` face ceva diferit de a o face pe două variabile neetichetate. Acest lucru este util în special în cazul variabilelor flotante, deoarece, așa cum am menționat, nu sunt într-adevăr flotante, sunt numere întregi cu un model de biți foarte specific, dacă operatorii nu ar fi supraîncărcați, operațiunile ar fi efectuate pur și simplu pe numerele întregi, care ar da un blestem au fost interpretate din nou ca un plutitor. Din acest motiv, eticheta Float: are supraîncărcate versiuni ale majorității operatorilor pentru a apela funcții speciale pentru a face calculele în server în loc de pion.

Un operator este exact ca o funcție normală, dar în locul unui nume de funcție folosiți "operator(**simbol**)" unde (**simbol**) este operatorul pe care doriți să îl suprascrieți. Operatorii valabili sunt:

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

Lucruri precum `\`, `*`, `=` etc se fac automat. Lucruri precum `&` etc nu pot fi supraîncărcate. De asemenea, puteți supraîncărca un operator de mai multe ori cu diferite combinații de etichete. De exemplu:

```c
stock Float:operator=(Mytag:oper)
{
    return float(_:oper);
}
```

Dacă adăugați acest lucru la cod și faceți:

```c
new
    Float:myFloat,
    Mytag:myTag;

myFloat = myTag;
```

Nu veți mai primi un avertisment de compilator așa cum ați avea înainte, deoarece operatorul `=` pentru cazul `Float: = Mytag:` este acum gestionat, astfel încât compilatorul să știe exact ce să facă.

### Suprascriere

În exemplul de supraîncărcare de mai sus linia funcțională a fost:

```c
return float(_:oper);
```

Acesta este un exemplu de suprascriere a etichetelor, `_:` din fața oper înseamnă că compilatorul ignoră practic faptul că oper are un tip de etichetă Mytag: și îl tratează ca tip de etichetă `_:` (adică fără tip de etichetă). Funcția `float ()` etichetează un număr normal, așa că trebuie trecut unul. În acest exemplu, se presupune că `Mytag` stochează un număr întreg obișnuit, dar suprascrierea trebuie tratată foarte atent, de exemplu, următoarele vor da rezultate foarte ciudate:

```c
new
    Float:f1,
    Float:f2 = 4.0;
f1 = float(_:f2);
```

Sensul ar dicta că `f1` va ajunge ca `4.0`, cu toate acestea nu va fi. După cum s-a menționat, f2 stochează o reprezentare a lui `4.0`, nu doar `4` așa cum ar face un întreg, aceasta înseamnă că valoarea reală a variabilei întrucât un număr întreg este un număr foarte impar. Astfel, dacă îi spuneți compilatorului să trateze variabila ca un întreg, va lua pur și simplu modelul de biți din variabilă ca valoare, nu va converti floatul într-un număr întreg, deci veți obține un număr aproape aleatoriu (de fapt nu este aleatoriu, deoarece există un model la punctele flotante IEEE, dar nu va fi nimic ca `4.0`).
