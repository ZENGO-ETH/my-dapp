import { Button } from "antd";
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
   <div className="App">
      <p>
     نـــقـــل العـــفــش بـــالـــريــاض
      </p>
      <p>
      افـــضــل شـــركـــات نقـــل الاثـــاث فـــي الـــرياض
      </p>
      <br />
      <a>
      تـــقــدم الـــشركة افـــضل خـــدمـــات نـــقــل الاثـــاث مـــع الفـــك والــتغــليــف والتـــركيب لجـــميع انـــواع الاثـــاث المـــنزلى بافـــضل الـــطـــرق والـــوســائل الـــتى تــناســب خــدمــة نــقل الاثـــاث بــكل امـــان وســـهوله كـــما تـــوفر الشـــركة افـــضل الــشاحنـــات المــتطـــورة فــى خـــدمــة نقـــل الاثــــاث بالـــريـاض.
      </a>
      <br />
      <br />
      <div className="call">
      <Button>
     الاتصــــال بنـــا 
      </Button>
      </div>
      <br />
      <Button>
     واتســــــــاب
      </Button>
    </div>
  );
};
