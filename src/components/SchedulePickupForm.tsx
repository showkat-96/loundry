import { useState } from "react";
import { Mail, MessageCircle, Truck, X } from "lucide-react";
import { sendEmail, sendToWhatsapp } from "../utils/channel";

export default function SchedulePickupForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const today = new Date().toISOString().split("T")[0];
  const [pickupDate, setPickupDate] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent,
    channel: "Email" | "Whatsapp"
  ) => {
    try {
      e.preventDefault();
      setSending(true);
      const formattedTime =
        {
          morning: "🌅 Morning (7–11 AM)",
          afternoon: "☀️ Afternoon (11–3 PM)",
          evening: "🌆 Evening (3–7 PM)",
          night: "🌙 Night (7–10 PM)",
        }[pickupTime] || pickupTime;

      const message = `Hi, ${phone} would like to schedule a pickup on ${pickupDate} at ${formattedTime}. ${
        specialInstructions ? "Notes: " + specialInstructions : ""
      }`;
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
      console.error("Error scheduling pickup");
      alert("Error scheduling pickup");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2">
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
              {/* Pickup Date */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="phone"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="pickupDate"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Pickup Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="pickupDate"
                  type="date"
                  min={today}
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
              </div>

              {/* Pickup Time */}
              <div>
                <label
                  htmlFor="pickupTime"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Pickup Time <span className="text-red-500">*</span>
                </label>
                <select
                  id="pickupTime"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  required
                >
                  <option value="">Select time slot</option>
                  <option value="morning">🌅 Morning (7–11 AM)</option>
                  <option value="afternoon">☀️ Afternoon (11–3 PM)</option>
                  <option value="evening">🌆 Evening (3–7 PM)</option>
                  <option value="night">🌙 Night (7–10 PM)</option>
                </select>
              </div>

              {/* Special Instructions */}
              <div>
                <label
                  htmlFor="specialInstructions"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Special Instructions
                </label>
                <textarea
                  id="specialInstructions"
                  rows={3}
                  placeholder="Any notes or delivery preferences?"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                />
              </div>

              {/* Buttons */}
              {sending && <>Sending...</>}
              <div className="flex justify-between gap-2">
                <>
                  <button
                    disabled={!pickupDate || !pickupTime || !phone || sending}
                    onClick={(e) => handleSubmit(e, "Email")}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button
                    onClick={(e) => handleSubmit(e, "Whatsapp")}
                    disabled={!pickupDate || !pickupTime || !phone || sending}
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
