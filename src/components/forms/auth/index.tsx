"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import FormGenerator from "@/components/common/form-generator";
import { CircleLoader, DotLoader } from "@/components/common/loader-renderer";
import { Button } from "@/components/ui/button";
import { FORM_CONSTANTS } from "@/constants";
import useAuth from "@/hooks/auth";
import { Lock } from "@/icons";
import { cn } from "@/lib/utils";
import Locale from "@/locales";

type SignInFormProps = {
  className?: string;
};

const SignInForm = ({ className }: SignInFormProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isPending, setValue, onAuth, watch, register, errors } = useAuth();
  const params = useSearchParams();

  useEffect(() => {
    const queryCode = params.get("pw") || "";
    const storedCode = localStorage.getItem("code") || "";

    // Prefer query code first, then stored code
    if (queryCode || storedCode) {
      setValue("code", queryCode || storedCode);
    }

    // Initial authentication
    const initAuthentication = async () => {
      await onAuth();
      setIsLoading(false);
    };
    initAuthentication();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with input:");
    onAuth();
  };

  if (isLoading) {
    return <DotLoader />;
  }

  return (
    <div
      className={cn(
        "relative flex w-full transform flex-col items-center justify-center ease-in-out",
        className
      )}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-2 text-center">
        <Lock className="size-14" />
        <h2 className="text-2xl font-bold">{Locale.Auth.NeedCode}</h2>
        <p className="text-sm text-muted-foreground">
          {Locale.Auth.InputTip}
        </p>
      </div>
      <form
        className="mt-4 flex w-full max-w-sm flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        {FORM_CONSTANTS.signInForm.map((field) => (
          <FormGenerator
            {...field}
            key={field.id}
            watch={watch}
            register={register}
            setValue={setValue}
            errors={errors}
            className="w-[200px] text-center"
          />
        ))}
        <Button type="submit" className="w-[200px] cursor-pointer rounded-md">
          <CircleLoader loading={isPending}>{Locale.System.Confirm}</CircleLoader>
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
