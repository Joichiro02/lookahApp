import React from "react";
import Modal from "react-native-modal";

export default function ModalCont({ open, setOpen, children }) {
  return (
    <Modal
      isVisible={open}
      onBackdropPress={() => setOpen(false)}
      className="m-0 justify-end"
    >
      {children}
    </Modal>
  );
}
