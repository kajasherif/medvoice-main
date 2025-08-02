import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-global-4 rounded-lg p-4 border border-global-1 border-opacity-30">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing your medical notes here..."
          className="w-full h-64 bg-transparent outline-none resize-none text-global-1"
        />
        <div className="flex items-center gap-4 mt-4">
          <Button onClick={() => setIsRecording(true)} variant="primary">
            {isRecording ? 'Recording...' : 'Record'}
          </Button>
          <Button onClick={() => setIsRecording(false)} variant="primary">
            Stop
          </Button>
        </div>
      </div>

      <div className="w-full md:w-80 bg-global-4 rounded-lg p-4">Quick Access</div>
    </div>
  );
};

export default Home;
