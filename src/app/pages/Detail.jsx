import { CarCrashOutlined, CarRental, CarRepair, CardTravelOutlined, FreeBreakfast, LocalParking, Park, Pin, PinDrop, PinDropOutlined, PinDropRounded, PinDropSharp, PinDropTwoTone, Place, PlaceOutlined, PlaceSharp, PlayCircle, Star, StarHalf, ThumbUp, ThumbUpAltOutlined, ThumbUpSharp, Wifi, Wifi1Bar, Wifi2BarOutlined, WifiChannel, WifiOutlined} from "@mui/icons-material";

const EventDetail = () => {

    
    return ( 
        <div className="event-details ">
            {/* images */}
            <section className="Images bg-white py-10 container md:grid flex justify-center items-center flex-col grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-5 mx-auto ">
                <img
                    className=" shadow-xl w-[400px] rounded-lg md:row-span-2 md:col-span-2  md:w-full md:h-full object-cover md:rounded-lg  sm:rounded-md"
                    src="https://www.rupp.edu.kh/ifl/english/image_banner/img_ifl_doe.jpg"
                    alt=""
                />
                <img
                    className=" shadow-lg w-[400px]  rounded-lg md:rouned-md md:w-full md:h-full object-cover md:col-span-1"
                    src="https://academics-bucket-sj19asxm-prod.s3.ap-southeast-1.amazonaws.com/3268bdb3-39f2-4818-87cb-7939736f2740/0706543a-4a63-4a17-8aaf-210ebbfb558d.jpg"
                    alt=""
                />
                <img
                    className=" shadow-lg  w-[400px]  rounded-lg md:rounded-md md:w-full md:h-full object-cover md:col-span-1"
                    src="https://web-rupp.camemis-learn.com/static/images/rupp_bg.jpg"
                    alt=""
                />
            </section>

            {/* overview and reviews labels */}
            <div className=" border-b border-gray-300 shadow-md">
                <div className="l mx-5 abels container md:mx-auto font-semibold text-gray-600 ">
                    <ul className="flex justify-start">
                        <li className="px-3 mr-5 pb-2 border-b-2 border-blue-500 ">Overview</li>
                        <li className="px-3 pb-2">Review</li>
                    </ul>
                </div>
            </div>

            <section className="event-infos bg-zinc-100 pb-10">
                {/* event name and shorthanded info (rating, location) */}
                <div className="event-shorthanded-info container mx-auto py-8 pl-5 md:pl-0 ">
                    <h1 className=" text-2xl md:text-3xl font-semibold text-gray-800" > { "RUPP's charity Event" } </h1>
                    <div className=" text-sm leading-8 ">
                        <p className=" flex " > 
                            <div className=" text-xl text-yellow-500" ><Star /><Star /><Star /><Star /><StarHalf /> </div> { "4.5 (1200 Reviews)" } 
                        </p>
                        <p className=" text-gray-900 font-semibold "> <PlaceOutlined className=" text-blue-600" /> { "Royal University of Phnom Penh, Phnom Penh, Cambodia" } </p>
                    </div>
                </div>

                {/* overview details and map */}
                <div className="detailed-infos-container container mx-auto md:grid grid-cols-3 gap-x-10 ">
                    <div className="overview-details col-span-2 ">
                        <div className="shadow p-6 rounded-t-lg bg-white">
                            <div className="mb-5 text-md font-semibold ">Overview</div>
                            <div className="overview font-semibold leading-6 text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo cum aliquam vel dignissimos.<br/>
                                    voluptates quos veritatis id, pariatur accusamus modi culpa inventore rerum dolor atque, neque nulla debitis incidunt.<br/> 
                                    Neque aut ipsum repellendus culpa? Distinctio eligendi ipsam, provident accusamus, repudiandae neque, laborum nihil numquam possimus qui doloribus!
                            </div>
                        </div>
                        <div className="event-shorthanded-detail mt-1 leading-8 shadow rounded-b-lg p-6 bg-white">
                            <div className=" text-base font-semibold">Event details</div>
                            <div className="text-xs md:text-sm leading-7 md:leading-none">
                                <p> <WifiOutlined className=" text-xl md:text-2xl text-blue-500" /> { "Free to join" } </p>
                                <p> <CarRepair className=" text-xl md:text-2xl text-blue-500" /> { "Parking available" } </p>
                                <p> <ThumbUpAltOutlined  className=" text-xl md:text-2xl text-blue-500"/> { "Top rated in area" } </p>
                                
                            </div>
                        </div>
                    </div>

                    {/* map iframe */}
                    <div className="map">
                        <iframe
                        className=" mt-2  shadow-md w-[400px] h-[300px] min-h-[200px] max-h-[300px] mx-auto min-w-[200px] max-w-[400px] md:max-w-none md:max-h-none md:mt-0 md:w-full md:h-full rounded-xl" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.171905616345!2d104.88959376018452!3d11.567934735469128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1702457285995!5m2!1sen!2skh" 
                        
                        allowfullscreen="" 
                        loading="lazy"
                         referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                
            </section>
        </div>
     );
}
 
export default EventDetail;