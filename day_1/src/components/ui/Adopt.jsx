/* eslint-disable react/prop-types */

function Adopt({ counter }) {
  return (
    <dialog
      id="adoptChallengeModal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box flex flex-col text-center justify-center items-center space-y-5">
        <img src="./images/handshake.gif" className="w-24 h-24" alt="" />
        <h1 className="font-black text-6xl">Congrats</h1>
        <p className="font-semibold text-xl">
          Adoption Process is Start For you Pet
        </p>
        <span className="font-black text-7xl">
          <span id="countNumber">{counter}</span>
        </span>
      </div>
    </dialog>
  );
}

export default Adopt;
