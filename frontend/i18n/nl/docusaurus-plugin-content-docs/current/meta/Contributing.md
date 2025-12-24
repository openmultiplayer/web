---
title: Bijdragen
sidebar_label: Bijdragen
description: Hoe je kunt bijdragen aan de SA-MP Wiki en open.mp-documentatie.
---

Deze documentatiebron staat open voor iedereen om wijzigingen aan bij te dragen! Het enige wat je nodig hebt is een [GitHub](https://github.com)-account en wat vrije tijd. Je hoeft Git niet eens te kennen; het kan allemaal via de webinterface!

Als je een specifieke taal wilt helpen onderhouden, open dan een PR tegen het bestand [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) en voeg een regel toe voor jouw taalmap met jouw gebruikersnaam.

## Inhoud bewerken

Onderaan elke pagina staat een knop die je naar de GitHub-pagina voor bewerken brengt:

![Link "Bewerk deze pagina" aanwezig op elke wikipagina](https://assets.open.mp/assets/images/contributing/edit-this-page.png)

Als voorbeeld: klikken op [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity.md) brengt je naar [deze pagina](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.mdxx) waar je (als je bent aangemeld bij GitHub) een teksteditor krijgt om wijzigingen aan het bestand te maken.

Maak je wijziging en dien een "Pull Request" in. Dit betekent dat de Wiki-beheerders en andere communityleden je wijziging kunnen beoordelen, bespreken of er extra wijzigingen nodig zijn en deze vervolgens samenvoegen.

## Nieuwe inhoud toevoegen

Nieuwe inhoud toevoegen is iets meer werk. Je kunt dit op twee manieren doen:

### GitHub-interface

Wanneer je een map op GitHub bekijkt, is er rechtsboven in de bestandslijst een knop "Add file":

![Knop Add file](https://assets.open.mp/assets/images/contributing/add-new-file.png)

Je kunt ofwel een Markdown-bestand uploaden dat je al hebt geschreven, of het direct in de GitHub-teksteditor schrijven.

Het bestand _moet_ de extensie `.md` hebben en Markdown bevatten. Voor meer informatie over Markdown, zie [deze gids](https://guides.github.com/features/mastering-markdown/).

Als dat gedaan is, klik op "Propose new file" en er wordt een Pull Request geopend voor review.

### Git

Als je Git wilt gebruiken, hoef je alleen maar de Wiki-repository te klonen met:

```sh
git clone https://github.com/openmultiplayer/web.git
```

Open deze in je favoriete editor. Ik raad Visual Studio Code aan omdat het uitstekende hulpmiddelen heeft voor het bewerken en opmaken van Markdown-bestanden. Zoals je ziet, schrijf ik dit met Visual Studio Code!

![Visual Studio Code markdown preview](https://assets.open.mp/assets/images/contributing/vscode.png)

Ik raad twee extensies aan om je ervaring te verbeteren:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) van David Anson – zorgt ervoor dat je Markdown correct is opgemaakt en voorkomt sommige syntactische en semantische fouten. Niet alle waarschuwingen zijn belangrijk, maar sommige kunnen de leesbaarheid verbeteren. Gebruik je gezonde verstand en vraag zo nodig om review!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) van het Prettier.js-team – een formatter die je Markdown-bestanden automatisch opmaakt zodat ze een consistente stijl gebruiken. De Wiki-repository bevat instellingen in `package.json` die de extensie automatisch zou moeten gebruiken. Zorg dat "Format On Save" in je editor is ingeschakeld zodat je Markdown-bestanden automatisch worden opgemaakt bij het opslaan!

## Notities, tips en conventies

### Interne links

Gebruik geen absolute URL's voor links binnen de site. Gebruik relatieve paden.

- ❌

  ```md
  Te gebruiken met [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Te gebruiken met [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` betekent "ga één map omhoog". Dus als het bestand dat je bewerkt in de map `functions` staat en je linkt naar `callbacks`, gebruik je `../` om omhoog te gaan naar `scripting/`, vervolgens `callbacks/` om die map in te gaan, en dan de bestandsnaam (zonder `.md`) van de callback waarnaar je wilt linken.

### Afbeeldingen

Afbeeldingen gaan in een submap binnen `/static/images`. Wanneer je vervolgens een afbeelding linkt met `![]()`, gebruik dan `/images/` als basispad (je hebt `static` niet nodig; dat is alleen voor de repository).

Bij twijfel: bekijk een andere pagina die afbeeldingen gebruikt en kopieer hoe het daar is gedaan.

### Metadata

Het eerste in _elk_ document hier moet metadata zijn:

```mdx
---
title: Mijn documentatie
sidebar_label: Mijn documentatie
description: Dit is een pagina over dingen, spullen en burgers, yay!
---
```

Elke pagina moet een titel en een beschrijving bevatten.

Voor een volledige lijst van wat er tussen de `---` kan staan, zie [de Docusaurus-documentatie](https://docusaurus.io/docs/markdown-features#markdown-headers).

### Koppen

Maak geen niveau-1 kop (`<h1>`) met `#`, die wordt automatisch gegenereerd. Je eerste kop moet _altijd_ `##` zijn.

- ❌

  ```md
  # Mijn titel

  Dit is documentatie voor ...

  # Subsectie
  ```

- ✔

  ```md
  Dit is documentatie voor ...

  ## Subsectie
  ```

### Gebruik `code`-fragmenten voor technische verwijzingen

Wanneer je een alinea schrijft met functienamen, getallen, uitdrukkingen of iets dat geen standaard geschreven taal is, zet ze tussen \`backticks\`. Dit maakt het eenvoudiger om taal voor beschrijvingen te scheiden van verwijzingen naar technische elementen zoals functienamen en stukjes code.

- ❌

  > De fopen-functie retourneert een waarde met een tag van het type File:. Er is geen probleem in die regel, want de geretourneerde waarde wordt opgeslagen in een variabele ook met de tag File: (let ook op dezelfde hoofd-/kleine letters). Echter, in de volgende regel wordt de waarde 4 op de file-handle opgeteld. 4 heeft geen tag [...]

- ✔

  > De `fopen`-functie retourneert een waarde met een tag van het type `File:`. Er is geen probleem in die regel, want de geretourneerde waarde wordt opgeslagen in een variabele ook met de tag `File:` (let ook op dezelfde hoofd-/kleine letters). Echter, in de volgende regel wordt de waarde `4` op de file-handle opgeteld. `4` heeft geen tag

In het bovenstaande voorbeeld is `fopen` een functienaam, geen Nederlands woord. Door het met `code`-markering te omringen, onderscheid je het van andere inhoud.

Als de alinea verwijst naar een blok voorbeeldcode, helpt dit de lezer ook om de tekst met het voorbeeld te associëren.

### Tabellen

Als een tabel koppen heeft, zet die dan bovenaan:

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | Health  | Engine Status                        |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

- ✔

  ```md
  | Health  | Engine Status                        |
  | ------- | ------------------------------------ |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

## Migreren vanaf de SA-MP Wiki

Het meeste van de inhoud is overgezet, maar als je een ontbrekende pagina vindt, hier is een korte gids voor het converteren van inhoud naar Markdown.

### De HTML verkrijgen

1. Klik op deze knop

   (Firefox)

   ![image](https://assets.open.mp/assets/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](https://assets.open.mp/assets/images/contributing/f62bb8112543.png)

2. Beweeg over de linkerbovenkant van de hoofd-wikipagina, in de linkermarge of hoek, totdat je `#content` ziet

   ![image](https://assets.open.mp/assets/images/contributing/65761ffbc429.png)

   Of zoek naar `<div id=content>`

   ![image](https://assets.open.mp/assets/images/contributing/77befe2749fd.png)

3. Kopieer de inner HTML van dat element

   ![image](https://assets.open.mp/assets/images/contributing/8c7c75cfabad.png)

   Nu heb je _alleen_ de HTML-code voor de daadwerkelijke _inhoud_ van de pagina, hetgeen waar we om geven, en kun je deze converteren naar Markdown.

### HTML converteren naar Markdown

Voor het converteren van basis-HTML (zonder tabellen) naar Markdown gebruik je:

https://mixmark-io.github.io/turndown/

![image](https://assets.open.mp/assets/images/contributing/77f4ea555bbb.png)

^^ Merk op dat het nu de tabel compleet heeft verpest...

### HTML-tabellen naar Markdown-tabellen

Omdat de bovenstaande tool geen tabellen ondersteunt, gebruik deze tool:

https://jmalarcon.github.io/markdowntables/

En plak alleen het `<table>`-element hierin:

![image](https://assets.open.mp/assets/images/contributing/57f171ae0da7.png)

### Opschonen

De conversie zal waarschijnlijk niet perfect zijn. Je moet dus wat handmatig opruimwerk doen. De hierboven genoemde formatterings-extensies helpen daarbij, maar mogelijk moet je toch wat tijd besteden aan handmatig bijwerken.

Heb je geen tijd? Geen zorgen! Dien een onvolledige conceptversie in en iemand anders kan het oppakken waar jij bent gestopt!

## Licentieovereenkomst

Alle open.mp-projecten hebben een [Contributor License Agreement](https://cla-assistant.io/openmultiplayer/homepage). Dit betekent in feite dat je ermee akkoord gaat dat wij jouw werk gebruiken en onder een open-sourcelicentie plaatsen. Wanneer je voor de eerste keer een Pull Request opent, zal de CLA-Assistant-bot een link plaatsen waar je de overeenkomst kunt ondertekenen.

