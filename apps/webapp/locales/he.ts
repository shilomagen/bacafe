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
    steps: {
      1: {
        header: "ברוכים הבאים!",
        subheader: "בואו נתאים את חוויית התוכן במיוחד עבורכם",
      },
      2: {
        header: "תחומי עניין",
        subheader: "בחרו נושאים שיעניינו אתכם לקבל עליהם עדכונים",
      },
      3: {
        header: "מקורות מידע",
        subheader: "בחרו את המקורות והשפות המועדפים עליכם",
      },
      4: {
        header: "ערוצי עדכון",
        subheader: "ציינו כיצד ואלו שעות נוח לכם לקבל את הסיכום היומי",
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
      },
      personalDetails: {
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
          description: "בחרו את המגדר שלכם (לבחירתכם)",
          options: {
            male: "זכר",
            female: "נקבה",
            notSpecified: "אחר / לא מעוניין לציין",
          },
          error: "אנא ציינו מגדר או בחרו 'אחר'",
        },
      },
      interests: {
        title: "מה מעניין אתכם",
        description: "החליקו ימינה לתוכן שמעניין אתכם, ושמאלה למה שפחות",
        readMore: "מידע נוסף",
        showLess: "הצג פחות",
        actions: {
          love: "מאוד מעניין",
          like: "אהבתי",
          dislike: "פחות מעניין",
          // Changed 'hate' to 'notInterested' and reworded
          notInterested: "לא מעוניין",
        },
      },
      timePreference: {
        label: "באיזו שעה תרצו לקבל את הסיכום היומי?",
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
      },
    },
    buttons: {
      continue: "המשך",
      back: "חזרה",
      complete: "סיום",
      loading: "מעבד...",
    },
    success: {
      title: "הגדרות נשמרו בהצלחה",
      subtitle: "המערכת שלנו ערוכה להגיש לכם תוכן יומי מתאים",
      greeting: "מעולה!",
      contentPreferences: "בחרתם לקבל עדכונים בתחומים הבאים: {topics}",
      digestTime: "נקבע לשליחת הסיכום היומי בשעה {time}",
      digestChannel: "העדכונים יגיעו דרך {channel}",
      cta: "עבורו לאזור האישי",
      chatInvite: "זקוקים לעזרה? אנחנו כאן בשבילכם",
      chatButton: "צרו קשר",
      loading: "מעדכן...",
      profileSummary: "סיכום ההעדפות שלכם:",
    },
    loading: {
      title: "מתאים עבורכם תכנים...",
      subtitle: "המערכת עובדת במלוא הכוח, עוד רגע מסיימים! 🦄",
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
      facebook: "התחברות באמצעות פייסבוק",
      google: "התחברות באמצעות גוגל",
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
} as const;
