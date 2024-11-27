export interface AvatarProps {
  title: string
}

const Avatar = ({ title }: AvatarProps) => {
  return <img src="https://lh3.googleusercontent.com/a/ACg8ocIOSNCy2t2tpe_14dxvnmEMAA_4cZjBGK6q3PuqbFDJO9Q=s96-c" style={{
    width: '50px',
    height: "50px"
  }}>{title}</img>
}

export default Avatar