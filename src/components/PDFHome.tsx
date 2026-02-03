'use client';

import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  Font,
  PDFViewer,
} from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import { Table, TD, TH, TR } from '@ag-media/react-pdf-table';

// ✅ Register fonts
Font.register({
  family: 'Rubik',
  src: '/font/Rubik-Regular.ttf',
});
Font.register({
  family: 'Inter',
  src: '/font/Inter-Regular.otf',
});

const tw = createTw({
  fontFamily: {
    rubik: ['Rubik'],
    inter: ['Inter'],
  },
  colors: {
    custom: '#bada55',
  },
});

// ✅ Viewer wrapper
export default function PDFHome() {
  const MyDocument = () => (
    <Document>
      <Page
        size='A4'
        style={tw(' py-8 px-12')}
      >
        <View style={tw('flex flex-row')}>
          <View style={tw('w-[64.5%]  p-4 font-rubik ')}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
          </View>
          <View style={tw('w-[35.5%] bg-[#D9D9D9] p-4')}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nesciunt fugit repellat perferendis? Aspernatur fugiat veritatis
              quae optio at recusandae odit et tempore, ut aperiam ea a.
              Consectetur, non commodi.
            </Text>
          </View> 
        </View>
        <Table style={tw('border border-red-500 rounded-lg p-4')}>
          <TH style={tw('')}>
            <TD style={tw('justify-center font-rubik font-regular text-xs')}>
              Name
            </TD>
            <TD style={tw('justify-center')}>Phone</TD>
            <TD style={tw('justify-center')}>Email</TD>
            <TD style={tw('justify-center')}>Address</TD>
          </TH>
          <TR>
            <TD>Wajid Ali</TD>
            <TD>+91 1234567890</TD>
            <TD>ZKv7o@example.com</TD>
            <TD>New Delhi</TD>
          </TR>
          <TR>
            <TD>Wajid Ali</TD>
            <TD>+91 1234567890</TD>
            <TD>ZKv7o@example.com</TD>
            <TD>New Delhi</TD>
          </TR>
          <TR>
            <TD>Wajid Ali</TD>
            <TD>+91 1234567890</TD>
            <TD>ZKv7o@example.com</TD>
            <TD>New Delhi</TD>
          </TR>
          <TR>
            <TD>Wajid Ali</TD>
            <TD>+91 1234567890</TD>
            <TD>ZKv7o@example.com</TD>
            <TD>New Delhi</TD>
          </TR>
          <TR>
            <TD>Wajid Ali</TD>
            <TD>+91 1234567890</TD>
            <TD>ZKv7o@example.com</TD>
            <TD>New Delhi</TD>
          </TR>
        </Table>
      </Page>
    </Document>
  );
  return (
    <div>
      <div className='w-full'>
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
}
