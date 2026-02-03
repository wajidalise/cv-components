// components/react-pdf-renderer-com/Achivements.tsx
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

export interface PDFAchivementData {
  title: string;
  description: string;
  icon?: string; // You can replace this with an emoji or symbol
}

interface PDFAchivementProps {
  data: PDFAchivementData[];
  title: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const Achivements: React.FC<PDFAchivementProps> = ({
  data,
  title,
  className,
  titleClassName,
  subtitleClassName,
  paragraphClassName,
}) => {
  // Simple fallback icons (since lucide-react icons don’t work in PDFs)
  const icons = ["🎓", "⭐", "📖"];

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
      <View style={tw("space-y-3 mt-1")}>
        {data?.map((item, index) => {
          const icon = icons[index] || "🏅";
          return (
            <View key={index} style={tw("flex flex-row gap-2")}>
              {/* Icon substitute */}
              <Text style={tw("text-[11px] leading-tight")}>{icon}</Text>

              {/* Text block */}
              <View style={tw("flex-1")}>
                <Text style={tw(`mb-[2px] ${subtitleClassName || ""}`)}>
                  {item.title}
                </Text>
                <Text style={tw(`${paragraphClassName || ""} text-[10px]`)}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
