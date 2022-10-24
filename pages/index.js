import Head from 'next/head'
import Card from '../components/Card'
import Button from '../util/Button'
import { IoChevronForwardOutline } from "react-icons/io5";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className='flex grow h-screen px-10 py-6'>
      <Head>
        <title>Blockchain App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card >
          <div className='flex flex-col items-center w-full h-full gap-y-6'>
            <h1 className='text-xl font-semibold'>
              Convert to any Crypto Currency
            </h1>
            <Button onClick={() => router.push('/swap') } >
              <p>Convert Now</p>
              <IoChevronForwardOutline className='text-xl'/>
            </Button>
          </div>
        </Card>
      </main>

    </div>
  )
}