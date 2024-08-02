"use client"
import TimePicker from '@/components/ui/time-picker'
import { Button, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'

const Page = () => {
    const [timeFormat, setTimeFormat] = useState<string>("hh:mm");

    const handleSelectedTimeFromat = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setTimeFormat(value)
    }
    
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow rounded-lg p-8 space-y-8">
                <h1 className="text-xs font-medium">TEST DURATION</h1>
                <form action="" method="post" className="space-y-6">


                    <div className="space-y-5">
                        <Select onChange={handleSelectedTimeFromat} defaultSelectedKeys={["hh:mm"]} label="Select test duration measuring method">
                            <SelectItem key={"hh:mm"}>hh:mm</SelectItem>
                            <SelectItem key={"mm:ss"}>mm:ss</SelectItem>
                        </Select>

                        {
                            timeFormat === "hh:mm" ? (
                                <TimePicker label="Time to complete the test (hh:mm):" name="time-to-complete" />
                            ) : (
                                <TimePicker label="Time to complete the test (mm:ss):" name="time-to-complete" />
                            )
                        }

    
                        
                    </div>

                    <Button color="primary" type="submit">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default Page