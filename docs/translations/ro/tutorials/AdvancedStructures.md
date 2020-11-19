---
title: "Structuri avansate"
---

## Manipularea matricei

### Găsirea corectă a unui slot gol

Acest exemplu arată cum să găsiți un slot gol într-o matrice folosind practicile standard de codare.

```c
new
    gMyArray[10];

stock FindEmptySlot()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray)) return -1;
    return i;
}
```

Acest exemplu de bază presupune că un slot de matrice este gol dacă valoarea sa este 0. Bucla parcurge toate valorile din matrice (s-ar putea face și cu o constantă) atâta timp cât valorile nu sunt 0. Când atinge una care este 0 în timp ce starea va eșua și bucla se termină fără a utiliza o pauză, așa cum este practică obișnuită, dar descurajată în astfel de situații. Această funcție returnează și -1 dacă nu se găsește un slot liber, care ar trebui verificat la celălalt capăt. În mod obișnuit, ați folosi imediat identificatorul găsit:

```c
MyFunction()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray))
    {
        printf("No free slot found");
        return 0;
    }
    printf("Slot %d is empty", i);
    // Use the found slot in your code for whatever
    return 1;
}
```

Evident, ați înlocui expresia „gMyArray[i]” cu propria dvs. indicație a unui slot în uz.

### Lista

#### Introducere

Listele sunt un tip de structură foarte utilă, sunt practic o matrice în care următoarea piesă sau datele relevante sunt arătate de ultima piesă.

Exemplu:

Spuneți că aveți următoarea matrice:

```c
3, 1, 64, 2, 4, 786, 2, 9
```

Dacă doriți să sortați matricea, veți termina cu:

```c
1, 2, 2, 3, 4, 9, 64, 786
```

Dacă totuși ați dorit să lăsați datele în ordinea inițială, dar știți numerele în ordine din anumite motive (este doar un exemplu), aveți o problemă, cum doriți să aveți numere în două ordine simultan? Aceasta ar fi o bună utilizare a listelor. Pentru a construi o listă din aceste date, ar trebui să transformați matricea într-o matrice 2d, unde a doua dimensiune avea 2 celule mari, prima dimensiune conținând numărul original, cealaltă conținând indexul următorului număr cel mai mare. De asemenea, ați avea nevoie de o variabilă separată pentru a menține indicele celui mai mic număr, astfel încât noua matrice ar arăta astfel:

```c
start = 1
3, 1, 64, 2, 4, 786, 2, 9
4, 3, 5,  6, 7, -1,  0, 2
```

Următorul index asociat cu 786 este -1, acesta este un index de matrice nevalid și indică sfârșitul listei, adică nu mai sunt numere. Cele două 2 ar putea fi, evident, în sens invers, primul din matrice este și primul din listă, deoarece este cel mai probabil să fie întâmpinat mai întâi.

Celălalt avantaj al acestei metode de sortare a numerelor este că se adaugă mai multe numere este mult mai rapid. Dacă doriți să adăugați un alt număr 3 la matricea sortată, ar trebui să schimbați mai întâi cel puțin 4 numere un slot spre dreapta pentru a face spațiu, nu teribil aici, dar foarte lent în matrici mai mari. Cu versiunea listă, puteți adăuga doar 3 la sfârșitul matricei și puteți modifica o singură valoare din listă:

```c
start = 1
3, 1, 64, 2, 4, 786, 2, 9, 3
8, 3, 5,  6, 7, -1,  0, 2, 4
^ modifica aceasta valoare ^ urmatorul cel mai mare slot
```

Niciunul dintre celelalte numere nu s-a mutat, astfel încât niciunul dintre ceilalți indici nu trebuie actualizat, trebuie doar să indicați următorul număr cel mai scăzut către noul număr și să faceți ca noul număr să fie numărul către următorul cel mai scăzut obișnuit. Eliminarea unei valori este și mai ușoară:

```c
start = 1
3, 1, 64, X, 4, 786, 2, 9, 3
8, 6, 5,  6, 7, -1,  0, 2, 4
   ^ Changed to jump over the removed value
```

Aici primele 2 au fost eliminate și numărul care indica acest număr (1) a fost actualizat pentru a indica numărul către care era îndreptat numărul eliminat. În acest exemplu, nici indicatorul și numărul numărului eliminat nu au fost eliminate, dar nu puteți ajunge la acel slot urmând lista, deci nu contează, este efectiv eliminat.

#### Types

Listele din exemplele de mai sus au fost doar liste simple de bază, puteți avea, de asemenea, liste duble în care fiecare valoare indică următoarea valoare și ultima valoare, acestea tind să aibă un pointer la sfârșitul listei și pentru a merge înapoi (de exemplu la obțineți numerele în ordine descrescătoare):

```c
start = 1
end = 5
value: 3, 1,  64, 2, 4, 786, 2, 9, 3
next:  8, 3,  5,  6, 7, -1,  0, 2, 4
last:  6, -1, 7,  1, 8, 2,   3, 4, 0
```

Trebuie să aveți grijă la acestea, mai ales atunci când aveți mai mult de una dintre orice valori, ca ultimul indicator să indice numărul care este următorul indicator care revine direct înapoi, de exemplu, acest lucru este greșit:

```c
2,  3, 3
1,  2, -1
-1, 2, 0
```

Următorul indicator al 2 indică 3 în slotul unu, dar ultimul indicator al lui 3 nu revine la cele două, ambele liste sunt în ordine pe cont propriu (deoarece cele două trei pot fi în sens invers), dar împreună sunt greșite , versiunea corectă ar fi:

```c
2,  3, 3
1,  2, -1
-1, 0, 2
```

Ambele liste încep și se termină la sfârșitul a două numere, lista din spate în exemplul greșit a început pe numărul din mijloc.

Celălalt tip de listă este cel în buclă, unde ultima valoare arată înapoi la prima. Avantajul evident al acestui lucru este că puteți ajunge la orice valoare din orice altă valoare fără să știți în prealabil dacă ținta este înainte sau după punctul de pornire, trebuie doar să aveți grijă să nu intrați într-o buclă infinită, deoarece nu există niciun fel explicit - 1 punct final. Aceste liste au încă puncte de început. Puteți face, de asemenea, liste cu buclă dublă, în cazul în care aveți o listă următoare și ultima, ambele rotunjite în buclă:

```c
start = 1
end = 5
3, 1,  64, 2, 4, 786, 2, 9, 3
8, 3,  5,  6, 7, 1,   0, 2, 4
6, 5,  7,  1, 8, 2,   3, 4, 0
```

#### Liste mixte

Listele mixte sunt tablouri care conțin mai multe liste simultan. Un exemplu ar putea fi o serie de valori, sortate după o listă, cu o altă listă care leagă toate sloturile neutilizate, astfel încât să știți unde puteți adăuga o nouă valoare. Exemplu (X înseamnă slot nefolosit (gol)):

```c
sortedStart = 3
unusedStart = 1
value: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X, 45
sort:  4,        8, 13, 7,      11, 9,  0,      -1,    5
free:      2, 6,            10,             12,     -1
```

Evident, cele două liste nu interacționează niciodată, astfel încât ambele pot folosi același slot pentru următoarea lor valoare:

#### Cod

Înainte de a începe codul, trebuie să decideți ce tip de listă este cel mai potrivit pentru aplicația dvs., aceasta se bazează în totalitate pe aplicație care nu poate fi acoperită cu ușurință aici. Toate aceste exemple sunt liste mixte, o listă pentru valorile necesare, una pentru sloturile neutilizate.

Acest exemplu arată cum se scrie cod pentru o listă sortată numeric crescător.

```c
#define NUMBER_OF_VALUES (10)

enum E_DATA_LIST
{
    E_DATA_LIST_VALUE,
    E_DATA_LIST_NEXT
}

new
    gListData[NUMBER_OF_VALUES][E_DATA_LIST],
    gUnusedStart = 0,
    gListStart = -1; // Starts off with no list

// This function initializes the list
List_Setup()
{
    new
        i,
        size = NUMBER_OF_VALUES;
    size--;
    for (i = 0; i < size; i++)
    {
        // To start with all slots are unused
        gListData[i][E_DATA_LIST_NEXT] = i + 1;
    }
    // End the list
    gListData[size][E_DATA_LIST_NEXT] = -1;
}

// This function adds a value to the list (using basic sorting)
List_Add(value)
{
    // Check if there are free slots in the array
    if (gUnusedStart == -1) return -1;
    new
        pointer = gListStart,
        last = -1,
        slot = gUnusedStart;
    // Add the value to the array
    gListData[slot][E_DATA_LIST_VALUE] = value;
    // Update the empty list
    gUnusedStart = gListData[slot][E_DATA_LIST_NEXT];
    // Loop through the list till we get to bigger/same size number
    while (pointer != -1 && gListData[pointer][E_DATA_LIST_VALUE] < value)
    {
        // Save the position of the last value
        last = pointer;
        // Move on to the next slot
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    // If we got here we ran out of values or reached a larger one
    // Check if we checked any numbers
    if (last == -1)
    {
        // The first number was bigger or there is no list
        // Either way add the new value to the start of the list
        gListData[slot][E_DATA_LIST_NEXT] = gListStart;
        gListStart = slot;
    }
    else
    {
        // Place the new value in the list
        gListData[slot][E_DATA_LIST_NEXT] = pointer;
        gListData[last][E_DATA_LIST_NEXT] = slot;
    }
    return slot;
}

// This function removes a value from a given slot in the array (returned by List_Add)
List_Remove(slot)
{
    // Is this a valid slot
    if (slot < 0 || slot >= NUMBER_OF_VALUES) return 0;
    // First find the slot before
    new
        pointer = gListStart,
        last = -1;
    while (pointer != -1 && pointer != slot)
    {
        last = pointer;
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    // Did we find the slot in the list
    if (pointer == -1) return 0;
    if (last == -1)
    {
        // The value is the first in the list
        // Skip over this slot in the list
        gListStart = gListData[slot][E_DATA_LIST_NEXT];
    }
    else
    {
        // The value is in the list
        // Skip over this slot in the list
        gListData[last][E_DATA_LIST_NEXT] = gListData[slot][E_DATA_LIST_NEXT];
    }
    // Add this slot to the unused list
    // The unused list isn't in any order so this doesn't matter
    gListData[slot][E_DATA_LIST_NEXT] = gUnusedStart;
    gUnusedStart = slot;
    return 1;
}
```

### Copaci binari

#### Introducere

Arborii binari sunt o metodă foarte rapidă de căutare a datelor într-o matrice utilizând un sistem de liste foarte special. Cel mai cunoscut arbore binar este probabil jocul cu 20 de întrebări, cu doar 20 de întrebări da / nu pe care le puteți avea peste 1048576 articole. Un arbore binar, așa cum sugerează și numele, este un tip de arbore, similar cu un arbore genealogic, în care fiecare articol are 0, 1 sau 2 copii. Nu sunt folosite pentru a comanda date, cum ar fi o listă, ci pentru a sorta datele pentru o căutare foarte eficientă. Practic, începeți cu un element undeva aproape de mijlocul listei ordonate de obiecte (de exemplu, numărul de mijloc dintr-o matrice sortată) și comparați-l cu valoarea pe care doriți să o găsiți. Dacă este la fel că ați găsit articolul dvs., dacă este mai mare, vă deplasați la articolul la dreapta (nu imediat la dreapta, elementul din dreapta elementului din mijloc ar fi elementul de la punctul trei sferturi), dacă este mai puțin să vă mișcați la stânga,
apoi repetați procesul.

**Exemplu**

```c
1 2 5 6 7 9 12 14 17 19 23 25 28 33 38
```

Aveți matricea ordonată precedentă și doriți să aflați în ce slot este numărul 7 (dacă este deloc), în acest exemplu este probabil mai eficient să faceți doar o buclă directă prin matrice pentru a o găsi, dar asta nu este punctul metoda crește în timp liniar cu dimensiunea tabloului, un timp de căutare binar crește liniar pe măsură ce tabloul crește exponențial ca dimensiune. Adică o matrice 128 mare va dura de două ori mai mult pentru a căuta direct ca o matrice 64 mare, dar o căutare binară 128 mare va lua doar un cec mai mult decât o căutare binară 64 mare, deloc mult.

Dacă construim un arbore binar din datele de mai sus, obținem: ![Imgur](https://web.archive.org/web/20190416012239im_/https://wiki.sa-mp.com/wroot/images2/f/fe/Binarytree.GIF)

Dacă citiți de la stânga la dreapta, ignorând aspectul vertical, puteți vedea că numerele sunt în ordine. Acum putem încerca să găsim 7.

Numărul de start este 14, 7 este mai mic decât 14, așa că mergem la slotul indicat de ramura din stânga a 14. Aceasta ne aduce la 6, 7 este mai mare decât 6, așa că mergem la dreapta la 9, apoi din nou la stânga la 7. Această metodă a făcut 4 comparații pentru a găsi numărul (inclusiv verificarea finală pentru a confirma că suntem pe 7), folosind o căutare directă ar fi fost necesare 5.

Să spunem că nu există 7, am ajunge la acest arbore binar: ![Binarytree-7-less](https://web.archive.org/web/20190416012239im_/https://wiki.sa-mp.com/wroot/images2/e/e5/Binarytree-7-less.GIF)

Acesta, spre deosebire de exemplul de mai sus, are un singur număr copil (cel 9), precum și 2 și 0 numere copil. Obțineți un arbore perfect numai atunci când există (2 ^ n) -1 numere (0, 1, 3, 7, 15, 31 ...), orice alte numere vor da un arbore nu destul de complet. În acest caz, când ajungem la 9, unde va fi 7, vom descoperi că nu există ramură stângă, adică 7 nu există (nu poate fi nicăieri altundeva în copac, gândiți-vă la asta), deci returnăm -1 pentru slot nevalid.

#### Balansat si nebalansat

Arborii din exemplele de mai sus sunt numiți arbori binari echilibrați, aceasta înseamnă cât mai aproape posibil toate ramurile au aceeași lungime (evident că în al doilea nu există suficiente numere pentru ca acest lucru să fie cazul, dar este cât mai aproape posibil). Construirea copacilor echilibrați nu este ușoară, metoda general acceptată de a construi copaci aproape echilibrați este plasarea numerelor într-o ordine aleatorie, acest lucru poate însemna că veți ajunge la așa ceva: ![Binarytree-uneven](https://web.archive.org/web/20190416012239im_/https://wiki.sa-mp.com/wroot/images2/a/a2/Binarytree-uneven.GIF)

Evident, acest arbore este încă valabil, dar partea dreaptă este mult mai mare decât stânga, totuși găsirea a 25 necesită doar 7 comparații în acest raport față de 12 din lista dreaptă. De asemenea, atâta timp cât începeți cu un număr destul de mediu, metoda de inserare aleatorie ar trebui să producă un arbore destul de echilibrat. Cel mai rău lucru posibil pe care îl puteți face este să puneți numerele în ordine, deoarece atunci nu vor exista deloc ramuri stângi (sau ramuri dreapta dacă se face invers), totuși chiar și în acest caz cel mai rău arborele binar nu va mai dura să caute decât lista dreaptă.

**Modificare**

#### Adaugare

Adăugarea unei valori unui copac binar este relativ ușor, trebuie doar să urmăriți copacul, folosind valoarea pe care doriți să o adăugați ca referință până când ajungeți la o ramură goală și adăugați numărul acolo. De exemplu. dacă ați dori să adăugați numărul 15 la arborele nostru echilibrat original, acesta ar ajunge pe ramura din stânga a 17. Dacă am dori să adăugăm numărul 8 la al doilea arbore echilibrat (cel fără 7) ar ajunge în vechiul slot al 7 din stânga lui 9.

#### Stergere

Ștergerea unui număr dintr-un arbore binar poate fi dificilă sau poate fi ușoară. Dacă numărul este la sfârșitul unei ramuri (de exemplu, 1, 5, 7, 12 etc. în arborele original) pur și simplu le eliminați. Dacă un număr are un singur copil (de exemplu, 9 în al doilea exemplu), pur și simplu îl mutați pe copil (de exemplu, 12) în poziția lor (deci copiii lui 6 ar fi 2 și 12 în noul al doilea exemplu, cu 9 eliminați). Ștergerea devine interesantă numai atunci când un nod are doi copii. Există cel puțin patru moduri de a face acest lucru:

Prima metodă este cea mai simplă din punct de vedere calculatic. Practic, alegeți una dintre ramuri (stânga sau dreapta, asumați dreapta pentru această explicație) și înlocuiți nodul pe care l-ați eliminat cu primul nod al acelei ramuri (adică copilul drept al nodului pe care l-ați eliminat). Apoi mergeți la stânga prin noua ramură până ajungeți la capăt și așezați ramura stângă acolo. De exemplu. dacă ați eliminat 14 din exampe-ul original, ați ajunge cu 25 ocupându-i locul în vârful copacului și 6 atașat la ramura stângă a 17. Această metodă este rapidă, dar se termină cu copaci foarte dezechilibrați foarte repede.

A doua metodă este să obțineți toate numerele care sunt copiii nodului pe care tocmai l-ați eliminat și să reconstruiți un nou arbore binar din ele, apoi să puneți partea de sus a acelui arbore în nodul pe care tocmai l-ați eliminat. Acest lucru menține arborele destul de bine echilibrat, dar este evident mai lent.

A treia metodă este de a combina cele două metode de mai sus și de a reconstrui arborele în linie, acest lucru este mai complex de codat, dar menține arborele echilibrat și este mai rapid decât cea de-a doua metodă (deși nu este aproape la fel de rapid ca prima).

Mentalul final enumerat aici este să setați pur și simplu un steag pe o valoare spunând că nu mai este utilizată, aceasta este chiar mai rapidă decât prima metodă și menține structura, dar înseamnă că nu puteți reutiliza sloturile decât dacă puteți găsi o valoare pentru înlocuiți-l cu mai târziu.
