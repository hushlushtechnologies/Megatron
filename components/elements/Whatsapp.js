"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971565049928?text=Hey%20I%20was%20viewing%20the%20Optimus%20Megatron%20cars%20website.%20I%20have%20some%20doubts%20and%20would%20like%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={34} color="#fff" />
    </a>
  );
}
