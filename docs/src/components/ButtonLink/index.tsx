import React from 'react';

interface ButtonProps {
  children: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ children, to }) => {
  return (
    <a href={to} className="button button--primary button--lg" target="_blank">
      {children}
    </a>
  );
};

export default Button;
