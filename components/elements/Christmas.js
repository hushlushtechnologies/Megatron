'use client'
import Link from "next/link";

export default function ChristmasOffers() {
  const offers = [
    {
      img: "/assets/images/christmax/0f.png",
      title: "Christmas Sale",
      subtitle: "Up to 20% OFF",
    },
    {
      img: "/assets/images/christmax/0f2.png",
      title: "Year End Deals",
      subtitle: "Best Used Car Prices",
    },
    {
      img: "/assets/images/christmax/0f3.png",
      title: "Limited Time Offer",
      subtitle: "Festive Discounts",
    },
  ];

  return (
    <section className="christmas-offers mt-5">
      <div className="themesflat-container">
       <div className="heading-section text-center mb-40">
  {/* <span className="sub-title">🎉 New Year Specials</span> */}
  <h2 className="title">New Year Car Deals</h2>
  <p>Start the New Year with exclusive offers on premium used cars</p>
</div>


        <div className="row">
          {offers.map((offer, index) => (
            <div className="col-xl-4 col-md-6 col-12" key={index}>
              <Link href="/car-list" className="christmas-card">
                <div className="image-wrap">
                  <img src={offer.img} alt={offer.title} />
                </div>

                {/* <div className="content">
                  <h4>{offer.title}</h4>
                  <p>{offer.subtitle}</p>
                  <span className="cta">View Deals →</span>
                </div> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
