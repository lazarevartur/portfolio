import { pages } from "../routes";
import {IImageMetaData} from "../types";
import {ReactImageGalleryItem} from "react-image-gallery";

export const findPageNameByLink = (pathname: string) =>
  pages.find((item) => item.link === pathname)?.name;

export const mapImageToSliderData = (
  images: IImageMetaData[]
): ReactImageGalleryItem[] =>
  images.map((image) => ({
    original: image.secure_url,
    thumbnail: image.secure_url,
  }));