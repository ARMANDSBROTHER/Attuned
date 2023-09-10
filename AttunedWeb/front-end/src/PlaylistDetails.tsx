import { FunctionComponent } from "react";
import { PlaylistDto } from "./dtos/Dtos.ts";
import { Dialog } from "./Dialog.tsx";

interface PlaylistDetailsProps {
  playlist: PlaylistDto;
  show: boolean;
  onClose: () => void;
}

export const PlaylistDetails: FunctionComponent<PlaylistDetailsProps> = ({
  playlist,
  show,
  onClose,
}) => {
  return (
    <Dialog
      className="w-1/2 h-1/2 bg-background text-text-color"
      show={show}
      onClose={onClose}
    >
      <div className="flex justify-between py-3 px-4 text-xl">
        <h1 className="">{playlist.Name}</h1>
        <button onClick={onClose}>✕</button>
      </div>
    </Dialog>
  );
};
