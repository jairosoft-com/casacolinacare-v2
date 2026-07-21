import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="testimonial-inner reveal">
        <div>
          <h2>Discover the heart<br />behind our <span className="i">care.</span></h2>
          <div className="testi-body">
            <p>Hi there! I&apos;m Kriss Aseniero, Registered Nurse and the administrator of Casa Colina Care.</p>
            <p>My journey in healthcare began across the ocean in Carmel Valley, California, where I took my very first job as a caregiver. That experience ignited a lifelong passion for clinical excellence and senior advocacy, ultimately leading me to pursue my nursing degree. Over the years, working on the frontlines of patient care taught me that true healing happens when exceptional medical expertise meets the comfort of a place that feels like home.</p>
            <p>That philosophy is exactly why I founded Casa Colina Care right here in beautiful Honolulu. I wanted to create an Adult Residential Care Home where residents don&apos;t just receive top-tier, RN-managed clinical oversight, but where they truly thrive in a warm, dignified, and family-oriented environment.</p>
            <p>When I&apos;m not managing operations or checking in on our residents, you can usually find me enjoying the outdoors—whether I&apos;m spending time with my beautiful granddaughter, checking in on my son&apos;s latest college adventures at Azusa Pacific, or out on the water soaking in the Hawaii sunshine.</p>
            <p>Anyway, welcome! I know that choosing the right care for your loved one is a deeply personal decision, and I am here to make that journey as reassuring, clear, and supportive as possible.</p>
          </div>
          <cite><span className="heart">♡</span> Kriss</cite>
        </div>
        <div className="testi-img-wrap">
          <div className="testi-img">
            <Image
              src="/assets/kriss-homepage-new.png"
              alt="Kriss, RN, sharing a quiet moment with a resident"
              fill
              sizes="(min-width: 1320px) 464px, 42vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
