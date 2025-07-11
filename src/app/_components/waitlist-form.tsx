"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { api } from "~/trpc/react";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  source?: string;
  variant?: "hero" | "cta";
  className?: string;
}

export function WaitlistForm({
  source = "landing_page",
  variant = "hero",
  className,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const joinWaitlist = api.waitlist.join.useMutation({
    onSuccess: () => {
      setIsSuccess(true);
      setEmail("");
      setError("");
    },
    onError: (error) => {
      setError(error.message);
      setIsSuccess(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    await joinWaitlist.mutateAsync({ email, source });
  };

  const isHeroVariant = variant === "hero";
  const isCTAVariant = variant === "cta";

  if (isSuccess) {
    return (
      <div className={cn("mx-auto max-w-md text-center", className)}>
        <div
          className={cn(
            "flex items-center justify-center gap-2 rounded-lg p-4",
            isHeroVariant && "bg-green-50 text-green-800",
            isCTAVariant && "bg-white/20 text-white",
          )}
        >
          <CheckCircle className="h-5 w-5 text-green-500" />
          <p className="font-medium">
            Welcome to the waitlist! We&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("mx-auto max-w-md", className)}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "h-12 flex-1 text-lg",
              isHeroVariant && "border-2 border-rose-200 focus:border-rose-400",
              isCTAVariant &&
                "border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:bg-white/20",
              error && "border-red-400",
            )}
            disabled={joinWaitlist.isPending}
          />
          <Button
            type="submit"
            disabled={joinWaitlist.isPending}
            className={cn(
              "h-12 px-8 font-semibold",
              isHeroVariant &&
                "bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:from-rose-600 hover:to-purple-700",
              isCTAVariant && "bg-white text-rose-600 hover:bg-gray-100",
            )}
          >
            {joinWaitlist.isPending ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Joining...
              </span>
            ) : (
              <>
                {isHeroVariant ? "Join Waitlist" : "Get Early Access"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>

        {error && (
          <div
            className={cn(
              "mt-3 flex items-center gap-2 text-sm",
              isHeroVariant && "text-red-600",
              isCTAVariant && "text-red-200",
            )}
          >
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
          </div>
        )}
      </form>

      {!error && !isSuccess && (
        <p
          className={cn(
            "mt-3 text-sm",
            isHeroVariant && "text-gray-500",
            isCTAVariant && "text-white/70",
          )}
        >
          Join 12,847+ couples already on the waitlist
        </p>
      )}
    </div>
  );
}
