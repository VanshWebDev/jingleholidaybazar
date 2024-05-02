import '../app/css/all.css'

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative rounded-lg bg-light-900 py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden border-2" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-dark mb-2">Want more tutorials & guides?</h3>
                <p className="text-gray-500 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-light-800 border border-gray-200 focus:border-gray-400 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                    <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Subscribe</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">No spam. You can unsubscribe at any time.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}