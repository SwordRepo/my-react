import logo from "../NavBar/images/logo.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import goeasy from "./images/goeasy.jpg";
import playStore from "./images/app.png";
import Bill from "./images/BillPayments.avif";
import Debt from "./images/DebtConsolidation.avif";
import Home from "./images/HomeAndAuto.avif";
import img1 from "./images/1.avif";
import img2 from "./images/2.avif";
import img3 from "./images/3.avif";
import img4 from "./images/4.avif";
import img5 from "./images/5.avif";
import banner from "./images/ban1.avif";
import Feature1 from "./images/f1.avif";
import Feature2 from "./images/f2.avif";
import Feature3 from "./images/f3.avif";
import googlePlay from "./images/googlePlay.png";
export const easyfinancialData = {
  navBar: {
    logo: logo,
    menus: [
      {
        menu: "LOANS",
        subMenus: [
          {
            submenu: "Personal Loans",
          },
          {
            submenu: "Home Equity Loans",
          },
          {
            submenu: "Auto Loans",
          },
          {
            submenu: "Point-of-Sale Financing",
          },
          {
            submenu: "Value-Added Services",
          },
          {
            submenu: "Small Business Financing",
          },
          {
            submenu: "Bad Credit Loans",
          },
          {
            submenu: "Installment Loans",
          },
        ],
      },
      {
        menu: "FINANCIAL TIPS",
        subMenus: [
          {
            submenu: "Articles",
          },
          {
            submenu: "Tools And Calculators",
          },
        ],
      },
      {
        menu: "ABOUT US",
        subMenus: [
          {
            submenu: "The easyfinancial Difference",
          },
          {
            submenu: "In the Comunity",
          },
          {
            submenu: "Careers",
          },
        ],
      },
      {
        menu: "HELP",
        subMenus: [
          {
            submenu: "FAQs",
          },
          {
            submenu: "Contact Us",
          },
          {
            submenu: "COVID-19 Updates",
          },
        ],
      },
    ],
    btn: "APPLY NOW",
  },
  banner: {
    img: banner,
    bannerHeader: "Providing Everyday Canadians a Path to",
    bannerHeaderline: "a Better Tomorrow, Today",
    bannerSubHeader: "Loans up to $100,000",
    bannerBtn: "GET A LOAN",
    bannerText: "Applying won’t affect your credit score",
  },
  featuredCard: {
    name: "Featured",
    card: [
      {
        img: Feature1,
        cardHead: "Get a 2% lower rate with a co-applicant",
        cardBody:
          "Lower your rate and get approved for more money when you borrow together.",
        cardBtn: "APPLY NOW",
      },
      {
        img: Feature3,
        cardHead: "Refer a friend and get $100",
        cardBody:
          "We’re here for you. Be there for them. Get $100 when you refer a friend. Visit your local branch for more details.",
        cardBtn: "FIND A BRANCH",
      },
      {
        img: Feature2,
        cardHead: "NEW! Introducing the goeasy Connect Mobile App",
        cardBody:
          "Get real-time access to your account details, payment information, and pre-approved offers so you know how much you can borrow and at what rates.",
        cardBtn: "LEARN MORE",
      },
    ],
  },

  review: {
    heading: "Reviews",
    img: "",
    reviews: [
      {
        name: "Patricia Cowley",
        rating: 3,
        description:
          "I found that the people are very helpful and understanding, I would definitely recommend them. ",
      },
      {
        name: "Steve",
        rating: 4,
        description:
          "I would recommend dealing with them to help you get back on stable financial ground. Thanks for all your help.",
      },
      {
        name: "Brooke",
        rating: 2,
        description:
          "Easyfinancial makes building credit back up literally so easy. Joel was extremely helpful and made it all so simple and straight forward to set up my loan, very happy! Thanks again!",
      },
      {
        name: "Tanya Morgan",
        rating: 5,
        description:
          "Jolyn the financial advisor here at Grande Praire is very helpful. She knows what she is doing. Witty, friendly and approachable person. Keep up the good work!",
      },
    ],
  },
  footer: {
    heading: "STAY CONNECTED",
    facebookLogo: facebook,
    instagramLogo: instagram,
    goeasyLogo: goeasy,
    appleLogo: playStore,
    googlePlay: googlePlay,
    content: "Download the FREE goeasy Connect™ app",
    footerContent: [
      {
        menu: "CONTACT US",
        subMenus: [
          {
            submenu: "1-888-502-3279",
          },
          {
            submenu: "E-mail Us",
          },
          {
            submenu: "Find a Branch",
          },
        ],
      },
      {
        menu: "LOANS",
        subMenus: [
          {
            submenu: "Personal Loans",
          },
          {
            submenu: "Home Equity Loans",
          },
          {
            submenu: "Auto Loans",
          },
          {
            submenu: "Point-of-Sale Financing",
          },
          {
            submenu: "Value-Added Services",
          },
          {
            submenu: "Small Business Financing",
          },
          {
            submenu: "Bad Credit Loans",
          },
          {
            submenu: "Installment Loans",
          },
        ],
      },
      {
        menu: "ABOUT US",
        subMenus: [
          {
            submenu: "The easyfinancial Difference",
          },
          {
            submenu: "In the Comunity",
          },
          {
            submenu: "Careers",
          },
        ],
      },
      {
        menu: "HELP",

        subMenus: [
          {
            submenu: "FAQs",
          },
          {
            submenu: "Contact Us",
          },
          {
            submenu: "COVID-19 Updates",
          },
        ],
      },
    ],
  },

  personalLoan: {
    loanData: [
      {
        loanName: "Loan details",
        content: "Not sure which loan to apply for?",
        link: "See all of our loans",
        linkContent: " to find the one that’s right for you.",
        link1: "See all of our loans to find the one that’s right for you.",
        terms: [
          { term: "Amounts from", value: "$500 - $20,000" },
          { term: "Rates starting from", value: "29.99%" },
          { term: "Terms from", value: "9 - 84 months" },
        ],
      },
      {
        name: "Most commonly used for:",
        logos: [{ logo: Bill }, { logo: Debt }, { logo: Home }],
        contents: [
          "Bill Payments",
          "Debt Consolidation",
          "Home & Auto Repairs",
        ],
      },
    ],
  },
  benefitsPL: {
    name: "Benefits of a Personal Loan",
    block: [
      {
        img: img1,
        imgHead: "Fast access to money",
        imgContent:
          "With Interac® e-Transfer, get your money within hours after getting approved.",
      },

      {
        img: img2,
        imgHead: "Flexible loan options",
        imgContent:
          "We offer personalized rates and payment terms to help you find a solution that fits your budget. If you’re able, you can pay off your loan at any time with no penalty and save the interest. Plus, you can get a 2% rate reduction with a co-applicant.",
      },
      {
        img: img3,
        imgHead: "Apply without affecting your credit score",
        imgContent:
          "Apply in minutes to find out how much you could qualify for. There is no commitment and it won’t affect your credit score.",
      },
      {
        img: img4,
        imgHead: "Rebuild your credit",
        imgContent:
          "With every on-time payment, you are one step closer to rebuilding your credit and graduating to bank rates.",
      },
      {
        img: img5,
        imgHead: "No credit history needed",
        imgContent:
          "If you’re a student or new to Canada, we can help get you approved even with no credit history.",
      },
    ],
    btn: "APPLY NOW",
  },
  value: {
    head: "Putting Canadians on a path to a better financial future",
    subHead:
      "When banks aren’t an option, we can help you get approved for the loan you need today.",
    values: [
      {
        valueDta: "400+",
        valueContent: "locations in Canada",
      },
      {
        valueDta: "779K",
        valueContent: "customers served",
      },
      {
        valueDta: "94%",
        valueContent: "satisfaction rate",
      },
    ],
    data: [
      {
        data1: "60%",
        data2: "of customers improve their credit score",
      },
      {
        data1: "1in3",
        data2: "customers graduate to prime rates",
      },
    ],
  },
};
