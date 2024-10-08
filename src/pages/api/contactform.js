/* eslint-disable import/no-anonymous-default-export */
import { Resend } from "resend";
import ContactDetails from "@/components/emailtemplate/ContactDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, number, detail, services, source } = req.body;

    // Handle "Other" service selection within the services object
    let otherService = services["Other"] ? req.body.other : null;

    const { data, error } = await resend.emails.send({
      from: "Yellow <webforms@welcometoyellow.com>",
      to: ["hello@welcometoyellow.com"],
      subject: "Contact Form Submission - New Enquiry",
      react: ContactDetails({
        userName: name,
        userEmail: email,
        userNumber: number,
        userDetail: detail,
        userService: services,
        userSource: source,
        userOther: otherService,
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error("API route error:", error);
    res.status(400).json({ error: error.message });
  }
};
