"use client"
import { createContext, useContext, useState } from "react";

export interface IconData {
  id: string;
  label: string | React.ReactNode;
  icon: string;
  windowId: string;
}