import { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css'
import axios from 'axios'
import'./App.css'
function App() {
  const [count, setCount] = useState(0)
  const [Image,setImage] = useState([]);
  
  const callApi = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
    setImage(res.data);
    console.log(Image);
  }

  useEffect(()=>{
    callApi()
  },[])

  const slide = Image.map((image)=>(
    <SwiperSlide key={Math.random()} className=' max-w-fit'>
      <img src={image.url} alt={image.title}/>
      <h2 className='border-2 border-gray-600'>lorem picsum</h2>
      <p className='max-w-full border-2 border-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam esse explicabo qui amet quae eveniet corrupti sapiente quod magnam aliquam.</p>
    </SwiperSlide>
  ));
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className=' pb-12'
    >
      {slide}
    </Swiper>
  )
}

export default App
