---
title: Uobičajena pitanja
---

## Sadržaj

## Klijenat

### Dobio sam error "San Andreas cannot be found"

San Andreas Multiplayer **nije** program koji može da radi sam! On dodaje multiplayer funkcionalnost za San Andreas, dakle morate imati GTA San Andreas za PC - također, mora da bude **EU/US v1.0** verzija, ostale verzije kao npr. v2.0 ili Steam i Direct2Drive verzije neće raditi. [Kliknite ovdje da skinete patch kako biste vratili GTA na stariju verziju (1.0)](https://gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch)

### Ne vidim nijedan server u SA:MP browseru

Prvo, budite sigurni da slijedite postupke navedene u [Quick-start vodiču](https://sampwiki.blast.hk/wiki/Getting_Started). Ako ste pratili šta kaže i još uvijek ne vidite nijedan server, morate dozvoliti SA:MPu pristup kroz vaš firewall. Nažalost, zbog velike količine dostupnog softvera firewalla, ne možemo pružiti dodatnu podršku u vezi s tim - predlažemo da pogledate web lokaciju proizvođača ili isprobate Google pretragu. Obavezno imajte i najnoviju verziju SA:MP-a!

### Učitava se Singleplayer umjesto SA:MP-a

:::warning

Ne biste trebali vidjeti singleplayer opcije (new game, load game, itd.) - SA:MP bi se trebao učitati sam od sebe i ne bi trebao prikazivati te opcije. Ako vidite "new game", učitao se singleplayer, a ne San Andreas Multiplayer.

:::

Singleplayer se može učitati iz 2 razloga; instalirali ste SA:MP u pogrešan folder ili imate pogrešnu verziju San Andreasa. Ako imate pogrešnu verziju, možete je vratiti na staru (1.0) koristeći GTA San Andreas downgrader. Kliknite [ovdje](https://gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch) da ga preuzmete.

Ponekad singleplayer meni će se prikazati, ali SA:MP će se zapravo učitati ispravno. Da popravite ovo prosto morate da selektujete neku stavku na meniju, zatim kliknite escape tipku kako biste to napustili. SA:MP će tada nastaviti da se učitava.

### Dobio sam "Unacceptable Nickname" kada sam se pokušao konektovati na server

Provjerite da ne koristite neki od nedozvoljenih znakova u vašem imenu (koristite samo 0-9, a-z, \[\], (), \$, @, ., \_ i =), i da vaše ime nije duže od 20 znakova. Ovo može biti uzrokovano i kada je neki igrač već na serveru sa istim imenom kao i vašim (što se može dogoditi kada se ponovo konektujete na server nedugo nakon pucanja konekcije ili crashovanja). Windows server koji pokreće SA:MP sa online vremenom većim od 50 dana može da uzrokuje ovaj bug.

### Ekran se zadrži na "Connecting to IP:Port..."

Server može biti offline, ili ako se ne možete konektovati ni na jedan server, isključite vaš firewall i provjerite da li radi tada. Ako radi, morate da ponovo postavite vaš firewall. Također problem može biti ako pokrećete zastarjelu verziju SA:MP-a - možete pronaći nove verzije [ovdje](https://sa-mp.mp/downloads/).

### Modificirao sam GTA: San Andreas i SA:MP neće da se učita

Ako neće da se učita izbrišite svoje modove (ili samo one koji su to uzrokovali).

### Kada pokrećem GTA sa SA:MP-om neće da se pokrene

Izbrišite gta_sa.set datoteku iz vašeg userfiels foldera i obratite pažnju da nemate nikakvih čitova/modova.

### Igra crashuje nakon što vozilo eksplodira

Ako imate 2 monitora postoje 3 načina da ovo riješite:

1. Isključite vaš drugi monitor kada igrate sa-mp. (Možda i ne baš pametno ako volite da imate i drugi monitor upaljen.)
2. Postavite Visual FX kvalitetu na nisku (low). (Esc > Options > Display Setup > Advanced)
3. Preimenujte vaš GTA San Andreas folder (npr. u "GTA San Andreas2") (Ovo često uspije, ali ponekad može prestati raditi pa ga morate preimenovati u nešto drugo.)

### Moj miš ne radi nakon izlaska iz pause menija

Ako vam se čini da se vaš miš zaledi u igri dok (polovično) radi u pause meniju, onda morate da isključite multicore opciju [sa-mp.cfg](../../../client/ClientCommands#file-sa-mpcfg "sa-mp.cfg") (postavite je na 0). Kontinuirano tapkanje escape tipke dok miš ponovo ne reagira također može raditi, ali to nije preporučljiv način za rješenje.

### "The file dinput8.dll is missing"

To se možda događa kada DirectX nije pravilno instaliran, pokušajte ga ponovo instalirati - ne zaboravite ponovo pokrenuti svoj računar. Ako se problem i dalje javlja, samo nastavite na C:\\Windows\\System32 i kopirajte datoteku dinput.dll u osnovni direktorij vašeg GTA San Andreas. To bi trebalo riješiti problem.

### Ne mogu vidjeti nametagove drugih igrača!

Imajte na umu da su na nekim serverima globalno onemogućene oznake imena. Inače, ovaj se problem često javlja na računarima s integriranim Intel HD grafičkim procesorima (koji ionako zapravo nisu namijenjeni igrama). Nažalost, tačan uzrok nije poznat, a čini se da ni danas nije dostupno univerzalno rješenje. Dugoročni popravak bio bi instaliranje namjenske grafičke kartice na vaš računar, ako je to moguće i ako vaš budžet to dozvoljava.
