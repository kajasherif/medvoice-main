import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';

interface VoiceRecordingState {
  isRecording: boolean;
  isPaused: boolean;
  duration: string;
  audioBlob: Blob | null;
}

interface QuickAccessItem {
  title: string;
  image: string;
  background: string;
  gradient: string;
  onClick: () => void;
}

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceRecordingState>({
    isRecording: false,
    isPaused: false,
    duration: '0:04',
    audioBlob: null
  });

  const [textContent, setTextContent] = useState<string>(
    `Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying on meaningful content. It's essentially gibberish that allows designers to focus on layout, typography, and overall visual style without being distracted by the actual tex

Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying 

Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying 

Lorem ipsum" is placeholder text, or dummy text, used in graphic design, publishing, and web development to demonstrate the visual aspects of a document or webpage without relying on meaningful content. It's essentially gibberish that allows designers to focus on layout, typography, and overall visual style without being distracted by the actual tex`
  );

  const fontOptions = ['Inter (Medium)', 'Arial', 'Helvetica', 'Times New Roman', 'Georgia'];
  const sizeOptions = ['Size: 10', 'Size: 12', 'Size: 14', 'Size: 16', 'Size: 18', 'Size: 20'];

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleStartRecording = () => {
    setVoiceState(prev => ({ ...prev, isRecording: true, isPaused: false }));
    console.log('Recording started');
  };

  const handlePauseRecording = () => {
    setVoiceState(prev => ({ ...prev, isPaused: !prev.isPaused }));
    console.log('Recording paused/resumed');
  };

  const handleStopRecording = () => {
    setVoiceState(prev => ({ ...prev, isRecording: false, isPaused: false }));
    console.log('Recording stopped');
  };

  const handleDownloadRecording = () => {
    console.log('Downloading recording');
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'voice-recording.wav';
    link.click();
  };

  const handleDeleteRecording = () => {
    setVoiceState(prev => ({ ...prev, audioBlob: null, duration: '0:00' }));
    console.log('Recording deleted');
  };

  const handleSubmit = () => {
    console.log('Submitting voice recording and text content');
    alert('Voice recording and text content submitted successfully!');
  };

  const handleFontChange = (font: string) => {
    console.log('Font changed to:', font);
  };

  const handleSizeChange = (size: string) => {
    console.log('Size changed to:', size);
  };

  const quickAccessItems: QuickAccessItem[] = [
    {
      title: 'View / Manage Prescriptions',
      image: '/images/img_image_1.png',
      background: '/images/img_.png',
      gradient: 'from-blue-600 to-blue-400',
      onClick: () => console.log('Navigate to prescriptions')
    },
    {
      title: 'View / Manage Consultations',
      image: '/images/img_image_2.png',
      background: '/images/img__0x0.png',
      gradient: 'from-purple-600 to-purple-400',
      onClick: () => console.log('Navigate to consultations')
    },
    {
      title: 'Patient\'s Previous Consultations',
      image: '/images/img_image_3.png',
      background: '/images/img__1.png',
      gradient: 'from-red-700 to-red-500',
      onClick: () => console.log('Navigate to patient history')
    },
    {
      title: 'Important links lab test results',
      image: '/images/img_image_4.png',
      background: '/images/img__2.png',
      gradient: 'from-teal-600 to-teal-400',
      onClick: () => console.log('Navigate to lab results')
    }
  ];

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
        <div className="flex-shrink-0">
          <Header 
            sidebarCollapsed={sidebarCollapsed}
            onMobileMenuToggle={handleMobileMenuToggle}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-3 sm:p-4 lg:p-6 pt-20 lg:pt-6">
          <div className="max-w-full mx-auto">
            {/* Desktop/Tablet Layout */}
            <div className="hidden md:flex gap-4 lg:gap-6 h-full">
              {/* Text Editor Section */}
              <div className="flex-1 min-w-0">
                <div className="bg-global-4 rounded-lg border border-global-1 border-opacity-30 h-full flex flex-col">
                  {/* Formatting Controls */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 p-4 border-b border-global-1 border-opacity-20">
                    <Dropdown
                      options={fontOptions}
                      value="Inter (Medium)"
                      onChange={handleFontChange}
                      className="w-32 sm:w-36"
                    />
                    <Dropdown
                      options={sizeOptions}
                      value="Size: 12"
                      onChange={handleSizeChange}
                      className="w-20 sm:w-24"
                    />
                  </div>
                  
                  {/* Text Content Area */}
                  <div className="flex-1 p-4">
                    <textarea
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                      className="w-full h-full text-sm lg:text-base font-opensans font-light leading-relaxed text-global-1 bg-transparent border-none outline-none resize-none"
                      placeholder="Start typing your medical notes here..."
                    />
                  </div>
                  
                  {/* Voice Recording Controls */}
                  <div className="p-4 border-t border-global-1 border-opacity-20">
                    <div className="bg-blue-50 rounded-lg p-4">
                      {/* Recording Controls Row */}
                      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
                        <button
                          onClick={handleStartRecording}
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                            voiceState.isRecording ? 'opacity-50' : 'hover:opacity-80'
                          }`}
                          disabled={voiceState.isRecording}
                        >
                          <img src="/images/img_proiconsrecord.svg" alt="Record" className="w-full h-full" />
                        </button>
                        
                        <button
                          onClick={handlePauseRecording}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                        >
                          <img src="/images/img_group_13.svg" alt="Pause/Play" className="w-full h-full" />
                        </button>
                        
                        <button
                          onClick={handleStopRecording}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                        >
                          <img src="/images/img_fluentrecordstop48regular.svg" alt="Stop" className="w-full h-full" />
                        </button>
                        
                        <Button
                          onClick={handleSubmit}
                          variant="primary"
                          size="sm"
                          className="ml-2 sm:ml-4"
                        >
                          Submit
                        </Button>
                      </div>
                      
                      {/* Audio Timeline */}
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs sm:text-sm font-opensans font-normal text-gray-600">
                          {voiceState.duration}
                        </span>
                        <img src="/images/img_group.svg" alt="Audio waveform" className="w-16 sm:w-24 h-4 sm:h-6" />
                        <button
                          onClick={handleDeleteRecording}
                          className="w-4 h-4 hover:opacity-80 transition-all"
                        >
                          <img src="/images/img_icbaselinedelete.svg" alt="Delete" className="w-full h-full" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Access Panel */}
              <div className="w-72 lg:w-80 xl:w-96 flex-shrink-0">
                <div className="grid grid-cols-1 gap-4 lg:gap-5">
                  {quickAccessItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={item.onClick}
                      className={`relative h-32 lg:h-36 xl:h-40 rounded-lg cursor-pointer hover:opacity-90 transition-all shadow-sm overflow-hidden bg-gradient-to-r ${item.gradient}`}
                    >
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"
                        style={{
                          backgroundImage: `url(${item.background})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundBlendMode: 'soft-light',
                          opacity: 0.3
                        }}
                      />
                      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 mb-3"
                        />
                        <h3 className="text-sm lg:text-base xl:text-lg font-raleway font-semibold leading-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-4">
              {/* Quick Access Panel - Top on Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickAccessItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={item.onClick}
                    className={`relative h-24 rounded-lg cursor-pointer hover:opacity-90 transition-all shadow-sm overflow-hidden bg-gradient-to-r ${item.gradient}`}
                  >
                    <div 
                      className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"
                      style={{
                        backgroundImage: `url(${item.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'soft-light',
                        opacity: 0.3
                      }}
                    />
                    <div className="relative z-10 flex items-center justify-center h-full text-center px-2">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-8 h-8 flex-shrink-0"
                        />
                        <h3 className="text-xs font-raleway font-semibold leading-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Text Editor Section */}
              <div className="bg-global-4 rounded-lg border border-global-1 border-opacity-30 flex flex-col" style={{ minHeight: '60vh' }}>
                {/* Formatting Controls */}
                <div className="flex flex-wrap items-center gap-2 p-3 border-b border-global-1 border-opacity-20">
                  <Dropdown
                    options={fontOptions}
                    value="Inter (Medium)"
                    onChange={handleFontChange}
                    className="w-32"
                  />
                  <Dropdown
                    options={sizeOptions}
                    value="Size: 12"
                    onChange={handleSizeChange}
                    className="w-20"
                  />
                </div>
                
                {/* Text Content Area */}
                <div className="flex-1 p-3">
                  <textarea
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                    className="w-full h-full min-h-[300px] text-sm font-opensans font-light leading-relaxed text-global-1 bg-transparent border-none outline-none resize-none"
                    placeholder="Start typing your medical notes here..."
                  />
                </div>
                
                {/* Voice Recording Controls */}
                <div className="p-3 border-t border-global-1 border-opacity-20">
                  <div className="bg-blue-50 rounded-lg p-3">
                    {/* Recording Controls Row */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <button
                        onClick={handleStartRecording}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          voiceState.isRecording ? 'opacity-50' : 'hover:opacity-80'
                        }`}
                        disabled={voiceState.isRecording}
                      >
                        <img src="/images/img_proiconsrecord.svg" alt="Record" className="w-full h-full" />
                      </button>
                      
                      <button
                        onClick={handlePauseRecording}
                        className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                      >
                        <img src="/images/img_group_13.svg" alt="Pause/Play" className="w-full h-full" />
                      </button>
                      
                      <button
                        onClick={handleStopRecording}
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                      >
                        <img src="/images/img_fluentrecordstop48regular.svg" alt="Stop" className="w-full h-full" />
                      </button>
                      
                      <Button
                        onClick={handleSubmit}
                        variant="primary"
                        size="sm"
                        className="ml-2"
                      >
                        Submit
                      </Button>
                    </div>
                    
                    {/* Audio Timeline */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs font-opensans font-normal text-gray-600">
                        {voiceState.duration}
                      </span>
                      <img src="/images/img_group.svg" alt="Audio waveform" className="w-16 h-4" />
                      <button
                        onClick={handleDeleteRecording}
                        className="w-4 h-4 hover:opacity-80 transition-all"
                      >
                        <img src="/images/img_icbaselinedelete.svg" alt="Delete" className="w-full h-full" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;