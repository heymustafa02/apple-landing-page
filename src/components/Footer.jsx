import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <a href="https://www.apple.com/in/retail/" target='_blank'>
            <span className="underline text-blue">
            Find an Apple Store {' '}
            </span></a>
            or {' '}
           <a href="https://www.apple.com/in/buy/corporateresellers/" target='_blank'> 
           <span className="underline text-blue">
            other retailer
            </span>{' '}</a>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 88888-88888
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 <a href="https://mustafa-mallebhari.vercel.app" target='_blank' className='underline'>Mustafa Mallebhari</a>. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-2 gap-y-1">
  {footerLinks.map((link, i) => (
    <React.Fragment key={link}>
      <a
        href={`/${link.toLowerCase()}`}
        className="font-semibold text-gray text-xs"
      >
        {link}
      </a>
      {/* Show separator after every link except the last one */}
      {i !== footerLinks.length - 1 && (
        <span className="text-gray text-xs">|</span>
      )}
    </React.Fragment>
  ))}
</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

{/* <div className="flex flex-1 justify-center max-sm:hidden">
  {navLists.map((nav, index) => (
    <a
      key={index}
      href={`/${nav.toLowerCase()}`}  // Example: dynamically creating links
      className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
    >
      {nav}
    </a>
  ))}
</div> */}