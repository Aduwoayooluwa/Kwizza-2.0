"use client"
import React from 'react'
import { Button } from '@nextui-org/react';
import QuestionEditor from '@/components/question-editor';

//const NEXT_PUBLIC_TINY_EDITOR_KEY = "9szoylxn2yd0e95ammvxy357k8cjdf9phj7qhl4h85d6xml3"
const Page = () => {
const { NEXT_PUBLIC_TINY_EDITOR_KEY } = process.env;
console.log(NEXT_PUBLIC_TINY_EDITOR_KEY)

  return (
    <div>
      <div className="p-6 w-full h-full bg-white rounded-[24px]">
        <QuestionEditor questionNumber={1}/>
      </div>

      <div className="flex items-center py-6 space-x-6 w-full">
        <Button color="primary">Save</Button>
        <Button color="primary" variant="bordered">Save and Continue</Button>
        <Button color="danger">Exit</Button>
      </div>
    </div>
  )
}

export default Page
