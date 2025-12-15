import React from "react";
import { User, Mail, Lock, MessageSquare, UserLock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Authbackground from "@/components/ui/Authbackground.jsx";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const SignupPage = () => {
  const navigate  = useNavigate()


  const handelNavigate = () => {
    navigate('/login')
  }



  return (
    <div className="bg-[#1A1D2E] w-full h-full relative overflow-hidden">
      <Authbackground className="" />
      
      {/* CHAT LOGO */}
      <motion.div className="pl-15 absolute top-18 lg:top-15 flex flex-col gap-1   justify-center z-[9999] "
      initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{
          duration:0.8,
          ease:"easeInOut"
        }}
      >
        <span className="bg-[#5d68f3] p-2 rounded-xl size-12 flex items-center justify-center mb-1">
          <MessageSquare className="text-white " />
        </span>
        <h1 className="text-white text-2xl">NEXUS CHAT</h1>
      </motion.div>

      <div className="flex p-13  absolute mt-10 lg:items-center w-full gap-10 z-[9999] items-center justify-between mt-1 items-center">
        
        {/* CREATE ACCOUNT FORM DIV */}
        <motion.div className="w-full md:w-[70%] lg:w-[45%]"
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{
          duration:0.8,
          ease:"easeInOut"
        }}
        >
          <Card className="w-full md:w-[100%] lg:w-[100%] border-none bg-[#272b3d] text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Get Started with your free Account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-3">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-gray-400">
                    Full Name
                  </label>
                  <div className="w-full relative">
                    <User className="absolute left-3 top-1/4 z-[9999] text-gray-400" />
                    <input
                      id="fullname"
                      type="fullname"
                      placeholder="john Doe"
                      required
                      className="w-full pl-13 p-3 rounded-xl bg-[#1e2139] focus:border-blue-900 focus:ring-blue-900 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-gray-400">
                    E-mail
                  </label>
                  <div className="w-full relative">
                    <Mail className="absolute left-3 top-1/4 z-[9999] text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      required
                      className="w-full pl-13 p-3 rounded-xl bg-[#1e2139] focus:border-blue-900 focus:ring-blue-900 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-gray-400">Password</label>
                  <div className="w-full relative">
                    <Lock className="absolute left-3 top-1/4 z-[9999] text-gray-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="*********"
                      required
                      className=" w-full p-3 pl-13 rounded-xl bg-[#1e2139] focus:border-blue-900 focus:ring-blue-900 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-gray-400">Confirm Password</label>
                  <div className="w-full relative">
                    <Lock className="absolute left-3 top-1/4 z-[9999] text-gray-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="*********"
                      required
                      className=" w-full p-3 pl-13 rounded-xl bg-[#1e2139] focus:border-blue-900 focus:ring-blue-900 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full py-5 bg-[#5d68f3] shadow-lg hover:shadow-[0_0_20px_5px_rgba(93,104,243,0.7)] hover:bg-[#7c80f7] transition-all duration-300"
            >
              Login
            </Button>
            <div>
              <span>Dont't have an account</span>
              <Button
                className="items-end cursor-pointer text-[#5d68f3] hover:shadow-[#5d68f3]"
                variant="link"
                onClick={handelNavigate}
              >
                Sign Up
              </Button>
            </div>
          </CardFooter>
        </Card>
        </motion.div>
        
        {/* SIDE ANIMATION SKALITION */}
        <motion.div className="w-[47%] hidden md:flex flex-col gap-3 p-10 rounded-xl bg-[#272b3d]"
        initial={{opacity:0,x:40}}
        animate={{opacity:1,x:0}}
        transition={{
          duration:0.8,
          ease:"easeInOut"
        }}
        >
          <div className="flex w-full items-center justify-center gap-8">
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
          </div>
          <div className="flex w-full items-center justify-center gap-8">
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
          </div>
          <div className="flex w-full items-center justify-center gap-8">
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
            <Skeleton className="h-26 w-26 rounded-xl bg-[#5d67f358]" />
          </div>

          <div className="flex flex-col items-center gap-1 mt-3">
            <div className="bg-[#242631] border border-blue-900 p-4 rounded-2xl animate-pulse">
              <UserLock className="text-[#5d68f3] size-9" />
            </div>
            <p>Join our community</p>
            <span className="text-gray-400">
              Connect with friends, share moments and stay in touch
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
