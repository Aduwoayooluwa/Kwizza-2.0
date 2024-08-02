"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input, Button, Divider } from "@nextui-org/react"
import { FaEyeSlash } from "react-icons/fa";

const Settings = () => {
    const [formValues, setFormValues] = useState({
        current_password: "",
        new_password: "",
        new_email: "",
        confirm_new_email: ""
    })

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        if (e) e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        if (e) e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    function onSavePassword(e: FormEvent<HTMLFormElement>) {
        if (e) e.preventDefault();

        const { current_password, new_password } = formValues;
        const payload = { current_password, new_password };

        return payload
    }

    function onSaveEmail(e: FormEvent<HTMLFormElement>) {
        if (e) e.preventDefault();

        const { new_email } = formValues;
        const payload = { new_email };
        return payload;
    }

  return (
      <div>
          <div className="bg-white p-8 w-full space-y-8 ">
              <div>
                  <p className="text-xs font-medium">Configure Password</p>
                  
                    <form className="space-y-6" onSubmit={onSavePassword}>
                      <Input color="default" variant="underlined" onChange={onChangePassword}
                          name={'current_password'} className="w-full"
                          label={"Current Password"} labelPlacement="inside" 
                      />
                      
                      <Input color="default" variant="underlined"
                          name="new_password" onChange={onChangePassword}
                          label="New Password" labelPlacement="inside"
                          aria-label="New Password" className="w-full"
                          endContent={<FaEyeSlash  />}
                        />

                    <Button color="primary" type="submit">Save</Button>
                </form>
              </div>
            <Divider />
              <div>
                  <p className="text-xs font-medium">Configure Email Address</p>

                  <form className="space-y-6" onSubmit={onSaveEmail}>
                      <Input color="default" variant="underlined" onChange={onChangeEmail}
                          name={'new_email'} className="w-full"
                          label={"New email"} labelPlacement="inside" 
                      />
                      
                      <Input color="default" variant="underlined"
                          name="confirm_new_email" onChange={onChangeEmail}
                          label="Confirm New Email" labelPlacement="inside"
                          aria-label="Confirm New Email" className="w-full"
                        />

                    <Button color="primary" type="submit">Save</Button>
                  </form>
              </div>

          </div>
    </div>
  )
}

export default Settings