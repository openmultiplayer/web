import Admonition from "../../../Admonition";

export default function StaleTranslationWarning({
  englishDocLink,
}: {
  englishDocLink: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        <strong>A tradução pode estar desatualizada</strong>
      </p>
      <p>
        A versão em inglês deste documento foi atualizada recentemente. Esta
        tradução pode não refletir essas alterações ainda.
      </p>
      <p>
        Ajude-nos a manter nossas traduções atualizadas! Se você é fluente
        neste idioma, considere revisar a{" "}
        <a href={englishDocLink}>versão em inglês</a> e atualizar esta
        tradução.
      </p>
    </Admonition>
  );
}
