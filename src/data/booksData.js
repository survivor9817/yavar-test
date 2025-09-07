const lorem = `<p>
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  </p>
  <p>
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  </p>
  <p>
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  </p>
  <p>
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  </p>
  <p>
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  </p>
  <p>
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی. متن اصلی کتاب درسی آزمایشی.
  </p>
`;

function createLoremArr(pagesNumber) {
  const loremArray = [];
  for (let i = 1; i <= pagesNumber; i++) {
    const page = { id: i, content: lorem };
    loremArray.push(page);
  }
  return loremArray;
}

export const booksData = {
  "علوم تجربی ۷": {
    fehrest: [
      {
        id: "1-0",
        refPage: 1,
        indent: 0,
        refTitle: "بخش ۱: علوم و ابزارهای آن",
      },
      { id: "1-1", refPage: 2, indent: 1, refTitle: "۱: تفکر و تجربه" },
      {
        id: "1-2",
        refPage: 6,
        indent: 1,
        refTitle: "۲. اندازه‌گیری در علوم و ابزارهای آن",
      },
      {
        id: "2-0",
        refPage: 12,
        indent: 0,
        refTitle: "بخش ۲: مواد در زندگی ما",
      },
      { id: "2-1", refPage: 13, indent: 1, refTitle: "۳. اتم‌ها؛ الفبای مواد" },
      { id: "2-2", refPage: 25, indent: 1, refTitle: "۴. مواد پیرامون ما" },
      {
        id: "3-0",
        refPage: 35,
        indent: 0,
        refTitle: "بخش ۳: منابع خدادادی در خدمت ما",
      },
      { id: "3-1", refPage: 36, indent: 1, refTitle: "۵. از معدن تا خانه" },
      { id: "3-2", refPage: 48, indent: 1, refTitle: "۶. سفر آب روی زمین" },
      { id: "3-3", refPage: 56, indent: 1, refTitle: "۷. سفر آب درون زمین" },
      {
        id: "4-0",
        refPage: 65,
        indent: 0,
        refTitle: "بخش ۴: انرژی؛ نیاز همیشگی",
      },
      {
        id: "4-1",
        refPage: 66,
        indent: 1,
        refTitle: "۸. انرژی و تبدیل‌های آن",
      },
      { id: "4-2", refPage: 77, indent: 1, refTitle: "۹. منابع انرژی" },
      {
        id: "4-3",
        refPage: 86,
        indent: 1,
        refTitle: "۱۰. گرما و بهینه‌سازی مصرف انرژی",
      },
      { id: "5-0", refPage: 98, indent: 0, refTitle: "بخش ۵: دنیای درون من" },
      {
        id: "5-1",
        refPage: 99,
        indent: 1,
        refTitle: "۱۱. یاخته و سازمان‌بندی آن",
      },
      { id: "5-2", refPage: 107, indent: 1, refTitle: "۱۲. سفره سلامت" },
      { id: "5-3", refPage: 116, indent: 1, refTitle: "۱۳. سفر غذا" },
      { id: "5-4", refPage: 124, indent: 1, refTitle: "۱۴. گردش مواد" },
      { id: "5-5", refPage: 132, indent: 1, refTitle: "۱۵. تبادل با محیط" },
    ],
    maxPageNumber: 138,
    content: createLoremArr(138),
  },
  "علوم تجربی ۸": {
    fehrest: [
      { id: "1-0", refPage: 1, indent: 0, refTitle: "۱. مخلوط و جداسازی مواد" },
      {
        id: "2-0",
        refPage: 9,
        indent: 0,
        refTitle: "۲. تغییرهای شیمیایی در خدمت زندگی",
      },
      { id: "3-0", refPage: 21, indent: 0, refTitle: "۳. از درون اتم چه‌خبر" },
      { id: "4-0", refPage: 28, indent: 0, refTitle: "۴. تنظیم عصبی" },
      { id: "5-0", refPage: 35, indent: 0, refTitle: "۵. حس و حرکت" },
      { id: "6-0", refPage: 47, indent: 0, refTitle: "۶. تنظیم هورمونی" },
      { id: "7-0", refPage: 55, indent: 0, refTitle: "۷. الفبای زیست‌فناوری" },
      {
        id: "8-0",
        refPage: 65,
        indent: 0,
        refTitle: "۸. تولیدمثل در جانداران",
      },
      { id: "9-0", refPage: 76, indent: 0, refTitle: "۹. الکتریسیته" },
      { id: "10-0", refPage: 89, indent: 0, refTitle: "۱۰. مغناتیس" },
      { id: "11-0", refPage: 97, indent: 0, refTitle: "۱۱. کانی‌ها" },
      { id: "12-0", refPage: 104, indent: 0, refTitle: "۱۲. سنگ‌ها" },
      { id: "13-0", refPage: 114, indent: 0, refTitle: "۱۳. هوازدگی" },
      {
        id: "14-0",
        refPage: 122,
        indent: 0,
        refTitle: "۱۴. نور و ویژگی‌های آن",
      },
      { id: "15-0", refPage: 136, indent: 0, refTitle: "۱۵. شکست نور" },
    ],
    maxPageNumber: 146,
    content: createLoremArr(146),
  },
  "علوم تجربی ۹": {
    fehrest: [
      {
        id: "1-0",
        refPage: 1,
        indent: 0,
        refTitle: "۱. مواد و نقش آنها در زندگی",
      },
      {
        id: "2-0",
        refPage: 13,
        indent: 0,
        refTitle: "۲. رفتار اتمها با یکدیگر",
      },
      {
        id: "3-0",
        refPage: 25,
        indent: 0,
        refTitle: "۳. به‌دنبال محیطی بهتر برای زندگی",
      },
      { id: "4-0", refPage: 39, indent: 0, refTitle: "۴. حركت چيست" },
      { id: "5-0", refPage: 51, indent: 0, refTitle: "۵. نيرو" },
      { id: "6-0", refPage: 63, indent: 0, refTitle: "۶. زمین‌ساخت ورقه‌ای" },
      { id: "7-0", refPage: 73, indent: 0, refTitle: "۷. آثاری از گذشته زمین" },
      { id: "8-0", refPage: 83, indent: 0, refTitle: "۸. فشار وآثار آن" },
      { id: "9-0", refPage: 95, indent: 0, refTitle: "۹. ماشین‌ها" },
      { id: "10-0", refPage: 107, indent: 0, refTitle: "۱۰. نگاهی به فضا" },
      {
        id: "11-0",
        refPage: 121,
        indent: 0,
        refTitle: "۱۱. گوناگونی جانداران",
      },
      { id: "12-0", refPage: 131, indent: 0, refTitle: "۱۲. دنیای گیاهان" },
      { id: "13-0", refPage: 141, indent: 0, refTitle: "۱۳. جانوران بى مهره" },
      { id: "14-0", refPage: 151, indent: 0, refTitle: "۱۴. جانوران مهرەدار" },
      { id: "15-0", refPage: 163, indent: 0, refTitle: "۱۵. باهم زيستن" },
    ],
    maxPageNumber: 176,
    content: createLoremArr(176),
  },
  "زیست شناسی ۱": {
    fehrest: [
      { id: "1-0", refPage: 1, indent: 0, refTitle: "فصل ۱. دنیای زنده" },
      {
        id: "1-1",
        refPage: 2,
        indent: 1,
        refTitle: "گفتار ۱. زیست شناسی چیست؟",
      },
      { id: "1-2", refPage: 7, indent: 1, refTitle: "گفتار ۲. گستره حیات" },
      {
        id: "1-3",
        refPage: 11,
        indent: 1,
        refTitle: "گفتار ۳. یاخته و بافت در بدن انسان",
      },
      {
        id: "2-0",
        refPage: 17,
        indent: 0,
        refTitle: "فصل ۲. گوارش و جذب مواد",
      },
      {
        id: "2-1",
        refPage: 18,
        indent: 1,
        refTitle: "گفتار ۱. ساختار و عملکرد لوله گوارش",
      },
      {
        id: "2-2",
        refPage: 25,
        indent: 1,
        refTitle: "گفتار ۲. جذب مواد و تنظیم فعالیت دستگاه گوارش",
      },
      {
        id: "2-3",
        refPage: 30,
        indent: 1,
        refTitle: "گفتار ۳. تنوع گوارش در جانداران",
      },
      { id: "3-0", refPage: 33, indent: 0, refTitle: "فصل ۳. تبادلات گازی" },
      {
        id: "3-1",
        refPage: 34,
        indent: 1,
        refTitle: "گفتار ۱. ساز و کار دستگاه تنفس در انسان",
      },
      { id: "3-2", refPage: 40, indent: 1, refTitle: "گفتار ۲. تهویه ششی" },
      {
        id: "3-3",
        refPage: 45,
        indent: 1,
        refTitle: "گفتار ۳. تنوع در تبادلات گازی",
      },
      {
        id: "4-0",
        refPage: 47,
        indent: 0,
        refTitle: "فصل ۴. گردش مواد در بدن",
      },
      { id: "4-1", refPage: 48, indent: 1, refTitle: "گفتار ۱. قلب" },
      { id: "4-2", refPage: 55, indent: 1, refTitle: "گفتار ۲. رگ ها" },
      { id: "4-3", refPage: 61, indent: 1, refTitle: "گفتار ۳. خون" },
      {
        id: "4-4",
        refPage: 65,
        indent: 1,
        refTitle: "گفتار ۴. تنوع گردش مواد در جانداران",
      },
      {
        id: "5-0",
        refPage: 69,
        indent: 0,
        refTitle: "فصل ۵. تنظیم اسمزی و دفع مواد زائد",
      },
      {
        id: "5-1",
        refPage: 70,
        indent: 1,
        refTitle: "گفتار ۱. هم ایستایی و کلیه ها",
      },
      {
        id: "5-2",
        refPage: 73,
        indent: 1,
        refTitle: "گفتار ۲. تشکیل ادرار و تخلیه آن",
      },
      {
        id: "5-3",
        refPage: 76,
        indent: 1,
        refTitle: "گفتار ۳. تنوع دفع و تنظیم اسمزی در جانداران",
      },
      {
        id: "6-0",
        refPage: 79,
        indent: 0,
        refTitle: "فصل ۶. از یاخته تا گیاه",
      },
      {
        id: "6-1",
        refPage: 80,
        indent: 1,
        refTitle: "گفتار ۱. ویژگی های یاخته های گیاهی",
      },
      { id: "6-2", refPage: 86, indent: 1, refTitle: "گفتار ۲. سامانه بافتی" },
      { id: "6-3", refPage: 90, indent: 1, refTitle: "گفتار ۳. ساختار گیاهان" },
      {
        id: "7-0",
        refPage: 97,
        indent: 0,
        refTitle: "فصل ۷. جذب و انتقال مواد در گیاهان",
      },
      { id: "7-1", refPage: 98, indent: 1, refTitle: "گفتار ۱. تغذیه گیاهی" },
      {
        id: "7-2",
        refPage: 102,
        indent: 1,
        refTitle: "گفتار ۲. جانداران موثر در تغذیه گیاهی",
      },
      {
        id: "7-3",
        refPage: 105,
        indent: 1,
        refTitle: "گفتار ۳. انتقال مواد در گیاهان",
      },
    ],
    maxPageNumber: 112,
    content: createLoremArr(112),
  },
  "زیست شناسی ۲": {
    fehrest: [
      { id: "1-0", refPage: 1, indent: 0, refTitle: "فصل ۱. تنظیم عصبی" },
      {
        id: "1-1",
        refPage: 2,
        indent: 1,
        refTitle: "گفتار ۱ - یافته‌های بافت عصبی",
      },
      {
        id: "1-2",
        refPage: 9,
        indent: 1,
        refTitle: "گفتار ۲ - ساختار دستگاه عصبی",
      },
      { id: "2-0", refPage: 19, indent: 0, refTitle: "فصل ۲. حواس" },
      {
        id: "2-1",
        refPage: 20,
        indent: 1,
        refTitle: "گفتار ۱ - گیرنده‌های حسی",
      },
      { id: "2-2", refPage: 23, indent: 1, refTitle: "گفتار ۲ - حواس ویژه" },
      {
        id: "2-3",
        refPage: 33,
        indent: 1,
        refTitle: "گفتار ۳ - گیرنده‌های حسی جانوران",
      },
      { id: "3-0", refPage: 37, indent: 0, refTitle: "فصل ۳. دستگاه حرکتی" },
      {
        id: "3-1",
        refPage: 38,
        indent: 1,
        refTitle: "گفتار ۱ - استخوان‌ها و اسکلت",
      },
      {
        id: "3-2",
        refPage: 45,
        indent: 1,
        refTitle: "گفتار ۲ - ماهیچه و حرکت",
      },
      { id: "4-0", refPage: 53, indent: 0, refTitle: "فصل ۴. تنظیم شیمیایی" },
      {
        id: "4-1",
        refPage: 54,
        indent: 1,
        refTitle: "گفتار ۱ - ارتباط شیمیایی",
      },
      {
        id: "4-2",
        refPage: 56,
        indent: 1,
        refTitle: "گفتار ۲ - غده‌های درون‌ریز",
      },
      { id: "5-0", refPage: 63, indent: 0, refTitle: "فصل ۵. ایمنی" },
      {
        id: "5-1",
        refPage: 64,
        indent: 1,
        refTitle: "گفتار ۱ - نخستین خط دفاعی: ورود ممنوع",
      },
      {
        id: "5-2",
        refPage: 66,
        indent: 1,
        refTitle: "گفتار ۲ - دومین خط دفاعی: واکنش‌های عمومی اما سریع",
      },
      {
        id: "5-3",
        refPage: 72,
        indent: 1,
        refTitle: "گفتار ۳ - سومین خط دفاعی: دفاع اختصاصی",
      },
      { id: "6-0", refPage: 79, indent: 0, refTitle: "فصل ۶. تقسیم یافته" },
      {
        id: "6-1",
        refPage: 80,
        indent: 1,
        refTitle: "گفتار ۱ - قافتن (کروموزوم)",
      },
      {
        id: "6-2",
        refPage: 84,
        indent: 1,
        refTitle: "گفتار ۲ - رشتمان (میتوز)",
      },
      {
        id: "6-3",
        refPage: 92,
        indent: 1,
        refTitle: "گفتار ۳ - گامتمان (میوز) و تولیدمثل جنسی",
      },
      { id: "7-0", refPage: 97, indent: 0, refTitle: "فصل ۷. تولیدمثل" },
      {
        id: "7-1",
        refPage: 98,
        indent: 1,
        refTitle: "گفتار ۱ - دستگاه تولیدمثل در مرد",
      },
      {
        id: "7-2",
        refPage: 102,
        indent: 1,
        refTitle: "گفتار ۲ - دستگاه تولیدمثل در زن",
      },
      {
        id: "7-3",
        refPage: 108,
        indent: 1,
        refTitle: "گفتار ۳ - رشد و نمو جنین",
      },
      {
        id: "7-4",
        refPage: 115,
        indent: 1,
        refTitle: "گفتار ۴ - تولیدمثل در جانوران",
      },
      {
        id: "8-0",
        refPage: 119,
        indent: 0,
        refTitle: "فصل ۸. تولیدمثل نهان‌دانگان",
      },
      {
        id: "8-1",
        refPage: 120,
        indent: 1,
        refTitle: "گفتار ۱ - تولیدمثل غیر جنسی",
      },
      {
        id: "8-2",
        refPage: 124,
        indent: 1,
        refTitle: "گفتار ۲ - تولیدمثل جنسی",
      },
      {
        id: "8-3",
        refPage: 130,
        indent: 1,
        refTitle: "گفتار ۳ - از یاخته تخم تا گیاه",
      },
      {
        id: "9-0",
        refPage: 137,
        indent: 0,
        refTitle: "فصل ۹. پاسخ گیاهان به محرک‌ها",
      },
      {
        id: "9-1",
        refPage: 138,
        indent: 1,
        refTitle: "گفتار ۱ - تنظیم کننده‌های رشد در گیاهان",
      },
      {
        id: "9-2",
        refPage: 146,
        indent: 1,
        refTitle: "گفتار ۲ - پاسخ به محیط",
      },
    ],
    maxPageNumber: 154,
    content: createLoremArr(154),
  },
  "زیست شناسی ۳": {
    fehrest: [
      {
        id: "1-0",
        refPage: 1,
        indent: 0,
        refTitle: "فصل ۱. مولکول‌های اطلاعاتی",
      },
      { id: "1-1", refPage: 9, indent: 1, refTitle: "نوکلئیک اسیدها" },
      { id: "1-2", refPage: 10, indent: 1, refTitle: "همانندسازی DNA" },
      { id: "1-3", refPage: 17, indent: 1, refTitle: "پروتئین‌ها" },
      {
        id: "2-0",
        refPage: 21,
        indent: 0,
        refTitle: "فصل ۲. جریان اطلاعات در یاخته",
      },
      { id: "2-1", refPage: 23, indent: 1, refTitle: "رونویسی" },
      { id: "2-2", refPage: 29, indent: 1, refTitle: "به سوی پروتئین" },
      { id: "2-3", refPage: 30, indent: 1, refTitle: "تنظیم بیان ژن" },
      {
        id: "3-0",
        refPage: 37,
        indent: 0,
        refTitle: "فصل ۳. انتقال اطلاعات در نسل‌ها",
      },
      { id: "3-1", refPage: 35, indent: 1, refTitle: "مفاهیم پایه" },
      { id: "3-2", refPage: 41, indent: 1, refTitle: "انواع صفات" },
      {
        id: "4-0",
        refPage: 47,
        indent: 0,
        refTitle: "فصل ۴. تغییر در اطلاعات وراثتی",
      },
      {
        id: "4-1",
        refPage: 45,
        indent: 1,
        refTitle: "تغییر در ماده وراثتی جانداران",
      },
      { id: "4-2", refPage: 46, indent: 1, refTitle: "تغییر در جمعیت‌ها" },
      { id: "4-3", refPage: 50, indent: 1, refTitle: "تغییر در گونه‌ها" },
      { id: "5-0", refPage: 63, indent: 0, refTitle: "فصل ۵. آماده به آزوی" },
      { id: "5-1", refPage: 55, indent: 1, refTitle: "تأمین انرژی" },
      { id: "5-2", refPage: 56, indent: 1, refTitle: "آکسایش بیشتر" },
      { id: "5-3", refPage: 61, indent: 1, refTitle: "زمین مستقل از اکسیژن" },
      {
        id: "6-0",
        refPage: 77,
        indent: 0,
        refTitle: "فصل ۶. از انرژی به ماده",
      },
      {
        id: "6-1",
        refPage: 65,
        indent: 1,
        refTitle: "فتوسنتز: تبدیل انرژی نوری به انرژی شیمیایی",
      },
      { id: "6-2", refPage: 71, indent: 1, refTitle: "واکنش‌های فتوسنتزی" },
      { id: "6-3", refPage: 72, indent: 1, refTitle: "فتوسنتز در شرایط دشوار" },
      {
        id: "7-0",
        refPage: 91,
        indent: 0,
        refTitle: "فصل ۷. فناوری‌های نوین زیستی",
      },
      {
        id: "7-1",
        refPage: 77,
        indent: 1,
        refTitle: "زیست فناوری و مهندسی ژنتیک",
      },
      {
        id: "7-2",
        refPage: 81,
        indent: 1,
        refTitle: "فناوری مهندسی پروتئین و بافت",
      },
      { id: "7-3", refPage: 85, indent: 1, refTitle: "کاربردهای زیست فناوری" },
      {
        id: "8-0",
        refPage: 107,
        indent: 0,
        refTitle: "فصل ۸. رفتارهای جانوران",
      },
      { id: "8-1", refPage: 86, indent: 1, refTitle: "اساس رفتار" },
      { id: "8-2", refPage: 90, indent: 1, refTitle: "انتخاب طبیعی و رفتار" },
      { id: "8-3", refPage: 94, indent: 1, refTitle: "ارتباط و زندگی گروهی" },
    ],
    maxPageNumber: 125,
    content: createLoremArr(125),
  },
};
