export type Package = {
  id: string;
  image: string;
  name: string;
  jobs: {
    name: string;
    qty: number;
    additional?: string;
  }[];
};

export const PACKAGES: Package[] = [
  {
    id: "1",
    image: "/images/Image.png",
    name: "full production content create pack",
    jobs: [
      { name: "producer", qty: 1, additional: undefined },
      { name: "photographer", qty: 1, additional: undefined },
      { name: "retoucher and more", qty: 1, additional: undefined },
    ],
  },
  {
    id: "2",
    image: "/images/Image.png",
    name: "4-month social media",
    jobs: [
      {
        name: "photographer",
        qty: 1,
        additional: "photo enhancement included",
      },
    ],
  },
  {
    id: "3",
    image: "/images/Image.png",
    name: "social media illustration",
    jobs: [{ name: "graphic designer", qty: 1, additional: undefined }],
  },
  {
    id: "4",
    image: "/images/Image.png",
    name: "Fashion billboard design",
    jobs: [
      { name: "graphic designer", qty: 1, additional: undefined },
      { name: "stylist", qty: 1, additional: undefined },
      { name: "retoucher", qty: 1, additional: undefined },
    ],
  },
];

export const ALL_PACKAGES: Package[] = [
  {
    id: "1",
    image: "/images/Image.png",
    name: "full production content create pack",
    jobs: [
      { name: "producer", qty: 1, additional: undefined },
      { name: "photographer", qty: 1, additional: undefined },
      { name: "retoucher and more", qty: 1, additional: undefined },
    ],
  },
  {
    id: "2",
    image: "/images/Image.png",
    name: "4-month social media",
    jobs: [
      {
        name: "photographer",
        qty: 1,
        additional: "photo enhancement included",
      },
    ],
  },
  {
    id: "3",
    image: "/images/Image.png",
    name: "social media illustration",
    jobs: [{ name: "graphic designer", qty: 1, additional: undefined }],
  },
  {
    id: "4",
    image: "/images/Image.png",
    name: "Fashion billboard design",
    jobs: [
      { name: "graphic designer", qty: 1, additional: undefined },
      { name: "stylist", qty: 1, additional: undefined },
      { name: "retoucher", qty: 1, additional: undefined },
    ],
  },
  {
    id: "5",
    image: "/images/Image.png",
    name: "Magazine design",
    jobs: [
      { name: "graphic designer", qty: 1, additional: undefined },
      { name: "stylist", qty: 1, additional: undefined },
      { name: "retoucher", qty: 1, additional: undefined },
    ],
  },
  {
    id: "6",
    image: "/images/Image.png",
    name: "3-month social media",
    jobs: [
      {
        name: "photographer",
        qty: 1,
        additional: "photo enhancement included",
      },
    ],
  },
  {
    id: "7",
    image: "/images/Image.png",
    name: "social media illustration",
    jobs: [{ name: "graphic designer", qty: 1, additional: undefined }],
  },
  {
    id: "8",
    image: "/images/Image.png",
    name: "5-month social media photos",
    jobs: [
      { name: "photographer", qty: 1, additional: undefined },
      { name: "content writer", qty: 1, additional: undefined },
      { name: "graphic designer", qty: 1, additional: undefined },
    ],
  },
  {
    id: "9",
    image: "/images/Image.png",
    name: "billboard design",
    jobs: [
      { name: "graphic designer", qty: 1, additional: undefined },
      { name: "stylist", qty: 1, additional: undefined },
      { name: "retoucher", qty: 1, additional: undefined },
    ],
  },
  {
    id: "10",
    image: "/images/Image.png",
    name: "3-month social media",
    jobs: [
      {
        name: "photographer",
        qty: 1,
        additional: "photo enhancement included",
      },
    ],
  },
  {
    id: "11",
    image: "/images/Image.png",
    name: "social media illustration",
    jobs: [{ name: "graphic designer", qty: 1, additional: undefined }],
  },
  {
    id: "12",
    image: "/images/Image.png",
    name: "3-month social media photos",
    jobs: [
      { name: "photographer", qty: 1, additional: undefined },
      { name: "content writer", qty: 1, additional: undefined },
      { name: "graphic designer", qty: 1, additional: undefined },
    ],
  },
  {
    id: "13",
    image: "/images/Image.png",
    name: "Hotel billboard design",
    jobs: [
      { name: "graphic designer", qty: 1, additional: undefined },
      { name: "stylist", qty: 1, additional: undefined },
      { name: "retoucher", qty: 1, additional: undefined },
    ],
  },
  {
    id: "14",
    image: "/images/Image.png",
    name: "3-month social media",
    jobs: [
      {
        name: "photographer",
        qty: 1,
        additional: "photo enhancement included",
      },
    ],
  },
  {
    id: "15",
    image: "/images/Image.png",
    name: "social media illustration",
    jobs: [{ name: "graphic designer", qty: 1, additional: undefined }],
  },
  {
    id: "16",
    image: "/images/Image.png",
    name: "3-month social media photos",
    jobs: [
      { name: "photographer", qty: 1, additional: undefined },
      { name: "content writer", qty: 1, additional: undefined },
      { name: "graphic designer", qty: 1, additional: undefined },
    ],
  },
];
