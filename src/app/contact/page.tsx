"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z
    .enum([
      "Performance Marketing",
      "Content Strategy & Marketing",
      "Branding",
      "Web Development",
      "Email Marketing",
      "Reporting & Analytics",
      "Other",
    ])
    .refine((val) => val !== undefined, {
      message: "Please select a service type",
    }),
  projectSize: z
    .enum(["<RM5k", "RM5k-RM10k", "RM10k-RM20k", ">RM20k", "Not sure"])
    .refine((val) => val !== undefined, {
      message: "Please select a project size",
    }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed:", result.message);
        // In a real app, you'd show an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // In a real app, you'd show an error message to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <main className="py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Message sent successfully!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thanks for reaching out! We'll get back to you within 24 hours.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/">Back to homepage</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/insights">Read our insights</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-8">
                Get in touch
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Let's build something{" "}
                <span className="text-primary">great together</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Ready to grow your business? We'd love to hear about your goals
                and see how we can help you achieve them.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-alt py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Your full name"
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            className="text-sm text-destructive"
                            role="alert"
                          >
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="your@email.com"
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            className="text-sm text-destructive"
                            role="alert"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="+60 12-345 6789"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          {...register("company")}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("serviceType", value as any)
                          }
                          aria-label="Select a service type"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Performance Marketing">
                              Performance Marketing
                            </SelectItem>
                            <SelectItem value="Content Strategy & Marketing">
                              Content Strategy & Marketing
                            </SelectItem>
                            <SelectItem value="Branding">Branding</SelectItem>
                            <SelectItem value="Web Development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="Email Marketing">
                              Email Marketing
                            </SelectItem>
                            <SelectItem value="Reporting & Analytics">
                              Reporting & Analytics
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.serviceType && (
                          <p className="text-sm text-destructive">
                            {errors.serviceType.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectSize">Project Size *</Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("projectSize", value as any)
                          }
                          aria-label="Select project size"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<RM5k">
                              Less than RM 5,000
                            </SelectItem>
                            <SelectItem value="RM5k-RM10k">
                              RM 5,000 - RM 10,000
                            </SelectItem>
                            <SelectItem value="RM10k-RM20k">
                              RM 10,000 - RM 20,000
                            </SelectItem>
                            <SelectItem value=">RM20k">
                              More than RM 20,000
                            </SelectItem>
                            <SelectItem value="Not sure">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.projectSize && (
                          <p className="text-sm text-destructive">
                            {errors.projectSize.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your project, goals, or any questions you have..."
                        rows={6}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Get in touch</CardTitle>
                    <CardDescription>
                      Prefer to reach out directly? Here's how you can contact
                      us.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email us</p>
                        <p className="text-sm text-muted-foreground">
                          hello@toggle.solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Based in</p>
                        <p className="text-sm text-muted-foreground">
                          Kuala Lumpur, Malaysia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Why work with us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          People-first approach
                        </p>
                        <p className="text-xs text-muted-foreground">
                          We care about your success, not just our metrics
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Proven results</p>
                        <p className="text-xs text-muted-foreground">
                          Track record of helping businesses grow
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          Transparent communication
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Regular updates and clear reporting
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
