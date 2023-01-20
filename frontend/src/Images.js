//
import Img11 from "../src/assets/images/professor.jpg";
import Img12 from "../src/assets/images/moscow.jpg";
import Img13 from "../src/assets/images/tokyo.jpg";
import Img14 from "../src/assets/images/Raquel_Murillo.jpg";
import Img15 from "../src/assets/images/rio.jpg";
import Img16 from "../src/assets/images/helsinki.jpg";
import Img17 from "../src/assets/images/stockholm.png";
import Img18 from "../src/assets/images/berlin1.jpg";
import Img19 from "../src/assets/images/denver.png";
import Img20 from "../src/assets/images/nairobi.jpg";
// import Img21 from "../src/assets/images/";

const Images = [
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
];

export default function getImages(count) {
  let selectedImageCount = Images.slice(0, count);
  // console.log(selectedImageCount);
  return selectedImageCount;
}
