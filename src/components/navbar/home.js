import { Component } from "react";
import { Carousel, initTE } from "tw-elements";
import AuthenticationService from "../user/AuthenticationService";
import 'tw-elements';

initTE({ Carousel });

class home extends Component {

  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const loggedUserRole = AuthenticationService.loggedUserRole();
    // const loggedUser = AuthenticationService.loggedUserName();
    let loggedAsEManager = false;
    let loggedAsCManager = false;
    let loggedAsEditor = false;
    let unknownUser = false;

    if (isUserLoggedIn === true) {
      console.log("User Logged In")
    } else {
      unknownUser = true;
    }

    if (loggedUserRole != null && loggedUserRole === 'Employee Manager') {
      loggedAsEManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Customer Manager') {
      loggedAsCManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'editor') {
      loggedAsEditor = true;
    }

    return (
      <div class="">
        <div class="container pb-12">
          {/* <img className="object-contain object-center max-w-full bg-yellow-300" src="https://plazahollandi.com/wp-content/uploads/2020/09/bunches-of-tulips-scaled.jpg" alt="Jetwing Colombo Seven" /> */}
          <div class="object-center bg-[url(https://wallpapershome.com/images/pages/pic_h/17852.jpg)] h-[600px] w-[1296px] relative">
            <div class="absolute top-48 text-center px-4 py-3 bg-slate-300/50 font-serif w-full">
              <h1 class="text-white font-bold text-7xl"><span class="text-pink-600 text-8xl">S</span>onduruma <span class="text-pink-600 text-8xl">M</span>al<span class="">🌸</span></h1>
            </div>
          </div>
        </div>
        <section class="container">
          <div class="grid grid-cols-2 divide-x">
            <div class="text-center bg-white text-gray-800 pt-20 px-8 pb-10">
              <h3 class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight uppercase mb-8 drop-shadow-md "><span class="text-blue-950 uppercase font-serif font-light  ">Sonduruma mal Store</span>
              </h3>
              <p>Lassana Flora was founded by Dr. Lasantha Malavige (MBBS, DIPM, Ph.D.) while he was a third-year medical student at the Medical Faculty, Colombo in 1998. Since then, Lassana Flora has revolutionized Sri Lanka’s floral industry by rendering professional services and carefully developed quality assured procedures for producing the best floral arrangements. These efforts have not only helped Lassana Flora to create floral solutions at very competitive prices but also build its reputation as the foremost florist in the country with cost-effective and innovative floral designs.</p>
              <p>Ravindra de Silva - Manager - Sonduruma MAL- SRILANKA</p>
            </div>
            <div class="max-w-[80%] mx-auto px-5 py-5 lg:px-32 lg:pt-16">
              <img src="https://media.istockphoto.com/id/1440711298/vector/white-lily-flower-vector-illustration.jpg?s=612x612&w=0&k=20&c=di2tNrJwMGXyQsbdpAPOpvyNpwekOD1w53i9mDK5fmU=" alt="Events" class="h-[25rem] w-[80rem] pr-8 hover:animate-pulse" />
            </div>
          </div>
        </section>
        {/* events and meetings */}
        <section class="container">
          <div class="max-w-[90%] mx-auto px-5 pb-5 lg:px-32 lg:pt-12">
            <img src="https://www.1800flowers.com/blog/wp-content/uploads/2021/05/Birthday-Flowers-Colors.jpg" alt="Events" />
          </div>
          <div class="text-center bg-white text-gray-800 px-6">
            <h1 class="text-6xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">
              Our Services
              <hr />
            </h1>
          </div>
        </section>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center" >
          <div className="duration-500 shadow-xl card w-96 bg-base-100 hover:scale-105">
            <figure>
              <img src="https://wallpapershome.com/images/pages/pic_h/17611.jpg" alt="Shoes" class="h-72 object-cover " />
            </figure>
            <div className="card-body">
              <h2 className="justify-center pb-2 text-2xl text-center card-title">Fresh Flowers</h2>
              <p class="text-center">Born out of the historic splendour of Jetwing Seashells from 1978, our home has since grown into a symbol of modern elegance among Sri Lankan beach resorts. The enchantment of this nostalgic coastline has stayed true to our legendary family values.</p>
            </div>
          </div>
          <div className="duration-500 shadow-xl card w-96 bg-base-100 hover:scale-105">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/427.jpg" alt="Shoes" class="h-72 object-cover" /></figure>
            <div className="card-body">
              <h2 className="justify-center pb-2 text-2xl text-center card-title">Express Delivery</h2>
              <p class="text-center">It all began here – at our original home of Sri Lankan hospitality. The home in which we welcomed the world as part of our family, and treated the world as one of our own</p>
            </div>
          </div>
          <div className="duration-500 shadow-xl card w-96 bg-base-100 hover:scale-105">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/19548.jpg" alt="Shoes" class="h-72 object-cover" /></figure>
            <div className="card-body">
              <h2 className="justify-center pb-2 text-2xl text-center card-title">Wedding Decoration</h2>
              <p class="text-center">Built upon the land where our founder once resided, this exotic metropolis we call home is where our legendary hospitality shines the brightest – a privilege we extend to the world, as we take you in with open arms.</p>
            </div>
          </div>
        </div>


        {/*  */}
        <section class=" container">
          <div class="text-center bg-white text-gray-800 px-6 pt-6 ">
            <h1 class="text-6xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">
              Gallery
              <hr />
            </h1>
          </div>
          <div class="mb-24 container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-105 drop-shadow-lg">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center "
                    src="https://c4.wallpaperflare.com/wallpaper/1018/445/169/flower-bouquet-wallpaper-preview.jpg"
                  />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-105 drop-shadow-lg">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://wallpapercave.com/wp/7jMAFWF.jpg"
                  />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-105 drop-shadow-lg">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://img1.wallspic.com/crops/2/7/7/3/6/163772/163772-multicolor_flowers-rainbow_rose-flower-rose-floristry-1920x1080.jpg" />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-105 drop-shadow-lg">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://rare-gallery.com/uploads/posts/375687-4k-wallpaper.jpg"
                  />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-105 drop-shadow-lg">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://img3.wallspic.com/crops/5/2/0/1/5/151025/151025-red_roses_in_close_up_photography-1920x1080.jpg" />
                </div>
              </div>
              <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-105 drop-shadow-lg">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://wallpapercave.com/wp/hL4rH8O.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default home;