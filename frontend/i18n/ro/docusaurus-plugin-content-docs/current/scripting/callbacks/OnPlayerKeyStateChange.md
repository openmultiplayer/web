---
title: OnPlayerKeyStateChange
description: Acest callback este apelat atunci când starea oricărei taste acceptate este schimbată (apăsată/eliberată).
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când starea oricărei taste [acceptate](../resources/keys) este schimbată (apăsată/eliberată).<br/>Tastele direcționale nu declanșează OnPlayerKeyStateChange (sus/jos/stânga/dreapta).

| Name     | Descriere                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------ |
| playerid | ID-ul jucătorului care a apăsat sau a eliberat o tastă.                                          |
| newkeys  | O hartă (mască de biți) a cheilor deținute în prezent - [vezi aici](../resources/keys)           |
| oldkeys  | O hartă (mască de biți) a cheilor deținute înainte de modificarea curentă - [vezi aici](../resources/keys). |

## Returnări

- This callback does not handle returns.
- It is always called first in gamemode.

## Note

:::info

This callback can also be called by NPC.

:::

:::tip

Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).<br/>They can only be detected with [GetPlayerKeys](../functions/GetPlayerKeys) (in [OnPlayerUpdate](../callbacks/OnPlayerUpdate) or a timer).

:::

## Funcții similare

    #test

- [GetPlayerKeys](../functions/GetPlayerKeys): Verificați ce taste ține un jucător.

## Informații suplimentare

### Introducere

Acest callback este apelat ori de câte ori un jucător apasă sau eliberează una dintre tastele acceptate (consultați [Taste](../resources/keys)).<br/>Tastele care sunt acceptate nu sunt taste reale de la tastatură, ci funcția mapată in San Andreas, aceasta înseamnă că, de exemplu, nu puteți detecta când cineva apasă pe <strong>bara de spațiu</strong>, dar puteți detecta când apăsă tasta de sprint (care poate fi sau nu atribuită barei de spațiu ( este implicit)).

### Parametrii

The parameters to this function are a list of all keys currently being held down and all the keys held down a moment ago. The callback is called when a key state changes (that is, when a key is either pressed or released) and passes the states or all keys before and after this change. This information can be used to see exactly what happened but the variables can not be used directly in the same way as parameters to other functions. To reduce the number of variables only a single BIT is used to represent a key, this means that one variable may contain multiple keys at once and simply comparing values will not always work.

### Cum să NU să verifici o cheie

Să presupunem că doriți să detectați când un jucător apasă butonul FIRE, codul evident ar fi:

```c
if (newkeys == KEY_FIRE)
```

Acest cod poate funcționa chiar și în testarea dvs., dar este greșit și testarea dvs. este insuficientă. Încercați să vă ghemuiți și să apăsați focul - codul dvs. nu va mai funcționa instantaneu. De ce? Deoarece „newkeys” nu mai este același lucru cu „KEY_FIRE”, este același cu „KEY_FIRE” COMBINAT CU „KEY_CROUCH”.

### Cum se verifică o cheie

Deci, dacă variabila poate conține mai multe chei simultan, cum verifici doar una singură? Răspunsul este un pic de mascare. Fiecare tastă are propriul bit în variabilă (unele taste au același bit, dar sunt taste onfoot/incar, deci nu pot fi apăsate niciodată în același timp) și trebuie să verificați doar acel singur bit:

```c
if (newkeys & KEY_FIRE)
```

Rețineți că singurul <strong>&</strong> este corect - acesta este un ȘI pe biți, nu un ȘI logic, așa cum se numesc cele două ampersand.

Acum, dacă testați acest cod, va funcționa indiferent dacă sunteți ghemuit sau în picioare când apăsați tasta de declanșare. Cu toate acestea, există încă o mică problemă - se va declanșa atâta timp cât țineți cheia. OnPlayerKeyStateChange este apelat de fiecare dată când o tastă se schimbă și acel cod este adevărat ori de câte ori tasta de declanșare este apăsată. Dacă apăsați foc, codul se va declanșa, dacă acea tastă este apăsată și apăsați ghemuit - acel cod se va declanșa din nou deoarece o tastă (ghemuit) s-a schimbat și focul este încă ținut apăsat Cum detectăm când o tastă este apăsată pentru prima dată, dar nu se declanșează din nou când este încă apăsată și se schimbă o altă cheie?

### Cum să verificați dacă o tastă a fost apăsată

Aici intervine "oldkeys". Pentru a verifica dacă o tastă tocmai a fost apăsată, trebuie să verificați mai întâi dacă este setată în „tastele noi” - adică este ținută apăsată, apoi verificați că NU este în „tastele vechi” - adică este tocmai a fost ținut apăsat. Următorul cod face acest lucru:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

Acest lucru va fi adevărat NUMAI atunci când tasta FIRE este apăsată pentru prima dată, nu când este apăsată și se schimbă o altă tastă.

### Cum să verificați dacă o cheie este eliberată

Exact același principiu ca mai sus, dar invers:

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### Cum se verifică mai multe chei

Dacă doriți să verificați dacă jucătorii ȚINȚI se ghemuiesc și trag, atunci următorul cod va funcționa bine:

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

Cu toate acestea, dacă doriți să detectați când aceștia apăsați ÎNTÂI PRIME și vă ghemuiți, următorul cod NU VA funcționa. Va funcționa dacă reușesc să apese cele două taste exact în același timp, dar dacă sunt fracționat (cu mult mai puțin de jumătate de secundă), nu va:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

De ce nu? Deoarece OnPlayerKeyStateChange este apelat de fiecare dată când se schimbă o singură cheie. Așa că ei apasă „KEY_FIRE” - OnPlayerKeyStateChange este apelat cu „KEY_FIRE” în „newkeys” și nu în „oldkeys”, apoi apăsă „KEY_CROUCH” - OnPlayerKeyStateChange este apelat cu „KEY_CROUCH” și „KEY_FIRE” în „newkeys”, dar „ KEY_FIRE" este acum și în „oldkeys”, deoarece a fost deja apăsat, așa că „!(oldkeys & KEY_FIRE)” va eșua. Din fericire, soluția este foarte simplă (de fapt, mai simplă decât codul original):

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

Acest lucru poate părea complicat, dar verifică dacă ambele chei sunt setate în „newkeys” și că ambele chei nu au fost setate în „oldkeys”, dacă una dintre ele a fost setată în „oldkeys”, asta nu contează, deoarece nu ambele. au fost. Toate aceste lucruri pot fi simplificate foarte mult cu definiții.

## Simplificare

### Detectarea menținerii unei chei

Definiți:

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

Ținând apăsată o cheie:

```c
if (HOLDING( KEY_FIRE ))
```

Ținând apăsată mai multe chei:

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### Detectare prima apăsare a unei taste

Definiți:

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

Apăsată o tastă:

```c
if (PRESSED( KEY_FIRE ))
```

Apăsate mai multe taste:

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### Detectează dacă un jucător apasă o tastă în prezent

Definiți:

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

Ținând apăsată o cheie:

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

Ținând apăsată mai multe chei:

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### Detectarea eliberării unei chei

Definiți:

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

S-a eliberat o cheie:

```c
if (RELEASED( KEY_FIRE ))
```

S-au eliberat mai multe chei:

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## Exemple

### Atașați NOS când jucătorul apasă clic

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_FIRE))
	{
		if (IsPlayerInAnyVehicle(playerid))
		{
			AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);
		}
	}
	return 1;
}
```

### Super saritura

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_JUMP))
	{
		new
			Float:x,
			Float:y,
			Float:z;
		GetPlayerPos(playerid, x, y, z);
		SetPlayerPos(playerid, x, y, z + 10.0);
	}
	return 1;
}
```

### Modul God în timp ce țineți apăsat

```c
new
	Float:gPlayerHealth[MAX_PLAYERS];

#if !defined INFINITY
	#define INFINITY (Float:0x7F800000)
#endif

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_ACTION))
	{
		// Tocmai au apăsat tasta de acțiune, salvează-le
		// sănătate veche pentru refacere
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// Au lăsat doar acțiunea - restaurați
		// vechea lor sănătate din nou.
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### Explicație

Nu trebuie să vă faceți griji despre CUM se face, doar că este. HOLDING detectează dacă aceștia apasă o tastă (sau taste), indiferent dacă au apăsat-o înainte, PRESSED detectează dacă doar au apăsat tastele și RELEASED detectează dacă tocmai au eliberat o tastă(e). Cu toate acestea, dacă doriți să aflați mai multe - citiți mai departe.

Motivul pentru care trebuie să faceți acest lucru, nu doar folosind & sau ==, este să detectați exact tastele pe care le doriți, ignorând altele care pot fi sau nu apăsate. În binar KEY_SPRINT este:

```
0b00001000
```

și KEY_JUMP este:

```
0b00100000
```

astfel, OR-ul în cheile dorite (le-am putea adăuga și în acest exemplu, dar nu este întotdeauna cazul) dă:

```
0b00101000
```

Dacă am folosit doar & și s-a apelat OnPlayerKeyStateChange pentru un jucător care apasă pe salt, am găsit următorul cod:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

AND-ul celor două numere nu este 0, deci rezultatul verificării este adevărat, ceea ce nu este ceea ce ne dorim.

Dacă am folosi doar == cele două numere nu sunt în mod clar aceleași, astfel verificarea ar eșua, ceea ce ne dorim.

Dacă jucătorul apăsa salt, sprint și ghemuit, am obține următorul cod:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

Versiunea AND este aceeași cu cheile necesare și, de asemenea, nu 0, astfel încât va da răspunsul corect, totuși cele două numere originale nu sunt aceleași, așa că == va eșua. În ambele exemple, unul dintre cei doi a dat răspunsul corect și unul a dat răspunsul greșit. Dacă îl comparăm pe primul folosind & și == obținem:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

Evident, dorit și AND nu sunt aceleași, așa că verificarea eșuează, ceea ce este corect. Pentru al doilea exemplu:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

Wanted și AND sunt aceleași, așa că compararea lor ca fiind egală va avea ca rezultat un rezultat adevărat, care din nou este corect.

Deci, folosind această metodă, putem verifica cu exactitate dacă anumite taste sunt apăsate ignorând toate celelalte taste care pot fi sau nu apăsate. verificarea tastelor vechi folosește doar != în loc de == pentru a se asigura că tastele necesare nu au fost apăsate anterior, așa că știm că una dintre ele tocmai a fost apăsată.