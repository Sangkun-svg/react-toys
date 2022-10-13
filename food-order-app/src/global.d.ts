declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}
//   출처: https://whales.tistory.com/101 [허도경, limewhale:티스토리]
declare module "*.png" {
  const value: any;
  export default value;
}
