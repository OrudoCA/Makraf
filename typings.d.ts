declare module '*.svg' {
  const content: any;
  export default content;
}
declare module "*.module.css";
declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
};