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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "",
    specificServices: [] as string[],
    pickupDate: "",
  });

  const services = {
    clothing: ["Shirts", "Pants", "T-Shirts"],
    dryCleaning: ["Suits", "Dresses", "Coats"],
    homeItems: ["Curtains", "Bedsheets", "Blankets"],
    specialty: ["Baby Clothes", "Delicates"],
  };

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    address: false,
    serviceType: false,
    specificServices: false,
    pickupDate: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value?.trim() ? false : true,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: value ? false : true }));
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

  const handleSubmit = async (
    e: React.FormEvent,
    medium: "Whatsapp" | "Email" | "all"
  ) => {
    e.preventDefault();
    setSent("");
    setSelectedChannel(medium);
    let isValid = true;
    const newErrors: Record<keyof typeof formData, boolean> = {} as any;
    (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
      const value = formData[key];
      const fieldValid = value !== null && value !== undefined && value !== "";
      newErrors[key] = !fieldValid;
      if (!fieldValid) {
        isValid = false;
      }
    });
    setErrors(newErrors);
    if (!isValid) return;
    const { name, phone, address, serviceType, specificServices, pickupDate } =
      formData;

    const message = `
*New Service Request*
Name: ${name}
Phone: ${phone}
Address: ${address}
Service Type: ${serviceType}
Specific Services: ${specificServices.join(", ")}
Pickup Date & time: ${new Date(pickupDate).toLocaleString()}
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
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-2 mx-2">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-2 sm:p-8 relative">
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
              name: keyof typeof formData;
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
                value={formData[name]}
                onChange={onChange}
                required
                placeholder={placeholder}
              />
            </div>
          ))}
          <div>
            <select
              className={`w-full border ${
                errors.serviceType ? "border-red-300" : "border-gray-300"
              } dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none`}
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
