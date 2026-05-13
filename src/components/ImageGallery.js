import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ImageGallery = ({ project }) => {
  const { name, tag, category, year, impact, chips, images, videos } = project;

  return (
    <div className="bg-bg min-h-screen">
      {/* Hero */}
      <section
        className="px-12 pb-16 border-b border-[#3f3f46] relative overflow-hidden"
        style={{ paddingTop: '120px' }}
      >
        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-80px', right: '-80px',
            width: '600px', height: '500px',
            background: 'radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-[760px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2.5 text-[12px] text-[#a1a1aa] uppercase tracking-[0.06em] mb-7">
            <span>Portfolio</span>
            <span className="text-[#3f3f46]">/</span>
            <strong className="text-accent font-medium">{tag}</strong>
          </div>

          <h1
            className="font-serif font-normal text-white mb-5"
            style={{ fontSize: 'clamp(36px, 4.5vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
          >
            {name}
          </h1>

          {impact && (
            <p className="text-[15px] text-[#a1a1aa] leading-[1.75] mb-10 max-w-[600px]">
              {impact}
            </p>
          )}

          {/* Meta cells */}
          <div
            className="grid gap-px bg-[#3f3f46] border border-[#3f3f46] rounded-xl overflow-hidden mb-10"
            style={{ gridTemplateColumns: 'repeat(3,1fr)' }}
          >
            {[
              { label: 'Category', value: category },
              { label: 'Year', value: year },
              { label: 'Type', value: 'Case Study' },
            ].map((m) => (
              <div key={m.label} className="bg-surface px-5 py-4">
                <div className="text-[10px] tracking-[0.10em] uppercase text-[#a1a1aa] mb-1">{m.label}</div>
                <div className="text-[13px] font-medium text-white">{m.value}</div>
              </div>
            ))}
          </div>

          {chips && (
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-bold tracking-[0.10em] uppercase text-accent bg-[rgba(167,139,250,0.10)] border border-[rgba(167,139,250,0.25)] px-3 py-1 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-12 py-16">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-3">
          {images?.map((img) => (
            <LazyLoadImage
              key={img.id}
              src={img.url}
              alt={`${name} screen ${img.id}`}
              effect="blur"
              className="w-full rounded-xl"
              style={{ display: 'block' }}
            />
          ))}
          {videos?.map((video, i) => (
            <video key={i} className="w-full rounded-xl" controls>
              <source src={video.url} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>
    </div>
  );
};
