import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"


export default function FooterComponent() {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/" className='text-lg sm:text-xl  whitespace-nowrap self-center font-semibold dark:text-white'>
              <span className='px-1.5 py-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg mr-1'>Mern</span>
              BLogs</Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About 1</Footer.Link>
                <Footer.Link href="/about">About 2</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link target="_blank" href="https://github.com/nitindahiya199">Github</Footer.Link>
                <Footer.Link target="_blank" href="https://www.instagram.com/programmerjokesofficial/">Instagram</Footer.Link>
                <Footer.Link target="_blank" href="https://www.facebook.com/jokesvala/">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#!">Privacy Policy</Footer.Link>
                <Footer.Link href="#!">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#!"
            by="Nitin"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:nt-0 sm:justify-center">
            <FooterIcon href="https://www.facebook.com/jokesvala/" icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com/programmerjokesofficial/" icon={BsInstagram} />
            <FooterIcon href="#!" icon={BsTwitter} />
            <FooterIcon href="https://github.com/nitindahiya199" icon={BsGithub} />
            <FooterIcon href="#!" icon={BsDribbble} />
          </div>
        </div>

      </div>
    </Footer>
  )
}
