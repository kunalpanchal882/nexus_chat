import React from "react";
import { MessageSquare, Mail, Lock } from "lucide-react";
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
import { motion} from 'framer-motion'

const LoginPage = () => {
  const navigate = useNavigate()

   const handelNavigate = () => {
    navigate('/signup')
  }

  return (
    <div className="bg-[#1A1D2E] w-full min-h-screen p-[5rem]">
      <Authbackground />
      <div className="flex flex-col items-center  w-full">

        {/* CHAT LOGO */}
        <motion.div className="absolute top-40 lg:top-[15%] md:top-40 flex items-center flex-col gap-2 justify-center z-[9999] "
        initial={{opacity:0,x:-20}}
        animate={{opacity:1,x:0}}
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

        {/* LOGIN FORM DIV */}
        <motion.div className="flex absolute w-full md:w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] justify-evenly mt-10 items-center"
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{
          duration:0.8,
          ease:"easeInOut"
        }}
        >
          <Card className="w-full max-w-sm border-none bg-[#272b3d] text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
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

      </div>
    </div>
  );
};

export default LoginPage;
