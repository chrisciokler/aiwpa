import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };

  return navigate;
};
