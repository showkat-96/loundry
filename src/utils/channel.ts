import emailjs from "emailjs-com";

export const sendToWhatsapp = ({ message }: { message: string }) => {
  const phone = "919596100461";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const sendEmail = async ({ message }: { message: string }) => {
  try {
    await emailjs.send(
      "service_co5ifwj",
      "template_m7xd09c",
      {
        email: "professionalserviceslaundry@gmail.com",
        message,
      },
      "bD8ZeXbCK2DRL9ldr"
    );
  } catch (error: any) {
    console.error("FAILED...", error);
    throw new Error(error?.message || "Email sent Failed!");
  }
};
