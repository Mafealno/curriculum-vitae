import React, { useMemo, useState } from 'react'

import { SimpleModal } from "../Modal";

import { ImageProject } from '../../interfaces/projetct'

import "./styles.css";
import Legend from '../Legend';

type Props = {
    images: ImageProject[],
    subDirectory: string,
}

function CarouselImages(props: Props) {

    const [imageSelected, setImageSelected] = useState(0);
    const [imageZoom, setImageZoom] = useState<ImageProject>();

    const { images, subDirectory } = props;

    useMemo(() => {
      setInterval(() => {
        setImageSelected(prev => {
          if(prev >= images.length - 1)
          return 1;

          return prev + 1;
        })
    }, 8000);
    }, []);

  return (
    <>
      <div className="container-carrossel-images"
      style={{
        "--image-selected": imageSelected
      } as React.CSSProperties}
      >
        {imageSelected > 0 && <div
        className="button-arrow-image absolute left-0 px-2 h-full z-10 w-11"
        onClick={() => setImageSelected(prev => prev - 1 )}
        />}
          {images.map((item, index) => (
            <div className="min-w-[440px]">
              <Legend position={index - 5} className={"w-[440px] image-project"} label={item.label}>
                <img
                key={index}
                src={`assetsProjects/${subDirectory}/${item.name}`}
                alt={item.label}
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => setImageZoom(item)}
                />
              </Legend>
            </div>
            ))}
          {imageSelected < images.length - 1 && <div
          className="button-arrow-image absolute right-0 px-2 h-full z-10 w-11"
          onClick={() => setImageSelected(prev => prev + 1 )}
          />}
      </div>
      <SimpleModal
      key={1}
      className="w-[80%] max-lg:w-[99%] z-50 h-[80%] overflow-auto p-4 flex justify-center items-center"
      show={!!imageZoom?.name}
      closeModal={() => setImageZoom({} as ImageProject)}
      >
        <img src={`assetsProjects/${subDirectory}/${imageZoom?.name}`} alt={imageZoom?.label} className="w-full h-full object-contain" />
      </SimpleModal>
    </>
  )
}

export default CarouselImages