export const hebrewContent = {
  companyName: "בול בפוני",
  tagline: "תמצית חדשות אישית – בול בשבילך",
  mainTitle: "חדשות מהארץ ומהעולם",
  mainTitleHighlight: "בתמצית חכמה ומדויקת",
  description:
    "אנו לומדים את ההעדפות והצרכים שלכם כדי לאסוף ולסכם עבורכם את מיטב החדשות ממקורות מגוונים ברחבי העולם. כך תוכלו להתעדכן במהירות בלי לפספס שום פרט חשוב.",
  startButton: "נתחיל",
  learnMore: "קראו עוד על הטכנולוגיה",
  metadata: {
    title: "בול בפוני – תמצית חדשות מותאמת אישית",
    description: "התעדכנו במה שקורה בעולם בתמצית מדויקת ואישית, בכל יום מחדש",
  },
  onboarding: {
    header: {
      title: "הגדרות אישיות",
      progress: "שלב",
      of: "מתוך",
    },
    noArticles: "אין כרגע מאמרים זמינים",
    steps: {
      contentMatching: {
        title: "בחירת תכנים",
        subtitle: "החליקו ימינה לתוכן שמעניין אתכם, ושמאלה למה שפחות",
        actions: {
          love: "מאוד מעניין",
          like: "אהבתי",
          dislike: "פחות מעניין",
          notInterested: "לא מעניין",
        },
      },
      personalDetails: {
        title: "פרטים אישיים",
        subtitle: "ספרו לנו קצת על עצמכם",
        name: {
          label: "שם פרטי",
          placeholder: "הקלידו את שמכם",
          description: "הכירו לנו אתכם כדי שנפנה אליכם בשם שלכם",
          error: "השם חייב להכיל לפחות שני תווים",
        },
        age: {
          label: "גיל",
          placeholder: "הקלידו את גילכם",
          description:
            "באמצעות הנתון הזה נוכל להתאים עבורכם תכנים באופן מדויק יותר",
          error: "גיל חייב להיות בין 13 ל-120",
        },
        gender: {
          label: "מגדר",
          placeholder: "בחרו מגדר",
          description: "בחרו את המגדר שלכם (לבחירתכם)",
          options: {
            male: "זכר",
            female: "נקבה",
            notSpecified: "אחר / לא מעוניין לציין",
          },
          error: "אנא ציינו מגדר או בחרו 'אחר'",
        },
        nextButton: "המשך",
      },
      timePreference: {
        title: "שעת העדכון",
        subtitle: "באיזו שעה תרצו לקבל את הסיכום היומי?",
        description: "נתאים את שליחת הסיכום היומי לשעה הנוחה ביותר עבורכם",
        morning: {
          title: "☀️ בוקר",
          description: "התחלה רעננה ליום שלכם עם החדשות הכי חמות",
          time: "08:00",
        },
        noon: {
          title: "🌤️ צהריים",
          description: "סיכום מהיר בזמן הפסקת הצהריים",
          time: "12:00",
        },
        evening: {
          title: "🌙 ערב",
          description: "סיכום אירועי היום לפני שהולכים לישון",
          time: "20:00",
        },
        custom: {
          title: "🎯 שעה מותאמת",
          description: "בחרו את השעה המדויקת שנוחה לכם",
          placeholder: "בחרו שעה",
        },
        error: "נא לבחור שעה לקבלת התוכן",
        nextButton: "המשך",
      },
      digestChannel: {
        title: "ערוץ העדכון",
        subtitle: "איך תרצו לקבל את העדכונים?",
        channels: {
          email: {
            title: "📧 במייל",
            description: "קבלו עדכונים ישירות לתיבת הדואר שלכם",
            icon: "Envelope",
            comingSoon: "(זמין בקרוב)",
          },
          whatsapp: {
            title: "💬 בווטסאפ",
            description: "הסיכום היומי שלכם יגיע בהודעה אישית",
            icon: "MessageCircle",
            phoneNumber: {
              label: "מספר טלפון",
              placeholder: "הזינו את מספר הטלפון שלכם",
              error: {
                required: "נדרש מספר טלפון לקבלת עדכונים בווטסאפ",
                invalid: "מספר הטלפון אינו תקין",
              },
              hint: "המספר יישמר לצורך שליחת עדכונים בלבד",
            },
          },
        },
        error: "אנא בחרו ערוץ עדכון אחד לפחות",
        nextButton: "המשך",
      },
      login: {
        title: "כמעט סיימנו!",
        subtitle: "שמרו את ההעדפות שלכם וקבלו את העדכון היומי המותאם אישית",
        description:
          "התחברו באמצעות הרשתות החברתיות כדי לשמור את ההעדפות שלכם ולהתחיל לקבל את העדכון היומי",
        googleButton: "התחברות עם Google",
        facebookButton: "התחברות עם Facebook",
        benefits: {
          title: "מה תקבלו?",
          items: [
            "עדכון יומי מותאם אישית",
            "שמירת ההעדפות שלכם",
            "התראות על תכנים חדשים",
          ],
        },
      },
      success: {
        title: "הגדרות נשמרו בהצלחה",
        subtitle: "המערכת שלנו ערוכה להגיש לכם תוכן יומי מותאם",
        greeting: "מעולה!",
        contentPreferences: "בחרתם לקבל עדכונים בתחומים הבאים: {topics}",
        settings: "ההגדרות שלך",
        cta: "המשך לדשבורד",
        chatButton: "צרו קשר",
        pending: {
          title: "בקשתכם התקבלה! 🎉",
          subtitle: "תודה שבחרתם להצטרף אלינו",
          message: "אנחנו מטפלים בהרשמות חדשות ומאשרים אותן בהדרגה",
          explanation:
            "במטרה לספק חוויה איכותית לכל אחד, אנו מאשרים הצטרפויות בשלבים",
          waitingList:
            "בקשתכם ממתינה בתור האישור וניצור קשר בהקדם האפשרי ברגע שתתקבל",
          thankYou: "מעריכים את הסבלנות שלכם",
          contact: "בינתיים, מוזמנים לפנות אלינו בכל שאלה",
        },
      },
    },
    loading: {
      title: "מעבד את המידע שלך",
      subtitle: "זה ייקח רק כמה שניות",
    },
    page: {
      title: "הגדרת העדפות",
      subtitle: "בואו נתאים את החוויה שלכם",
      description: "אנחנו נשתמש במידע הזה כדי להתאים את התוכן בדיוק בשבילכם",
    },
  },

  navigation: {
    menu: {
      dailyDigest: "הסיכום היומי",
      personalArea: "אזור אישי",
      settings: "הגדרות",
      privacyPolicy: "מדיניות פרטיות",
      logout: "התנתקות",
    },
  },

  login: {
    welcome: "ברוכים השבים!",
    subtitle: "התחברו עם חשבון פייסבוק או גוגל להתחלה מהירה",
    socialLogin: {
      facebook: "התחברות עם פייסבוק",
      google: "התחברות עם גוגל",
    },
    divider: "או בחרו להתחבר עם",
    form: {
      email: {
        label: "אימייל",
        placeholder: "הקלידו כתובת אימייל",
      },
      password: {
        label: "סיסמה",
        forgotPassword: "שכחתם סיסמה?",
      },
      submit: "התחברות",
      noAccount: "אין לכם חשבון?",
      signUp: "הרשמה",
    },
    terms: {
      prefix: "בלחיצה על ״המשך״, אתם מסכימים ל",
      termsOfService: "תנאי השימוש",
      and: "ו־",
      privacyPolicy: "מדיניות הפרטיות",
    },
  },

  auth: {
    backButton: "חזרה",
    pages: {
      login: {
        title: "התחברות",
        description: "התחברו כדי לגשת אל האזור האישי שלכם",
      },
      signup: {
        title: "הרשמה",
        description: "צרו חשבון והתחילו ליהנות מעולם התוכן האישי שלכם",
      },
    },
  },

  app: {
    loading: "טוען...",
    redirect: "מעביר אתכם אל התהליך הבא...",
    welcome: {
      title: "ברוכים הבאים לחוויית התוכן המותאמת",
      greeting: "היי {name} 👋",
      subtitle: "אנחנו מנתחים את ההעדפות שלכם כדי לבנות פרופיל אישי עשיר",
      description:
        "רוצים לדעת איך זה עובד? בינתיים, הנה כמה דברים שכדאי שתדעו:",
      features: [
        "אנו מסננים תכנים לפי ההעדפות האישיות שבחרתם",
        "ככל שתשתמשו יותר, כך המערכת לומדת ומספקת תוכן מדויק יותר",
        "בכל יום נגיש לכם סיכום יומי רחב בשעה שבחרתם",
      ],
      beta: {
        label: "בטא",
        text: "אתם חלק מקבוצה נבחרת המשפיעה על עתידו של צריכת התוכן",
      },
    },
    approvalPending: {
      title: "בקשתכם התקבלה! 🎉",
      subtitle: "תודה שבחרתם להצטרף אלינו",
      message: "אנחנו מטפלים בהרשמות חדשות ומאשרים אותן בהדרגה",
      explanation:
        "במטרה לספק חוויה איכותית לכל אחד, אנו מאשרים הצטרפויות בשלבים",
      waitingList:
        "בקשתכם ממתינה בתור האישור וניצור קשר בהקדם האפשרי ברגע שתתקבל",
      thankYou: "מעריכים את הסבלנות שלכם",
      contact: "בינתיים, מוזמנים לפנות אלינו בכל שאלה",
    },
  },

  errors: {
    404: {
      title: "אופס! ... 🦄",
      description: "נראה שהעמוד שחיפשתם לא נמצא...",
      altText: "פוני מבולבל מחפש את הדרך",
      buttonText: "חזרה למסך הראשי",
    },
    generic: {
      title: "רגע, משהו השתבש...",
      description: "הפוני שלנו נתקל בבעיה, אבל אל דאגה – אנחנו כבר מטפלים בה!",
      altText: "פוני מנסה לפתור בעיה",
      buttonText: "ננסה שוב",
    },
    coffeeThemedMessage: "בינתיים, הנה כמה הצעות מהירות לשיפור המצב:",
    options: [
      "תנו לנו רגע לטפל בתקלה מאחורי הקלעים",
      "דווחו לנו מה קרה ונשמח לסייע",
      "נסו לחזור למסך הראשי בזמן שאנחנו מתקנים",
    ],
  },

  dailyDigest: {
    title: "הסיכום היומי שלכם",
    noDigestAvailable:
      "עדיין לא הכנו לכם סיכום—ברגע שנסיים, נעדכן אתכם מיידית!",
    progress: {
      sectionsRead: "נושאים שקראתם",
      outOf: "מתוך",
    },
    section: {
      highlights: "עיקרי הדברים",
      readMore: "קראו בהרחבה",
      articleLinks: "מקורות נוספים",
      article: "כתבה",
      feedback: {
        like: "רלוונטי",
        dislike: "לא רלוונטי",
        markAsRead: "סומן כנקרא",
        readMore: "לפרטים נוספים",
        readLess: "צמצם תצוגה",
      },
      swipeInstructions:
        "החליקו ימינה אם אתם אוהבים, ושמאלה אם פחות רלוונטי עבורכם",
    },
    completion: {
      title: "עדכונים נבחרו",
      message: "מעולה! סיימתם לעיין בכל החדשות החשובות להיום",
    },
  },

  footer: {
    allRightsReserved: "© 2024 בול בפוני. כל הזכויות שמורות",
    privacyPolicy: "מדיניות פרטיות",
    termsAndConditions: "תנאי שימוש",
  },

  settings: {
    title: "הגדרות",
    subtitle: "התאימו את החוויה שלכם",
    sections: {
      profile: {
        title: "פרטים אישיים",
        name: {
          label: "שם",
          placeholder: "הקלידו את שמכם",
        },
        gender: {
          label: "מגדר",
          options: {
            male: "זכר",
            female: "נקבה",
            notSpecified: "אחר / לא מעוניין לציין",
          },
        },
        age: {
          label: "גיל",
          placeholder: "הקלידו את גילכם",
        },
      },
      preferences: {
        title: "העדפות תוכן",
        digestTime: {
          label: "שעת קבלת העדכון",
          placeholder: "בחרו שעה",
        },
        digestChannel: {
          label: "ערוץ העדכון",
          options: {
            email: "דואר אלקטרוני",
            whatsapp: "וואטסאפ",
          },
        },
      },
      danger: {
        title: "הגדרות מתקדמות",
        removeData: {
          title: "מחיקת נתונים",
          description: "מחיקת כל הנתונים האישיים והעדפות התוכן שלכם",
          button: "מחק את כל הנתונים שלי",
          confirmTitle: "האם אתם בטוחים?",
          confirmDescription:
            "פעולה זו תמחק את כל הנתונים שלכם ולא ניתן יהיה לשחזר אותם",
          confirmButton: "כן, מחק את הנתונים שלי",
          cancelButton: "ביטול",
        },
      },
    },
    toast: {
      success: "השינויים נשמרו בהצלחה",
      error: "אופס, משהו השתבש. נסו שוב מאוחר יותר",
      dataRemoved: "הנתונים שלכם נמחקו בהצלחה",
    },
  },

  technology: {
    title: "על הטכנולוגיה",
    subtitle: "גלו איך אנחנו מתאימים לכם את התוכן בצורה מושלמת",
    sections: {
      uniqueRepresentation: {
        title: "ייצוג ייחודי של קוראים",
        description:
          "כל קורא מיוצג באופן ייחודי על ידי תחומי העניין שלו, באמצעות וקטור סמנטי. הייצוג נבנה בהתבסס על המאמרים המועדפים בשלב ההרשמה ובאינטראקציות עם הסיכום היומי.",
      },
      advancedProcessing: {
        title: "עיבוד מתקדם של תוכן",
        description:
          "כל יום, אנו מעבדים מאמרים ממגוון רחב של מקורות וממפים אותם למרחב סמנטי אחיד – אותו מרחב שבו גם הקוראים מתמיינים.",
      },
      personalizedMatching: {
        title: "התאמה אישית מדויקת",
        description:
          "באמצעות הצבת הקוראים והמאמרים באותו מרחב סמנטי, אנו מסוגלים לבצע חיפוש מתקדם ולמצוא את המאמרים הרלוונטיים ביותר עבור כל קורא. כך נוכל להכין סיכום יומי אישי, שמאגד יחד מאמרים בנושאים דומים ומביא לכם את העדכונים החמים ביותר בצורה ממוקדת ומותאמת אישית.",
      },
    },
    cta: "התחל עכשיו",
  },

  dashboard: {
    headline: "חדשות מהעולם בהתאמה אישית",
    tagline: "הסיכום היומי, בול בשבילכם",
    description:
      "אנחנו מסכמים ומנתחים עבורכם את החדשות החשובות מכל רחבי העולם, כך שתמיד תהיו מעודכנים במה שקורה סביבכם בצורה חכמה, אישית וקלה.",
    cta: "צפו בסיכום היומי",
    stats: {
      sources: "מקורות מידע",
      articles: "מאמרים מנותחים",
      readers: "קוראים מרוצים",
    },
  },
} as const;
