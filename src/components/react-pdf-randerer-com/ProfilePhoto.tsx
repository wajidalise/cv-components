import React from "react";
import { View, Image } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {
      inter: ["Inter"],
      rubik: ["Rubik"],
    },
  },
});

interface PDFProfilePhotoProps {
  data: {
    image: string;
  };
  className?: string;
}

export const ProfilePhoto: React.FC<PDFProfilePhotoProps> = ({
  data,
  className = "",
}) => {
  return (
    <View style={tw(`flex justify-center items-center ${className}`)}>
      <View
        style={tw(
          "w-24 h-24 rounded-full overflow-hidden border border-gray-300"
        )}
      >
        {/* React PDF's Image component */}
        <Image
          src={data?.image}
          style={tw("w-full h-full rounded-full object-cover")}
        />
      </View>
    </View>
  );
};
