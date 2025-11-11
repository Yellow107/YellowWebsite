/* eslint-disable import/no-anonymous-default-export */
import { Resend } from "resend";
import CareerDetails from "@/components/emailtemplate/CareerDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, number, social , QuestionA , QuestionB , QuestionC , role , currentRole,medium,firstTextArea, secondTextArea, thirdTextArea, fourthTextArea,filename , content, pageUrl} = req.body;

    const { data, error } = await resend.emails.send({
      from: "Yellow <webforms@welcometoyellow.com>",
      to: ["hello@welcometoyellow.com"],
      // from: 'Acme <onboarding@resend.dev>',
      // to: ["hitesh@weareenigma.com"],
      subject: "Career Form Submission - New Application",
      react: CareerDetails({
        userName: name,
        userEmail: email,
        userNumber: number,
        userSocial: social,
        userQuestionA:QuestionA,
        userQuestionB:QuestionB,
        userQuestionC:QuestionC,
        userRole:role,
        userCurrentRole:currentRole,
        userMedium: medium,
        userFirstTextArea: firstTextArea,
        userSecondTextArea: secondTextArea,
        userThirdTextArea: thirdTextArea,
        userFourthTextArea: fourthTextArea,
        userPageUrl: pageUrl,
      }),
      attachments: [
        {
          content,
          filename,
        },
      ],
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};