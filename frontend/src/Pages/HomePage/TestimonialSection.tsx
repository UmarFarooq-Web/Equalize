

import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'

export default function TestimonialSection(){
    const data = [
        {pic:pic1 , review:"Splitr has been a lifesaver for managing expenses with my roommates. It's so easy to keep track of who owes what." , name:"- Sarah, Student"},
        {pic:pic2 , review:"I love the receipt scanning feature! It saves so much time and eliminates the hassle of manual entry." , name:"- Mark, Roommate"},
        {pic:pic3 , review:"Splitr made splitting bills on our group trip a breeze. No more complicated spreadsheets or IOUs!" , name:"- Emily, Traveler"}
    ]
    return(<section id='testimonials' className="dark:bg-cBlack dark:text-cWhite-500 text-cBlack bg-cWhite-500 py-[100px] flex flex-col justify-center items-center px-[16px] sm:px-[42px]  md:px-[92px]" >
        <div className='flex flex-col items-center max-w-[1440px]' >
            
            <h1 className=" text-4xl md:text-5xl font-bold">What our users are saying</h1>
            <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-10" >
                {data.map(e=><div className="flex w-full md:w-1/3 flex-col rounded-2xl dark:bg-Pgray-500 p-5 gap-2" >
                    <img src={e.pic} alt="review" width={70} className='rounded-full' height={200}/>
                    <p className="dark:text-gray-500 italic" >"{e.review}"</p>
                    <h2 className="text-2xl font-semibold" >{e.name}</h2>
                </div>)}
        </div>
            </div>
        </section>
    )
}