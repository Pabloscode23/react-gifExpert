import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {

        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); //genera una sola renderizacion
    };
    useEffect(() => {

        getImages();

    }, []);

    return {
        images: images, //solo images
        isLoading: isLoading
    }
}
