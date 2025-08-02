import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Button from '../../components/ui/Button';
import QuickAccessCard from '../../components/ui/QuickAccessCard';

interface VitalSignReading {
  parameter: string;
  reading: string;
  unit: string;
}

interface TestResult {
  testName: string;
  result: string;
  insertDate: string;
}

interface PatientData {
  name: string;
  dateOfBirth: string;
  gender: string;
  patientId: string;
  contactInfo: string;
  chronicCondition: string;
  previousSurgeries: string;
  knownAllergies: string;
  familyHistoryDiseases: string;
  previousHospitalizations: string;
}

const PatientConsultations: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample patient data - this would come from API in real app
  const patientData: PatientData = {
    name: "Neeraj Singh",
    dateOfBirth: "Neeraj Singh",
    gender: "Neeraj Singh", 
    patientId: "Neeraj Singh",
    contactInfo: "Neeraj Singh",
    chronicCondition: "Neeraj Singh",
    previousSurgeries: "Neeraj Singh",
    knownAllergies: "Neeraj Singh",
    familyHistoryDiseases: "Neeraj Singh",
    previousHospitalizations: "Neeraj Singh"
  };

  const vitalSigns: VitalSignReading[] = [
    { parameter: "Temperature", reading: "Insert Reading", unit: "°F" },
    { parameter: "Blood Pressure", reading: "Insert Reading", unit: "mmHg" },
    { parameter: "Heart Rate", reading: "Insert Reading", unit: "bpm" },
    { parameter: "Respiratory Rate", reading: "Insert Reading", unit: "breaths/min" }
  ];

  const testResults: TestResult[] = [
    { testName: "Complete Blood Count CBC", result: "Insert Result", insertDate: "Insert Date" },
    { testName: "Complete Blood Count CBC", result: "Insert Result", insertDate: "Insert Date" },
    { testName: "Complete Blood Count CBC", result: "Insert Result", insertDate: "Insert Date" },
    { testName: "Complete Blood Count CBC", result: "Insert Result", insertDate: "Insert Date" }
  ];

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    console.log('Exporting patient consultation data');
    alert('Patient consultation data exported successfully!');
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

            {/* Main Content Card */}
            <div className="bg-global-4 rounded-lg border border-global-1 border-opacity-30 shadow-sm print:shadow-none print:border-none">
              {/* Header Section */}
              <div className="mb-6 print:mb-4">
                <QuickAccessCard
                  title="Patient's Previous Consultations"
                  image="/images/img_image_3.png"
                  background="/images/img__1.png"
                  gradient="from-red-700 to-red-500"
                  onClick={() => console.log('Already on consultations page')}
                  size="medium"
                  className="w-full"
                  printMode={true}
                />
              </div>

              <div className="p-4 lg:p-6 space-y-6">
                {/* Introduction Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-3">
                    Introduction
                  </h2>
                  <p className="text-sm lg:text-base font-opensans text-global-2 leading-relaxed">
                    A General Summary Sheet is a vital document in healthcare, providing an encompassing view of a patient's medical history, current condition, treatments, and test results. This document assists physicians in making informed and timely decisions, enhancing the quality and efficiency of care.
                  </p>
                </section>

                {/* Basic Patient Information Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Basic Patient Information
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      The basic patient information section contains essential details that identify and provide context about the patient.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      <div className="space-y-2">
                        <p className="text-sm lg:text-base font-opensans"><strong>Patient Name:</strong> {patientData.name}</p>
                        <p className="text-sm lg:text-base font-opensans"><strong>Date of Birth:</strong> {patientData.dateOfBirth}</p>
                        <p className="text-sm lg:text-base font-opensans"><strong>Gender:</strong> {patientData.gender}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm lg:text-base font-opensans"><strong>Patient ID:</strong> {patientData.patientId}</p>
                        <p className="text-sm lg:text-base font-opensans"><strong>Contact Information:</strong> {patientData.contactInfo}</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Medical History Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Medical History
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      The basic patient information section contains essential details that identify and provide context about the patient.
                    </p>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm lg:text-base font-opensans"><strong>Chronic Condition:</strong> {patientData.chronicCondition}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Previous Surgeries:</strong> {patientData.previousSurgeries}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Known Allergies:</strong> {patientData.knownAllergies}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Family History of Diseases:</strong> {patientData.familyHistoryDiseases}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Previous Hospitalizations:</strong> {patientData.previousHospitalizations}</p>
                    </div>
                  </div>
                </section>

                {/* Vital Signs Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Vital Signs
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      The basic patient information section contains essential details that identify and provide context about the patient. The basic patient information section contains essential details that identify and provide context.
                    </p>
                    
                    {/* Vital Signs Table */}
                    <div className="mt-4">
                      <div className="overflow-x-auto">
                        <div className="flex bg-blue-600 text-white rounded-t-lg min-w-full">
                          <div className="flex-1 px-3 py-2 text-center text-sm lg:text-base font-raleway font-semibold">
                            Vital Sign
                          </div>
                          <div className="flex-1 px-3 py-2 text-center text-sm lg:text-base font-raleway font-semibold">
                            Reading
                          </div>
                        </div>
                        {vitalSigns.map((vital, index) => (
                          <div key={index} className={`flex min-w-full border-l border-r border-b border-gray-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <div className="flex-1 px-3 py-2 text-sm lg:text-base font-opensans">
                              {vital.parameter}
                            </div>
                            <div className="flex-1 px-3 py-2 text-sm lg:text-base font-opensans text-center">
                              {vital.reading}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Test Results Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Vital Signs
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      The basic patient information section contains essential details that identify and provide context about the patient. The basic patient information section contains essential details that identify and provide context.
                    </p>
                    
                    {/* Test Results Table */}
                    <div className="mt-4">
                      <div className="overflow-x-auto">
                        <div className="flex bg-blue-600 text-white rounded-t-lg min-w-full">
                          <div className="flex-1 px-3 py-2 text-center text-sm lg:text-base font-raleway font-semibold">
                            Test Name
                          </div>
                          <div className="flex-1 px-3 py-2 text-center text-sm lg:text-base font-raleway font-semibold">
                            Result
                          </div>
                          <div className="flex-1 px-3 py-2 text-center text-sm lg:text-base font-raleway font-semibold">
                            Date
                          </div>
                        </div>
                        {testResults.map((test, index) => (
                          <div key={index} className={`flex min-w-full border-l border-r border-b border-gray-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <div className="flex-1 px-3 py-2 text-sm lg:text-base font-opensans">
                              {test.testName}
                            </div>
                            <div className="flex-1 px-3 py-2 text-sm lg:text-base font-opensans text-center">
                              {test.result}
                            </div>
                            <div className="flex-1 px-3 py-2 text-sm lg:text-base font-opensans text-center">
                              {test.insertDate}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Imaging Results Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Imaging Results
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      The basic patient information section contains essential details that identify and provide context about the patient.
                    </p>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm lg:text-base font-opensans"><strong>Chronic Condition:</strong> {patientData.chronicCondition}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Previous Surgeries:</strong> {patientData.previousSurgeries}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Known Allergies:</strong> {patientData.knownAllergies}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Family History of Diseases:</strong> {patientData.familyHistoryDiseases}</p>
                    </div>
                  </div>
                </section>

                {/* Treatment Plan Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Treatment Plan
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      The basic patient information section contains essential details that identify and provide context about the patient.
                    </p>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm lg:text-base font-opensans"><strong>Chronic Condition:</strong> {patientData.chronicCondition}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Previous Surgeries:</strong> {patientData.previousSurgeries}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Known Allergies:</strong> {patientData.knownAllergies}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Family History of Diseases:</strong> {patientData.familyHistoryDiseases}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Family History of Diseases:</strong> {patientData.familyHistoryDiseases}</p>
                    </div>
                  </div>
                </section>

                {/* Provider Notes Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Provider Note's
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm lg:text-base font-opensans text-global-2">
                      The basic patient information section contains essential details that identify and provide context about the patient.
                    </p>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm lg:text-base font-opensans"><strong>Chronic Condition:</strong> {patientData.chronicCondition}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Previous Surgeries:</strong> {patientData.previousSurgeries}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Known Allergies:</strong> {patientData.knownAllergies}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Family History of Diseases:</strong> {patientData.familyHistoryDiseases}</p>
                      <p className="text-sm lg:text-base font-opensans"><strong>Family History of Diseases:</strong> {patientData.familyHistoryDiseases}</p>
                    </div>
                  </div>
                </section>

                {/* Conclusion Section */}
                <section>
                  <h2 className="text-lg lg:text-xl font-raleway font-semibold text-global-1 mb-4">
                    Conclusion
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm lg:text-base font-opensans text-global-2 leading-relaxed">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                  </div>
                </section>
              </div>

              {/* Action Buttons - Hidden on print */}
              <div className="p-4 lg:p-6 border-t border-global-1 border-opacity-20 bg-gray-50 rounded-b-lg print:hidden">
                <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-end">
                  <Button
                    onClick={handleExport}
                    variant="primary"
                    size="md"
                    className="sm:w-auto w-full min-w-[140px]"
                  >
                    Export Data
                  </Button>
                  <Button
                    onClick={handlePrint}
                    variant="outline"
                    size="md"
                    className="sm:w-auto w-full min-w-[140px]"
                  >
                    Print Report
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
          .print\\:bg-red-700 {
            background-color: #b91c1c !important;
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
        }
      `}</style>
    </div>
  );
};

export default PatientConsultations;