import anna from "./gentile_annalisa.jpeg";
import kouji from "./Kouji_Kozaki.png";
import ken from "./Ken_Fukuda.jpg";
import maribel from "./Acosta_Maribel.jpg";
import sabrina from "./kirrane_sabrina.jpg";
import daniel from "./Garijo_Daniel.png";
import angelo from "./Salatino_Angelo.png";
import blerina from "./spahiu_blerina.jpeg";
import juan from "./Sequeda_Juan.jpg";
import natasha from "./Noy_Natasha.jpg";
import abraham from "./Abraham_Bernstein.jpeg";
import tetsuya from "./Mihara_Tetsuya.jpg";
import genet from "./genet_asefa_gesese.jpg";
import cogan from "./shimizu_cogan.jpg";
import jenifer from "./jenifer_tabita_ciuciu_kiss.jpg";

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
      img: '', // No image available
      institution: 'The University of Tokyo',
      country: 'Japan',
    },
    {
      name: 'Hideaki Takeda',
      img: '', // No image available
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
  "In-Use Application Track Chair": [
    {
      name: 'Maribel Acosta Deibe',
      img: maribel,
      institution: 'Ruhr-Universität Bochum',
      country: 'Germany',
    },
    {
      name: 'Andrea Giovanni Nuzzolese',
      img: '', // No image available
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
      img: '', // No image available
      institution: 'IBM Research',
      country: 'US',
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
      img: '', // No image available
      institution: 'Universiteit Twente',
      country: 'Netherlands',
    },
  ],
  "Semantic Web Challenge Chair": [
    {
      name: 'Pablo Mendez',
      img: '', // No image available
      institution: '',
      country: 'US',
    },
  ],
  "Sponsorship Chair": [
    {
      name: 'Ray Atarashi',
      img: '', // No image available
      institution: '',
      country: 'Japan',
    },
    {
      name: 'Neha Keshan',
      img: '', // No image available
      institution: '',
      country: 'US',
    },
  ],
  "Proceedings & Metadata Chair": [
    {
      name: 'Sebastian Ferrada',
      img: '', // No image available
      institution: 'University of Chile',
      country: 'Chile',
    },
    {
      name: 'Thibaut Soulard',
      img: '', // No image available
      institution: 'University Paris-Saclay',
      country: 'France',
    },
  ],
  "Student Grants Chair": [
    {
      name: 'Atsuko Yamaguchi',
      img: '', // No image available
      institution: '',
      country: 'Japan',
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
  ],
};

export default organizers;
