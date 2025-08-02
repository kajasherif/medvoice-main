import React from 'react';

const PrintStyles: React.FC = () => {
  return (
    <style>{`
      @media print {
        body {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
          background: white !important;
          margin: 0;
          padding: 0;
        }
        
        .print\\:hidden {
          display: none !important;
        }
        
        .print\\:bg-blue-600 {
          background-color: #2563eb !important;
        }
        
        .print\\:border-none {
          border: none !important;
        }
        
        .print\\:shadow-none {
          box-shadow: none !important;
        }
        
        .print\\:pt-0 {
          padding-top: 0 !important;
        }
        
        .print\\:p-0 {
          padding: 0 !important;
        }
        
        .print\\:focus\\:ring-0:focus {
          box-shadow: none !important;
        }
        
        .print\\:text-black {
          color: #000000 !important;
        }
        
        .print\\:bg-white {
          background-color: #ffffff !important;
        }
        
        /* Hide scrollbars in print */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Force page breaks */
        .print\\:page-break {
          page-break-before: always;
        }
        
        .print\\:page-break-after {
          page-break-after: always;
        }
        
        .print\\:page-break-inside-avoid {
          page-break-inside: avoid;
        }
        
        /* Print-specific margins */
        @page {
          margin: 1in;
          size: A4;
        }
        
        /* Ensure proper font sizes for print */
        .print\\:text-sm {
          font-size: 12pt !important;
        }
        
        .print\\:text-base {
          font-size: 14pt !important;
        }
        
        .print\\:text-lg {
          font-size: 16pt !important;
        }
        
        .print\\:text-xl {
          font-size: 18pt !important;
        }
        
        .print\\:text-2xl {
          font-size: 24pt !important;
        }
        
        /* Ensure proper line heights for print */
        .print\\:leading-normal {
          line-height: 1.4 !important;
        }
        
        .print\\:leading-relaxed {
          line-height: 1.6 !important;
        }
      }
    `}</style>
  );
};

export default PrintStyles;