import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <main className="home-container">
      <Header className="sticky left-0 right-0">
        <div className="flex items-center gap-2 lg:gap-2">
          Notification{" "}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
    </main>
  );
};

export default Home;
