
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
        <h2 className='display-5 text-center my-5'>Only three step you can apply your dream job</h2>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Build You Resume
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Are you ready to take your career to new heights? Your resume is the first impression potential employers have of you, and it is crucial to make it stand out from the competition. Let us help you craft a compelling and professional resume that showcases your skills, accomplishments, and potential.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Apply The Job
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
              Apply the job in local company or abroad company.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Sit On Interview
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
              In Interview answer the question properly.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;

