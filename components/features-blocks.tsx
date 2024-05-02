export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">At Jingle Holiday Bazar All Over India Destination Gallery</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-xl">
            <img style={{borderRadius:'10px'}} src="https://cdn.pixabay.com/photo/2020/04/22/17/32/indian-5079277_1280.jpg" alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2">New Delhi</h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-xl">
            <img style={{borderRadius:'10px'}} src="https://cdn.pixabay.com/photo/2022/09/13/13/03/shimla-7451879_1280.jpg" alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2">Shimla</h4>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-xl">
            <img style={{borderRadius:'10px'}} src="https://cdn.pixabay.com/photo/2020/01/31/14/26/taj-mahal-sunset-4808227_1280.jpg" alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2">Agra</h4>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-xl">
            <img style={{borderRadius:'10px'}} src="https://cdn.pixabay.com/photo/2016/11/22/19/25/adventure-1850178_1280.jpg" alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2">Kullu & Manali</h4>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-xl">
            <img style={{borderRadius:'10px'}} src="https://cdn.pixabay.com/photo/2020/12/28/22/45/golden-temple-5868752_1280.jpg" alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2">Amritsar</h4>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-xl">
            <img style={{borderRadius:'10px'}} src="https://cdn.pixabay.com/photo/2019/08/19/16/22/hills-4416873_1280.jpg" alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mt-2">Headless CMS</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}