import image1 from "../Resource/property.jpg";
import image2 from "../Resource/property2.jpg";
import image3 from "../Resource/property3.webp";
import image4 from "../Resource/property4.jpg";
import image5 from "../Resource/property5.jpg";
import image6 from "../Resource/property6.jpg";
import image7 from "../Resource/property7.webp";
import image8 from "../Resource/property8.webp";
import image9 from "../Resource/property9.jpg";
import image10 from "../Resource/property10.jpg";
import image11 from "../Resource/property11.jpg";
import image12 from "../Resource/property12.webp";
import image13 from "../Resource/property13.jpg";
import image14 from "../Resource/property14.jpg";
import image15 from "../Resource/property15.jpg";
import image16 from "../Resource/property16.jpg";
import image17 from "../Resource/property17.webp";
import image18 from "../Resource/property18.jpg";
import image19 from "../Resource/property19.webp";
import image20 from "../Resource/property20.jpg";
import image21 from "../Resource/property21.jpg";
import image22 from "../Resource/property22.jpg";
import image23 from "../Resource/property23.jpg";
import image25 from "../Resource/property25.jpg";
import image26 from "../Resource/property26.webp";
const details = [
  {
    id: 1,
    image: image1,
    category: "flat",
    address: "248 Hazelwood Ave, San Francisco, CA 94127",
    title: "San Fransisco",
    description: "flat",
    price: 499,
  },
  {
    id: 10,
    image: image10,
    category: "flat",
    address: "148 W 28TH NEW YORK NY 10001-6124 USA",
    title: "New York",
    description: "flat",
    price: 212,
  },
  {
    id: 11,
    image: image11,
    category: "flat",
    address: "Shop No.1, Rafeea Apartment, Saifee Park,marol, Andheri(e)",
    title: "India",
    description: "flat",
    price: 166,
  },
  {
    id: 12,
    image: image12,
    category: "flat",
    address: "36 W 32ND NEW YORK NY 10001-3800 USA",
    title: "New York",
    description: "flat",
    price: 582,
  },
  {
    id: 13,
    image: image13,
    category: "flat",
    address:
      "(415) 931-1681 794 Mcallister St San Francisco, California(CA), 94102",
    title: "San Fransisco",
    description: "flat",
    price: 1998,
  },
  {
    id: 2,
    image: image2,
    category: "luxary",
    title: "New York",
    address: "7526 Beach Court Fairport, NY 14450",
    description: "",
    price: 450,
  },
  {
    id: 4,
    image: image4,
    category: "luxary",
    title: "India",
    description: "",
    address:
      "12, 5th Floor, Shiv Krupa Commercial Com, Nav Pada, Off Gokhale Road, Thane (west)",
    price: 299,
  },
  {
    id: 7,
    image: image7,
    category: "luxary",
    title: "San Fransisco",
    description: "",
    address: "1398 Valencia St San Francisco, California(CA), 94110",
    price: 99,
  },
  {
    id: 8,
    image: image8,
    category: "luxary",
    title: "India",
    description: "",
    address: "3-6-63/6, Next To Skyline Theatre, Basheerbagh",
    price: 1499,
  },
  {
    id: 9,
    image: image9,
    category: "luxary",
    title: "New York",
    description: "",
    address: "40 Elm Drive Astoria, NY 11105",
    price: 1499,
  },
  {
    id: 3,
    image: image3,
    category: "lake-view",
    title: "India",
    address: "74, Adarsh Industrial Estate, Chakudia Mahadev Road, Rakhial",
    description: "",
    price: 888,
  },
  {
    id: 22,
    image: image22,
    category: "lake-view",
    title: "San Fransisco",
    address: "1398 Valencia St San Francisco, California(CA), 94110",
    description: "",
    price: 999,
  },
  {
    id: 23,
    image: image23,
    category: "lake-view",
    title: "New York",
    address: "533 Dunbar Ave. Bronx, NY 10452",
    description: "lake-view",
    price: 666,
  },
  {
    id: 24,
    image: image25,
    category: "lake-view",
    title: "New York",
    address: "449 Bayport St. Rego Park, NY 11374",
    description: "lake-view",
    price: 258,
  },
  {
    id: 26,
    image: image26,
    category: "lake-view",
    title: "San Fransisco",
    address: "1398 Valencia St San Francisco, California(CA), 94110",
    description: "lake-view",
    price: 1598,
  },
  {
    id: 5,
    image: image5,
    category: "camping",
    title: "India",
    description: "",
    address: "50, 1st Floor, Armenian Street",
    price: 1099,
  },
  {
    id: 17,
    image: image17,
    category: "camping",
    title: "India",
    description: "",
    address: "College Street, Raja Rammohan Roy Srn",
    price: 1829,
  },
  {
    id: 16,
    image: image16,
    category: "camping",
    title: "San Fransisco",
    description: "",
    address: "66 Ceres St San Francisco, California(CA), 94124",
    price: 1253,
  },
  {
    id: 14,
    image: image14,
    category: "camping",
    title: "San Fransisco",
    description: "camping",
    address: "794 Mcallister St San Francisco, California(CA), 94102",
    price: 1999,
  },
  {
    id: 15,
    image: image15,
    category: "camping",
    title: "New York",
    description: "",
    address: "408 Mill Pond Street Endicott, NY 13760",
    price: 1999,
  },
  {
    id: 6,
    image: image6,
    title: "San Fransisco",
    category: "a-frame",
    description: "a-frame",
    address: "68 Dakota St San Francisco, California(CA), 94107",
    price: 1000,
  },
  {
    id: 18,
    image: image18,
    title: "San Fransisco",
    category: "a-frame",
    description: "a-frame",
    address: "San Francisco, California(CA), 94133",
    price: 999,
  },
  {
    id: 19,
    image: image19,
    title: "New York",
    category: "a-frame",
    description: "a-frame",
    address: "408 Mill Pond Street Endicott, NY 13760",
    price: 599,
  },
  {
    id: 20,
    image: image20,
    title: "New York",
    category: "a-frame",
    description: "",
    address: "533 Dunbar Ave. Bronx, NY 10452",
    price: 15,
  },
  {
    id: 21,
    image: image21,
    title: "New York",
    category: "a-frame",
    description: "",
    address: "29 Beacon St. Brooklyn, NY 11201",
    price: 1029,
  },
];

export default details;
