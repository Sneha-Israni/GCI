import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

interface OTPVerificationProps {
  onVerify: (otp: string) => void;
  expectedOTP?: string;
}

export function OTPVerification({ onVerify, expectedOTP = '1111' }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  useEffect(() => {
    // Focus first input on mount
    inputRefs[0].current?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(false);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // Auto-verify when all digits are entered
    if (index === 3 && value) {
      const enteredOTP = newOtp.join('');
      if (enteredOTP === expectedOTP) {
        setTimeout(() => onVerify(enteredOTP), 300);
      } else {
        setError(true);
        setTimeout(() => {
          setOtp(['', '', '', '']);
          setError(false);
          inputRefs[0].current?.focus();
        }, 1000);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      while (newOtp.length < 4) newOtp.push('');
      setOtp(newOtp.slice(0, 4));
      
      // Auto-verify if complete
      if (pastedData.length === 4) {
        if (pastedData === expectedOTP) {
          setTimeout(() => onVerify(pastedData), 300);
        } else {
          setError(true);
          setTimeout(() => {
            setOtp(['', '', '', '']);
            setError(false);
            inputRefs[0].current?.focus();
          }, 1000);
        }
      } else {
        inputRefs[Math.min(pastedData.length, 3)].current?.focus();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="px-5 w-full mb-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="bg-white rounded-[16px] p-6 shadow-md border border-gray-200"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#c21b17] to-[#a01613] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3 className="font-['Inter:Semibold',sans-serif] font-semibold text-[18px] text-gray-900 mb-2">
            OTP Verification
          </h3>
          <p className="text-gray-600 text-[14px]">
            Enter the verification code sent to your registered mobile number
          </p>
          <p className="text-gray-500 text-[12px] mt-2">
            (Demo OTP: 1111)
          </p>
        </div>

        {/* OTP Input */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <motion.input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: error ? [1, 1.1, 1] : 1,
                borderColor: error ? '#ef4444' : (digit ? '#c21b17' : '#d1d5db')
              }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              className={`w-14 h-14 text-center text-2xl font-semibold rounded-[12px] border-2 focus:outline-none transition-all ${
                error 
                  ? 'border-red-500 bg-red-50' 
                  : digit 
                    ? 'border-[#c21b17] bg-[#fff7f7]' 
                    : 'border-gray-300 bg-white focus:border-[#c21b17]'
              }`}
            />
          ))}
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm text-center mb-4"
          >
            Invalid OTP. Please try again.
          </motion.p>
        )}

        <div className="text-center">
          <p className="text-gray-600 text-[13px] mb-3">
            Didn't receive the code?
          </p>
          <button className="text-[#c21b17] font-semibold text-[14px] hover:underline">
            Resend OTP
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="text-center mt-4"
      >
        <p className="text-gray-500 text-xs">
          Please enter the 4-digit verification code to continue
        </p>
      </motion.div>
    </motion.div>
  );
}