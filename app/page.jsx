
import Feed from "@components/Feed";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className=' head_text text-center'>
   
    <span className='blue_gradient  head_text text-center'>Happy</span>
      <br className='max-md:hidden' />
      <span className='red_gradient text-center'>New </span>
      <br className='max-md:hidden' />
      <span className='blue_gradient  head_text text-center'>year</span>
   
    </h1>
    <p className='desc text-center'>
      Happy New year to all. share your thoughts and plan on new-Year.
      <b>on top right Press the profile picture of your gmail to create posts.</b>
      <b>Press the logo on top-left to go back.</b>
          <br/>press Description button to see more settings.
    </p>
    <br/>
<Link href="/Description" className="black_btn">Description</Link>
    <Feed />
  </section>
);

export default Home;
