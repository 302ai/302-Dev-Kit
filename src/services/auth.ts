"use client";

import { env } from "@/env";
import Locale from "@/locales";

import { authKy } from "../lib/api";

interface Response {
  data: {
    info: string;
    api_key: string;
    model_name: string;
    region: string;
  };
  code: number;
}

interface LoginResult {
  success: boolean;
  data?: {
    code: string;
    info: string;
    apiKey: string;
    modelName: string;
    region: string;
  };
}

export const login = async (code?: string): Promise<LoginResult> => {
  const hostname =
    env.NEXT_PUBLIC_DEV_HOST_NAME || window.location.host.split(".")[0];

  const res = await authKy.get(
    `bot/v1/${hostname}${code ? `?pwd=${code}` : ""}`
  );
  let errorMessage = Locale.Error.UnknowError;

  if (res.status !== 200) {
    errorMessage = Locale.Error.NetworkError;
  }

  const data = await res.json<Response>();

  if (data.code === 0) {
    return {
      success: true,
      data: {
        code: code || "",
        info: data.data.info,
        apiKey: data.data.api_key,
        modelName: data.data.model_name || env.NEXT_PUBLIC_DEFAULT_MODEL_NAME!,
        region: data.data.region,
      },
    };
  }

  if (data.code === -101) {
    errorMessage = Locale.Error.ToolDel;
  } else if (data.code === -100) {
    errorMessage = Locale.Error.ToolBin;
  } else if (data.code === -99) {
    errorMessage = Locale.Error.CodeInvalid;
  }
  throw new Error(errorMessage);
};