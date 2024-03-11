import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import QRCodeForm from '@/components/QRCodes/QRCodeForm/QRCodeForm';
import { ScrollArea } from '@/components/ui/scroll-area';
import { qr_code } from '@prisma/client';

type CreateQRCodeDialogProps = {
  title: string;
  subtitle: string;
  qr_code?: qr_code;
};

export default function QRCodeDialog({
  title,
  subtitle,
  qr_code,
}: CreateQRCodeDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        className={`
          rounded-md
          bg-velgreen
          px-4
          py-2
          font-bold
          text-white
          transition
          duration-300
          ease-in-out
          hover:bg-vellightgreen
        `}
      >
        {title}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span
              className={`
                    text-2xl
                    font-bold
                  `}
            >
              {subtitle}
            </span>
          </DialogTitle>
          <DialogDescription>
            This form will allow you to create a new QR code
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className={``}>
          <QRCodeForm qr_code={qr_code} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}