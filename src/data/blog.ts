export interface BlogPost {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Diş Beyazlatma Tedavisi: Hızlı Sonuçlar',
    description: 'Modern diş beyazlatma yöntemleri hakkında bilgi edinin. Güvenli ve etkili tedaviler...',
    fullContent: `Diş beyazlatma, günümüzde en popüler estetik diş tedavilerinden biridir. Kahve, çay ve kırmızı şarab gibi renkli içecekler, zaman içinde dişlerin rengini koyulaştırabilir. Ayrıca sigara kullanımı da dişlerin sarılaşmasına neden olur.

Modern diş beyazlatma yöntemleri, profesyonel kliniklerde güvenli bir şekilde uygulanabilir. LED teknolojisini kullanan beyazlatma sistemleri, kısa sürede etkileyici sonuçlar verir. Genellikle 30 dakika ile 1 saat arasında tamamlanan bu tedavi, diş minesi zarar vermeden uygulanır.

Tedavi sonrası bazı hassasiyet yaşanabilir, ancak bu geçici bir durumdur. Düzenli bakım ve uygun ağız hijyeni ile beyazlatma etkisi uzun süre korunabilir. Renkli gıdalardan bir süre uzak durmak ve uygun bakım ürünleri kullanmak önerilir.

Eğer dişlerinizde renk problemi varsa, bizimle iletişime geçerek profesyonel danışmanlık alabilirsiniz. Kişiye özel tedavi planlaması ile en iyi sonuçları elde etmek mümkündür.`,
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2026-02-01'
  },
  {
    id: '2',
    title: 'İmplant Tedavisi: Eksik Dişlerin Çözümü',
    description: 'Diş implantları hakkında merak ettiğiniz her şey. Uzun ömürlü ve doğal görünümlü...',
    fullContent: `Diş implantı, eksik dişlerin en etkili ve uzun ömürlü çözümüdür. Modern implant teknolojisi, doğal dişleriniz kadar güçlü ve fonksiyonel dişler sağlar.

Implant tedavisi, çoğunlukla 3-6 ay boyunca birkaç aşamada gerçekleştirilir. İlk aşamada, implant vidası çene kemiğine yerleştirilir. Ardından osseointegration (kemikleşme) denilen süreçte implant kemikle güçlü bir bağlantı kurar.

Son aşamada, implant üzerine kronlar (yapay dişler) yerleştirilir. Bu kronlar, natural diş renginde ve şeklinde özelleştirilebilir. Sonuç olarak elde edilen dişler, hem estetik hem de fonksiyonel olarak mükemmel sonuçlar verir.

İmplant tedavisi, yaşlı hastalar da dâhil olmak üzere çoğu kişi için uygulanabilir. Kemik yoğunluğu yetersiz olan hastalara kemik greftleme de yapılabilir. Başarı oranı %95'in üzerindedir.`,
    image: 'https://images.pexels.com/photos/3807513/pexels-photo-3807513.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2026-01-25'
  },
  {
    id: '3',
    title: 'Çocuk Diş Sağlığı: Temel Bakım Önerileri',
    description: 'Çocuğunuzun diş sağlığını korumak için yapılması gerekenler. Erken yaştan başlayan...',
    fullContent: `Çocuk diş sağlığı, hayat boyu sağlıklı dişlere sahip olmak için çok önemlidir. Bebeğin ilk dişi yaklaşık 6 ay civarında çıkmaya başlar ve bu dönem dikkat gerektir.

Bebeklerin dişleri süt dişleridir ve sonrasında daimi dişlerle değiştirilir. Fakat süt dişlerinin sağlığı da daimi dişlerin sağlığını etkilediğinden ihmal edilmemelidir. Düzenli diş fırçalama, floss kullanımı ve şeker tüketiminin kısıtlanması önemlidir.

İlk diş kontrol muayenesi, bebeğin ilk dişi çıktığında yapılmalıdır. Altı ayda bir düzenli kontroller, oluşabilecek problemleri erken aşamada tespit etmeyi sağlar. Ayrıca profesyonel diş temizliği ve flor uygulamaları, diş çürümesini önlemede etkilidir.

Çocuğunuzun uygun beslenme alışkanlıkları edinmesi de önemlidir. Şeker içeceği ve yapışkan gıdaları sınırlamak, dişlerin sağlığını korur.`,
    image: 'https://images.pexels.com/photos/3807514/pexels-photo-3807514.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2026-01-20'
  }
];

export const allFAQs = [
  {
    id: 1,
    question: 'Diş beyazlatma tedavisi ne kadar sürer?',
    answer: 'Profesyonel diş beyazlatma tedavisi genellikle 30 dakika ile 1 saat arasında sürer. Sonuçlar genellikle hemen görülür ve tedavi sonrası 6 ay ile 2 yıl arasında etkisini korur.'
  },
  {
    id: 2,
    question: 'İmplant tedavisi ağrılı mıdır?',
    answer: 'İmplant tedavisi yerleştirme sırasında lokal anestezi altında yapılır, bu nedenle ağrı hissetmezsiniz. Tedavi sonrası hafif hassasiyet ve şişlik olabilir, ancak reçeteli ağrı kesiciler ile kontrol edilebilir.'
  },
  {
    id: 3,
    question: 'Kaç yaşından itibaren çocuk diş hekimliğine gidebilir?',
    answer: 'Bebeğinizin ilk dişi çıktığında veya en geç 1 yaşında ilk diş kontrolü yapılmalıdır. Daha erken başlanan muayeneler, ileride oluşabilecek problemleri önlemeye yardımcı olur.'
  },
  {
    id: 4,
    question: 'Diş temizliği ne sıklıkla yapılmalıdır?',
    answer: 'Profesyonel diş temizliği, genellikle 6 ayda bir yapılması önerilir. Ancak diş taşı birikimi fazla olan kişiler için 3 ayda bir temizlik gerekebilir.'
  },
  {
    id: 5,
    question: 'Gözükmez teller (iletkiler) estetik midir?',
    answer: 'Evet, gözükmez teller tamamen estetiktir. Dişlerin arkasına yapıldığı için hiç görülmez. Başarı oranı diğer tel yöntemleri kadar yüksektir.'
  },
  {
    id: 6,
    question: 'Protez dişler gerçek dişler kadar güçlü müdür?',
    answer: 'Modern protez dişler çok dayanıklı olmasına rağmen, doğal dişler veya implantlar kadar güçlü değildir. Bununla birlikte, doğru bakım ile uzun yıllar kullanılabilir.'
  },
  {
    id: 7,
    question: 'Kanal tedavisi ne kadar zaman alır?',
    answer: 'Kanal tedavisi, dişin karmaşıklığına bağlı olarak 1-2 saat arasında sürebilir. Çoğu zaman tek seansta tamamlanabilir, ancak bazı durumlarda birkaç seansta bölünerek yapılabilir.'
  },
  {
    id: 8,
    question: 'Hamilelik sırasında diş tedavisi yapılabilir mi?',
    answer: 'Evet, hamilelik sırasında gerekli diş tedavileri yapılabilir. Bununla birlikte, karmaşık tedaviler trimester sonlarında ertelenmesi önerilir. Rutin temizlik ve kontroller güvenlidir.'
  }
];
