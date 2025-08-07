import { useState } from "react";
import { Truck, X } from "lucide-react";
import sendToWhatsapp from "../utils/whatsapp";

export default function BookingForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const today = new Date().toISOString().split("T")[0];

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    serviceType: "",
    specificServices: [] as string[],
    pickupDate: "",
    pickupTime: "",
    specialInstructions: "",
  });

  const services = {
    clothing: ["Shirts", "Pants", "T-Shirts"],
    dryCleaning: ["Suits", "Dresses", "Coats"],
    homeItems: ["Curtains", "Bedsheets", "Blankets"],
    specialty: ["Baby Clothes", "Delicates"],
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {
      name,
      phone,
      email,
      address,
      pincode,
      serviceType,
      specificServices,
      pickupDate,
      pickupTime,
      specialInstructions,
    } = formData;
    const message = `
     *New Service Request*

Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Pincode: ${pincode}
Service Type: ${serviceType}
Specific Services: ${specificServices}
Pickup Date: ${pickupDate}
Pickup Time: ${pickupTime}
Special Instructions: ${specialInstructions}
`;
    sendToWhatsapp({ message });
    onClose();
    setStep(1);
  };

  const canGoNext =
    formData.name &&
    formData.phone &&
    formData.address !== undefined && // will be entered on step 2
    formData.serviceType;

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between space-x-2 text-blue-900 text-2xl font-bold">
              <div>
                <Truck className="h-6 w-6" />
                Book Your Order
              </div>
              <div>
                <X className="h-6 w-6 cursor-pointer" onClick={onClose} />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">Step {step} of 2</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal + Service Info */}
            {step === 1 && (
              <>
                {/* Personal Information */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>
                </section>

                {/* Service Details */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mt-6">
                    Service Details
                  </h3>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Primary Service Type *
                    </label>
                    <select
                      className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                      value={formData.serviceType}
                      onChange={(e) =>
                        handleInputChange("serviceType", e.target.value)
                      }
                      required
                    >
                      <option value="">Select service</option>
                      <option value="clothing">👕 Clothing</option>
                      <option value="dryCleaning">🧥 Dry Cleaning</option>
                      <option value="homeItems">🛏️ Home Items</option>
                      <option value="specialty">👶 Specialty</option>
                      <option value="mixed">🎯 Mixed</option>
                    </select>
                  </div>

                  {formData.serviceType && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Services
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 border rounded-md max-h-48 overflow-y-auto">
                        {getServiceOptions().map((service) => (
                          <label
                            key={service}
                            className="flex items-center text-sm space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={formData.specificServices.includes(
                                service
                              )}
                              onChange={(e) =>
                                handleServiceToggle(service, e.target.checked)
                              }
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              </>
            )}

            {/* Step 2: Address + Pickup */}
            {step === 2 && (
              <>
                {/* Address */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Pickup Address
                  </h3>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Address *
                    </label>
                    <textarea
                      className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      required
                      rows={3}
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Pincode *
                    </label>
                    <input
                      className="mt-1 block w-full max-w-xs border rounded-md px-3 py-2 text-sm"
                      value={formData.pincode}
                      onChange={(e) =>
                        handleInputChange("pincode", e.target.value)
                      }
                      required
                    />
                  </div>
                </section>

                {/* Schedule */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mt-6">
                    Pickup Schedule
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                        value={formData.pickupDate}
                        onChange={(e) =>
                          handleInputChange("pickupDate", e.target.value)
                        }
                        min={today}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Pickup Time *
                      </label>
                      <select
                        className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                        value={formData.pickupTime}
                        onChange={(e) =>
                          handleInputChange("pickupTime", e.target.value)
                        }
                        required
                      >
                        <option value="">Select time slot</option>
                        <option value="morning">🌅 Morning (7–11 AM)</option>
                        <option value="afternoon">
                          ☀️ Afternoon (11–3 PM)
                        </option>
                        <option value="evening">🌆 Evening (3–7 PM)</option>
                        <option value="night">🌙 Night (7–10 PM)</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Additional Info */}
                <section className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Additional Information
                  </h3>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Special Instructions
                    </label>
                    <textarea
                      className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                      value={formData.specialInstructions}
                      onChange={(e) =>
                        handleInputChange("specialInstructions", e.target.value)
                      }
                      rows={3}
                      placeholder="Any delivery notes or preferences?"
                    />
                  </div>
                </section>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => (step === 1 ? onClose() : setStep(step - 1))}
                className="w-full sm:w-1/2 bg-white border border-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-50"
              >
                {step === 1 ? "Cancel" : "Back"}
              </button>

              {step === 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-1/2 bg-white border border-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-50"
                  disabled={!canGoNext}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-1/2 bg-white border border-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-50"
                  disabled={
                    !formData.address ||
                    !formData.pincode ||
                    !formData.pickupDate ||
                    !formData.pickupTime
                  }
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>Book Pickup</span>
                  </div>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    )
  );
}
