"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800">
      <Button color="danger" variant="shadow">
        Hello HeroUI 🚀
      </Button>
    </div>
  );
}
