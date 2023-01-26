import React, { useMemo, useState, useLayoutEffect, useContext } from 'react'

import { SimpleModal } from "../Modal";

import { ImageProject } from '../../interfaces/projetct'

import "./styles.css";
import Legend from '../Legend';
import { OutputContext } from '../../App';

type Props = {
    images: ImageProject[],
    subDirectory: string,
    nameProject: string,
}

function CarouselImages(props: Props) {

    const [imageSelected, setImageSelected] = useState(0);
    const [imageZoom, setImageZoom] = useState<ImageProject>();

    const { dispatchOutput } = useContext(OutputContext);

    const { images, subDirectory, nameProject } = props;

    useMemo(() => {
      setInterval(() => {
        setImageSelected(prev => {
          if(prev >= images.length - 1)
          return 1;

          return prev + 1;
        })
    }, 8000);
    }, [images.length]);

    useLayoutEffect(() => {
      const domElement = document.getElementById(subDirectory);
      if(domElement){
        domElement.addEventListener('touchmove', (e) => e.preventDefault());
        domElement.addEventListener("scroll", () => domElement.scrollLeft = 0);
      }
    }, [subDirectory])

  return (
    <>
      <div className="relative h-full w-full flex justify-center items-center">
        {imageSelected > 0 && <div
        className="button-arrow-image left-0 px-[15px] h-full z-10 w-11 absolute"
        onClick={() => setImageSelected(prev => prev - 1 )} />}
        <div id={subDirectory} className="container-carousel-images"
        style={{
          "--image-selected": imageSelected
        } as React.CSSProperties}
        >
          {images.map((item, index) => (
            <div className="min-[300px] w-[440px] image-project">
              <Legend position={index - 3} className={"min-[300px] min-w-[440px]"} label={item.label}>
                <img
                key={index}
                src={`assetsProjects/${subDirectory}/${item.name}`}
                alt={item.label}
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => setImageZoom(item)}
                onMouseEnter={() => dispatchOutput({ type: "ADD_ACTION", payload: `Passado mouse sobre a imagem '${item.label}' do projeto '${nameProject}'` })}
                />
              </Legend>
            </div>
            ))}
        </div>
        {imageSelected < images.length - 1 && <div
        className="button-arrow-image right-0 top-0 px-[15px] h-full z-10 w-11 absolute"
        onClick={() => setImageSelected(prev => prev + 1 )} />}
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