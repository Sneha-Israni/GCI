import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import svgPaths from '@/imports/svg-d38kglsggn';

interface PaymentMethodSelectorProps {
  onSelect: (paymentMethod: string, renewalMode: string) => void;
  sumAssured: number;
  premium: number;
  bankDetails?: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
  };
  payorName?: string;
}

export function PaymentMethodSelector({ 
  onSelect,
  sumAssured,
  premium,
  bankDetails,
  payorName = 'Customer'
}: PaymentMethodSelectorProps) {
  // Debug logging
  console.log('PaymentMethodSelector - bankDetails:', bankDetails);
  console.log('PaymentMethodSelector - accountNumber:', bankDetails?.accountNumber);
  
  const hasBankDetails = bankDetails && bankDetails.bankName && bankDetails.accountNumber;
  console.log('PaymentMethodSelector - hasBankDetails:', hasBankDetails);
  
  const [selectedPayment, setSelectedPayment] = useState<string>(hasBankDetails ? 'cheque' : '');
  const [selectedRenewal, setSelectedRenewal] = useState<string>(hasBankDetails ? 'cheque' : '');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showRenewalOptions, setShowRenewalOptions] = useState(false);

  const paymentModes = [
    { label: 'Online (Email Link)', value: 'online' },
    { label: 'Cash Paid at Branch Office', value: 'cash-branch' },
    { label: 'Cheque', value: 'cheque' },
    { label: 'Direct Transfer', value: 'direct-transfer' },
    { label: 'Demand Draft', value: 'demand-draft' },
    { label: 'Fund Transfer (NEFT/RTGS/IMPS)', value: 'fund-transfer' },
    { label: 'NACH - Digital (Auto Debit)', value: 'nach-digital' },
    { label: 'NACH - Physical (Auto Debit)', value: 'nach-physical' },
    { label: 'BIM-ASBA', value: 'bim-asba' },
  ];

  const handleConfirm = () => {
    if (selectedPayment && selectedRenewal) {
      onSelect(selectedPayment, selectedRenewal);
    }
  };

  const maskAccountNumber = (accountNumber: string) => {
    if (!accountNumber || accountNumber.length < 4) return accountNumber;
    const last4 = accountNumber.slice(-4);
    const masked = '****' + last4;
    return masked;
  };

  const getPaymentMethodDisplay = (value: string) => {
    const mode = paymentModes.find(m => m.value === value);
    return mode ? mode.label : value;
  };

  const getPaymentMethodDetails = () => {
    if (hasBankDetails && bankDetails) {
      const maskedAccount = maskAccountNumber(bankDetails.accountNumber || '');
      console.log('Masked account:', maskedAccount);
      // Shorten bank name if too long and show account number
      const bankName = bankDetails.bankName.length > 15 
        ? bankDetails.bankName.substring(0, 15) + '...' 
        : bankDetails.bankName;
      return `${bankName} ${maskedAccount}`;
    }
    return 'Selected payment method';
  };

  const CreditCardIcon = () => (
    <div className="h-[19.99px] overflow-clip relative w-full">
      <div className="absolute inset-[12.5%_4.17%]">
        <div className="absolute inset-[-5.56%_-4.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9904 16.6587">
            <path d={svgPaths.pd5f5500} stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_54.17%_66.67%_20.83%]">
        <div className="absolute inset-[-0.83px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66347 1.66587">
            <path d="M0.832935 0.832935H5.83053" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[37.5%] top-1/2">
        <div className="absolute inset-[-0.83px_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.9952 1.66587">
            <path d="M0.832935 0.832935H9.16227" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_62.5%_33.33%_20.83%]">
        <div className="absolute inset-[-0.83px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.9976 1.66587">
            <path d="M0.832935 0.832935H4.16467" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="px-5 w-full mb-4"
    >
      {/* Premium Summary Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="bg-gradient-to-br from-[#c21b17] to-[#a01613] rounded-[16px] p-5 mb-4 text-white shadow-lg"
      >
        <p className="text-sm opacity-90 mb-3">Premium Summary</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-xs opacity-80 mb-1">Sum Assured</p>
            <p className="text-2xl font-bold">₹{sumAssured.toLocaleString('en-IN')}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80 mb-1">Premium Amount</p>
            <p className="text-2xl font-bold">₹{premium.toLocaleString('en-IN')}</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-lg px-3 py-2">
          <p className="text-xs opacity-90">Select your payment methods below</p>
        </div>
      </motion.div>

      {/* Payment & Renewal Details Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="bg-white rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] border-[1.18px] border-[rgba(0,0,0,0.1)] p-4 mb-4"
      >
        {/* Title */}
        <h3 className="font-['Inter:Semibold',sans-serif] font-semibold text-[16px] text-[#1a1a1a] mb-4">
          Payment & Renewal Details
        </h3>

        {/* Payor Name */}
        <div className="mb-4">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#737373] mb-1">
            Payor Name
          </p>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#1a1a1a]">
            {payorName}
          </p>
        </div>

        {/* Payment Mode Section */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#737373]">
              Payment Mode
            </p>
            <button
              onClick={() => setShowPaymentOptions(!showPaymentOptions)}
              className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#c21b17] hover:underline"
            >
              {showPaymentOptions ? 'Cancel' : 'Change'}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!showPaymentOptions && selectedPayment ? (
              <motion.div
                key="payment-display"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[10px] border-[1.18px] border-[rgba(0,0,0,0.1)] p-3 overflow-hidden"
              >
                <div className="flex items-center gap-2.5">
                  <div className="bg-white rounded-[8px] border-[1.18px] border-[rgba(0,0,0,0.1)] w-[38.321px] h-[38.321px] flex items-center justify-center p-2 shrink-0">
                    <CreditCardIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#1a1a1a] mb-0.5">
                      {getPaymentMethodDisplay(selectedPayment)}
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#737373]">
                      {getPaymentMethodDetails()}
                    </p>
                  </div>
                  <div className="bg-[#d4f4dd] rounded-[6px] px-2 py-1 shrink-0">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[#15803d]">
                      Active
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="payment-options"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 overflow-hidden"
              >
                {paymentModes.map((mode, index) => (
                  <motion.button
                    key={mode.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedPayment(mode.value);
                      setShowPaymentOptions(false);
                    }}
                    className={`bg-white transition-colors relative flex items-center justify-between px-4 py-3 rounded-[10px] border-[1.18px] ${
                      selectedPayment === mode.value 
                        ? 'border-[#c21b17] bg-[#fff7f7]' 
                        : 'border-[rgba(0,0,0,0.1)] hover:bg-[#fff7f7]'
                    }`}
                  >
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-gray-800 text-left">
                      {mode.label}
                    </p>
                    {selectedPayment === mode.value && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c21b17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Renewal Mode Section */}
        <div className="mb-0">
          <div className="flex items-center justify-between mb-2">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#737373]">
              Renewal Mode
            </p>
            <button
              onClick={() => setShowRenewalOptions(!showRenewalOptions)}
              className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#c21b17] hover:underline"
            >
              {showRenewalOptions ? 'Cancel' : 'Change'}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!showRenewalOptions && selectedRenewal ? (
              <motion.div
                key="renewal-display"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[10px] border-[1.18px] border-[rgba(0,0,0,0.1)] p-3 overflow-hidden"
              >
                <div className="flex items-center gap-2.5">
                  <div className="bg-white rounded-[8px] border-[1.18px] border-[rgba(0,0,0,0.1)] w-[38.321px] h-[38.321px] flex items-center justify-center p-2 shrink-0">
                    <CreditCardIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#1a1a1a] mb-0.5">
                      {getPaymentMethodDisplay(selectedRenewal)}
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#737373]">
                      {getPaymentMethodDetails()}
                    </p>
                  </div>
                  <div className="bg-[#d4f4dd] rounded-[6px] px-2 py-1 shrink-0">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[#15803d]">
                      Active
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="renewal-options"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 overflow-hidden"
              >
                {paymentModes.filter(mode => mode.value !== 'bim-asba').map((mode, index) => (
                  <motion.button
                    key={`renewal-${mode.value}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedRenewal(mode.value);
                      setShowRenewalOptions(false);
                    }}
                    className={`bg-white transition-colors relative flex items-center justify-between px-4 py-3 rounded-[10px] border-[1.18px] ${
                      selectedRenewal === mode.value 
                        ? 'border-[#c21b17] bg-[#fff7f7]' 
                        : 'border-[rgba(0,0,0,0.1)] hover:bg-[#fff7f7]'
                    }`}
                  >
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-gray-800 text-left">
                      {mode.label}
                    </p>
                    {selectedRenewal === mode.value && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c21b17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Confirm Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleConfirm}
        disabled={!selectedPayment || !selectedRenewal}
        className={`w-full py-4 rounded-[12px] font-['Inter:Semibold',sans-serif] font-semibold text-[15px] transition-all shadow-md ${
          selectedPayment && selectedRenewal
            ? 'bg-gradient-to-r from-[#c21b17] to-[#a01613] text-white hover:shadow-lg'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {selectedPayment && selectedRenewal ? 'Confirm Payment Methods' : 'Please select both payment methods'}
      </motion.button>
    </motion.div>
  );
}