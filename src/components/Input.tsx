import React from "react";

type InputProps = React.ComponentProps<'input'> & {
  Id?: string;
  label?: string;
  mb?: string;
  classLabel?: string;
  children?: React.ReactNode;
  setState?: React.Dispatch<React.SetStateAction<string>> | undefined
}

const Input = ({setState, label, id, classLabel, children, mb, ...props}: InputProps) => {  
  return (
    <div className="input-group">
      <label htmlFor={id} className={classLabel}>{label}</label>
      <input id={id} name={id} onChange={({currentTarget}) => setState?.(currentTarget.value)} type="text" {...props} />
      {children}
    </div>
  )
}

export default Input;