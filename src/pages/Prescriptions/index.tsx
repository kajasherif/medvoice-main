import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Button from '../../components/ui/Button';
import QuickAccessCard from '../../components/ui/QuickAccessCard';

interface PrescriptionData {
  patientName: string;
  age: string;
  gender: string;
  address: string;
  date: string;
  prescriptionText: string;
}

const Prescriptions: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form state
  const [prescriptionData, setPrescriptionData] = useState<PrescriptionData>({
    patientName: '',
    age: '',
    gender: '',
    address: '',
    date: new Date().toISOString().split('T')[0], // Today's date
    prescriptionText: `Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying on meaningful content. It's essentially gibberish that allows designers to focus on layout, typography, and overall visual style without being distracted by the actual tex

Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying

Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying

Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying on meaningful content. It's essentially gibberish that allows designers to focus on layout, typography, and overall visual style without being distracted by the actual tex`
  });

  // Doctor info (this could come from context/auth in real app)
  const doctorInfo = {
    name: "Dr. Jhon Killer (MBBS)",
    phone: "PH: +13 38249 4944",
    fax: "FAX: +13 38249 4944",
    address: "New York City, building no. 3C Mall Road"
  };

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleInputChange = (field: keyof PrescriptionData, value: string) => {
    setPrescriptionData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving prescription:', prescriptionData);
    alert('Prescription saved successfully!');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-global-3 flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <button
        onClick={handleMobileMenuToggle}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-sidebar-1 rounded-lg flex items-center justify-center text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 
        transition-transform duration-300 ease-in-out
      `}>
        <Sidebar 
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={handleSidebarToggle}
          isMobile={mobileMenuOpen}
          onMobileClose={() => setMobileMenuOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex-shrink-0 print:hidden">
          <Header 
            sidebarCollapsed={sidebarCollapsed}
            onMobileMenuToggle={handleMobileMenuToggle}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-3 sm:p-4 lg:p-6 pt-20 lg:pt-6 print:pt-0 print:p-0">
          <div className="max-w-4xl mx-auto">
            {/* Back Button - Hidden on print */}
            <div className="mb-4 print:hidden">
              <Button
                onClick={handleBack}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <img 
                  src="/images/img_materialsymbolslightarrowback.svg" 
                  alt="Back" 
                  className="w-4 h-4"
                />
                Back to Dashboard
              </Button>
            </div>

            {/* Prescription Form */}
            <div className="bg-global-4 rounded-lg border border-global-1 border-opacity-30 shadow-sm print:shadow-none print:border-none">
              {/* Header Section - Using QuickAccessCard Style */}
              <div className="mb-6 print:mb-4">
                <QuickAccessCard
                  title="View / Manage Prescriptions"
                  image="/images/img_image_1.png"
                  background="/images/img_.png"
                  gradient="from-blue-600 to-blue-400"
                  onClick={() => console.log('Already on prescriptions page')}
                  size="medium"
                  className="w-full"
                  printMode={true}
                />
              </div>

              {/* Doctor Information */}
              <div className="p-4 lg:p-6 border-b border-global-1 border-opacity-20 bg-global-4 rounded-t-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1">
                      {doctorInfo.name}
                    </h2>
                    <p className="text-sm lg:text-base font-opensans text-global-2 mt-1">
                      {doctorInfo.address}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-1">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      {doctorInfo.phone}
                    </p>
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      {doctorInfo.fax}
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient Information Form */}
              <div className="p-4 lg:p-6 border-b border-global-1 border-opacity-20">
                <div className="space-y-4">
                  {/* Row 1 - Patient Name (full width) */}
                  <div className="grid grid-cols-1">
                    <div>
                      <label className="block text-sm lg:text-base font-raleway font-medium text-global-1 mb-2">
                        Patient Name:
                      </label>
                      <input
                        type="text"
                        value={prescriptionData.patientName}
                        onChange={(e) => handleInputChange('patientName', e.target.value)}
                        className="w-full px-3 py-2.5 border border-global-1 border-opacity-30 rounded-md bg-global-4 text-global-1 font-opensans text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter patient name"
                      />
                    </div>
                  </div>

                  {/* Row 2 - Age and Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm lg:text-base font-raleway font-medium text-global-1 mb-2">
                        Age:
                      </label>
                      <input
                        type="text"
                        value={prescriptionData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="w-full px-3 py-2.5 border border-global-1 border-opacity-30 rounded-md bg-global-4 text-global-1 font-opensans text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Age"
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-raleway font-medium text-global-1 mb-2">
                        Gender:
                      </label>
                      <select
                        value={prescriptionData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full px-3 py-2.5 border border-global-1 border-opacity-30 rounded-md bg-global-4 text-global-1 font-opensans text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3 - Address and Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm lg:text-base font-raleway font-medium text-global-1 mb-2">
                        Address:
                      </label>
                      <input
                        type="text"
                        value={prescriptionData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-3 py-2.5 border border-global-1 border-opacity-30 rounded-md bg-global-4 text-global-1 font-opensans text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm lg:text-base font-raleway font-medium text-global-1 mb-2">
                        Date:
                      </label>
                      <input
                        type="date"
                        value={prescriptionData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full px-3 py-2.5 border border-global-1 border-opacity-30 rounded-md bg-global-4 text-global-1 font-opensans text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Prescription Content */}
              <div className="p-4 lg:p-6">
                {/* Rx Symbol */}
                <div className="flex items-center mb-6">
                  <div className="text-8xl lg:text-9xl font-serif font-bold text-global-1 mr-6">
                    ℞
                  </div>
                  <div className="flex-1 h-px bg-global-1 opacity-30"></div>
                </div>

                {/* Prescription Text */}
                <div className="mb-8">
                  <textarea
                    value={prescriptionData.prescriptionText}
                    onChange={(e) => handleInputChange('prescriptionText', e.target.value)}
                    className="w-full h-80 lg:h-96 px-4 py-4 border border-global-1 border-opacity-30 rounded-md bg-global-4 text-global-1 font-opensans text-sm lg:text-base leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 print:border-none print:focus:ring-0"
                    placeholder="Enter prescription details..."
                  />
                </div>

                {/* Doctor's Signature Section */}
                <div className="border-t border-global-1 border-opacity-20 pt-6">
                  <h3 className="text-base lg:text-lg font-raleway font-semibold text-global-1 mb-4">
                    Doctor's Signatures:
                  </h3>
                  <div className="h-24 lg:h-32 border border-dashed border-global-1 border-opacity-40 rounded-md flex items-center justify-center bg-gray-50">
                    <span className="text-global-2 font-opensans text-sm lg:text-base">
                      Digital signature area
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Hidden on print */}
              <div className="p-4 lg:p-6 border-t border-global-1 border-opacity-20 bg-gray-50 rounded-b-lg print:hidden">
                <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-end">
                  <Button
                    onClick={handleSave}
                    variant="primary"
                    size="md"
                    className="sm:w-auto w-full min-w-[140px]"
                  >
                    Save Prescription
                  </Button>
                  <Button
                    onClick={handlePrint}
                    variant="outline"
                    size="md"
                    className="sm:w-auto w-full min-w-[140px]"
                  >
                    Print Prescription
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 0;
            padding: 0;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:bg-blue-600 {
            background-color: #2563eb !important;
            color: white !important;
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
          
          /* Page settings */
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          /* Force background colors in print */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Ensure prescription content is visible */
          textarea {
            background: transparent !important;
            border: 1px solid #ccc !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Prescriptions;