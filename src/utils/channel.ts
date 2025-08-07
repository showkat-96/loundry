import emailjs from "emailjs-com";

export const sendToWhatsapp = ({ message }: { message: string }) => {
  const phone = "919596100461";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const sendEmail = async (templateParams: Record<string, unknown>) => {
  try {
    await emailjs.send(
      "service_52yx51q",
      "template_okr4f4c",
      templateParams,
      "iKthM-8So1B4aFF-m"
    );
  } catch (error: any) {
    console.error("FAILED...", error);
    throw new Error(error?.message || "Email sent Failed!");
  }
};
