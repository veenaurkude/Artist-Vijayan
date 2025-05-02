
"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/919823189804"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-3
        right-5
        z-50
        bg-[#25D366]
        rounded-3xl
        p-2
        shadow-lg
        flex
        items-center
        justify-center
        hover:scale-110
        transition-transform
      "
    >
      <FaWhatsapp size={24} color="white" />
    </a>
  )
}
