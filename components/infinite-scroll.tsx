"use client";

import React, { useCallback, useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import PasswordCollectionCard from "@/components/password-collection-card";
import { Prisma } from "@prisma/client";

function InfiniteScroll() {
  return (
    <div>
      <p>from client</p>
    </div>
  );
}

export default InfiniteScroll;
