"use client"
import React, { useState } from 'react'
import Editor from '@/components/editor'
import { Select, SelectItem, Button, Input, RadioGroup, Radio } from '@nextui-org/react';
import { UploadAudio } from './ui/audio-uploader';
import { BsInfoCircleFill } from 'react-icons/bs';
 // const { NEXT_PUBLIC_TINY_EDITOR_KEY } = process.env;


interface QuestionEditorProps {
    questionNumber?: number;
}
const NEXT_PUBLIC_TINY_EDITOR_KEY = "9szoylxn2yd0e95ammvxy357k8cjdf9phj7qhl4h85d6xml3";

const ShortAnswer = () => {
    const [shortAnswers, setShortAnswers] = useState<string[]>([""]);

    const handleAddAnswerField = () => {
        setShortAnswers([...shortAnswers, ""]);
    };

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...shortAnswers];
        newAnswers[index] = value;
        setShortAnswers(newAnswers);
    };

    return (
        <div className="w-full space-y-4">
            {shortAnswers.map((answer, index) => (
                <Input
                    key={index}
                    value={answer}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="w-full"
                />
            ))}
            <Button variant="bordered" onClick={handleAddAnswerField}>Add Answer</Button>
        </div>
    );
};


const MultipleChoice = () => {

    // select more than one answer 
      const [choices, setChoices] = useState<string[]>([""]);

    const handleAddChoiceField = () => {
        setChoices([...choices, ""]);
    };

    const handleChoiceChange = (index: number, value: string) => {
        const newChoices = [...choices];
        newChoices[index] = value;
        setChoices(newChoices);
    };
    return (
        <div className="space-y-4 w-full">
             {choices.map((choice, index) => (
            <Editor key={index} apiKey={NEXT_PUBLIC_TINY_EDITOR_KEY as string} height={200} />
              ))}
            <Button variant="bordered" onClick={handleAddChoiceField}>Add Choice</Button>
        </div>
    )
}

const SingleChoice = () => {
    // select only one answer;

      const [choices, setChoices] = useState<string[]>([""]);

    const handleAddChoiceField = () => {
        setChoices([...choices, ""]);
    };

    const handleChoiceChange = (index: number, value: string) => {
        const newChoices = [...choices];
        newChoices[index] = value;
        setChoices(newChoices);
    };

    return (
        <div className="space-y-4 w-full">
           {choices.map((choice, index) => (
            <Editor key={index} apiKey={NEXT_PUBLIC_TINY_EDITOR_KEY as string} height={200} />
              ))}
            <Button variant="bordered" onClick={handleAddChoiceField}>Add Choice</Button>
        </div>

    )
}

const TrueOrFalse = () => {
    return (
        <div className="space-y-4 w-full">
            <Editor apiKey={NEXT_PUBLIC_TINY_EDITOR_KEY as string} initialValue='True' height={200} />
            <Editor apiKey={NEXT_PUBLIC_TINY_EDITOR_KEY as string} initialValue='False' height={200} />
        </div>
    )
}
const QuestionEditor: React.FC<QuestionEditorProps> = ({ questionNumber }) => {

    const [selectedQuestionType, setSelectedQuestionType] = useState("Text");
    const [answerType, setAnswerType] = useState("Single Choice")

    const allAnswersType = [
        {
        name: "Single Choice",
        render: <SingleChoice />
    }, 
    {
        name: "Multiple Choice",
        render: <MultipleChoice />
    },
     {
        name: "Short answer",
        render: <ShortAnswer />
     },
     {
        name: "True/False",
        render: <TrueOrFalse />
     }
    ]

    const handleQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedQuestionType(e.target.value)
    }

    const handleAnswerType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setAnswerType(value)
    }
   const getAnswerField = allAnswersType.find((field) => field.name === answerType)
    return (
        <div className="h-full space-y-8">

            <div className="space-y-4">
                {/* question */}
                <Select
                    label="Question Type"
                    className="max-w-xs"
                    defaultSelectedKeys={["Text"]}
                    
                    onChange={handleQuestionType}
                >
                    <SelectItem key={"Audio"}>
                        Audio
                    </SelectItem>

                    <SelectItem key={"Text"}>
                        Text
                    </SelectItem>
                </Select>
                {
                    selectedQuestionType === "Audio" ? 
                        <UploadAudio /> :
                        <Editor apiKey={NEXT_PUBLIC_TINY_EDITOR_KEY as string} height={200} />
                }
                
            </div>

            {/* answers */}

            <div className='space-y-6'>
                <h2 className='font-semibold text-xl'>Answers</h2>
                <Select
                    label="Question Type"
                    className="max-w-xs"
                    defaultSelectedKeys={["Single Choice"]}
                    onChange={handleAnswerType}
                >
                    {
                        allAnswersType.map((answers) => (
                            <SelectItem key={answers.name}>
                                {answers.name}
                            </SelectItem>

                        ))
                    }
                </Select>

                <section className="w-full">
                   { getAnswerField?.render }

                </section>

                {/* score settings and Configuration */}
                <section className="w-full space-y-6 h-full">
                    <h2 className='font-semibold text-lg'>Score Configuration</h2>
                    <span className="bg-blue-200 flex items-center space-x-4 p-3 w-full rounded-[10px]">
                        <BsInfoCircleFill />
                        <p className="text-sm">Enter the score point for each of the questions. </p>
                    </span>
                    
                    <div className="">
                        <Input label="Type Score Point"  variant="bordered" className="focus:outline-blue-500 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </section>
            </div>


        </div>
    )
}

export default QuestionEditor