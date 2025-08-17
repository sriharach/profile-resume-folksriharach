export interface InputDaisyUiProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  variant?: 'ghost' | 'primary' | 'secondary' | 'accent' | 'info'
  inputError?: boolean
}
