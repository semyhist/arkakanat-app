import { Share, PlusSquare, MoreVertical, Smartphone, Download } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AddToHomeScreenPage = () => {
  return (
    <div className="py-8 sm:py-10 md:py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-800 text-center mb-8 sm:mb-10 md:mb-12 flex items-center justify-center">
        <Download size={36} className="mr-4" />
        Ana Ekrana Ekle
      </h1>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
        {/* iOS Talimatları */}
        <AnimatedSection>
          <div className="dark:bg-zinc-900 bg-white p-6 sm:p-8 rounded-2xl border dark:border-zinc-700/50 border-gray-300 shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-4 text-center">iOS (iPhone/iPad)</h2>
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">1.</span>
                <span><strong className="font-semibold">Safari</strong> tarayıcısını açın ve sitemizi ziyaret edin.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">2.</span>
                <span>Ekranın altındaki <Share size={20} className="inline-block mx-1" /> <strong className="font-semibold">Paylaş</strong> simgesine dokunun.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">3.</span>
                <span>Açılan menüde aşağı kaydırın ve <PlusSquare size={20} className="inline-block mx-1" /> <strong className="font-semibold">"Ana Ekrana Ekle"</strong> seçeneğine dokunun.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">4.</span>
                <span>Sağ üst köşedeki <strong className="font-semibold">"Ekle"</strong> düğmesine dokunarak işlemi tamamlayın.</span>
              </li>
            </ol>
          </div>
        </AnimatedSection>

        {/* Android Talimatları */}
        <AnimatedSection delay={200}>
          <div className="dark:bg-zinc-900 bg-white p-6 sm:p-8 rounded-2xl border dark:border-zinc-700/50 border-gray-300 shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Android</h2>
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">1.</span>
                <span><strong className="font-semibold">Chrome</strong> tarayıcısını açın ve sitemizi ziyaret edin.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">2.</span>
                <span>Sağ üst köşedeki <MoreVertical size={20} className="inline-block mx-1" /> <strong className="font-semibold">üç nokta</strong> menü simgesine dokunun.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">3.</span>
                <span>Açılan menüde <strong className="font-semibold">"Uygulamayı Yükle"</strong> veya <strong className="font-semibold">"Ana ekrana ekle"</strong> seçeneğine dokunun.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-500 mr-3">4.</span>
                <span>Gelen yönergeleri izleyerek işlemi tamamlayın.</span>
              </li>
            </ol>
          </div>
        </AnimatedSection>
      </div>
       <div className="text-center mt-12">
          <Smartphone size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Artık uygulamamıza ana ekranınızdan tek dokunuşla erişebilirsiniz!</p>
        </div>
    </div>
  );
};

export default AddToHomeScreenPage;