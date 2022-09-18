import {IImageData, IImageMetaData} from "../types";

export async function search(options: any = {}) {
  const params = {
    ...options,
  };

  if (options.nextCursor) {
    params.next_cursor = options.nextCursor;
    delete params.nextCursor;
  }
  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");
  console.log(paramString)
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((res) => res.json());

  return results;
}

export async function getFolders(options: any = {}) {


  return await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/folders/projects`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
          ":" +
          process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((res) => res.json());
}

export function mapImagesResources(resources: IImageMetaData[]) {
  return resources.map<IImageData>((img) => ({
    id: img.asset_id,
    title: img.public_id,
    image: img.secure_url,
    width: img.width,
    height: img.height,
  }));
}
