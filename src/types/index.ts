import { IconType } from "react-icons";

export interface IServices {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url?: string;
  github_url?: string;
  tasks?: string[];
  category: Category[];
  key_techs: string[];
  folderPath: string;
}

export type Category =
  | "redux"
  | "TypeScript"
  | "next.js"
  | "web3"
  | "react-query"
  | "react"
  | "node"
  | "express"
  | "django"
  | "mongo"
  | "all";

export interface IImageMetaData {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
}

export interface IImageData {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
}