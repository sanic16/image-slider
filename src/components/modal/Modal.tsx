'use client'
import './modal.css'

const Modal = (
    {
        isOpen,
        onClose,
        children,
        className
    }:{
        isOpen: boolean,
        onClose: () => void,
        children: React.ReactNode,
        className: string
    }
) => {
  return (
    <>
        { isOpen && (
            <>
                <div className="backdrop" onClick={onClose}>
                </div>
                <div className={`modal ${className}`}>
                    { children }
                </div>
            </>
        )}
    </>
  )
}

export default Modal