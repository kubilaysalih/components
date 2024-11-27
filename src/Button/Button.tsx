export interface ButtonProps {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return <button style={{
    outline: 0,
    background: 'indianred',
    padding: 20,
    border: "1px solid #eaeaea"
  }}>{title}</button>
}

export default Button