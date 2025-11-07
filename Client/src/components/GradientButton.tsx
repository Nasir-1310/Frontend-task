import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  style
}) => {
  const backgroundStyle = disabled
    ? { backgroundImage: 'linear-gradient(177.43deg, #DDDDDD 10.06%, #919893 62.94%)', ...style }
    : { backgroundImage: 'linear-gradient(177.43deg, #5C8FF7 10.06%, #276AEE 62.94%)', ...style };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? 'w-full' : 'w-auto min-w-[91px]'}
        h-[40px]
        rounded-[120px]
        flex items-center justify-center
        border border-[#1556D84D]
        px-5 py-3
        transition-all duration-200
        hover:opacity-90
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={backgroundStyle}
    >
      <span
        className="font-medium text-white flex items-center gap-1.5"
        style={{
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default GradientButton;