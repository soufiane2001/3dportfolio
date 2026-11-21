import type { Locale } from "./translations";

const summaries: Record<"en" | "ar", Record<string, string>> = {
  en: {
    "mirado-clothing": "A clothing store with a product catalogue, product pages, mobile ordering and an administration area.",
    "site-ecommerce": "An online store with a product catalogue, ordering flow and cash-on-delivery support, built with PHP and MySQL.",
    "reby-art": "A React portfolio presenting a French painter, their work and their artistic practice.",
    "highup-counselling": "A Canadian Wix website explaining counselling services and helping visitors contact the practice.",
    "cash-management-app": "A React Native application for tracking everyday expenses, connected to Firebase.",
    "patient-management": "An Electron.js desktop application for managing patient records in one interface.",
    "horea-formation": "A WordPress website presenting a training centre, its programmes and practical information.",
    "dar-mooris": "A textile catalogue presenting personalised products and supporting enquiries through WhatsApp.",
    "gamlastan": "A responsive online store interface built with Next.js for browsing products across devices.",
    "dr-boutatss-nora": "A medical practice website presenting the practitioner, services, practical information and appointment links.",
    "pizza-napoli-toul": "A restaurant website for Pizza Napoli in Toul, France, with the menu, opening hours, address and telephone.",
  },
  ar: {
    "mirado-clothing": "متجر ملابس يضم كتالوجًا وصفحات للمنتجات وطلبات عبر الهاتف ومساحة لإدارة الطلبات.",
    "site-ecommerce": "متجر إلكتروني باستخدام PHP وMySQL، مع كتالوج للمنتجات ومسار للطلب والدفع عند الاستلام.",
    "reby-art": "موقع أعمال باستخدام React يعرض لوحات فنان فرنسي ويقدم تجربته الفنية.",
    "highup-counselling": "موقع كندي باستخدام Wix يوضح خدمات الاستشارة النفسية ويساعد الزوار على التواصل مع العيادة.",
    "cash-management-app": "تطبيق React Native لتتبع المصاريف اليومية، مرتبط بخدمات Firebase.",
    "patient-management": "تطبيق للحاسوب باستخدام Electron.js لإدارة ملفات المرضى ضمن واجهة واحدة.",
    "horea-formation": "موقع WordPress يقدم مركزًا للتكوين وبرامجه ومعلوماته العملية.",
    "dar-mooris": "كتالوج للمنتجات النسيجية المخصصة، مع عرض المجموعات وطلبات عبر WhatsApp.",
    "gamlastan": "واجهة متجر إلكتروني باستخدام Next.js لتصفح المنتجات على الهاتف والحاسوب.",
    "dr-boutatss-nora": "موقع لعيادة طبية يعرض تخصصات الطبيبة ومعلومات الوصول وروابط حجز المواعيد.",
    "pizza-napoli-toul": "موقع مطعم Pizza Napoli في مدينة تول الفرنسية، مع قائمة الطعام والأوقات والعنوان ورقم الهاتف.",
  },
};

export function projectSummary(slug: string, locale: Locale, french: string) {
  return locale === "fr" ? french : summaries[locale][slug] ?? french;
}

export const englishProjectTitles: Record<string, { title: string; category: string }> = {
  "mirado-clothing": { title: "Mirado Clothing — Online clothing store", category: "Ecommerce" },
  "site-ecommerce": { title: "Online store with cash on delivery", category: "Ecommerce" },
  "reby-art": { title: "Reby Art — Artist portfolio", category: "React website" },
  "highup-counselling": { title: "HighUp Counselling — Service website", category: "Professional website" },
  "cash-management-app": { title: "Cash Management — Expense tracking app", category: "Mobile application" },
  "patient-management": { title: "Patient Management — Desktop application", category: "Business application" },
  "horea-formation": { title: "Horea Formation — Training centre", category: "WordPress website" },
  "dar-mooris": { title: "Dar Mooris — Textile catalogue", category: "Product catalogue" },
  "gamlastan": { title: "Gamlastan — Next.js store interface", category: "Next.js interface" },
  "dr-boutatss-nora": { title: "Dr Nora Boutatss — Medical practice website", category: "Professional website" },
  "pizza-napoli-toul": { title: "Pizza Napoli Toul — Restaurant website", category: "Restaurant website" },
};
