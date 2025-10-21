import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.enum(["Performance Marketing", "Content Strategy & Marketing", "Branding", "Web Development", "Email Marketing", "Reporting & Analytics", "Other"]).refine((val) => val !== undefined, {
    message: "Please select a service type",
  }),
  projectSize: z.enum(["<RM5k", "RM5k-RM10k", "RM10k-RM20k", ">RM20k", "Not sure"]).refine((val) => val !== undefined, {
    message: "Please select a project size",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    console.log("Contact form submission received:", validatedData);

    // In a real application, you would integrate with an email service (e.g., SendGrid, Nodemailer),
    // CRM, or database here. For now, we'll just return a success message.

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Validation failed", errors: error.issues }, { status: 400 });
    }
    console.error("Error processing contact form:", error);
    return NextResponse.json({ success: false, message: "An unexpected error occurred." }, { status: 500 });
  }
}
