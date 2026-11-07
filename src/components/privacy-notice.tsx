import Link from "next/link";
import { config } from "@/data/config";
import type { Locale } from "@/i18n/locale";

// TASLAK: Yayından önce bir hukukçu tarafından gözden geçirilmelidir.
// Google Analytics veya başka bir çerez/izleme aracı açılırsa "Çerezler"
// bölümü güncellenmeli; şu an site yalnızca tarayıcıda tema tercihi saklar.
const UPDATED = { tr: "7 Kasım 2026", en: "7 November 2026" };

type Section = { title: string; body: (string | string[])[] };

const controller = (locale: Locale) => {
  const { name, address } = config.legal;
  const where = address ? (locale === "tr" ? `, Adres: ${address}` : `, Address: ${address}`) : "";
  return locale === "tr"
    ? `Kişisel verileriniz, veri sorumlusu sıfatıyla ${name} (“Bonito”) tarafından işlenmektedir. İletişim: ${config.email}${where}.`
    : `Your personal data is processed by ${name} (“Bonito”) as the data controller. Contact: ${config.email}${where}.`;
};

const content: Record<Locale, { title: string; intro: string; sections: Section[] }> = {
  tr: {
    title: "KVKK Aydınlatma Metni",
    intro:
      "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, bonitoagency.com web sitesi üzerinden işlenen kişisel verileriniz hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.",
    sections: [
      { title: "1. Veri Sorumlusu", body: [controller("tr")] },
      {
        title: "2. İşlenen Kişisel Veriler",
        body: [
          "İletişim formu aracılığıyla: ad soyad, e-posta adresi ve mesajınızda paylaştığınız bilgiler.",
          "İşlem güvenliği kapsamında: IP adresi ve tarayıcı bilgileri. Bu veriler barındırma altyapısı tarafından güvenlik ve kötüye kullanımın önlenmesi amacıyla işlenir.",
        ],
      },
      {
        title: "3. İşleme Amaçları",
        body: [[
          "Talep ve sorularınıza yanıt verilmesi",
          "Teklif hazırlanması ve iş ilişkisinin kurulmasına yönelik görüşmelerin yürütülmesi",
          "Web sitesinin güvenliğinin sağlanması ve kötüye kullanımın önlenmesi",
        ]],
      },
      {
        title: "4. Hukuki Sebepler ve Toplama Yöntemi",
        body: [
          "Kişisel verileriniz, web sitesindeki iletişim formu aracılığıyla elektronik ortamda toplanır. Bu veriler KVKK m.5/2(c) uyarınca bir sözleşmenin kurulmasıyla doğrudan ilgili olması ve m.5/2(f) uyarınca temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz için zorunlu olması hukuki sebeplerine dayanılarak işlenir.",
        ],
      },
      {
        title: "5. Kişisel Verilerin Aktarılması",
        body: [
          "Kişisel verileriniz yalnızca yukarıdaki amaçlarla ve hizmetin sunulması için gerekli olduğu ölçüde aşağıdaki hizmet sağlayıcılara aktarılır:",
          [
            "Cloudflare, Inc.: web sitesinin barındırılması ve güvenliği",
            "Resend: iletişim formu mesajlarının e-posta olarak iletilmesi",
          ],
          "Bu hizmet sağlayıcıların sunucuları ABD dahil yurt dışında bulunabildiğinden, söz konusu aktarım KVKK m.9 kapsamında yurt dışına aktarım niteliğindedir ve formu gönderirken verdiğiniz açık rızaya dayanılarak gerçekleştirilir.",
        ],
      },
      {
        title: "6. Saklama Süresi",
        body: [
          "Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen süreler kadar saklanır. Bu sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir.",
        ],
      },
      {
        title: "7. Haklarınız",
        body: [
          "KVKK m.11 uyarınca veri sorumlusuna başvurarak:",
          [
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
            "İşlenmişse buna ilişkin bilgi talep etme",
            "İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
            "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
            "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
            "KVKK m.7'deki şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
            "Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme",
            "Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
            "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
          ],
          "haklarına sahipsiniz. Açık rızanızı dilediğiniz zaman geri alabilirsiniz.",
        ],
      },
      {
        title: "8. Başvuru",
        body: [
          `Haklarınıza ilişkin taleplerinizi ${config.email} adresine iletebilirsiniz. Başvurunuz en geç otuz gün içinde ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarife uygulanabilir.`,
        ],
      },
      {
        title: "9. Çerezler",
        body: [
          "Bu web sitesi reklam veya analiz amaçlı çerez kullanmaz. Tema ve hareket tercihleriniz yalnızca tarayıcınızda saklanır ve bize iletilmez.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Notice",
    intro:
      "This notice explains how personal data collected through the bonitoagency.com website is processed under Turkish Law No. 6698 on the Protection of Personal Data (“KVKK”).",
    sections: [
      { title: "1. Data Controller", body: [controller("en")] },
      {
        title: "2. Personal Data We Process",
        body: [
          "Through the contact form: your full name, email address and any information you share in your message.",
          "For security: IP address and browser information, processed by our hosting infrastructure to keep the website secure and prevent abuse.",
        ],
      },
      {
        title: "3. Purposes",
        body: [[
          "Responding to your requests and questions",
          "Preparing quotes and holding discussions about a potential business relationship",
          "Keeping the website secure and preventing abuse",
        ]],
      },
      {
        title: "4. Legal Grounds and Collection Method",
        body: [
          "Your personal data is collected electronically through the contact form on the website. It is processed on the grounds that it is directly related to the conclusion of a contract (KVKK Art. 5/2(c)) and that it is necessary for our legitimate interests, provided this does not harm your fundamental rights and freedoms (KVKK Art. 5/2(f)).",
        ],
      },
      {
        title: "5. Transfers",
        body: [
          "Your personal data is shared only for the purposes above and only to the extent needed to provide the service, with the following service providers:",
          [
            "Cloudflare, Inc.: website hosting and security",
            "Resend: delivering contact form messages by email",
          ],
          "As these providers may have servers outside Turkey, including in the United States, this constitutes a transfer abroad under KVKK Art. 9 and is based on the explicit consent you give when submitting the form.",
        ],
      },
      {
        title: "6. Retention",
        body: [
          "Your personal data is kept for as long as required for the purpose of processing and for the periods set out in applicable law. It is then deleted, destroyed or anonymised.",
        ],
      },
      {
        title: "7. Your Rights",
        body: [
          "Under KVKK Art. 11, you have the right to:",
          [
            "Learn whether your personal data is processed",
            "Request information if it has been processed",
            "Learn the purpose of processing and whether it is used accordingly",
            "Know the third parties in Turkey or abroad to whom it is transferred",
            "Request correction if it is incomplete or inaccurate",
            "Request deletion or destruction under the conditions of KVKK Art. 7",
            "Request that third parties to whom it was transferred are notified of correction, deletion or destruction",
            "Object to a result against you arising solely from automated analysis",
            "Claim compensation for damages caused by unlawful processing",
          ],
          "You may withdraw your explicit consent at any time.",
        ],
      },
      {
        title: "8. Requests",
        body: [
          `You can send requests regarding your rights to ${config.email}. Requests are answered free of charge within thirty days at the latest; if the request involves an additional cost, the fee set by the Personal Data Protection Board may apply.`,
        ],
      },
      {
        title: "9. Cookies",
        body: [
          "This website does not use advertising or analytics cookies. Your theme and motion preferences are stored only in your browser and are not sent to us.",
        ],
      },
    ],
  },
};

export default function PrivacyNotice({ locale }: { locale: Locale }) {
  const page = content[locale];
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-display text-3xl font-bold leading-[1.2] md:text-5xl">{page.title}</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">{page.intro}</p>
      {page.sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-lg font-bold md:text-xl">{section.title}</h2>
          {section.body.map((block, i) =>
            Array.isArray(block) ? (
              <ul key={i} className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
                {block.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                {block}
              </p>
            )
          )}
        </section>
      ))}
      <p className="mt-12 text-sm text-muted-foreground">
        {locale === "tr" ? "Son güncelleme: " : "Last updated: "}
        {UPDATED[locale]}
      </p>
      <Link href={locale === "tr" ? "/" : "/en"} className="mt-6 inline-block text-sm underline underline-offset-4">
        {locale === "tr" ? "Ana sayfaya dön" : "Back to home"}
      </Link>
    </main>
  );
}
