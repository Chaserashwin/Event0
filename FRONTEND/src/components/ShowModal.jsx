import { useEffect } from "react";
import ReactDOM from "react-dom";

const ShowModal = ({ closeModal, children, handleCloseButton }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <button
          className="absolute right-3 top-3 rounded-full fill-current text-lg "
          onClick={closeModal}
        >
          cross
          <div>
            <img src="" alt="" />
          </div>
        </button>
        {children}
        {handleCloseButton}
      </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default ShowModal;
