import { useState } from "react";
import { Mail, MessageCircle, Truck, X } from "lucide-react";
import { sendEmail, sendToWhatsapp } from "../utils/channel";

export default function BookingForm({
  onClose,
  channel,
}: {
  onClose: () => void;
  channel: "Whatsapp" | "Email" | "all";
}) {
  const today = new Date().toISOString().split("T")[0];
  const [selectedChannel, setSelectedChannel] = useState(channel);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "",
    specificServices: [] as string[],
    pickupDate: "",
    pickupTime: "",
  });

  const services = {
    clothing: ["Shirts", "Pants", "T-Shirts"],
    dryCleaning: ["Suits", "Dresses", "Coats"],
    homeItems: ["Curtains", "Bedsheets", "Blankets"],
    specialty: ["Baby Clothes", "Delicates"],
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error when typing
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      specificServices: checked
        ? [...prev.specificServices, service]
        : prev.specificServices.filter((s) => s !== service),
    }));
  };

  const getServiceOptions = () => {
    if (formData.serviceType === "mixed") {
      return [
        ...services.clothing,
        ...services.dryCleaning,
        ...services.homeItems,
      ].slice(0, 6);
    }
    return services[formData.serviceType as keyof typeof services] || [];
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.serviceType) newErrors.serviceType = "Select a service type";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
    if (!formData.pickupTime) newErrors.pickupTime = "Pickup time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent,
    medium: "Whatsapp" | "Email" | "all"
  ) => {
    e.preventDefault();
    setSent("");
    setSelectedChannel(medium);
    if (!validateForm()) return;
    const {
      name,
      phone,
      address,
      serviceType,
      specificServices,
      pickupDate,
      pickupTime,
    } = formData;

    const message = `
*New Service Request*
Name: ${name}
Phone: ${phone}
Address: ${address}
Service Type: ${serviceType}
Specific Services: ${specificServices.join(", ")}
Pickup Date: ${pickupDate}
Pickup Time: ${pickupTime}
    `;

    try {
      setSending(true);
      if (selectedChannel === "Email") {
        await sendEmail({
          to_name: "",
          from_name: "shyxum96@gmail.com",
          message,
        });
      } else {
        sendToWhatsapp({ message });
      }
      setSent("success");
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error(error);
      setSent("failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-blue-900 font-bold">
          <div className="flex items-center gap-2 text-xl">
            <Truck className="h-6 w-6" />
            Book Your Order
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer" onClick={onClose} />
          </div>
        </div>

        {sending && <p className="text-sm text-gray-500">Sending...</p>}
        {sent && (
          <div
            className={`mb-4 p-2 rounded ${
              sent === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {sent === "success"
              ? "Message sent successfully"
              : "Message failed to send"}
          </div>
        )}

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name *</label>
            <input
              className="mt-1 block w-full border rounded-md px-2 py-2 text-sm"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            {errors.name && (
              <p className="text-red-600 text-xs">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone *</label>
            <input
              type="tel"
              className="mt-1 block w-full border rounded-md px-2 py-2 text-sm"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs">{errors.phone}</p>
            )}
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium">
              Primary Service Type *
            </label>
            <select
              className="mt-1 block w-full border rounded-md px-2 py-2 text-sm"
              value={formData.serviceType}
              onChange={(e) => handleInputChange("serviceType", e.target.value)}
            >
              <option value="">Select service</option>
              <option value="clothing">👕 Clothing</option>
              <option value="dryCleaning">🧥 Dry Cleaning</option>
              <option value="homeItems">🛏️ Home Items</option>
              <option value="specialty">👶 Specialty</option>
              <option value="mixed">🎯 Mixed</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-600 text-xs">{errors.serviceType}</p>
            )}
          </div>

          {/* Specific Services */}
          {formData.serviceType && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Specific Services
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 border rounded-md">
                {getServiceOptions().map((service) => (
                  <label
                    key={service}
                    className="flex items-center text-sm gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={formData.specificServices.includes(service)}
                      onChange={(e) =>
                        handleServiceToggle(service, e.target.checked)
                      }
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Address */}
          <div>
            <label className="block text-sm font-medium">Address *</label>
            <textarea
              className="mt-1 block w-full border rounded-md px-2 py-2 text-sm"
              rows={3}
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
            {errors.address && (
              <p className="text-red-600 text-xs">{errors.address}</p>
            )}
          </div>

          {/* Pickup Date */}
          <div>
            <label className="block text-sm font-medium">Pickup Date *</label>
            <input
              type="date"
              min={today}
              className="mt-1 block w-full border rounded-md px-2 py-2 text-sm"
              value={formData.pickupDate}
              onChange={(e) => handleInputChange("pickupDate", e.target.value)}
            />
            {errors.pickupDate && (
              <p className="text-red-600 text-xs">{errors.pickupDate}</p>
            )}
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-sm font-medium">Pickup Time *</label>
            <select
              className="mt-1 block w-full border rounded-md px-2 py-2 text-sm"
              value={formData.pickupTime}
              onChange={(e) => handleInputChange("pickupTime", e.target.value)}
            >
              <option value="">Select time slot</option>
              <option value="morning">🌅 Morning (7–11 AM)</option>
              <option value="afternoon">☀️ Afternoon (11–3 PM)</option>
              <option value="evening">🌆 Evening (3–7 PM)</option>
              <option value="night">🌙 Night (7–10 PM)</option>
            </select>
            {errors.pickupTime && (
              <p className="text-red-600 text-xs">{errors.pickupTime}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-between gap-2">
            {channel === "all" ? (
              <>
                <button
                  onClick={(e) => handleSubmit(e, "Email")}
                  disabled={sending}
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
            ) : (
              <button
                onClick={(e) => handleSubmit(e, channel)}
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
              >
                <MessageCircle className="w-4 h-4" />
                {channel}
              </button>
            )}
          </div>
          {sending && "Booking..."}
        </form>
      </div>
    </div>
  );
}
