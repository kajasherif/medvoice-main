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
    // Simulate download functionality
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

  // Calculate left position for main content based on sidebar state
  // When collapsed: better center content to reduce excessive right-side space
  const contentLeftPosition = sidebarCollapsed ? 160 : 356;

  return (
    <div className="relative w-[1440px] h-[841px] bg-global-3">
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleSidebarToggle}
      />
      
      {/* Header */}
      <Header sidebarCollapsed={sidebarCollapsed} />
      
      {/* Main Content Area */}
      <div 
        className="absolute top-[100px] flex gap-0 transition-all duration-300"
        style={{ left: `${contentLeftPosition}px` }}
      >
        {/* Text Editor Section */}
        <div className="w-[676px] h-[688px] bg-global-4 rounded-[10px] border border-global-1 border-opacity-30 flex flex-col">
          {/* Formatting Controls */}
          <div className="flex items-center gap-4 mt-[17px] ml-[22px] mb-4">
            <Dropdown
              options={fontOptions}
              value="Inter (Medium)"
              onChange={handleFontChange}
              className="w-[137px]"
            />
            <Dropdown
              options={sizeOptions}
              value="Size: 12"
              onChange={handleSizeChange}
              className="w-[92px]"
            />
          </div>
          
          {/* Text Content Area */}
          <div className="flex-1 mx-[22px] mb-4">
            <textarea
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              className="w-full h-full text-[17px] font-opensans font-light leading-[23px] text-global-1 bg-transparent border-none outline-none resize-none"
              placeholder="Start typing your medical notes here..."
            />
          </div>
          
          {/* Voice Recording Controls */}
          <div className="mx-6 mb-6">
            <div className="bg-blue-50 rounded-[10px] p-4">
              {/* Recording Controls Row */}
              <div className="flex items-center justify-center gap-4 mb-3">
                <button
                  onClick={handleStartRecording}
                  className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all ${
                    voiceState.isRecording ? 'opacity-50' : 'hover:opacity-80'
                  }`}
                  disabled={voiceState.isRecording}
                >
                  <img src="/images/img_proiconsrecord.svg" alt="Record" className="w-[42px] h-[42px]" />
                </button>
                
                <button
                  onClick={handlePauseRecording}
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img src="/images/img_group_13.svg" alt="Pause/Play" className="w-[64px] h-[64px]" />
                </button>
                
                <button
                  onClick={handleStopRecording}
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img src="/images/img_fluentrecordstop48regular.svg" alt="Stop" className="w-[42px] h-[42px]" />
                </button>
                
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  className="ml-8 px-[25px] py-[10px]"
                >
                  Submit
                </Button>
              </div>
              
              {/* Audio Timeline */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-[14px] font-opensans font-normal leading-[20px] text-gray-600">
                  {voiceState.duration}
                </span>
                <img src="/images/img_group.svg" alt="Audio waveform" className="w-[108px] h-[27px]" />
                <button
                  onClick={handleDeleteRecording}
                  className="w-[17px] h-[17px] hover:opacity-80 transition-all"
                >
                  <img src="/images/img_icbaselinedelete.svg" alt="Delete" className="w-[17px] h-[17px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vertical Divider */}
        <div className="w-[1px] h-[688px] bg-global-1 opacity-30 mx-[12px]"></div>
        
        {/* Quick Access Panel */}
        <div className="w-[351px] h-[688px] flex flex-col gap-[20px]">
          {quickAccessItems.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className={`relative w-[351px] h-[157px] rounded-[11px] cursor-pointer hover:opacity-90 transition-all shadow-sm overflow-hidden bg-gradient-to-r ${item.gradient}`}
            >
              {/* Background overlay for subtle texture */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-20 rounded-[11px]"
                style={{
                  backgroundImage: `url(${item.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'soft-light',
                  opacity: 0.3
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-[53px] h-[53px] mb-4"
                />
                <h3 className="text-[19px] font-raleway font-semibold leading-[23px] text-white max-w-[261px]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;