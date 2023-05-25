import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { TbX } from 'react-icons/tb';
import Tilt from 'react-parallax-tilt';

function Main({classes}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section className={`${classes} relative flex flex-col p-4 items-center justify-center rounded-2xl group preserve-3d`}>
      <img src="./img/bg_section_projects.jpg" className="m-4 group-hover:translate-z-[10px] object-cover h-40 w-full rounded-[20px]" />
      <button onClick={handleOpenModal} className="text-4xl group-hover:scale-125">Proyectos</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Mi Modal"
        className="flex items-center justify-center h-screen bg-transparent p-8 overflow-hidden text-white"
      >
        <section className="relative flex justify-center items-center h-[90%] w-full rounded-2xl p-4 backdrop-blur-xl backdrop-brightness-[.4] shadow-lg border-[2px] border-gray-900">
          <h1>Main</h1>
          <TbX onClick={handleCloseModal} className="absolute h-6 w-6 top-5 right-5"/>
        </section>
      </ReactModal>
    </section>
  );
}

export default Main;