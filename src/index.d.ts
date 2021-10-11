declare module "*.scss" {
    const styles: {[className: string]: string};
    export default styles;
}

declare module "*.gif" {
    const image: string;
    export default image;
}