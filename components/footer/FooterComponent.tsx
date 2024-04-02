"use client";

import { Footer } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { customTheme } from "../customize/CustomFlowbiteThemeComponent";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer theme={customTheme.footer}>
      <div className="w-full pb-6">
        <div className=" grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mr-4 sm:pl-10 md:pl-20 lg:pl-40 text-white flex flex-col justify-center items-center">
            <img src="/istad logo.png" alt="" className="mx-auto w-[100px]" />
            <h2 className="m-4">Start your IT career with CSTAD</h2>
          </div>
          <div className="sm:pr-10 md:pr-20 lg:pr-40 w-full  grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 justify-between">
            <div>
              <Footer.Title title="LEARN MORE" className="text-white" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white ">
                  Course
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  IT News
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  Job Oppotunity
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  Privacy Policy
                </Footer.Link>{" "}
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title=" CONTACT US" className="text-white" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white ">
                  (+855) 95-990-910
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  (+855) 93-990-910
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  Telegram
                </Footer.Link>{" "}
                <Footer.Link href="#" className="text-white">
                  Youtube
                </Footer.Link>{" "}
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="FOLLOW US" className="text-white" />{" "}
              <div
                className="w-full h-full min-h-[150px] p-2 flex flex-col justify-between "
                style={{
                  backgroundImage: "url('/slide1.jpg')",
                  backgroundSize: "cover",
                  width: "full",
                  height: "auto",
                  margin: "0 auto",
                }}
              >
                <div className="grid grid-cols-1 justify-center items-center">
                  <img
                    src="./istad logo.png"
                    alt=""
                    className="w-[50px] mx-auto"
                  />
                  <div className="text-white mx-auto">
                    <h3 className="font-semibold text-[1.2rem]">
                      Center Of Science
                    </h3>
                    <h3 className="text-[0.7rem]">9.9 ពាន់អ្នកតាមដាន</h3>
                  </div>
                </div>
                <div>
                  <h2 className="bg-white px-2">តាមដានទំព័រ</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider className="text-white" />{" "}
        <div className="w-full text-white sm:flex sm:items-center sm:justify-between sm:px-10 md:px-20 lg:px-40">
          <Footer.Copyright
            href="#"
            by="CSTAD™  Center of Science and Technology Advanced Development | All Rights Reserved"
            year={2022}
            className="text-white"
          />{" "}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-white" />{" "}
            <Footer.Icon href="#" icon={BsInstagram} className="text-white" />{" "}
            <Footer.Icon href="#" icon={BsTwitter} className="text-white" />{" "}
            <Footer.Icon href="#" icon={BsGithub} className="text-white" />{" "}
            <Footer.Icon href="#" icon={BsDribbble} className="text-white" />{" "}
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
