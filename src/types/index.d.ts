type TextArray = string[];

type StringArray = string[];

type Image = {
  src: string;
  alt: string;
};

type Images = Image[];

type ShootDetails = {
  title: string;
  details: StringArray;
};

type BookingOption = {
  name: string;
  image: Image;
  shootDetails: ShootDetails[];
}