import { toast, ToastT } from "sonner";
import { CheckCircle2, XCircle, Info } from "lucide-react";

interface CustomToastProps {
  title: string;
  description?: string;
  action?: ToastT["action"];
}

// Success Toast Component
export const ToastSuccess = ({
  title,
  description,
  action,
}: CustomToastProps) => {
  return toast.success(
    <div className="flex items-start">
      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
      <div>
        <p className="font-semibold">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>,
    { action }
  );
};

// Error Toast Component
export const ToastError = ({
  title,
  description,
  action,
}: CustomToastProps) => {
  return toast.error(
    <div className="flex items-start">
      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
      <div>
        <p className="font-semibold">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>,
    { action }
  );
};

// Info Toast Component
export const ToastInfo = ({ title, description, action }: CustomToastProps) => {
  return toast(
    <div className="flex items-start">
      <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
      <div>
        <p className="font-semibold">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>,
    { action }
  );
};
