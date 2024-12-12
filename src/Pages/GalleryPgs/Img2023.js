import React, { useState } from "react"
import Carousel from "../../components/Carousel";
import "../../components/carousel.css";



const mediaItems = [
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPkj8jAayN-fk6SkJvJNWJYCZUPLevV6fkklv-saoE3sh9sIUUsyGPzCy853_o946qUz82M5zcgW_lYT-htJOJRtRBkNPuabUUf3ml2horbRWdmUZ1LH3UjoFKw0Jx6wkpZQhWKy-1gsBMMbRO2vfk=w809-h607-s-no-gm?authuser=0" },
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczP-bxbeUmHj4DZa1dH7rrKNLeC0Ia9sUUMRtfOqnEYRCkDE3wRx-6IpmrKOQ0kOuoMa71-yy4QcIKOnGYBL_wpeoTkSU8kjeJMEHPJcxB4FuA_e0fzyL_Nd_aZTvRAgeGd7LOZKnpoALNIxT83ju8g=w486-h607-s-no-gm?authuser=0" },
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPciM1F6xMoz4uFYqqd9Eg0eFTvO8JYBQ4Tc801SGkvH8jFAuuFF-SFKOpoo_yY0LFRCAaF2zDVxiZLynDNH5yTiVVO_p4mT-fQ8JYsyGHsa3iR_SKXegQ9vigssaaSk4SXw5If8d-NaskHa22p95w=w455-h607-s-no-gm?authuser=0" },
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczO7gY_gNIjghHl4SVS7w3jQOgSoVixuxlwwqV9XshHaiyKyKA2fFHViUYJLWSoplStO1OMi8MROp6TFzca3KMYQa-5z8z8TimJ7jmDwdw01ZReOs8ENrlgF3d6CvozG4hgpChuJ3spJiPBnWJeR4So=w809-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczOASyBv6U-4hsxlcBPAE-KVDY1SwKP-oGPXAYkxtQ1ymI5hvDS9FlGqbuG76vTg5bhVkHOgwyokiih-pHy5ErZGNe7Mn1fhTJJ6-5E9nmcCxcZLBZTiqsZ4cvetL43mTXv34ftH5FAMR9g6G9v8AfE=w809-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNT6Uc-_Xz8NG-f-KIzhuIN0ly0pF411H72sqVNQftdkFcxIAleAOWRHm2zOOfChE4QzLd9Wk8uPv-JySBO_u1FjZjHcCJDsTGdWaFg5wWzyraVl2fjesjdbM_nn4LpZxBIkkbDZmtBdjHvqEKVMM4=w809-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNaLxZi0-Tvw4ixpIeI3GLWqAVLFkATlXFBl7Fe9VpDdbRRAV3Z5E_ioI4SErk0ciI_JJoa7jPFLicXEqgn9aIz2_sFgS_NIEZeuRpyrGv2Fcr-Y2JCTFP83L86OvK_zbh8MSKKe7sazmHx4l34ADA=w809-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNHuG1lJsftBcQFdMTBjI9jlw1ip6-hd3G7eVXBfnMc-BveydvFXlBqwMYGGbxrn8m6GgGWPdoLniWjSwGYiK4i14XTKFQDhs8w3uL0uUIswXxh_fOXWDc_eHwW5_sX5_GckCf7VeH-2xT65LiePr4=w939-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczMqk0c8KnyBZaCdqlEWFBj29f6Pq77sLXl60MiTDbruv6o3jtoCNlyEkDjH0cUiLE6YCFUvOH4saTykzh8SkOdRGgvFP8FLaf1gcxOjkC3STdb8Janke0UbjNm6xawJ_Qor2KtxTH990fCzC58Ozns=w455-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczP6b6m05ByZpT2eLPfvnfsEuzMyZd1SNPlzSdYFipmJRTERVDtmNp8okhPyLoVHvV5IqwB5_J8nRsM4rtwbh6LvipFRtyUb_tvkavI0zmQpCsQC8fxJifmVyuOq52VKiO8TValpqPwfMTGDrBKRCDs=w455-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPhpckaftEhjHLpTt0Wll_noRGWvd_M483klDaqMA0d2P2Sv5I1rCjP7I6JfBVhFAYriqd8IxTaaup4iZaUfSVUJ1ljmzLV7LR7l0vjJrMMY_HRavi-nifTH39o08FECSKiYJ15pM_F3De0FMj0bmg=w455-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNQtlGGmErKtXXp_kQCTVLTHdetwcxGwOnWuGphnVKAmbgzoWWg8FK8faerpl3uX-8COadc9sXRL0nLvVEhTl5Fhcyz7JeMR0EXi_4-VmsfnI-g6MjPLJ-mCQQBX02BWbKdSEISZzZFFVBsJt47gfA=w455-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczM6CNHK3NGaTYbshMcIN1xA8aVMG7sr-DCeub2Cw1A12V-uIA14IcWVZ4Sb-HweA4q30OZJDdOHsLuLIM9ayAu1x9DGLVYbJ4cw3mBADlsVsn6zJ8fOOP0N9Aj2dNFjZdryyNgNfLrgR5qttBIazwY=w486-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczMoPaeiSh1e11n09nGiTzUM2dovXmOteH8jkyqvcXk7HpiXDhzLlmluw8781-FIg-uR4cHPnvBzZzil_PQV6lVLgmE4YxRZi5SzNqDDr9pXp_Pep-Y_Q7AhqYCWgpxjQm_pyjhB3R3TfASASh6-u4g=w1079-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczN8S9mIQ_je3piTbizsmyuxx0T43Rz4fCMamJe6MVMSV0ELkAMm5PHaO0Lukh9lDw4tJqEHcuIZ5xf2CZJgqHAfn3n98aVpR2EH00dN7HCMRI0ZMeh154D_HVvkHkEmSJpqJVJIEyVEOuTv0WdHONo=w1079-h607-s-no-gm?authuser=0"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNWtQ7dtltbnbBRYmvchMRx7kJdWKlIUYQohrMAqbeqOLWq1aYatmxDy_3VU6hTxTgGiwXQJMuDFeL4bSDiYir59JK4nlGD8pEXQtOTJf_DeL-9NW28xu3tsOzaqK58_eVQEXUbm6UOluWyUq50C7I=w1079-h607-s-no-gm?authuser=0"},
]

export default function Img2024() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleMediaClick = (index) => {
    setInitialIndex(index);
    setIsOverlayOpen(true);
  };


  return (
    <div>
      <div className="gallery">
        {mediaItems.map((item, idx) => (
          <div key={idx} className="gallery-media-container">
            {item.type === "img" ? (
              <img
                src={item.src}
                alt={`Media item ${idx}`}
                onClick={() => handleMediaClick(idx)}
                className="thumbnail"
              />
            ) : (
              <video
                src={item.src}
                controls
                onClick={() => handleMediaClick(idx)}
                className="thumbnail"
              />
            )}
          </div>
        ))}
      </div>

      {isOverlayOpen && (
        <div className="carousel-overlay">
          <button className="close-button" onClick={() => setIsOverlayOpen(false)}>
            &times;
          </button>
          <Carousel
            data={mediaItems.map((item) => item.src)}
            initialIndex={initialIndex}
            onClose={() => setIsOverlayOpen(false)}
          />
        </div>
      )}
    </div>
  );
}