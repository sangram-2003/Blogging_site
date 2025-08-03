import React, { useEffect, useState } from 'react'
import { Categories, ContainerLayout, Gallary, GallerySlider, GanoLayout02, HeadlineMiddle, ListGroup, NotificationForm, ProfileCard, SideBarLayout, Slider, UnderContainer01 } from '../components'
import Gallary1 from '../components/ImageGallary/Gallary1'
import { Link } from 'react-router-dom'
import {socialMedia , category} from '../data.js'
import service from '../appwrite/config.js'
import {  getRecentPosts} from '../store/postSlice.js'
import { useDispatch, useSelector } from 'react-redux'
function Home() {
const dispatch = useDispatch()
  const {recentPosts , isLoading}=useSelector((state)=>state.posts)
  console.log("get recent post ", recentPosts , isLoading)
  useEffect(() => {

      
      dispatch(getRecentPosts())
    
  }, []);

const trendingPosts =  recentPosts.filter((post)=> post.trending === "true");
console.log("trending " , trendingPosts);
const slides = [
  {
    image: './ad4.jpg',
    title: 'Mountain Biking Rush',
    description: 'Defy gravity and chase freedom across rugged landscapes. For those who live for the leap and the adrenaline!' 
  },
  {
    image: './n1.jpg',
        title: 'Night Balloon Escape',
    description: 'Drift above the calm waters under a starlit sky. A serene escape that feels like floating in a dream.'
  },
  {
    image: './ad3.jpg',
    title: 'River Tubing Adventure',
    description: 'Feel the thrill as you float through lush green canyons and wild river bends. A journey full of laughter and splashes awaits!'
  }
]
    return (
      <div className='w-full  '>
        <ContainerLayout>
           <Slider slide={slides}/>
           <Categories className='my-4'/>

           
        </ContainerLayout>

        <ContainerLayout className='mt-8 px-2'>
            <UnderContainer01>
                <GanoLayout02  data={recentPosts}/>
                <SideBarLayout>
                    <ProfileCard/>
                    <ListGroup  data={socialMedia}/>
                </SideBarLayout>
            </UnderContainer01>
        </ContainerLayout>
        <ContainerLayout className='mt-10 bg-stone-400 py-20'>
          <HeadlineMiddle/>
          <GallerySlider></GallerySlider>
        </ContainerLayout>
         <ContainerLayout className='mt-8 px-2'>
            <UnderContainer01>
                <GanoLayout02 data={trendingPosts} />
                <SideBarLayout>
                    <NotificationForm/>
                    <div className='my-3 w-full '>
                      <h1 className='text-lg font-medium'>Propular</h1>
                      <ul className='flex-col  space-y-2 gap-2'>
                        
                        {
                          trendingPosts?.map((post , index)=>(
                            <li className='hover:text-red-800' key={index}>
                          <Link to={'#'}>
                         <h1 className='text-[17px] font-normal line-clamp-2'>
                          {post.title}
                         </h1>
                         </Link>
                          </li>
                          ))
                        }
                        
                        
                  
                         
                          
                      </ul>
                    </div>

                    <ListGroup  data={category} />
                </SideBarLayout>
            </UnderContainer01>
        </ContainerLayout>
        
      </div>

    )
}

export default Home
