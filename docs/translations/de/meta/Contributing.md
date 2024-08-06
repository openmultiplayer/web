---
title: Contributing
description: Wie du bei der Dokumentation des SA-MP Wiki und open.mp mithelfen kannst.
---

Jeder kann bei dieser Dokumentation mithelfen! Alles was du benötigst ist ein [GitHub](https://github.com) account und etwas Freizeit. Du musst dich nicht einmal mit Git auskennen. Alles lässt sich im Webinterface bearbeiten!

Wenn du bei der Übersetzung in eine bestimmte Sprache helfen möchtest, öffne ein Pull-Request an die [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) Datei schreibe eine Spalte mit deiner Sprache und deinem Username.

## Vorhandenen Content bearbeiten:

Jede Seite hat einen Button, über den du die Seite bearbeitest kannst:

![Bearbeite diesen Link, der auf jeder Wiki-Seite zu finden ist](images/contributing/edit-this-page.png)

Wenn du beispielsweise auf [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) klickst wirst du zum Beispiel auf [diese Seite](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md) weiterleitet, auf der du Änderungen vornehmen kannst, sofern du bei GitHub eingeloggt bist.

Nehme deine Änderungen vor und erstelle ein "Pull Request", damit andere Wiki-Helfer sich diese ansehen können, über nötige Ergänzungen entscheiden und deine Änderungen letztendlich übernehmen können.

## Neuen Content hinzufügen

Neuen Content hinzuzufügen ist etwas schwieriger. Hierzu gibt es zwei Möglichkeiten:

### GitHub Interface

Beim Durchsuchen eines Verzeichnisses auf GitHub gibt es in der oberen rechten Ecke der Dateiliste eine Schaltfläche "Add File":

![Add file button](images/contributing/add-new-file.png)

Du kannst so entweder eine bereits geschriebene Markdown-Datei(.md) hochladen oder direkt in den GitHub-Texteditor schreiben.

Die Datei _muss_ eine `.md` Endung haben und Markdown enthalten. Für weitere Informationen zu Markdown, siehe [diese Seite](https://guides.github.com/features/mastering-markdown/).

Wenn das getan ist, klicke "Propose new file" um ein Pull-Request zur Überprüfung zu erstellen.

### Git

Wenn du Git nutzen möchtest, klone das Wiki Verzeichnis mit:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Öffne es mit einem bevorzugten Editor. Wir empfehlen Visual Studio Code(VSC) wegen den Tools zum editieren und formatieren von Markdown. Wie du sehen kannst wurde das hier auch in VSC geschrieben!

![Visual Studio Code markdown preview](images/contributing/vscode.png)

Die folgenden Extensions können die Arbeit in VSC sehr erleichtern:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) by David Anson - diese Extension prüft, ob das geschriebene Markdown richtig formatiert ist. Es verhindert einige syntaktische und semantische Fehler. Nicht alle Warnungen sind wichtig, aber einige können die Lesbarkeit verbessern. Wenn du dir unsicher bist oder Fragen hast stelle diese im Zweifelsfall einfach einem Rezensenten!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by the Prettier.js Team - dies ist ein Formatierer, der die Markdown-Dateien automatisch formatiert, sodass sie alle einen einheitlichen Stil verwenden. Das Wiki-Repository hat einige Einstellungen in seiner `package.json` die die Erweiterung automatisch anwenden sollte. Stellen sicher, dass  „Format On Save“ in den Editor-Einstellungen aktiviert ist, damit die Markdown-Dateien bei jedem Speichern automatisch formatiert werden!

## Anmerkungen, Tipps und Konventionen

### Interne Links

Nutze keine absoluten URLs für inter-site links. Nutze relative Pfade.

- ❌

  ```md
  To be used with [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  To be used with [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` heißt "ein verzeichnis hoch" also wenn du eine Datei innerhalb von `functions` bearbeitest und du es zu `callbacks` verlinksen willst, nutze `../` um ins `scripting/` Verzeichnis zu gelangen, dann `callbacks/`, um das "callbacks" Verzeichnis zu öffnen und dann den Dateinamen (ohne das `.md`) vom Callback das du verlinken möchtest.

### Bilder

Bilder müssen in folgendes Unterverzeichnis hinein `/static/images`. Wenn du ein Bild in ein `![]()` verlinkst, nutze `/images/` als Basispfad (also ohne `static`, dies ist nur für die Directory).

Falls du noch immer unsicher bist, schaue dir einfach eine andere Seite an, die Bilder nutzt und kopiere das Vorgehen von dort.

### Metadata

Zu Anfang _jedes_ Dokuments sollten die Metadaten stehen:

```mdx
---
title: Meine Dokumentation
description: Hier steht die Beschreibung meiner Dokumentation!
---
```

Jede Seite sollte einen Titel und eine Beschreibung enthalten.

Für eine vollständige Liste dessen, was zwischen `---` geschrieben werden kann, siehe [the Docusaurus documentation](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Überschriften

Erstelle keine Level 1 (`<h1>`) Überschriften mit `#`, da dies automatisch geschieht. Die erste Überschrift sollte _immer_ `##` sein.

- ❌

  ```md
  # Meine Überschrift

  Das ist die Dokumentation für ...

  # Unter-Bereich
  ```

- ✔

  ```md
   Das ist die Dokumentation für ...

  ## Unter-Bereich
  ```

### Nutze `Code` Snippets für technische Referenzen

Beim schreiben eines Absatzes, der Funktionsnamen, Zahlen, Ausdrücke oder irgendetwas anderes enthält, das nicht der Standardschreibsprache entspricht, sollten diese mit \`Backticks\` umgeben werden. So lääst sich die Sprache leichter von technischen Referenzen(beispielsweise Code-Snippets) oder Ähnlichem unterscheiden.
- ❌

  > Die Funktion fopen gibt einen Wert mit einem Tag vom Typ File: zurück, in dieser Zeile gibt es kein Problem, da der Rückgabewert in einer Variablen gespeichert wird, die auch das Tag File: enthält (beachte, dass die Fälle auch gleich sind). In der nächsten Zeile wird jedoch dem Dateihandle der Wert 4 hinzugefügt. 4 hat keinen Tag [...]

- ✔

  > Die `fopen` Funktion gibt einen Wert mit einem Tag vom Typ `File:` zurück, in dieser Zeile gibt es kein Problem, da der Rückgabewert in einer Variablen gespeichert wird, die auch das Tag `File:` (beachte, dass die Fälle auch gleich sind). In der nächsten Zeile wird jedoch dem Dateihandle der Wert `4` hinzugefügt. `4` hat keinen Tag.

Im obrigen Beispiel ist `fopen` ein Funktionsname, kein Wort, also helfen `code snippet marker` dabei diesen vom restlichen Text zu unterscheiden.

Wenn sich der Absatz auf einen Beispielcodeblock bezieht, hilft dies dem Leser, die Wörter mit dem Beispiel zu verknüpfen.

### Tabellen

Wenn eine Tabelle Überschriften enthalten, gehören diese in die obere Spalte:

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

## Migration vom SA-MP Wiki

Ein Großteil vom Content wurde schon migriert, falls du dennoch eine Seite findest die fehlt, ist hier ein kurzer Guide über das Konvertieren von Content in Markdown.

### Den HTML Code bekommen

1. Klicke

   (Firefox)

   ![image](images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](images/contributing/f62bb8112543.png)

2. Bewege den Mauszeiger oben links auf der Wiki-Hauptseite, am linken Rand oder in der Ecke, bis du `#content` siehst.

   ![image](images/contributing/65761ffbc429.png)

   Oder suche nach `<div id=content>`

   ![image](images/contributing/77befe2749fd.png)

3. Kopiere die inner HTML des Elements

   ![image](images/contributing/8c7c75cfabad.png)

   Jetzt hast du _nur_ den HTML Code von dem tatsächlichen _content_ der Seite, also genau das, was wir benötigen, und kannst es zu Markdown konvertieren.

### HTML zu Markdown konvertieren

Um grundlegendes HTML (keine Tabellen) zu Markdown zu konvertieren nutze:

https://mixmark-io.github.io/turndown/

![image](images/contributing/77f4ea555bbb.png)

^^ Siehst du wie die Tabelle jetzt komplett im Eimer ist? ...

### HTML Tabellen zu Markdown Tabellen

Da das obrige Tool keine Tabellen unterstützt, nutze für Tabellen dieses Tool:

https://jmalarcon.github.io/markdowntables/

Und kopiere nur das `<table>` Element hinein:

![image](images/contributing/57f171ae0da7.png)

### Clean Up

Meistens sind die Konvertierungen nicht perfekt, also liegt es an dir den Rest auszubessern. Die oben aufgeführten Formatierungserweiterungen sollten dabei helfen, aber möglicherweise ist noch etwas Handarbeit nötig.

Wenn du dafür keine Zeit hast ist das auch kein Problem! Gebe einfach ein `unfinished draft` ab und jemand anderes kann dort weiterarbeiten, wo du aufgehört hast.

## Lizenzvereinbarung

Alle open.mp Projekte haben ein [Contributor License Agreement](https://cla-assistant.io/openmultiplayer/homepage). Dadurch erlaubst du uns durch deine Arbeit am Projekt zu nutzen und auch als Open-Source bereitzustellen. Bei deinem ersten Pull Request wird der CLA-Assistant bot einen Link schicken, über den du dieser Lizenzvereinbarung zustimmen kannst.
