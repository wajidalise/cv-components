// components/react-pdf-randerer-com/Header.tsx
'use client'

import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { createTw } from 'react-pdf-tailwind'

// Tailwind setup for PDF
const tw = createTw({
  fontFamily: {
    rubik: ['Rubik'],
    inter: ['Inter'],
  },
  colors: {
    blue: '#078fff',
    gray: '#3e3e3e',
  },
})

export interface PDFHeaderData {
  name: string
  title: string
  email?: string
  phone?: string
  linkedin?: string
  location?: string
}

interface Props {
  data: PDFHeaderData
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  paragraphClassName?: string
}

// ✅ PDF-friendly Header
export const Header: React.FC<Props> = ({
  data,
  className = '',
  titleClassName,
  subtitleClassName,
  paragraphClassName,
}) => {
  return (
    <View style={tw(`flex flex-col ${className}`)}>
      {/* Name */}
      <Text style={tw(`uppercase text-[24px] font-rubik text-gray font-medium ${titleClassName}`)}>
        {data?.name}
      </Text>

      {/* Job Title */}
      <Text style={tw(`text-[14px] font-inter text-blue mb-2 ${subtitleClassName}`)}>
        {data?.title}
      </Text>

      {/* Contact Details */}
      <View style={tw(`flex flex-col gap-1 ${paragraphClassName}`)}>
        <View style={tw('flex flex-row gap-3')}>
          {data?.phone && (
            <Text style={tw('text-[10px] font-inter text-gray')}>
              📞 {data.phone}
            </Text>
          )}
          {data?.email && (
            <Text style={tw('text-[10px] font-inter text-gray')}>
              ✉️ {data.email}
            </Text>
          )}
        </View>

        {data?.linkedin && (
          <Text style={tw('text-[10px] font-inter text-gray')}>
            🔗 {data.linkedin}
          </Text>
        )}

        {data?.location && (
          <Text style={tw('text-[10px] font-inter text-gray')}>
            📍 {data.location}
          </Text>
        )}
      </View>
    </View>
  )
}
