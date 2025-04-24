import { useRef, useState } from 'react';

function UseRefOTP() {
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleChange = (newOtp) => {
    setOtp(newOtp);
    if (newOtp.every((digit) => digit !== '')) {
      console.log('Entered OTP:', newOtp.join(''));
    }
  };

  return (
    <div>
      <h2>Enter OTP:</h2>
      <OTPInput length={6} otp={otp} onChange={handleChange} />
    </div>
  );
}

export default UseRefOTP;

function OTPInput({ length, otp, onChange }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      onChange(newOTP);
      if (index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(el) => (inputsRef.current[index] = el)}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{ width: '2rem', textAlign: 'center', marginRight: '0.5rem', backgroundColor: 'gray' }}
        />
      ))}
    </div>
  );
}
