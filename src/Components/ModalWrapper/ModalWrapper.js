import ModalContainer from "@/Containers/ModalContainer/ModalContainer";
import EditModal from "../EditModal/EditModal";
import { useSelector } from "react-redux";

const ModalWrapper = () => {
  const activeModal = useSelector((state) => state.ui.activeModal);
  if (activeModal == null) {
    return null;
  }
  return (
    <ModalContainer>{activeModal == "edit" && <EditModal />}</ModalContainer>
  );
};
export default ModalWrapper;
