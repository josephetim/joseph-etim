"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/reveal";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

const collaborationTypes = [
  "Product engineering",
  "Frontend leadership",
  "Performance & reliability",
  "AI tooling",
  "Other",
] as const;

export function ContactSection() {
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      collaborationType: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSentSuccessfully(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL;

    if (!serviceId || !templateId || !publicKey || !toEmail) {
      toast.error(
        "Email delivery is not configured. Please contact Joseph by email.",
      );
      return;
    }

    const formattedMessage = `
New portfolio contact message

Name: ${values.name}
Email: ${values.email}
Collaboration Type: ${values.collaborationType || "Not specified"}

Message:
${values.message}
`.trim();

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          reply_to: values.email,
          message: formattedMessage,
          collaboration_type: values.collaborationType || "Not specified",
          to_email: toEmail,
        },
        { publicKey },
      );

      toast.success("Message sent. Joseph will get back to you shortly.");
      setSentSuccessfully(true);
      reset();
    } catch {
      toast.error(
        "Your message could not be sent. Please try again or email Joseph directly.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="section-space pb-16"
      aria-labelledby="contact-title"
    >
      <div className="container-shell">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface/70 shadow-quiet backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="flex flex-col bg-slate-950 p-7 text-slate-50 sm:p-10 lg:p-12">
              <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-indigo-300">
                05 · Contact
              </p>
              <h2
                id="contact-title"
                className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl"
              >
                Let&apos;s build something remarkable together.
              </h2>
              <p className="mt-6 max-w-md leading-8 text-slate-400">
                Available for select opportunities in high-performance
                web/mobile, AI tooling, frontend leadership, and systems
                stabilization.
              </p>

              <div className="mt-12 space-y-3">
                <ContactLink
                  href="mailto:josephetim211@gmail.com"
                  icon={Mail}
                  label="josephetim211@gmail.com"
                />
                <ContactLink
                  href="https://www.linkedin.com/in/josephetim"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <ContactLink
                  href="https://github.com/josephetim"
                  icon={Github}
                  label="GitHub"
                />
              </div>

              <div className="mt-auto pt-14 text-xs leading-5 text-slate-500">
                Based in Nigeria · Working remotely across time zones
              </div>
            </Reveal>

            <Reveal className="p-6 sm:p-10 lg:p-12" delay={0.08}>
              {sentSuccessfully ? (
                <div className="mb-8 rounded-2xl border border-teal-500/30 bg-teal-500/10 p-4 text-sm text-ink">
                  Your message has been sent successfully.
                </div>
              ) : null}
              <form
                onSubmit={handleSubmit(onSubmit, (formErrors) => {
                  const firstError = Object.values(formErrors)[0]?.message;
                  if (firstError) toast.error(String(firstError));
                })}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      autoComplete="name"
                      placeholder="Your name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="form-input"
                    />
                  </Field>
                </div>
                <Field
                  label="Type of collaboration"
                  error={errors.collaborationType?.message}
                >
                  <select
                    {...register("collaborationType")}
                    className="form-input appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    {collaborationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Tell me about the product, problem, or opportunity."
                    className="form-input min-h-36 resize-y py-3"
                  />
                </Field>
                <div className="hidden" aria-hidden="true">
                  <label>
                    Website
                    <input
                      {...register("website")}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <span className="mt-2 block">{children}</span>
      {error && (
        <span className="mt-1.5 block text-xs text-red-500">{error}</span>
      )}
    </label>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:bg-white/[0.06] hover:text-white"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.06] text-indigo-300">
        <Icon className="h-4 w-4" />
      </span>
      {label}
    </a>
  );
}
