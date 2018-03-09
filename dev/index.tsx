import * as React from "react";
import { render } from "react-dom";

import {AboutMeComponent} from "../src/aboutMe";

const AboutMeProps = {
    content: 'TypeScript is a free and open-source programming language' +
     'developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript' +
     ', and adds optional static typing to the language',
    img: 'http://www.sgmobmart.com/listings/upload/126/userprofile/PF12681275.jpg',
    textUppercase: 'TypescriptLang'
  };

render(
    <AboutMeComponent
          content={AboutMeProps.content}
          img={AboutMeProps.img}
          textUppercase={AboutMeProps.textUppercase}
    />,
    document.getElementById("root")
);