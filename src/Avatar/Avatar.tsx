export interface AvatarProps {
  size: number
}

const Avatar = ({ size = 50 }: AvatarProps) => {
  return <img src="https://lh3.googleusercontent.com/a/ACg8ocIOSNCy2t2tpe_14dxvnmEMAA_4cZjBGK6q3PuqbFDJO9Q=s96-c" style={{
    width: size,
    height: size
  }} />
}

export default Avatar