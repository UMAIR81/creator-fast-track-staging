import React from "react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useNavigate } from "react-router-dom";
import "../App.css";

const MyCurrentRaffles = ({currentTab,setCurrentTab}) => {

  // console.log("current tab");
  // console.log(currentTab);

  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-8">
        <Card className="w-1/4">
        <CardHeader>
          <CardTitle className="font-heading">Current Raffle</CardTitle>
          <CardDescription className="font-body">Mystery Box Raffle</CardDescription>
          <CardDescription className="font-body">Enter Cost : 50 Credits</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6"></div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 font-heading">
          <Button type="submit" onClick={()=>setCurrentTab("Current Raffle")} className="w-full font-heading bg-[var(--primary-color)]">
            Enter Raffle
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle className="font-heading">Current Raffle</CardTitle>
          <CardDescription className="font-body">Mystery Box Raffle</CardDescription>
          <CardDescription className="font-body">Enter Cost : 50 Credits</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6"></div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" onClick={()=>setCurrentTab("Current Raffle")} className="w-full font-heading bg-[var(--primary-color)]">
            Enter Raffle
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle className="font-heading">Current Raffle</CardTitle>
          <CardDescription className="font-body">Mystery Box Raffle</CardDescription>
          <CardDescription className="font-body">Enter Cost : 50 Credits</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6"></div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" onClick={()=>setCurrentTab("Current Raffle")} className="font-heading w-full bg-[var(--primary-color)]">
            Enter Raffle
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle className="font-heading">Mystery Box 2.0</CardTitle>
          <CardDescription className="font-body">Days left : 3 Days</CardDescription>
          <CardDescription className="font-body">Enter Cost : 110 Credits</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6"></div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 font-heading">
          <Button type="submit" onClick={()=>setCurrentTab("Current Raffle")} className="w-full font-heading bg-[var(--primary-color)]">
            Enter Raffle
          </Button>
        </CardFooter>
      </Card>
      </div>
    </>
  );
};

export default MyCurrentRaffles;
