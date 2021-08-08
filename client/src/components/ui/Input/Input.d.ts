import React from "react";
import { ChangeHandler } from "react-hook-form";

export interface StyleProps {
  fullWidth?: boolean
}

export interface InputProps {
  fullWidth?: boolean
  disabled?: boolean
  type?: string
  ref?: React.RefAttributes
  onChange?: ChangeHandler
}