// components/react-pdf-renderer-com/Availability.tsx
import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {
      inter: ["Inter"],
      rubik: ["Rubik"],
    },
  },
});

interface PDFAvailabilityData {
  description: string;
}

interface PDFAvailabilityProps {
  data: PDFAvailabilityData;
  title: string;
  className?: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

export const Availability: React.FC<PDFAvailabilityProps> = ({
  data,
  title,
  className,
  titleClassName,
  paragraphClassName,
}) => {
  return (
    <View style={tw(`${className || ""}`)}>
      {/* Title */}
      <Text
        style={tw(
          `uppercase border-b border-gray-300 pb-1 ${titleClassName || ""}`
        )}
      >
        {title}
      </Text>

      {/* Description */}
      <Text style={tw(`mt-1 text-justify ${paragraphClassName || ""}`)}>
        {data?.description}
      </Text>
    </View>
  );
};
