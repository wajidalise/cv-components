// components/react-pdf-renderer-com/AboutUs.tsx
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

interface PDFAboutUsProps {
  data: { description: string };
  title: string;
  className?: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

export const AboutUs: React.FC<PDFAboutUsProps> = ({
  data,
  title,
  className,
  titleClassName,
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

      {/* Description */}
      <Text
        style={tw(`text-justify mt-1 text-[10px] leading-[1.4] ${paragraphClassName || ""}`)}
      >
        {data?.description}
      </Text>
    </View>
  );
};
