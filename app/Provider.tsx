"use client";

import Loader from "@/components/ui/Loader";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

import React, { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
