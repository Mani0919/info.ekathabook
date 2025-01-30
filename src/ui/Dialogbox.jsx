import React from 'react';

export const Dialog = ({ children, open, onOpenChange }) => {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div className="relative bg-transparent rounded-lg w-full max-w-lg">
        {children}
      </div>
    </div>
  );
};

export const DialogTrigger = ({ children, onClick }) => {
  return React.cloneElement(children, { onClick });
};

export const DialogContent = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};