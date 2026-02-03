// components/react-pdf-renderer-com/Education.tsx
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

export interface PDFEducationData {
  degree: string;
  institution: string;
  location: string;
  period: string;
  descriptions: string[];
}

interface PDFEducationProps {
  data: PDFEducationData[];
  title?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
  institutionClassName?: string;
}

export const Education: React.FC<PDFEducationProps> = ({
  data,
  title,
  className,
  titleClassName,
  subtitleClassName,
  paragraphClassName,
  institutionClassName,
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

      {/* Education Entries */}
      <View style={tw("mt-2")}>
        {data.map((item, index) => (
          <View key={index} style={tw("mb-3")}>
            {/* Header */}
            <View style={tw("flex flex-row justify-between gap-4 mt-1")}>
              {/* Left Section */}
              <View style={tw("flex-1")}>
                <Text style={tw(`mb-[1px] ${subtitleClassName || ""}`)}>
                  {item.degree}
                </Text>
                <Text style={tw(`${institutionClassName || ""}`)}>
                  {item.institution}
                </Text>
              </View>

              {/* Right Section */}
              <View
                style={tw(
                  `flex flex-col items-end max-w-[170px] ${paragraphClassName || ""}`
                )}
              >
                <Text>{item.period}</Text>
                <Text>{item.location}</Text>
              </View>
            </View>

            {/* Descriptions */}
            <View style={tw(`mt-1 ${paragraphClassName || ""}`)}>
              {item.descriptions?.map((desc, i) => (
                <View key={i} style={tw("flex flex-row gap-2 mb-[1px]")}>
                  <Text style={tw("text-[10px]")}>•</Text>
                  <Text style={tw("flex-1 text-justify text-[10px]")}>
                    {desc}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
