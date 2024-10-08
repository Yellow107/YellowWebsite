/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
  detail: z.string().min(50, {
    message: "Detail must be at least 50 characters.",
  }),
  other: z.string().min(0, {
  }),
});

const options = ["Google", "Instagram", "LinkedIn", "Word of mouth"];
const services = ["Brand Identity", "Strategy", "Naming", "Advertising", "Digital", "Other"]; // Include "Other" as a service option

export default function ContactForm() {
  const [selectedValue, setSelectedValue] = useState("Google");
  const [isLoading, setIsLoading] = useState(false);
  const [checkedState, setCheckedState] = useState(
    Object.fromEntries(services.map((service) => [service, false]))
  );
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      detail: "",
      other: ""
    },
  });

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleCheckboxChange = (service) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    // console.log("Form Submitted Successfully:", data);
    router.push("/thank-you");
    const formData = {
      name: data.name,
      email: data.email,
      number: data.number,
      detail: data.detail,
      source: selectedValue,
      services: checkedState,
      other: data.other
    };

    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to send message");
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const getClassName = (value) =>
    selectedValue === value ? "text-white border-opacity-100" : "text-black border-opacity-100";

  const getClassNames = (isChecked) =>
    isChecked ? "text-white border-opacity-100" : "text-black border-opacity-100";


  return (
    <section className="px-[5vw] pt-[10%] py-[5%] tablet:py-[10%] mobile:pt-[25%]" id="contact-form">
      <h3
        data-para-anim
        className="text-[4vw] leading-[1.3] font-display w-[70%] mb-[7vw] tablet:text-[5.4vw] mobile:text-[10vw] mobile:w-full"
      >
        Connect with our team to bring your ideas to life.
      </h3>

      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="form flex flex-wrap gap-y-[2vw] mobile:gap-[2.5vw] mobile:gap-y-[7vw] mobile:py-[10vw] tablet:gap-y-[2vw] fadeup">


          <p className="text-[2.5vw] font-medium leading-[1.4] tablet:text-[3.5vw] mobile:text-[6.4vw]">
            Hello! My name is
          </p>
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="h-full flex justify-center flex-col">
                <FormControl>
                  <Input placeholder="Type your name*" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw] tablet:mt-[3vw] tablet:mb-[1vw]">and</p>
          <p className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw] tablet:mt-[3vw] tablet:mb-[1vw] tablet:ml-2">
            I found you using
          </p>

          {/* Source Option filed  */}
          <FormField
            control={form.control}
            name="source"
            render={() => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    value={selectedValue}
                    onValueChange={handleValueChange}
                    className="flex gap-[1.5vw] px-[1vw] tablet:h-[4vw] mobile:flex-col mobile:gap-[3vw] "
                  >
                    {options.map((option) => (
                      <div
                        key={option}
                        className={`min-w-[10vw] group relative overflow-hidden h-[3.5vw] px-[1.5vw] py-[0.3vw] border-[1px] border-black rounded-full tablet:min-w-[15vw] tablet:h-[5.5vw] mobile:min-w-[85vw] mobile:min-h-[14vw] mobile:flex mobile:justify-start mobile:gap-[3vw] mobile:px-[6vw] ${getClassName(
                          option
                        )} flex justify-center items-center gap-[1vw] cursor-pointer`}
                        onClick={() => handleValueChange(option)}
                        data-state={selectedValue === option ? "checked" : "unchecked"}
                      >
                        <span
                          className={`w-full h-full absolute bottom-0 left-0 block origin-bottom transition-all duration-300 ease-out bg-black z-[-1]  ${selectedValue === option ? "scale-y-[1]" : "scale-y-0"
                            }`}
                        />
                        <RadioGroupItem value={option} id={option} />
                        <div className='w-[1vw] h-[1vw] rounded-full bg-white border border-black mobile:w-[3vw] mobile:h-[3vw]'></div>
                        <Label htmlFor={option} className="text-[1.2vw] cursor-pointer tablet:text-[2vw] mobile:text-[4vw]">
                          {option.replace("-", " ")}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw] tablet:mt-[3vw] tablet:mb-[1vw]">
            I’m looking for Service:
          </p>

          {/* Service Selection filed  */}
          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-[1vw] px-[2vw] justify-center items-center mobile:flex-col mobile:gap-[3vw] flex-wrap">
                    {services.map((service) => (
                      <Checkbox
                        key={service}
                        className={`flex items-center relative overflow-hidden justify-center py-[0.5vw] px-[1.4vw] min-w-[10vw] min-h-[3.4vw] border-[1px] tablet:min-w-[14vw] tablet:min-h-[5.5vw] border-black rounded-full cursor-pointer tablet:space-x-0 tablet:h-[4vw] mobile:w-[85vw] mobile:h-[14vw] mobile:justify-start mobile:px-[6vw] ${getClassNames(
                          checkedState[service]
                        )}`}
                        onClick={() => handleCheckboxChange(service)}
                        data-state={checkedState[service] ? "checked" : "unchecked"}
                      >
                        <span
                          className={`w-full h-full absolute bottom-0 left-0 block origin-bottom transition-all duration-300 ease-out bg-black z-[-1] ${checkedState[service] ? "scale-y-[1]" : "scale-y-0"}`}
                        />
                        <label className="text-[1.2vw] font-medium leading-none cursor-pointer peer-disabled:opacity-70 tablet:text-[2vw] tablet:ml-0 mobile:text-[4.5vw]">
                          {service}
                        </label>
                        <input
                          type="hidden"
                          name={service}
                          value={checkedState[service] ? "true" : "false"}
                        />
                      </Checkbox>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Conditionally render the "Other" input field if "Other" is selected */}
          {checkedState["Other"] && (
            <div className="w-[87%] overflow-hidden ml-[1.5vw]">
              <FormField
                control={form.control}
                name="other"
                render={({ field }) => (
                  <FormItem className="detail h-full flex justify-center flex-col">
                    <FormControl>
                      <Input placeholder="Type your other service details*" {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <p className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw] tablet:mt-[3vw] tablet:mb-[1vw]">
              Feel free to reach me at
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="form-detail h-full flex justify-center flex-col tablet:mt-[3vw]">
                <FormControl>
                  <Input
                    placeholder="Type your Contact Email*"
                    {...field}
                    type="email"
                    className="w-[35vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:hidden">
            and
          </p>
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem className="form-detail h-full flex justify-center flex-col">
                <FormControl>
                  <Input
                    placeholder="Type your Contact Number*"
                    {...field}
                    type="number"
                    className="w-[35vw]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-[2.5vw] font-medium tablet:text-[3.5vw] mobile:text-[6.4vw] tablet:mt-[3vw]">
            I would like to share more about my project:
          </p>
          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem className=" detail h-full flex justify-center flex-col">
                <FormControl>
                  <Input placeholder="Type your Project Details*" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center items-center  mt-[3vw] mobile:justify-start">
            <Button
              type="submit"
              className="text-[1.4vw] px-[1.4vw] py-[0.6vw] min-w-[12vw] bg-body mobile:bg-white border border-body mobile:text-black  rounded-full min-h-[3.5vw] flex gap-[0.5vw] hover:bg-body mobile:hover:bg-white group tablet:text-[2vw] tablet:min-w-[15vw] tablet:px-[3vw] tablet:h-[6vw] tablet:py-[1.2vw] mobile:text-[4vw] mobile:px-[6vw] mobile:h-[14vw]"
            >
              <div className="overflow-hidden flex items-center gap-[0.5vw] w-full mobile:gap-[2vw] relative">
              <span className="absolute block w-full h-full scale-y-0 bg-body group-hover:scale-y-100 left-0 top-0 origin-bottom transition-all duration-700 ease-link overflow-hidden" />
                    {!isLoading ? (
                      <span
                        data-text={"Send Message"}
                        className="relative inline-block after:content-[attr(data-text)] after:absolute after:top-[130%] after:left-0 group-hover:translate-y-[-130%] transition-transform duration-1000 ease-link"
                      >
                        Send Message
                      </span>
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
                   {!isLoading?(<svg
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
                    </svg>):(<></>)}
               
              </div>
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
