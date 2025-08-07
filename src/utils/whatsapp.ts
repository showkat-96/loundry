const sendToWhatsapp = ({ message }: { message: string }) => {
  const phone = "919596100461";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default sendToWhatsapp;
