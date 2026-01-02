 "use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import VideoPopup from "../elements/VideoPopup";

export default function Slide() {
  return (
    <section className="widget-tf-slider">
      <Swiper
      modules={[Autoplay, Pagination, Navigation]}
  slidesPerView={1}
  loop
  autoplay={{
    delay: 4500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  navigation={{
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  }}
  className="slider-wrap"
      >
        {/* ================= SLIDE 1 ================= */}
        <SwiperSlide>
          <div className="tf-slide-item">
            <div className="slide-item-image">
              <img src="/assets/images/slide/bg1.jpg" alt="Used Cars" />
              <div className="overlay" />
            </div>

            <div className="slide-item-content">
              <div className="slide-content">
                <span className="sub-title">
                  Trusted Used Car Dealer
                </span>

                <h1 className="title-slide">
                  Premium Pre-Owned Cars
                </h1>

                <p className="description">
                  Discover carefully inspected, high-quality used cars with
                  transparent history, fair pricing, and complete peace of mind.
                </p>

                <div className="box">
                  <Link href="/car-list" className="button_main_inner">
                    Go To Listing
                  </Link>

                  <div className="video-wrap">
                    <VideoPopup style={2} />
                  </div>
                </div>
              </div>

              <div className="slide-image">
                <img
                  src="/assets/images/slide/icon.png"
                  className="icon-shape"
                  alt=""
                />

                <div className="box-offer">
                  <p>
                    40 <span>%</span>
                  </p>
                  <span>OFF</span>
                </div>

                <div className="box-car">
                  <img src="/assets/images/slide/car.png" alt="Car" />
                </div>
              </div>

              <div className="box">
                <span>+(971) 565049928</span>
                <span>optimusmegatroncars@gmail.com</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 2 — WEDNESDAY OFFER ================= */}
     
      </Swiper>
    </section>
  );
}


  //  <SwiperSlide>
  //         <div className="tf-slide-item">
  //             <div className="slide-item-image">
  //             <img src="/assets/images/slide/bg3.png" alt="Used Cars" />
  //             <div className="overlay" />
  //           </div>

  //           <div className="slide-item-content">
  //             <div className="slide-content">
  //               <span className="sub-title">
  //                 Wednesday Special Deals
  //               </span>

  //               <h1 className="title-slide">
  //                 Wednesday Mega Offer 
  //               </h1>

  //               <p className="description">
  //                 One-day-only Wednesday discounts on selected premium
  //                 pre-owned cars. Limited stock available.
  //               </p>

  //               <div className="box">
  //                 <Link href="/car-list" className="button_main_inner">
  //                   View Wednesday Deals
  //                 </Link>

  //                 <div className="video-wrap">
  //                   <VideoPopup style={2} />
  //                 </div>
  //               </div>
  //             </div>

  //             <div className="slide-image">
  //               <img
  //                 src="/assets/images/slide/icon.png"
  //                 className="icon-shape"
  //                 alt=""
  //               />

  //               <div className="box-offer">
  //                 <p>
  //                   25 <span>%</span>
  //                 </p>
  //                 <span>WED ONLY</span>
  //               </div>

  //               <div className="box-car">
  //                 {/* <img src="/assets/images/slide/1.png" alt="Offer Car" /> */}
  //               </div>
  //             </div>

  //             <div className="box">
  //               <span>+(971) 565049928</span>
  //               <span>optimusmegatroncars@gmail.com</span>
  //             </div>
  //           </div>
  //         </div>
  //       </SwiperSlide>