"use client"
import React, { useState } from 'react'
import { Tabs, Tab, Divider, Input, Button } from "@nextui-org/react";
import { GoHistory } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


interface TableDataInterface {
    tableData?: any[]
}
function HitoryTable({ tableData }: Readonly<TableDataInterface>) {
    return (
          <Table isStriped aria-label="Billing History">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        {/* <TableColumn>Date</TableColumn> */}
        <TableColumn>Date</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    )
}

const Billing = () => {

    const [paymentInfo, setPaymentInfo] = useState({
        first_name: "",
        last_name: "",
        address: "",
        country: "",
        city: "",
        phone_number: "",
    })

    function onPaymentInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setPaymentInfo({...paymentInfo, [name]: value })
    }

    function onSubmitPaymentInformation(e: React.FormEvent<HTMLFormElement>) {
        if (e) return e.preventDefault();
        return paymentInfo
    }

  return (
      <div className="flex bg-white p-8 w-full space-y-8 flex-col">
        <p className="text-xs font-medium">BILLINGS</p>
        <Divider />   
    <Tabs className="w-full" aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="history"
          className={""}
          title={
            <div className="flex items-center space-x-2">
              <GoHistory/>
              <span>History</span>
            </div>
          }
            >
              <HitoryTable />
        </Tab>
        <Tab
          key="information"
          id="#information"
          title={
            <div className="flex items-center space-x-2">
              <IoIosInformationCircle/>
              <span>Information</span>
            </div>
          }
              >
                 <div className="space-y-8">
                    <div className="bg-blue-200  flex flex-wrap items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 p-4 w-full rounded-[10px]">
                    <IoIosInformationCircle/>
                    <p>{"You are currently on the free plan. "}</p>

                    <Button color="primary">Upgrade</Button>
                  </div>
                  <form onSubmit={onSubmitPaymentInformation} className='space-y-6'>
                      <h2 className='text-xl font-medium'>Payment Information</h2>

                          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                            <Input name="first_name" onChange={onPaymentInfoChange} label="First Name" labelPlacement='outside' variant="bordered" /> 
                            <Input name="last_name" onChange={onPaymentInfoChange} label="Last Name" labelPlacement='outside' variant="bordered" />
                          </div> 

                          <Input className="w-full mt-3" onChange={onPaymentInfoChange} variant="bordered" label="Address" name="address" labelPlacement='outside' /> 

                          <div className="grid grid-cols-2 w-full gap-8">
                              <Input name="city" onChange={onPaymentInfoChange} label="City, state or region" labelPlacement='outside' variant="bordered"/> 
                              <Input  name="postal_code" onChange={onPaymentInfoChange} label="Postal Code" labelPlacement='outside' variant="bordered"/> 
                          </div>

                          <Input name="country" onChange={onPaymentInfoChange} label="Country" labelPlacement='outside' variant="bordered" /> 
                          <Input  name="phone_number" onChange={onPaymentInfoChange} label="Phone Number" labelPlacement='outside' variant="bordered" /> 

                          <Button color="primary" type="submit">Save</Button>
                  </form>
                 </div>
        </Tab>
       <Tab
          key="method"
          title={
            <div className="flex items-center space-x-2">
              <CiCreditCard1/>
              <span>Method</span>
            </div>
          }
              >
                   <div className="bg-blue-200  flex flex-wrap items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 p-4 w-full rounded-[10px]">
                        <IoIosInformationCircle/>
                        <p>{"You have no payment method setup, as you are currently on the free plan. "}</p>

                        <Button color="primary">Upgrade</Button>
                    </div>
              </Tab>
             
      </Tabs>
    </div>
  )
}

export default Billing