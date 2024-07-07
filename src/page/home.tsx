"use client"

import { useState } from 'react';
import { Button, Input, Radio } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Link from "next/link"
const Home = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("");
    const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedAgeGroup) {
      sessionStorage.setItem('ageGroup', selectedAgeGroup);
      router.push("/sign-in")
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen w-full grid place-items-center px-6 md:px-0"> 
      <div className="space-y-6">
        <h1 className="font-bold text-2xl text-center">Get Started</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <label className="flex items-center space-x-2">
            <Input
              type="radio"
              name="ageGroup"
              value="Children"
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="mr-2"
            />
            <span>Children</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <Input
              type="radio"
              name="ageGroup"
              value="Teen"
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="mr-2"
              
            />
            <span>Teen</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <Input
              type="radio"
              name="ageGroup"
              value="Super Teen"
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="mr-2"
            />
            <span>Super Teen</span>
          </label>
          
          <Button type="submit" color="primary">
            <Link href="/quiz" passHref>Start Quiz</Link>
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Home;
