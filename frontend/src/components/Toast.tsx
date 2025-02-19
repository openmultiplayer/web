import React, { useEffect, useState } from "react";

interface Toast {
  id: string;
  message: string;
  title: string;
  type: "success" | "error";
}

class ToastEventManager {
  private listeners: ((toast: Toast) => void)[] = [];

  addListener(listener: (toast: Toast) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  emit(toast: Toast) {
    this.listeners.forEach((listener) => listener(toast));
  }
}

const toastEvents = new ToastEventManager();

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const unsubscribe = toastEvents.addListener((toast) => {
      setToasts((prev) => [toast, ...prev]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 100000);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          <div className="toast-header">
            <h4 className="toast-title">{toast.title}</h4>
            <button
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
              className="toast-close"
              aria-label="Close toast"
            >
              ×
            </button>
          </div>
          <p className="toast-message">{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export const showToast = ({
  message,
  title,
  type = "success",
}: {
  message: string;
  title: string;
  type: "success" | "error";
}) => {
  const toast: Toast = {
    id: Math.random().toString(36).substr(2, 9),
    message,
    title,
    type,
  };

  toastEvents.emit(toast);
};
