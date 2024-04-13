'use client'
import Modal from "../modal/Modal"
import image1 from '@/../public/images/img_1.jpeg'
import image2 from '@/../public/images/img_2.jpeg'
import image3 from '@/../public/images/img_3.jpeg'
import image4 from '@/../public/images/img_4.jpeg'
import image5 from '@/../public/images/img_5.jpeg'
import image6 from '@/../public/images/img_6.jpeg'
import image7 from '@/../public/images/img_7.jpeg'
import Image from "next/image"
import { useState } from "react"

import './imageSlider.css'
import Link from "next/link"
import ImageModal from "./ImageModal"

const images = [
    {
        id: 1,
        image: image1,
        name: 'Raspberri Pi Pico',
        description: 'Están en buen estado, se venden por separado o en conjunto.',
        unit_price: 50,
        quantity: 2,
        all_price: 100,
    },
    {
        id: 2,
        image: image2,
        name: 'ESP8266 NodeMCU V2',
        description: 'Están en buen estado, se venden por separado o en conjunto.',
        unit_price: 50,
        quantity: 2,
        all_price: 80,
    },
    {
        id: 3,
        image: image3,
        name: 'Arduino Uno + ESP8266',
        description: 'Está en buen estado.', 
        unit_price: 80,
        quantity: 1,
        all_price: 80,
    },
    {
        id: 4,
        image: image4,
        name: 'Arduino Nano',
        description: 'Funcionan correctamente pero los pines están oxidados.',
        unit_price: 30,
        quantity: 3,
        all_price: 60,

    },
    {
        id: 5,
        image: image5,
        name: 'Protoboard',
        description: 'Están en buen estado, se venden por separado o en conjunto.',
        unit_price: 20,
        quantity: 3,
        all_price: 60,
    },
    {
        id: 6,
        image: image6,
        name: 'Raspberry Pi Zero W',
        description: 'Están en buen estado, solo incluye la placa, hay que comprarle la tarjeta SD y el cargador es micro USB.',
        unit_price: 150,
        quantity: 1,
        all_price: 150,
    },
    {
        id: 7,
        image: image7,
        name: 'MD-DVB módulo DVB-T+DAB+FM',
        description: 'Están en buen estado.',
        unit_price: 80,
        quantity: 1,
        all_price: 80,
    },
    
]

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1)%images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length)%images.length )
  }

  const showImage = (current: number) => {
    setCurrentImageIndex(current)
    setIsModalOpen(true)
  }

  console.log(currentImageIndex)

  return (
    <div className="sale">
        <div className="sale__images">
            {
                images.map((item, key) => (
                    <div 
                        key={key} 
                        className="sale__item" 
                        onClick={() => showImage(key)}
                    >                        
                       <div className="sale__item-header">
                            <div 
                                className="sale__image-container"                                
                            >
                                <Image src={item.image} alt=""/>
                                </div>   
                                <h3>
                                    {item.name}
                                </h3>   
                                <p>
                                    {item.description}
                                </p>       
                        </div>
                        <div className="sale__item-footer">
                            <p>
                                Precio:  <span>Q {item.unit_price}</span>
                            </p>
                            <p>
                                Cantidad: <span># {item.quantity}</span>
                            </p>
                            <p>
                                Todas: <span>Q {item.all_price}</span>
                            </p>
                        </div>          
                    </div>
                ))
            }
        </div>
        
        <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            image={images[currentImageIndex].image}
            next={nextImage}
            prev={prevImage}
        />
    </div>
  )
}

export default ImageSlider