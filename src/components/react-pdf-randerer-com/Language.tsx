// components/react-pdf-renderer-com/Language.tsx
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

interface PDFLanguageData {
  language: string;
  level: string;
}

interface PDFLanguageProps {
  data: PDFLanguageData[];
  title: string;
  className?: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

export const Language: React.FC<PDFLanguageProps> = ({
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

      {/* Content */}
      <View style={tw("mt-1 space-y-2")}>
        {data?.map((item, index) => (
          <View key={index} style={tw("flex flex-row justify-between")}>
            <Text style={tw("text-[11px] font-rubik font-normal")}>
              {item.language}
            </Text>
            <Text
              style={tw(`text-[10px] font-inter ${paragraphClassName || ""}`)}
            >
              {item.level}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
