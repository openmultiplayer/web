import Admonition from "../../../Admonition";

export default function StaleTranslationWarning({
  englishDocLink,
}: {
  englishDocLink: string;
}) {
  return (
    <Admonition type="warning">
      <p>
        <strong>La traduction peut être obsolète</strong>
      </p>
      <p>
        La version anglaise de ce document a été mise à jour récemment.
        Cette traduction peut ne pas encore refléter ces changements.
      </p>
      <p>
        Aidez-nous à garder nos traductions à jour. Si vous maîtrisez cette
        langue, consultez la{" "}
        <a href={englishDocLink}>version anglaise</a> et mettez à jour cette
        traduction.
      </p>
    </Admonition>
  );
}