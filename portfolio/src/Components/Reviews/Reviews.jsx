import React from 'react'
import './Reviews.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'



function Reviews() {

  // const clients = [
  //   {
  //       img: profilePic1,
  //       review: 
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corrupti neque inventore laborum odio nulla dolores unde reprehenderit minima Magni suscipit, necessitatibus voluptates quam assumenda dolor iusto soluta placeat ipsum."
  //   },
  //   {
  //       img: profilePic2,
  //       review: 
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corrupti neque inventore laborum odio nulla dolores unde reprehenderit minima Magni suscipit, necessitatibus voluptates quam assumenda dolor iusto soluta placeat ipsum."
  //   },
  //   {
  //       img: profilePic3,
  //       review: 
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corrupti neque inventore laborum odio nulla dolores unde reprehenderit minima Magni suscipit, necessitatibus voluptates quam assumenda dolor iusto soluta placeat ipsum."
  //   },

  // ]

  return (

    <div className="r-wrapper" id='Testimonials'>
        <div className="r-heading">
            <span>Testimonials</span>
            <span>Will be Updated Soon</span>
        </div>
    </div>

    // <div className="r-wrapper">
    //     <div className="r-heading">
    //         <span>Client always get </span>
    //         <span>Exceptional Work </span>
    //         <span>from me...</span>
    //         <div className="blur r-blur1" style={{background: 'var(--purple)'}}></div>
    //         <div className="blur r-blur2" style={{background: 'skyblue'}}></div>
    //     </div>
    //     <Swiper
    //     modules={[Pagination]}
    //     slidesPerView={1}
    //     pagination={{clickable:true}}
    //     className="review"
    //     >
    //         {
    //             clients.map((client, index)=>{
    //                 return(
    //                     <div>
    //                         <SwiperSlide key={index}>
    //                         <img src={client.img} alt="" style={{
    //                         height:'16rem', width:'16rem', 
    //                         borderRadius:'100%', marginLeft: '40%',
                            
    //                         }} />
    //                         <span style={{fontSize:'18px'}}> <br /><br /> {client.review}</span>
    //                         </SwiperSlide>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </Swiper>
    // </div>
  )
}

export default Reviews