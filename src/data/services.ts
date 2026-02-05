export interface Service {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Genel Diş Bakımı',
    description: 'Rutin kontroller, diş temizliği ve koruyucu tedavilerle diş sağlığınızı koruyoruz.',
    fullContent: `Genel diş bakımı, ağız ve diş sağlığınızın korunması için düzenli olarak yapılması gereken temel hizmetleri içerir. Klinikimizde, deneyimli diş hekimlerimiz ve modern ekipmanlarımız ile kapsamlı diş muayenesi, profesyonel diş temizliği, diş taşı temizliği ve flor uygulaması gibi koruyucu tedavileri sunuyoruz.

Düzenli diş kontrolü, diş çürümesi, diş eti hastalıkları ve diğer ağız sağlığı problemlerinin erken teşhisi için kritik öneme sahiptir. Altı ayda bir yapılan rutin kontroller, olası sorunları henüz ağrıya ve ciddi hasara yol açmadan önlemenize yardımcı olur.

Profesyonel diş temizliği sırasında, diş hekimimiz veya hijyenistimiz, diş fırçası ve diş ipi ile temizlenemeyecek diş taşı ve plak birikintilerini özel aletlerle temizler. Bu işlem, diş eti hastalıklarını önlemeye ve dişlerinizin daha sağlıklı görünmesine yardımcı olur.`,
    image: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Estetik Diş Hekimliği',
    description: 'Diş beyazlatma, porselen laminalar ve gülüş tasarımı ile hayal ettiğiniz gülüşe kavuşun.',
    fullContent: `Estetik diş hekimliği, gülüşünüzün görsel estetiğini iyileştirmeye odaklanan dental tedavileri kapsar. Modern estetik diş hekimliği teknikleri ile dişlerinizin renk, şekil, boyut ve dizilimini iyileştirerek özgüveninizi artırabilir ve sosyal yaşamınızda pozitif değişiklikler yaratabilirsiniz.

Diş beyazlatma, en popüler estetik diş tedavilerinden biridir. Profesyonel beyazlatma sistemleri ile dişleriniz birkaç ton daha beyaz hale getirilebilir. LED teknolojisi kullanan beyazlatma uygulamalarımız, güvenli ve hızlı sonuçlar sunar.

Porselen laminalar (veneer), dişlerinizin ön yüzeyine yerleştirilen ince porselen kaplamalar ile gülüşünüzü dönüştürür. Renk değişiklikleri, çatlaklar, aralıklar ve küçük şekil bozuklukları gibi estetik sorunları etkin bir şekilde düzeltir.

Gülüş tasarımı (smile design), yüz hatlarınıza uygun, doğal ve estetik bir gülüş oluşturma sürecidir. Dijital teknolojiler kullanarak, tedavi öncesinde nasıl bir sonuç elde edeceğinizi görebilirsiniz.`,
    image: 'https://images.pexels.com/photos/3779697/pexels-photo-3779697.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'İmplant Tedavisi',
    description: 'En son teknoloji implant sistemleri ile eksik dişlerinizi doğal görünümlü şekilde tamamlıyoruz.',
    fullContent: `Diş implantı, eksik dişlerin yerine koymak için çene kemiğine yerleştirilen titanyum vidalar üzerine inşa edilen yapay dişlerdir. İmplantlar, doğal dişleriniz gibi görünür ve fonksiyon görür, bu nedenle eksik diş probleminin en ideal çözümüdür.

İmplant tedavisi birkaç aşamada gerçekleşir. İlk aşamada, implant vidası (titanyum vida) lokal anestezi altında çene kemiğine yerleştirilir. Ardından osseointegrasyon süreci başlar - bu süreçte implant kemik ile güçlü bir bağlantı oluşturur. Bu süreç genellikle 3-6 ay sürer.

Kemikleşme tamamlandıktan sonra, abutment (bağlantı parçası) implant üzerine yerleştirilir. Son aşamada, özel olarak hazırlanan porselen kron implant üzerine sabitlenir. Sonuç, doğal dişiniz kadar güçlü ve estetik bir dişdir.

İmplant tedavisinin başarı oranı %95'in üzerindedir. Doğru bakım ve düzenli kontroller ile implantlar ömür boyu kullanılabilir.`,
    image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Ortodonti (Tel Tedavisi)',
    description: 'Modern tel tedavisi yöntemleri ile dişlerinizi düzeltiyoruz.',
    fullContent: `Ortodonti, dişlerin ve çenelerin konumunu düzeltmek için uygulanan diş hekimliği dalıdır. Çapraşık dişler, aşırı kapanış, açık kapanış ve çene uyumsuzlukları gibi problemleri tedavi eder.

Modern ortodonti tedavileri, geleneksel metal teller, seramik (estetik) teller ve görünmez plaklar (invisalign) gibi çeşitli seçenekler sunar. Tedavi süresi, sorunun karmaşıklığına bağlı olarak 12-36 ay arasında değişir.

Ortodonti tedavisi sadece estetik değil, aynı zamanda fonksiyonel faydalar da sağlar. Düzgün dizilmiş dişler, daha kolay temizlenir, diş çürümesi ve diş eti hastalıkları riskini azaltır. Ayrıca düzgün bir kapanış, çiğneme fonksiyonunu iyileştirir ve çene ekleminde ağrı gibi problemleri önler.`,
    image: 'https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Çocuk Diş Hekimliği',
    description: 'Çocuklarınızın diş sağlığı için özel tedavi ve bakım.',
    fullContent: `Çocuk diş hekimliği (pedodonti), bebeklerin, çocukların ve ergenlerin ağız ve diş sağlığına odaklanan bir uzmanlık dalıdır. Klinikimizde, çocuklarınızın diş hekimi korkusunu yenmelerine yardımcı olan, güler yüzlü ve sabırlı bir ekip bulunmaktadır.

Çocuklarda diş bakımı, ilk süt dişi çıktığı andan itibaren başlamalıdır. İlk diş muayenesi, çocuğun 1 yaşında veya ilk dişi çıktığında yapılmalıdır. Erken muayeneler, gelişimsel problemleri ve diş çürümelerini erkenden tespit etmeye yardımcı olur.

Çocuk diş hekimliği hizmetlerimiz arasında rutin kontroller, diş temizliği, flor uygulaması, fissür örtücü uygulaması, süt dişi dolgular ve erken ortodontik değerlendirme yer alır. Ayrıca, çocukların ağız hijyeni alışkanlıkları kazanması için eğitim ve danışmanlık sunuyoruz.`,
    image: 'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Kanal Tedavisi',
    description: 'Ağrılı dişlerinizi kurtarmak için endodontik tedavi.',
    fullContent: `Kanal tedavisi (endodonti), dişin pulpa denilen iç kısmının enfekte olması veya hasar görmesi durumunda uygulanan bir tedavidir. Bu tedavi, dişi çekmek yerine kurtarmayı amaçlar.

Kanal tedavisi genellikle lokal anestezi altında ağrısız bir şekilde gerçekleştirilir. İşlem sırasında, diş hekimimiz enfekte veya hasarlı pulpa dokusunu dikkatlice temizler, kök kanallarını dezenfekte eder ve özel bir dolgu maddesi ile doldurur. Son olarak, diş bir kron veya dolgu ile restore edilir.

Modern kanal tedavisi teknikleri ve ekipmanları sayesinde, işlem genellikle tek seansta tamamlanabilir. Tedavi sonrası, diş normal fonksiyonuna döner ve yıllarca kullanılabilir. Doğal dişleri korumak her zaman en iyi seçenektir, çünkü hiçbir yapay diş doğal diş kadar iyi çalışmaz.`,
    image: 'https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
