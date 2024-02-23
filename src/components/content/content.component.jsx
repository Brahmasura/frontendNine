import style from "./content.module.scss";
import one from "../../assets/image-retro-pcs.jpg";
import two from "../../assets/image-top-laptops.jpg";
import three from "../../assets/image-gaming-growth.jpg";
import Feature from "../features/feature.component";

const Content = () => {
  const data = [
    {
      num: "01",
      title: "Reviving Retro PCs",
      disc: "What happens when old PCs are given modern upgrades?",
      image: one,
    },
    {
      num: "02",
      title: "Reviving Retro PCs",
      disc: "What happens when old PCs are given modern upgrades?",
      image: two,
    },
    {
      num: "03",
      title: "Reviving Retro PCs",
      disc: "What happens when old PCs are given modern upgrades?",
      image: three,
    },
  ];

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.first}></div>
        <div className={style.second}>
          <h1>New</h1>

            <h2>Hydrogen vs. Electric Cars</h2>
            <p>Will Hydrogen-fueled cars ever catch upto EVs? </p>
            <hr/>

            <h2>The Downside of AI artistry</h2>
            <p>What are possible adverse effect of on-demad AI generation?</p>
            <hr/>

            <h2>Is VC funding drying up?</h2>
            <p>Private funding by VC is down by 50%. We look at the what was the cause?</p>
            
        </div>
        <div className={style.third}>
          <p>The Bright Future of Web 3.0?</p>
        </div>
        <div className={style.fourth}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>read more</button>
        </div>
        <div className={style.fifth}>
          {data.map((item) => (
            <Feature key={item.num} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
