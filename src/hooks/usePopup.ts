import { useState, useCallback } from "react";

interface PopupState {
  isOpen: boolean;
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

export const usePopup = () => {
  const [popup, setPopup] = useState<PopupState>({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
    duration: 5000
  });

  const showPopup = useCallback((
    title: string, 
    message: string, 
    type: "success" | "error" | "warning" | "info" = "success",
    duration?: number
  ) => {
    setPopup({
      isOpen: true,
      title,
      message,
      type,
      duration: duration || 5000
    });
  }, []);

  const hidePopup = useCallback(() => {
    setPopup(prev => ({ ...prev, isOpen: false }));
  }, []);

  const showSuccess = useCallback((title: string, message: string, duration?: number) => {
    showPopup(title, message, "success", duration);
  }, [showPopup]);

  const showError = useCallback((title: string, message: string, duration?: number) => {
    showPopup(title, message, "error", duration);
  }, [showPopup]);

  const showWarning = useCallback((title: string, message: string, duration?: number) => {
    showPopup(title, message, "warning", duration);
  }, [showPopup]);

  const showInfo = useCallback((title: string, message: string, duration?: number) => {
    showPopup(title, message, "info", duration);
  }, [showPopup]);

  return {
    popup,
    showPopup,
    hidePopup,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
}; 