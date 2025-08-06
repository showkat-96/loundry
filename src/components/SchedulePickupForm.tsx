import { useState } from "react";
import { Truck } from "lucide-react";

export default function SchedulePickupForm({
  isOpen,
  onClose,
  channel = "email",
}: {
  isOpen: boolean;
  onClose: () => void;
  channel: "email" | "whatsapp";
}) {
  const today = new Date().toISOString().split("T")[0];

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pickupData = {
      pickupDate,
      pickupTime,
      specialInstructions,
    };

    console.log("🚚 Pickup Scheduled:", pickupData);
    if (channel === "whatsapp") {
      const formattedTime =
        {
          morning: "🌅 Morning (7–11 AM)",
          afternoon: "☀️ Afternoon (11–3 PM)",
          evening: "🌆 Evening (3–7 PM)",
          night: "🌙 Night (7–10 PM)",
        }[pickupTime] || pickupTime;

      const message = `Hi, I’d like to schedule a pickup on ${pickupDate} at ${formattedTime}. ${
        specialInstructions ? "Notes: " + specialInstructions : ""
      }`;

      const phone = "9149418161";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    }

    setSubmitted(true);

    // Simulate closing after 1.5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setPickupDate("");
      setPickupTime("");
      setSpecialInstructions("");
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-2xl font-bold">
            <Truck className="w-6 h-6" />
            <span>Schedule Pickup</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Select a pickup date and time that works best for you.
          </p>
        </div>

        {submitted ? (
          <div className="text-green-600 text-center text-lg font-medium">
            ✅ Pickup Scheduled!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Pickup Date */}
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t dark:border-gray-700">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-1/2 bg-white dark:bg-gray-700 border border-gray-300 text-gray-700 dark:text-gray-200 rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!pickupDate || !pickupTime}
                className="w-full sm:w-1/2 bg-white dark:bg-gray-700 border border-gray-300 text-gray-700 dark:text-gray-200 rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Confirm Pickup</span>
                </div>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
