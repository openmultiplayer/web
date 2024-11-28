---
title: Допринеси
description: Како допринети SA-MP Wiki и open.mp документацији.
---

Овај извор документације је отворен за свакога ко жели да допринесе променама! Све што вам је потребно је [GitHub](https://github.com) налог и мало слободног времена. Чак не морате ни да знате Git, све можете да урадите преко веб интерфејса!

Ако желите да помогнете у одржавању одређеног језика, отворите PR над [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) фајлом и додајте ред за директоријум вашег језика са вашим корисничким именом.

## Измена садржаја

На свакој страници постоји дугме које вас води до GitHub странице за уређивање:

![Дугме за уређивање ове странице присутно на свакој страници викија](images/contributing/edit-this-page.png)

На пример, кликом на ово на [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) води вас до [ове](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md) странице на којој можете да направите измене у фајлу (под условом да сте пријављени на GitHub).

Извршите своје измене и поднесите "Pull Request", што значи да ће администратори викија и остали чланови заједнице моћи да прегледају вашу промену, расправљају о томе да ли су потребне додатне промене и затим споје вашу измену.

## Додавање новог садржаја

Додавање новог садржаја је мало захтевно. То можете урадити на 2 начина:

### Гитхуб интерфејс

Када прегледате директоријум на GitHub-у, у горњем десном углу листе фајлова налази се дугме „Add file“ (Додај фајл).

![Додај дугме](images/contributing/add-new-file.png)

Можете или да отпремите већ написан Markdown фајл или да га директно напишете у GitHub текстуалном уређивачу.

Фајл мора имати екстензију `.md` и мора да садржи Markdown. За више информација о Markdown-у погледајте овај [водич](https://guides.github.com/features/mastering-markdown/).

Once that's done, hit "Propose new file" and a Pull Request will be opened for review.

### Гит

Ако желите да користите Git, све што треба да урадите је да клонирате Wiki репозиторијум помоћу:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Отворите га у свом омиљеном уређивачу. Препоручујем Visual Studio Code, јер пружа одличне алате за уређивање и форматирање Markdown фајлова. Као што можете видети, пишем ово у Visual Studio Code-у!

![Visual Studio Code markdown preview](images/contributing/vscode.png)

Препоручујем два додатка како бисте побољшали своје искуство:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)од David Anson-а - овај додатак осигурава да је ваш Markdown исправно форматиран. Спречава одређене синтаксичке и семантичке грешке. Нису сва упозорења важна, али нека могу побољшати читљивост. Користите најбољу процену, а ако нисте сигурни, консултујте рецензента!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) од Prettier.js тима - ово је форматер који аутоматски форматира ваш Markdown тако да сви фајлови користе доследан стил. Wiki репозиторијум има одређена подешавања у свом `package.json`, која би додатак требало аутоматски да примени. Обавезно омогућите опцију „Format On Save“ (Форматирање при чувању) у подешавањима уређивача, како би ваши Markdown фајлови били аутоматски форматирани сваки пут када их сачувате!

## Белешке, савети и конвенције

### Интерни линкови

Не користите апсолутне URL-ове за линкове унутар сајта. Користите релативне путеве.

- ❌

  ```md
  Користи се са [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Користи се са [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` значи „иди један директоријум горе“, па ако је фајл који уређујете унутар директоријума `functions`, а линкујете ка `callbacks`, користите `../` да се вратите на `scripting/`, затим `callbacks/` да уђете у директоријум callbacks, а затим име фајла (без `.md`) за callback који желите да линкујете.

### Слике

Слике се смештају у поддиректоријум унутар `/static/images`. Када линкујете слику помоћу `![]()`, користите `/images/` као основни пут (без `static`, јер је то само за репозиторијум).

Ако нисте сигурни, погледајте неку другу страницу која користи слике и копирајте како је то тамо урађено.

### Metadata

The first thing in _any_ document here should be metadata:

```mdx
---
title: My Documentation
description: This is a page about stuff and things and burgers, yay!
---
```

Every page should include a title and a description.

For a full list of what can go between the `---`, check out [the Docusaurus documentation](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Headings

Don't create a level 1 heading (`<h1>`) with `#` as this is generated automatically. Your first heading should _always_ be `##`

- ❌

  ```md
  # My Title

  This is documentation for ...

  # Sub-Section
  ```

- ✔

  ```md
  This is documentation for ...

  ## Sub-Section
  ```

### Use `Code` Snippets For Technical References

When writing a paragraph that contains function names, numbers, expressions or anything that's not standard written language, surround them with \`backticks\` like that. This makes it easier to separate language for describing things from references to technical elements such as function names and pieces of code.

- ❌

  > The fopen function will return a value with a tag of type File:, there is no problem on that line as the return value is being stored to a variable also with a tag of File: (note the cases are the same too). However on the next line the value 4 is added to the file handle. 4 has no tag [...]

- ✔

  > The `fopen` function will return a value with a tag of type `File:`, there is no problem on that line as the return value is being stored to a variable also with a tag of `File:` (note the cases are the same too). However on the next line the value `4` is added to the file handle. `4` has no tag

In the above example, `fopen` is a function name, not an English word, so surrounding it with `code` snippet markers helps distinguish it from other content.

Also, if the paragraph is referring to a block of example code, this helps the reader associate the words with the example.

### Tables

If a table has headings, they go in the top part:

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

## Migrating from SA-MP Wiki

Most of the content has been moved, but if you find a page that's missing, here's a short guide for converting content to Markdown.

### Getting the HTML

1. Click this button

   (Firefox)

   ![image](images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](images/contributing/f62bb8112543.png)

2. Hover the top left of the main wiki page, in the left margin or the corner until you see `#content`

   ![image](images/contributing/65761ffbc429.png)

   Or search for `<div id=content>`

   ![image](images/contributing/77befe2749fd.png)

3. Copy the inner HTML of that element

   ![image](images/contributing/8c7c75cfabad.png)

   Now you have _only_ the HTML code for the actual _content_ of the page, the stuff we care about, and you can convert it to Markdown.

### Converting HTML to Markdown

For converting basic HTML (no tables) to Markdown use:

https://mixmark-io.github.io/turndown/

![image](images/contributing/77f4ea555bbb.png)

^^ Notice now it screwed up the table completely...

### HTML Tables to Markdown Tables

Because the above tool does not support tables, use this tool:

https://jmalarcon.github.io/markdowntables/

And copy only the `<table>` element in:

![image](images/contributing/57f171ae0da7.png)

### Cleaning Up

The conversion likely won't be perfect. So you'll have to do a bit of manual cleanup. The formatting extensions listed above should help with that but you may still need to just spend some time doing manual work.

If you don't have time, don't worry! Submit an unfinished draft and someone else can pick up where you left off!

## License Agreement

All open.mp projects have a [Contributor License Agreement](https://cla-assistant.io/openmultiplayer/homepage). This basically just means you agree to let us use your work, and put it under an open-source license. When you open a Pull Request for the first time, the CLA-Assistant bot will post a link where you can sign the agreement.
