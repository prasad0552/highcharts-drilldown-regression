import React from "react";
import HighchartsReact from "highcharts-react-official";

import "./styles.css";

const highcharts = require("highcharts/highmaps");
require("highcharts/modules/exporting")(highcharts);
require("highcharts/modules/export-data")(highcharts);
require("highcharts/modules/drilldown")(highcharts);
window.Highcharts = highcharts;

const options = {
  legend: {
    verticalAlign: "top",
    itemStyle: { fontWeight: "normal" },
    itemMarginBottom: 10,
    enabled: false
  },
  lang: { drillUpText: "◁ Back to top level" },
  plotOptions: { column: { stickyTracking: true } },
  tooltip: {
    enabled: true,
    hideDelay: 500,
    backgroundColor: "#ffffff",
    useHTML: true,
    followPointer: false,
    borderColor: "#ccc",
    padding: 0,
    style: { pointerEvents: "all", fontSize: "15px" }
  },
  xAxis: {
    type: "category",
    tickLength: 0,
    lineWidth: 0,
    labels: { style: { color: "#000", fontSize: "13px" }, zIndex: 0 }
  },
  yAxis: {
    gridLineWidth: 0,
    tickLength: 0,
    lineWidth: 0,
    labels: {
      enabled: false,
      style: { color: "#000", fontSize: "13px" },
      zIndex: 0
    },
    title: null
  },
  exporting: {
    chartOptions: {
      legend: { verticalAlign: "bottom" },
      chart: { spacingBottom: 100, events: {} },
      title: {
        text:
          "number of publications in each research category. (Criteria: see below)"
      }
    },
    sourceWidth: 800,
    allowHTML: true,
    enabled: true,
    buttons: {
      contextButton: {
        menuItems: [
          "downloadPNG",
          "downloadJPEG",
          "downloadPDF",
          "downloadCSV",
          "downloadXLS"
        ]
      }
    },
    sourceHeight: 835
  },
  chart: {
    style: { fontFamily: '"Roboto", sans-serif' },
    events: {},
    type: "column",
    inverted: true,
    height: 735,
    marginTop: 40
  },
  colors: [
    "#4488C9",
    "#28A679",
    "#8F52FB",
    "#918F17",
    "#E34494",
    "#1FBCB9",
    "#DDB409"
  ],
  credits: { enabled: false },
  title: { text: null },
  drilldown: {
    series: [
      {
        id: "2211-for",
        data: [
          {
            id: "3053",
            y: 10807780,
            filters: { for: "3053" },
            name: "1103 Clinical Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1103 Clinical Sciences",
              value: "10,807,780",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3053"
              }
            }
          },
          {
            id: "3177",
            y: 5111189,
            filters: { for: "3177" },
            name: "1117 Public Health and Health Services",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1117 Public Health and Health Services",
              value: "5,111,189",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3177"
              }
            }
          },
          {
            id: "3120",
            y: 2562955,
            filters: { for: "3120" },
            name: "1109 Neurosciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1109 Neurosciences",
              value: "2,562,955",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3120"
              }
            }
          },
          {
            id: "3048",
            y: 2514977,
            filters: { for: "3048" },
            name: "1102 Cardiorespiratory Medicine and Haematology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1102 Cardiorespiratory Medicine and Haematology",
              value: "2,514,977",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3048"
              }
            }
          },
          {
            id: "3142",
            y: 2192093,
            filters: { for: "3142" },
            name: "1112 Oncology and Carcinogenesis",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1112 Oncology and Carcinogenesis",
              value: "2,192,093",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3142"
              }
            }
          },
          {
            id: "3158",
            y: 1529201,
            filters: { for: "3158" },
            name: "1114 Paediatrics and Reproductive Medicine",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1114 Paediatrics and Reproductive Medicine",
              value: "1,529,201",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3158"
              }
            }
          },
          {
            id: "3164",
            y: 1304630,
            filters: { for: "3164" },
            name: "1115 Pharmacology and Pharmaceutical Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1115 Pharmacology and Pharmaceutical Sciences",
              value: "1,304,630",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3164"
              }
            }
          },
          {
            id: "3103",
            y: 1280874,
            filters: { for: "3103" },
            name: "1107 Immunology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1107 Immunology",
              value: "1,280,874",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3103"
              }
            }
          },
          {
            id: "3114",
            y: 853202,
            filters: { for: "3114" },
            name: "1108 Medical Microbiology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1108 Medical Microbiology",
              value: "853,202",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3114"
              }
            }
          },
          {
            id: "3128",
            y: 841574,
            filters: { for: "3128" },
            name: "1110 Nursing",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1110 Nursing",
              value: "841,574",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3128"
              }
            }
          },
          {
            id: "3172",
            y: 564630,
            filters: { for: "3172" },
            name: "1116 Medical Physiology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1116 Medical Physiology",
              value: "564,630",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3172"
              }
            }
          },
          {
            id: "3153",
            y: 478848,
            filters: { for: "3153" },
            name: "1113 Ophthalmology and Optometry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1113 Ophthalmology and Optometry",
              value: "478,848",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3153"
              }
            }
          },
          {
            id: "3097",
            y: 453006,
            filters: { for: "3097" },
            name: "1106 Human Movement and Sports Science",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1106 Human Movement and Sports Science",
              value: "453,006",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3097"
              }
            }
          },
          {
            id: "3086",
            y: 447500,
            filters: { for: "3086" },
            name: "1105 Dentistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1105 Dentistry",
              value: "447,500",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3086"
              }
            }
          },
          {
            id: "3136",
            y: 282787,
            filters: { for: "3136" },
            name: "1111 Nutrition and Dietetics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1111 Nutrition and Dietetics",
              value: "282,787",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3136"
              }
            }
          },
          {
            id: "3039",
            y: 233386,
            filters: { for: "3039" },
            name: "1101 Medical Biochemistry and Metabolomics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1101 Medical Biochemistry and Metabolomics",
              value: "233,386",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3039"
              }
            }
          },
          {
            id: "3197",
            y: 143787,
            filters: { for: "3197" },
            name: "1199 Other Medical and Health Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1199 Other Medical and Health Sciences",
              value: "143,787",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3197"
              }
            }
          },
          {
            id: "3079",
            y: 99882,
            filters: { for: "3079" },
            name: "1104 Complementary and Alternative Medicine",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1104 Complementary and Alternative Medicine",
              value: "99,882",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3079"
              }
            }
          }
        ],
        name: "11 Medical and Health Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2209-for",
        data: [
          {
            id: "2921",
            y: 3438858,
            filters: { for: "2921" },
            name: "0912 Materials Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0912 Materials Engineering",
              value: "3,438,858",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2921"
              }
            }
          },
          {
            id: "2867",
            y: 1668968,
            filters: { for: "2867" },
            name: "0906 Electrical and Electronic Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0906 Electrical and Electronic Engineering",
              value: "1,668,968",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2867"
              }
            }
          },
          {
            id: "2953",
            y: 1126341,
            filters: { for: "2953" },
            name: "0915 Interdisciplinary Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0915 Interdisciplinary Engineering",
              value: "1,126,341",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2953"
              }
            }
          },
          {
            id: "2856",
            y: 1000784,
            filters: { for: "2856" },
            name: "0905 Civil Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0905 Civil Engineering",
              value: "1,000,784",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2856"
              }
            }
          },
          {
            id: "2844",
            y: 957640,
            filters: { for: "2844" },
            name: "0904 Chemical Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0904 Chemical Engineering",
              value: "957,640",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2844"
              }
            }
          },
          {
            id: "2933",
            y: 813971,
            filters: { for: "2933" },
            name: "0913 Mechanical Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0913 Mechanical Engineering",
              value: "813,971",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2933"
              }
            }
          },
          {
            id: "2837",
            y: 644396,
            filters: { for: "2837" },
            name: "0903 Biomedical Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0903 Biomedical Engineering",
              value: "644,396",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2837"
              }
            }
          },
          {
            id: "2944",
            y: 532799,
            filters: { for: "2944" },
            name: "0914 Resources Engineering and Extractive Metallurgy",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0914 Resources Engineering and Extractive Metallurgy",
              value: "532,799",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2944"
              }
            }
          },
          {
            id: "2878",
            y: 499749,
            filters: { for: "2878" },
            name: "0907 Environmental Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0907 Environmental Engineering",
              value: "499,749",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2878"
              }
            }
          },
          {
            id: "2883",
            y: 375112,
            filters: { for: "2883" },
            name: "0908 Food Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0908 Food Sciences",
              value: "375,112",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2883"
              }
            }
          },
          {
            id: "2899",
            y: 331203,
            filters: { for: "2899" },
            name: "0910 Manufacturing Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0910 Manufacturing Engineering",
              value: "331,203",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2899"
              }
            }
          },
          {
            id: "2891",
            y: 247723,
            filters: { for: "2891" },
            name: "0909 Geomatic Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0909 Geomatic Engineering",
              value: "247,723",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2891"
              }
            }
          },
          {
            id: "2820",
            y: 165498,
            filters: { for: "2820" },
            name: "0901 Aerospace Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0901 Aerospace Engineering",
              value: "165,498",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2820"
              }
            }
          },
          {
            id: "2913",
            y: 115604,
            filters: { for: "2913" },
            name: "0911 Maritime Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0911 Maritime Engineering",
              value: "115,604",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2913"
              }
            }
          },
          {
            id: "2830",
            y: 80619,
            filters: { for: "2830" },
            name: "0902 Automotive Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0902 Automotive Engineering",
              value: "80,619",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2830"
              }
            }
          },
          {
            id: "2963",
            y: 20601,
            filters: { for: "2963" },
            name: "0999 Other Engineering",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0999 Other Engineering",
              value: "20,601",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2963"
              }
            }
          }
        ],
        name: "09 Engineering",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2206-for",
        data: [
          {
            id: "2581",
            y: 3048342,
            filters: { for: "2581" },
            name: "0601 Biochemistry and Cell Biology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0601 Biochemistry and Cell Biology",
              value: "3,048,342",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2581"
              }
            }
          },
          {
            id: "2620",
            y: 1810892,
            filters: { for: "2620" },
            name: "0604 Genetics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0604 Genetics",
              value: "1,810,892",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2620"
              }
            }
          },
          {
            id: "2648",
            y: 1048715,
            filters: { for: "2648" },
            name: "0607 Plant Biology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0607 Plant Biology",
              value: "1,048,715",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2648"
              }
            }
          },
          {
            id: "2597",
            y: 951642,
            filters: { for: "2597" },
            name: "0602 Ecology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0602 Ecology",
              value: "951,642",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2597"
              }
            }
          },
          {
            id: "2634",
            y: 657266,
            filters: { for: "2634" },
            name: "0605 Microbiology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0605 Microbiology",
              value: "657,266",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2634"
              }
            }
          },
          {
            id: "2655",
            y: 640371,
            filters: { for: "2655" },
            name: "0608 Zoology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0608 Zoology",
              value: "640,371",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2655"
              }
            }
          },
          {
            id: "2607",
            y: 384035,
            filters: { for: "2607" },
            name: "0603 Evolutionary Biology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0603 Evolutionary Biology",
              value: "384,035",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2607"
              }
            }
          },
          {
            id: "2642",
            y: 178918,
            filters: { for: "2642" },
            name: "0606 Physiology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0606 Physiology",
              value: "178,918",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2642"
              }
            }
          },
          {
            id: "2666",
            y: 71320,
            filters: { for: "2666" },
            name: "0699 Other Biological Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0699 Other Biological Sciences",
              value: "71,320",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2666"
              }
            }
          }
        ],
        name: "06 Biological Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2203-for",
        data: [
          {
            id: "2471",
            y: 3185008,
            filters: { for: "2471" },
            name: "0306 Physical Chemistry (incl. Structural)",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0306 Physical Chemistry (incl. Structural)",
              value: "3,185,008",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2471"
              }
            }
          },
          {
            id: "2464",
            y: 919382,
            filters: { for: "2464" },
            name: "0305 Organic Chemistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0305 Organic Chemistry",
              value: "919,382",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2464"
              }
            }
          },
          {
            id: "2438",
            y: 826921,
            filters: { for: "2438" },
            name: "0302 Inorganic Chemistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0302 Inorganic Chemistry",
              value: "826,921",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2438"
              }
            }
          },
          {
            id: "2428",
            y: 808327,
            filters: { for: "2428" },
            name: "0301 Analytical Chemistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0301 Analytical Chemistry",
              value: "808,327",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2428"
              }
            }
          },
          {
            id: "2486",
            y: 706506,
            filters: { for: "2486" },
            name: "0399 Other Chemical Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0399 Other Chemical Sciences",
              value: "706,506",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2486"
              }
            }
          },
          {
            id: "2447",
            y: 687017,
            filters: { for: "2447" },
            name: "0303 Macromolecular and Materials Chemistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0303 Macromolecular and Materials Chemistry",
              value: "687,017",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2447"
              }
            }
          },
          {
            id: "2456",
            y: 527418,
            filters: { for: "2456" },
            name: "0304 Medicinal and Biomolecular Chemistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0304 Medicinal and Biomolecular Chemistry",
              value: "527,418",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2456"
              }
            }
          },
          {
            id: "2480",
            y: 320126,
            filters: { for: "2480" },
            name: "0307 Theoretical and Computational Chemistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0307 Theoretical and Computational Chemistry",
              value: "320,126",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2480"
              }
            }
          }
        ],
        name: "03 Chemical Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2202-for",
        data: [
          {
            id: "2421",
            y: 1554907,
            filters: { for: "2421" },
            name: "0299 Other Physical Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0299 Other Physical Sciences",
              value: "1,554,907",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2421"
              }
            }
          },
          {
            id: "2389",
            y: 1477645,
            filters: { for: "2389" },
            name:
              "0202 Atomic, Molecular, Nuclear, Particle and Plasma Physics",
            tooltip: {
              title: "Fields of Research",
              subtitle:
                "0202 Atomic, Molecular, Nuclear, Particle and Plasma Physics",
              value: "1,477,645",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2389"
              }
            }
          },
          {
            id: "2377",
            y: 940838,
            filters: { for: "2377" },
            name: "0201 Astronomical and Space Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0201 Astronomical and Space Sciences",
              value: "940,838",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2377"
              }
            }
          },
          {
            id: "2401",
            y: 582303,
            filters: { for: "2401" },
            name: "0204 Condensed Matter Physics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0204 Condensed Matter Physics",
              value: "582,303",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2401"
              }
            }
          },
          {
            id: "2409",
            y: 480160,
            filters: { for: "2409" },
            name: "0205 Optical Physics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0205 Optical Physics",
              value: "480,160",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2409"
              }
            }
          },
          {
            id: "2415",
            y: 384005,
            filters: { for: "2415" },
            name: "0206 Quantum Physics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0206 Quantum Physics",
              value: "384,005",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2415"
              }
            }
          },
          {
            id: "2395",
            y: 173413,
            filters: { for: "2395" },
            name: "0203 Classical Physics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0203 Classical Physics",
              value: "173,413",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2395"
              }
            }
          }
        ],
        name: "02 Physical Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2208-for",
        data: [
          {
            id: "2746",
            y: 2574117,
            filters: { for: "2746" },
            name: "0801 Artificial Intelligence and Image Processing",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0801 Artificial Intelligence and Image Processing",
              value: "2,574,117",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2746"
              }
            }
          },
          {
            id: "2790",
            y: 1202546,
            filters: { for: "2790" },
            name: "0806 Information Systems",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0806 Information Systems",
              value: "1,202,546",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2790"
              }
            }
          },
          {
            id: "2766",
            y: 519625,
            filters: { for: "2766" },
            name: "0803 Computer Software",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0803 Computer Software",
              value: "519,625",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2766"
              }
            }
          },
          {
            id: "2759",
            y: 441716,
            filters: { for: "2759" },
            name: "0802 Computation Theory and Mathematics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0802 Computation Theory and Mathematics",
              value: "441,716",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2759"
              }
            }
          },
          {
            id: "2777",
            y: 231007,
            filters: { for: "2777" },
            name: "0804 Data Format",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0804 Data Format",
              value: "231,007",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2777"
              }
            }
          },
          {
            id: "2806",
            y: 193961,
            filters: { for: "2806" },
            name: "0807 Library and Information Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0807 Library and Information Studies",
              value: "193,961",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2806"
              }
            }
          },
          {
            id: "2783",
            y: 98417,
            filters: { for: "2783" },
            name: "0805 Distributed Computing",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0805 Distributed Computing",
              value: "98,417",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2783"
              }
            }
          },
          {
            id: "2817",
            y: 43477,
            filters: { for: "2817" },
            name: "0899 Other Information and Computing Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0899 Other Information and Computing Sciences",
              value: "43,477",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2817"
              }
            }
          }
        ],
        name: "08 Information and Computing Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2201-for",
        data: [
          {
            id: "2330",
            y: 1830154,
            filters: { for: "2330" },
            name: "0101 Pure Mathematics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0101 Pure Mathematics",
              value: "1,830,154",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2330"
              }
            }
          },
          {
            id: "2344",
            y: 1157999,
            filters: { for: "2344" },
            name: "0102 Applied Mathematics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0102 Applied Mathematics",
              value: "1,157,999",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2344"
              }
            }
          },
          {
            id: "2358",
            y: 800157,
            filters: { for: "2358" },
            name: "0104 Statistics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0104 Statistics",
              value: "800,157",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2358"
              }
            }
          },
          {
            id: "2353",
            y: 463521,
            filters: { for: "2353" },
            name: "0103 Numerical and Computational Mathematics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0103 Numerical and Computational Mathematics",
              value: "463,521",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2353"
              }
            }
          },
          {
            id: "2366",
            y: 146068,
            filters: { for: "2366" },
            name: "0105 Mathematical Physics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0105 Mathematical Physics",
              value: "146,068",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2366"
              }
            }
          }
        ],
        name: "01 Mathematical Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2217-for",
        data: [
          {
            id: "3468",
            y: 2647364,
            filters: { for: "3468" },
            name: "1701 Psychology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1701 Psychology",
              value: "2,647,364",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3468"
              }
            }
          },
          {
            id: "3484",
            y: 900526,
            filters: { for: "3484" },
            name: "1702 Cognitive Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1702 Cognitive Sciences",
              value: "900,526",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3484"
              }
            }
          },
          {
            id: "3491",
            y: 3456,
            filters: { for: "3491" },
            name: "1799 Other Psychology and Cognitive Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1799 Other Psychology and Cognitive Sciences",
              value: "3,456",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3491"
              }
            }
          }
        ],
        name: "17 Psychology and Cognitive Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2216-for",
        data: [
          {
            id: "3432",
            y: 895148,
            filters: { for: "3432" },
            name: "1606 Political Science",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1606 Political Science",
              value: "895,148",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3432"
              }
            }
          },
          {
            id: "3448",
            y: 859162,
            filters: { for: "3448" },
            name: "1608 Sociology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1608 Sociology",
              value: "859,162",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3448"
              }
            }
          },
          {
            id: "3416",
            y: 584405,
            filters: { for: "3416" },
            name: "1605 Policy and Administration",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1605 Policy and Administration",
              value: "584,405",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3416"
              }
            }
          },
          {
            id: "3410",
            y: 321117,
            filters: { for: "3410" },
            name: "1604 Human Geography",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1604 Human Geography",
              value: "321,117",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3410"
              }
            }
          },
          {
            id: "3389",
            y: 307743,
            filters: { for: "3389" },
            name: "1601 Anthropology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1601 Anthropology",
              value: "307,743",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3389"
              }
            }
          },
          {
            id: "3460",
            y: 252775,
            filters: { for: "3460" },
            name: "1699 Other Studies In Human Society",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1699 Other Studies In Human Society",
              value: "252,775",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3460"
              }
            }
          },
          {
            id: "3443",
            y: 165333,
            filters: { for: "3443" },
            name: "1607 Social Work",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1607 Social Work",
              value: "165,333",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3443"
              }
            }
          },
          {
            id: "3403",
            y: 134404,
            filters: { for: "3403" },
            name: "1603 Demography",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1603 Demography",
              value: "134,404",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3403"
              }
            }
          },
          {
            id: "3395",
            y: 122423,
            filters: { for: "3395" },
            name: "1602 Criminology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1602 Criminology",
              value: "122,423",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3395"
              }
            }
          }
        ],
        name: "16 Studies in Human Society",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2220-for",
        data: [
          {
            id: "3626",
            y: 1252362,
            filters: { for: "3626" },
            name: "2005 Literary Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2005 Literary Studies",
              value: "1,252,362",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3626"
              }
            }
          },
          {
            id: "3616",
            y: 617091,
            filters: { for: "3616" },
            name: "2004 Linguistics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2004 Linguistics",
              value: "617,091",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3616"
              }
            }
          },
          {
            id: "3577",
            y: 511210,
            filters: { for: "3577" },
            name: "2002 Cultural Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2002 Cultural Studies",
              value: "511,210",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3577"
              }
            }
          },
          {
            id: "3591",
            y: 207387,
            filters: { for: "3591" },
            name: "2003 Language Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2003 Language Studies",
              value: "207,387",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3591"
              }
            }
          },
          {
            id: "3570",
            y: 140229,
            filters: { for: "3570" },
            name: "2001 Communication and Media Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2001 Communication and Media Studies",
              value: "140,229",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3570"
              }
            }
          },
          {
            id: "3654",
            y: 12267,
            filters: { for: "3654" },
            name: "2099 Other Language, Communication and Culture",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2099 Other Language, Communication and Culture",
              value: "12,267",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3654"
              }
            }
          }
        ],
        name: "20 Language, Communication and Culture",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2221-for",
        data: [
          {
            id: "3675",
            y: 1890921,
            filters: { for: "3675" },
            name: "2103 Historical Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2103 Historical Studies",
              value: "1,890,921",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3675"
              }
            }
          },
          {
            id: "3657",
            y: 305788,
            filters: { for: "3657" },
            name: "2101 Archaeology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2101 Archaeology",
              value: "305,788",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3657"
              }
            }
          },
          {
            id: "3669",
            y: 71747,
            filters: { for: "3669" },
            name: "2102 Curatorial and Related Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2102 Curatorial and Related Studies",
              value: "71,747",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3669"
              }
            }
          },
          {
            id: "3690",
            y: 16796,
            filters: { for: "3690" },
            name: "2199 Other History and Archaeology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2199 Other History and Archaeology",
              value: "16,796",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3690"
              }
            }
          }
        ],
        name: "21 History and Archaeology",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2207-for",
        data: [
          {
            id: "2727",
            y: 487585,
            filters: { for: "2727" },
            name: "0707 Veterinary Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0707 Veterinary Sciences",
              value: "487,585",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2727"
              }
            }
          },
          {
            id: "2690",
            y: 441032,
            filters: { for: "2690" },
            name: "0703 Crop and Pasture Production",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0703 Crop and Pasture Production",
              value: "441,032",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2690"
              }
            }
          },
          {
            id: "2681",
            y: 224208,
            filters: { for: "2681" },
            name: "0702 Animal Production",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0702 Animal Production",
              value: "224,208",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2681"
              }
            }
          },
          {
            id: "2708",
            y: 167009,
            filters: { for: "2708" },
            name: "0705 Forestry Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0705 Forestry Sciences",
              value: "167,009",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2708"
              }
            }
          },
          {
            id: "2720",
            y: 161053,
            filters: { for: "2720" },
            name: "0706 Horticultural Production",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0706 Horticultural Production",
              value: "161,053",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2720"
              }
            }
          },
          {
            id: "2700",
            y: 133087,
            filters: { for: "2700" },
            name: "0704 Fisheries Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0704 Fisheries Sciences",
              value: "133,087",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2700"
              }
            }
          },
          {
            id: "2671",
            y: 75603,
            filters: { for: "2671" },
            name: "0701 Agriculture, Land and Farm Management",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0701 Agriculture, Land and Farm Management",
              value: "75,603",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2671"
              }
            }
          },
          {
            id: "2741",
            y: 18032,
            filters: { for: "2741" },
            name: "0799 Other Agricultural and Veterinary Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0799 Other Agricultural and Veterinary Sciences",
              value: "18,032",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2741"
              }
            }
          }
        ],
        name: "07 Agricultural and Veterinary Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2204-for",
        data: [
          {
            id: "2509",
            y: 833215,
            filters: { for: "2509" },
            name: "0403 Geology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0403 Geology",
              value: "833,215",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2509"
              }
            }
          },
          {
            id: "2539",
            y: 532886,
            filters: { for: "2539" },
            name: "0406 Physical Geography and Environmental Geoscience",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0406 Physical Geography and Environmental Geoscience",
              value: "532,886",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2539"
              }
            }
          },
          {
            id: "2493",
            y: 303752,
            filters: { for: "2493" },
            name: "0401 Atmospheric Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0401 Atmospheric Sciences",
              value: "303,752",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2493"
              }
            }
          },
          {
            id: "2503",
            y: 265219,
            filters: { for: "2503" },
            name: "0402 Geochemistry",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0402 Geochemistry",
              value: "265,219",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2503"
              }
            }
          },
          {
            id: "2525",
            y: 211998,
            filters: { for: "2525" },
            name: "0404 Geophysics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0404 Geophysics",
              value: "211,998",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2525"
              }
            }
          },
          {
            id: "2534",
            y: 201483,
            filters: { for: "2534" },
            name: "0405 Oceanography",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0405 Oceanography",
              value: "201,483",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2534"
              }
            }
          },
          {
            id: "2549",
            y: 8492,
            filters: { for: "2549" },
            name: "0499 Other Earth Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0499 Other Earth Sciences",
              value: "8,492",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2549"
              }
            }
          }
        ],
        name: "04 Earth Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2210-for",
        data: [
          {
            id: "3001",
            y: 1007644,
            filters: { for: "3001" },
            name: "1005 Communications Technologies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1005 Communications Technologies",
              value: "1,007,644",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3001"
              }
            }
          },
          {
            id: "3021",
            y: 247680,
            filters: { for: "3021" },
            name: "1007 Nanotechnology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1007 Nanotechnology",
              value: "247,680",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3021"
              }
            }
          },
          {
            id: "2995",
            y: 83500,
            filters: { for: "2995" },
            name: "1004 Medical Biotechnology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1004 Medical Biotechnology",
              value: "83,500",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2995"
              }
            }
          },
          {
            id: "2987",
            y: 56257,
            filters: { for: "2987" },
            name: "1003 Industrial Biotechnology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1003 Industrial Biotechnology",
              value: "56,257",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2987"
              }
            }
          },
          {
            id: "3013",
            y: 39936,
            filters: { for: "3013" },
            name: "1006 Computer Hardware",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1006 Computer Hardware",
              value: "39,936",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3013"
              }
            }
          },
          {
            id: "2968",
            y: 24255,
            filters: { for: "2968" },
            name: "1001 Agricultural Biotechnology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1001 Agricultural Biotechnology",
              value: "24,255",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2968"
              }
            }
          },
          {
            id: "3036",
            y: 22578,
            filters: { for: "3036" },
            name: "1099 Other Technology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1099 Other Technology",
              value: "22,578",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3036"
              }
            }
          },
          {
            id: "2979",
            y: 10777,
            filters: { for: "2979" },
            name: "1002 Environmental Biotechnology",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1002 Environmental Biotechnology",
              value: "10,777",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2979"
              }
            }
          }
        ],
        name: "10 Technology",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2215-for",
        data: [
          {
            id: "3342",
            y: 942161,
            filters: { for: "3342" },
            name: "1503 Business and Management",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1503 Business and Management",
              value: "942,161",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3342"
              }
            }
          },
          {
            id: "3335",
            y: 320946,
            filters: { for: "3335" },
            name: "1502 Banking, Finance and Investment",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1502 Banking, Finance and Investment",
              value: "320,946",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3335"
              }
            }
          },
          {
            id: "3364",
            y: 261061,
            filters: { for: "3364" },
            name: "1505 Marketing",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1505 Marketing",
              value: "261,061",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3364"
              }
            }
          },
          {
            id: "3326",
            y: 110382,
            filters: { for: "3326" },
            name: "1501 Accounting, Auditing and Accountability",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1501 Accounting, Auditing and Accountability",
              value: "110,382",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3326"
              }
            }
          },
          {
            id: "3373",
            y: 109301,
            filters: { for: "3373" },
            name: "1506 Tourism",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1506 Tourism",
              value: "109,301",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3373"
              }
            }
          },
          {
            id: "3358",
            y: 71699,
            filters: { for: "3358" },
            name: "1504 Commercial Services",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1504 Commercial Services",
              value: "71,699",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3358"
              }
            }
          },
          {
            id: "3381",
            y: 62889,
            filters: { for: "3381" },
            name: "1507 Transportation and Freight Services",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1507 Transportation and Freight Services",
              value: "62,889",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3381"
              }
            }
          }
        ],
        name: "15 Commerce, Management, Tourism and Services",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2213-for",
        data: [
          {
            id: "3268",
            y: 964717,
            filters: { for: "3268" },
            name: "1303 Specialist Studies In Education",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1303 Specialist Studies In Education",
              value: "964,717",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3268"
              }
            }
          },
          {
            id: "3253",
            y: 682163,
            filters: { for: "3253" },
            name: "1302 Curriculum and Pedagogy",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1302 Curriculum and Pedagogy",
              value: "682,163",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3253"
              }
            }
          },
          {
            id: "3243",
            y: 185639,
            filters: { for: "3243" },
            name: "1301 Education Systems",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1301 Education Systems",
              value: "185,639",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3243"
              }
            }
          },
          {
            id: "3283",
            y: 22639,
            filters: { for: "3283" },
            name: "1399 Other Education",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1399 Other Education",
              value: "22,639",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3283"
              }
            }
          }
        ],
        name: "13 Education",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2214-for",
        data: [
          {
            id: "3292",
            y: 1264708,
            filters: { for: "3292" },
            name: "1402 Applied Economics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1402 Applied Economics",
              value: "1,264,708",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3292"
              }
            }
          },
          {
            id: "3313",
            y: 290937,
            filters: { for: "3313" },
            name: "1403 Econometrics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1403 Econometrics",
              value: "290,937",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3313"
              }
            }
          },
          {
            id: "3286",
            y: 114505,
            filters: { for: "3286" },
            name: "1401 Economic Theory",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1401 Economic Theory",
              value: "114,505",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3286"
              }
            }
          },
          {
            id: "3320",
            y: 41753,
            filters: { for: "3320" },
            name: "1499 Other Economics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1499 Other Economics",
              value: "41,753",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3320"
              }
            }
          }
        ],
        name: "14 Economics",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2222-for",
        data: [
          {
            id: "3714",
            y: 631291,
            filters: { for: "3714" },
            name: "2203 Philosophy",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2203 Philosophy",
              value: "631,291",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3714"
              }
            }
          },
          {
            id: "3735",
            y: 609514,
            filters: { for: "3735" },
            name: "2204 Religion and Religious Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2204 Religion and Religious Studies",
              value: "609,514",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3735"
              }
            }
          },
          {
            id: "3702",
            y: 430574,
            filters: { for: "3702" },
            name: "2202 History and Philosophy of Specific Fields",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2202 History and Philosophy of Specific Fields",
              value: "430,574",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3702"
              }
            }
          },
          {
            id: "3693",
            y: 83752,
            filters: { for: "3693" },
            name: "2201 Applied Ethics",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2201 Applied Ethics",
              value: "83,752",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3693"
              }
            }
          },
          {
            id: "3744",
            y: 2795,
            filters: { for: "3744" },
            name: "2299 Other Philosophy and Religious Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "2299 Other Philosophy and Religious Studies",
              value: "2,795",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3744"
              }
            }
          }
        ],
        name: "22 Philosophy and Religious Studies",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2205-for",
        data: [
          {
            id: "2558",
            y: 581492,
            filters: { for: "2558" },
            name: "0502 Environmental Science and Management",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0502 Environmental Science and Management",
              value: "581,492",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2558"
              }
            }
          },
          {
            id: "2571",
            y: 300421,
            filters: { for: "2571" },
            name: "0503 Soil Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0503 Soil Sciences",
              value: "300,421",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2571"
              }
            }
          },
          {
            id: "2552",
            y: 139479,
            filters: { for: "2552" },
            name: "0501 Ecological Applications",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0501 Ecological Applications",
              value: "139,479",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2552"
              }
            }
          },
          {
            id: "2578",
            y: 2352,
            filters: { for: "2578" },
            name: "0599 Other Environmental Sciences",
            tooltip: {
              title: "Fields of Research",
              subtitle: "0599 Other Environmental Sciences",
              value: "2,352",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=2578"
              }
            }
          }
        ],
        name: "05 Environmental Sciences",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2218-for",
        data: [
          {
            id: "3494",
            y: 824437,
            filters: { for: "3494" },
            name: "1801 Law",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1801 Law",
              value: "824,437",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3494"
              }
            }
          },
          {
            id: "3528",
            y: 3876,
            filters: { for: "3528" },
            name: "1899 Other Law and Legal Studies",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1899 Other Law and Legal Studies",
              value: "3,876",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3528"
              }
            }
          }
        ],
        name: "18 Law and Legal Studies",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2219-for",
        data: [
          {
            id: "3549",
            y: 328683,
            filters: { for: "3549" },
            name: "1904 Performing Arts and Creative Writing",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1904 Performing Arts and Creative Writing",
              value: "328,683",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3549"
              }
            }
          },
          {
            id: "3531",
            y: 101313,
            filters: { for: "3531" },
            name: "1901 Art Theory and Criticism",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1901 Art Theory and Criticism",
              value: "101,313",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3531"
              }
            }
          },
          {
            id: "3537",
            y: 93418,
            filters: { for: "3537" },
            name: "1902 Film, Television and Digital Media",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1902 Film, Television and Digital Media",
              value: "93,418",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3537"
              }
            }
          },
          {
            id: "3561",
            y: 70685,
            filters: { for: "3561" },
            name: "1905 Visual Arts and Crafts",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1905 Visual Arts and Crafts",
              value: "70,685",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3561"
              }
            }
          },
          {
            id: "3544",
            y: 55460,
            filters: { for: "3544" },
            name: "1903 Journalism and Professional Writing",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1903 Journalism and Professional Writing",
              value: "55,460",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3544"
              }
            }
          },
          {
            id: "3567",
            y: 1311,
            filters: { for: "3567" },
            name: "1999 Other Studies In Creative Arts and Writing",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1999 Other Studies In Creative Arts and Writing",
              value: "1,311",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3567"
              }
            }
          }
        ],
        name: "19 Studies in Creative Arts and Writing",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      },
      {
        id: "2212-for",
        data: [
          {
            id: "3230",
            y: 149855,
            filters: { for: "3230" },
            name: "1205 Urban and Regional Planning",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1205 Urban and Regional Planning",
              value: "149,855",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3230"
              }
            }
          },
          {
            id: "3200",
            y: 124669,
            filters: { for: "3200" },
            name: "1201 Architecture",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1201 Architecture",
              value: "124,669",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3200"
              }
            }
          },
          {
            id: "3209",
            y: 95704,
            filters: { for: "3209" },
            name: "1202 Building",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1202 Building",
              value: "95,704",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3209"
              }
            }
          },
          {
            id: "3214",
            y: 73243,
            filters: { for: "3214" },
            name: "1203 Design Practice and Management",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1203 Design Practice and Management",
              value: "73,243",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3214"
              }
            }
          },
          {
            id: "3240",
            y: 447,
            filters: { for: "3240" },
            name: "1299 Other Built Environment and Design",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1299 Other Built Environment and Design",
              value: "447",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3240"
              }
            }
          },
          {
            id: "3223",
            y: 309,
            filters: { for: "3223" },
            name: "1204 Engineering Design",
            tooltip: {
              title: "Fields of Research",
              subtitle: "1204 Engineering Design",
              value: "309",
              unit: "publications",
              link: {
                label: "Show publications",
                href: "/discover/publication?and_facet_for=3223"
              }
            }
          }
        ],
        name: "12 Built Environment and Design",
        minPointLength: 5,
        pointWidth: 15,
        borderWidth: 0,
        dataLabels: { enabled: true },
        states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
      }
    ],
    drillUpButton: {
      relativeTo: "spacingBox",
      position: { verticalAlign: "top", align: "left", y: 0 }
    },
    activeAxisLabelStyle: { color: "#000000", textDecoration: "none" },
    activeDataLabelStyle: { color: "#000000", textDecoration: "none" },
    allowPointDrilldown: true
  },
  series: [
    {
      id: "for",
      data: [
        {
          id: "2211",
          y: 29197323,
          filters: { for: "2211" },
          drilldown: "2211-for",
          name: "11 Medical and Health Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "11 Medical and Health Sciences",
            value: "29,197,323",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2211"
            }
          }
        },
        {
          id: "2209",
          y: 11853650,
          filters: { for: "2209" },
          drilldown: "2209-for",
          name: "09 Engineering",
          tooltip: {
            title: "Fields of Research",
            subtitle: "09 Engineering",
            value: "11,853,650",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2209"
            }
          }
        },
        {
          id: "2206",
          y: 8755084,
          filters: { for: "2206" },
          drilldown: "2206-for",
          name: "06 Biological Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "06 Biological Sciences",
            value: "8,755,084",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2206"
            }
          }
        },
        {
          id: "2203",
          y: 7665175,
          filters: { for: "2203" },
          drilldown: "2203-for",
          name: "03 Chemical Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "03 Chemical Sciences",
            value: "7,665,175",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2203"
            }
          }
        },
        {
          id: "2202",
          y: 5999728,
          filters: { for: "2202" },
          drilldown: "2202-for",
          name: "02 Physical Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "02 Physical Sciences",
            value: "5,999,728",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2202"
            }
          }
        },
        {
          id: "2208",
          y: 4902347,
          filters: { for: "2208" },
          drilldown: "2208-for",
          name: "08 Information and Computing Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "08 Information and Computing Sciences",
            value: "4,902,347",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2208"
            }
          }
        },
        {
          id: "2201",
          y: 4872782,
          filters: { for: "2201" },
          drilldown: "2201-for",
          name: "01 Mathematical Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "01 Mathematical Sciences",
            value: "4,872,782",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2201"
            }
          }
        },
        {
          id: "2217",
          y: 3719500,
          filters: { for: "2217" },
          drilldown: "2217-for",
          name: "17 Psychology and Cognitive Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "17 Psychology and Cognitive Sciences",
            value: "3,719,500",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2217"
            }
          }
        },
        {
          id: "2216",
          y: 3254180,
          filters: { for: "2216" },
          drilldown: "2216-for",
          name: "16 Studies in Human Society",
          tooltip: {
            title: "Fields of Research",
            subtitle: "16 Studies in Human Society",
            value: "3,254,180",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2216"
            }
          }
        },
        {
          id: "2220",
          y: 2414495,
          filters: { for: "2220" },
          drilldown: "2220-for",
          name: "20 Language, Communication and Culture",
          tooltip: {
            title: "Fields of Research",
            subtitle: "20 Language, Communication and Culture",
            value: "2,414,495",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2220"
            }
          }
        },
        {
          id: "2221",
          y: 2266584,
          filters: { for: "2221" },
          drilldown: "2221-for",
          name: "21 History and Archaeology",
          tooltip: {
            title: "Fields of Research",
            subtitle: "21 History and Archaeology",
            value: "2,266,584",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2221"
            }
          }
        },
        {
          id: "2207",
          y: 2043667,
          filters: { for: "2207" },
          drilldown: "2207-for",
          name: "07 Agricultural and Veterinary Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "07 Agricultural and Veterinary Sciences",
            value: "2,043,667",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2207"
            }
          }
        },
        {
          id: "2204",
          y: 1995129,
          filters: { for: "2204" },
          drilldown: "2204-for",
          name: "04 Earth Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "04 Earth Sciences",
            value: "1,995,129",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2204"
            }
          }
        },
        {
          id: "2210",
          y: 1891409,
          filters: { for: "2210" },
          drilldown: "2210-for",
          name: "10 Technology",
          tooltip: {
            title: "Fields of Research",
            subtitle: "10 Technology",
            value: "1,891,409",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2210"
            }
          }
        },
        {
          id: "2215",
          y: 1733902,
          filters: { for: "2215" },
          drilldown: "2215-for",
          name: "15 Commerce, Management, Tourism and Services",
          tooltip: {
            title: "Fields of Research",
            subtitle: "15 Commerce, Management, Tourism and Services",
            value: "1,733,902",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2215"
            }
          }
        },
        {
          id: "2213",
          y: 1731815,
          filters: { for: "2213" },
          drilldown: "2213-for",
          name: "13 Education",
          tooltip: {
            title: "Fields of Research",
            subtitle: "13 Education",
            value: "1,731,815",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2213"
            }
          }
        },
        {
          id: "2214",
          y: 1668041,
          filters: { for: "2214" },
          drilldown: "2214-for",
          name: "14 Economics",
          tooltip: {
            title: "Fields of Research",
            subtitle: "14 Economics",
            value: "1,668,041",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2214"
            }
          }
        },
        {
          id: "2222",
          y: 1618890,
          filters: { for: "2222" },
          drilldown: "2222-for",
          name: "22 Philosophy and Religious Studies",
          tooltip: {
            title: "Fields of Research",
            subtitle: "22 Philosophy and Religious Studies",
            value: "1,618,890",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2222"
            }
          }
        },
        {
          id: "2205",
          y: 1320875,
          filters: { for: "2205" },
          drilldown: "2205-for",
          name: "05 Environmental Sciences",
          tooltip: {
            title: "Fields of Research",
            subtitle: "05 Environmental Sciences",
            value: "1,320,875",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2205"
            }
          }
        },
        {
          id: "2218",
          y: 846528,
          filters: { for: "2218" },
          drilldown: "2218-for",
          name: "18 Law and Legal Studies",
          tooltip: {
            title: "Fields of Research",
            subtitle: "18 Law and Legal Studies",
            value: "846,528",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2218"
            }
          }
        },
        {
          id: "2219",
          y: 622464,
          filters: { for: "2219" },
          drilldown: "2219-for",
          name: "19 Studies in Creative Arts and Writing",
          tooltip: {
            title: "Fields of Research",
            subtitle: "19 Studies in Creative Arts and Writing",
            value: "622,464",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2219"
            }
          }
        },
        {
          id: "2212",
          y: 465149,
          filters: { for: "2212" },
          drilldown: "2212-for",
          name: "12 Built Environment and Design",
          tooltip: {
            title: "Fields of Research",
            subtitle: "12 Built Environment and Design",
            value: "465,149",
            unit: "publications",
            link: {
              label: "Show publications",
              href: "/discover/publication?and_facet_for=2212"
            }
          }
        }
      ],
      name: "Fields of Research",
      pointWidth: 15,
      minPointLength: 5,
      borderWidth: 0,
      dataLabels: { enabled: true, inside: false, verticalAlign: "middle" },
      states: { hover: { color: "#0D4667" }, inactive: { opacity: 1 } }
    }
  ]
};

function App(props) {
  return (
    <div className="App">
      <h1>Demo</h1>
      <p></p>
      <div className="overflow">
        <HighchartsReact highcharts={highcharts} options={options} />
      </div>
    </div>
  );
}

App.defaultProps = {};

export default App;
