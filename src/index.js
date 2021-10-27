import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import makeImage from "./image";
import { colorStyle } from "./button-styles";
import "./footer.css";
import "./button.css";
import imageUrl from "./scandiweb-image.png";
const image = makeImage(imageUrl);

const button = makeButton("YeaYYY! nice button");
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);
button.style = colorStyle("cyan");
