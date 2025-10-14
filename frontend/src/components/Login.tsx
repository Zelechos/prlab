import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import PlatformButton from "./PlatformButton.tsx";
import Header from "./Header.tsx";
import { HiMail, PiPasswordFill } from "../assets/icons.tsx";


const Login = () => {
  return (
    <Card className="w-full w-[500px]">
      <form className="flex flex-col gap-2">
        <div className="text-left">
          <Header />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Sign in to our platform
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-5">
            Enter your email and password to sign in
          </div>
          <TextInput id="email4" type="email" icon={HiMail} placeholder="email" required />
        </div>
        <div>
          <TextInput id="password1" icon={PiPasswordFill} placeholder="password" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button className="mx-auto w-64" size="xs" type="submit" color="blue">Sign in</Button>
        <div className="mx-auto text-sm text-gray-500">or continue with</div>
        <div className="mx-auto flex gap-2">
          <PlatformButton platform="google" />
          <PlatformButton platform="github" />
          <PlatformButton platform="gitlab" />
          <PlatformButton platform="bitbucket" />
        </div>
        <div  className="mx-auto text-sm text-gray-500">
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
        </div>
        <div className="mx-auto text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </div>
      </form>
    </Card>
  );
}

export default Login;
