import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  date: z.string().min(1, "Date is required"),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().optional()
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "2",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Received",
      description: "We will confirm your reservation shortly.",
    });
    form.reset();
  }

  return (
    <div className="bg-background min-h-screen pt-20">
      <Navbar />
      
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12 pt-10">
                <div>
                    <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Reservations</h1>
                    <p className="text-white/60 text-lg">
                        We recommend booking at least two weeks in advance for weekend seatings.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-primary text-sm uppercase tracking-widest mb-2">Location</h3>
                        <p className="text-white text-lg">123 Culinary Avenue<br/>New York, NY 10012</p>
                    </div>
                     <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-primary text-sm uppercase tracking-widest mb-2">Contact</h3>
                        <p className="text-white text-lg">+1 (212) 555-0199<br/>reservations@lumiere.com</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-secondary/20 p-8 md:p-12 border border-white/5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white/80">Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} className="bg-transparent border-white/20 text-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white/80">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@example.com" {...field} className="bg-transparent border-white/20 text-white focus:border-primary" />
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
                                        <FormLabel className="text-white/80">Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+1 234 567 890" {...field} className="bg-transparent border-white/20 text-white focus:border-primary" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white/80">Preferred Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} className="bg-transparent border-white/20 text-white focus:border-primary invert-calendar-icon" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="guests"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white/80">Guests</FormLabel>
                                        <FormControl>
                                            <Input type="number" min="1" max="20" {...field} className="bg-transparent border-white/20 text-white focus:border-primary" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                         <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white/80">Special Requests</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Dietary restrictions, special occasions..." {...field} className="bg-transparent border-white/20 text-white focus:border-primary min-h-[120px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary text-black hover:bg-white uppercase tracking-widest py-6">Request Reservation</Button>
                    </form>
                </Form>
            </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
}
