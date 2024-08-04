import { useDispatch } from "react-redux";
import styles from "./ModalContainer.module.css";
import { RiCloseCircleFill } from "react-icons/ri";
import { uiActions } from "@/redux/ui-slice";

const ModalContainer = ({ children }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiActions.setModal(null));
  };
  return (
    <div onClick={closeModal} className={styles.modalContainer}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modalContent}
      >
        <RiCloseCircleFill
          onClick={closeModal}
          className={styles.closeButton}
        />
        {children}
      </div>
    </div>
  );
};
export default ModalContainer;
