"use client";
import React from "react";

import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  return (
    <>
      <Header />
    </>
  );
}
