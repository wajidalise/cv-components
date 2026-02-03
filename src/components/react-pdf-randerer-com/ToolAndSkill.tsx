// components/react-pdf-renderer-com/ToolAndSkill.tsx
import React, { Fragment } from "react";
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

interface PDFToolAndSkillData {
  title: string;
  skills: string[];
}

interface PDFToolAndSkillProps {
  data: PDFToolAndSkillData[];
  title: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const ToolAndSkill: React.FC<PDFToolAndSkillProps> = ({
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

      {/* Content */}
      <View style={tw("mt-1 space-y-3")}>
        {data?.map((item, index) => (
          <View key={index}>
            {/* Subsection Title */}
            <Text style={tw(`mb-2 ${subtitleClassName || ""}`)}>
              {item.title}
            </Text>

            {/* Skills List */}
            <View
              style={tw(
                `flex flex-row flex-wrap gap-x-1 gap-y-[1px] ${paragraphClassName || ""}`
              )}
            >
              {item.skills?.map((skill, idx) => (
                <Fragment key={idx}>
                  {idx > 0 && (
                    <Text style={tw("text-[9px] font-normal")}>•</Text>
                  )}
                  <Text style={tw("text-[9px] font-inter font-normal")}>
                    {skill}
                  </Text>
                </Fragment>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
