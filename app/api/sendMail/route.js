import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const { firstName, lastName, userEmail, jobTitle, phone, message, page } =
    await req.json();

  const capitalized = page.charAt(0).toUpperCase() + page.slice(1);

  // console.log(capitalized);

  // !clientEmail
  if (!userEmail && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `"${userEmail}" <${"support@webibee.com"}>`,
    to: "sales@vbccinstruments.com",
    subject: `New Customer Form Submitted - ${capitalized} Page`,
    html: `
            <div className="block space-y-10 !font-inter">
            <h4 className="!text-lg !capitalize">Hi,</h4>
            <p>You have a new Message from Echelon Zero</p>
            <p>Choose Echelon Zero for Your Product Needs</p>
            <p className="!flex !items-center !justify-center !gap-3">
            <span className="!capitalize !font-bold">Name:</span> 
            ${firstName} ${lastName}
            <p>Email: ${userEmail}</p>
            ${jobTitle ? `<p>Job Title: ${jobTitle}</p>` : ""}
            <p>Phone Number: ${phone}</p>
            <p>Message: ${message}</p>
            </p>
            <br/>
            <br/>
            <p>Thanks</p>
            </div> 
            `,
    // bcc: [process.env.EMAIL_ID],
  };

  const userMailOptions = {
    from: `VBCC "${process.env.EMAIL_ID}" <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Submission",
    html: `<p>Dear ${firstName} ${lastName} Customer,</p>
             <p>Greetings from Echelon Zero!</p>
             <p>We appreciate your interest in our Echelon Zero products and acknowledge receipt of your submission.</p>
                   <p>Thanks & Regards,<br>
                    <br>
          Echelon Zero<br>
           207, 3rd Link Road, XYZ Nagar,<br>
           Chennai, Tamil Nadu 600001<br>
           +91- 9090909090<br></p>`,
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
