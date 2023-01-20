import React from 'react';

export default function Carousel() {
  return (
    <div className="totalcarousel">
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <video width="100%" height="400px" playsinline autoPlay muted loop>
              <source src="images/carouselv1.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div class="carousel-item">
            <video width="100%" height="400px" playsinline autoPlay muted loop>
              <source src="images/carouselv2.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div class="carousel-item">
            <video width="100%" height="400px" playsinline autoPlay muted loop>
              <source src="images/carouselv3.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
