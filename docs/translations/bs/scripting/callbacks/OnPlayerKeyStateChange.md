---
title: OnPlayerKeyStateChange
description: Ovaj callback je pozvan kada se stanje bilo koje podržane tipke promijeni (pritisnuta/puštena).
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada se stanje bilo koje [podržane](../resources/keys) tipke promijeni (pritisnuta/puštena).<br/>Tipke sa smjerom neće uzrokovati pozivanje `OnPlayerKeyStateChange` (gore/dole/lijevo/desno).

| Ime      | Deskripcija                                                                                  |
| -------- | -------------------------------------------------------------------------------------------- |
| playerid | ID igrača koji je pritisnuo ili pustio tipku.                                                |
| newkeys  | Mapa (bitmaska) trenutno držanih tipki - [pogledaj ovdje](../resources/keys)                 |
| oldkeys  | Mapa (bitmaska) tipki držanih prije trenutne promjene - [pogledaj ovdje](../resources/keys). |

## Returns

- Ovaj callback ne upravlja return-ovima.
- Uvijek je pozvan prvi u gamemode-u.

## Zabilješke

:::info

Ovaj callback takođerm ože biti pozvan od strane NPC-a.

:::

:::tip

Tipke sa smjerom neće uzrokovati pozivanje `OnPlayerKeyStateChange` (gore/dole/lijevo/desno).<br/>Oni mogu biti detektovani samo sa [GetPlayerKeys](../functions/GetPlayerKeys) (u [OnPlayerUpdate](OnPlayerUpdate) ili u tajmeru).

:::

## Srodne Funkcije

    #test

- [GetPlayerKeys](../functions/GetPlayerKeys): Provjeri koje tipke igrač drži.

## Dodatne Informacije

### Uvod

Ovaj callback je pozvan kad god igrač pritisne ili pusti jedan od podržanih tipku (pogledajte [Keys](../resources/keys)).<br/>Tipke koje su podržane nisu zapravo tipke sa tipkovnice, već San Andreas preslikane funkcijske tipke, to znači da, naprimjer, ne možete detektovati kada neko pritisne <strong>spacebar</strong>, ali možete detektovati kada neko pritisne "sprint key" (koji može, ili ne mora biti dodijeljen razmaknici (to je prema zadanim postavkama)).

### Parametri

Parametri ove funkcije su popis svih tipki koje se trenutno drže i svih tipki koje su maloprije pritisnute. Callback je pozvan kada se stanje tipke promijeni (to je, kada je tipka pritisnuta ili puštena) i prođe stanja svih tipki prije i poslije ove promjene. Ova informacija se može koristiti da vidite šta se tačno desilo ali varijable ne mogu biti korištene direktno na isti način kao i parametri na ostalu funkciju. Da bi se smanjio broj varijabli, za predstavljanje tipke koristi se samo jedan BIT, to znači da jedna varijabla može sadržavati više tipki odjednom i jednostavno uspoređivanje vrijednosti neće uvijek raditi.

### Kako NE provjeravati tipku

Idemo zamisliti da želite da detektujete kada igrač pritisne FIRE tipku, očigledan kod bi bio:

```c
if (newkeys == KEY_FIRE)
```

Ovaj kôd može čak raditi u vašem testiranju, ali je pogrešan i vaše testiranje je nedovoljno. Pokušaj čučnuti i pritisnuti "fire" - tvoj kod će odmah prestati raditi. Zašto? Zato što "newkeys" nije više isti kao "KEY_FIRE", isto je kao "KEY_FIRE" KOMIBNIRANO SA "KEY_CROUCH".

### Kako provjeravati tipku

Ako varijabla može da sadrži više tipki odjednom, kako da provjeriš samo jednu od njih? Odgovor je malo komplikovan. Svaka tipka ima svoj lični bit u varijabli (neke tipke imaju isti bit, ali one su onfoot/incar tipke, tako da svakako ne mogu biti pritisnute u isto vrijeme) i morate da provjerite samo taj jedan bit:

```c
if (newkeys & KEY_FIRE)
```

Zapamti da jedan <strong>&</strong> je tačan - ovo je pomalo AND, a ne logično AND, kako se ta dva ampersanda nazivaju.

Ako testirate ovaj kod on će raditi i ako čučite i ako stojite kada pritisnete "fire" tipku. Međutim, još uvijek postoji jedan mali problem - pucati će sve dok držite tipku. OnPlayerKeyStateChange je pozvan svaki put kada se tipka promijeni i taj kod je "true" svaki put kada je "fire" tipka zadržana. Ako pritisnete "fire" kod će se aktivirati, Ako je ta tipka zadržana i pritisnete crouch - taj kod će se ponovno aktivirati zato što se tipka (crouch) promijenila i "fire" je još uvijek zadržan. Kako da detektujete kada je tipka prva pritisnuta, ali da se ne aktivira ponovno kada se još drži druga tipka?

### Kako provjeriti tipku koja je pritisnuta

Ovo je slučaj gdje "oldkeys" dolazi na snagu. Da biste provjerili je li tipka upravo pritisnuta, prvo trebate provjeriti je li postavljena u "newkeys" - što znači da je pritisnuta, a zatim provjerite da NIJE u "oldkeys" - što znači da je tek pritisnuta. Sljedeći kod radi to:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

Ovo će biti tačno SAMO kada je FIRE tipka prva pritisnuta, ne kada se drži i promijeni se još jedna tipka.

### Kako provjeriti kada je tipka puštena

Zapravo isti princip kao gore, ali obrnuto:

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### Kako provjeriti više tipki

Ako želite da provjerite da li igrač DRŽI "crouch" i "fire" onda će to raditi sljedeći kod:

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

kako god, ako želite da detektujete kada PRVO pritisnu "fire" i "crouch" ovaj kod NEĆE raditi. Raditi će ukoliko pritisnu obe tipke u isto vrijeme, ali ako su djelomično vani (daleko manje od pola sekunde) neće:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

Zašto ne radi? Zato što je `OnPlayerKeyStateChange` pozvan svaki put kada se jedna tipka promijeni. Tako oni pritisnu "KEY_FIRE" - OnPlayerKeyStateChange je pozvan sa "KEY_FIRE" u "newkeys" i ne u "oldkeys", onda pritisnu "KEY_CROUCH" - OnPlayerKeyStateChange je pozvan sa "KEY_CROUCH" i "KEY_FIRE" u "newkeys", ali i "KEY_FIRE" je sada u "oldkeys" s obzirom da je već bio pritisnut, tako da "!(oldkeys & KEY_FIRE)" neće uspjeti. Srećom, rješenje je vrlo jednostavno (zapravo jednostavnije od originalnog koda):

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

Ovo će možda izgledati komplikovano, ali ono provjerava da li su obe tipke postavljene u "newkeys" i da li obe tipke nisu postavljene u "oldkeys", ako je jedna od njih u "oldkeys" to nije važno jer nisu bili obojica. Sve ove stvari mogu biti jako pojednostavljene sa definisanjem (defines).

## Pojednostavljenje

### Detektovanje držanja tipke

Definicija:

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

Drži tipku:

```c
if (HOLDING( KEY_FIRE ))
```

Drži više tipki:

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### Detektovanje prvog pritiska tipke

Definicija:

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

Pritisnuli jednu tipku:

```c
if (PRESSED( KEY_FIRE ))
```

Pritisnuo više tipki:

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### Detektovanje pritišče li igrač trenutno tipku

Definicija:

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

Pritiskom na jednu tipku:

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

Pritiskom na više tipki:

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### Detektovanje puštanja tipke

Definicija:

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

Pustio jednu tipku:

```c
if (RELEASED( KEY_FIRE ))
```

Pustio više tipki:

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## Primjeri

### Pričvrstite NITRO(Objekat) kada igrač pritisne "fire" tipku

```c
public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
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

### Super skok

```c
public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
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

### "God mode" kada drži "use" tipku

```c
new
	Float:gPlayerHealth[MAX_PLAYERS];

#if !defined INFINITY
	#define INFINITY (Float:0x7F800000)
#endif

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
{
	if (PRESSED(KEY_ACTION))
	{
		// Upravo su pritisnuli "action" tipku, sačuvaj njihov
		// stari health za vraćanje.
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// Jednostavno su pustili akciju - vrati
		// njihov stari health ponovno.
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### Pojašnjenje

Ne morate da brinete o tome KAKO je to urađeno, samo da jeste. HOLDING(Držanje) detektuje da li su pritisnuli tipku/e, bez obzira na to jesu li je pritiskali prije, PRESSED(Pritisnuo) detektuje ako su pritisnuli tipku/e i RELEASED(Pustili) detektuje ako su upravo pustili tipku/e. Kako god, ako želite znati više - nastavite čitati.

Razlog zašto ovo morate da uradite na ovaj način, a ne samo korištenjem & or ==, je taj da detektuje is to detect upravo te tipke koje želite ignorisajući ostale koje ne(će) biti pritisnute. Binarno KEY_SPRINT je:

```
0b00001000
```

i KEY_JUMP je:

```
0b00100000
```

Ovo ih "ORing-uje" u željene tipke (mogli bismo ih dodati i u ovom primjeru, ali to nije uvijek slučaj) daje:

```
0b00101000
```

Ako koristimo samo "&" i OnPlayerKeyStateChange je pozvan kada igrač pritisne "jump" dobili bismo sljedeći kod:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

"AND" dva broja nije 0, dakle rezultat provjere je tačan (1), što nije ono što želimo.

Kada bismo koristili samo "==" ta dva broja očito nisu ista, pa provjera ne bi uspjela, što i želimo.

Da je igrač pritiskao skok/jump), sprint i čučanj(crouch), dobili bismo sljedeći kod:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

"AND-edovana" verzija je ista kao i wanted tipka i također je 0, dakle dati će tačan odgovor, kako god dva originalna broja nisu ista tako da će "==" propasti(fail-ovati). U oba primjera jedan od dva je dao tačan odgovor i jedan je dao netačan odgovor. Ako uporedimo prvi u kojem smo koristili "&" i "==" dobiti ćemo:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

Očito wanted i "AND-edovani" nisu isti, pa provjera ne uspijeva, što je točno. Za drugi primjer:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

Wanted i ANDed su isti tako da kombinujući ih kao jednake će rezultirati tačnim rezultatom, što je ponovno tačno(korektno).

Dakle, pomoću ove metode možemo precizno provjeriti jesu li pritisnute određene tipke zanemarujući sve ostale tipke koje se mogu pritisnuti ili ne. provjera starih tipki samo koristi "!=" umjesto "==" kako bi osigurala da traženi tasteri nisu prethodno pritisnuti, pa znamo da je jedan od njih upravo pritisnut.
