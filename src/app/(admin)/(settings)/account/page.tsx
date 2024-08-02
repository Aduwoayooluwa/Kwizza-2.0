import React from 'react'
import { Button } from "@nextui-org/react"
import { LiaSignOutAltSolid } from "react-icons/lia";


const Account = () => {
  return (
      <div>
          <div className="bg-white w-full h-full p-8 space-y-8">
              <div className="flex w-full justify-between items-center">
                <p className="text-xs font-medium">PROFILE</p>
              <Button color="primary" className='py-5'>Upgrade</Button>
              </div>

              <div className='h-[1px] bg-gray-200 w-full'></div>

              <form className='space-y-4'>
                  <div className="flex items-center space-x-3">
                      <p>Full name: </p>
                      <p className='font-medium'>{"Ayooluwa Aduwo"}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                      <p>Email Address: </p>
                      <p className='font-medium'>{"aduwoayooluwa@gmail.com"}</p>
                  </div>
                  
                  <div className='h-[1px] bg-gray-200 w-full'></div>
                
                  <div>
                      <Button startContent={<LiaSignOutAltSolid size={22} />} variant="bordered" color="primary">
                          Sign Out
                        </Button>
                  </div> 
              </form>
          </div>
    </div>
  )
}

export default Account