import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Resultmodal = forwardRef(function Resultmodal(
  { targettime, remainingtime, onreset },
  ref
) {
  const Userlost = remainingtime <= 0;
  const formaterremaintime = (remainingtime / 1000).toFixed(2);

  const Score = Math.round((1 - remainingtime / (targettime * 1000)) * 100);

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal (
    <dialog ref={dialog} className="result-modal">
      {Userlost && <h2>You Lost</h2>}
      {!Userlost && <h2>Your Score: {Score}</h2>}
      <p>
        The Target time was <strong> {targettime} seconds.</strong>
      </p>
      <p>
        You Stopped the timer with{" "}
        <strong>{formaterremaintime} second left</strong>
      </p>
      <form method="dialog" onSubmit={onreset}>
        <button>Close</button>
      </form>
    </dialog>,
     document.getElementById('modals')
  );
});

export default Resultmodal;

