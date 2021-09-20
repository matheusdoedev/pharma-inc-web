import { toast } from 'react-toastify';

function handleCopyToClipboard(text: string): void {
  navigator.clipboard.writeText(text);
  toast.success('Link copiado!');
}

export default handleCopyToClipboard;
