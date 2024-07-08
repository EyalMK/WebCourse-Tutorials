import { useEffect, useState, useRef } from "preact/hooks";
import { Swipe, Thumbnail, Image } from "./components/index.jsx";
import reactIcon from "./assets/preact.svg";

function App() {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const carouselRef = useRef(null);

    /* Fetch 20 images */
    useEffect(() => {
        async function loadImages() {
            const imagePromises = [];

            for (let i = 0; i < 20; i++) {
                const loadImage = async (index) => {
                    const thumbnailResponse = await fetch(`https://picsum.photos/id/${index}/100/100`);
                    const response = await fetch(`https://picsum.photos/id/${index}/1024/720`);
                    const thumbnailBlob = await thumbnailResponse.blob();
                    const blob = await response.blob();
                    return {
                        id: index,
                        src: URL.createObjectURL(blob),
                        thumbnail: URL.createObjectURL(thumbnailBlob),
                    };
                };
                imagePromises.push(loadImage(i));
            }

            const loadedImages = await Promise.all(imagePromises);
            setImages(loadedImages);
            setCurrentImage(loadedImages[0]);
        }

        if (images.length === 0) {
            loadImages().then(() => {
                console.log("Images loaded");
            });
        }
    }, []); // Empty dependency array to run once on mount

    /* Control the carousel scroll bar */
    useEffect(() => {
        if (currentImage) {
            const thumbnailElement = document.getElementById(`thumbnail-${currentImage.id}`);
            if (thumbnailElement) {
                thumbnailElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        }
    }, [currentImage]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen h-screen bg-gray-900">
            <div className="flex justify-center gap-3">
                <h1 className="text-4xl font-bold text-center mb-4 mt-2 text-white">React Image Carousel By Team 1</h1>
                <Image src={reactIcon} alt="React Icon"/>
            </div>
            <div ref={carouselRef} className="flex overflow-x-auto mb-4 p-2 bg-gray-600 rounded-lg shadow-md">
                {images.map((image) => {
                    const selected = currentImage && currentImage.id === image.id;
                    return (
                        <Thumbnail
                            key={image.id}
                            id={`thumbnail-${image.id}`}
                            src={image.thumbnail}
                            alt={`Image #${image.id} Thumbnail`}
                            onClick={() => setCurrentImage(image)}
                            className={`cursor-pointer m-2 p-1 border-2 rounded ${selected ? 'border-blue-500 opacity-100' : 'border-transparent opacity-20'}`}
                        />
                    )
                })}
            </div>
            <div className="relative w-full flex justify-center items-center">
                <Swipe
                    src="left"
                    onClick={() => {
                        if (currentImage && currentImage.id > 0) {
                            setCurrentImage(images[currentImage.id - 1]);
                        }
                    }}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
                {currentImage && (
                    <Image
                        src={currentImage.src}
                        height="1200px"
                        width="720px"
                        alt={`Image #${currentImage.id} Full Image`}
                        className="shadow-lg"
                    />
                )}
                <Swipe
                    src="right"
                    onClick={() => {
                        if (currentImage && currentImage.id < images.length - 1) {
                            setCurrentImage(images[currentImage.id + 1]);
                        }
                    }}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
            </div>
        </div>
    );
}

export default App;
