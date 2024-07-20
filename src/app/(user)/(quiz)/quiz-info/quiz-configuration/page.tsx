import React from 'react'
import { RadioGroup, Radio, Button, Switch, Divider } from "@nextui-org/react";

const page = () => {
  return (
    <div>
      <div className="bg-white w-full p-8 space-y-8">
        <p className="text-xs font-medium">CONFIGURATION</p>
        <form className='space-y-6'>
          <RadioGroup
            label="Choose one of the following"
          // value={selected}
          // onValueChange={setSelected}
          >
            <Radio value="random">Random questions and answers order</Radio>
            <Radio value="ordered">Fixed questions and answers order</Radio>
          </RadioGroup>
      

          <Divider />
          
        <p className="text-xs font-medium">ACCESS</p>
        <div className='space-y-6'>
          <RadioGroup
            label="Access type"
            // value={accessType}
            // onChange={setAccessType}
          >
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
            <Radio value="restricted">Restricted</Radio>
          </RadioGroup>

           <Button color="primary" type="submit">Save</Button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default page