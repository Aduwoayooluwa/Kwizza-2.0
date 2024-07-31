import { Input } from '@nextui-org/react';
import React, { useState } from "react";

interface UploadAudioProps {

}

interface SelectedFile {
  file: File | null;
  name: string;
}

export const UploadAudio:React.FC<UploadAudioProps> = ({ }) => {

    const [selectedFile, setSelectedFile] = useState<SelectedFile>({
        file: null,
        name: ""
    })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        setSelectedFile({
            file: file,
            name: file.name
        });
        } else {
        setSelectedFile({
            file: null,
            name: ""
        });
        }
    };


    return (
        <div className="w-full h-[100px] p-6 grid place-items-center border-2 bordeer-dashed rounded-[24px]">
            <Input onChange={handleFileChange} id="upload-audio" className='hidden' type="file" accept=".mp3,audio/*"/>
            <label className="hover:bg-blue-600 p-1 rounded-lg" htmlFor='upload-audio'>Select Audio</label>
            <p>{selectedFile.name}</p>
        </div>
    )
}