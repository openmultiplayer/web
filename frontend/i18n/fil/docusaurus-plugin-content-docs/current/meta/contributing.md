---
title: Contributing
sidebar_label: Contributing
description: How to contribute to the SA-MP Wiki and open.mp documentation for PH.
---

Kung gusto mong makatulong sa pag gawa ng documents tungkol sa scripting ay kelangan marunong ka magtagalog syempre kelangan mo dito ng konting kaalamaan tungkol sa git kasi kelangan natin ng magandang documentation para dito kasi alam mo naman ang mga pilipino. Eto ang [Github](https://github.com/openmultiplayer/web) ng openmultiplayer kung gusto mo magfork galing sakanila (Hindi updated to mag pupush ako ng mga bagong gawa don sa aking forked version ng github nila) kasi di naman sila aktibong nag aaccept ng pull request naming mga contributors kaya kung gusto mo makatulong dito eto ang [Github](https://github.com/CnRXoMoX/web) na galing saakin **REKOMENDADO KO DITO KAYO TUMULONG PARA UPDATED LAHAT NG FILES PARA SA PH DIRECTORY**

## Maglalagay ng mga bagong Content

Meron tayong dalawang paraan para mag add ng bagong Content

### GitHub Interface

Pag ikaw ay nagbrobrowse ng directory sa Github, meron kang makikitang Add file button sa kaliwang bahagi doon sa taas ng file list.

![Add file button](https://assets.open.mp/assets/images/contributing/add-new-file.png)

Pwede kang mag upload ng Markdown file `.md` na sinulat mo or pwede kang dumirecta sa GitHub text editor.

Yung file ay merong dapat `.md` extension at naglalaman ng Markdown. Addition information para sa  Markdown, tignan mo itong [guide](https://guides.github.com/features/mastering-markdown/) na to

Pag tapos na pindutin lang ang "Propose new file" at gumawa ng Pull Request and titignan ko ito para ma merge natin ito sa forked version ng openmp documentation at pag ready na ito pwede na akong mag pull request para makita mo na ito sa website ng Openmp documentation

### Git

Kung gusto mo gumamit ng Git, ang gagawin mo lang ay icloclone ang forked version ng openmp documentation ko
`git clone https://github.com/CnRXoMoX/web.git`

Buksan ito sa gusto mong editor, Nirerekomenda ko gumamit ng [Visual Studio Code](https://code.visualstudio.com/) kasi pwede mo dito makita ang output ng ineedit mong .md file ginagamit ko din ito sa pag gawa ng mga documentation (Me XomoX)

![vscode](https://assets.open.mp/assets/images/contributing/vscode.png)

Eto ang mga nirerekomenda kong extensions para dito

* [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) by David Anson - Eto ay makakatulong sayo para malaman mo kung tama ang pagkakaformat ng Markdown mo. Nag preprevent ito ng syntactic at sementic na pagkakamali. Hindi lahat ng warnings ay importante, pero yung iba nakakatulong para mabasa natin ng maayos and mga ginagawa nating markdown files. Ask mo lang ako sa discord kung meron kang tanong XomoX#8227

* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by Prettier.js Team - eto ay formatter na automatic na mafoformat ang Markdown files mo para magamit nila ang mga consistent style. Merong settings ang Wiki repository sa `package.json` na ang extension na to ay automatic na magagamit. Siguraduhing naka enable ang "Format On Save" sa editor settings mo para yung mga Markdown files mo ay automatic na mafoformat sa tuwing isasave mo ito.

## Notes, Tips and Conventions

### Internal Links

Wag gumamit ng absolute URLs para sa inter-site links. Gumamit ng relative paths

- ❌

 ```md
 Pwedeng gamitin dito ang [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
 ```

- ✔

 ```md
 Pwedeng gamitin dito ang [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
 ```

Meaning ng `../` ay "go up one directory" kung yung file na iniedit mo ay nasa loob ng `functions` directory at gusto mong pumunta sa `callbacks` gumamit ng `../` para pumunta sa `scripting/` at `callbacks/` para mapunta ka sa `callbacks` directory, pagtapos yung filename (Wala ang `.md`) ng nais mong pumunta.

### Images

Lahat ng images ay dapat mapunta sa loob ng `/static/images`. At kung gusto mong mapakita ito sa isang .md file `![]()` gumamit lang ng `/images/` para sa base file (Di na kelangan ng `static` para sa repository lang yon)

Kung gusto mo masigurado, mag basa ka ng ibang page na ginagamit ang image na to at copyahin kung paano ginawa

### Metadata

Ang pinaka una sa *lahat* ng document dito ay dapat merong metadata:

```mdx
---
title: My Documentation
sidebar_label: My Documentation
description: Ito ay para saaking documentation mula sa samp at open.mp
---
```

Lahat ng page ay dapat merong title at description.

Para sa lahat ng pwede nating ilagay sa gitna ng `---`, tignang etong [Docusaurus documentation](https://v2.docusaurus.io/docs/markdown-features/#markdown-headers)

## Headings

Wag ka gumawa ng level 1 heading (`<h1>`) na merong `#` eto ay automatic na naggegenerate. yung first heading mo dapat ay palaging `##`

- ❌

 ```md
 # My Title
 Ang documentation na ito ay para sa ...

 # Sub-Section
 ```

- ✔

 ```md
 Ang documentation na ito ay para sa ...

 ## Sub-Section
 ```

## Gumamit ng `Code` snippets para sa Technical References

Pag nagsusulat ng paragraph na naglalaman ng function names, numbers, expressions or kahit ano na hindi standard written language, paligiran sila ng \`backticks\` ganto. Nagpapadalit eto sa pag hiwalay ng language para idescribe ang mga bagay galing sa references to technical elements katulad ng function names at pirapirasong code.

- ❌

 > Yung fopen function ay magbabalik ng values na may tag of type File:, wala namang problema sa linyang to, dapat ang ibabalik na value neto ay naka store sa variable na merong tag na File: (note ang cases are parepareho). Gayunpaman sa kasunod na linya ang value ay 4 ay madadagdag doon sa file handle. ang 4 ay walang tag [...]

- ✔

 > Yung `fopen` function ay magbabalik ng values na may tag of type `File:`, wala namang problema sa linyang to, dapat ang ibabalik na value neto ay naka store sa variable na merong tag na `File:` (note ang cases are parepareho). Gayunpaman sa kasunod na linya ang value ay `4` ay madadagdag doon sa file handle. ang `4` ay walang tag [...]

Ang example sa taas, `fopen` ay function name, hindi English word, so palibutan ito ng `code` snippet marker para makatulog makilala eto sa ibang content

At, kung ang paragraph ay nagrerefer sa block of example code, eto ay makakatulong sa nagbabasa na maiugnay ang mga salita galing don sa example.

## Tables

Kung ang table ay walang headings, it ay mapupunta sa taas na parte.

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | Health  | Engine Status                        |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (Sasabog mamaya maya)        |
  ```

- ✔

  ```md
  | Health  | Engine Status                        |
  | ------- | ------------------------------------ |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (Sasabog mamaya maya)        |
  ```
## Migrating from SA-MP Wiki

Halos lahat ng mga nilalaman ay nalipat na, pero kung may nakita kang page sa wiki na walang laman, heto ang gabay para sa pag convert ng mga nilalaman sa Markdown.

### Getting the HTML

1. Pindutin ang button na ito.

   (Firefox)

   ![image](https://assets.open.mp/assets/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](https://assets.open.mp/assets/images/contributing/f62bb8112543.png)

2. I tutok sa kaliwang bahagi ng main wiki page, sa kaliwang margin o sa sulok hanggang makita mo ang `#content`

   ![image](https://assets.open.mp/assets/images/contributing/65761ffbc429.png)

   Or search for `<div id=content>`

   ![image](https://assets.open.mp/assets/images/contributing/77befe2749fd.png)

3. I-Copy ang inner HTML ng element na iyon.

   ![image](https://assets.open.mp/assets/images/contributing/8c7c75cfabad.png)

   Ngayon ay nasayo na ang HTML code para sa aktwal na _nilalaman_ ng page, mga bagay na importante, at maaari mo itong i-convert sa Markdown.

### Converting HTML to Markdown

Para sa pag convert ng basic HTML (no tables) sa Markdown gamitin ang:

https://mixmark-io.github.io/turndown/

![image](https://assets.open.mp/assets/images/contributing/77f4ea555bbb.png)

^^ Tignan, nasira ang table dito...

### HTML Tables to Markdown Tables

Dahil ang ginamit na paraan sa taas ay hindi nag susupport ng tables, sa halip, gamitin ang tool na ito:

https://jmalarcon.github.io/markdowntables/

At i-copy lang ang `<table>` na element sa:

![image](https://assets.open.mp/assets/images/contributing/57f171ae0da7.png)

### Cleaning Up

Ang pag convert ay hindi perpekto. Kaya kailangan mong mag-adjust para luminis ang tingin nito. Ang formatting extensions na naka lista sa taas ay maaaring makatulong sa iyo upang mabawasan ang trabaho.

Kung wala kang oras, wag magalala! I submit mo lang ang hindi mo pa tapos na trabaho bilang draft upang ituloy ng iba!

## License Agreement

All open.mp projects have a [Contributor License Agreement](https://cla-assistant.io/openmultiplayer/homepage). This basically just means you agree to let us use your work, and put it under an open-source license. When you open a Pull Request for the first time, the CLA-Assistant bot will post a link where you can sign the agreement.


Dito na magtatapos ang Contributing page
