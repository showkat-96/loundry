import type React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({
  name,
  icon,
  title,
  image,
  description,
}: {
  name: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  image: string;
  description: string;
}) => {
  const navigate = useNavigate();
  const Icon = icon;
  return (
    <div
      onClick={() => navigate(`/our-services/${name}`)}
      className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 w-full aspect-square flex flex-col"
    >
      {/* Top Image */}
      <div className="w-full h-2/3">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Header & Description */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-3">
        <div className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-1">
          <Icon />
          <span>{title}</span>
        </div>
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Service;
