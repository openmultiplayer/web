---
title: Contribuye
description: Cómo contribuir a la Wiki de SA-MP y a la documentación de open.mp.
---

El código fuente de esta documentación está abierto para que cualquiera pueda aportar cambios. Todo lo que necesitas es una cuenta de [GitHub](https://github.com) y algo de tiempo libre. Ni siquiera necesitas saber Git, ¡puedes hacerlo todo desde la interfaz web!

Si quieres ayudar a mantener un idioma específico, abre un PR contra el archivo [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) y añade una línea para el directorio de tu idioma con tu nombre de usuario.

## Edición de contenidos

En cada página, hay un botón que te lleva a la página de GitHub para editar:

![Edit this page link present on each wiki page](images/contributing/edit-this-page.png)

Por ejemplo, haciendo clic en [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) te lleva a [esta pagina](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md) que te presenta un editor de texto para hacer cambios en el archivo (suponiendo que has iniciado sesión en GitHub).

Realice su edición y envíe una "Pull Request", lo que significa que los mantenedores de la Wiki y otros miembros de la comunidad pueden revisar su cambio, discutir si necesita cambios adicionales y luego fusionarlo.

## Añadir nuevos contenidos

Añadir nuevos contenidos es un poco más complicado. Puede hacerlo de dos maneras:

### Interfaz de GitHub

Al navegar por un directorio en GitHub, hay un botón `Add file` en la esquina superior derecha de la lista de archivos:

![Add file button](images/contributing/add-new-file.png)

Puedes subir un archivo Markdown que ya hayas escrito o escribirlo directamente en el editor de texto de GitHub.

El archivo _debe_ tener una extensión `.md` y contener Markdown. Para más información sobre Markdown, consulte [esta guía](https://guides.github.com/features/mastering-markdown/).

Una vez hecho esto, pulsa `Proponer nuevo archivo` y se abrirá una Pull Request para su revisión.

### Git

Si desea utilizar Git, todo lo que necesita hacer es clonar el repositorio Wiki con:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Ábrelo en tu editor favorito. Recomiendo Visual Studio Code, ya que dispone de excelentes herramientas para editar y dar formato a los archivos Markdown. Como puedes ver, ¡estoy escribiendo esto con Visual Studio Code!

![Visual Studio Code markdown preview](images/contributing/vscode.png)

Te recomiendo dos extensiones para mejorar tu experiencia:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) de David Anson - se trata de una extensión que se asegura de que tu Markdown está formateado correctamente. Evita algunos errores sintácticos y semánticos. No todas las advertencias son importantes, pero algunas pueden ayudar a mejorar la legibilidad. Utilice su mejor criterio y, en caso de duda, pregunte a un revisor.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) del equipo Prettier.js - es un formateador que formateará automáticamente tus archivos Markdown para que todos usen un estilo consistente. El repositorio Wiki tiene algunos ajustes en su `package.json` que la extensión debería usar automáticamente. Asegúrate de activar "Format On Save" en la configuración de tu editor para que tus archivos Markdown se formateen automáticamente cada vez que los guardes.

## Notas, consejos y convenciones

### Enlaces internos

No utilice URL absolutas para los enlaces entre sitios. Utilice rutas relativas.

- ❌

  ```md
  Para su uso con [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Para su uso con [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` significa "subir un directorio", así que si el archivo que estás editando está dentro del directorio `functions` y estás enlazando a `callbacks`, usa `../` para subir a `scripting/`, luego `callbacks/` para entrar en el directorio `callbacks`, luego el nombre del archivo (sin `md`) del callback que quieres enlazar.

### Imagenes

Las imágenes van dentro de un subdirectorio dentro de `/static/images`. Entonces cuando enlazas una imagen en un `![]()` sólo tienes que usar `/images/` como ruta base (no necesitas `static` que es sólo para el repositorio).

Si tienes dudas, lee otra página que utilice imágenes y copia cómo se hace allí.

### Metadata

Lo primero en _cualquier_ documento deben ser los metadatos:

```mdx
---
title: Mi Documentacion
description: Esta es una página sobre cosas y hamburguesas, ¡viva!
---
```

Cada página debe incluir un título y una descripción.

Para obtener una lista completa de lo que puede ir entre el `---`, consulte [la documentación de Docusaurus](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Encabezado

No cree un encabezamiento de nivel 1 (`<h1>`) con `#`, ya que se genera automáticamente. El primer título debe ser siempre `##`.

- ❌

  ```md
  # My Titulo

  Esta es la documentación para ...

  # Sub-sección
  ```

- ✔

  ```md
  Esta es la documentación para ...

  ## Sub-sección
  ```

### Use `Code` Snippets For Technical References

Cuando escribas un párrafo que contenga nombres de funciones, números, expresiones o cualquier cosa que no sea lenguaje escrito estándar, rodéalos con \`puntos y comas\`. Así es más fácil separar el lenguaje para describir cosas de las referencias a elementos técnicos como nombres de funciones y trozos de código.


- ❌

  > La función fopen devolverá un valor con una etiqueta de tipo File:, no hay ningún problema en esa línea ya que el valor devuelto está siendo almacenado en una variable también con una etiqueta de File: (nótese que los casos son los mismos también). Sin embargo, en la siguiente línea se añade el valor 4 al manejador de fichero. 4 no tiene etiqueta [...]

- ✔

  > La función `fopen` devolverá un valor con una etiqueta de tipo `File:`, no hay ningún problema en esa línea ya que el valor devuelto está siendo almacenado en una variable también con una etiqueta de `File:` (nótese que los casos son los mismos también). Sin embargo, en la siguiente línea se añade el valor `4` al manejador del fichero. `4` no tiene etiqueta

En el ejemplo anterior, `fopen` es un nombre de función, no una palabra inglesa, por lo que rodearlo de marcadores de fragmentos de código `code` ayuda a distinguirlo del resto del contenido.

Además, si el párrafo hace referencia a un bloque de código de ejemplo, esto ayuda al lector a asociar las palabras con el ejemplo.

### Tablas

Si una tabla tiene títulos, éstos van en la parte superior:

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

## Migración desde SA-MP Wiki

La mayor parte del contenido se ha trasladado, pero si encuentras una página que falta, aquí tienes una breve guía para convertir el contenido a Markdown.

### Obtener el HTML

1. Pulse este botón

   (Firefox)

   ![image](images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](images/contributing/f62bb8112543.png)

2. Pase el ratón por la parte superior izquierda de la página principal de la wiki, en el margen izquierdo o en la esquina hasta que vea `#content`

   ![image](images/contributing/65761ffbc429.png)

   O busque `<div id=content>`

   ![image](images/contributing/77befe2749fd.png)

3. Copia el HTML interno de ese elemento

   ![image](images/contributing/8c7c75cfabad.png)

   Ahora tienes _sólo_ el código HTML para el _contenido_ real de la página, lo que nos importa, y puedes convertirlo a Markdown.

### Convertir HTML a Markdown

Para convertir HTML básico (sin tablas) a Markdown utilice:

https://mixmark-io.github.io/turndown/

![image](images/contributing/77f4ea555bbb.png)

^^ Fíjate que ahora se ha deshecho la tabla por completo...

### Tablas HTML a tablas Markdown

Dado que la herramienta anterior no admite tablas, utilice esta herramienta:

https://jmalarcon.github.io/markdowntables/

Y copia sólo el elemento `<table>`:

![image](images/contributing/57f171ae0da7.png)

### Limpiando

Es probable que la conversión no sea perfecta. Así que tendrás que hacer un poco de limpieza manual. Las extensiones de formato enumeradas anteriormente deberían ayudar con eso, pero aún así puede que tenga que pasar algún tiempo haciendo el trabajo manual.

Si no tienes tiempo, ¡no te preocupes! Envía un borrador inacabado y otra persona podrá retomarlo donde tú lo dejaste.

## Acuerdo de licencia

Todos los proyectos de open.mp tienen un [Acuerdo de Licencia del Colaborador](https://cla-assistant.io/openmultiplayer/homepage). Esto básicamente significa que aceptas que usemos tu trabajo, y que lo pongamos bajo una licencia de código abierto. Cuando abres un Pull Request por primera vez, el bot CLA-Assistant publicará un enlace donde puedes firmar el acuerdo.
