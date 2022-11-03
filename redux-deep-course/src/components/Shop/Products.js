import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Honorable",
    price: 1000,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Msard",
    price: 2000,
    description: "This is a 2nd product - amazing!",
  },
  {
    id: 3,
    title: "Revered",
    price: 3000,
    description: "This is a 3rd product - amazing!",
  },
  {
    id: 4,
    title: "Mrlisend",
    price: 4000,
    description: "This is a 4th product - amazing!",
  },
];
const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((el) => {
          return (
            <ProductItem
              key={el.id}
              id={el.id}
              title={el.title}
              price={el.price}
              description={el.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
