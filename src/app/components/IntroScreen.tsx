import React from 'react';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-hzd0yeoh77';
import imgMascot from 'figma:asset/9b8882faf2edb23d4f87beff823e8af6f285c81a.png';

interface IntroScreenProps {
  onGetStarted: () => void;
}

export function IntroScreen({ onGetStarted }: IntroScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0"
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 412 917\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(1.7277e-15 62.8 -28.215 3.8454e-15 206 458.5)\"><stop stop-color=\"rgba(255,233,231,1)\" offset=\"0\"/><stop stop-color=\"rgba(255,254,254,1)\" offset=\"1\"/></radialGradient></defs></svg>')" 
      }}
    >
      {/* Mascot and Message */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute left-[32px] top-[419px] w-[349px] flex flex-col gap-[12px] items-center"
      >
        {/* Mascot Icon */}
        <div className="relative shrink-0 size-[80px]">
          <img 
            alt="Mascot" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imgMascot} 
          />
        </div>

        {/* Welcome Message */}
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full text-[#393737] text-[14px] text-center w-[min-content] whitespace-pre-wrap">
          Hello! I'll be with you every step. Let's pick the plan that brings you closer to your goals.
        </p>
      </motion.div>

      {/* Get Started Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-[822px] left-1/2 -translate-x-1/2 w-[412px] px-[20px]"
      >
        <button
          onClick={onGetStarted}
          className="bg-gradient-to-b from-[#c21b17] to-[#a11612] rounded-[12px] w-full transition-all hover:shadow-lg active:scale-95"
        >
          <div className="flex items-center justify-center px-[103px] py-[13px] w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] text-[16px] text-center text-white">
              Get Started
            </p>
          </div>
        </button>
      </motion.div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 h-[27px] left-[5px] right-[5px]">
        <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 -translate-x-1/2 w-[144px]">
          <div className="-scale-y-100 rotate-180">
            <div className="bg-black h-[5px] rounded-[100px] w-[144px]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
