import Head from "next/head";
import Navbar from "../components/Navbar";
import Chart from "chart.js/auto";
import RetiredCard from "../components/retiredCard";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useRouter } from 'next/router'

Chart.register(CategoryScale, ChartDataLabels);
import { Swiper, SwiperSlide } from "swiper/react";
Chart.defaults.set("plugins.datalabels", {
  color: "white",
  labels: {
    font: {
      weight: "bold",
      size: "20px",
    },
  },
});
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination } from "swiper";
import NewJudgeCard from "../components/newJudgeCard";
const budget = {
  font: {
    size: 14,
  },
  labels: [
    "މުވައްޒަފުންނަށް ހިނގާ ޙަރަދު",
    "އޮފީސް ހިންގުމަށް ބޭނުންވާ ހަރުމުދާ ހޯދުމަށް ކުރާ ޚަރަދު",
    "ޚަރަދު ނުކުރެވި ބާކީ ހުރި ޖުމްލަ ޢަދަދު ",
    "އޮފީސް ހިންގުމަށް ބޭނުންވާ ހަރުމުދާ ހޯދުމަށް ކުރާ ޚަރަދު",
    "ޕެންޝަނާއި، މުސްކުޅިކުރައްވާ މުވައްޒަފުންނަށާއި އަދި ވަކި ޙިދުމަތަކަށް ނޫން ގޮތުން ދޭ ފައިސާ",
    "މަރާމާތު ކުރުމާއި ބެލެހެއްޓުމުގެ ޚަރަދު",
    "އޮފީސް ހިންގުމުގެ ބޭނުމަށް ހޯދާ ތަކެތީގެ އަގު",
    "ދަތުރުފަތުރު ކުރުމުގެ ޚަރަދު",
    "ތަމްރީން ކުރުމަށް ކުރެވޭ ޚަރަދު",
  ],
  options: {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 1,
          },
        },
      },
    },
  },
  plugins: {
    ChartDataLabels,
    legend: {
      display: false,
      font: {
        family: "mv_waheed",
      },
    },
    font: {
      family: "mv_waheed",
    },
  },
  resposive: true,
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    indexAxis: "y",
  },
  datasets: [
    {
      indexAxis: "y",
      label: "Finished Cases",

      data: [
        8828905, 4893525.22, 3126990, 520777.99, 299542.0, 203239.45, 141052.17,
        94058,
      ],
      backgroundColor: [
        "#396487",
        "#5590A5",
        "#D4C27E",
        "#7FA283",
        "#BDE0DA",
        "#D3A784",
        "#7D95A2",
        "#D28489",
        "#AF87BC",
      ],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
  ],
};

const mgnc = {
  legend: {
    display: false,
  },
  labels: [
    "Thahugeegu Kuran Nufenna",
    "Thahugeegu Kuran fenna",
    "Dhiraasaa Kurvemundhaa",
  ],
  labels: {
    display: false,
    data: [
      "Thahugeegu Kuran Nufenna",
      "Thahugeegu Kuran fenna",
      "Dhiraasaa Kurvemundhaa",
    ],
  },
  plugins: {
    ChartDataLabels,
    legend: {
      display: false,
    },
  },
  resposive: true,
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    indexAxis: "y",
  },
  datasets: [
    {
      indexAxis: "y",
      label: "Finished Cases",

      data: [374, 21, 42],
      backgroundColor: ["#5590A5", "#D3C27F", "#7FA282"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
  ],
};
const nimunuMassala = {
  labels: ["Saabithuvi", "Saabithu Nuvaa"],

  plugins: {
    ChartDataLabels,
    legend: {
      position: "right",
    },
  },
  resposive: true,
  options: {
    indexAxis: "y",
  },
  datasets: [
    {
      indexAxis: "y",
      label: "Finished Cases",

      data: [15, 18],
      backgroundColor: ["#5C89AC", "#3C6686"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
  ],
};

const beliShakuvaa = {
  labels: ["2021", "2020", "2019", "2018", "2017"],

  plugins: {
    legend: {
      position: "right",
    },
  },
  resposive: true,
  options: {
    indexAxis: "y",
  },
  datasets: [
    {
      indexAxis: "y",
      label: "Total Cases",

      data: [88, 147, 154, 60, 115],
      backgroundColor: ["#5C89AC"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
    {
      indexAxis: "y",
      label: "Concluded Cases",

      data: [33, 85, 48, 23, 62],
      backgroundColor: ["#3C6686"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
  ],
};

const shakuvaaHushahelhunu = {
  labels: ["2021", "2020", "2019"],
  indexAxis: "x",

  legend: {
    position: "left",
  },

  resposive: true,
  datasets: [
    {
      label: "No. of Complaints",
      data: [404, 288, 144],
      backgroundColor: ["#3C6686"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
  ],
};
const newJudges = [
  {
    name: "އަލްއުސްތާޛާ ޒިޔާދާ ޠާހިރު",
    atoll: "ސ.ހިތަދޫ މެޖިސްޓްރޭޓް ކޯޓު",
    image: "1.jpg",
  },
  {
    name: "އަލްއުސްތާޛާ ޢާއިޝަތު ސުމައިނާ",
    atoll: "ގއ.މާމެންދޫ މެޖިސްޓްރޭޓް ކޯޓު",
    image: "2.jpeg",
  },
  {
    name: "އަލްއުސްތާޛު ޙާމިދު ރަޝީދު",
    atoll: "ސ.މަރަދޫ މެޖިސްޓްރޭޓް ކޯޓު",
    image: "3.jpg",
  },
  {
    name: "އަލްއުސްތާޛު އިސްމާޢީލް ޝަފީޢު",
    atoll: "ކްރިމިނަލް ކޯޓު",
    image: "4.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަލީ ނަދީމް",
    atoll: "ކްރިމިނަލް ކޯޓު",
    image: "5.png",
  },
  {
    name: "އަލްއުސްތާޛާ މަރްޔަމް އިފްހާމް ނާޝިދު",
    atoll: "ބ.އޭދަފުށީ މެޖިސްޓްރޭޓް ކޯޓު",
    image: "6.png",
  },
  {
    name: "އަލްއުސްތާޛު ވިޝާޙް ވަޖީދް",
    atoll: "ގއ.ކޮލަމާފުށީ މެޖިސްޓްރޭޓް ކޯޓު",
    image: "7.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަބްދުއްސަލާމް",
    atoll: "ޏ.ފުވައްމުލަކު މެޖިސްޓްރޭޓް ކޯޓް",
    image: "8.png",
  },
  {
    name: "އަލްއުސްތާޛާ ޒަޢީމާ ނަޝީދު އަބޫބަކުރު",
    atoll: "ފެމިލީ ކޯޓު",
    image: "9.png",
  },
  {
    name: "އަލްއުސްތާޛާ މަޢީޝާ ޔޫސުފް ސަމީރު",
    atoll: "ފެމިލީ ކޯޓު",
    image: "10.png",
  },
]
const retiredJudges = [
  {
    name: "އަލްއުސްތާޛު އަޙްމަދު ފަޙީމް",
    atoll: "ލ. ފޮނަދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ މެޖިސްޓްރޭޓް",
    image: "1_1.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަބްދުލްރައްޒާޤް އާދަމް",
    atoll: "ހދ. ނެއްލައިދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "2_1.png",
  },
  {
    name: "އަލްއުސްތާޛު އިބްރާހީމް އަޙްމަދު",
    atoll: "ސ.މަރަދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "3_1.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަބްދުލްޤާދިރު އާދަމް",
    atoll: "ދ. ކުޑަހުވަދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "4_1.png",
  },
  {
    name: "އަލްއުސްތާޛު އާދަމް ޢަބްދުއްލަޠީފު",
    atoll: "ހއ. އިހަވަންދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "5_1.png",
  },

  {
    name: "އަލްއުސްތާޛު އަޙްމަދު ނަޞީރު އާދަމް",
    atoll: "ހއ.އުލިގަން މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "6_1.png",
  },
  {
    name: "އަލްއުސްތާޛު މުޙައްމަދު ޢަފީފް ޢީސާ",
    atoll: "ހއ.ދިއްދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ މެޖިސްޓްރޭޓް",
    image: "7_1.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަބްދުލްޣަނީ ޢަލީ",
    atoll: "ހއ.ބާރަށު މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "8_1.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަލީ ޝަމީމް",
    atoll: "ތ.އޮމަދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "9_1.png",
  },
  {
    name: "އަލްއުސްތާޛު މުޙައްމަދު ޒާހިރު ޙަސަން",
    atoll:
      "ގދ. ތިނަދޫ މެޖިސްޓްރޭޓް ކޯޓް ،ގދ. ޖުޑީޝަލް ދާއިރާގެ އިސްމެޖިސްޓްރޭޓް",
    image: "10_1.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަލީ ޝަފީޤު",
    atoll: "ދ.މީދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "11_1.png",
  },
  {
    name: "އަލްއުސްތާޛު އަޙްމަދު ލަޠީފް",
    atoll: "ބ.ދަރަވަންދޫ މެޖިސްޓްރޭޓް ކޯޓުގެ އިސްމެޖިސްޓްރޭޓް",
    image: "12.png",
  },
  {
    name: "އަލްއުސްތާޛު ޢަބްދުالله އަދީބު",
    atoll: "ފެމިލީ ކޯޓްގެ ޤާޟީ",
    image: "13.png",
  },
];

const malefemaleJudges = {
  labels: ["2021", "2020", "2019"],
  indexAxis: "x",

  legend: {
    position: "left",
  },

  resposive: true,
  datasets: [
    {
      label: "No. of Female Judges",
      data: [20, 15, 12],
      backgroundColor: ["#C88FB9"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
    {
      label: "No. of Male Judges",
      data: [164, 173, 172],
      backgroundColor: ["#6CA3AE"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 0,
    },
  ],
};
export default function Home(props) {
  
 
  const shareData = {
    title: 'Annial Report 2021 | Judicial Service Commission',
    text: 'Judicial Service Commission Annual Report 2021',
    url: 'https://jsc.gov.mv/annual-report-2021'
  }

  const share = () =>{
       navigator.share(shareData)
  }
  const router = useRouter()
  const showParagraph = (id, id1, btn) => {
    if (typeof window !== "undefined") {
      document.getElementById(id1).classList.remove("paragraph-fade");
      document.getElementById(btn).style.display = "none";
      document.getElementById(id).style.display = "block";
    }
  };

  const goToReport=()=>{
    router.push("https://jsc.gov.mv/annual-report-2021/Annual-report-2021.pdf")
  }

  return (
    <div>
       <Head>

    
        <title>{props.pageHeader.title}</title>
        {props.pageHeader.metas.map((attributes, index) => (
          <meta {...attributes} key={index} />
        ))}

<link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
                />
               
      </Head>

      <div className="bg-gray-100 min-h-screen mb-4 main-section md:bg-[length:40%]">
        <div className="container p-6 mx-auto ltr ">
          <div className="flex-col flex justify-between h-screen">
            <div>
              <img className="w-36 mt-9 mb-12" src="/annual-report-2021/Logo.svg"></img>
            </div>
            <div className="mb-12">
              <h1 className="font-waheed text-[#9C893D] text-4xl mb-2 md:text-6xl">
                އަހަރީ ރިޕޯޓް
              </h1>
              <h1 className="text-9xl font-butler-light md:text-[200px] text-[#3C6686] ">
                2021
              </h1>
              <button onClick={e=>goToReport()} className="bg-[#3C6686] shadow-lg hover:shadow-xl transition ease-in active:translate-y-[3px] hover:translate-y-[-3px] font-butler text-white font-bold py-2 px-4 rounded-full">
                Read Full Report
              </button>

              <div className=" h-10 w-10">
                <img
                  src="/annual-report-2021/Down.svg"
                  className="animate-bounce w-full mt-12"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />

      <div>
      
        <div className="container p-6 mx-auto">
        <div  className="col mt-6 w-64 mx-auto text-center sharee">
              <a rel="noreferrer"  target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://jsc.gov.mv/annual-report-2021/"><i className="fa fa-facebook"></i></a>
              <a rel="noreferrer"  target="_blank"  href={`https://twitter.com/intent/tweet?text=Judicial Service Commission Annual Report 2021 via @maldivesjsc &url=https://jsc.gov.mv/annual-report-2021/`} ><i className="fa fa-twitter"></i></a> 
              <a rel="noreferrer"  onClick={share} ><i className="fa fa-share"></i></a>
              </div>
          <div className="max-w-xl mx-auto mt-20 mb-10">
            <p className="text-lg">
              މި ރިޕޯޓަކީ 2021 ވަނަ އަހަރު ޖުޑީޝަލް ސަރވިސް ކޮމިޝަން ހިނގައި
              ދިޔަގޮތުގެ މަށްޗަށް އެކުލަވާލެވިފައިވާ ކޮމިޝަނުގެ 2021 ވަނަ
              އަހަރުގެ އަހަރީ ރިޕޯޓެވެ. މި ރިޕޯޓުގައި މައިގަނޑު ގޮތެއްގައި
              ބަލާލެވިފައި ވާނީ 2021 ވަނަ އަހަރު ކޮމިޝަނުން ކޮށްފައިވާ މުހިންމު
              މަސަކަތްތަކާއި، ލިބުނު ކުރިއެރުންތަކާއި، ކޮމިޝަނުގެ މަސައްކަތް
              ހިންގުމުގައި ކުރިމަތިވި ގޮންޖެހުންތަކާއި އަދި ކޮމިޝަނުގެ
              ކުރިމަގަށް ރޭވޭ ކަންތައްތަކުގެ މައްޗަށެވެ. އެގޮތުން މިރިޕޯޓް
              ބިނާކޮށްފައި ވާނީ ޤާނޫނުއަސާސީގެ 159 ވަނަ މާއްދާ އާއި ޤާނޫނު
              ނަންބަރު 2008/10 (ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ޤާނޫނު) ގެ 21 ވަނަ
              މާއްދާގެ ދަށުން ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ މަސްއޫލިއްޔަތުތަކާއި
              ޒިންމާތައް ކަމުގައި ކަނޑައަޅާފައިވާ ކަންތައްތަކާއި އަދި އެހެނިހެން
              ޤާނޫނުތަކުން ކޮމިޝަނުގެ މައްޗަށް ލާޒިމުކޮށްފައިވާ ކަންތައްތަކުގެ
              މައްޗަށެވެ.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-90">
        <div className="container p-6 mx-auto">
          <div className="max-w-xl mx-auto mt-10 mb-10">
            <h2 className=" text-2xl text-center text-white opacity-50 mb-10 ">
              ލަނޑުދަނޑި
            </h2>
            <p className="text-4xl leading-relaxed text-[#9C893D] text-center font-waheed">
              އިންސާފު ކަށަވަރުކޮށްދޭ، އިތުބާރުހިފޭ ޖަވާބުދާރީވާ ވިސްނުން ފަހި،
              ފަނޑިޔާރުގެއެއް
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container p-6 mx-auto">
          <div className="max-w-2xl mx-auto mt-20 mb-10">
            <h2 className=" text-2xl font-waheed text-3xl text-center text-[#9C893D]  mb-10 ">
              ކޮމިޝަނުގެ ރައީސްގެ ބަސް
            </h2>
            <p
              id="raeesgebas-1"
              className="leading-relaxed text-lg paragraph-fade"
            >
              ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނަކީ ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާގެ
              ޤާނޫނުއަސާސީންނާއި، ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ޤާނޫނުން
              ބާރުލިބިގެން އުފައްދާފައިވާ މިނިވަން މުސްތަޤިއްލު
              މުއައްސަސާއެކެވެ. މި ކޮމިޝަނުގެ 2021 ވަނަ އަހަރުގެ އަހަރީ ރިޕޯޓް
              ހުށަހަޅައި ދިނުމުގެ އުފާލިބުނު ކަމަށްޓަކައި ނިޢުމަތްތަކުގެ ވެރި ﷲ
              ޞުބުޙާނަހޫ ވަތަޢާލާއަށް ޙަމްދާ ޝުކުރު ދަންނަވަމެވެ.
              <br></br>
              ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާގެ ޤާނޫނުއަސާސީންނާއި، ޖުޑީޝަލް ސަރވިސް
              ކޮމިޝަނުގެ ޤާނޫނުންނާއި، ދިވެހިރާއްޖޭގެ ފަނޑިޔާރުންގެ ޤާނޫނުންނާއި
              އަދި ދިވެހިރާއްޖޭގެ ކޯޓުތަކާބެހޭ ޤާނޫނުން މި ކޮމިޝަނަށް
              މަތިކޮށްފައިވާ ޒިންމާތަކާއި މަސްޢޫލިއްޔަތުތައް އެންމެ
              ފުރިހަމަގޮތުގައި އަދާކޮށް ދިވެހިރާއްޖޭގެ ޖުޑީޝަރީ ތަރައްޤީކޮށް
              އިޞްލާޙު ކުރުމަށް 2021 ވަނަ އަހަރު ގިނަގުނަ މަސައްކަތްތަކެއް
              ނިންމައި ތަންފީޒު ކުރެވުނެވެ. 2021 ވަނަ އަހަރަކީ މިކޮމިޝަނުގެ
              އަމާޒާ ލަނޑުދަނޑި ސާފުކޮށް ބަޔާންކުރެވި، އެމަންޒިލަށް ދަތުރު ފެށި
              އަހަރެވެ. ކޮމިޝަން އައު ލޯގޯއަކާއެކު ކުރަން މިއުޅޭ ދަތުރުގެ
              މަންޒިލް ހުދާއި ކަޅުން ބަޔާންކޮށް ދަތުރުފެށި އަހަރެވެ. އެގޮތުން،
              «އިންސާފު ކަށަވަރުކޮށްދޭ، އިތުބާރުހިފޭ ޖަވާބުދާރީވާ ވިސްނުން ފަހި،
              ފަނޑިޔާރުގެއެއް» ރައްޔިތުންނަށް ކަށަވަރުކޮށްދިނުމަށް މިކޮމިޝަނުން
              ދަތުރު ފެށިއެވެ.
            </p>
            <button
              id="raeesgebas-btn"
              onClick={(e) =>
                showParagraph("raeesgebas", "raeesgebas-1", "raeesgebas-btn")
              }
              className="font-waheed text-[#9C893D]  text-xl text-center hover:opacity-80 opacity-100 underline rounded-full mt-[-4px]"
            >
              އިތުރަށް ކިޔުމަށް
            </button>
            <p id="raeesgebas" className="hidden">
              ދުނިޔެއަށް ކުރިމަތިވި ކޮވިޑް-19 އާލަމީ ވަބާއަކީ، މިއަދު ކޮމިޝަނަށް
              ކުރިމަތިވެފައިވާ ގޮންޖެހުމެއް ނޫނެވެ. 2020 ވަނަ އަހަރު ކޮމިޝަނަށް
              ގެނެވުނު އުމްރާނީ ތަރައްޤީއާއި މަސައްކަތުގެ ވައްޓަފާޅިއާއި
              އާދަކާދައަށް ގެނެވުނު އެދެވޭ ހެޔޮ ބަދަލުތަކާއެކު، މިއަދު
              ކޮމިޝަނުން މަސައްކަތް ކުރަމުން މިދަނީ މިކޮމިޝަނުންގެ
              މަސައްކަތްތައް ހުއްޓުމެއްނެތް ގޮތަށް އައު އާންމު ހާލަތުގައެވެ.
              <br></br>
              2021 ވަނަ އަހަރު މިކޮމިޝަނުގެ 93 ބައްދަލުވުމެއް ބާއްވާ 658
              ނިންމުމެއް ނިންމިއެވެ. އަދި 7 ދާއިމީ ކޮމިޓީގެ ގިނަ ބައްދަލުވުން
              ބާއްވާ 88 ތަޚްޤީޤު ކޮމިޓީ އެއްގެ މަސައްކަތް ކުރިއަށް ގެންދިޔައެވެ.
              <br></br>
              ކޯޓުތަކަށް ހުށަހެޅޭ މައްސަލައިގެ އަދަދަށާއި، އެ ދާއިރާއެއްގެ
              ކޯތުތަކުގެ މެދުގައި ހަމަޖެހިފައިވާ ދަތުރުފަތުރުގެ ނިޒާމަށް
              ރިއާޔަތްކުރުމަށްފަހު، ފަނޑިޔާރުންގެ ދަތިކަން ދިމާވާ ކޯޓުތަކަށް
              ފަނޑިޔާރުން ޢައްޔަނުކުރުމަށް 33 ފަނޑިޔާރުކު ހޯދުމަށް 10 ފަހަރު
              އިޢުލާން ކޮށް، އެ ބޭފުޅުންގެ ޤާބިލުކަމަށް ބަލައި، 4 ޤާޟީންނާއި 6
              މެޖިސްޓްރޭޓުން 2021ގެ ނިޔަލަށް ޢައްޔަނު ކޮށްފައިވާނެއެވެ.
              <br></br>
              މީގެ އިރުތުން، ފަނޑިޔާރުން ޢައްޔަނުކުރުމުގެ ގަވާއިދަކީ
              މިހާރަށްވުރެ ހާމަކަން ބޮޑު، އިތުބާރު ލިބިފައިވާ މަސައްކަތަކަށް
              ހެދުމަށް ހަރުދަނާ އިޞްލާޙުތަކެއް ގެނެސްފައިވާނެއެވެ. އެގޮތުން،
              ފަނޑިޔާރުކަމަށް އެދި ހުށަހަޅާ އެންމެހައި ބޭފުޅުންގެ ނަންތައް
              އާންމުކުރުމާއި ކުށުގެ ރެކޯޑުތައް ސާފުކުރުމުގެ މަރުހަލާ ހަރުދަނާ
              ކޮށްފައި ވާނެއެވެ. އަދި 2021 އަހަރުގެ ތެރޭގައި ޔޫ.އެން.ޑީ.ޕީގެ
              ފަންނީ މާހިރެއްގެ އެހީގައި މިގަވާއިދު އިތުރަށް ތަރަށްޤީކޮށް
              ހަރުދަނާ ކުރުމުގެ މަސައްކަތް ކުރުމަށްފަހު، މިހާރު މިދަނީ މި
              ގަވާއިދުގެ އަޖުމަބެލުމުގެ މަސައްކަތް ކުރަމުންނެވެ.
              <br></br>
              2021 ވަނަ އަހަރު މިކޮމިޝަނަށް ލިބުނު އެންމެ ބޮޑު އެއް ކުރިއެރުމަކީ
              ފަނޑިޔާރުންގެ ފެންވަރު ބެލުމުގެ މަސައްކަތް ޢަމަލީ ގޮތުން ފެށުމެވެ.
              އެގޮތުން ފަނޑިޔާރުންގެ މަސައްކަތުގެ ފެންވަރު ބެލުމުގެ މަސައްކަތް
              ކުރުމަށް އިވޭލުއޭޓަރުންގެ ގޮތުގައި ސުޕްރީމް ކޯޓު އަދި ހައި ކޯޓުގެ
              ފަނޑިޔާރުން ހަމަޖައްސައި، މި މަސައްކަތުގައި ބައިވެރިވާ ހުރިހާ
              ފަރާތްތަކެއް ވާނީ ތަމްރީން ކޮށްފައެވެ. ޕައިލެޓް އިވޭލުއޭޝަންތައް
              މިފެށުނު އަހަރު ނިމޭނެކަމަކީ އަޅުގަނޑުމެންނަށް ލިބޭ އެންމެ ބޮޑު
              އެއް ކުރިއެރުމެވެ. މި މަސައްކަތުގައި އިނގިރޭސިވިލާތުގެ ސަރުކާރުން
              ޔޫއެންޑީޕީ މެދުވެރިކޮށް ކެނޑިނޭޅި ދެއްވާ އެއްބާރުލުމަކީ ކޮމިޝަނުން
              ފާހަގަ ކުރާ ކަމެކެވެ.
              <br></br>
              2020 ވަނަ އަހަރު ފަނޑިޔާރުންގެ މާލީ ބަޔާން ހުށަހެޅުމުގެ ގަވާއިދު
              މުރާޖާކޮށް 2021 ވަނަ އަހަރު 199 ފަނޑިޔާރުން 461 މާލީ ބަޔާން
              ހުށަހަޅާފައިވާއިރު، މިގަވާއިދުގައި ބުނާ ފަދައިން ކޮމިޝަނުން މާލީ
              ބަޔާންތައް ދިރާސާކޮށް މާލީ ބަޔާންތަކުގައި އެއްވެސް
              އިންކޮންސިސްޓަންސީއެއް ފާހަގަވެފައި ނުވާކަމީ މިގަވާއިދުގެ މަޤްސަދު
              މާނަވީ ގޮތެއްގައި ތަންފީޒްވާކަމުގެ ދަލީލެކެވެ.
              <br></br>
              ދިވެހިރާއްޖޭގެ ޝަރުޢީ ނިޒާމާމެދު ރައްޔިތުންގެ މެދުގައި އުފެދޭ
              ސުވާލުތަކާއި ފަނޑިޔާރުންނާ ކޯޓުތަކާމެދު އުފެދޭ ކަންބޮޑުވުންތަކާ
              ގުޅިގެން ފާއިތުވެދިޔަ އަހަރު، މިކޮމިޝަނަށް 404 މައްސަލައެއް
              ހުށަހެޅި، މިކޮމިޝަނުގެ މައްސަލަ ބެލުމާމެދު ގޮތެއް ނިންމާ ކޮމިޓީން
              މި މައްސަލަތަކުގެ ތެރެއިން 90% މައްސަލައަށް ގޮތެއް ނިންމިއެވެ.
              ވޭތުވެ ދިޔަ 3 އަހަރު މިކޮމިޝަނަށް ހުށަހެޅޭ މައްސަލަތައް އޭގެ ކުރީ
              10 އަހަރުގެ ޖުމްލައަށްވުރެ 28% އިންސައްތަ އިތުރަށް
              ހުށަހެޅިފައިވާކަމީ މި ކޮމިޝަނާމެދު އާންމުން ކުރާ އިތުބާރު
              ބޮޑުތަނުން ބޮޑުވެފައިވާކަން ދޭހަވާކަމެކެވެ.
              <br></br>
              2021 ވަނަ އަހަރުވެސް، ތަޚްޤީޤް ކޮމިޓީތަކުން 33 މައްސަލައެއް
              ނިންމާފައި ވެއެވެ. ކޮމިޝަނުގައި މިވަގުތު ނުނިމި ހުރި މައްސަލައިގެ
              އަދަދު 2020 ވަނަ އަހަރާ އަޅާބަލާއިރު 20 އިންސައްތަ ދަށަށް
              ގޮސްފައިވެއެވެ.
              <br></br>
              މުއައްސަސާއެއްގެ އެންމެ މުހިންމު އެއް ރައުސުލްމާލަކީ އިންސާނީ
              ވަޞީލަތެވެ. ކޮމިޝަނުގެ މަސައްކަތްތަކަށް ލިބިފައިވާ
              ކުރިއެރުންތަކަކީ، މުވައްޒަފުންގެ އަދަދަށް ބަދަލުތަކެއް ނުގެނެސް
              ގެނެވުނު ކުރިއެރުމެއްކަމީ ކޮމިޝަނުގެ މުވައްޒަފުން މަސައްކަތުގައި
              ދައްކާ ލާމަސީލު ނަމޫނާކަން އުފަލާއެކު ފާހަގަ ކުރަމެވެ.
              މުވައްޒަފުން ތަމްރީން ކުރުމަށްޓަކައި 36 ގަޑިއިރުގެ ތަމްރީން
              ޕްރޮގްރާމްތައް ނިމިދިއަ އަހަރު ރާވާ ހިންގާފައިވުމީ ޒަމާނީ
              ވެއްޓެއްގައި ޒަމާނީ ވަސީލަތްތަކަށް އަހުލުވެރިވެ ތިބެ މި ކޮމިޝަނުގެ
              މުވައްޒަފުން މަސައްކަތް ކުރުމަށް ހޯދައިދެވުނު ފުރުސަތެއްކަން
              އުފަލާއެކު ފާހަގަ ކުރަމެވެ.
              <br></br>
              ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ގިނަ މެންބަރުންނަކީ ކޮމިޝަނުގެ
              މެންބަރުކަމުގެ އިތުރުން ދިވެހި ދައުލަތުގެ މުހިންމު
              މަސްއޫލިއްޔަތުތައް އަދާކުރައްވާ ފަރާތްތަކަށް ވާއިރު އެބޭފުޅުންގެ
              މި ދެންނެވި މަސްއޫލިއްޔަތާއި ވާޖިބުތައް ފުރިހަމައަށް
              އަދާކުރައްވަމުން ކޮމިޝަނުގެ ބައްދަލުވުންތަކަށް ވަޑައިގަތުމަށް
              ބެހެއްޓެވި ފަރުވާތެރިކަން އަޅުގަނޑު އަބަދުވެސް ފާހަގަކުރަމެވެ.
              މީގެ އިތުރުން އެކިއެކި ކޮމިޓީތަކަށް ވަޑައިގެން އެ ކޮމިޓީތަކުގެ
              މަސައްކަތް ނިންމެވުމަށްޓަކައި ގިނަ ވަގުތުތަކެއް މެންބަރުން
              ހޭދަކުރައްވާފައިވާ ކަންވެސް އަޅުގަނޑު ފާހަގަ ކުރަމެވެ.
              <br></br>
              2021 ވަނަ އަހަރު ދޭދޭ ޤައުމުތަކާއި ބައިނަލް އަޤްވާމީ ޖަމިޢިއްޔާ
              ޖަމާޢަތްތަކުގެ އެހީގައި ގިނަ މަސައްކަތްތަކެއް ވަނީ ފެށިފައެވެ.
              އެގޮތުން ޔޫރަޕިއަން ޔުނިއަންއާއެކު ސަރކިޓް ކޯޓު މޮޑެލްގެ
              މަސައްކަތްތަކާ، ކޮމިޝަނުގެ ޤާނޫނުގައި ލާޒިމްކުރާ ގަވާއިދުތައް
              މުރާޖާ ކުރުމުގެ މަސައްކަތް އަދި ފަނޑިޔާރުންގެ މަސައްކަތުގައި
              ހޭދަވާ ވަގުތު ހޯދުމަށް ދިރާސީ މަސައްކަތެއް ފަށާފައިވެއެވެ.
              ކޮމިޝަނުގެ މުއާސަލާތީ ކަންކަން ޒަމާނީ ގޮތަކަށް ބައްޓަން
              ކުރުމަށްޓަކައި ޔޫއެންޑީޕީގެ އެހީގައި ކޮމިޝަނުގެ ކޮމިއުނިކޭޝަން
              ފްރޭމްވާރކް އެކުލަވާލުމުގެ މަސައްކަތްވެސް ފަށާފައިވެއެވެ.
              <br></br>
              ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ވާޖިބުތައް އަދާކުރުމުގައި،
              އެކިގޮތްގޮތުން ކޮމިޝަނަށް އެހީތެރިވެދެއްވި ދައުލަތުގެ އެންމެހައި
              އިދާރާތަކަށާއި ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ޢިއްޒަތްތެރި
              މެންބަރުންނާއި ހީވާގި މުވައްޒަފުންނަށާއި، އެންމެހައި ދިވެހި
              ރައްޔިތުންނަށް ނިހާޔަތަށް ޝުކުރު ދަންނަވަމެވެ.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#9C893D] bg-opacity-10">
        <div className="container p-6 mx-auto">
          <div className="max-w-6xl mx-auto mt-10 mb-10">
            <h2 className=" text-4xl font-waheed text-center  text-[#9C893D]  mb-10 ">
              ކޮމިޝަނުގެ މެންބަރުން
            </h2>

            <div className="flex flex-wrap justify-between items-align-center">
              <div className="w-64 text-center mx-auto mt-10">
                <img src="/annual-report-2021/members/Hisaan@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                  ކޮމިޝަނުގެ ރައީސް
                </h3>
                <p className="text-xl mt-2">އަލްއުސްތާޛާ ޙިސާން ޙުސައިން</p>
                <p className="text-sm opacity-80 mt-2">
                  ރައްޔިތުންގެ މަޖިލީހުގެ މެންބަރުންގެ ތެރެއިން އެ މަޖިލީހުން
                  ކަނޑައަޅާ މެންބަރު
                </p>
              </div>

              <div className="w-64 text-center mx-auto mt-10">
                <img src="/annual-report-2021/members/Masthoor@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                  ކޮމިޝަނުގެ ނައިބުރައީސް
                </h3>
                <p className="text-xl mt-2">އަލްއުސްތާޛު މަސްތޫރު ޙުސްނީ</p>
                <p className="text-sm opacity-80 mt-2">
                  ރައީސުލްޖުމްޙޫރިއްޔާގެ މެންބަރު
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-align-center">
              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Nasheed@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                  ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">ރައީސް މުޙައްމަދު ނަޝީދު</p>
                <p className="text-sm opacity-80 mt-2">
                ރައްޔިތުންގެ މަޖިލީހުގެ ރައީސް


                </p>
              </div>
              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Shujune@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">އަލްއުސްތާޛާ ޢާއިޝާ ޝުޖޫން މުޙައްމަދު
</p>
                <p className="text-sm opacity-80 mt-2">
                އުއްތަމަފަނޑިޔާރު ފިޔަވައި ސުޕްރީމްކޯޓުގައި ހިމެނޭ ފަނޑިޔާރުންގެ ތެރެއިން، އެކޯޓުން އިންތިޚާބު ކޮށްފައިވާ ފަނޑިޔާރު


                </p>
              </div>

              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Sameer@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">އަލްއުސްތާޛު ޢަލީ ސަމީރު
</p>
                <p className="text-sm opacity-80 mt-2">
                ހައިކޯޓުގައި ހިމެނޭ ފަނޑިޔާރުންގެ ތެރެއިން، އެ ކޯޓުން އިންތިޚާބު ކޮށްފައިވާ ފަނޑިޔާރު


                </p>
              </div>
              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Sareef@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">އަލްއުސްތާޛު ޢަލީ ޝަރީފް
</p>
                <p className="text-sm opacity-80 mt-2">
                ދަށުކޯޓުތަކުގެ ފަނޑިޔާރުންގެ ތެރެއިން އެ ކޯޓުތަކުން އިންތިޚާބު ކޮށްފައިވާ ފަނޑިޔާރު


                </p>
              </div>
              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Ummu@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">އަލްފާޟިލާ އާމިނަތު އުއްމުކުލްޘޫމް
</p>
                <p className="text-sm opacity-80 mt-2">
                ޢާންމުންގެ ތެރެއިން ރައްޔިތުންގެ މަޖިލިހުން ކަނޑައެޅި މެންބަރު


                </p>
              </div>
              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Naasih@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">އަލްފާޟިލް މުޙައްމަދު ނާޞިޙް
</p>
                <p className="text-sm opacity-80 mt-2">
                ސިވިލް ސަރވިސް ކޮމިޝަނުގެ ރައީސް


                </p>
              </div>

              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Riffath@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">އަލްއުސްތާޛު އިބްރާހީމް ރިފްޢަތު
</p>
                <p className="text-sm opacity-80 mt-2">
                ބަންޑާރަނައިބު
                </p>
              </div>
              <div className="w-60 text-center mx-auto mt-10 p-4">
                <img src="/annual-report-2021/members/Maaniu@4x.png" />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                ކޮމިޝަނުގެ މެންބަރު
                </h3>
                <p className="text-xl mt-2">އަލްއުސްތާޛު ޢަބްދުލްމާނިޢު ޙުސައިން
</p>
                <p className="text-sm opacity-80 mt-2">
                ދިވެހިރާއްޖޭގައި ޤާނޫނީ ވަކީލުކަން ކުރުމުގެ ހުއްދަލިބިފައިވާ ވަކީލުންގެ ތެރެއިން އެބައިމީހުން އިންތިޚާބުކުރި ޤާނޫނީ ވަކީލު


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container p-6 mx-auto">
          <div className="max-w-4xl mx-auto mt-20 mb-10">
            <h2 className=" font-waheed text-3xl text-center text-[#9C893D]  mb-10 ">
              ފަނޑިޔާރުންގެ ވަޒީފާއާގުޅޭ ތަފާސްހިސާބު
            </h2>
            <div className="flex flex-wrap mb-8 border-b pb-5 justify-between md:flex ">
              <div className="w-32 mt-10">
                <h2 className="text-8xl font-butler  text-[#9C893D] ">183</h2>
                <p className="text-gray-600">
                  އަހަރު ނިމުނު އިރު ތިބި ފަނޑިޔާރުގެ ޢަދަދު
                </p>
              </div>
              <div className="w-32 mt-10">
                <h2 className="text-8xl font-butler  text-[#9C893D] ">10</h2>
                <p className="text-gray-600">
                  އަލަށް ޢައްޔަނުކުރެވުނު ފަނޑިޔާރުންގެ އަދަދު
                </p>
              </div>
              <div className="w-32 mt-10">
                <h2 className="text-8xl font-butler  text-[#9C893D] ">13</h2>
                <p className="text-gray-600">
                  ރިޓަޔަރ ކުރެވުނު ފަނޑިޔާރުންގެ ޢަދަދު
                </p>
              </div>
              <div className="w-32 mt-10">
                <h2 className="text-8xl font-butler  text-[#9C893D] ">6</h2>
                <p className="text-gray-600">
                  އެއް ކޯޓުން އެނެއް ކޯޓަށް ބަދަލު ކުރެވުނު ފަނޑިޔާރުންގެ ޢަދަދ
                </p>
              </div>
            </div>
            <div className="max-w-2xl mx-auto mt-9">
              <Bar data={malefemaleJudges} width={250} height={200} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-90 overflow-hidden">
        <div className="container p-6 mx-auto">
          <div className="max-w-xl mx-auto mt-10 mb-10">
            <h2 className="  font-waheed text-3xl text-center text-[#9C893D]  mb-10 ">
              ރިޓަޔަރ ކުރެވުނު ފަނޑިޔާރުން
            </h2>
            <div className="max-w-xl ">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[EffectCards, Pagination]}
                className="mySwiper-people"
              >
                {retiredJudges.map((judge, index) => (
                  <SwiperSlide key={index}>
                    <RetiredCard
                      name={judge.name}
                      atoll={judge.atoll}
                      image={judge.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 overflow-hidden">
        <div className="container p-6 mx-auto">
          <div className="max-w-xl mx-auto mt-10 mb-10">
            <h2 className="  font-waheed text-3xl text-center text-[#9C893D]  mb-10 ">
              އަލަށް ޢައްޔަނުކުރެވުނު ފަނޑިޔާރުން
            </h2>
            <div className="max-w-xl ">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[EffectCards, Pagination]}
                className="mySwiper-newpeople"
              >
                {newJudges.map((judge, index) => (
                  <SwiperSlide key={index}>
                    <NewJudgeCard
                      name={judge.name}
                      atoll={judge.atoll}
                      image={judge.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container p-6 mx-auto">
          <div className="max-w-4xl mx-auto mt-20 mb-10">
            <h2 className=" font-waheed text-3xl text-center text-[#9C893D]  mb-10 ">
              ކޮމިޝަނުން ބެލި ޝަކުވާތައް
            </h2>
            <div className="flex flex-wrap mb-8 border-b pb-5 justify-between md:flex ">
              <div className="w-32 mt-10">
                <h2 className="text-8xl font-butler  text-[#9C893D] ">404</h2>
                <p className="text-gray-600 ">ޝަކުވާ ހުޝަހެޅުނު އަދަދު</p>
              </div>
              <div className="w-32 mt-10">
                <h2 className="text-8xl font-butler  text-[#9C893D] ">88</h2>
                <p className="text-gray-600">ބެލި ޝަކުވާގެ އަދަދު</p>
              </div>
              <div className="w-32 mt-10">
                <h2 className="text-8xl font-butler  text-[#9C893D] ">33</h2>
                <p className="text-gray-600">ނިމުނު މައްސަލައިގެ އަދަދު</p>
              </div>
            </div>
            <div className="max-w-xl mx-auto mt-9">
              <p className="text-[#3C6686] font-waheed text-lg mb-5 text-center">
                ޝަކުވާ ހުށަހެޅުނު އަދަދު
              </p>
              <Bar data={shakuvaaHushahelhunu} width={400} height={300} />
            </div>
            <div className="max-w-xl mx-auto mt-9 bg-gray-100 p-5">
              <p className="text-[#3C6686] font-waheed text-lg mb-5 text-center">
                ކޮމިޝަނުން ބެލި ޝަކުވާގެ ތަފާސް ހިސާބު
              </p>
              <Bar data={beliShakuvaa} width={400} height={300} />
            </div>

            <div className="max-w-xl mx-auto mt-9">
              <p className="text-[#3C6686] font-waheed text-lg mb-5 text-center">
                2021 ވަނަ އަހަރު ނިމުނު މައްސަލަތަކުގެ ތަފާސް ހިސާބު
              </p>
              <Doughnut data={nimunuMassala} width={400} height={300} />
            </div>

            <div className="max-w-4xl mx-auto mt-9 bg-gray-100 p-7">
              <p className="text-[#3C6686] font-waheed text-lg  text-center ">
                މައްސަލަ ބެލުމާމެދު ގޮތެއް ނިންމާ ކޮމިޓީ
              </p>
              <div className="flex flex-wrap mb-8 border-b pb-5 justify-between md:flex ">
                <div className="w-32 mt-10">
                  <h2 className="text-6xl font-butler  text-[#3C6686] ">437</h2>
                  <p className="text-gray-600">
                    ދިރާސާކުރެވުނު މައްސަލައިގެ އަދަދު
                  </p>
                </div>
                <div className="w-32 mt-10">
                  <h2 className="text-6xl font-butler  text-[#5590A5] ">374</h2>
                  <p className="text-gray-600">ތަހުގީގު ކުރަން ނުފެންނަ</p>
                </div>
                <div className="w-32 mt-10">
                  <h2 className="text-6xl font-butler  text-[#D3C27F] ">21</h2>
                  <p className="text-gray-600">ތަހުގީގު ކުރަން ފެންނަ</p>
                </div>
                <div className="w-32 mt-10">
                  <h2 className="text-6xl font-butler  text-[#7FA282] ">42</h2>

                  <p className="text-gray-600">ދިރާސާކުރަމުންދާ މައްސަލަ</p>
                </div>
              </div>
              <div className="max-w-xl mx-auto">
                <Doughnut data={mgnc} width={400} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9C893D] bg-opacity-10">
        <div className="container p-6 mx-auto">
          <div className="max-w-6xl mx-auto mt-10 mb-10">
            <h2 className=" text-4xl font-waheed text-center  text-[#9C893D]  mb-10 ">
              10 އަހަރުގެ ޚިދުމަތަށް ހަނދާނީ ފިލާ ލިބުނު މުވައްޒަފުން
            </h2>

            <div className="flex flex-wrap justify-between items-align-center">
              <div className="w-52 text-center mx-auto mt-10 ">
                <img
                  className="border-4 border-[#3C6686] rounded-full"
                  src="/annual-report-2021/muvazzafun/1_2.png"
                />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                  އާމިނަތު ޝުރުފަތު އާދަމް{" "}
                </h3>

                <p className="text-sm opacity-80 mt-2">
                  އެސިސްޓެންޓް ޑިރެކްޓަރ ހިއުމަން ރިސޯސް
                </p>
              </div>
              <div className="w-52 text-center mx-auto mt-10">
                <img
                  className="border-4 border-[#3C6686] rounded-full"
                  src="/annual-report-2021/muvazzafun/2_2.png"
                />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                  ސިފާނާ މޫސާ{" "}
                </h3>

                <p className="text-sm opacity-80 mt-2">
                  އެޑްމިނިސްޓްރޭޓިވް އޮފިސަރ
                </p>
              </div>
              <div className="w-52 text-center mx-auto mt-10">
                <img
                  className="border-4 border-[#3C6686] rounded-full"
                  src="/annual-report-2021/muvazzafun/3_2.png"
                />
                <h3 className="font-waheed text-lg text-[#3C6686] mt-4">
                  މަރްޔަމް ޝިރުފާ{" "}
                </h3>

                <p className="text-sm opacity-80 mt-2">
                  އެޑްމިނިސްޓްރޭޓިވް އޮފިސަރ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
                  
      <div className="">
        <div className="container p-6 mx-auto">
          <div className="max-w-6xl mx-auto mt-10 mb-10">
            <h2 className=" text-4xl font-waheed text-center  text-[#9C893D]  mb-10 ">
              ކޮމިޝަނުގެ ބަޖެޓް
            </h2>
            <div className="flex flex-wrap mb-8 border-b pb-5 justify-between md:flex ">
              <div className="w-full md:w-1/2 mt-10">
                <h2 className="text-6xl font-butler  text-[#9C893D] ">
                  <span className="text-xl">MVR</span>21,124,830
                </h2>
                <p className="text-gray-600 w-3/4">
                  2021 ވަނަ އަހަރަށް ލަފާކޮށް މިނިސްޓްރީ އޮފް ފިނޭންސް އެންޑް
                  ޓްރެޜަރީއަށް ހުށަހެޅި ބަޖެޓް
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-10">
                <h2 className="text-6xl font-butler  text-[#9C893D] ">
                  <span className="text-xl">MVR</span>18,124,830
                </h2>
                <p className="text-gray-600 w-3/4">
                  2021 ވަނަ އަހަރަށް ރައްޔިތުންގެ މަޖިލީހުން ފާސްކުރި ބަޖެޓް
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="max-w-xl mx-auto">
                <Doughnut
                  data={budget}
                  options={{
                    plugins: {
                      datalabels: {
                        display: false,
                      },
                      legend: {
                        display: false,

                        labels: {
                          display: false,
                          font: {
                            family: "mv_waheedregular", // Add your font here to change the font of your legend label
                          },
                        },
                        tooltip: {
                          bodyFont: {
                            family: "Montserrat", // Add your font here to change the font of your tooltip body
                          },
                          titleFont: {
                            family: "Montserrat", // Add your font here to change the font of your tooltip title
                          },
                        },
                      },
                    },
                  }}
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex max-w-3xl mx-auto flex-wrap mb-8 pb-5 justify-between md:flex ">
                <div className=" mt-10  p-5 bg-gray-50 rounded w-full md:w-1/3  border-l ">
                  <h2 className="text-3xl font-butler  text-[#396487] ">
                    <span className="text-sm">MVR</span>8,828,905.00
                  </h2>
                  <p className="text-gray-600 w-32">
                    މުވައްޒަފުންނަށް ހިނގާ ޚަރަދު
                  </p>
                </div>

                <div className=" mt-10 p-5 bg-gray-50 w-full md:w-1/3  border-l ">
                  <h2 className="text-3xl font-butler  text-[#5590A5] ">
                    <span className="text-sm">MVR</span>4,893,525.22
                  </h2>
                  <p className="text-gray-600 w-32">
                    އޮފީސް ހިންގުމަށް ބޭނުންވާ ހަރުމުދާ ހޯދުމަށް ކުރާ ޚަރަދު{" "}
                  </p>
                </div>

                <div className=" mt-10 p-5 bg-gray-50 w-full md:w-1/3  border-l ">
                  <h2 className="text-3xl font-butler  text-[#D4C27E] ">
                    <span className="text-sm">MVR</span>3,126,990.17
                  </h2>
                  <p className="text-gray-600 w-32">
                    ޚަރަދު ނުކުރެވި ބާކީ ހުރި ޖުމްލަ ޢަދަދު
                  </p>
                </div>

                <div className=" mt-10  p-5 bg-gray-50 w-full md:w-1/3  border-l">
                  <h2 className="text-3xl font-butler  text-[#7FA283] ">
                    <span className="text-sm">MVR</span>520,777.99
                  </h2>
                  <p className="text-gray-600 w-32">
                    އޮފީސް ހިންގުމަށް ބޭނުންވާ ހަރުމުދާ ހޯދުމަށް ކުރާ ޚަރަދު
                  </p>
                </div>

                <div className=" mt-10 p-5 bg-gray-50 w-full md:w-1/3  border-l ">
                  <h2 className="text-3xl font-butler  text-[#BDE0DA] ">
                    <span className="text-sm">MVR</span>299,542.00
                  </h2>
                  <p className="text-gray-600 w-32">
                    ޕެންޝަނާއި، މުސްކުޅިކުރައްވާ މުވައްޒަފުންނަށާއި އަދި ވަކި
                    ޙިދުމަތަކަށް ނޫން ގޮތުން ދޭ ފައިސާ
                  </p>
                </div>

                <div className=" mt-10 p-5 bg-gray-50 w-full md:w-1/3  border-l ">
                  <h2 className="text-3xl font-butler  text-[#D3A784] ">
                    <span className="text-sm">MVR</span>203,239.45
                  </h2>
                  <p className="text-gray-600 w-32">
                    މަރާމާތު ކުރުމާއި ބެލެހެއްޓުމުގެ ޚަރަދު
                  </p>
                </div>

                <div className=" mt-10  p-5 bg-gray-50 w-full md:w-1/3  border-l ">
                  <h2 className="text-3xl font-butler  text-[#7D95A2] ">
                    <span className="text-sm">MVR</span>141,052.17
                  </h2>
                  <p className="text-gray-600 w-32">
                    އޮފީސް ހިންގުމުގެ ބޭނުމަށް ހޯދާ ތަކެތީގެ އަގު
                  </p>
                </div>

                <div className=" mt-10 p-5 bg-gray-50 w-full md:w-1/3  border-l ">
                  <h2 className="text-3xl font-butler  text-[#D28489] ">
                    <span className="text-sm">MVR</span>94،058.00
                  </h2>
                  <p className="text-gray-600 w-32">
                    ދަތުރުފަތުރު ކުރުމުގެ ޚަރަދު
                  </p>
                </div>

                <div className=" mt-10 p-5 bg-gray-50 w-full md:w-1/3 border-l ">
                  <h2 className="text-3xl font-butler  text-[#AF87BC] ">
                    <span className="text-sm">MVR</span>16،740.00
                  </h2>
                  <p className="text-gray-600 w-32">
                    ތަމްރީން ކުރުމަށް ކުރެވޭ ޚަރަދު{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="bg-gray-50">
<div className="container p-6 mx-auto mb-20">
        <div className="max-w-2xl mx-auto mt-10 mb-10">
            <h2 className=" text-4xl font-waheed text-center  text-[#9C893D]  mb-10 ">
            ކޮމިޝަނަށް ކުރިމަތިވި ގޮންޖެހުންތައް
            </h2>
                  
      <ol className="relative border-r border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 mr-4">
          <div className="absolute w-3 h-3 bg-[#9C893D] rounded-full -right-1.5 border border-white" />
          <time className="mb-1  font-normal leading-none text-[#9C893D] text-2xl font-butler" >1</time>
          
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            
          މެޖިސްޓްރޭޓް ކޯޓުތަކުގެ ތެރެއިން މެޖިސްޓްރޭޓުން ނެތް ކޯޓުތަކަށް މެޖިސްޓްރޭޓުން ހޯދުމަށް އެކި ފަހަރު މަތިން އިޢުލާން ކޮށްވެސް ނިސްބަތުން އާބާދީ މަދު ރަށްރަށުގެ މެޖިސްޓްރޭޓްކަމަށް ކުރިމަތިލާ ފަރާތްތައް މަދުވުމުގެ ސަބަބުން އެރަށްތަކަށް މެޖިސްޓްރޭޓުން ޢައްޔަނު ކުރުމަށް ދަތިތައް ކުރިމަތިވާކަން ފާހަގަ ކުރަމެވެ.
          </p>
        </li>

        <li className="mb-10 mr-4">
          <div className="absolute w-3 h-3 bg-[#9C893D] rounded-full -right-1.5 border border-white" />
          <time className="mb-1  font-normal leading-none text-[#9C893D] text-2xl font-butler" >2</time>
          
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            
          މުވައްޒަފުން ތަމްރީން ކުރުމަށްޓަކައި ޕްރޮފެޝަނަލް ޑިވެލޮޕްމަންޓް އަށް ބޭނުންވާ ޙަރަކާތްތައް ހިންގުމަކީ، ކޮމިޝަނުގެ މަސައްކަތްތައް ހަރުދަނާކުރުމަށް ނުހަނު ބޭނުންވެފައިވާ ކަމެކެވެ. ނަމަވެސް އެކަން ކުރިއަށް ގެންދިއުމަށް ފުރިހަމަ ކުރަންޖެހޭ ވަށައިގެންވާ ކަންކަން ފުރިހަމަކުރުމަށް ދަތިތައް ހުރުމުން އެފަދަ ޕްރޮގްރާމްތައް 2020 ވަނަ އަހަރުވެސް ހިންގާފައި ނުވެއެވެ          </p>
        </li>

        <li className="mb-10 mr-4">
          <div className="absolute w-3 h-3 bg-[#9C893D] rounded-full -right-1.5 border border-white" />
          <time className="mb-1  font-normal leading-none text-[#9C893D] text-2xl font-butler" >3</time>
          
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            
          ފަނޑިޔާރުންގެ މަސައްކަތުގެ ފެންވަރު ވަޒަންކުރުމުގެ ޢަމަލީ މަސައްކަތް ފެށުމަށް، ބޭނުންވާ ފަންނީ އެހީތެރިންނާއި އިވެލުއޭޓަރުންނާއި އެ މަސައްކަތަށް ބޭނުންވާ ޤާނޫނީ ހުނަރު ހުރި، ފަންނީ ޤާބީލު މީހުން ލިބުމުގައި ދަތިތަކާ ކުރިމަތިވިއެވެ.          </p>
        </li>

        <li className="mb-10 mr-4">
          <div className="absolute w-3 h-3 bg-[#9C893D] rounded-full -right-1.5 border border-white" />
          <time className="mb-1  font-normal leading-none text-[#9C893D] text-2xl font-butler" >4</time>
          
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            
          ކޮވިޑްގެ ޙާލަތާއި ގުޅިގެން ދަތުރުފަތުރު ކުރުމުގައި ހުރި ހުރަސްތަކާގުޅިގެން ބޭރުގެ ކަމާބެހޭ ފަންނީ މީހުން ހޯދުމާއި ކޯޓުތައް އަދި ފަނޑިޔާރުން މަސައްކަތްތައް ކުރަމުންދާގޮތް ގާތުން ބެލުމުގައި ހުރަސްތައް ކުރިމަތިވިއެވެ. </p>        </li>
      </ol>
      </div>
                  </div>
</div>
        
        <div className="w-full grayscale">
          
           <img src="/annual-report-2021/JSC.jpg">
           </img>
        </div>
        <div className="mx-auto text-center  bg-gray-200 p-9">
        <a href="/annual-report-2021/Annual-report-2021.pdf" className="font-butler underline text-2xl text-[#9C893D]">Download Full Report</a>
        </div>
      </div>
      <div className="bg-black p-9 text-center">
        <a className="w-14 mx-auto" href="https://jsc.gov.mv">
        <div className="w-14 mx-auto mb-5">
          <img src="/annual-report-2021/Logo2.svg"></img>
        </div>

        </a>
        
        <p className="font-butler text-center text-gray-400  ltr">
          © Judicial Service Commission 2022
        </p>
      </div>
    </div>
  );
}



export async function getStaticProps() {
  return {
    props: {
     
      pageHeader: {
        title: "Annual Report 2021 | Judicial Service Commisiion",
        metas: [
          {
            property: "og:title",
            content: `Annual Report 2021 | Judicial Service Commisiion`,
          },
          {
            property: "og:image",
            content: `https://jsc.gov.mv/annual-report-2021/OG.png`,
          },
          {
            property: "og:type",
            content: `article`,
          },

          {
            name: "twitter:title",
            content: `Annual Report 2021 | Judicial Service Commisiion`,
          },
          {
            name: "twitter:image:src",
            content: `https://jsc.gov.mv/annual-report-2021/OG.png`,
          },
          {
            name: "twitter:card",
            content: `summary_large_image`,
          },
        ],
      },
    },
  };
}