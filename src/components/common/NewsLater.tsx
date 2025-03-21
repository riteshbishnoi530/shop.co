"use client";
import { GmailIcon } from "@/utils/icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const NewsLater = () => {
    const form = useRef<HTMLFormElement>(null);
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState<string>("");

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    const validateEmail = (email: string) => {
        if (!email) {
            return "Please enter your email address";
        }
        if (!emailRegex.test(email)) {
            return "Please enter a valid email address";
        }
        return "";
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailError = validateEmail(userEmail);
        if (emailError) {
            setError(emailError);
            return;
        }

        setError("");

        try {
            if (form.current) {
                await emailjs.sendForm(
                    "service_vubs3cl",
                    "template_lb5dsje",
                    form.current,
                    "aKxsD9MpKuUVpMSgP"
                );
                setUserEmail("");
                toast.success("Successfully subscribed to the newsletter!");
            }
        } catch (error) {
            toast.error("Failed to send email. Please try again.");
            console.error("EmailJS Error:", error);
        }
    };

    return (
        <div className="flex max-lg:flex-col justify-between max-lg:gap-8 w-full">
                <div className="max-w-[600px]">
                    <h3 className="text-white font-integral text-[40px] max-sm:text-[32px] max-lg:text-4xl max-md:text-custom-3xl font-bold">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h3>
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-[349px] max-lg:mx-auto flex flex-col gap-3.5 w-full"
                >
                    <div>
                        <div className="w-full py-3 px-[17px] bg-white items-center rounded-[62px] flex">
                            <div className="flex w-full items-center gap-3.5">
                                <label className="cursor-pointer" htmlFor="mail">
                                    <GmailIcon />
                                </label>
                                <div className="w-full">
                                    <input
                                        className="w-full text-black/40 outline-none leading-[100%]"
                                        id="mail"
                                        placeholder="Enter your email address"
                                        type="email"
                                        name="email"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        {error && (
                            <p className="text-red-900 font-bold max-sm:text-sm pt-1 pl-2 ">
                                {error}
                            </p>
                        )}
                    </div>
                    <button className="cursor-pointer bg-white rounded-[62px] font-medium leading-[100%] w-full py-3.5">
                        Subscribe to Newsletter
                    </button>
                </form>
        </div>
    );
};

export default NewsLater;
