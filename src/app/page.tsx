import Navbar from "@/components/Nav";
import { Typography } from "@mui/material";
// import Image from "next/image";

const currentDate = new Date().getFullYear();
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-screen w-full">
      <Navbar isDashboard={false} />
      <main className="flex flex-col gap-8  items-center ">
        <div className="flex divide-x mx-20 divide-gray-300">
          <div className="flex flex-col gap-8 p-20">
            <header className="text-center font-semibold underline">Influencer</header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, nunc nec ultricies.
            </p>
          </div>
          <div className="flex flex-col gap-8 p-20">
            <header className="text-center font-semibold underline">Brands</header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, nunc nec ultricies.
            </p>
          </div>
        </div>
      </main>
      <footer className="sticky bottom-0 w-full p-4 text-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://trendai.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          &copy; {currentDate} TrendAI
        </a> */}
        <Typography>
          &copy; {currentDate} TrendAI
        </Typography>
      </footer>
    </div>
  );
}
