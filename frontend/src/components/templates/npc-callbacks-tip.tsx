import Admonition from "../Admonition";
import Translate from "@docusaurus/Translate";

export default function TipNpcCallback() {
  return (
    <Admonition type="tip">
      <p>
        <Translate
          id="npcCallbacksTip.message"
          description="Tip shown on callback docs pages when NPCs can also call the callback"
        >
          This callback can also be called by NPC.
        </Translate>
      </p>
    </Admonition>
  );
}
