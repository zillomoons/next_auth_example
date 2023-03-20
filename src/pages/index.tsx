import RootLayout from '@/components/layout';

export default function Home() {
  return (
    <RootLayout>
      <div className='h-full w-screen flex justify-center items-center'>
        This is home page. Everyone can see it.
      </div>
    </RootLayout>
  );
}
