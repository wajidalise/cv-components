// components/react-pdf-randerer-com/Project.tsx
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

export interface PDFProjectData {
  title: string;
  subtitle?: string;
  location: string;
  period: string;
  description?: string;
  descriptions: string[];
}

interface PDFProjectProps {
  data: PDFProjectData[];
  title?: string;
  className?: string; 
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const Project: React.FC<PDFProjectProps> = ({
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

      {/* Projects List */}
      <View style={tw("mt-2")}>
        {data.map((item, index) => (
          <View key={index} style={tw("mb-3")}>
            {/* Header */}
            <View style={tw("flex flex-row justify-between gap-4 mt-1")}>
              <View style={tw("flex-1")}>
                <Text style={tw(`mb-[1px] ${subtitleClassName || ""}`)}>
                  {item.title}
                </Text>
                <Text style={tw(`${paragraphClassName || ""}`)}>
                  {item.location}
                </Text>
              </View>

              <View style={tw(`flex flex-col ${paragraphClassName || ""}`)}>
                <Text>{item.period}</Text>
              </View>
            </View>

            {/* Description */}
            {item.description && (
              <Text
                style={tw(`text-justify italic mt-[1px] ${paragraphClassName || ""}`)}
              >
                {item.description}
              </Text>
            )}

            {/* Responsibilities */}
            {item.descriptions?.length > 0 && (
              <View style={tw(`mt-[2px] ${paragraphClassName || ""}`)}>
                {item.descriptions.map((desc, i) => (
                  <View key={i} style={tw("flex flex-row gap-2 mb-[1px]")}>
                    <Text style={tw("text-[10px]")}>•</Text>
                    <Text style={tw("flex-1 text-justify text-[10px]")}>
                      {desc}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};
