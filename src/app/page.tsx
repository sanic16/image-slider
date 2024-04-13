import ImageSlider from "@/components/image-slider/ImageSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dispositivos Electrónicos',
  description: 'Venta de dispositivos electrónicos a precios accesibles',
  keywords: 'electronica, dispositivos, esp8266, arduino, raspberry pi',
  openGraph: {
    title: 'Dispositivos Electrónicos',
    description: 'Venta de dispositivos electrónicos a precios accesibles',
    type: 'website',
    url: 'https://electronica.com',
    images: [
      {
        url: 'https://julius-assets-gt.s3.amazonaws.com/pi_zero.jpg',
        width: 800,
        height: 533,
        alt: 'Raspberry Pi Zero',
      }
    ],
    locale: 'es_GT',
    countryName: 'Guatemala',

  }, 
}

export default function Home() {
  return (
    <section className="container">
      <ImageSlider />
    </section>
  )
}
