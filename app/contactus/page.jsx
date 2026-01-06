"use client";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import FormSubmit from "@/Components/ContactUs.jsx/formSubmit";
import ContactUsMaps from "@/Components/ContactUs.jsx/map";
export default function ContactPage() {
  return (
    <>
      <ContactUsMaps />
      <FormSubmit />
    </>
  );
}
