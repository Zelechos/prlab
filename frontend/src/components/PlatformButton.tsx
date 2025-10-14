import { Button } from "flowbite-react";
import { FaGithub, FaGitlab, FaGoogle, DiBitbucket } from "../assets/icons.tsx";


interface PlatformButtonProps {
  platform: string
}

const PLATFORMS = {
  google: { color: "green", icon: <FaGoogle className="h-7 w-7" />, label: "Google" },
  github: { color: "gray", icon: <FaGithub className="h-7 w-7" />, label: "Github" },
  gitlab: { color: "yellow", icon: <FaGitlab className="h-7 w-7" />, label: "GitLab" },
  bitbucket: { color: "blue", icon: <DiBitbucket className="h-7 w-7" />, label: "BitBucket" },
};


const PlatformButtom = ({ platform }: PlatformButtonProps) => {
  let currentPlatform = platform.toLowerCase() as keyof typeof PLATFORMS;
  const prop = PLATFORMS[currentPlatform];
  if (!prop) return null;

  return (
    <>
      <Button className="" color={prop.color}  outline>
        {prop.icon}
      </Button>
    </>
  )
}

export default PlatformButtom;

