import React, { HTMLProps } from "react";
export type IconProps = {
  size?: number;
  width?: number;
  height?: number;
  active?: boolean;
  color?: string;
  color2?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;
export type IconType = React.FC<IconProps>;

export type InputElementProps = {
  label?: React.ReactNode;
  inputClassName?: string;
  inputParentClassName?: string;
  formClassName?: string;
  labelClassName?: string;
  error?: string;
} & HTMLProps<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type RouteType = {
  path: string;
  Icon: undefined | IconType;
  showIn: string[];
  label: string;
  type: "link" | "hash";
  activeIn: string[];
  subRoutes: undefined | object;
};
export type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
} & React.HTMLProps<HTMLLabelElement>;

export type InputFieldProps = {
  buttonTitle?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightButtonTitle?: string;
  leftButtonClassName?: string;
  rightButtonClassName?: string;
  leftButtonTitle?: string;
  rightIconAction?: () => void;
  leftIconAction?: () => void;
  iconProps?: IconProps;
} & InputElementProps;

export type SelectOptionType = {
  value: string;
  label: string;
};
export type SelectBoxType = {
  options?: SelectOptionType[];
  emptyOptionLabel?: string;
  hideEmptyOption?: boolean;
} & InputElementProps;
