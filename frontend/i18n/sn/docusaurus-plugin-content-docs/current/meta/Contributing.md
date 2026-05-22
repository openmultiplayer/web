---
title: Contributing
sidebar_label: Contributing
description: open.mp ain sa-mp je documentation main kien madad kaje.
---

Hi documentation main ker b madad kre saghe tho. Tawhan khe bs hik [GitHub](https://github.com) account ain kujh time tho khape. Tawhan khe Git janran ji b zaroorat kanhe. Tawhan sbh kujh web tan kare sagho tha!

Jekadhen tawhan kehn hikri boli khe maintain karanr tha chahyo tha t PR karyo [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) file te ain hik line thhahyo pehnji boli ji directory ain username san gad.

## Content Edit Karanr

Hr page je  hethan hik buttonr ahe jeko tawhan khe unhe page je GitHub dahn wathhi weendo.

![Edit this page link present on each wiki page](https://assets.open.mp/assets/images/contributing/edit-this-page.png)

Misaal tor [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) khe click karanr san tawhan [hin page](https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetVehicleAngularVelocity.md) dahn weenda jithe tawhan wt hik text editor hoondo pehnji changes karanr laye (je tawhan GitHub mn log in thiyal ahyo).

Pehnjun tabdeelyun kare hik "Pull Request" thhahyo. Inhe jo matlab ahe t wiki maintainer ain bya community ja member tawhan ji tabdeelin jo jayizo wathhanda, faislo kanda t chha inhe khe wadheek tabdeelin ji zaroorat ahe ya na ain poe merge kanda.

## Nayun Content Add karanr

Naun mawaad add karanr thoro wadheek pecheeda ahe. Tawhan bin tareekn san kare sagho tha:

### GitHub jo Interface

GitHub mn ka directory disande, Hik Add file button ahe mathen saji kund mn:

![Add file button](https://assets.open.mp/assets/images/contributing/add-new-file.png)

Tawhan ya t ka Markdown file upload karyo jeka tawhan agen ee likhi huje ya direct GitHub text editor mn likho.

File wt _zaroor_ `.md` extension ain Markdown huje. Markdown laye wadheek maloomat laye diso [hi guide](https://guides.github.com/features/mastering-markdown/).

Jadhen uho thi wanje, dabayo "Propose new file" ain a Pull Request khuli weendi review laye.

### Git

Je tawhan khe Git istemaal karnri ahe t sirf clone karyo hin Wiki repository khe:

```sh
git clone https://github.com/openmultiplayer/web.git
```

Pehnje favourite editor mn kholyo. Aun Visual Studio Code recommend tho karyan chho jo inhen men suthi tooling ahe editing ain formatting laye markdown files ji. Jien ta tawhan disi sagho tha aun b istemal pyo karan Visual Studio Code!

![Visual Studio Code markdown preview](https://assets.open.mp/assets/images/contributing/vscode.png)

Aun ba extension recommend tho karyan pehnjo experience solo karanr laye:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) David Anson khan - hi hik extension ahe jeko yaqeen kando t tawhon jo Markdown sahi namone san formatted ahe. Kujh syntactic ain semantic galtin khe roke tho. Sabh warnings ehm nahin, pr kujh readability khe improve kandyun. Pehnji judgement khe istemaal karyo ain je kehn shakk men ahyo t kehn reviewer khan puchho!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Prettier.js Team khan - he hik formatter ahe jeko automatically format kando tawhan jun Markdown files t jein hu sabh hik consistent style istemaal karan. Wiki repository men `package.json` men kujh settingun ahin jeko hi extension automatically istemaal kando. "Format On Save" khe enable karyo pehnje editor ji settingun men t jien tawhan jun Markdown filun automatically save thi wanjan hr dafaa!

## Notes, Tips ain Tariiqekaar

### Internal Links

Absolute URLs inter-site links laye istemaal na karyo. relative paths istemaal karyo.

- ❌

  ```md
  Istemaal thindo [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer) san
  ```

- ✔

  ```md
  Istemaal thindo [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer) san
  ```

`../` matlab "hik directory mathe wanjo" t je ka file tawhan edit pya karo `functions` directory men ahe ain tawhan link tha karyo `callbacks` tawhan istemal kanda `../` mathe `scripting/` poe `callbacks/` callbacks directory men enter thiyanr laye, poe filename (bighair `.md`) unhe callback jo jeko tawhan link karanr tha chahyo.

### Metadata

Pehrin shaye _kehn b_ document men hujanr khape Metadata:

```mdx
---
title: Muhnjo Documentation
sidebar_label: Muhnjo Documentation
description: Hi page ahe kujh shayun ain burgern je baare men!
---
```

Hr page khe title ain description zaroor huje.

Poori list ta chha chha `---`, men achi saghe tho, diso [Docusaurus ji documentation](https://docusaurus.io/docs/markdown-features#markdown-headers).

### Headings

Level 1 heading (`<h1>`) `#` san na thhahyo, hi automatic ahe. Tawhan ji pehrin heading _hamesha_ `##` huje

- ❌

  ```md
  # Muhnjo Title

  Hi documentation ahe ...

  # Sub-Section
  ```

- ✔

  ```md
  Hi documentation ahe ...

  ## Sub-Section
  ```

### Istemaal karyo `Code` Snippets Technical References laye

Jadhen tawhan paragraph likho tha jehn men  function names, numbers, expressions ya ka b shaye jeka nahe standard written language, unhe je chaudhaari \`backticks\` hanro hien. Iho asaan kare tho shayun samjhainr ain technical elements jien t function names ain pieces of code khe judaa karanr men.

- ❌

  > fopen function hamesha ka value return kando jehn jo tag type File: hundo, Inhen line main ko maslo nahe chho jo value b return kaje thi tag File: men (note case b saagyun ahe). Pr agin line men 4 jo ang add tho kaje file handle mn. 4 khe nahe ko tag [...]

- ✔

  > `fopen` function hamesha ka value return kando jehn jo tag type `File:` hundo, Inhen line main ko maslo nahe chho jo value b return kaje thi tag `File:` men (note case b saagyun ahe). Pr agin line men `4` jo ang add tho kaje file handle mn. `4` khe nahe ko tag

Mathen misaal men, `fopen` function name ahe, na e ko Sindhi jo akhr, poe unhe te `code` snippet hanrr san madad kandi inhe khe be content khan juda karanr men.

Ain punr, je ko paragraph kehn misaali code khe budhaye tho, hi madad kando parhanr ware khe akhran khe misaal san jornr men.

### Tables

Je kehn table men headings ahin, Uho mathen hisse mn weendyu:

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

## License Agreement

Sabhni open.mp projects wt ahe [Contributor License Agreement](https://cla-assistant.io/openmultiplayer/homepage). Hin jo bunyaadi maqsad iho ahe t tawhan asan khe ijazat dyo tha pehnje kam khe istemaal karanr ji, ain hik open-source license men aanrnr. Jadhen tawhan pehren chakar hik Pull Request kholeenda, t CLA-Assistant bot hik link post kando jehn san tawhan uho agreement sign kare sagho tha.
