import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/svg-2v1emvufyu';
import svgPathsOtp from '../../imports/svg-bxwubusjyj';
import imgImage4 from "figma:asset/656057bea2afb6365220c6290aa1a26fbd1c5472.png";
import imgShield from "figma:asset/86086d560a5caed38554982eab1fc9d6ee33e446.png";

interface LoginScreenProps {
  onLoginSuccess: (mobileNumber: string) => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(20);
  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Resend timer countdown
  useEffect(() => {
    if (showOtpScreen && resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showOtpScreen, resendTimer]);

  const handleGetVerificationCode = () => {
    // Validate mobile number (10 digits)
    const cleanNumber = mobileNumber.replace(/\D/g, '');
    
    if (cleanNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setError('');
    setShowOtpScreen(true);
    setResendTimer(20);
    // Focus first OTP input after a short delay
    setTimeout(() => {
      otpRefs[0].current?.focus();
    }, 100);
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) {
      value = value.slice(-1);
    }
    
    // Only allow numbers
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to go to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }
    
    // Show loading overlay
    setError('');
    setShowLoadingOverlay(true);
    
    // After a brief moment, proceed to onboarding
    setTimeout(() => {
      const cleanNumber = mobileNumber.replace(/\D/g, '');
      onLoginSuccess(`+91${cleanNumber}`);
    }, 1500);
  };

  const handleEditNumber = () => {
    setShowOtpScreen(false);
    setOtp(['', '', '', '', '', '']);
    setResendTimer(20);
    setError('');
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(20);
      setOtp(['', '', '', '', '', '']);
      otpRefs[0].current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only digits
    if (value.length <= 10) {
      setMobileNumber(value);
      setError('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGetVerificationCode();
    }
  };

  return (
    <div 
      className="absolute inset-0 flex flex-col"
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 412 917\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(1.7277e-15 62.8 -28.215 3.8454e-15 206 458.5)\"><stop stop-color=\"rgba(255,233,231,1)\" offset=\"0\"/><stop stop-color=\"rgba(255,254,254,1)\" offset=\"1\"/></radialGradient></defs></svg>')" 
      }}
    >
      <AnimatePresence mode="wait">
        {!showOtpScreen ? (
          /* Mobile Number Input Screen */
          <motion.div
            key="mobile-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {/* Logo and Illustration Section */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-[120px] pt-[98px] px-[54px]"
            >
              {/* Logo */}
              <div className="h-[70px] w-[120px]">
                <img 
                  alt="Generali Central Logo" 
                  className="w-full h-full object-cover" 
                  src={imgImage4} 
                />
              </div>
              
              {/* Illustration and Text */}
              <div className="flex flex-col items-center gap-[24px] w-full">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="h-[180px] w-[181px]"
                >
                  <img 
                    alt="Insurance Shield" 
                    className="w-full h-full object-cover" 
                    src={imgShield} 
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col gap-[10px] items-center text-center w-full"
                >
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black">
                    Your Trusted Policy Partner
                  </p>
                  <div className="font-['Inter:Regular',sans-serif] font-normal text-[#615f5f] text-[14px]">
                    <p className="mb-0">Because every moment of life deserves</p>
                    <p>the confidence of protection and care.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Mobile Number Input Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-[104px] left-0 right-0 px-[20px]"
            >
              <div className="flex flex-col">
                {/* Mobile Number Field */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#263238] text-[16px]">
                    Mobile Number
                  </p>
                  <div className="flex gap-[8px]">
                    {/* Mobile Number Input */}
                    <div className="flex-1 relative">
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter 10-digit number"
                        className="w-full bg-white rounded-[12px] border border-[#e5e7eb] border-solid px-[12px] py-[14px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black placeholder:text-[#9ca3af] focus:outline-none focus:border-[#c21b17] focus:ring-1 focus:ring-[#c21b17]"
                      />
                    </div>
                  </div>
                  
                  {/* Error Message */}
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-['Inter:Regular',sans-serif] font-normal text-[#c21b17] text-[14px]"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
                
                {/* Get Verification Code Button */}
                <button
                  onClick={handleGetVerificationCode}
                  className="mt-[24px] bg-gradient-to-b from-[#c21b17] to-[#a11612] h-[48px] rounded-[12px] transition-all hover:shadow-lg active:scale-95 w-full"
                >
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] text-[16px] text-center text-white">
                    Get Verification Code
                  </p>
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* OTP Verification Screen */
          <motion.div
            key="otp-screen"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-[119px] left-[50px] right-[50px]"
            >
              <div className="flex flex-col gap-[40px] items-center">
                {/* Title and Description */}
                <div className="flex flex-col gap-[16px] items-start w-full">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[18px] text-black text-center w-full">
                    Enter Verification Code
                  </p>
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[#615f5f] text-[14px] text-center w-full">
                      We've sent a 6 digit code to
                    </p>
                    <div className="flex gap-[12px] items-center justify-center w-full">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#263238] text-[14px]">
                        +91 {mobileNumber}
                      </p>
                      <button
                        onClick={handleEditNumber}
                        className="bg-[#fef3f2] border border-[#fecdca] border-solid px-[6px] py-[2px] rounded-[6px] flex gap-[4px] items-center"
                      >
                        <p className="font-['DM_Sans:Medium',sans-serif] font-medium text-[#b42318] text-[12px]">
                          Edit
                        </p>
                        <div className="h-[8px] w-[8px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 8 8">
                            <path d={svgPathsOtp.p6f2eef0} stroke="#C21B17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* OTP Input Boxes */}
                <div className="flex gap-[10px] items-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="tel"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      ref={otpRefs[index]}
                      className="bg-white w-[42px] h-[42px] rounded-[10px] border border-[#e5e7eb] border-solid font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-center text-black focus:outline-none focus:border-[#c21b17] focus:ring-1 focus:ring-[#c21b17]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-[318px] left-0 right-0 px-[20px]"
            >
              <div className="flex flex-col gap-[40px] items-center">
                {/* Resend Timer */}
                <div className="flex gap-[4px] items-center text-[12px]">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-black">
                    Didn't receive a code ?
                  </p>
                  <button
                    onClick={handleResend}
                    disabled={resendTimer > 0}
                    className={`font-['Inter:Regular',sans-serif] font-normal ${
                      resendTimer > 0 ? 'text-[#7f7f7f] cursor-not-allowed' : 'text-[#c21b17] cursor-pointer'
                    }`}
                  >
                    {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend'}
                  </button>
                </div>

                {/* Verify Button */}
                <div className="w-full">
                  <button
                    onClick={handleVerify}
                    className="bg-gradient-to-b from-[#c21b17] to-[#a11612] h-[48px] rounded-[12px] transition-all hover:shadow-lg active:scale-95 w-full"
                  >
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] text-[16px] text-center text-white">
                      Verify
                    </p>
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-['Inter:Regular',sans-serif] font-normal text-[#c21b17] text-[14px] text-center mt-[12px]"
                >
                  {error}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      {showLoadingOverlay && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
          />
          
          {/* Verification Success Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-[11px] bg-[rgba(242,242,242,0.8)] flex flex-col items-start rounded-[14px] w-[273px]"
          >
            {/* Content */}
            <div className="w-full">
              <div className="flex flex-col items-center rounded-[inherit] size-full">
                <div className="flex flex-col gap-[2px] items-center p-[16px] text-black text-center w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] text-[17px] tracking-[-0.408px] w-full">
                    Verified!
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[13px] tracking-[-0.078px] w-full">
                    Your Mobile Number is verified successfully.
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="border-[rgba(60,60,67,0.36)] border-b-[0.5px] border-solid" />
            </div>

            {/* Continue Button */}
            <button
              onClick={() => {
                const cleanNumber = mobileNumber.replace(/\D/g, '');
                onLoginSuccess(`+91${cleanNumber}`);
              }}
              className="w-full"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="flex items-center justify-center px-[8px] py-[11px] w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] text-[#007aff] text-[17px] text-center tracking-[-0.408px]">
                    Continue
                  </p>
                </div>
              </div>
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}