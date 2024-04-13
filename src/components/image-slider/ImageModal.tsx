import Modal from "../modal/Modal";
import React from 'react'
import Image from 'next/image'
import './imageModal.css'
import { FaArrowAltCircleLeft, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const ImageModal = (
    {
        isOpen,
        onClose,
        image,
        prev,
        next
    }:{
        isOpen: boolean
        onClose: () => void,
        image: {
            src: string,
            width: number,
            height: number
        },
        prev: () => void,
        next: () => void 
    }
) => {
  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="image__modal"
    >
        <div>
            <Image src={image} alt="" /> 
        </div>
        <button
            className="image__modal-prev"
            onClick={prev}
        >
            <FaArrowLeft />
        </button>
        <button
            className="image__modal-next"
            onClick={next}
        >
            <FaArrowRight />
        </button>
        <button
            className="image__modal-close"
            onClick={onClose}
        >
            <FaTimes />
        </button>
    </Modal>
  )
}

export default ImageModal