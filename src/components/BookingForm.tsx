import { useEffect, useState } from "react";
import { Mail, MessageCircle, Truck, X } from "lucide-react";
import { sendEmail, sendToWhatsapp } from "../utils/channel";
import { services } from "../utils/services";
import { timings } from "../utils/timing";

export default function BookingForm({
  onClose,
  channel,
  defaultService = "",
}: {
  onClose: () => void;
  channel: "Whatsapp" | "Email" | "all";
  defaultService?: string;
}) {
  const today = new Date().toISOString().split("T")[0];

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState("");
  const [selectedService, setSelectedService] = useState(defaultService || "");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  useEffect(() => {
    const types = services.find((s) => s.title === selectedService);
    setSelectedTypes(types?.types || []);
  }, [selectedService]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: selectedService || "",
    serviceTypes: selectedTypes,
    date: today,
    time: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    address: false,
    service: false,
    serviceTypes: false,
    date: false,
    time: false,
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

  const handleSelectService = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    setSelectedService(value);
    setErrors((prev) => ({ ...prev, service: value ? false : true }));
  };

  const handleSelectTiming = (value: string) => {
    setFormData((prev) => ({ ...prev, time: value }));
    setErrors((prev) => ({ ...prev, time: value ? false : true }));
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      serviceTypes: checked
        ? [...prev.serviceTypes, service]
        : prev.serviceTypes.filter((s) => s !== service),
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent,
    medium: "Whatsapp" | "Email" | "all"
  ) => {
    e.preventDefault();
    setSent("");
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
    const { name, phone, address, service, serviceTypes, date, time } =
      formData;

    const message = `
*New Service Request*
Name: ${name}
Phone: ${phone}
Address: ${address}
Service Type: ${service}
Specific Services: ${serviceTypes.join(", ")}
Pickup Date & time: ${date} at ${time}
     `;

    try {
      setSending(true);
      if (medium === "Email") {
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
                name: "date",
                type: "date",
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
                {...(type === "date" ? { min: today } : {})}
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
              id={"timing"}
              className={`w-full border ${
                errors.time ? "border-red-300" : "border-gray-300"
              } dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none`}
              value={formData.time}
              onChange={(e) => handleSelectTiming(e.target.value)}
            >
              <option value={""}>{"Select Timing"}</option>
              {timings.map((timing) => (
                <option key={timing} value={timing}>
                  {timing}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              id={"services"}
              className={`w-full border ${
                errors.service ? "border-red-300" : "border-gray-300"
              } dark:border-gray-700 rounded-md px-2 py-2 text-sm text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none`}
              value={formData.service}
              onChange={(e) => handleSelectService(e.target.value)}
            >
              <option value={""}>{"Select Service"}</option>
              {services.map(({ title }) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          {/* Specific Services */}
          {selectedTypes.length > 0 && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 border rounded-md">
                {selectedTypes.map((option) => (
                  <label
                    key={option}
                    className="flex items-center text-sm gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={formData.serviceTypes.includes(option)}
                      onChange={(e) =>
                        handleServiceToggle(option, e.target.checked)
                      }
                    />
                    {option}
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
