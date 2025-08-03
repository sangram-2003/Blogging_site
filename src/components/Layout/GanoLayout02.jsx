import React from "react";
import HeadlingSection from "../Headling-section/HeadlingSection";
import Headline from "../Headling-section/Headline";
import MoreBtn from "../Buttons/MoreBtn";
import Card01 from "../Cards/Card01";



function GanoLayout02(
  {
    data
  }
) {


  console.log("gano ", data)
	// const post = {
  //   image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  //   alt: 'Mountain Adventure',
  //   category: 'Travel',
  //   title: 'Exploring the Great Mountains',
  //   para: 'Discover the most beautiful mountain ranges and what makes them so majestic...',
  //   userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
  //   userAlt: 'John Doe',
  //   userName: 'John Doe',
  //   date: 'July 25, 2025',
  //   link: '/blog/mountain-adventure'
  // }

	return (
		<>
			<div className=" w-full md:w-9/12 h-full  grid-cols-12 grid gap-2  ">
				<div className="col-span-12  row-start-1">
					<HeadlingSection>
						<Headline title={"Explore place"} />
						<MoreBtn title={"More"} className="bg-none"/>
					</HeadlingSection>
				</div>
				

				<div className="   col-span-12 grid grid-cols-12 gap-2   ">
					
           {

            data?.map((post , index)=>(
 <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 h-auto  " key={index}>
					 <Card01
        image={post.featuredImage}
       
        category={post.category}
        title={post.title}
        para={post.content}
        
        userAlt={post.userAlt}
        
        date={post.$createdAt}
        link={`/post/${post.$id}`}
      />
					</div>

            ))
           }       
         
        


          
         
					
				</div>
			</div>
		</>
	);
}

export default GanoLayout02;
