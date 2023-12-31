'use client';
import Image from 'next/image';
import { galleryImg } from '../gallery-files';

export default function GalleryPage1() {
  const firstPageImgs = galleryImg.filter((item) => item.id <= 9);
  return (
    <>
      <div className="grid grid-cols-3 gap-7 maxLg:grid-cols-2 maxXs:!grid-cols-1">
        {firstPageImgs.map((image) => (
          <div key={image.id}>
            <Image
              width={462}
              height={360}
              alt="gallery_img"
              blurDataURL="URL"
              placeholder="blur"
              className="w-full h-[30rem]"
              src={image.img}
            />
          </div>
        ))}
      </div>
    </>
  );
}
