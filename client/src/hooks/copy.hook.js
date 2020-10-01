import { useToast } from './toast.hook';

export const useCopy = () => {
  const toast = useToast();
  const copy = async (text) => {
    try {
      navigator.clipboard.writeText(text);
      if(window.M) {
          toast("Сopied!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { copy };
};
