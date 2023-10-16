import { ContactUsFormValues } from "@/app/contact-us/component/contact-us-form";
import { sendMail } from "@/app/contact-us/service/sendEmail";

export async function POST(request: Request) {
  const res: unknown = await request.json();
  try {
    await sendMail(
      "Contact Us Submission",
      "affri03@gmail.com",
      res as ContactUsFormValues
    );
    return Response.json({ data: { message: "Success" } });
  } catch (err) {
    console.log("DEBUG ~ file: route.tsx:14 ~ POST ~ err:", err);
    return Response.json({ data: { message: "Failed" } }, { status: 400 });
  }
}
