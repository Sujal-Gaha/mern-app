import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAppsPath } from "@/lib/config";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

const LoginPage = () => {
  const { registerPath, forgotPasswordPath } = getAppsPath();

  return (
    <main className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login with your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username:</Label>
                <Input id="username" type="text" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password:</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 items-center">
              <Button className="w-full">Login</Button>
              <Link
                href={forgotPasswordPath}
                className="hover:underline hover:text-blue-700 text-xs"
              >
                Forgot password?
              </Link>
            </div>
            <Button variant="outline" asChild>
              <Link href={registerPath}>Create a new account</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
