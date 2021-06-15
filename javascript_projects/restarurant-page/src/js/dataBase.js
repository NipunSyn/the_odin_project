import pasta from "../images/pasta.jpg";
import hamburger from "../images/hamburger.jpg";
import steak from "../images/steak.jpg";
import cake1 from "../images/cake1.jpg";
import cake2 from "../images/cake2.jpg";
import martini from "../images/martini.jpg";
import parfait from "../images/parfait.jpg";

export default () => {
  


  const dataBase = [
    {
      src: pasta,
      title: "Pasta Alla Norma",
      description:
        "A typical dish from the Sicilian city of Catania incorporating traditional Mediterranean produce, namely eggplant/aubergine",
    },
    {
      src: hamburger,
      title: "Meat and Buns",
      description:
        "Three tender, juicy patties between two fluffy buns fresh out of the oven, all coated in our mouth-watering special homemade sauce",
    },
    {
      src: steak,
      title: "Wagyu Tomahawk",
      description:
        "The term “Wagyu” mean Japanese Cow. Wagyu is celebrated for it’s heavy marbling and melt in your mouth texture.",
    },
    {
      src: cake1,
      title: "Triple Chocolate Cake",
      description:
        "Decadent. Fudgy. Sweet. Chocolate Cake has got to be the most craved recipe in the world.",
    },
    {
      src: cake2,
      title: "Chocolate Fudge Cake",
      description:
        "A soft and tender Chocolate Fudge Cake made with cocoa power and sour cream, covered in a rich and creamy chocolate buttercream.",
    },
    {
      src: martini,
      title: "Capon Martini",
      description:
        "We don’t just make drinks, we create perfect cocktails! And our special Capon Martini is definitely one",
    },
    {
      src: parfait,
      title: "Strawberry Parfait",
      description:
        "Creamy, non-fat Greek yogurt is topped with crunchy honey oat granola and a sweet strawberry compote.",
    },
  ];

  return dataBase;
};
