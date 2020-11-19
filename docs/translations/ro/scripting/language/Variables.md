---
title: "Noțiuni de bază: Variabile"
description: Un ghid pentru începători pentru variabilele din Pawn
---

## Variabile

Unul dintre cele mai importante concepte din programare este conceptul de 'variabile'. În programare, o variabilă este o entitate care poate fi schimbată, dar în ceea ce privește ce? În limba Pawn, o variabilă deține o 'valoare' în orice moment și acea valoare - așa cum sugerează și numele - este 'variabilă' sau 'schimbabilă'.

Motivul pentru care variabilele sunt atât de importante se datorează faptului că sunt în esență unități mici de memorie de calculator care pot păstra sau 'aminti' diferite valori în timp ce programul este în curs de execuție (rulează), iar această proprietate se dovedește a fi foarte utilă în programare. De exemplu, doriți să țineți evidența scorurilor a 100 de jucători într-un joc, o puteți face cu ușurință programând computerul pentru a stoca (amintiți-vă) și a actualiza acele valori. Mai târziu, dacă doriți să găsiți scorul mediu al acelor jucători sau doriți să creați un clasament, acele valori din variabile pot fi ușor accesate și utilizate în acest scop.

### Declararea variabilelor

Urmează sintaxa pentru declarația variabilă:

```c
// Creating (more appropriately, 'declaring') a variable named 'myVariable

new myVariable;

// The 'new' keyword is used for declaring a variable
// In the above line a variable is declared with the name 'myVariable'
// Semi-colon is used in the end to close the declaration statement.
```

Sintaxa declarației poate fi mai bine înțeleasă examinând câteva exemple:

```c
new var;
new ammo;
new score;
new vehicles;
new topScore;
```

Fiecare dintre variabilele definite mai sus are o valoare implicită, care este zero. Există diferite moduri de atribuire a valorilor unei variabile. O metodă este atribuirea directă a unei variabile în timp ce este declarată:

```c
new letters = 25;
```

În exemplul de mai sus, este declarată o variabilă numită 'litere', cu o valoare de 25. Veți observa un semn egal care este un simplu Operator de atribuire care poate fi utilizat pentru atribuirea de valori variabilelor. Evaluează expresia din dreapta și atribuie valoarea rezultată variabilei la care se face referire în partea stângă. În afară de atribuirea valorilor direct la declarație, o puteți face și în părțile ulterioare ale codului:

```c
new letters;

letters = 25;
```

### Domenii de aplicare

Modificarea valorii unei variabile este posibilă numai dacă partea codului în care faceți referire la variabilă se află în sfera acelei variabile. Domeniul de aplicare al unei variabile depinde de blocul de cod sau poziția în care a fost declarată variabila respectivă. De exemplu, o variabilă declarată în afara oricărui bloc de cod, de obicei la începutul scriptului, are un domeniu 'Global' și poate fi accesată de oriunde din script:

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

În afară de variabilele 'globale' (cu scop), există variabile 'locale' sau 'private' care pot fi accesate numai din interiorul blocului de cod unde au fost declarate.

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

Dacă încercați să compilați codul de mai sus, compilatorul va afișa o eroare care este rezonabilă, deoarece o variabilă locală face referințe într-un bloc complet diferit de cod. Notă: Dacă este un bloc de cod imbricat, atunci variabila poate fi accesată de acolo.

Un lucru important de remarcat este că nu puteți declara variabile cu aceleași nume dacă scopurile lor intercedează. De exemplu, dacă aveți deja o variabilă numită 'scor' pe un domeniu global, nu puteți crea o altă variabilă numită 'punctaj' pe domeniul global, precum și una locală, iar acest lucru este valabil și pentru invers (dacă au deja o variabilă locală, evitați declararea unei variabile globale cu același nume).

```c
#include <a_samp>

new g_score;

public OnFilterScriptInit ()
{
    new g_score = 5; // This line will show an error.
    return 1;
}
```

### Reguli de denumire

Acum că știți cum să declarați variabile, trebuie să cunoașteți regulile de denumire pentru declararea variabilei care sunt enumerate mai jos:

- Toate numele variabilelor trebuie să înceapă cu o literă sau o subliniere (`_`)
- După prima literă inițială, numele variabilelor pot conține litere și cifre, dar nu spații sau caractere speciale.
- Numele variabilelor sunt sensibile la majuscule, adică literele majuscule sunt distincte de literele mici.
- Utilizarea unui cuvânt rezervat (cuvânt cheie) ca nume de variabilă va afișa o eroare.

#### Exemple:

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

### Stocarea diferitelor tipuri de date

După aceea, acum să analizăm câteva exemple despre ce tipuri de date pot fi stocate în variabilă și cum:

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

O variabilă este capabilă să dețină un caracter, valoare întreagă, booleană (adevărată sau falsă) și o valoare float (valoare zecimală). Comentariile din codul de mai sus arată că stocarea unui șir într-o variabilă duce la o eroare (deoarece șirurile pot fi stocate numai în _Arrays_). În afară de aceasta, atribuirea unei valori float unei variabile va duce la un avertisment al compilatorului, care poate fi evitat prin adăugarea de 'etichete'. Fără etichete adecvate, scriptul va afișa avertismente la compilare, dar va fi executabil. Etichetele spun compilatorului despre tipul de date care este destinat să fie stocat în variabilă, care la rândul nostru ne informează sub formă de erori sau avertisment dacă facem o greșeală de rupere a programului în cod. Exemplu de etichete:

```c
new decimalValue = 1.0; // Incorrect
new bool: decimalValue = 1.0 // Incorrect
new Float: decimalValue = 1.0; // Correct

new switchOn = 1.0; // Incorrect
new switchOn = true; // Incorrect, doesn't show a warning
new bool: switchOn = true; // Correct
```

Utilizarea etichetelor corecte este importantă pentru a evita orice erori sau erori în timpul executării programului.

Pawnul fiind un limbaj fără tip ne permite să stocăm diferite tipuri de date în aceeași variabilă, care poate fi utilă în unele cazuri și supărătoare în altele, dar o astfel de utilizare a variabilelor nu este recomandată.

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
