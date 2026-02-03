// components/react-pdf-randerer-com/Experirnce.tsx
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

const tw = createTw({
  fontFamily: {
    inter: ['Inter'],
    rubik: ['Rubik'],
  },
});

export interface PDFExperienceData {
  title: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
}

interface PDFExperienceProps {
  data: PDFExperienceData[];
  title?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
  companyClassName?: string;
}

export const Experience: React.FC<PDFExperienceProps> = ({
  data,
  title,
  className,
  titleClassName,
  subtitleClassName,
  paragraphClassName,
  companyClassName,
}) => {
  return (
    <View style={tw(`${className || ''}`)}>
      {/* Section Title */}
      {title && (
        <View
          style={tw('w-full flex border-b border-gray-300 pb-1')} 
        >
          <Text style={tw(`uppercase  ${titleClassName || ''}`)}>{title}</Text>
        </View>
      )}

      {/* Content */}
      <View style={tw('mt-2')}>
        {data.map((item, index) => (
          <View
            key={index}
            style={tw('mb-3')}
          >
            {/* Header */}
            <View style={tw('flex flex-row justify-between gap-4 mt-1')}>
              <View style={tw('flex-1')}>
                <Text style={tw(`mb-[1px] ${subtitleClassName || ''}`)}>
                  {item.title}
                </Text>
                <Text style={tw(`${companyClassName || ''}`)}>
                  {item.company}
                </Text>
              </View>

              <View
                style={tw(
                  `flex flex-col items-end max-w-[170px] ${
                    paragraphClassName || ''
                  }`,
                )}
              >
                <Text>{item.period}</Text>
                <Text>{item.location}</Text>
              </View>
            </View>

            {/* Descriptions */}
            <View style={tw(`mt-1 ${paragraphClassName || ''}`)}>
              {item.descriptions?.map((desc, i) => (
                <View
                  key={i}
                  style={tw('flex flex-row gap-2 mb-[1px]')}
                >
                  <Text style={tw('text-[10px]')}>•</Text>
                  <Text style={tw('flex-1 text-justify text-[10px]')}>
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
