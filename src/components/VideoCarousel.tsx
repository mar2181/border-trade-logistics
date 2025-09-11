import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Film } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const { t } = useLanguage();

  const videos = [
    {
      id: "TfTzm9aI29c",
      title: t('news.fedRates'),
      description: t('news.fedRatesDesc')
    },
    {
      id: "fRc0qGYyRU4", 
      title: t('news.interestRates'),
      description: t('news.interestRatesDesc')
    },
    {
      id: "lqCFB4mAJj4",
      title: t('news.fedEnvironment'),
      description: t('news.fedEnvironmentDesc')
    },
    {
      id: "19k2h7gpQ2U",
      title: t('news.powellAnalysis'),
      description: t('news.powellAnalysisDesc')
    }
  ];

  const handleVideoClick = (index: number) => {
    setActiveVideo(activeVideo === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-4">
            <Film className="h-4 w-4 mr-2" />
            {t('marketInsights.title')}
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">{t('marketInsights.subtitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('marketInsights.description')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative aspect-video bg-muted">
                        {activeVideo === index ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div 
                            className="w-full h-full flex items-center justify-center cursor-pointer bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300"
                            onClick={() => handleVideoClick(index)}
                          >
                            <img
                              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-colors">
                                <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-primary mb-2 line-clamp-2">{video.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}