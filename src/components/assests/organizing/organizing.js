import anna from "./anna_lisa_gentile.png";
import kouji from "./kouji_kozaki.png";
import ken from "./ken_fukuda.png";
import maribel from "./maribel_acosta.png";
import sabrina from "./sabrina_kirrane.jpg";
import daniel from "./daniel_garijo.png";
import angelo from "./angelo_salatino.png";
import blerina from "./blerina_sphaiu.png";
import juan from "./juan_sequeda.png";
import natasha from "./natasha_noy.png";
import abraham from "./abraham_bernstein.png";
import tetsuya from "./tetsuya_mihara.jpg";
import genet from "./genet_asefa_gesese .png";
import cogan from "./cogan_shimizu.png";
import jenifer from "./jenifer_tabita_ciuciu_kiss.png";
import ikki from "./ohmukai_ikki.jpg";
import hideaki from "./hideaki_takeda.png";
import andrea from "./andrea_nuzzolese.png";
import sebastian from "./sebastian_ferrada.png";
import thibaut from "./thibaut_soulard.png";
import oktie from "./oktie_hassanzadeh.png";
import shenghui from "./shenghui_wang.png";
import irene from "./irene_celino.png";
import mayank from "./mayank_kejriwal.png";
import neha from "./neha_keshan.png";
import ray from "./ray_atarashi.png";
import ines from "./akaichi_ines.png"
import cheng from "./Cheng_Gong.jpg";
import armando from "./stellato_armando.jpg";
import sun from "./Sun_Zequn.jpg"
import nandana from "./nandana.jpeg"

const organizers = {
  "General Chair": [
    {
      name: 'Anna Lisa Gentile',
      img: anna,
      institution: 'IBM Research',
      country: 'US',
    },
  ],
  "Local Chair": [
    {
      name: 'Kouji Kozaki',
      img: kouji,
      institution: 'Osaka Electro-Communication University',
      country: 'Japan',
    },
  ],
  "Local Co-Chair": [
    {
      name: 'Ken Fukuda',
      img: ken,
      institution: 'National Institute of Advanced Industrial Science and Technology (AIST)',
      country: 'Japan',
    },
    {
      name: 'Ikki Ohmukai',
      img: ikki,
      institution: 'The University of Tokyo',
      country: 'Japan',
    },
    {
      name: 'Hideaki Takeda',
      img: hideaki,
      institution: 'National Institute of Informatics',
      country: 'Japan',
    },
  ],
  "Research Track Chair": [
    {
      name: 'Daniel Garijo',
      img: daniel,
      institution: 'Universidad Politécnica de Madrid',
      country: 'Spain',
    },
    {
      name: 'Sabrina Kirrane',
      img: sabrina,
      institution: 'Vienna University of Economics and Business',
      country: 'Austria',
    },
  ],
  "In-Use Track Chair": [
    {
      name: 'Maribel Acosta',
      img: maribel,
      institution: 'Technical University of Munich',
      country: 'Germany',
    },
    {
      name: 'Andrea Giovanni Nuzzolese',
      img: andrea,
      institution: 'CNR - Institute of Cognitive Sciences and Technologies',
      country: 'Italy',
    },
  ],
  "Resource Track Chair": [
    {
      name: 'Cogan Shimizu',
      img: cogan,
      institution: 'Wright State University',
      country: 'US',
    },
    {
      name: 'Angelo Salatino',
      img: angelo,
      institution: 'KMi, The Open University',
      country: 'United Kingdom',
    },
  ],
  "Workshop and Tutorials Chair": [
    {
      name: 'Blerina Spahiu',
      img: blerina,
      institution: 'Università di Milano-Bicocca',
      country: 'Italy',
    },
    {
      name: 'Juan Sequeda',
      img: juan,
      institution: 'data.world',
      country: 'US',
    },
  ],
  "Industry Track Chair": [
    {
      name: 'Oktie Hassanzadeh',
      img: oktie,
      institution: 'IBM Research',
      country: 'US',
    },
    {
      name: 'Irene Celino',
      img: irene,
      institution: 'Cefriel',
      country: 'Italy',
    },
  ],
  "Doctoral Consortium Chair": [
    {
      name: 'Natasha Noy',
      img: natasha,
      institution: 'Google',
      country: 'US',
    },
    {
      name: 'Abraham Bernstein',
      img: abraham,
      institution: 'University of Zurich',
      country: 'Switzerland',
    },
  ],
  "Poster, Demo & Lightning Talk Chair": [
    {
      name: 'Shenghui Wang',
      img: shenghui,
      institution: 'Universiteit Twente',
      country: 'Netherlands',
    },
    {
      name: 'Gong Cheng',
      img: cheng,
      institution: 'Nanjing University',
      country: 'China',
    },
  ],
  "Semantic Web Challenge Chair": [
    {
      name: 'Mayank Kejriwal',
      img: mayank,
      institution: 'University of Southern California',
      country: 'US',
    },
  ],
  "Job Fair Chair": [
    {
      name: 'Nandana Mihindukulasooriya',
      img: nandana,
      institution: 'IBM Research',
      country: 'US',
    }
  ],
  "Sponsorship Chair": [
    {
      name: 'Ray Atarashi',
      img: ray,
      institution: 'Internet Initiative Japan',
      country: 'Japan',
    },
    {
      name: 'Neha Keshan',
      img: neha,
      institution: 'Rensselaer Polytechnic Institute',
      country: 'US',
    },
    {
      name: 'Armando Stellato',
      img: armando,
      institution: 'University of Rome Tor Vergata',
      country: 'Italy',
    },
  ],
  "Proceedings & Metadata Chair": [
    {
      name: 'Sebastián Ferrada',
      img: sebastian,
      institution: 'University of Chile',
      country: 'Chile',
    },
    {
      name: 'Thibaut Soulard',
      img: thibaut,
      institution: 'University Paris-Saclay',
      country: 'France',
    },
  ],
  "Students Grants and Activities Chair": [
    {
      name: 'Atsuko Yamaguchi',
      img: '', // No image available
      institution: 'Tokyo City University',
      country: 'Japan',
    },
    {
      name: 'Ines Akaichi',
      img: ines,
      institution: 'Vienna University of Economics and Business',
      country: 'Austria',
    },
  ],
  "Web Presence & Publicity Chair": [
    {
      name: 'Jenifer Tabita Ciuciu-Kiss',
      img: jenifer,
      institution: 'Universidad Politécnica de Madrid',
      country: 'Spain',
    },
    {
      name: 'Tetsuya Mihara',
      img: tetsuya,
      institution: 'University of Tsukuba',
      country: 'Japan',
    },
    {
      name: 'Genet-Asefa Gesese',
      img: genet,
      institution: 'FIZ Karlsruhe, Karlsruhe Institute of Technology (KIT)',
      country: 'Germany',
    },
    {
      name: 'Zequn Sun',
      img: sun,
      institution: 'Nanjing University',
      country: 'China',
    },
  ],
};

export default organizers;
