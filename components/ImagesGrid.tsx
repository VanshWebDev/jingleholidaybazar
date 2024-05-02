import React from "react";
import "../app/css/imagesGrid.css"
function ImagesGrid() {
  return (
    <div>
      <main>
        <div className="container">
          <div id="gallery" className="photos-grid-container gallery">
            <div className="main-photo img-box">
              <a
                href=""
                className="glightbox"
                data-glightbox="type: image"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2020/08/26/16/15/taj-mahal-5519945_1280.jpg"
                  alt="image"
                />
              </a>
            </div>
            <div>
              <div className="sub">
                <div className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://www.esikkimtourism.in/wp-content/uploads/2019/04/3rd-image.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2021/11/15/18/47/nature-6799071_1280.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2024/01/04/21/55/mountain-8488489_1280.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2020/12/09/21/39/city-5818738_1280.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2017/09/12/13/23/seville-2742309_1280.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2022/05/22/17/36/placa-despanya-7214152_1280.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2020/06/15/09/13/ship-5300965_960_720.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div id="multi-link" className="img-box">
                  <a
                    href=""
                    className="glightbox"
                    data-glightbox="type: image"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_1280.jpg"
                      alt="image"
                    />
                    {/* <div className="transparent-box">
                      <div className="caption">+3</div>
                    </div> */}
                  </a>
                </div>
              </div>
            </div>
            <div id="more-img" className="extra-images-container hide-element">
              <a
                href="https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdvbWVuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&h=1200&q=80"
                className="glightbox"
                data-glightbox="type: image"
              >
                <img
                  src="https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdvbWVuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&h=900&q=60"
                  alt="image"
                />
              </a>
              <a
                href="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHx3b21lbiUyMHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&h=1200&q=80"
                className="glightbox"
                data-glightbox="type: image"
              >
                <img
                  src="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHx3b21lbiUyMHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&h=900&q=60"
                  alt="image"
                />
              </a>
              <a
                href="https://images.unsplash.com/photo-1466695108335-44674aa2058b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=1200&q=80"
                className="glightbox"
                data-glightbox="type: image"
              >
                <img
                  src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=900&q=80"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ImagesGrid;
