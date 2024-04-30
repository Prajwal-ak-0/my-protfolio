import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Logo = () => {
  return (
    <Avatar>
        <AvatarImage src="/logo.png" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default Logo