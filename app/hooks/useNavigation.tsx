import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url, { shallow: true });
  };

  return navigate;
};
