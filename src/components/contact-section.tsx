"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_actions";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export function ContactSection({ className }: { className?: string }) {
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      return;
    }

    console.error(result?.error);
  };

  return (
    <div className={cn("py-24", className)}>
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-10 pt-4">
            <div className="text-center sm:text-left space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight">
                Talk to our Growth Specialist
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Submit the form and we will contact you within 24 hours to
                schedule a quick call. We will review your website and
                marketing, then share what we would improve first
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                  <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Free brand audit and recommendations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                  <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  No sales pitches, no pressure
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                  <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Clear plan and priorities after the call
                </span>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-7 pl-0 lg:pl-10">
            <div className="bg-white dark:bg-[#1f2937] p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-3 h-auto rounded-md bg-white dark:bg-[#111827] border-gray-200 dark:border-gray-600 focus-visible:ring-0 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-3 h-auto rounded-md bg-white dark:bg-[#111827] border-gray-200 dark:border-gray-600 focus-visible:ring-0 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Website URL
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-3 h-auto rounded-md bg-white dark:bg-[#111827] border-gray-200 dark:border-gray-600 focus-visible:ring-0 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          How can we help?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="w-full px-4 py-3 h-auto rounded-md bg-white dark:bg-[#111827] border-gray-200 dark:border-gray-600 focus-visible:ring-0 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400 resize-none min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    className="w-full py-6 text-base font-medium cursor-pointer transition-all duration-300 shadow-md mt-2"
                    type="submit"
                  >
                    Get a Free Brand Audit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
