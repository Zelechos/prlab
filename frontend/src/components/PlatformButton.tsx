import { Button } from "flowbite-react";
import { FaGithub, FaGitlab } from "react-icons/fa6";
import { DiBitbucket } from "react-icons/di";


interface PlatformButtonProps {
  platform: string
}

const PLATFORMS = {
  github: { color: "gray", icon: <FaGithub className="mr-2 h-5 w-5" />, label: "Github" },
  gitlab: { color: "yellow", icon: <FaGitlab className="mr-2 h-5 w-5" />, label: "GitLab" },
  bitbucket: { color: "blue", icon: <DiBitbucket className="mr-2 h-5 w-5" />, label: "BitBucket" },
};


const PlatformButtom = ({ platform }: PlatformButtonProps) => {
  const prop = PLATFORMS[platform.toLowerCase()];
  if (!prop) return null;

  return (
    <>
      <Button className="mx-auto w-64" color={prop.color} size="xs" outline>
        {prop.icon}
        {prop.label}
      </Button>

    </>
  )
}

export default PlatformButtom;

