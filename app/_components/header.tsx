"use client"

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
// import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  // const {data} = useSession();
  // const handleLoginClick = async () =>{
  //   await signIn();
  // }

  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={15} />
        </Button>
        
        {/* {data?.user ? <div>
          <Button onClick={() => signOut()}>Logout</Button>
          <h1>{data.user.name}</h1>
        </div> : <Button onClick={handleLoginClick}>Login</Button>} */}
      </CardContent>
    </Card>
  );
};

export default Header;