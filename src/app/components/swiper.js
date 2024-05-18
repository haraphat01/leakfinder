// import { Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'

// const testimonials = [
//   {
//     name: 'John Doe',
//     text: 'LeakFinder helped me discover that my email was part of a massive data breach. Thanks to their real-time alerts, I was able to secure my accounts before any damage was done.',
//   },
//   {
//     name: 'Jane Smith',
//     text: 'The peace of mind LeakFinder provides is invaluable. Their comprehensive scans and easy-to-use interface make it simple to stay on top of my data security.',
//   },
//   {
//     name: 'Robert Brown',
//     text: 'I highly recommend LeakFinder to anyone concerned about their online security. The educational resources alone are worth it!',
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-8">
//       <h3 className="text-2xl font-semibold mb-4 text-center">What Our Users Say</h3>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         pagination={{ clickable: true }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg text-center">
//               <p className="text-lg italic mb-4">"{testimonial.text}"</p>
//               <h4 className="text-xl font-semibold">- {testimonial.name}</h4>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
