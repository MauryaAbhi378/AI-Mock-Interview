import { Toaster } from "src/components/ui/sonner";

export const ToastProvider = () => {
  return (
    <Toaster
      theme="light"
      richColors
      position="top-right"
      className="bg-neutral-100 shadow-lg"
    />
  );
};
