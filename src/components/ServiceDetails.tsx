import { useEffect, useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { services, type IService } from "../utils/services";
import { CheckCircle, Sparkles } from "lucide-react";
import BookingForm from "./BookingForm";

const ServiceDetails: FC = () => {
  const { name } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  const service: IService | undefined = services.find((s) => s.name === name);
  if (!service) {
    return <div className="p-6">No Service Avaliable</div>;
  }
  const { title, description, shortDescription, longDscription, types, image } =
    service;
  return (
    <div className="mb-2 bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto p-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">{description} </p>
        </div>
        {/* Intro */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            {longDscription}
          </p>
        </div>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{service}</span>
            </div>
          ))}
        </div>

        {/* Extra Highlight Section */}
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-center gap-4">
          <Sparkles className="text-blue-600 w-8 h-8" />
          <p className="text-blue-900 font-medium">{shortDescription}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-4 text-center">
          <button onClick={() => setIsBookingOpen(true)}>
            Book Your {title} Service Now
          </button>
        </div>
      </section>
      <button onClick={() => navigate("/our-services")}>Back</button>
      {isBookingOpen && (
        <BookingForm
          onClose={() => setIsBookingOpen(false)}
          channel={"all"}
          defaultService={title}
        />
      )}
    </div>
  );
};

export default ServiceDetails;
