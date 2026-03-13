import Admonition from "../../../Admonition";

export default function StaleTranslationWarning({
  englishDocLink,
}: {
  englishDocLink: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        <strong>La traducción puede estar desactualizada</strong>
      </p>
      <p>
        La versión en inglés de este documento se actualizó recientemente. Es
        posible que esta traducción aún no refleje esos cambios.
      </p>
      <p>
        ¡Ayuda a mantener nuestras traducciones actualizadas! Si hablas este
        idioma con fluidez, considera revisar la{" "}
        <a href={englishDocLink}>versión en inglés</a> y actualizar esta
        traducción.
      </p>
    </Admonition>
  );
}
