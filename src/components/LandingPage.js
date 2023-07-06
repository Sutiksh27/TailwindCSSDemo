import React from 'react'
import DiscordLogo from "../assets/discord_main_logo.svg"
import CenterBgLanding from "../assets/center_bg_landing_header.svg"
import LeftBgLanding from "../assets/left_bg_landing_header.svg"
import RightBgLanding from "../assets/right_bg_landing_header.svg"
import InviteOnly from "../assets/invite_only_landing.svg"
import HangOut from "../assets/hanging_out_easy_landing.svg"
import Fandom from "../assets/fandom_landing.svg"
import JustChilling from "../assets/just_chiling_landing.svg"

function LandingPage() {
  return (
    <div className='block w-screen h-screen'>
      <div className='flex flex-row w-screen h-12 bg-[#404eed] text-white justify-evenly'>
        <div className='flex flex-row space-x-4 p-2'>
          <img className="" src={DiscordLogo}/>
        </div>
        <div className='m-3 text-white font-bold font-roboto'>
          <ul className='flex flex-row list-none text-base '>
            <li className='px-2'>Download</li>
            <li className='px-2'>Nitro</li>
            <li className='px-2'>Safety</li>
            <li className='px-2'>Support</li>
            <li className='px-2'>Blog</li>
            <li className='px-2'>Careers</li>
          </ul>
        </div>
        <button className='w-16 h-8 m-2 bg-white rounded-xl text-black border-none font-normal'>Login</button>
      </div>
      <div className='flex flex-1 w-screen h-4/5 bg-[#404eed]'>
        <img className="object-cover relative z-10" src={CenterBgLanding}/>
        <div className='absolute flex flex-row w-full h-auto z-20 justify-between bottom-24'>
          <img className='md:bg-cover w-1/3 h-1/3 relative top-12' src={LeftBgLanding}/>
          <img className='md:bg-cover w-1/3 h-1/3 relative top-4' src={RightBgLanding}/>
        </div>
        <div className='absolute flex z-30 w-full h-full m-8 justify-center'>
          <div className='flex flex-col w-1/2'>
            <span className='text-white font-bold text-5xl place-self-center font-sans'>IMAGINE A PLACE...</span>
            <span className='text-center m-8 text-white font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere necessitatibus laboriosam distinctio debitis. Minus, commodi fugit voluptatum sunt quam, amet aut laboriosam provident aperiam, cupiditate nostrum debitis fuga maiores?</span>
            <div className='flex flex-row'>
              <button className='bg-white w-2/3 h-8 rounded-3xl m-2'>Download for Mac</button>
              <button className='bg-gray-800 w-2/3 h-8 rounded-3xl text-white m-2'>Open Discord in your browswer</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1 w-screen h-4/5 bg-white'>
        <div className='flex flex-row w-4/5 justify-between m-2 x-4'>
          <img className="object-cover" src={InviteOnly}/>
          <span className='text-justify flex font-semibold items-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a similique omnis reiciendis adipisci ea architecto illo, at qui, natus repellat! Earum eligendi quod unde reiciendis aut? Autem, totam deleniti.</span>
        </div>
      </div>
      <div className='flex flex-1 w-screen h-4/5 bg-gray-100'>
        <div className='flex flex-row w-full justify-between m-2 space-x-4'>
        <span className='text-justify flex w-1/3 font-semibold items-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a similique omnis reiciendis adipisci ea architecto illo, at qui, natus repellat! Earum eligendi quod unde reiciendis aut? Autem, totam deleniti.</span>
          <img className="object-cover" src={HangOut}/>
        </div>
      </div>
      <div className='flex flex-1 w-screen h-4/5 bg-white'>
        <div className='flex flex-row w-4/5 justify-between m-2 x-4'>
          <img className="object-cover" src={Fandom}/>
          <span className='text-justify flex font-semibold items-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a similique omnis reiciendis adipisci ea architecto illo, at qui, natus repellat! Earum eligendi quod unde reiciendis aut? Autem, totam deleniti.</span>
        </div>
      </div>
      <div className='flex flex-1 w-screen h-full bg-gray-100'>
        <div className='flex flex-col w-full justify-between my-12 space-y-10 space-x-4'>
          <span className='text-center flex w-full font-bold justify-center mx-auto text-4xl'>RELIABLE TECH FOR STAYING CLOSE</span>
          <div className='w-full justify-center'>
            <span className='text-center flex w-1/2 font-normal mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a similique omnis reiciendis adipisci ea architecto illo, at qui, natus repellat! Earum eligendi quod unde reiciendis aut? Autem, totam deleniti.</span>
          </div>
          <img className="object-contain p-24" src={JustChilling}/>
          <span className='text-center flex w-full font-bold justify-center mx-auto text-3xl'>Ready to start your journey?</span>
          <div className='grid w-screen place-items-center'>
            <button className='rounded-3xl bg-[#5865f2] text-white w-1/4 h-12 my-4 justify-center items-center'>Download for Mac</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default LandingPage