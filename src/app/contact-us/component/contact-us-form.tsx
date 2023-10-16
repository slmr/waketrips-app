"use client";

import Reveal from "@/components/custom/reveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, "min 2"),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  partySize: z.string().optional(),
  budgetPerPerson: z.array(z.number()),
  message: z.string().optional(),
  contactConsent: z.boolean().default(false).optional(),
});

export type ContactUsFormValues = z.infer<typeof formSchema>;

const ContactUsForm = () => {
  const router = useRouter();
  const form = useForm<ContactUsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      partySize: "",
      contactConsent: false,
      budgetPerPerson: [500000, 2000000],
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: ContactUsFormValues) {
    const response = await fetch("/api/contact-us", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push("/enquiry-success");
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    }
  }

  const disabledForm = isSubmitting;
  return (
    <div className="container max-w-4xl mt-14 md:mt-20">
      <div className="border border-yellow-500 p-6">
        <Reveal wrapper hidden={{ y: -50 }}>
          <h1 className="font-serif text-3xl text-center mb-6">Enquire</h1>
        </Reveal>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase font-light font-mono tracking-wider">
                    First Name*
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled={disabledForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase font-light font-mono tracking-wider">
                    Last Name*
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled={disabledForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase font-light font-mono tracking-wider">
                    Email*
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled={disabledForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase font-light font-mono tracking-wider">
                    Telepone
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled={disabledForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="partySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase font-light font-mono tracking-wider">
                    Party Size
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" disabled={disabledForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetPerPerson"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel className="uppercase font-light font-mono tracking-wider">
                      Budget Per Person
                    </FormLabel>
                    <div className="text-yellow-500 mt-0">{`Rp.${field?.value?.[0].toLocaleString()} - Rp.${field?.value?.[1].toLocaleString()}`}</div>
                  </div>

                  <FormControl>
                    <Slider
                      value={field.value}
                      min={200000}
                      max={10000000}
                      step={100000}
                      disabled={disabledForm}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
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
                <FormItem>
                  <FormLabel className="uppercase font-light font-mono tracking-wider">
                    Your Message
                  </FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} disabled={disabledForm} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={disabledForm}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-light font-sans tracking-wider">
                      I&apos;m happy for you to contact me using the above
                      details
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <div className="grid place-items-center">
              <Button
                size="lg"
                variant="outline"
                type="submit"
                className="uppercase font-light tracking-wider px-20"
                disabled={disabledForm}
              >
                {disabledForm && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactUsForm;
