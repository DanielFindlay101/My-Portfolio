import { XMarkIcon } from "@heroicons/react/24/solid";

interface ModalProps {
  setShowModal: (val: boolean) => void;
}

export default function Modal({ setShowModal }: ModalProps) {
  return (
    <div className="w-48 h-[50px] bg-white absolute top-10 left-3 rounded-md flex items-center justify-around">
      <h1>Hello!👋</h1>
      <XMarkIcon
        onClick={() => setShowModal(false)}
        className="w-5 hover:cursor-pointer"
      />
    </div>
  );
}
