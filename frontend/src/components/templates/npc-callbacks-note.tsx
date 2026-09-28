import Admonition from "../Admonition";
import Translate from "@docusaurus/Translate";

export default function NoteNpcCallback() {
  return (
    <Admonition type="note">
      <p>
        <Translate
          id="npcCallbacksNote.message"
          description="Note shown on callback docs pages when NPCs can also call the callback"
        >
          This callback can also be called by NPC.
        </Translate>
      </p>
    </Admonition>
  );
}
