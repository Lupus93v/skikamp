import React, { useState } from "react"
import Carousel from "../../components/Carousel";
import "../../components/carousel.css";



const mediaItems = [
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPmKzUmjO3kemn-uAKQ1Wy3cjCXmmi3U8lEQhE_-RVb_HRnOZOfXsXeUIZLiJXsvq9pUbqtUwMaXncHcox0Vj0unoC4pi2pAHIny5E8Dtn-gIrEyam7qU7lk-fJ8eLw9VFIzHzHz2ZHWTGM091cm0h0=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczOPL1tJvPW_BHcHPhqWcKdJLkNFZrAdST3zGcOX5p4wK7J3c3TTodRQY1OF9neHOP5F-rgKkBh2F55zf-32p-tWRFjCMZ9XpKMABHXxSgFxhRfMU8kfjbDFHht-RpCgQ2HsSsxNqcoSuxQnk2n9BsgL=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczOFCz70zDHP1Y9YdIGO0sGaln5I8TyiQV3kFcXRXli7LXximJGpIPQbX9Rk5-6em1_6mvI7sx238GD6NjvuCIW9PehF9ouOEdD1jGuhAZbyrCDB1fUCvXSU5JDaneIWyA6pkmpa7DtB8FF9-O3Jw0ek=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPldlDtzjATi0MD7ax9JWxuI8WxPc6ZIK06H_fPIeelb4ou8HSc5tj7kGmZWwamasWp_lUPOetiSiiTZM6EqTf1F6gvJW57WhSMtEisC6a9fmEQ99XSKU4GMh0Fr_tu4wCb7DbM1e7uZoLl7nSbjy0r=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNizyUCCbynTEQq6KP1dGWrU8z86AAQUFVio8P-E7dLTLz-IxTnbxEGiJbpWDAvBi0AuJjEc6WucsHV-LCzoqxgcHtgAo7Wut4TOBAKxdduQlL3eHEHndVQlt9pQM81rhIfK9h7XTFqTfUvU71lz4G9=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczO0o4-PHVU6or8p_qW2i99JTnhFzOdgbp69P051awmhmGenR-6d6_x7bwG_CtYBxADd3QTMWWuSHCNGeq0A46yuf6AX-c3ZDrBLmoVe4CKGiDFedsy-pi8kQBUDZmqcXZ4fNqxK3cIiUm1zFQYEQYTh=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczO9wsn20Xb-tDNUr1zQNUOhLEGxSc9Jz_mUsmgme9Pf1bRcSt-KeT-x05RCi2QaG4cvuwO_CU_dN6LL5WfEb2LpyMMEj9JVQtiRYD1t22Ck2J2qFEQdcWNvkrTH9xQEl2z-d5Qb_pUBVUOJopKnJ6qL=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNDoAL5mMie-nvPrsJ9iTArY-nSiuBe_Gu2JmvUSmnzXr5RP0xzGeSzPw7rmPWFtLOn3DCDt17PWpqxNS7lNjESbkPlsVR7L7gKQdHfThp85UYIbc-Zkozcl_uI_QsMWCCjcJ_BNXZcp9e3YRX-ptvG=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczMSGpszBJUByu_Mkumh7gLQqw3qkNmnwAZet-y21UTsmHzZJZAQPcusBxdRLsMO8P161jMcTGGNIxtwHwtD4NsoOcksJ3bj8CfEM4xdAeqhBZnaA6ezbr7VVpRj67U4TxwCdlXeqCUhePsRWOPgSh0M=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPjqR9n9Wh1b0F66cs_Ld95uN0PgL0AUMSPFx3n8A8Tor815L18FuL_MlsO4HlJ2fa0RCvtlYmoNYPOYX0rHK1svvFtuxQDU4NOX-BCj9BlhVGtWkrn3hd7vSnn9i4rCFbljotgmu-4nOzZeqAc3cgJ=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNU5wWRZDGpdX5yKT-lkUgBFLw4kO6e9hDEq1UkHdra-nYVKwWLGYF3XTCHy-9ysaI-82qGqBXjU4tWVo--0Vhj9Cdc4m6-AxztmqbMGI7XQBpwLx1BmZUeaI7TTBbDhp4r7dDVOLTd7rO3ww4yIsnN=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNep0lHi-aP8RbqHXqW9tneqZxYcnIlBtj2vi_a-m5O6YOmn4Hy_6VJhBjel5s0HHD5J0mmWXf9GuWdEkh5-WxTudAUrcpa90-l65yCstKFahTvABtogyoN5WQPRZznfeX62eCCCargaXw9_ImRN7Pt=w455-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczNDaNtG7WxPGI6GiA1LiA4PMW6eWw9zbZ3JxtGAumt12c9xNMqQAkF0OWxubHZLJ9XlQATXx6TpKzZ3xitjqSN_WxEZBHNwSos7fY_uB6iAOetWH94kQNenHmP1qnmXcCx0sRBY5wQ5AIZbQOzgrnVd=w1366-h524-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczMReYatZuyV0Ia96NdK_frT0ywp9biDttupyXfRJB9etHb0tJAnCKTsy7ALbuGORWT8odk7FTxd91MtI75yWGyaRiyxsaTsfwNOoUBulrRGOfgtLPn4g1PtmBfHm9bt-MmM9JZLrlI92YYx1onLoluQ=w1315-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPi8GftbFKK8JBpw3RVbPMSMUbjQqQkG0JZUTIcNC2B2jy4RDctIciqXB6UPf2TE59uCLukk7gKtB_if-ogBmy0YzMdvnwsQtT-5m24-vDMukFwXSXNF4yhE0rLOqAsVEeqKNH6SQnUEivUOFuBCsLH=w1315-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczOxmLIVegior0qppzHgRkJkEAhvXTtBjwhC1fgBslhaVMOL70nnuCCAjy0-Xe7SzwVEYiT4gAVkG4CfY0xB4u4amWEpu4X_dYzkTY9YXReZVGf_NbHtq3YTbJPJo9i48F5s-6U0dc_MZwtBOnBAS7jO=w1315-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczPxJF-3MqAPkWjzTpgFyXqwLWhRj_fBvd6xFgLfN2A0OU64J6NYqDf8fvpfj5ZEEaFMca4H5ZfSmTu10M-1Os6XQ4nHX7W9iV0NjWoNGuVEbNTdT6VtSIViEi-U1FKcFnkR4jffElVXfP3rDOjcfrr5=w811-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczO6sAQY5kIwQubo0nTeyzKt8a3-dA3CHcbPMsClgLxT1gwqcCspMNBqUy5RWVgNGq2_sL9eEnDhmr0aJUJdfSi9bICm6MeI5lE3t95aj0os0wsxLFLwiCF7al7RsTRRQiot2xhgGOJ2VDSXfIAGgd4J=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczMPjrdHspwT1lBKmz73N94IduOPo8IR9_pTSJ79GHYRnVoFZBJLZJewKy0grQKAAbKgyEq01IRNpE8MFiktPKcxIXf6lSCc1LoPzfzAMLUbaf5FQMKMzAahDVg4FPBIuaX1mrz9epXK5rdgmMd8yqd_=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczMJ3ycdGrbx1LDyBjjGpsop_YMr0QRMiK5XF1wBLYc54PlD5SVfoKzvtep2zHZC5tPu7ksi-mYuqVq0tmnCZCgkc6YBqUoMGg1zMqEfS9iMNIL8RdRJ4m6xz2gtrJpPtde15t4dAJCLjwzo-QXHepCP=w809-h607-s-no-gm?authuser=3"},
  { type: "img", src: "https://lh3.googleusercontent.com/pw/AP1GczOX6LvoyKkfAhHirTOy13JdupsjZuXwdzHBBASzSZwekjLpNvOUTd0PQmJnLfn5OhMOD4JhGtFBP05vrDYKCRw7_2XxB0xIhwn04ffuD3M8ggTKQSmxpibfTy8mKWkIBfmCh-n2_svq9l5J_6e2XaUX=w809-h607-s-no-gm?authuser=3"},
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