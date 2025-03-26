/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/router";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Section from "../Section";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  number: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),
  social: z.string().min(5, {}),
  QuestionA: z.string().min(1, {
    message: "This field is required.",
  }),
  QuestionB: z.string().min(1, {
    message: "This field is required.",
  }),
  QuestionC: z.string().min(1, {
    message: "This field is required.",
  }),
});
const currentRoles = [
  "Art Director",
  "Senior Designer",
  "Midweight Designer",
  "Junior Designer",
  "Artworker",
  "Illustrator",
  "Copywriter",
  "Marketing Manager",
  "Social Media Manager",
  "Web Designer",
  "Web Developer",
  "Office Manager",
  "Account Manager",
  "Account Executive",
];
const mediums = [
  "Facebook",
  "BBC News",
  "Its' all fake news",
  "Twitter",
  "Instagram",
  "Gulf News",
  "The Daily Show",
  "Guardian",
  "Cosmopolitan",
  "The Kardashians tell me all I need to know",
  "104.1",
  "103.8",
  "The New Yorker",
  "Snapchat",
  "Time Out",
  "I bury my head in the sand",
];

function CareerForm({ jobs }) {
  const JobsData = jobs.jobs;
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentRole, setCurrentRole] = useState("");
  const [medium, setMedium] = useState("");
  const [firstTextArea, setFirstTextArea] = useState("");
  const [secondTextArea, setSecondTextArea] = useState("");
  const [thirdTextArea, setThirdTextArea] = useState("");
  const [fourthTextArea, setFourthTextArea] = useState("");
  const [content, setContent] = React.useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileError, setFileError] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      social: "",
      QuestionA: "",
      QuestionB: "",
      QuestionC: "",
      filename: null,
    },
  });

  const fileRef = form.register("file");

  const onSubmit = async (data) => {

    if (!fileName) {
      setFileError("File is required.");
      return;
    }

    setIsLoading(true);

    const base64Content = content.split(",")[1];

    const formData = {
      name: data.name,
      email: data.email,
      number: data.number,
      social: data.social,
      QuestionA: data.QuestionA,
      QuestionB: data.QuestionB,
      QuestionC: data.QuestionC,
      role: selectedRole,
      currentRole: currentRole,
      medium: medium,
      firstTextArea: firstTextArea,
      secondTextArea: secondTextArea,
      thirdTextArea: thirdTextArea,
      fourthTextArea: fourthTextArea,
      filename: fileName,
      content: base64Content,
    };

    try {
      const res = await fetch("/api/careerform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      } else {
        form.reset();
        setIsLoading(false);
        router.push("/thank-you");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleValueChange = (value) => {
    setSelectedRole(value);
  };
  const handleCurrentRoleChange = (value) => {
    setCurrentRole(value);
  };
  const handleMediumChange = (value) => {
    setMedium(value);
  };
  const handleFirstTextAreaChange = (e) => {
    setFirstTextArea(e.target.value);
  };
  const handleSecondTextAreaChange = (e) => {
    setSecondTextArea(e.target.value);
  };
  const handleThirdTextAreaChange = (e) => {
    setThirdTextArea(e.target.value);
  };
  const handleFourthTextAreaChange = (e) => {
    setFourthTextArea(e.target.value);
  };

  const onAddFileAction = (e) => {
    const files = e.target.files;
  
    if (!files || files.length === 0) {
      return;
    }
  
    const file = files[0];
  
    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size is too large. Maximum allowed size is 10MB.");
      return;
    } else {
      setFileError(null);
    }
  
    const reader = new FileReader();
    reader.onload = (r) => {
      const fileContent = r.target.result.toString();
      setContent(fileContent);
      setFileName(file.name);
    };
  
    reader.readAsDataURL(file);
  };  

  return (
    <>
      <Section id="CareerForm" className="bg-black">
        <div className="container h-full relative z-[4] pt-[5%] pb-[10%] mobile:py-[20%] bg-white">
          <div className="w-screen absolute translate-x-[-5vw] bg-[#111111] h-[30%] top-[50%] z-[-2] translate-y-[-50%] mobile:translate-x-[-7vw] tablet:translate-x-[-8vw]"></div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full h-full border-[1.5px]  rounded-[50px] border-black/20 bg-white py-[5vw] px-[5vw] flex flex-wrap gap-x-[7.8vw] gap-y-[3vw] border-opacity-45 drop-shadow-[50px] shadow-2xl  mobile:rounded-[10px] mobile:gap-y-[12vw] mobile:border-[1px] mobile:py-[12vw] mobile:shadow-none tablet:rounded-[15px] tablet:gap-y-[4vw] tablet:py-[7vw] tablet:gap-x-[7vw] career-form fadeup"
            >
              <div className="w-full  career-input border-b border-black flex flex-col gap-[0.5vw]">
                <Label htmlFor="roles" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[5vw] tablet:text-[2.2vw]">
                  Which role are you applying for?
                </Label>
                <Select onValueChange={handleValueChange}>
                  <SelectTrigger className="w-full placeholder:text-[2vw]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      {JobsData &&
                        JobsData.map((job, index) => (
                          <SelectItem key={index} value={job.title} name="roles">
                            {job.title}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full justify-between mobile:flex-col mobile:gap-[8vw]">
                <div className="w-[45%] flex flex-col mobile:w-full">
                  <Label htmlFor="name" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                    Name*
                  </Label>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="h-full career">
                        <FormControl>
                          <Input placeholder="" {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-[45%] flex flex-col mobile:w-full">
                  <Label htmlFor="email" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                    Email*
                  </Label>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="h-full career">
                        <FormControl>
                          <Input placeholder="" {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between mobile:flex-col mobile:gap-[8vw]">
                <div className="w-[45%] flex flex-col mobile:w-full">
                  <Label htmlFor="number" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                    Phone
                  </Label>
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="h-full career">
                        <FormControl>
                          <Input placeholder="" {...field} type="number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-[45%] flex flex-col mobile:w-full">
                  <Label htmlFor="social" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                    Your website / blog / Instagram / Facebook (basically, how
                    can we stalk you?) :
                    <span className="tablet:hidden text-[1.3vw] tablet:text-[2.2vw] career-form-span mobile:text-[4.5vw]">
                      {/* Facebook? */}
                    </span>
                  </Label>
                  <FormField
                    control={form.control}
                    name="social"
                    render={({ field }) => (
                      <FormItem className="h-full career">
                        <FormControl>
                          <Input placeholder="" {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="w-[100%] flex flex-col">
                <Label htmlFor="QuestionA" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                  Let&apos;s forget about propriety and talk money - what&apos;s the bare
                  minimum you can survive on monthly? :
                </Label>
                <FormField
                  control={form.control}
                  name="QuestionA"
                  render={({ field }) => (
                    <FormItem className="h-full career">
                      <FormControl>
                        <Input placeholder="" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[100%] border-b border-black">
                <Label htmlFor="textarea" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                  Why Yellow? (write a short paragraph on makes you want to work
                  with us) :
                </Label>
                <FormField
                  name="textarea"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder=""
                          name="textarea"
                          value={firstTextArea}
                          onChange={handleFirstTextAreaChange}
                          className="mt-[1vw]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[100%] border-b border-black">
                <Label htmlFor="secondtextarea" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                  Tell us about your past - just the work part, for now! :
                </Label>
                <FormField
                  name="secondtextarea"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder=""
                          name="secondtextarea"
                          value={secondTextArea}
                          onChange={handleSecondTextAreaChange}
                          className="mt-[1vw]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[45%]  career-input border-b border-black flex flex-col gap-[1vw] mobile:w-full ">
                <Label htmlFor="currentrole" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[5vw] tablet:text-[2.2vw]">
                  Which one of these best describes your current role?
                </Label>
                <Select onValueChange={handleCurrentRoleChange}>
                  <SelectTrigger className="w-full placeholder:text-[2vw]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>current role</SelectLabel>
                      {currentRoles.map((roles, index) => (
                        <SelectItem value={roles} key={index} name="currentrole">
                          {roles}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[45%]  career-input border-b border-black flex flex-col gap-[1vw] mobile:w-full">
                <Label htmlFor="mediums" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[5vw] tablet:text-[2.2vw]">
                  How do you keep up with what&apos;s going on in the world? :
                </Label>
                <Select onValueChange={handleMediumChange}>
                  <SelectTrigger className="w-full placeholder:text-[2vw]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Mediums</SelectLabel>
                      {mediums.map((medium, index) => (
                        <SelectItem value={medium} key={index} name="mediums">
                          {medium}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[100%] border-b border-black">
                <Label htmlFor="thirdtextarea" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                  If you could work on any brand or client in the world, which
                  would it be and why? :
                </Label>
                <FormField
                  name="thirdtextarea"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder=""
                          name="thirdtextarea"
                          value={thirdTextArea}
                          onChange={handleThirdTextAreaChange}
                          className="mt-[1vw]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

              </div>
              <div className="w-[100%] border-b border-black">
                <Label htmlFor="fourthtextarea" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] tablet:text-[2.2vw]">
                  What&apos;s the coolest thing you&apos;ve ever done? :
                </Label>
                <FormField
                  name="fourthtextarea"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder=""
                          name="fourthtextarea"
                          value={fourthTextArea}
                          onChange={handleFourthTextAreaChange}
                          className="mt-[1vw]"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[100%] flex flex-col">
                <Label htmlFor="QuestionB" className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]">
                  When you&apos;re not hailing Helvetica as the second coming, which
                  typeface do you champion? :
                </Label>
                <FormField
                  control={form.control}
                  name="QuestionB"
                  render={({ field }) => (
                    <FormItem className="h-full flex justify-center career flex-col">
                      <FormControl>
                        <Input placeholder="" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[100%] flex flex-col">
                <Label
                  htmlFor="QuestionC"
                  className="text-[1.3vw] mb-[1vw] font-medium mobile:text-[4.5vw] mobile:mb-[2vw] tablet:text-[2.2vw]"
                >
                  Which is your favourite film ever?
                </Label>
                <FormField
                  control={form.control}
                  name="QuestionC"
                  render={({ field }) => (
                    <FormItem className="h-full flex justify-center career flex-col">
                      <FormControl>
                        <Input placeholder="" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full docs flex flex-col gap-[0.5vw] mobile:gap-[4vw]">
                <Label htmlFor="docs" className="text-[1.3vw] font-medium mobile:text-[4.5vw] tablet:text-[2.2vw]">
                  Time to do the needful - upload your CV here & cross those
                  fingers!
                </Label>
                <FormField
                  name="docs"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <p className="text-gray-600 text-[1.2vw] font-medium mobile:text-[3.5vw] tablet:text-[1.8vw]">
                          Only docx or pdf files are allowed and max file size is <b>10MB</b> 
                        </p>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="w-full h-full border border-dashed border-black rounded-lg py-[3vw] mobile:h-[70vw] mobile:mt-[10vw] tablet:h-[30vw] tablet:mt-[4vw]">
                  <Label
                    htmlFor="filename"
                    className="w-full h-full bg-white flex flex-col items-center justify-center rounded-lg cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center py-4 px-5">
                      <svg
                        className="w-16 h-16 text-primary mobile:w-20 mobile:h-20 tablet:w-24 tablet:h-24"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 55 43"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.99896 6.82256L13.5247 5.53845V32.7692L10.9976 33.3139C7.69143 34.0265 4.44992 31.867 3.83386 28.5415L1.10852 13.83C0.49886 10.539 2.69967 7.38551 5.99896 6.82256Z"
                          strokeWidth="2"
                        />
                        <path
                          d="M49.001 6.82256L41.4753 5.53845V32.7692L44.0024 33.3139C47.3086 34.0265 50.5501 31.867 51.1661 28.5415L53.8915 13.83C54.5011 10.539 52.3003 7.38551 49.001 6.82256Z"
                          strokeWidth="2"
                        />
                        <g filter="url(#filter0_dd_25_3290)">
                          <rect
                            x="12.6226"
                            width="29.7544"
                            height="36"
                            rx="6"
                          />
                          <rect
                            x="13.6226"
                            y="1"
                            width="27.7544"
                            height="34"
                            rx="5"
                            strokeWidth="2"
                          />
                        </g>
                        <path
                          d="M36.3769 35H18.6226C15.8611 35 13.6226 32.7614 13.6226 30V28.4605L12.8873 27.7827L13.6226 28.4605L23.1497 18.1243L30.2892 26.5354C31.0913 27.4804 32.5509 27.4757 33.347 26.5257L37.1281 22.0133L41.3769 26.6939V30C41.3769 32.7614 39.1384 35 36.3769 35Z"
                          strokeWidth="2"
                        />
                        <path
                          d="M34.1646 11.5384C34.1646 13.3025 32.7738 14.6922 31.1072 14.6922C29.4407 14.6922 28.0498 13.3025 28.0498 11.5384C28.0498 9.77427 29.4407 8.38452 31.1072 8.38452C32.7738 8.38452 34.1646 9.77427 34.1646 11.5384Z"
                          strokeWidth="2"
                        />
                        <defs>
                          <filter
                            id="filter0_dd_25_3290"
                            x="9.62256"
                            y="0"
                            width="35.7544"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_25_3290"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect1_dropShadow_25_3290"
                              result="effect2_dropShadow_25_3290"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow_25_3290"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <p className="text-lg text-black/50 font-medium mobile:text-xl tablet:text-2xl">
                        {fileName || "Upload CV"}
                      </p>
                    </div>
                  </Label>
                  <FormField
                    control={form.control}
                    name="filename"
                    render={({ field }) => (
                      <FormItem className="h-full flex justify-center career flex-col">
                        <FormControl>
                          <Input
                            id="filename"
                            name="filename"
                            {...fileRef}
                            type="file"
                            accept=".pdf,.docx"
                            className="hidden"
                            onChange={onAddFileAction}
                          />
                        </FormControl>
                        {fileError && (
                          <p className="text-red-600 text-[1.1vw] tablet:text-[2vw] mobile:text-[3vw] mt-[1vw] mobile:mt-[4vw]">
                            {fileError}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center fadeup mt-[3vw]">
                <Button
                  aria-label="submit"
                  type="submit"
                  className="text-[1.4vw] px-[1.4vw] py-[0.3vw] min-w-[10vw] text-body border-black border bg-white hover:text-white rounded-full min-h-[3.5vw] flex gap-[2vw] group tablet:text-[2vw] tablet:min-w-[15vw] tablet:px-[3vw] tablet:py-[1vw] mobile:text-[4.5vw] mobile:px-[4.5vw] mobile:h-[12vw] mobile:min-w-16 overflow-hidden relative"
                >
                  <div className="overflow-hidden flex items-center justify-center gap-[0.7vw] w-full mobile:gap-[2vw]">
                    {!isLoading ? (
                      <>
                        <span className="absolute block w-full h-full scale-y-0 bg-body group-hover:scale-y-100 left-0 top-0 origin-bottom transition-all duration-700 ease-link" />
                        <span
                          data-text={"Submit"}
                          className="relative inline-block after:content-[attr(data-text)] after:absolute after:top-[130%] after:left-0 group-hover:translate-y-[-130%] transition-transform duration-1000 ease-link"
                        >
                          Submit
                        </span>
                        <svg
                          className="relative -rotate-[135deg] w-[1.1vw] h-[1.1vw] tablet:w-[2vw] tablet:h-[2vw] mobile:w-[5vw] mobile:h-[5vw] "
                          width="19"
                          height="23"
                          viewBox="0 0 19 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out"
                            d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                            fill="currentColor"
                          />
                          <path
                            className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out"
                            d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                            fill="currentColor"
                          />
                        </svg>
                      </>
                    ) : (
                      <div className="absolute top-0 left-0 bg-body w-full h-full flex justify-center items-center">
                        <Image
                          src="/button-loading.png"
                          alt="button-loading"
                          className="animate-spin invert"
                          width={30}
                          height={30}
                        />
                      </div>
                    )}
                  </div>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Section>
    </>
  );
}

export default CareerForm;
