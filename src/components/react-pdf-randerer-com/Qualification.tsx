// components/react-pdf-renderer-com/Qualification.tsx
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

export interface PDFQualificationData {
  title: string;
  description?: string;
}

interface PDFQualificationProps {
  data: PDFQualificationData[];
  title?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const Qualification: React.FC<PDFQualificationProps> = ({
  data,
  title,
  className,
  titleClassName,
  subtitleClassName,
  paragraphClassName,
}) => {
  return (
    <View style={tw(`${className || ""}`)}>
      {/* Section Title */}
      {title && (
        <Text
          style={tw(
            `uppercase border-b border-gray-300 pb-1 ${titleClassName || ""}`
          )}
        >
          {title}
        </Text>
      )}

      {/* Qualification List */}
      <View style={tw("mt-2 text-justify")}>
        {data?.map((item, index) => (
          <View key={index} style={tw("mb-2")}>
            <Text style={tw(`mb-[1px] ${subtitleClassName || ""}`)}>
              {item.title}
            </Text>
            {item.description && (
              <Text style={tw(`${paragraphClassName || ""}`)}>
                {item.description}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};
