import image1 from "../assets/Gallery/1.jpg";
import image2 from "../assets/Gallery/2.jpg";
import image3 from "../assets/Gallery/4.jpg";

export const images = [image1, image2, image3];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
