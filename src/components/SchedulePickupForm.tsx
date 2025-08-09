import React, { useState } from "react";
import { Mail, MessageCircle, Truck, X } from "lucide-react";
import { sendEmail, sendToWhatsapp } from "../utils/channel";

export default function SchedulePickupForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const today = new Date().toISOString().split("T")[0];
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [pickupData, setPickupData] = useState({
    name: "",
    phone: "",
    pickupDate: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    pickupDate: false,
    address: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPickupData({
      ...pickupData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value?.trim() ? false : true,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent,
    channel: "Email" | "Whatsapp"
  ) => {
    try {
      e.preventDefault();

      let isValid = true;
      const newErrors: Record<keyof typeof pickupData, boolean> = {} as any;

      (Object.keys(pickupData) as (keyof typeof pickupData)[]).forEach(
        (key) => {
          const value = pickupData[key];
          const fieldValid =
            value !== null && value !== undefined && value !== "";
          newErrors[key] = !fieldValid;
          if (!fieldValid) {
            isValid = false;
          }
        }
      );
      setErrors(newErrors);
      if (!isValid) return;

      setSending(true);
      const { name, phone, address, pickupDate } = pickupData;
      const message = `Hi, I'm ${name}, with phone ${phone} from ${address}. I would like to schedule a pickup on ${new Date(
        pickupDate
      ).toLocaleString()}.`;
      if (channel === "Email") {
        await sendEmail({
          to_name: "",
          from_name: "shyxum96@gmail.com",
          message,
        });
      } else {
        sendToWhatsapp({ message });
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error scheduling pickup", error);
      alert("Error scheduling pickup");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 mx-2">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-2 sm:p-8 relative">
        {/* Close Button */}

        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex gap-2">
            <div>
              <Truck className="w-6 h-6 text-blue-700" />
            </div>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-300">
              Schedule Pickup
            </div>
          </div>
          <div className="cursor-pointer">
            <X className="h-6 w-6" onClick={onClose} />
          </div>
        </div>

        {/* Form / Confirmation */}
        {submitted ? (
          <div className="text-green-600 text-center text-lg font-medium py-2">
            ✅ Pickup Scheduled!
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Select a pickup date and time that works best for you.
            </p>

            <form className="space-y-5">
              {(
                [
                  { name: "name", type: "text", placeholder: "Name" },
                  { name: "phone", type: "phone", placeholder: "Phone" },
                  { name: "address", type: "text", placeholder: "Address" },
                  {
                    name: "pickupDate",
                    type: "datetime-local",
                    placeholder: "Pickup Date",
                  },
                ] as {
                  name: keyof typeof pickupData;
                  type: string;
                  placeholder: string;
                }[]
              ).map(({ name, type, placeholder }) => (
                <div key={name}>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    {...(type === "datetime-local" ? { min: today } : {})}
                    className={`w-full border ${
                      errors[name] ? "border-red-300" : "border-gray-300"
                    } dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none`}
                    value={pickupData[name]}
                    onChange={onChange}
                    required
                    placeholder={placeholder}
                  />
                </div>
              ))}

              {sending && <>Sending...</>}
              <div className="flex justify-between gap-2">
                <>
                  <button
                    disabled={sending}
                    onClick={(e) => handleSubmit(e, "Email")}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button
                    onClick={(e) => handleSubmit(e, "Whatsapp")}
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Whatsapp
                  </button>
                </>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
