import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import PlatformButton from "./PlatformButton.tsx";
import { HiMail, PiPasswordFill } from "../assets/icons.tsx";


const Login = () => {
  return (
    <Card className="w-full w-[500px]">
      <form className="flex flex-col gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4">Your email</Label>
          </div>
          <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput id="password1" icon={PiPasswordFill} placeholder="password" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button className="mx-auto w-64" size="xs" type="submit" color="blue">Submit</Button>
        <PlatformButton platform="github" />
        <PlatformButton platform="gitlab" />
        <PlatformButton platform="bitbucket" />
        <PlatformButton platform="google" />
      </form>
    </Card>
  );
}

export default Login;
