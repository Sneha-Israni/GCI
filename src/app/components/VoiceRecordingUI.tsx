import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import svgPaths from '../../imports/svg-5i7ewf0drs';
import svgPathsNew from '../../imports/svg-o8vlqe55mm';

interface VoiceRecordingUIProps {
  onCancel: () => void;
  isRecording: boolean;
  transcript?: string;
  interimTranscript?: string;
}

function TablerChevronUp() {
  return (
    <div className="relative size-[18px]" data-name="tabler:chevron-up">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="tabler:chevron-up">
          <path d="M4.5 11.25L9 6.75L13.5 11.25" id="Vector" stroke="var(--stroke-0, #5E5E5E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function GroupDelete() {
  return (
    <div className="absolute inset-[8.33%_12.5%_0.78%_12.5%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.814">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPathsNew.p1ff48c00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteDeleteLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:delete-line">
      <GroupDelete />
    </div>
  );
}

function GroupMic() {
  return (
    <div className="absolute inset-[8.33%_20.83%_12.5%_20.83%]" data-name="Group">
      <div className="absolute inset-[0_-7.14%_-5.26%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <g id="Group">
            <path d={svgPathsNew.p17188b80} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPathsNew.p11bfc93e} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Mic() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mic">
      <GroupMic />
    </div>
  );
}

// Static Waveform Component (from Figma)
function WaveformPlaying() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0" data-name="Waveform Playing">
      <div className="bg-white rounded-[1px] shrink-0 size-[2px]" />
      <div className="bg-white h-[8px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[14px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[4px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[16px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[14px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[10px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[10px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[10px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[14px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[10px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[16px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[10px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white h-[4px] rounded-[1px] shrink-0 w-[2px]" />
      <div className="bg-white rounded-[1px] shrink-0 size-[2px]" />
    </div>
  );
}

// Waveform Container (repeating 3 times)
function Waveform() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative">
      <WaveformPlaying />
      <WaveformPlaying />
      <WaveformPlaying />
    </div>
  );
}

export function VoiceRecordingUI({ onCancel, isRecording, transcript = '', interimTranscript = '' }: VoiceRecordingUIProps) {
  const dragX = useMotionValue(0);
  const deleteIconRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [shouldCancel, setShouldCancel] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = [
    'Start Talking',
    'Listening',
    'Release to send your response',
    'Slide to the bin to cancel'
  ];
  
  // Transform opacity based on drag distance
  const deleteOpacity = useTransform(dragX, [0, -100], [0.3, 1]);
  const waveformOpacity = useTransform(dragX, [0, -150], [1, 0.3]);
  
  useEffect(() => {
    // Check if dragged far enough to cancel
    const unsubscribe = dragX.on('change', (latest) => {
      if (latest < -120) {
        setShouldCancel(true);
      } else {
        setShouldCancel(false);
      }
    });
    
    return unsubscribe;
  }, [dragX]);

  const handleDragEnd = () => {
    setIsDragging(false);
    
    if (shouldCancel) {
      // Trigger haptic feedback if available
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      onCancel();
    } else {
      // Snap back to original position
      dragX.set(0);
    }
  };

  // Trigger haptic feedback when entering cancel zone
  useEffect(() => {
    if (shouldCancel && navigator.vibrate) {
      navigator.vibrate(25);
    }
  }, [shouldCancel]);

  // Cycle through messages continuously
  useEffect(() => {
    const delays = [2500, 2500, 3000, 3000]; // Delays for each transition (increased for readability)
    
    const timer = setTimeout(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, delays[messageIndex]);
    
    return () => clearTimeout(timer);
  }, [messageIndex, messages.length]);

  const displayText = transcript + (interimTranscript ? ` ${interimTranscript}` : '');
  const hasText = displayText.trim().length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="content-stretch flex flex-col gap-[12px] items-center relative w-full"
    >
      {/* Captured Text Display */}
      {hasText && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white/10 backdrop-blur-sm rounded-[12px] px-[16px] py-[8px] max-w-[372px] w-full"
        >
          <p className="text-white text-[14px] font-['Inter:Regular',sans-serif] text-center">
            {transcript}
            {interimTranscript && (
              <span className="text-white/60"> {interimTranscript}</span>
            )}
          </p>
        </motion.div>
      )}

      {/* Instruction Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          scale: shouldCancel ? 1.05 : 1,
        }}
        transition={{ delay: 0.1, duration: 0.2 }}
        className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={shouldCancel ? 'cancel' : messageIndex}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="relative inline-flex items-center gap-[4px]"
          >
            {messageIndex >= 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center justify-center relative shrink-0 size-[18px]" 
                style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}
              >
                <div className="-rotate-90 flex-none">
                  <TablerChevronUp />
                </div>
              </motion.div>
            )}
            <motion.span 
              className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[12px] text-center whitespace-nowrap inline-block" 
              style={{ 
                fontFeatureSettings: "'lnum', 'tnum'",
                background: shouldCancel 
                  ? '#ff4444'
                  : 'linear-gradient(90deg, rgba(94,94,94,0.3) 0%, rgba(94,94,94,0.3) 33%, #5e5e5e 50%, rgba(94,94,94,0.3) 67%, rgba(94,94,94,0.3) 100%)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: shouldCancel ? '#ff4444' : 'transparent',
                color: shouldCancel ? '#ff4444' : 'transparent',
              }}
              animate={{
                backgroundPosition: shouldCancel ? '0% 0%' : ['200% 0%', '-100% 0%'],
              }}
              transition={{
                duration: 2.5,
                repeat: shouldCancel ? 0 : Infinity,
                ease: 'linear',
              }}
            >
              {shouldCancel ? 'Release to cancel' : messages[messageIndex]}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Recording Field */}
      <div className="relative shrink-0 w-full" data-name="Response Area">
        <div className="content-stretch flex items-center justify-center px-[20px] relative size-full">
          <motion.div
            className="bg-[#c21b17] relative rounded-[100px] shrink-0 w-[372px]"
            data-name="Field"
            animate={{
              scale: shouldCancel ? 0.97 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-full">
              <motion.div
                drag="x"
                dragConstraints={{ left: -200, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                style={{ x: dragX }}
                className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative"
              >
                {/* Delete Icon + Waveform */}
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[297px]">
                  <MingcuteDeleteLine />
                  <Waveform />
                </div>

                {/* Mic Icon */}
                <motion.div
                  animate={{
                    scale: isRecording ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Mic />
                </motion.div>
              </motion.div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ffe6e5] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
